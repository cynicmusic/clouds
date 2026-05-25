// Client side of the sticky-param system. Talks to the Vite middleware in
// vite.config.js. Sticky params are pinned to disk and restored on reload;
// they survive reseed/randomize and are wiped by "default".
//
// Seed and FOV are sticky by default on a fresh project (no sticky.json yet)
// so the workflow "pin a good value, keep iterating" works out of the box.

const DEFAULT_STICKY = { 'voxel.seed': 1337, 'render.fov': 68 };
const STATIC_STICKY_KEY = 'isometric-island.sticky.v1';

// The sticky middleware only exists under the Vite dev server. In a static
// build (e.g. GitHub Pages) skip the fetch entirely — it would just 404 and
// spam the console; behaviour is identical (defaults, no persistence).
const DEV = import.meta.env.DEV;

export async function loadSticky() {
  if (!DEV) {
    try {
      const raw = window.localStorage?.getItem(STATIC_STICKY_KEY);
      return { ...DEFAULT_STICKY, ...(raw ? JSON.parse(raw) : {}) };
    } catch {
      return { ...DEFAULT_STICKY };
    }
  }
  try {
    const r = await fetch('/__iso-sticky');
    if (!r.ok) return { ...DEFAULT_STICKY };
    const { sticky } = await r.json();
    // Seed & FOV are ALWAYS sticky-by-default; file values (pins / extra
    // sticky params) override. "default" wipes the file → falls back here.
    return { ...DEFAULT_STICKY, ...(sticky || {}) };
  } catch {
    return { ...DEFAULT_STICKY };
  }
}

export async function setSticky(path, value, on) {
  if (!DEV) {
    try {
      const raw = window.localStorage?.getItem(STATIC_STICKY_KEY);
      const map = raw ? JSON.parse(raw) : {};
      if (on) map[path] = value;
      else delete map[path];
      window.localStorage?.setItem(STATIC_STICKY_KEY, JSON.stringify(map));
    } catch { /* ignore private mode */ }
    return;
  }
  if (!DEV) return;
  try {
    await fetch('/__iso-sticky', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, value, on }),
    });
  } catch { /* dev-only convenience; ignore offline */ }
}

export async function clearSticky() {
  if (!DEV) {
    try { window.localStorage?.removeItem(STATIC_STICKY_KEY); }
    catch { /* ignore private mode */ }
    return;
  }
  if (!DEV) return;
  try {
    await fetch('/__iso-sticky/clear', { method: 'POST' });
  } catch { /* ignore */ }
}
