# Compact Atmosphere Reference

Status: reference only. The live lab is back on the full Takram LUT set while
we evaluate the sky/cloud baseline.

The compact experiment used Takram's combined-scattering mode:

```js
const atmosphereLoader = new PrecomputedTexturesLoader({
  format: 'binary',
  combinedScattering: true,
  higherOrderScattering: false,
}, manager);
```

Runtime atmosphere files:

- `public/atmosphere/scattering.bin`
- `public/atmosphere/transmittance.bin`
- `public/atmosphere/irradiance.bin`

Files removed from `public/atmosphere/` in compact mode:

- `single_mie_scattering.bin`
- `higher_order_scattering.bin`

Observed payload: about `11.86 MiB` for atmosphere + cloud assets. Re-enable
only after the full-LUT Takram reference look is visually pinned down.
