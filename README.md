# sky lab

Research lab for **Takram-style volumetric clouds** in a vanilla Three.js
+ Vite setup. Lives in its own repo at `~/clouds` (separate from the main
sim at `~/isometric`) so it can iterate without colliding with vite
processes there.

## Read these in order

1. [SKY_LAB_PLANNING_HANDOFF.md](SKY_LAB_PLANNING_HANDOFF.md) — original
   research handoff: Takram architecture, asset list, source URLs,
   black-horizon-strip triage ideas.
2. [SKY_LAB_PLAN.md](SKY_LAB_PLAN.md) — the actionable 7-phase plan with
   user answers committed.
3. [SKY_LAB_HORIZON_NOTES.md](SKY_LAB_HORIZON_NOTES.md) — Phase 1 horizon
   diagnosis.
4. [SKY_LAB_EXTRACTION_MAP.md](SKY_LAB_EXTRACTION_MAP.md) — Phase 5 source,
   shader, asset, and API-surgery inventory. Extraction itself has not been
   started.
5. [SKY_LAB_LIGHT_SHAFTS_NOTES.md](SKY_LAB_LIGHT_SHAFTS_NOTES.md) — Phase 6
   light-shaft wiring, artifacts, and budget notes.

## Run it

```sh
npm install
npm run dev
# headless-friendly local URL: http://127.0.0.1:57170/
```

Headless checks use Playwright:

```sh
npm run smoke
```

Canonical capture timing: wait **10 seconds** after the workshop boots or after
loading a scene preset before taking screenshots, sampling pixels, or judging a
UI state. The shared value lives at
`src/config/captureTiming.js` as `WORKSHOP_CAPTURE_SETTLE_MS`; `window.skyLab`
also exposes it as `captureSettleMs`. This matters on the target MacBook, where
the island/cloud scene can still be building for several seconds after the page
looks alive.

The root page now boots a local fork of the `~/isometric` water workshop
through `src/skyWorkshop.js`. The copied `src/workshop/water/` route is
also present for reference, but the sky lab entry is no longer a blank
stub.

The cloud-focused panel sections are the current Phase 2-4 spike. `clouds
render` now starts in `Takram ref` mode: Takram sky, Takram haze, Takram
clouds, full atmosphere LUTs, ACES finishing, and pass dithering enabled. The
same section also exposes a `legacy sky` mode that keeps Takram clouds but
turns off Takram sky/haze so we can study the old sim sky composite
separately. The weather/layer/lighting/shadow/debug sections expose the useful
Takram knobs, including a `Reference stack` toggle for isolating a single
editable layer. Keep `Fast sky boot` on for headless probes when you do not
need the island mesh.

The footer has a cloud preset strip above the wave preset strip. Click a cloud
slot to load it; shift-click to save the current cloud/Takram/tone/sun params
plus camera into `cloud-presets.json` under the dev server.

In `legacy sky`, clouds still use the Takram cloud effect, but the composer
exposure follows the original sim `render.exposure` so toggling clouds does
not intentionally retone the island.

Visible-cloud proof, 2026-05-23: [artifacts/visible-clouds/grid.png](artifacts/visible-clouds/grid.png)
shows the current default boot on the left and a sky-focused reference angle
on the right. The matching probe is [artifacts/visible-clouds/probe.json](artifacts/visible-clouds/probe.json).
Sky-choice proof, 2026-05-23: [artifacts/sky-choice/old-sky-clouds.png](artifacts/sky-choice/old-sky-clouds.png)
and [artifacts/sky-choice/takram-sky-clouds.png](artifacts/sky-choice/takram-sky-clouds.png)
show the separated modes. The matching probe is [artifacts/sky-choice/probe.json](artifacts/sky-choice/probe.json).

Takram's vanilla story uses `DitheringEffect` from
`@takram/three-geospatial-effects`; `postprocessing` does not export it. That
extra package is intentionally not installed yet. The current finishing section
uses `postprocessing`'s built-in pass dithering switch and a tone-map selector:
ACES by default for the tuned lab aesthetic, with neutral, AGX, and linear
available for manual comparison work.

The public atmosphere payload is currently the full Takram atmosphere LUT set:
`scattering.bin`, `single_mie_scattering.bin`, `higher_order_scattering.bin`,
`transmittance.bin`, and `irradiance.bin`. The compact combined-scattering
experiment remains documented in `artifacts/compact-atmosphere-reference.md`
for the later sub-15 MB packaging pass.

## Layout

```
~/clouds/
├── SKY_LAB_PLAN.md                  ← the plan
├── SKY_LAB_PLANNING_HANDOFF.md      ← background research
├── ATTRIBUTION.md                   ← Takram MIT + Bruneton citation
├── package.json                     ← three + vite + Takram Phase 2 deps
├── vite.config.mjs                  ← port 57170, strictPort, local
│                                      preset/sticky middleware
├── index.html                       ← boots src/skyWorkshop.js
├── presets.json                     ← copied from ~/isometric for local use
├── sticky.json                      ← copied from ~/isometric for local use
├── src/
│   ├── skyWorkshop.js               ← real water-workshop fork, adjusted to
│   │                                  local root imports + Takram controls
│   ├── TakramSkyRig.js              ← opt-in Takram composer/sky/cloud rig
│   ├── atmosphere/ core/ config/    ← copied from ~/isometric
│   ├── water/ voxel/ flora/ fx/     ← copied from ~/isometric
│   ├── ui/ state/ gen/ camera/      ← copied from ~/isometric
│   └── workshop/water/              ← 1:1 copied water workshop source
└── public/
    ├── presets.json                 ← static fallback copied locally
    ├── atmosphere/                  ← full Takram/Bruneton LUT set for now
    └── clouds/                      ← cloud weather/shape/STBN textures
```

## Rules of the road

- **Do not import from `~/isometric`.** The forked sim/workshop files in
  this repo are point-in-time copies. If the main repo improves, back-port
  deliberately.
- **Do not push tuning or assets back to the main sim** until the user
  approves an extraction (Phase 5+ in the plan).
- **No credits in the main sim.** Attribution stays here in
  `ATTRIBUTION.md`. The main sim has its own consolidated attribution
  pass planned for later.
- **Clouds-only scope.** No water, no LOD, no WebGPU implementation. See
  the plan's §0 non-goals.
- **`/tmp/three-geospatial`** is where Takram source should be cloned
  for inspection. Re-clone if `/tmp` has been swept; the handoff pinned
  commit `fc25526342a01d8e2b02f527fceb7f876e34b6d8`. For
  `public/clouds/stbn.bin`, use the Takram GitHub media URL documented in
  `ATTRIBUTION.md`; a blobless clone only gives a Git LFS pointer.

## Handoff notes for a new Claude (e.g. VS Code instance)

Everything you need is in this repo. Don't read `~/isometric` files
unless you're investigating the horizon-strip fix in Phase 7. Start with
the two markdown docs above, then look at `src/skyWorkshop.js` and the
cloned `src/waterWorkshop.js` for the fork pattern.
