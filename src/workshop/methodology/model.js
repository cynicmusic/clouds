import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mulberry32 } from '../../gen/noise.js';

const YUP = new THREE.Vector3(0, 1, 0);
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _roll = new THREE.Quaternion();
const _d = new THREE.Vector3();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

const CYL = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 1, false).toNonIndexed();
const CARD = new THREE.PlaneGeometry(1, 1).toNonIndexed();
const OCT = new THREE.OctahedronGeometry(0.5, 0).toNonIndexed();
for (const g of [CYL, CARD, OCT]) g.deleteAttribute('uv');

const BARK_LOW = [0.18, 0.13, 0.09];
const BARK_HIGH = [0.46, 0.34, 0.22];
const BARK_COOL = [0.23, 0.22, 0.20];
const PINE_DARK = [0.04, 0.11, 0.09];
const PINE_MID = [0.15, 0.34, 0.26];
const PINE_LITE = [0.47, 0.64, 0.40];
const LEAF_DARK = [0.08, 0.22, 0.10];
const LEAF_MID = [0.26, 0.50, 0.18];
const LEAF_LITE = [0.68, 0.75, 0.26];
const WINTER_BARK = [0.42, 0.37, 0.32];
const SNOW_BLUE = [0.62, 0.80, 0.86];

function mix(a, b, t) {
  const u = THREE.MathUtils.clamp(t, 0, 1);
  return [a[0] * (1 - u) + b[0] * u, a[1] * (1 - u) + b[1] * u, a[2] * (1 - u) + b[2] * u];
}

function tint(c, rng, amt = 0.08) {
  const k = (rng() - 0.5) * amt;
  return [
    THREE.MathUtils.clamp(c[0] + k * 0.7, 0, 1),
    THREE.MathUtils.clamp(c[1] + k, 0, 1),
    THREE.MathUtils.clamp(c[2] - k * 0.4, 0, 1),
  ];
}

function triCount(obj) {
  let tris = 0;
  obj.traverse((o) => {
    const g = o.geometry;
    if (!g) return;
    tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
  });
  return Math.round(tris);
}

class Builder {
  constructor() { this.parts = []; }
  push(g, rgb) {
    if (g.index) {
      const flat = g.toNonIndexed();
      g.dispose();
      g = flat;
    }
    const n = g.attributes.position.count;
    const colors = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      colors[i * 3] = rgb[0];
      colors[i * 3 + 1] = rgb[1];
      colors[i * 3 + 2] = rgb[2];
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.parts.push(g);
  }
  cyl(center, dir, len, baseRad, tipRad, rgb, sides = 6) {
    _d.copy(dir).normalize();
    _q.setFromUnitVectors(YUP, _d);
    _s.set(1, len, 1);
    _m.compose(center, _q, _s);
    const g = new THREE.CylinderGeometry(tipRad, baseRad, 1, sides, 1, false);
    g.deleteAttribute('uv');
    g.applyMatrix4(_m);
    this.push(g, rgb);
  }
  card(center, dir, len, width, rgb, roll = 0) {
    _d.copy(dir).normalize();
    _q.setFromUnitVectors(YUP, _d);
    if (roll) _q.multiply(_roll.setFromAxisAngle(YUP, roll));
    _s.set(width, len, 1);
    _m.compose(center, _q, _s);
    this.push(CARD.clone().applyMatrix4(_m), rgb);
  }
  oct(center, scale, rgb, rot = 0) {
    _q.setFromAxisAngle(YUP, rot);
    _s.set(scale.x, scale.y, scale.z);
    _m.compose(center, _q, _s);
    this.push(OCT.clone().applyMatrix4(_m), rgb);
  }
  custom(positions, rgb) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    g.computeVertexNormals();
    this.push(g, rgb);
  }
  finish(name, doubleSide = true) {
    const group = new THREE.Group();
    if (!this.parts.length) return group;
    const geo = mergeGeometries(this.parts, false);
    for (const g of this.parts) g.dispose();
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.88,
      metalness: 0,
      side: doubleSide ? THREE.DoubleSide : THREE.FrontSide,
    }));
    mesh.name = name;
    mesh.castShadow = true;
    group.add(mesh);
    group.name = name;
    group.userData.tris = triCount(group);
    return group;
  }
}

function trunkSpine(rng, height, bend = 1.5, steps = 5) {
  const a = rng() * Math.PI * 2;
  const bx = Math.cos(a) * bend;
  const bz = Math.sin(a) * bend;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    pts.push(new THREE.Vector3(
      bx * Math.sin(t * Math.PI * 0.82) * t,
      height * t,
      bz * Math.sin(t * Math.PI * 0.92) * t,
    ));
  }
  return pts;
}

function addSegmentedTrunk(b, rng, height, baseR, topR, color = BARK_HIGH, bend = 1.2, steps = 5) {
  const spine = trunkSpine(rng, height, bend, steps);
  for (let i = 0; i < spine.length - 1; i++) {
    const t = i / Math.max(1, spine.length - 2);
    const p0 = spine[i], p1 = spine[i + 1];
    b.cyl(
      p0.clone().lerp(p1, 0.5),
      p1.clone().sub(p0),
      p0.distanceTo(p1),
      THREE.MathUtils.lerp(baseR, topR, t),
      THREE.MathUtils.lerp(baseR, topR, t + 1 / steps),
      mix(BARK_LOW, color, 0.25 + t * 0.75),
      6,
    );
  }
  return spine;
}

function addPinePlate(b, center, radius, drop, phase, rng, color) {
  const segs = 12;
  const pos = [];
  for (let i = 0; i < segs; i++) {
    const a0 = phase + (i / segs) * Math.PI * 2;
    const a1 = phase + ((i + 1) / segs) * Math.PI * 2;
    const r0 = radius * (0.72 + 0.30 * rng());
    const r1 = radius * (0.72 + 0.30 * rng());
    const y0 = center.y - drop * (0.65 + 0.45 * rng());
    const y1 = center.y - drop * (0.65 + 0.45 * rng());
    pos.push(
      center.x, center.y, center.z,
      center.x + Math.cos(a0) * r0, y0, center.z + Math.sin(a0) * r0,
      center.x + Math.cos(a1) * r1, y1, center.z + Math.sin(a1) * r1,
    );
  }
  b.custom(pos, color);
}

function branchDirs(count, rng, lift = 0.2) {
  const dirs = [];
  for (let i = 0; i < count; i++) {
    const a = i * 2.39996 + rng() * 0.8;
    const y = lift + (rng() - 0.5) * 0.32;
    dirs.push(new THREE.Vector3(Math.cos(a), y, Math.sin(a)).normalize());
  }
  return dirs;
}

function pineTieredPlates(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const height = 14 + rng() * 4;
  const spine = addSegmentedTrunk(b, rng, height, 0.42, 0.13, BARK_HIGH, 0.9, 4);
  const tiers = 7;
  for (let i = 0; i < tiers; i++) {
    const t = i / (tiers - 1);
    const y = height * (0.27 + t * 0.68);
    const anchor = spine[Math.min(spine.length - 1, Math.round(t * (spine.length - 1)))].clone();
    anchor.y = y;
    const radius = THREE.MathUtils.lerp(4.8, 0.8, Math.pow(t, 0.85)) * (0.8 + rng() * 0.25);
    const col = tint(mix(PINE_DARK, PINE_LITE, 0.25 + t * 0.45), rng, 0.10);
    addPinePlate(b, anchor, radius, 0.55 + (1 - t) * 0.45, rng() * Math.PI * 2, rng, col);
  }
  return finishStyle(b.finish('PineTieredPlates'), 'pine-tiered-plates', 'Pine tier plates');
}

let pineSilhouetteTexture = null;
function getPineSilhouetteTexture() {
  if (pineSilhouetteTexture) return pineSilhouetteTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'source-over';
  const grad = ctx.createLinearGradient(0, 28, 0, 232);
  grad.addColorStop(0, 'rgba(130,185,112,0.82)');
  grad.addColorStop(0.38, 'rgba(44,102,76,0.88)');
  grad.addColorStop(1, 'rgba(12,42,34,0.92)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(96, 14);
  const rows = [
    [40, 62], [70, 82], [30, 102], [78, 126], [26, 152],
    [86, 176], [34, 202], [72, 226],
  ];
  for (const [left, y] of rows) {
    ctx.lineTo(left, y);
    ctx.lineTo(84, y - 10);
  }
  ctx.lineTo(72, 238);
  ctx.lineTo(120, 238);
  for (let i = rows.length - 1; i >= 0; i--) {
    const [left, y] = rows[i];
    const right = 192 - left;
    ctx.lineTo(108, y - 10);
    ctx.lineTo(right, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0,0,0,0.75)';
  for (let i = 0; i < 12; i++) {
    const x = 42 + ((i * 37) % 108);
    const y = 58 + ((i * 43) % 150);
    ctx.beginPath();
    ctx.ellipse(x, y, 8 + (i % 4) * 4, 3 + (i % 3), (i * 0.7) % Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  pineSilhouetteTexture = new THREE.CanvasTexture(canvas);
  pineSilhouetteTexture.colorSpace = THREE.SRGBColorSpace;
  pineSilhouetteTexture.needsUpdate = true;
  return pineSilhouetteTexture;
}

function pineBillboardHybrid(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const height = 14 + rng() * 5;
  addSegmentedTrunk(b, rng, height * 0.92, 0.34, 0.10, BARK_COOL, 0.75, 4);
  const group = b.finish('PineBillboardTrunk', false);
  const tex = getPineSilhouetteTexture();
  const mat = new THREE.MeshStandardMaterial({
    map: tex,
    transparent: true,
    alphaTest: 0.18,
    roughness: 0.95,
    side: THREE.DoubleSide,
  });
  const cards = 4;
  for (let i = 0; i < cards; i++) {
    const geo = new THREE.PlaneGeometry(9.5 + rng() * 1.3, height * 0.92, 1, 1);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, height * 0.55, 0);
    mesh.rotation.y = (i / cards) * Math.PI;
    mesh.name = 'PineSilhouetteCard';
    group.add(mesh);
  }
  return finishStyle(group, 'pine-silhouette-shell', 'Pine silhouette shell');
}

function pineSparseScots(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const height = 12 + rng() * 5;
  const spine = addSegmentedTrunk(b, rng, height, 0.45, 0.16, BARK_HIGH, 2.2, 5);
  const limbs = 5 + ((rng() * 4) | 0);
  for (let i = 0; i < limbs; i++) {
    const t = 0.38 + rng() * 0.50;
    const baseIdx = Math.min(spine.length - 1, Math.round(t * (spine.length - 1)));
    const base = spine[baseIdx].clone();
    const a = rng() * Math.PI * 2;
    const dir = new THREE.Vector3(Math.cos(a), 0.24 + rng() * 0.25, Math.sin(a)).normalize();
    const len = (2.4 + rng() * 2.5) * (1.18 - t * 0.45);
    const tip = base.clone().addScaledVector(dir, len);
    b.cyl(base.clone().lerp(tip, 0.5), dir, len, 0.12 + (1 - t) * 0.08, 0.035, mix(BARK_LOW, BARK_HIGH, t), 5);
    const tuftCol = tint(mix(PINE_DARK, PINE_LITE, 0.34 + rng() * 0.22), rng, 0.12);
    for (let k = 0; k < 3; k++) {
      const td = dir.clone()
        .addScaledVector(YUP, -0.35 + rng() * 0.15)
        .add(new THREE.Vector3(Math.cos(a + k * 2.1), 0, Math.sin(a + k * 2.1)).multiplyScalar(0.25))
        .normalize();
      b.card(tip.clone().addScaledVector(td, 0.35), td, 1.15 + rng() * 0.7, 0.36 + rng() * 0.22, tuftCol, rng() * Math.PI);
    }
  }
  return finishStyle(b.finish('SparseScots'), 'pine-sparse-scots', 'Scots sparse');
}

function addDeciduousSkeleton(b, rng, height = 9, limbCount = 7, winter = false) {
  const spine = addSegmentedTrunk(b, rng, height, 0.48, 0.22, winter ? WINTER_BARK : BARK_HIGH, 1.1, 4);
  const crown = spine[spine.length - 1].clone();
  const tips = [];
  const dirs = branchDirs(limbCount, rng, 0.36);
  for (let i = 0; i < dirs.length; i++) {
    const t = 0.42 + rng() * 0.42;
    const base = spine[Math.min(spine.length - 2, Math.max(1, Math.round(t * (spine.length - 1))))].clone();
    const dir = dirs[i];
    const len = 2.4 + rng() * 2.0;
    const mid = base.clone().addScaledVector(dir, len * 0.55).addScaledVector(YUP, rng() * 0.55);
    const tip = base.clone().addScaledVector(dir, len).addScaledVector(YUP, 0.35 + rng() * 0.95);
    b.cyl(base.clone().lerp(mid, 0.5), mid.clone().sub(base), base.distanceTo(mid), 0.16, 0.09, winter ? WINTER_BARK : BARK_HIGH, 5);
    b.cyl(mid.clone().lerp(tip, 0.5), tip.clone().sub(mid), mid.distanceTo(tip), 0.09, 0.035, winter ? WINTER_BARK : BARK_HIGH, 5);
    tips.push(tip);
  }
  return { spine, crown, tips };
}

function deciduousLimbChunks(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const { tips, crown } = addDeciduousSkeleton(b, rng, 9.5 + rng() * 2, 7, false);
  const centers = [crown.clone().add(new THREE.Vector3(0, 1.0, 0)), ...tips];
  for (let i = 0; i < centers.length; i++) {
    if (i > 0 && rng() < 0.18) continue;
    const c = centers[i];
    const s = 1.5 + rng() * 1.25;
    const col = tint(mix(LEAF_DARK, LEAF_LITE, 0.30 + rng() * 0.55), rng, 0.12);
    b.oct(c, new THREE.Vector3(s * (1.0 + rng() * 0.4), s * (0.75 + rng() * 0.3), s * (0.9 + rng() * 0.4)), col, rng() * Math.PI);
  }
  return finishStyle(b.finish('DecidLimbChunks'), 'decid-limb-chunks', 'Limb crown chunks');
}

function addCanopyShell(b, center, radius, rng, color) {
  const rings = 7;
  const segs = 14;
  const phases = [rng() * 6.28, rng() * 6.28, rng() * 6.28];
  const p = [];
  const point = (rIdx, sIdx) => {
    const v = rIdx / rings;
    const theta = v * Math.PI;
    const u = sIdx / segs;
    const phi = u * Math.PI * 2;
    const lump = 1 + 0.16 * Math.sin(phi * 3 + phases[0]) + 0.10 * Math.sin(theta * 5 + phases[1]);
    return new THREE.Vector3(
      center.x + Math.sin(theta) * Math.cos(phi) * radius.x * lump,
      center.y + Math.cos(theta) * radius.y * lump,
      center.z + Math.sin(theta) * Math.sin(phi) * radius.z * lump,
    );
  };
  for (let r = 1; r < rings; r++) {
    for (let s = 0; s < segs; s++) {
      const hole = Math.sin((r + 1) * 1.7 + (s + 3) * 2.31 + phases[2]) > 0.63;
      if (hole) continue;
      const a = point(r, s);
      const b0 = point(r + 1, s);
      const c = point(r + 1, s + 1);
      const d = point(r, s + 1);
      p.push(a.x, a.y, a.z, b0.x, b0.y, b0.z, c.x, c.y, c.z);
      p.push(a.x, a.y, a.z, c.x, c.y, c.z, d.x, d.y, d.z);
    }
  }
  b.custom(p, color);
}

function deciduousCarvedCanopy(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const { crown } = addDeciduousSkeleton(b, rng, 8.5 + rng() * 2, 4, false);
  addCanopyShell(
    b,
    crown.clone().add(new THREE.Vector3(0, 2.0, 0)),
    new THREE.Vector3(4.2 + rng(), 3.0 + rng() * 0.8, 3.8 + rng()),
    rng,
    tint(mix(LEAF_DARK, LEAF_LITE, 0.42 + rng() * 0.25), rng, 0.10),
  );
  return finishStyle(b.finish('DecidCarvedCanopy'), 'decid-carved-canopy', 'Carved canopy');
}

function deciduousLeafPads(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const { tips, crown } = addDeciduousSkeleton(b, rng, 9 + rng() * 2, 8, false);
  const pads = [crown.clone().add(new THREE.Vector3(0, 1.4, 0)), ...tips];
  for (let i = 0; i < pads.length; i++) {
    const c = pads[i];
    const col = tint(mix(LEAF_DARK, LEAF_LITE, 0.38 + rng() * 0.42), rng, 0.14);
    for (let k = 0; k < 2; k++) {
      const dir = new THREE.Vector3(Math.cos(k * Math.PI * 0.5 + rng() * 0.2), 0.10 + rng() * 0.20, Math.sin(k * Math.PI * 0.5 + rng() * 0.2)).normalize();
      b.card(c.clone().addScaledVector(YUP, rng() * 0.35), dir, 2.0 + rng() * 1.2, 1.1 + rng() * 0.7, col, rng() * Math.PI);
    }
  }
  return finishStyle(b.finish('DecidLeafPads'), 'decid-leaf-pads', 'Leaf pads');
}

function deciduousWinterSkeleton(seed) {
  const rng = mulberry32(seed);
  const b = new Builder();
  const { tips } = addDeciduousSkeleton(b, rng, 9.5 + rng() * 2, 9, true);
  for (const tip of tips) {
    for (let k = 0; k < 2; k++) {
      const a = rng() * Math.PI * 2;
      const dir = new THREE.Vector3(Math.cos(a), 0.24 + rng() * 0.35, Math.sin(a)).normalize();
      const len = 0.9 + rng() * 0.75;
      b.cyl(tip.clone().addScaledVector(dir, len * 0.5), dir, len, 0.035, 0.012, WINTER_BARK, 4);
      if (rng() > 0.62) b.oct(tip.clone().addScaledVector(YUP, 0.12), new THREE.Vector3(0.18, 0.08, 0.18), SNOW_BLUE, rng() * Math.PI);
    }
  }
  return finishStyle(b.finish('DecidWinterSkeleton'), 'decid-winter-skeleton', 'Winter skeleton');
}

function finishStyle(group, id, label) {
  group.name = label;
  group.userData.styleId = id;
  group.userData.label = label;
  group.userData.tris = triCount(group);
  return group;
}

export const TREE_STYLES = [
  { id: 'pine-tiered-plates', label: 'Pine tier plates', family: 'pine', make: pineTieredPlates },
  { id: 'pine-silhouette-shell', label: 'Pine silhouette shell', family: 'pine', make: pineBillboardHybrid },
  { id: 'pine-sparse-scots', label: 'Scots sparse', family: 'pine', make: pineSparseScots },
  { id: 'decid-limb-chunks', label: 'Limb crown chunks', family: 'deciduous', make: deciduousLimbChunks },
  { id: 'decid-carved-canopy', label: 'Carved canopy', family: 'deciduous', make: deciduousCarvedCanopy },
  { id: 'decid-leaf-pads', label: 'Leaf pads', family: 'deciduous', make: deciduousLeafPads },
  { id: 'decid-winter-skeleton', label: 'Winter skeleton', family: 'deciduous', make: deciduousWinterSkeleton },
];

export function makeTreeStyle(style, seed) {
  const found = TREE_STYLES.find((s) => s.id === style || s.label === style) || TREE_STYLES[0];
  return found.make((seed >>> 0) || 1);
}
