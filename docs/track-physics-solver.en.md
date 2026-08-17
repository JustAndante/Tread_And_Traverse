---
layout: default
title: "Track Spline Builder — Quick Start"
description: "Minimal working setup for Track Spline Builder"
lang: en
page_kind: guide
---

<div class="doc-breadcrumbs">
  <a href="{{ '/en/' | relative_url }}">← Documentation</a>
  <a class="is-active" href="{{ '/docs/track-physics-solver.en.html' | relative_url }}">Track guide</a>
  <a href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Русский</a>
</div>

# Track Spline Builder — Quick Start

Result: one deforming visual track loop per vehicle side.

## 1. Add the components

For each side of the vehicle, add:

- one Spline Component;
- one `Track Spline Builder`;
- one `Track Physics Solver`.

## 2. Configure Track Spline Builder

Set:

1. `Source Spline` to the side's spline.
2. `Track Link Mesh` to the track-link mesh.
3. `Fixed Link Count` or `Link Spacing`.
4. `Orientation Mode` to `Planar Track`.
5. Optional: enable `Build Connector Layer` and assign `Connector Mesh`.
6. Click `Rebuild Track`.

## 3. Configure Track Physics Solver

Set:

1. `Target Spline` to the same spline used by the Builder.
2. `Source Mesh Component` to the vehicle skeletal mesh.
3. Fill the road-wheel naming fields: prefix, suffix, first index, count, and radius.
4. If used, enable top rollers and fill their naming fields, count, and contact radius.
5. Set the front and rear end-wheel bones and their wrap radii.
6. Keep `Surface Query Mode = World Static Only` unless the project needs a different query.
7. Click `Generate Bone Rig Now`.

The generated controls must follow the real wheel order around the track loop.

## 4. Connect the output

In the Solver:

1. Set `Track Builder` to the matching Builder.
2. Enable `Update Track Builder After Solve`.
3. Enable `Rebuild On Begin Play`, `Regenerate Controls On BeginPlay`, and `Solve Every Tick`.

Use `Manual / Fallback Quality` for a fixed quality level. Use another `Quality Selection Policy` only when local, distance-based, or external quality selection is required.

## 5. Validate

Click `Validate Setup`, then run PIE and check:

- the status becomes `Ready`;
- the loop is closed and link count stays fixed;
- links follow suspension and terrain without touching the tank body;
- both sides move in the correct direction and at the expected speed.

## If setup fails

- Missing wheels: check bone names, suffix, first index, and count.
- Wrong loop order: regenerate the bone rig and inspect front/rear wheel assignment.
- Track hits the vehicle: restore `World Static Only`.
- No visible links: verify `Source Spline`, `Track Link Mesh`, and `Track Builder`.
- Wrong movement speed: verify the selected drive wheel and the Chaos wheel radius source.

## Optional reference

Use the [Track Blueprint node reference]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }}) only when the normal Details-panel workflow is not enough.
