// WATER WORKSHOP — current sim scene, read-only persistence, tutorial-order
// water controls. This file intentionally reuses the sim Scene/ControlPanel
// but swaps in WaterWorkshopSea so the shader can be rebuilt stage by stage.

import * as THREE from 'three';
import '../../styles.css';
import '../../ui/panel.css';
import './waterWorkshop.css';
import { Scene } from '../../core/Scene.js';
import { ParamStore } from '../../state/ParamStore.js';
import { schema as simSchema } from '../../config/paramSchema.js';
import { defaultParams } from '../../config/defaults.js';
import { ControlPanel } from '../../ui/ControlPanel.js';
import { PerfOverlay } from '../../ui/PerfOverlay.js';
import { BuildConsole } from '../../ui/BuildConsole.js';
import { loadPresets } from '../../config/presets.js';
import { loadSticky, setSticky } from '../../config/sticky.js';
import { WaterWorkshopSea } from './WaterWorkshopSea.js';

const canvasContainer = document.getElementById('canvas-container');
const uiRoot = document.getElementById('ui-root');
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
const isWavesLab = location.pathname.includes('/workshop/waves');
const workshopName = isWavesLab ? 'waves lab' : 'water workshop';
const workshopTitle = isWavesLab ? 'Waves Lab' : 'Water Workshop';
const workshopPresetLabel = isWavesLab ? 'waves lab' : 'water workshop';
const WAVE_PRESETS_KEY = isWavesLab
  ? 'isometric-island.waves-lab.wavePresets.v1'
  : 'isometric-island.water-workshop.wavePresets.v1';
const WAVE_STICKY_KEY = isWavesLab
  ? 'isometric-island.waves-lab.currentWaves.v1'
  : null;

const schema = makeWorkshopSchema();
const tuningSections = isWavesLab ? ['waves', 'chaos', 'lod', 'layers'] : ['waves'];
const sectionOrder = isWavesLab
  ? ['water', 'waves', 'chaos', 'lod', 'sun', 'lighting', 'island', 'voxel', 'seasons', 'tree', 'shadows', 'render', 'godrays']
  : ['water', 'waves', 'sun', 'lighting', 'island', 'voxel', 'seasons', 'tree', 'shadows', 'render', 'godrays'];
const workshopDefaults = buildDefaults(schema, defaultParams);

const buildConsole = new BuildConsole({ parent: uiRoot, label: `${workshopName} build` });
buildConsole.start('bootstrap', 6, { mode: 'boot' });
buildConsole.step('ui shell');
await nextFrame();

buildConsole.step('presets');
const presets = await loadPresets();
buildConsole.step('sticky read-only');
const stickyMap = await loadSticky();
const labWaveStickyMap = isWavesLab ? loadLocalWaveSticky() : null;
const tuningPathSet = new Set(tuningPaths());
for (const path of Object.keys(stickyMap || {})) {
  if (path.startsWith('water.')) {
    delete stickyMap[path];
    setSticky(path, undefined, false);
  } else if (isWavesLab && tuningPathSet.has(path)) {
    delete stickyMap[path];
  }
}
for (const path of tuningPaths()) {
  if (isWavesLab) stickyMap[path] = labWaveStickyMap?.[path] ?? structuredClone(getAt(workshopDefaults, path));
  else if (stickyMap[path] === undefined) stickyMap[path] = structuredClone(getAt(workshopDefaults, path));
}
const stickyPaths = new Set([
  ...Object.keys(stickyMap || {}).filter((path) => !path.startsWith('water.')),
  ...tuningPaths(),
]);

const boot = structuredClone(defaultParams);
const bootPreset = presets.A1;
if (bootPreset?.params) deepMerge(boot, cloneScenePresetParams(bootPreset.params));
for (const [path, value] of Object.entries(stickyMap || {})) {
  if (!path.startsWith('water.')) setAt(boot, path, value);
}
ensureWorkshopParams(boot);

const store = new ParamStore(boot);
buildConsole.step('param store');
let wavePresets = loadWavePresetSlots();
let activeWaveSlot = findMatchingWavePreset(wavePresets, tuningParamsFrom(boot));
let applyingWavePreset = false;

let refGroup = null;
const scene = new Scene(canvasContainer, store, {
  loader: buildConsole,
  autoGenerate: false,
  asyncRegenerate: true,
  SeaClass: WaterWorkshopSea,
  afterGenerate: (s) => {
    s.sea?.setStyle?.(seaStyleParams());
    refGroup = rebuildReferenceBlocks(s, refGroup);
    if (refGroup) refGroup.visible = !!store.get('water.referenceBlocks');
  },
});
buildConsole.step('renderer');

if (bootPreset?.cam) {
  scene.camera.position.fromArray(bootPreset.cam.p);
  scene.camera.quaternion.fromArray(bootPreset.cam.q);
  scene.camera.updateMatrixWorld();
}

const sticky = {
  has: (path) => stickyPaths.has(path),
  toggle: (path) => {
    if (tuningPathSet.has(path)) {
      stickyPaths.add(path);
      const value = store.get(path);
      stickyMap[path] = value;
      setWaveSticky(path, value, true);
      return true;
    }
    if (stickyPaths.has(path)) stickyPaths.delete(path);
    else stickyPaths.add(path);
    return stickyPaths.has(path);
  },
};

let activeBank = 'A';
const keyOf = (slot) => `${activeBank}${slot}`;

function capturePreset() {
  const c = scene.camera;
  return {
    params: store.toJSON(),
    cam: { p: c.position.toArray(), q: c.quaternion.toArray() },
    t: Date.now(),
  };
}

function ensureMissingDefaults() {
  const walk = (defaults, prefix = '') => {
    for (const [key, value] of Object.entries(defaults)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        walk(value, path);
      } else if (store.get(path) === undefined) {
        store.set(path, structuredClone(value));
      }
    }
  };
  walk(workshopDefaults);
}

function applyPreset(preset) {
  if (!preset?.params) return false;
  store.fromJSON(cloneScenePresetParams(preset.params));
  ensureMissingDefaults();
  scene.regenerateAsync(`${workshopName} preset rebuild`);
  if (preset.cam) {
    scene.camera.position.fromArray(preset.cam.p);
    scene.camera.quaternion.fromArray(preset.cam.q);
    scene.camera.updateMatrixWorld();
  }
  return true;
}

function savePreset(slot) {
  panel.flashStatus(`${keyOf(slot)} save disabled in workshop`, 'err');
}

function loadPreset(slot) {
  const key = keyOf(slot);
  const preset = presets[key];
  if (!preset) { panel.flashStatus(`${key} empty`, 'err'); return; }
  applyPreset(preset);
  panel.refreshPresets();
  panel.flashStatus(`loaded ${key} · ${workshopPresetLabel} copy`, 'ok');
}

function setBank(bank) {
  if (!/^[A-H]$/.test(bank) || bank === activeBank) return;
  activeBank = bank;
  panel.refreshPresets();
  panel.flashStatus(`bank ${bank}`, 'ok');
}

const presetApi = {
  slots: presets,
  save: savePreset,
  load: loadPreset,
  setBank,
  getBank: () => activeBank,
};

const wavePresetApi = {
  slots: wavePresets,
  save: saveWavePreset,
  load: loadWavePreset,
  getActive: () => activeWaveSlot,
  gradient: wavePresetGradient,
};

const panel = new ControlPanel({
  store,
  schema,
  sectionOrder,
  sticky,
  presets: presetApi,
  wavePresets: wavePresetApi,
  onAction: handleAction,
  showWorkshopHint: false,
});
uiRoot.appendChild(panel.root);
panel.toggle();
openSection('water');
openSection('waves');
if (isWavesLab) {
  openSection('chaos');
  openSection('lod');
}
panel.flashStatus(`${workshopTitle.toLowerCase()} · read-only scene presets`, 'ok');

const perf = new PerfOverlay({ scene });
perf.root.classList.add('water-workshop-perf');
uiRoot.appendChild(perf.root);

const card = document.createElement('div');
card.className = 'water-workshop-card';
card.innerHTML = `
  <div class="water-workshop-title">${workshopTitle}</div>
  <div class="water-workshop-sub">
    ${isWavesLab ? 'aggressive wave algorithm bench' : 'island water surface bench'} · scene presets load read-only · wave slots shift-save
    <br><b>3</b> vertex waves · <b>4</b> detail/normal · <b>5</b> depth distortion
  </div>
`;
document.body.appendChild(card);

scene.start();
buildConsole.step('first frame');
await scene.regenerateAsync(`${workshopName} asset build`);

store.subscribe((evt) => {
  if (tuningPathSet.has(evt.path)) {
    stickyMap[evt.path] = evt.value;
    setWaveSticky(evt.path, evt.value, true);
    if (!applyingWavePreset) {
      activeWaveSlot = null;
      panel.refreshWavePresets();
    }
  }
  if (evt.path === '*' || tuningPathSet.has(evt.path)) {
    scene.sea?.setStyle?.(seaStyleParams());
  }
  if ((evt.path === '*' || evt.path === 'water.referenceBlocks') && refGroup) {
    refGroup.visible = !!store.get('water.referenceBlocks');
  }
});

function handleAction(action) {
  switch (action) {
    case 'default':
      store.fromJSON(workshopDefaults);
      ensureMissingDefaults();
      scene.regenerateAsync(`${workshopName} default rebuild`);
      panel.refreshSticky();
      panel.flashStatus('workshop defaults · disk untouched', 'ok');
      break;
    case 'baseline':
      if (presets.A1?.params) applyPreset(presets.A1);
      store.set('waves.surfaceStage', 3);
      panel.flashStatus('baseline · surface only', 'ok');
      break;
    case 'random':
      randomize();
      panel.flashStatus('rolled', 'ok');
      break;
    default:
      console.warn('unknown action', action);
  }
}

function randomize() {
  store.set('voxel.seed', 1 + ((Math.random() * 99998) | 0));
  store.set('sun.elevationDeg', 8 + Math.random() * 54);
  store.set('sun.azimuthDeg', -180 + Math.random() * 360);
  store.set('seasons.sweepDeg', -180 + Math.random() * 360);
  scene.regenerateAsync(`${workshopName} random rebuild`);
}

function currentWaveParams() {
  return tuningParamsFrom(store.toJSON());
}

function tuningParamsFrom(source) {
  const out = {};
  for (const path of tuningPaths()) {
    setAt(out, path, getAt(source, path));
  }
  return out;
}

function loadWavePreset(slot) {
  const preset = wavePresets[String(slot)];
  const params = wavePresetParams(preset);
  if (!params) {
    panel.flashStatus(`wave ${slot} empty`, 'err');
    return;
  }
  applyingWavePreset = true;
  for (const path of tuningPaths()) {
    const value = getAt(params, path);
    if (value !== undefined) store.set(path, structuredClone(value));
  }
  applyingWavePreset = false;
  activeWaveSlot = slot;
  panel.refreshWavePresets();
  panel.flashStatus(`wave ${slot} loaded`, 'ok');
}

function saveWavePreset(slot) {
  const key = String(slot);
  wavePresets[key] = {
    params: currentWaveParams(),
    waves: structuredClone(store.get('waves') || {}),
    t: Date.now(),
    label: `wave ${key}`,
  };
  saveWavePresetSlots(wavePresets);
  activeWaveSlot = slot;
  panel.refreshWavePresets();
  panel.flashStatus(`wave ${slot} saved`, 'ok');
}

function loadWavePresetSlots() {
  const defaults = defaultWavePresetSlots();
  try {
    const raw = window.localStorage?.getItem(WAVE_PRESETS_KEY);
    const stored = raw ? JSON.parse(raw) : {};
    return { ...defaults, ...(stored && typeof stored === 'object' ? stored : {}) };
  } catch {
    return defaults;
  }
}

function saveWavePresetSlots(slots) {
  try {
    const out = {};
    for (let i = 1; i <= 8; i++) {
      const p = slots[String(i)];
      if (p?.waves || p?.params) out[String(i)] = p;
    }
    window.localStorage?.setItem(WAVE_PRESETS_KEY, JSON.stringify(out));
  } catch { /* ignore private mode */ }
}

function loadLocalWaveSticky() {
  if (!WAVE_STICKY_KEY) return {};
  try {
    const raw = window.localStorage?.getItem(WAVE_STICKY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function setWaveSticky(path, value, on) {
  if (!isWavesLab) {
    setSticky(path, value, on);
    return;
  }
  try {
    const map = loadLocalWaveSticky();
    if (on === false) delete map[path];
    else map[path] = structuredClone(value);
    window.localStorage?.setItem(WAVE_STICKY_KEY, JSON.stringify(map));
  } catch { /* ignore private mode */ }
}

function defaultWavePresetSlots() {
  const params = {};
  for (const path of tuningPaths()) setAt(params, path, getAt(workshopDefaults, path));
  return {
    1: { label: 'current default', params, waves: structuredClone(workshopDefaults.waves), t: 0 },
  };
}

function findMatchingWavePreset(slots, params = {}) {
  for (let i = 1; i <= 8; i++) {
    const p = slots[String(i)];
    const presetParams = wavePresetParams(p);
    if (presetParams && wavesAlmostEqual(presetParams, params)) return i;
  }
  return null;
}

function wavesAlmostEqual(a, b) {
  for (const path of tuningPaths()) {
    const av = Number(getAt(a, path));
    const bv = Number(getAt(b, path));
    if (Number.isFinite(av) || Number.isFinite(bv)) {
      if (Math.abs(av - bv) > 0.0005) return false;
    } else if (getAt(a, path) !== getAt(b, path)) {
      return false;
    }
  }
  return true;
}

function wavePresetGradient(preset) {
  const w = wavePresetWaves(preset);
  if (!w) return '';
  const speed = THREE.MathUtils.clamp((w.waveSpeed ?? 0) / 3, 0, 1);
  const glint = THREE.MathUtils.clamp((w.glintSpeed ?? 0) / 5, 0, 1);
  const scale = THREE.MathUtils.clamp((w.waveScale ?? 0.0001) / 0.05, 0, 1);
  const chop = THREE.MathUtils.clamp(((w.waveChoppy ?? 0.5) - 0.5) / 7.5, 0, 1);
  const c1 = mixHex('#071018', '#2fd9c8', scale);
  const c2 = mixHex('#114354', '#f1f9ff', glint);
  const c3 = mixHex('#0b2330', '#ff8a3a', Math.max(speed, chop * 0.75));
  return `linear-gradient(90deg, ${c1} 0%, ${c2} 52%, ${c3} 100%)`;
}

function mixHex(a, b, t) {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.slice(0, 2), 16), ag = parseInt(ah.slice(2, 4), 16), ab = parseInt(ah.slice(4, 6), 16);
  const br = parseInt(bh.slice(0, 2), 16), bg = parseInt(bh.slice(2, 4), 16), bb = parseInt(bh.slice(4, 6), 16);
  const k = THREE.MathUtils.clamp(t, 0, 1);
  const c = [ar + (br - ar) * k, ag + (bg - ag) * k, ab + (bb - ab) * k].map((v) => Math.round(v).toString(16).padStart(2, '0'));
  return `#${c.join('')}`;
}

function wavePresetParams(preset) {
  if (preset?.params) return preset.params;
  if (preset?.waves) return { waves: preset.waves };
  return null;
}

function wavePresetWaves(preset) {
  return preset?.waves || preset?.params?.waves || null;
}

function seaStyleParams() {
  return {
    ...(store.get('water') || {}),
    ...(store.get('waves') || {}),
    ...(store.get('chaos') || {}),
    ...(store.get('lod') || {}),
    ...(store.get('layers') || {}),
  };
}

window.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  const target = event.target;
  const isTextEntry = target && (target.tagName === 'TEXTAREA' ||
    (target.tagName === 'INPUT' && target.type !== 'range'));
  if (isTextEntry) return;
  const key = event.key.toLowerCase();
  const blur = () => { if (target && target.tagName === 'INPUT' && target.blur) target.blur(); };
  if (target && target.tagName === 'INPUT' && target.type === 'range' && /^[wasdqe]$/.test(key)) blur();

  const slotMatch = /^(?:Digit|Numpad)([1-8])$/.exec(event.code);
  if (slotMatch) {
    event.preventDefault(); blur();
    const slot = Number(slotMatch[1]);
    if (event.shiftKey) savePreset(slot); else loadPreset(slot);
    return;
  }

  if (key === 'h' || key === 'b') { event.preventDefault(); blur(); panel.toggle(); }
  else if (key === 'c') {
    event.preventDefault(); blur();
    const next = !store.get('water.enable');
    store.set('water.enable', next);
    panel.flashStatus(next ? 'water on' : 'water off', 'ok');
  } else if (key === 'g') {
    event.preventDefault(); blur();
    const next = !store.get('godrays.enable');
    store.set('godrays.enable', next);
    panel.flashStatus(next ? 'god rays on' : 'god rays off', 'ok');
  } else if (key === 'x') {
    event.preventDefault(); blur();
    const next = !store.get('shadows.enable');
    store.set('shadows.enable', next);
    panel.flashStatus(next ? 'shadows on' : 'shadows off', 'ok');
  } else if (key === 'f') {
    event.preventDefault(); blur(); perf.toggle();
  } else if (key === 'r') {
    event.preventDefault(); blur(); randomize(); panel.flashStatus('rolled', 'ok');
  } else if (key === 'escape') {
    event.preventDefault(); blur();
    if (!panel.collapsed) panel.toggle();
  }
});

function makeWorkshopSchema() {
  const out = structuredClone(simSchema);
  out.water = {
    label: 'water',
    icon: '≈',
    blurb: 'datum · seafloor · depth tint · masks',
    fields: {
      enable: { type: 'bool', label: 'Water', default: true, hint: 'C toggles only the water surface in this workshop' },
      seaLevel: { type: 'float', label: 'Water datum', min: -2, max: 40, step: 0.5, default: 9, unit: 'm', hint: 'structural; rebuilds terrain/water data' },
      floorDepth: { type: 'float', label: 'Seafloor depth', min: 10, max: 140, step: 5, default: 64, unit: 'm' },
      floorShape: { type: 'float', label: 'Shelf shape', min: 0.35, max: 1.8, step: 0.05, default: 0.85, hint: 'lower = quick deep drop · higher = long shallow shelf' },
      floorRoughness: { type: 'float', label: 'Seafloor jag', min: 0, max: 3, step: 0.05, default: 1, hint: 'height variation below water' },
      deltaFloor: { type: 'float', label: 'Delta follow', min: 0, max: 1, step: 0.02, default: 0, hint: 'carves underwater floor along the river/delta channel' },
      surfaceLift: { type: 'float', label: 'Surface lift', min: -1, max: 2, step: 0.02, default: 0.08, unit: 'm', hint: 'shore z-fighting diagnostic' },
      landMask: { type: 'float', label: 'Land mask', min: 0, max: 1, step: 0.02, default: 1, hint: 'fade water off generated land cells' },
      referenceBlocks: { type: 'bool', label: 'Reference blocks', default: true, hint: 'colored lagoon blocks for transparency/depth tuning' },
      debugView: {
        type: 'int', label: 'Debug view', min: 0, max: 5, step: 1, default: 0,
        labels: ['final', 'depth', 'channel', 'wave', 'normal', 'land'],
        hint: 'raw masks and procedural fields before art layering',
      },
      depthTint: { type: 'float', label: 'Depth tint', min: 0, max: 1.5, step: 0.02, default: 0.78, hint: 'absorption/fog amount from generated seafloor depth' },
      lagoonTint: { type: 'float', label: 'Channel tint', min: 0, max: 2, step: 0.02, default: 0.18, hint: 'generated river/delta mask tint; keep low while tuning PBR' },
    },
  };
  if (isWavesLab) {
    out.water.fields.debugView.max = 7;
    out.water.fields.debugView.labels = ['final', 'depth', 'channel', 'wave', 'normal', 'land', 'chaos', 'layers'];
  }
  out.waves = {
    label: 'waves',
    icon: '≋',
    blurb: 'POOL surface stages 3-5',
    fields: {
      ...makeLayerFields('waves'),
      waveSpeed: { type: 'float', label: 'Wave speed', min: 0, max: 3, step: 0.02, default: 2.7, hint: 'phase speed; tune for rolling, not sheet sliding' },
      glintSpeed: { type: 'float', label: 'Glint motion', min: 0, max: 5, step: 0.02, default: 3.5, hint: 'multiplies only the sun-highlight normal motion; 0 = locked' },
      glintScale: { type: 'float', label: 'Glint scale', min: 0.1, max: 4, step: 0.02, default: 1.34, hint: 'wave-normal scale seen by the broad white sun path' },
      waveScale: { type: 'float', label: 'Wave scale', min: 0.0001, max: 0.05, step: 0.0001, precision: 4, default: 0.0275, curve: 2.8, uiStep: 0.001, hint: 'world-space wave frequency; curved for low-end tuning' },
      waveRotation: { type: 'float', label: 'Wave rotation', min: -180, max: 180, step: 1, default: 143, unit: '°', hint: 'rotates the wave basis so flow is not locked to island axes' },
      surfaceOpacity: { type: 'float', label: 'Opacity', min: 0.02, max: 1, step: 0.01, default: 0.55, hint: 'water surface alpha; high opacity should stay blue, not black' },
      waveHeight: { type: 'float', label: 'Wave height', min: 0, max: 3, step: 0.02, default: 1.92, unit: 'm', hint: 'top-down wants more; side angle wants less' },
      waveChoppy: { type: 'float', label: 'Wave chop', min: 0.5, max: 8, step: 0.05, default: 5.95, hint: 'shape sharpness from the tutorial sea octave' },
      surfaceStage: { type: 'int', label: 'Surface stage', min: 3, max: 5, step: 1, default: 5, hint: '3 = vertex waves · 4 = detail/normal · 5 = depth distortion' },
      detailMix: { type: 'float', label: 'Detail mix', min: 0, max: 1, step: 0.02, default: 0.42, hint: 'fragment detail over vertex waves' },
      normalStrength: { type: 'float', label: 'Normal strength', min: 0, max: 2, step: 0.02, default: 0.4, hint: 'stage 4 normal perturbation' },
      refractionStrength: { type: 'float', label: 'Distortion', min: 0, max: 0.7, step: 0.005, default: 0.18, hint: 'stage 5 depth/mask distortion; not true screen refraction yet' },
    },
  };
  if (isWavesLab) {
    out.waves.blurb = 'experimental wave layers · water workshop stays clean';
    out.chaos = {
      label: 'chaos',
      icon: '✣',
      blurb: 'third detail layer · soloable experiment',
      fields: {
        ...makeLayerFields('chaos'),
        extraDetailMix: { type: 'float', path: 'chaos.extraDetailMix', label: 'Chaos amount', min: 0, max: 2, step: 0.02, default: 0.35, hint: '0 = absent · 1 = normal mix · 2 = debug-loud' },
        extraDetailOpacity: { type: 'float', path: 'chaos.extraDetailOpacity', label: 'Chaos opacity', min: 0, max: 1, step: 0.02, default: 1, hint: 'visibility of the extra layer when mixed or soloed' },
        extraDetailScale: { type: 'float', path: 'chaos.extraDetailScale', label: 'Chaos scale', min: 0.05, max: 18, step: 0.05, default: 2.4, curve: 1.8, uiStep: 0.001, hint: 'frequency multiplier for the extra detail layer' },
        extraDetailSpeed: { type: 'float', path: 'chaos.extraDetailSpeed', label: 'Chaos speed', min: -6, max: 6, step: 0.02, default: 0.7, hint: 'phase speed; negative runs against the main waves' },
        extraDetailRotation: { type: 'float', path: 'chaos.extraDetailRotation', label: 'Chaos rotation', min: -180, max: 180, step: 1, default: 119, unit: '°', hint: 'basis rotation relative to wave rotation' },
        extraDetailContrast: { type: 'float', path: 'chaos.extraDetailContrast', label: 'Chaos contrast', min: 0.2, max: 4, step: 0.02, default: 1.4, hint: 'pushes the chaos mask away from flat grey' },
        extraDetailBias: { type: 'float', path: 'chaos.extraDetailBias', label: 'Chaos bias', min: -1, max: 1, step: 0.02, default: 0, hint: 'brighten/darken before contrast; useful when soloing' },
        extraDetailSharp: { type: 'float', path: 'chaos.extraDetailSharp', label: 'Chaos sharp', min: 0.4, max: 5, step: 0.02, default: 1, hint: 'nonlinear sharpen after contrast' },
        extraDetailTint: { type: 'float', path: 'chaos.extraDetailTint', label: 'Chaos tint', min: 0, max: 1, step: 0.02, default: 0.55, hint: '0 = dark/blue · 1 = pale crest contribution' },
        extraDetailDistort: { type: 'float', path: 'chaos.extraDetailDistort', label: 'Chaos distort', min: 0, max: 1.2, step: 0.02, default: 0.25, hint: 'how much this layer pushes the depth/mask lookup' },
      },
    };
    out.lod = {
      label: 'LOD',
      icon: '▦',
      blurb: 'near camera patch · disabled by default',
      fields: {
        nearPatch: { type: 'bool', label: 'Near patch', default: false, hint: 'adds a camera-following high-density water mesh' },
        patchSolo: { type: 'bool', label: 'Patch solo', default: false, hint: 'hide the giant ocean mesh so the LOD patch is obvious' },
        patchSize: { type: 'float', label: 'Patch size', min: 120, max: 2400, step: 20, default: 820, unit: 'm', hint: 'world size of the camera-following patch' },
        patchSegments: { type: 'int', label: 'Patch segments', min: 24, max: 420, step: 4, default: 180, hint: 'higher = more vertex wave silhouette, more triangles' },
        patchLift: { type: 'float', label: 'Patch lift', min: 0, max: 0.4, step: 0.01, default: 0.05, unit: 'm', hint: 'small offset above the base water to avoid z-fighting' },
        patchAlpha: { type: 'float', label: 'Patch alpha', min: 0, max: 1, step: 0.01, default: 0.9, hint: 'opacity of the tall near-camera experiment' },
        patchFeather: { type: 'float', label: 'Patch feather', min: 0.02, max: 0.9, step: 0.01, default: 0.38, hint: 'radial fade at the patch edge' },
        patchLobes: { type: 'int', label: 'Patch lobes', min: 0, max: 9, step: 1, default: 5, hint: 'breaks the circular fade so the patch is less square/obvious' },
        patchSuppress: { type: 'float', label: 'Base suppress', min: 0, max: 1, step: 0.01, default: 0.82, hint: 'hides the base ocean under the LOD patch to avoid double patterns' },
        patchHeightMul: { type: 'float', label: 'Patch height x', min: 0, max: 10, step: 0.05, default: 3.5, hint: 'pool-style tall vertex waves for close shots' },
        patchScaleMul: { type: 'float', label: 'Patch scale x', min: 0.05, max: 24, step: 0.05, default: 2.4, curve: 1.8, uiStep: 0.001, hint: 'near patch frequency multiplier, independent of the broad ocean feel' },
        patchSpeedMul: { type: 'float', label: 'Patch speed x', min: 0, max: 8, step: 0.05, default: 1.15, hint: 'near patch phase multiplier' },
        patchChopBoost: { type: 'float', label: 'Patch chop +', min: 0, max: 8, step: 0.05, default: 1.1, hint: 'adds choppy pool-style crests only on the patch' },
        patchDetailBoost: { type: 'float', label: 'Patch detail x', min: 0, max: 8, step: 0.05, default: 1.35, hint: 'boosts fragment pattern contrast on the near patch' },
        patchNormalBoost: { type: 'float', label: 'Patch normal x', min: 0, max: 8, step: 0.05, default: 1.6, hint: 'stronger normal response on the tall patch' },
        baseSegments: { type: 'int', label: 'Base segments', min: 80, max: 520, step: 8, default: 320, hint: 'rebuilds the broad ocean mesh; useful perf sanity check' },
      },
    };
    out.layers = {
      label: 'layers',
      icon: '·',
      blurb: 'hidden aliases',
      fields: {
        muteVertex: { type: 'bool', label: 'Mute vertex', default: false },
        muteBroad: { type: 'bool', label: 'Mute broad', default: false },
        muteFine: { type: 'bool', label: 'Mute fine', default: false },
        muteGlint: { type: 'bool', label: 'Mute glint', default: false },
        muteChaos: { type: 'bool', label: 'Mute chaos', default: false },
        soloVertex: { type: 'bool', label: 'Solo vertex', default: false },
        soloBroad: { type: 'bool', label: 'Solo broad', default: false },
        soloFine: { type: 'bool', label: 'Solo fine', default: false },
        soloGlint: { type: 'bool', label: 'Solo glint', default: false },
        soloChaos: { type: 'bool', label: 'Solo chaos', default: false },
      },
    };
  }
  return out;
}

function makeLayerFields(prefix) {
  if (!isWavesLab) return {};
  const fields = {};
  for (const name of ['vertex', 'broad', 'fine', 'glint', 'chaos']) {
    const cap = name[0].toUpperCase() + name.slice(1);
    fields[`mute${cap}`] = {
      type: 'bool',
      path: `layers.mute${cap}`,
      label: `Mute ${name}`,
      default: false,
      pin: false,
      hint: prefix === 'chaos' ? 'shared layer mixer' : undefined,
    };
  }
  for (const name of ['vertex', 'broad', 'fine', 'glint', 'chaos']) {
    const cap = name[0].toUpperCase() + name.slice(1);
    fields[`solo${cap}`] = {
      type: 'bool',
      path: `layers.solo${cap}`,
      label: `Solo ${name}`,
      default: false,
      pin: false,
      hint: prefix === 'waves' ? 'any solo mutes all non-solo layers' : undefined,
    };
  }
  return fields;
}

function buildDefaults(schemaObj, base) {
  const out = structuredClone(base);
  for (const [sectionKey, section] of Object.entries(schemaObj)) {
    for (const [fieldKey, field] of Object.entries(section.fields || {})) {
      const path = field.path || `${sectionKey}.${fieldKey}`;
      setAt(out, path, field.type === 'range' ? [...field.default] : field.default);
    }
  }
  return out;
}

function tuningPaths() {
  const paths = new Set();
  for (const sectionKey of tuningSections) {
    for (const [fieldKey, field] of Object.entries(schema[sectionKey]?.fields || {})) {
      paths.add(field.path || `${sectionKey}.${fieldKey}`);
    }
  }
  return [...paths];
}

function getAt(obj, path) {
  const parts = path.split('.');
  let node = obj;
  for (const part of parts) {
    if (node == null) return undefined;
    node = node[part];
  }
  return node;
}

function cloneScenePresetParams(params) {
  const out = structuredClone(params || {});
  delete out.water;
  delete out.waves;
  delete out.chaos;
  delete out.lod;
  delete out.layers;
  return out;
}

function ensureWorkshopParams(target) {
  for (const [sectionKey, section] of Object.entries(schema)) {
    for (const [fieldKey] of Object.entries(section.fields || {})) {
      const path = schema[sectionKey].fields[fieldKey].path || `${sectionKey}.${fieldKey}`;
      if (getAt(target, path) === undefined) {
        setAt(target, path, getAt(workshopDefaults, path));
      }
    }
  }
}

function deepMerge(target, source) {
  for (const key in source) {
    const value = source[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (target[key] == null || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], value);
    } else {
      target[key] = Array.isArray(value) ? value.slice() : value;
    }
  }
  return target;
}

function setAt(obj, path, value) {
  const parts = path.split('.');
  const last = parts.pop();
  let node = obj;
  for (const part of parts) node = (node[part] ??= {});
  node[last] = structuredClone(value);
}

function openSection(key) {
  panel.root.querySelector(`.ff-section[data-section="${key}"]`)?.classList.add('open');
}

function rebuildReferenceBlocks(sim, existing) {
  if (existing) {
    sim.scene.remove(existing);
    existing.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose?.();
    });
  }
  const vol = sim.vol;
  if (!vol?.heightVox) return null;
  const seaLevel = store.get('water.seaLevel');
  const candidates = [];
  for (let j = 1; j < vol.res - 1; j += Math.max(1, Math.floor(vol.res / 160))) {
    for (let i = 1; i < vol.res - 1; i += Math.max(1, Math.floor(vol.res / 160))) {
      const idx = vol.idx(i, j);
      const y = vol.heightVox[idx] * vol.vstep;
      if (vol.channel?.[idx] && y < seaLevel - 1.5) candidates.push({ i, j, idx, y });
    }
  }
  if (!candidates.length) {
    const mid = vol.res >> 1;
    for (let n = -3; n <= 3; n++) {
      const i = THREE.MathUtils.clamp(mid + n * 8, 0, vol.res - 1);
      const j = THREE.MathUtils.clamp(mid + n * 5, 0, vol.res - 1);
      const idx = vol.idx(i, j);
      candidates.push({ i, j, idx, y: vol.heightVox[idx] * vol.vstep });
    }
  }

  const colors = ['#ff4d57', '#ffb84a', '#f6ff63', '#55ff8d', '#3df6ff', '#806bff', '#ff6ff0'];
  const group = new THREE.Group();
  group.name = 'WaterWorkshopReferenceBlocks';
  const count = Math.min(colors.length, candidates.length);
  for (let n = 0; n < count; n++) {
    const sample = candidates[Math.floor((n / Math.max(1, count - 1)) * (candidates.length - 1))];
    const [x, z] = vol.cellToWorld(sample.i, sample.j);
    const h = 4 + n * 1.4;
    const geom = new THREE.BoxGeometry(8, h, 8);
    const color = new THREE.Color(colors[n]);
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.28,
      roughness: 0.55,
      metalness: 0,
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.name = `WaterRefBlock${n + 1}`;
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.position.set(x, Math.min(seaLevel - 0.8, sample.y + h * 0.5), z);
    group.add(mesh);
  }
  sim.scene.add(group);
  return group;
}

window.waterWorkshop = { scene, store, panel, perf, presets: presetApi, capturePreset };
window.isometric = window.waterWorkshop;
