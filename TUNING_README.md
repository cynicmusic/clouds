# Island Tuning Notes

These are gain-staging and routing notes for the current island lab. They are
not a fix list. The goal is to keep the current Takram island stack readable
while making the powerful controls and coupled controls explicit.

## Render Paths

- When the Takram rig is enabled, `Scene.start()` renders through
  `takramRig.render(dt)`.
- When the Takram rig is disabled, `Scene.start()` renders through the legacy
  `postfx.render(...)` path.
- God rays live in the legacy `PostFX` path. They do not currently participate
  in the Takram composer path, so they can appear to do nothing while Takram sky
  and clouds are active.

## Important Params

- `sun.elevationDeg`: ramps the legacy island light quickly. Around 10 degrees
  it is already moving hard toward daytime.
- `sun.intensity`: feeds the legacy sun model.
- `shadows.secondaryMix` + add mode: can make both sun lights contribute
  strongly.
- `takramAtmosphere.sunLight`: Takram post-process sun irradiance on geometry.
- `takramAtmosphere.skyLight`: Takram post-process sky irradiance on geometry.
- `takramAtmosphere.albedoScale`: big multiplier for that Takram scene-lighting
  feel.
- `cloudWeather.coverage`: not just cloud amount when aerial perspective is on.
  Clouds feed Takram atmosphere overlay/shadow buffers, so coverage changes the
  lighting/composite over the scene.
- `cloudsRender.exposure`: Takram composer tone-map exposure.
- `render.exposure`: still leaks into legacy fog/horizon/hemi sync, even while
  Takram is active. Right now it mostly reads as ocean/horizon power.
- `render.fogDensity`: horizon haze is dangerous and can act as global blue
  light. It can turn the whole scene blue.

## Tone Mapping

`cloudsRender.exposure` feeds the Takram composer exposure. The actual final
operator is `cloudFinishing.toneMapping`:

- `0`: ACES
- `1`: Neutral, the "NORMAL" look
- `2`: AGX
- `3`: Linear

The legacy renderer is initialized with Three.js ACES filmic tone mapping.
Takram temporarily switches the renderer to `NoToneMapping` while its composer
renders, then restores the previous renderer state. That means the Takram
composer tone mapping is the visible final operator when the Takram path is on.

## Ground And Horizon

Ground albedo is the culprit for horizon line.

`takramAtmosphere.ground` controls the SkyMaterial ground intersection branch
and the AerialPerspective ground branch. `takramAtmosphere.groundAlbedo` only
has visible effect while that ground branch is enabled. If `Ground branch` is
toggled off, `Ground albedo` stops working.

Horizon line and legacy fog interact negatively. Move legacy fog/horizon haze up
near the Takram ground controls with an explicit flag before doing serious
horizon tuning.

## Coupled Controls And Gotchas

- `cloudLayer0.referenceStack`: when this is on, the Takram reference r/g/b
  cloud layers own the cloud stack. Single-layer isolate sliders like altitude,
  height, density, shape amount, and detail amount are ignored until reference
  stack is off.
- `cloudsRender.aerialPerspective`: connects Takram aerial perspective,
  transmittance, clouds, overlay, and shadow buffers into the scene composite.
  With it on, cloud weather values can read like scene-wide exposure controls.
- `cloudsRender.mode`: writes multiple render-route fields at once, including
  atmosphere, clouds, aerial perspective, exposure, tone mapping, and dithering.
  Treat it as a route switch, not a small look adjustment.
- Two legacy directional sun lights are still present. In shadow add mode,
  `shadows.secondaryMix` can stack the coarse sun light on top of the primary
  sun light.
- The legacy horizon fog sampler reads the legacy sky LUT and ACES-maps it with
  the renderer exposure, then pushes that color to fog, ocean horizon, and hemi
  fill. This is why `render.exposure` and legacy fog can still affect the
  horizon/ocean/hemi even in the Takram era.

## Takram Lighting Controls

The direct Takram scene-lighting switches available right now are booleans:

- `takramAtmosphere.sunLight`
- `takramAtmosphere.skyLight`

The scalar Takram scene-lighting control available right now is:

- `takramAtmosphere.albedoScale`

Cloud-side lighting scalars such as `cloudLighting.skyLightScale`,
`cloudLighting.groundBounceScale`, `cloudLighting.scatteringCoefficient`,
`cloudLighting.absorptionCoefficient`, `cloudLighting.powderScale`, and
anisotropy shape cloud lighting. They do not directly replace the scene
geometry light controls.

## Trees And Seasons

The current tree target is A5 with `island.massif` lowered to `280`. That makes
the autumn band much more visible and gives the mustard/yellow region enough
area to carry the next tree pass.

That yellow can flash golden during a cloud gap. Under thicker cloud cover it
should be read as mustard yellow, not as a target that must always glow.

The A5 season shape currently uses:

- `seasons.sweepDeg`: `38`
- `seasons.summerEnd`: `0.26`
- `seasons.autumnEnd`: `0.50`
- `seasons.coniferEnd`: `0.79`
- `seasons.borderWarp`: `1.15`
- `seasons.craggy`: `0.40`
- `seasons.fairway`: `0.86`
- `seasons.fairwayBand`: `56`
- `seasons.bunkerDensity`: `0.30`
- `seasons.bunkerSize`: `22`

For the current A1 tree target (`massif: 280`, `resolution: 992`), generated
land cells break down roughly as:

- summer: `72.8%`
- autumn: `20.8%`
- conifer: `5.5%`
- winter: `0.9%`

The land material spread is roughly:

- grass: `57.2%`
- fairway: `18.4%`
- rock: `16.6%`
- sand: `5.4%`
- snow: `1.8%`
- dirt: `0.3%`
- grassy snow: `0.3%`

The palm golf-course look is checkpointed as `PALM TREE CLASSIC`. The next tree
system should use the imported 128-slot tree bank by default, with palms folded
into that bank as fringe/lagoon/coast trees rather than as the whole island
population.
