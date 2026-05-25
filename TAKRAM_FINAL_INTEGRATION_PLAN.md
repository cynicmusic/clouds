# TAKRAM_FINAL_INTEGRATION_PLAN

Authoritative plan as of the `takrum clouds final` checkpoint.

The older sky-lab phase docs were useful research scaffolding, but this repo is
now being treated as the candidate main-sim successor. Those older docs live in
`archive/sky-lab-research/`. Use this file as the current source of truth.

## Current Truth

- Live URL: `http://127.0.0.1:57170/`
- Root workshop name in code: `takram clouds final`
- Upper-left live badge text: `takrum clouds final`
- Current default reload state is intentional.
- Current scene preset slots `1` through `8` are intentional.
- User-verified priority slots: reload, then presets `1`, `2`, and `3` are good.
- Temporary caveat: the inherited workshop still applies `sticky.json` during
  reload. Treat current `sticky.json` only as a captured reload-state bridge
  until the master preset serializer absorbs those values.
- Do not mutate `presets.json`, `public/presets.json`, `sticky.json`, or browser
  preset storage during the next architecture pass unless the task explicitly
  says "save preset" or "replace preset".
- No sticky params in the final preset architecture.
- Tree workshop/state is golden. Do not touch tree workshop code as part of
  preset consolidation.

## Direction

We are collapsing the lab toward one master workshop/preset model.

The current separate systems are historical:

- scene presets: bank `A-H` plus slots `1-8`
- cloud mini presets: `1-8`
- wave mini presets: `1-8`
- sticky params

Final direction:

- One master preset row wins.
- A master preset captures every user-facing sim parameter, including clouds,
  Takram atmosphere, cloud lighting/weather/layers/shadows, water, waves, sun,
  classic atmosphere if still present, lighting, island, voxel, seasons, tree,
  shadows, render, god rays, camera pose, and any future finishing settings.
- Loading a master preset should fully replace the workshop state.
- Saving a master preset should write one complete package, not a partial cloud
  or wave fragment.
- Sticky state should not override master presets.
- Separate cloud and wave mini rows should be removed after the master preset
  path is proven.

## Sky Direction

Short term:

- Keep the legacy/Hillaire sky path available while consolidating presets.
- Keep Takram ref/Takram atmosphere routed through ACES by default.
- AGX remains a manual comparison option only.
- Do not allow route buttons or mode switches to silently invoke AGX.

Medium term:

- Retire the old Hillaire legacy sky path if Takram atmosphere owns the final
  look.
- Use the Takram atmosphere/cloud stack as the main sky system.
- Preserve the current white top debug sections for cloud/Takram controls until
  the master preset system is stable.

## Integration Risk

The preset refactor is big because this lab still contains water-workshop
lineage. Treat the lab as authoritative, but do not assume each inherited preset
system has the same save/load semantics.

Primary risks:

- partial presets accidentally overriding master presets
- sticky state reapplying after a clean preset load
- cloud/wave mini presets mutating state during tests
- scene preset loads stripping or preserving the wrong sections
- current good slots `1`, `2`, and `3` being overwritten during refactor
- tree workshop changes leaking into the main workshop refactor

## Checkpoint Protocol

Before preset surgery:

1. Commit the live badge/workshop identity and this plan.
2. Keep current preset files untouched.
3. Keep old sky-lab research docs archived.
4. Confirm no tree workshop files are in the commit.

During preset surgery:

1. Add a master preset serializer/deserializer first.
2. Prove it can round-trip the current state without writing existing slots.
3. Add a new temporary save target or dry-run report before replacing UI rows.
4. Remove cloud/wave mini rows only after the master snapshot is proven.
5. Only then wire shift-save/load to the master package.

Exit criteria:

- Reload at `http://127.0.0.1:57170/` preserves the current default.
- Presets `1`, `2`, and `3` remain visually correct.
- Slots `1-8` are unchanged unless explicitly replaced.
- One master preset package captures and restores every parameter plus camera.
- No sticky params can corrupt a master preset load.
