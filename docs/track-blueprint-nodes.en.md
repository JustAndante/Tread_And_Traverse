---
layout: default
title: "Track Blueprint nodes — English"
description: "Blueprint node reference for Track Spline Builder and Track Physics Solver"
lang: en
page_kind: reference
product: track
doc_section: nodes
---


# Track Blueprint nodes

This reference covers the public Blueprint nodes exposed by `Track Spline Builder` and `Track Physics Solver`. Editor-only helpers and the retired reference-loop workflow are intentionally hidden from the palette and omitted here.

> The visual block in every row below is generated from the current public `UFUNCTION` signature, including every exec/data pin and expanded `AdvancedDisplay` parameters.

<section class="bp-showcase" aria-label="Example track Blueprint graph">
  <div class="bp-showcase__copy">
    <span class="bp-showcase__eyebrow">QUICK PATH</span>
    <strong>Three recognizable nodes before the full reference</strong>
    <p>Generate the wheel-based control points first, then rebuild the visible links. Set track speed separately only when belt travel is driven manually.</p>
    <span class="bp-showcase__note">Pins come from the current UFUNCTION signatures; this is a styled diagram rather than an editor screenshot.</span>
  </div>
  <div class="bp-graph" role="img" aria-label="Generate Controls From Wheel Rig, Rebuild Track, and Set Track Speed workflow">
    <div class="bp-graph__flow">
      <div class="bp-node">
        <span class="bp-node__phase">01 · SETUP</span>
        <div class="bp-node__header">Generate Controls From Wheel Rig</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port"><i class="bp-port__dot"></i>Target</span></div>
        </div>
      </div>
      <span class="bp-wire" aria-hidden="true"></span>
      <div class="bp-node">
        <span class="bp-node__phase">02 · AFTER CHANGES</span>
        <div class="bp-node__header">Rebuild Track</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port"><i class="bp-port__dot"></i>Target</span><span class="bp-port bp-port--number bp-port--out"><i class="bp-port__dot"></i>Link Count</span></div>
        </div>
      </div>
      <span class="bp-wire" aria-hidden="true"></span>
      <div class="bp-node">
        <span class="bp-node__phase">03 · OPTIONAL RUNTIME</span>
        <div class="bp-node__header">Set Track Speed</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port bp-port--number"><i class="bp-port__dot"></i>New Track Speed</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

## Normal graph

With automatic updates enabled, the solver and builder run without a per-frame Blueprint graph. A typical setup only needs:

1. `Generate Controls From Wheel Rig` after configuring bones and wheel radii;
2. `Rebuild Track` after changing mesh, link count, or topology;
3. `Set Track Speed` or `Set Distance Offset` when track travel is driven explicitly.

Do not call the manual solve/update nodes every frame while the matching `Update Every Tick` option is enabled.

<a id="builder-nodes"></a>

## Track Spline Builder — Core

| Node | Use | Result |
|---|---|---|
| `Rebuild Track` | After changing the spline, mesh, link count, connectors, or orientation. | Recreates all instances and returns the resulting count. |
| `Update Track Offset` | When topology is already built and only link travel changed. | Updates transforms without a full rebuild. |
| `Set Distance Offset` | To control the link position around the closed loop directly. | Stores the offset and optionally updates instances immediately. |
| `Set Track Speed` | To drive automatic link travel while `Update Every Tick` is enabled. | Changes the travel speed along the spline. |

## Track Spline Builder — Diagnostics and Advanced

| Node | Purpose |
|---|---|
| `Get Expected Link Count` | Calculates the expected main-link count without rebuilding instances. |
| `Clear Auto Created Instances` | Removes only automatically created instance components before replacing that layer manually. |

## Stateless Track Spline Builder nodes

These Blueprint Function Library calls are for graphs that intentionally supply every dependency instead of using a component.

| Node | Purpose |
|---|---|
| `Rebuild Track From Spline` | Builds an ISM layer from the supplied spline, mesh, and build settings. |
| `Update Track Offset From Spline` | Updates existing instance transforms without changing topology. |
| `Calculate Track Link Count` | Calculates the link count without creating instances. |

The component API is preferred for vehicles because it retains settings, orientation state, and scratch storage between frames.

<a id="solver-nodes"></a>

## Track Physics Solver — Core

| Node | Use | Result |
|---|---|---|
| `Generate Controls From Wheel Rig` | After assigning the skeletal mesh, side, wheel naming, and radii. | Rebuilds the control layout from the configured wheel rig and refreshes setup status. |
| `Update Track Physics Spline` | Only for a custom solve schedule with automatic Tick disabled. | Advances the simulation by `Delta Time`, writes the solved loop, and returns its point count. |

## Track Physics Solver — Setup

| Node | Purpose |
|---|---|
| `Auto Assign Components` | Searches the owner for suitable spline, source mesh, and track builder components. Verify the resolved references afterward. |
| `Validate Setup` | Checks dependencies, wheels, control points, and primary constraints; returns the issue count. |

## Track Physics Solver — Advanced

| Node | Purpose |
|---|---|
| `Rebuild Track Physics Spline` | Runs an immediate full solve. `Snap` accepts the new position without a transition. |
| `Reset Track Physics State` | Clears accumulated positions, velocities, contact memory, and inertia. |
| `Append Control Points From Wheels` | Appends detected wheel points instead of replacing the array; intended for unusual compound loops. |

## Track Physics Solver — Runtime Quality

| Node | Purpose |
|---|---|
| `Refresh Runtime Quality Selection` | Immediately reevaluates local ownership and camera distance after possession, camera, or settings changes. |
| `Set External Runtime Quality` | Supplies the local non-replicated value consumed by the `External` policy. |
| `Clear External Runtime Quality` | Clears the external value and returns `External` to `Manual / Fallback Quality`. |
| `Get Effective Runtime Quality` | Returns the quality currently used on this machine after policy selection. |

The policy itself remains fully editable in Details or Blueprint. Selection is
local by design; do not replicate the result unless your game deliberately
wants every client to use the same visual cost.

## Track Physics Solver — Diagnostics

| Node | Purpose |
|---|---|
| `Get Solved Track Point Count` | Returns the point count from the latest solved physical loop. |

## Common mistakes

- Do not run `Rebuild Track` every frame; use an offset-only update for movement.
- Do not combine automatic Tick with manual `Update Track Physics Spline` calls.
- Reset physics or perform a snapped rebuild after changing control-point topology.
- The builder must read the same target spline written by its paired solver.
