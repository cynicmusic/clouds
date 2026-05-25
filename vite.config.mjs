import fs from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'vite';

const LAB_PORT = 57170;

const STICKY_FILE = process.env.CLOUDS_STICKY_FILE
  ? path.resolve(process.env.CLOUDS_STICKY_FILE)
  : path.resolve('sticky.json');

const PRESETS_FILE = process.env.CLOUDS_PRESETS_FILE
  ? path.resolve(process.env.CLOUDS_PRESETS_FILE)
  : path.resolve('presets.json');

const CLOUD_PRESETS_FILE = process.env.CLOUDS_CLOUD_PRESETS_FILE
  ? path.resolve(process.env.CLOUDS_CLOUD_PRESETS_FILE)
  : path.resolve('cloud-presets.json');

async function readJson(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); }
  catch { return {}; }
}

async function writeJsonAtomic(file, map) {
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, `${JSON.stringify(map, null, 2)}\n`);
  await fs.rename(tmp, file);
}

async function readBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

let stickyQueue = Promise.resolve();
function writeSticky(map) {
  const snapshot = structuredClone(map);
  stickyQueue = stickyQueue.then(() => writeJsonAtomic(STICKY_FILE, snapshot));
  return stickyQueue;
}

function presetsPlugin() {
  return {
    name: 'clouds-fork-presets-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://127.0.0.1');
        if (!url.pathname.startsWith('/__iso-presets')) return next();
        try {
          if (req.method === 'GET' && url.pathname === '/__iso-presets') {
            return sendJson(res, 200, { presets: await readJson(PRESETS_FILE) });
          }
          if (req.method === 'POST' && url.pathname === '/__iso-presets') {
            const body = await readBody(req);
            const map = await readJson(PRESETS_FILE);
            map[String(body.slot)] = body.preset;
            await writeJsonAtomic(PRESETS_FILE, map);
            return sendJson(res, 200, { ok: true });
          }
          return sendJson(res, 404, { error: 'unknown presets endpoint' });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
    },
  };
}

function cloudPresetsPlugin() {
  return {
    name: 'clouds-fork-cloud-presets-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://127.0.0.1');
        if (!url.pathname.startsWith('/__cloud-presets')) return next();
        try {
          if (req.method === 'GET' && url.pathname === '/__cloud-presets') {
            return sendJson(res, 200, { presets: await readJson(CLOUD_PRESETS_FILE) });
          }
          if (req.method === 'POST' && url.pathname === '/__cloud-presets') {
            const body = await readBody(req);
            if (body.replace === true) {
              const map = body.presets && typeof body.presets === 'object' ? body.presets : {};
              await writeJsonAtomic(CLOUD_PRESETS_FILE, map);
              return sendJson(res, 200, { ok: true, presets: map });
            }
            const map = await readJson(CLOUD_PRESETS_FILE);
            map[String(body.slot)] = body.preset;
            await writeJsonAtomic(CLOUD_PRESETS_FILE, map);
            return sendJson(res, 200, { ok: true, presets: map });
          }
          return sendJson(res, 404, { error: 'unknown cloud presets endpoint' });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
    },
  };
}

function stickyPlugin() {
  return {
    name: 'clouds-fork-sticky-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://127.0.0.1');
        if (!url.pathname.startsWith('/__iso-sticky')) return next();
        try {
          if (req.method === 'GET' && url.pathname === '/__iso-sticky') {
            return sendJson(res, 200, { sticky: await readJson(STICKY_FILE) });
          }
          if (req.method === 'POST' && url.pathname === '/__iso-sticky/clear') {
            await writeSticky({});
            return sendJson(res, 200, { ok: true });
          }
          if (req.method === 'POST' && url.pathname === '/__iso-sticky') {
            const body = await readBody(req);
            const map = await readJson(STICKY_FILE);
            if (body.on === false) delete map[body.path];
            else map[body.path] = body.value;
            await writeSticky(map);
            return sendJson(res, 200, { ok: true, sticky: map });
          }
          return sendJson(res, 404, { error: 'unknown sticky endpoint' });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [stickyPlugin(), presetsPlugin(), cloudPresetsPlugin()],
  base: command === 'build' ? './' : '/',
  cacheDir: process.env.CLOUDS_CACHE_DIR
    ? path.resolve(process.env.CLOUDS_CACHE_DIR)
    : 'node_modules/.vite-clouds',
  server: { host: '127.0.0.1', port: LAB_PORT, strictPort: true },
  preview: { host: '127.0.0.1', port: LAB_PORT, strictPort: true },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: path.resolve('index.html'),
        water: path.resolve('workshop/water/index.html'),
      },
    },
  },
}));
