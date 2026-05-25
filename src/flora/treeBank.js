import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32 } from '../gen/noise.js';
import { buildSlots, makeLabTree } from '../workshop/tree-lab/treeLabModel.js';
import { makeTreeStyle } from '../workshop/methodology/model.js';
import { makePalm } from './palmReal.js';

const AUTUMN_LEAF_MAT = new THREE.MeshStandardMaterial({
  vertexColors: true,
  side: THREE.DoubleSide,
  roughness: 0.88,
  metalness: 0,
});
const AUTUMN_BRANCH_MAT = new THREE.MeshStandardMaterial({
  color: 0x3b2617,
  roughness: 0.92,
  metalness: 0,
});

const AUTUMN_COLORS = [
  [0.96, 0.72, 0.18],
  [0.90, 0.51, 0.12],
  [0.74, 0.25, 0.10],
  [0.66, 0.59, 0.24],
  [0.46, 0.62, 0.32],
  [0.78, 0.68, 0.34],
];

// Mirrors the live tree-lab workshop overrides. This is production metadata:
// the island should not import the workshop renderer just to learn which slots
// are real.
const METHODOLOGY_OVERRIDES = {
  21: 'pine-sparse-scots',
  22: 'pine-sparse-scots',
  23: 'pine-sparse-scots',
  24: 'decid-limb-chunks',
  25: 'decid-limb-chunks',
  26: 'decid-limb-chunks',
  27: 'decid-winter-skeleton',
  28: 'decid-winter-skeleton',
  52: 'pine-fins-on-skeleton',
  58: 'pine-fins-on-skeleton',
  60: 'pine-fins-on-skeleton',
  65: 'pine-tiered-plates',
  66: 'pine-tiered-plates',
  67: 'pine-tiered-plates',
  68: 'pine-tiered-plates-alt',
  69: 'pine-tiered-plates-alt',
  70: 'pine-tiered-plates-alt',
  71: 'pine-tiered-plates-alt',
  72: 'pine-tiered-plates-alt',
  81: 'pine-silhouette-shell',
  82: 'pine-silhouette-shell',
  83: 'pine-silhouette-shell',
  84: 'pine-silhouette-shell-blue',
  85: 'pine-silhouette-shell-blue',
  86: 'pine-silhouette-shell-blue',
  87: 'pine-fins-on-skeleton',
  88: 'pine-fins-on-skeleton',
};

const SEED_OVERRIDES = {
  3: 1003,
  5: 1005,
  7: 7007,
  8: 8008,
  50: 5050,
  51: 5151,
  66: 1066,
  68: 168,
};

const SLOT_PARAMS = {
  52: {
    palette: { dark: [0.16, 0.035, 0.018], mid: [0.76, 0.30, 0.08], lite: [1.00, 0.78, 0.22] },
    finScale: 1.08,
    limbCount: 7,
  },
  58: {
    palette: { dark: [0.010, 0.022, 0.058], mid: [0.055, 0.155, 0.330], lite: [0.42, 0.62, 0.72] },
    winter: true,
    finScale: 0.78,
    finDrop: 1.18,
    limbCount: 6,
  },
  60: {
    finsPerTip: 3,
    finScale: 0.6,
    finDrop: 0.72,
    limbCount: 8,
  },
  82: { widthMul: 1.30 },
  85: { widthMul: 1.35, baseRadiusMul: 1.85, yLiftMul: 0.84 },
  66: {
    palette: { dark: [0.006, 0.040, 0.022], mid: [0.110, 0.345, 0.205], lite: [0.86, 1.00, 0.22] },
    lowTierDark: 0.42,
  },
  67: { lowTierDark: 0.40, lowTierDarkProb: 0.55 },
};

function classifyLabSlot(slot) {
  const n = slot.index;
  const seasons = slot.seasons || ['summer', 'autumn'];
  if (slot.blank) {
    return {
      slot: n,
      source: 'tree-lab',
      family: 'reserved',
      season: 'reserved',
      strength: 'avoid',
      layer: 'reserved',
      terrainAffinity: [],
      scale: 1,
      active: false,
    };
  }
  const base = {
    slot: n,
    source: 'tree-lab',
    family: 'broadleaf',
    season: seasons[0] || 'summer',
    strength: 'secondary',
    layer: 'summerCanopy',
    terrainAffinity: ['grass'],
    scale: 1.25,
    active: !slot.blank,
  };

  if (n <= 40) {
    return {
      ...base,
      family: n >= 27 && n <= 28 ? 'sparse' : 'green-shape',
      season: n >= 27 && n <= 28 ? 'winter' : 'summer',
      strength: n >= 27 && n <= 28 ? 'accent' : 'secondary',
      layer: n >= 27 && n <= 28 ? 'peakSparse' : 'summerCanopy',
      terrainAffinity: n >= 27 && n <= 28 ? ['upper-slope'] : ['grass', 'fairway-edge'],
      scale: n >= 27 && n <= 28 ? 1.05 : 1.18,
    };
  }
  if (n >= 41 && n <= 64) {
    return {
      ...base,
      family: 'autumn-broadleaf',
      season: 'autumn',
      strength: n >= 49 ? 'primary' : 'secondary',
      layer: 'autumnCanopy',
      terrainAffinity: ['autumn', 'mid-slope', 'lagoon-apron'],
      scale: 1.22,
    };
  }
  if (n >= 65 && n <= 72) {
    return {
      ...base,
      family: 'spruce-mix',
      season: 'conifer',
      strength: 'primary',
      layer: 'spruceMix',
      terrainAffinity: ['upper-slope', 'autumn-edge'],
      scale: 1.08,
    };
  }
  if (n >= 81 && n <= 88) {
    return {
      ...base,
      family: 'hero-conifer',
      season: 'conifer',
      strength: 'primary',
      layer: 'spruceMix',
      terrainAffinity: ['upper-slope', 'ridge-edge'],
      scale: 1.16,
    };
  }
  if (n >= 89 && n <= 96) {
    return {
      ...base,
      family: 'reserved',
      season: 'reserved',
      strength: 'avoid',
      layer: 'reserved',
      terrainAffinity: [],
      active: false,
      scale: 1,
    };
  }
  return base;
}

function makePalmSlot(slot) {
  const variant = slot - 96;
  return {
    slot,
    source: 'palm',
    family: 'palm',
    season: 'fringe',
    strength: 'primary',
    layer: 'palmFringe',
    terrainAffinity: ['beach', 'fairway-edge', 'lagoon-apron', 'bunker'],
    scale: 0.86 + (variant % 8) * 0.025,
    active: true,
    palmVariant: variant,
  };
}

function buildBank() {
  const slots = buildSlots().map((spec) => {
    const methodology = METHODOLOGY_OVERRIDES[spec.index];
    if (methodology) {
      spec.blank = false;
      spec.methodology = methodology;
      spec.seed = SEED_OVERRIDES[spec.index] ?? spec.index;
    } else if (SEED_OVERRIDES[spec.index] != null) {
      spec.seed = SEED_OVERRIDES[spec.index];
    }
    return { ...spec, ...classifyLabSlot(spec) };
  });
  for (let slot = 97; slot <= 128; slot++) slots.push(makePalmSlot(slot));
  return slots;
}

export const TREE_BANK = buildBank();

export const TREE_BANK_GROUPS = {
  summerCanopy: TREE_BANK.filter((s) => s.active && s.layer === 'summerCanopy'),
  autumnCanopy: TREE_BANK.filter((s) => s.active && s.layer === 'autumnCanopy'),
  spruceMix: TREE_BANK.filter((s) => s.active && s.layer === 'spruceMix'),
  peakSparse: TREE_BANK.filter((s) => s.active && s.layer === 'peakSparse'),
  palmFringe: TREE_BANK.filter((s) => s.active && s.layer === 'palmFringe'),
  accentTrees: TREE_BANK.filter((s) => s.active && s.strength === 'accent'),
};

export function treeBankSummary() {
  const counts = {};
  for (const slot of TREE_BANK) {
    const key = slot.active ? slot.layer : 'inactive';
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function chooseTreeSlot(layer, rand) {
  const list = TREE_BANK_GROUPS[layer] || TREE_BANK_GROUPS.summerCanopy;
  if (!list.length) return null;
  const weighted = [];
  let total = 0;
  for (const slot of list) {
    const weight = slot.strength === 'primary' ? 1 : slot.strength === 'accent' ? 0.45 : 0.62;
    total += weight;
    weighted.push([slot, total]);
  }
  let roll = rand() * total;
  for (const [slot, edge] of weighted) {
    if (roll <= edge) return slot;
  }
  return list[list.length - 1];
}

export function makeTreeBankTree(slot, seed) {
  if (!slot) return null;
  if (slot.source === 'palm') return makePalm(((seed >>> 0) ^ (slot.slot * 2654435761)) >>> 0);
  if (slot.layer === 'autumnCanopy') return makeAutumnLeafletTree(slot, seed);
  const spec = { ...slot, seed: ((slot.seed ?? seed) ^ (seed >>> 0)) >>> 0 };
  if (slot.methodology) return makeTreeStyle(slot.methodology, spec.seed, SLOT_PARAMS[slot.slot]);
  return makeLabTree(spec);
}

function makeAutumnLeafletTree(slot, seed) {
  const rng = mulberry32(((seed >>> 0) ^ (slot.slot * 1597334677)) >>> 0);
  const group = new THREE.Group();
  group.name = `AutumnLeaflet${slot.slot}`;
  group.userData.slot = slot.slot;
  group.userData.family = slot.family;

  const height = 6.2 + rng() * 3.6;
  const crownY = height * (0.63 + rng() * 0.10);
  const crownR = 2.4 + rng() * 1.35;
  const branchGeos = [];
  const trunk = new THREE.CylinderGeometry(0.16 + rng() * 0.08, 0.30 + rng() * 0.12, crownY, 6, 2, false);
  trunk.translate(0, crownY * 0.5, 0);
  branchGeos.push(trunk);

  const branchCount = 4 + ((rng() * 4) | 0);
  for (let b = 0; b < branchCount; b++) {
    const t = branchCount === 1 ? 0 : b / branchCount;
    const a = t * Math.PI * 2 + rng() * 0.65;
    const y0 = crownY * (0.44 + rng() * 0.26);
    const len = crownR * (0.66 + rng() * 0.42);
    const up = 0.42 + rng() * 0.42;
    const dir = new THREE.Vector3(Math.cos(a) * len, up * len, Math.sin(a) * len);
    const mid = new THREE.Vector3(dir.x * 0.5, y0 + dir.y * 0.5, dir.z * 0.5);
    const geo = cylinderBetween(mid, dir, 0.055 + rng() * 0.035, 0.025 + rng() * 0.02);
    branchGeos.push(geo);
  }
  const branchMesh = new THREE.Mesh(mergeGeometries(branchGeos, false), AUTUMN_BRANCH_MAT);
  branchMesh.castShadow = true;
  branchMesh.receiveShadow = true;
  group.add(branchMesh);

  const leafPositions = [];
  const leafColors = [];
  const clumps = [];
  const clumpCount = 4 + ((rng() * 4) | 0);
  for (let i = 0; i < clumpCount; i++) {
    const a = (i / clumpCount) * Math.PI * 2 + rng() * 0.55;
    const r = crownR * (0.25 + rng() * 0.60);
    clumps.push(new THREE.Vector3(
      Math.cos(a) * r,
      crownY + rng() * height * 0.28,
      Math.sin(a) * r,
    ));
  }

  const leafCount = 38 + ((rng() * 34) | 0);
  for (let i = 0; i < leafCount; i++) {
    const c = clumps[(rng() * clumps.length) | 0];
    const theta = rng() * Math.PI * 2;
    const radial = crownR * Math.pow(rng(), 0.78) * 0.45;
    const pos = new THREE.Vector3(
      c.x + Math.cos(theta) * radial,
      c.y + (rng() - 0.35) * height * 0.26,
      c.z + Math.sin(theta) * radial,
    );
    if (pos.y < crownY * 0.72) pos.y = crownY * 0.72 + rng() * height * 0.18;
    const color = AUTUMN_COLORS[(rng() * AUTUMN_COLORS.length) | 0].map((v, k) => {
      const jitter = (rng() - 0.5) * (k === 1 ? 0.10 : 0.07);
      return THREE.MathUtils.clamp(v + jitter, 0, 1);
    });
    const w = 0.68 + rng() * 1.15;
    const h = 0.18 + rng() * 0.40;
    pushLeafCard(leafPositions, leafColors, pos, w, h, rng, color);
  }

  const leafGeo = new THREE.BufferGeometry();
  leafGeo.setAttribute('position', new THREE.Float32BufferAttribute(leafPositions, 3));
  leafGeo.setAttribute('color', new THREE.Float32BufferAttribute(leafColors, 3));
  leafGeo.computeVertexNormals();
  const leafMesh = new THREE.Mesh(leafGeo, AUTUMN_LEAF_MAT);
  leafMesh.castShadow = true;
  leafMesh.receiveShadow = true;
  group.add(leafMesh);
  return group;
}

function cylinderBetween(mid, dir, baseRadius, tipRadius) {
  const len = Math.max(0.001, dir.length());
  const geo = new THREE.CylinderGeometry(tipRadius, baseRadius, len, 5, 1, false);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  const m = new THREE.Matrix4().compose(mid, q, new THREE.Vector3(1, 1, 1));
  geo.applyMatrix4(m);
  return geo;
}

function pushLeafCard(positions, colors, center, width, height, rng, color) {
  const yaw = rng() * Math.PI * 2;
  const pitch = -0.55 + rng() * 1.15;
  const normal = new THREE.Vector3(
    Math.cos(yaw) * Math.cos(pitch),
    Math.sin(pitch),
    Math.sin(yaw) * Math.cos(pitch),
  ).normalize();
  const up = Math.abs(normal.y) > 0.92 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const u = new THREE.Vector3().crossVectors(up, normal).normalize();
  const v = new THREE.Vector3().crossVectors(normal, u).normalize();
  const roll = (rng() - 0.5) * Math.PI;
  u.multiplyScalar(Math.cos(roll)).addScaledVector(v, Math.sin(roll)).normalize();
  v.crossVectors(normal, u).normalize();
  const hw = width * 0.5;
  const hh = height * 0.5;
  const pts = [
    center.clone().addScaledVector(u, -hw).addScaledVector(v, -hh),
    center.clone().addScaledVector(u, hw).addScaledVector(v, -hh),
    center.clone().addScaledVector(u, hw).addScaledVector(v, hh),
    center.clone().addScaledVector(u, -hw).addScaledVector(v, hh),
  ];
  for (const idx of [0, 1, 2, 0, 2, 3]) {
    const p = pts[idx];
    positions.push(p.x, p.y, p.z);
    colors.push(color[0], color[1], color[2]);
  }
}
