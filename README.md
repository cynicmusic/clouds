# island

Canonical island sim with Takram atmosphere/clouds, the legacy island/water
stack, and one master preset surface.

This repo started as a sky/cloud lab, but the root app at
`http://127.0.0.1:57170/` is now the authoritative island surface. The old
research docs live in `archive/sky-lab-research/`; use
[TAKRAM_FINAL_INTEGRATION_PLAN.md](TAKRAM_FINAL_INTEGRATION_PLAN.md) as the
current plan.

## Run

```sh
npm install
npm run dev
# http://127.0.0.1:57170/
```

Headless smoke check:

```sh
npm run smoke
```

Canonical capture timing: wait 10 seconds after boot or after loading a preset
before judging screenshots or pixel samples. The shared value is
`WORKSHOP_CAPTURE_SETTLE_MS` in `src/config/captureTiming.js`, and the live app
exposes it as `window.island.captureSettleMs`.

## Current Shape

- Root entrypoint: `index.html` -> `src/island.js`.
- Upper-left badge: `island`.
- One preset system: banks `A-H`, slots `1-8`.
- Shift-click or shift-number saves a master preset.
- A master preset captures all current params plus camera pose.
- Cloud and wave mini preset rows have been removed.
- Sticky persistence is removed. The diamond is only a purple, local,
  in-session important-param marker.
- Takram ref and legacy sky paths remain available; ACES is the default tone
  mapping path, with AGX only for manual comparison.
- Pool, methodology, palm, and pine workshops remain. Water, waves, godray,
  old lab, and old main entrypoints have been retired.

## Files

```
~/clouds/
├── index.html
├── src/island.js
├── src/island/IslandSea.js
├── src/TakramSkyRig.js
├── src/config/presets.js
├── src/ui/
├── src/core/
├── src/atmosphere/
├── workshop/pool/
├── workshop/methodology/
├── workshop/palm/
├── workshop/pine/
├── public/atmosphere/
└── public/clouds/
```

## Notes

- Do not import from `~/isometric`; this repo is a local fork.
- Do not mutate `presets.json` unless deliberately saving/replacing a preset.
- Tree workshop code is golden and should stay isolated from island cleanup.
- Atmosphere payload is still the full Takram/Bruneton LUT set for now. The
  later packaging pass can re-compact toward the sub-15 MB goal.
