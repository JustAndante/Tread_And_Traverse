---
layout: default
lang: en
page_kind: reference
title: "Track Spline Builder — Builder settings"
description: "Visual link, connector, and track-motion fields"
product: track
doc_section: settings
---

# Track Spline Builder settings

The Builder does not solve the physical shape. It reads a solved spline, places
a constant set of links and connectors on it, and advances them around the loop.

<figure class="doc-figure">
  <img src="{{ '/assets/images/track/links-motion.svg' | relative_url }}" alt="Constant link count and motion around the solved spline">
  <figcaption>The Solver owns the shape; the Builder owns mesh placement and motion.</figcaption>
</figure>

## Required setup

| Setting | Purpose |
| --- | --- |
| `Source Spline` | The solved loop spline for this side. |
| `Track Output` | ISM/HISM component receiving the main links. |
| `Track Link Mesh` | Mesh for one shoe or link. |
| `Build Links On BeginPlay` | Builds visual links at startup. With a Solver, keep `Solve Track On BeginPlay` enabled there; `Update Track Builder After Solve` performs the solved refresh. |
| `Auto Create Instanced Mesh` | Creates the output ISM when `Track Output` is not assigned. |

`Source Spline`, `Track Output`, and the rotation source use one normal selector
each. Runtime overrides are Blueprint operations, not competing editable fields.

## Link count and pitch

These fields are inside `Settings`.

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Use Fixed Link Count` | Off | Preserves the configured number of links when spline length changes. Enable it for a tank track. |
| `Link Count` | 96 | Number of main links in the closed loop. |
| `Target Link Spacing` | 28 cm | Used instead of fixed count when `Use Fixed Link Count` is disabled. |
| `Distribute Evenly Around Spline` | On | Distributes accumulated pitch error around the whole closed loop. |
| `Track Travel Offset` | 0 cm | Initial link phase along the spline. |
| `Open Spline Start Padding` (Advanced) | 0 cm | Start padding for open splines only. It does not affect a closed track. |
| `Open Spline End Padding` (Advanced) | 0 cm | End padding for open splines only. It does not affect a closed track. |
| `Max Instances` (Advanced) | 512 | Safety cap against accidentally creating an excessive instance count. The UI still allows normal tuning; runtime only adds an emergency ceiling for malformed values. |
| `Skip Links At Closed-Loop Seam` (Advanced) | Off | Omits links near the closed-loop seam. |
| `Closed-Loop Seam Padding` (Advanced) | 1 cm | Size of the seam gap when the previous option is enabled. |

With `Use Fixed Link Count`, the number of links never changes at runtime. Only
the actual pitch changes because the same chain is distributed over a new solved
loop length.

## Orientation and transform

| Setting | Purpose |
| --- | --- |
| `Local Offset`, `Rotation Offset`, `Instance Scale` | Shared mesh position, rotation, and scale corrections. |
| `Inherit Spline Scale` (Advanced) | Passes spline scale to instances. Normally disabled for rigid links. |
| `Orientation Mode` | `Planar Track` keeps links in the track plane; `Spline Rotation` uses full spline rotation. |
| `Mesh Forward Axis`, `Mesh Normal Axis` | Source-mesh axes. Correct these instead of adding arbitrary per-link rotations. |
| `Face Spline Center` | Selects the normal side relative to the closed-loop center. |
| `Flip Normal` | The single explicit normal-direction flip. |
| `Fallback Normal`, `Planar Tangent Sample Distance`, `Planar Normal Smoothing` (Advanced) | Stabilize orientation on short segments and sharp transitions. |

## Connectors

| Setting | Purpose |
| --- | --- |
| `Build Connector Layer` | Enables a second evenly paired instance layer. |
| `Connector Output`, `Connector Mesh` | Connector output component and mesh. |
| `Connector Distance Offset` | Connector phase relative to the main link, normally half the actual pitch. |
| `Connector Local Offset`, `Connector Rotation Offset`, `Connector Scale` | Connector transform corrections. |
| `Connector Mesh Forward Axis`, `Connector Mesh Normal Axis`, `Connector Flip Normal` (Advanced) | Connector-mesh orientation. |
| `Skip Connector At Spline Seam`, `Connector Seam Padding` (Advanced) | Connector behavior near the closed-loop seam. |

The Builder creates equal main and paired element counts. Connectors use the
same solved pitch instead of a separate dynamic distribution.

## Motion

| Setting | Purpose |
| --- | --- |
| `Animate From Track Speed` | Advances phase from explicit linear `Track Speed`. |
| `Track Speed` | Linear speed in cm/s for manual or Blueprint control. |
| `Drive Offset From Wheel Rotation` | Derives traveled distance from wheel rotation. Do not combine it with manual speed animation. |
| `Rotation Source` | `Skeletal Bone` reads a bone angle; `Chaos Wheel` reads a Chaos wheel angle. |
| `Drive Source Component` | The single rotation-source component. |
| `Drive Wheel Name`, `Drive Rotation Axis` | Bone and axis used by `Skeletal Bone`. |
| `Chaos Wheel Index` | Wheel used by `Chaos Wheel`. Runtime radius comes from this Chaos wheel regardless of angle source. |
| `Use Skeletal Direction For Chaos` (Advanced) | Matches Chaos sign to the corresponding skeletal-bone direction. |
| `Reverse Track Direction` | The only normal manual direction flip. |
| `Wrap Distance Offset` (Advanced) | Wraps accumulated phase within loop length; it does not change speed. |

To verify speed, drive straight without slip. Phase travel must match wheel angle
multiplied by the runtime Chaos wheel radius.

## Auto-created components

`Auto-Created Track ISM Name`, `Auto-Created Connector ISM Name`, and
`Auto Create ISM In Blueprint Template` only apply to automatic output creation.
Leave these Advanced fields unchanged when outputs are assigned explicitly.

<div class="page-nav" markdown="1">
[← Quick start]({{ '/docs/track-physics-solver.en.html' | relative_url }})
[Solver settings →]({{ '/docs/track-settings-reference.en.html' | relative_url }})
</div>
