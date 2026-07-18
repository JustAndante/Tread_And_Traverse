---
layout: default
title: "Track Physics Solver — English"
description: "Track Physics Solver settings and setup guide"
lang: en
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/en/' | relative_url }}">← English documentation</a>
  <a class="is-active" href="{{ '/docs/track-physics-solver.en.html' | relative_url }}">Settings</a>
  <a href="{{ '/docs/track-blueprint-nodes.en.html' | relative_url }}">Plugin Blueprint nodes</a>
  <a href="{{ '/docs/blueprint-authoring.en.html' | relative_url }}">Project Blueprint</a>
  <a href="{{ '/docs/track-cpp-api.en.html' | relative_url }}">C++ API</a>
  <a href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Русский</a>
</div>

# Track Physics Solver settings and setup

The settings below follow the same order as the `Track Physics Solver`
Details panel. Use this reference to build the track from suspension bones,
configure terrain contact and physical behavior, and enable diagnostics when
you need them.

Field names match Unreal Engine exactly. The tables show native class defaults.
Selecting a `Physics Feel Preset` applies that preset's values, so an
existing vehicle may display different numbers. Child settings are hidden when
their parent feature is disabled. Distances use Unreal centimeters unless
stated otherwise.

## Output: target spline

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Target Spline` | None | Name of the spline component that receives the solved track loop. Select the same spline used by the matching `Track Spline Builder`. |
| `Target Spline Override` (Advanced) | None | Direct component reference used before the name lookup. Normally leave this empty and use `Target Spline`; it exists for unusual component ownership or programmatic setups. |

## Setup: source

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Closed Loop` (Advanced) | On | Treats the first and last solved points as connected. A continuous tank track should remain closed. |
| `Generate From Bone Rig` | On | Generates the complete track control loop from road-wheel, top-roller, and end-wheel bones. Leave it enabled for the supported release workflow. |
| `Source Mesh Component` | None | Skeletal or scene component that owns the configured wheel bones. It is also the authoritative source used for runtime suspension-motion sampling. |
| `Side Preset` | Auto | Fills the left/right naming fields. `Left` and `Right` use their corresponding bone names, `Auto` infers the side where possible, and `Custom` leaves manual names untouched. Manual edits remain authoritative. |
| `Auto Detect Wheel Counts` | On | Searches sequential bone names and stops when the numbered road-wheel or top-roller sequence ends. |
| `Wheel Auto-Detection Limit` (Advanced) | 32 | Maximum numbered bones checked for each road-wheel and top-roller prefix. Visible only while automatic count detection is enabled. |

### Generated and saved source data (read-only)

These fields appear near the source setup but are solver-owned data rather than
normal controls.

| Field | Meaning |
| --- | --- |
| `Control Points` | Generated control-point definitions used to build the desired loop. The bone-rig generator owns this array in the normal workflow. |

## Setup: road wheels

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Road Wheel Prefix` | `LM_Wheel_` | Text before the numbered road-wheel index. The side preset may replace it with the selected side's prefix. |
| `Road Wheel Suffix` | Empty | Text after the numbered index. Leave empty for names such as `LM_Wheel_01`; use a suffix only when the skeletal rig includes one. |
| `First Road Wheel Index` | 1 | First numbered road-wheel bone in the sequence. |
| `Road Wheel Count` | 7 | Manual number of road wheels. Visible only when `Auto Detect Wheel Counts` is disabled. |
| `Road Wheel Index Digits` (Advanced) | 2 | Minimum number of digits in the generated index. A value of 2 produces `01`, `02`, and so on. |
| `Trace Ground Between Road Wheels` | On | Ground-traces the generated lower detail points between neighboring road-wheel centers. Disable only when a rigid/interpolated lower run is desired. |
| `Road Wheel Radius` | 39 cm | Authoritative contact radius used to place the lower track under each road-wheel center and constrain the physical track outside the wheel. |

## Setup: top rollers

All child settings in this section hide when `Generate Top Rollers` is disabled.

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Generate Top Rollers` | On | Includes the configured return rollers in the generated upper run. |
| `Top Roller Bone Prefix` (Advanced) | `TopWheel` | Text before the numbered top-roller index. |
| `Top Roller Bone Suffix` (Advanced) | `_L` | Text after the numbered top-roller index. The side preset updates this for left/right rigs. |
| `First Top Roller Index` | 1 | First numbered top-roller bone in the sequence. |
| `Top Roller Count` | 4 | Manual number of top rollers. Visible only when automatic wheel-count detection is disabled. |
| `Top Roller Index Digits` (Advanced) | 2 | Minimum digit count used when composing top-roller bone names. |
| `Top Roller Contact Radius` | 22 cm | Radius used to place the track around each top-roller center and to enforce its one-sided wheel constraint. |
| `Allow Top Roller Detach` | Off | Lets top-roller anchor points leave their exact bone positions while retaining radius guidance. This allows the upper track to react to impacts and suspension inertia. |
| `Top Run Physics` | On | Enables physical simulation for the upper return run. Disable it for a cheaper generated upper shape. |
| `Upper Run Physics Weight` (Advanced) | 0.45 | Strength with which detached upper-run points receive physical motion and inertia. Visible only when upper physics and detachment are both enabled. |
| `Detached Upper Travel Limit` (Advanced) | 18 cm | Maximum travel around the generated upper shape for detached upper points. A value of 0 disables this upper envelope. |
| `Speed Tension` | Off | Reduces upper-run sag as vehicle speed rises without changing the lower contact shape. The selected physics preset defines the response. |

## Setup: end wheels

`End Wheels` covers the front idler/end wheel and the rear drive wheel. The
names are mechanical roles; either end may be a sprocket on a different vehicle
as long as the configured bones and radii match the loop order.

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Generate End Rollers` | On | Generates the front and rear end-wheel arcs that connect the upper and lower runs. |
| `Front End Wheel Bone` | `LF_Wheel_00` | Bone used as the center of the front end-wheel wrap. |
| `Rear Drive Wheel Bone` | `LB_Wheel_08` | Bone used as the center of the rear end-wheel wrap and, by default, the visual track-distance driver. |
| `Front End Wheel Wrap Radius` | 55 cm | Radius of the generated track-center arc around the front end wheel. |
| `Rear Drive Wheel Wrap Radius` | 0 cm | Radius around the rear drive wheel. A value of 0 reuses `Front End Wheel Wrap Radius`. |
| `Wrap Points Per End Wheel` | 3 | Number of main generated control points on each end-wheel arc. More points describe the circle more closely but add solve work. |
| `End Wheel Wrap Arc` (Advanced) | 130 degrees | Angular portion of each end-wheel circle used by the generated track loop. |
| `End Wheel Wrap Angle Offset` (Advanced) | 0 degrees | Rotates both generated wrap arcs around their wheel centers to align the transitions with a particular rig. |

## Setup: shape

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Generate Detail Points By Spacing` | On | Adds intermediate points to long generated segments so detail density follows a target distance instead of only the number of main wheel controls. |
| `Target Detail Point Spacing` | 35 cm | Desired maximum spacing used to calculate intermediate detail points. Smaller values produce a denser and more expensive solved spline. |
| `Maximum Detail Points Per Segment` (Advanced) | 6 | Safety cap on automatically generated intermediate points between two neighboring main controls. |
| `Trace Generated Detail Points` | On | Lets intermediate points sample the ground instead of merely interpolating between the main controls. This is important for steps and obstacles between wheels. |
| `Unsupported Span Sag Ratio` | 0.08 | Sag depth as a fraction of unsupported span length. It also scales the physical-chain slack and extra-sag limits, so large changes affect both the generated target and physical response. |

## Setup: ground trace

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Enable Ground Tracing` | On | Allows generated trace-enabled points to find world surfaces and build lower-run contacts. |
| `Snap Trace Points To Ground` | On | Places accepted trace points directly on the contact result. When disabled, the solver uses `Ground Alignment Strength` for a softer blend. |
| `Ground Trace Length` | 350 cm | Total downward search length available to automatically generated trace points. |
| `Ground Trace Start Height` | 120 cm | Distance above the generated point where its downward trace begins. |
| `Track Contact Width` | 0 cm | Extra lateral width used to probe the footprint of a track shoe. A value of 0 uses the center probe only; values near the shoe width enable the three-probe contact manifold. |
| `Ground Trace Shape` (Advanced) | Sphere | `Line` uses a zero-radius ray. `Sphere` sweeps the configured radius and is more tolerant of small gaps and sharp mesh details. |
| `Ground Trace Radius` (Advanced) | 3 cm | Sphere radius used when `Ground Trace Shape` is `Sphere`. |
| `Ground Alignment Strength` (Advanced) | 0.35 | Blend toward the accepted surface when direct ground snapping is disabled. |
| `Maximum Ground Snap Distance` (Advanced) | 26 cm | Rejects a contact if accepting it would move the point farther than this distance. This prevents distant or unrelated surfaces from capturing the track. |
| `Maximum Ground Search Drop` (Advanced) | 90 cm | Rejects a surface found too far below the generated track point, even if it lies inside the full trace length. |

The trace length defines where the solver may search. The snap and drop limits
define which search results it may accept. They solve different problems and
should not be treated as interchangeable values.

## Debug drawing and runtime diagnostics

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Draw Debug` | Off | Enables solver visualization in the editor or PIE. Leave off for normal runtime and performance measurements. |
| `Detailed Runtime Diagnostics` | Off | Collects lifetime wheel/target/output peaks and per-stage point snapshots. Enable it only for focused investigation because it adds repeated array snapshots and diagnostic-string work. |
| `Draw Debug Traces` | On | Draws ground probes and hit/miss results while `Draw Debug` is enabled. |
| `Draw Debug Points` | On | Draws desired, fixed, contact, and physical point markers. |
| `Draw Debug Solved Spline` | On | Draws the final solved loop. |
| `Draw Debug Wheel Guides` | On | Draws wheel circles, guide ownership, and wheel-limit information. |
| `Debug Draw Interval` (Advanced) | 0.1 s | Minimum time between debug redraws. It changes visualization cadence, not solver cadence. |
| `Debug Point Size` (Advanced) | 8 cm | Size of debug point markers. |
| `Debug Line Thickness` (Advanced) | 1.5 | Thickness of debug lines. |
| `Debug Anchor Color` | Cyan | Color of fixed/source anchors. |
| `Debug Solved Color` | Yellow | Color of the solved spline. |
| `Debug Trace Hit Color` | Green | Color of successful traces. |
| `Debug Trace Miss Color` | Red | Color of unsuccessful traces. |
| `Debug Wheel Guide Color` | Purple | Color of wheel guide geometry. |
| `Debug Wheel Limit Color` | Magenta | Color of one-sided wheel-limit corrections. |

## Read-only solver status

Status fields report the most recent generation or solve. They do not change
the track. The three text fields are the normal starting point; expand the
advanced status categories only when investigating a specific problem.

### Primary status

| Field | Meaning |
| --- | --- |
| `Last Solver Status` | Human-readable summary of the latest generation, solve, contacts, physical mode, Builder update, and important diagnostic values. |
| `Last Validation Status` | Result of the latest setup validation, including missing spline/source/builder information and geometry issues. |
| `Last Debug Snapshot` | Most recent detailed diagnostic snapshot captured by the solver. Detailed peak attribution requires `Detailed Runtime Diagnostics`. |
| `Last Desired Point Count` | Number of points produced by the desired-shape stage. |
| `Last Solved Point Count` | Number of points written by the final solve. It should normally match the desired count. |
| `Last Missing Source Count` | Control points whose source component or bone/socket could not be resolved. Normal operation expects 0. |
| `Last Ground Contact Count` | Number of desired points currently accepted as ground contacts. |
| `Last Matched Wheel Points` | Generated points successfully associated with configured wheel bones/guides. |
| `Last Generated Control Point Count` | Number of main controls created by the latest generation action. |
| `Last Skipped Endpoint Wheels` | Endpoint wheel bones intentionally omitted from the road-wheel sequence because they are handled by the end-wheel generator. |
| `Last Desired Extent` | Approximate spatial extent of the generated loop used by validation and diagnostics. |
| `Last Bad Segment Count` | Segments rejected by bad-geometry protection. Normal operation expects 0. |
| `Last Max Segment Length` | Longest segment in the most recent solved loop. Unexpected spikes indicate broken topology or a point jump. |

### Contact and generated-shape status (Advanced)

| Field | Meaning |
| --- | --- |
| `Last Fixed Support Count` | Desired points treated as fixed/source supports. |
| `Last Suspended Support Count` | Supports used to delimit unsupported sag spans. |
| `Last Suspended Span Count` | Unsupported spans that received procedural sag. |
| `Last Trace Penetration Recoveries` | Initial-overlap traces recovered through the penetration-recovery path. |
| `Last Trace Rejected Initial Penetration Count` | Initial-overlap trace results rejected as unsafe. |
| `Last Trace Rejected Far Drop Count` | Trace hits rejected by `Maximum Ground Search Drop`. |
| `Last Trace Rejected Max Snap Distance Count` | Trace hits rejected by `Maximum Ground Snap Distance`. |
| `Last Ground Contact Hysteresis Hold Count` | Existing contacts retained temporarily by release hysteresis to prevent support chatter. |
| `Last Merged Generated Duplicate Count` | Duplicate points removed during bone-rig generation. |
| `Last Merged Runtime Point Count` | Near-duplicate detail points merged during runtime desired-shape construction. |
| `Last Effective Detail Scale` | Runtime multiplier applied to detail spacing, normally 1 in Full Physical quality. |
| `Last Effective Trace Fan Count` | Actual lateral probe count after applying the selected runtime quality mode. |
| `Last Trace Fallback Hit Count` | Contacts accepted from a fallback probe rather than the primary probe. |
| `Last Trace Memory Hit Count` | Contacts restored from the same point's recent trace memory. |
| `Last Trace Nearest Memory Hit Count` | Contacts restored from a nearby compatible trace-memory entry. |
| `Last Trace Detail Point Count` | Total generated detail points that performed traces. |
| `Last Lower Trace Detail Point Count` | Traced detail points specifically belonging to the lower run. |

### Physical-chain status (Advanced)

| Field | Meaning |
| --- | --- |
| `Last Average Physics Weight` | Average effective simulation weight across dynamic points. |
| `Last Dynamic Point Count` | Points currently allowed to simulate. |
| `Last Effective Pinned Point Count` | Points effectively fixed after preset and quality overrides. |
| `Last Effective Physical Target Pull` | Actual generated-shape pull used by the current preset/mode. |
| `Last Effective Wheel Surface Guide Strength` | Actual wheel-surface following strength after preset minimums and quality overrides. |
| `Last Owner Carry Distance` | Owner-transform displacement carried into the simulation on the latest update. |
| `Last Owner Inertia Speed` | Effective owner-motion inertia speed applied to free physical points. |
| `Last Sag Limit Correction Count` | Points corrected by the extra-sag envelope. |
| `Last Physical Velocity Clamp Count` | Point velocities limited by the maximum-speed safety value. |
| `Last Physical Constraint Clamp Count` | Constraint corrections limited by the maximum-correction safety value. |
| `Last Wheel Anchor Limit Count` | One-sided wheel-radius corrections applied in the latest solve. |
| `Last Max Wheel Limit Correction` | Largest wheel-radius correction in the latest solve. |
| `Last Top Roller Support Correction Count` | Upper points corrected against top-roller support circles. |
| `Last Max Top Roller Support Correction` | Largest top-roller support correction. |
| `Last Top Sag Envelope Correction Count` | Upper-run points corrected by the detached travel envelope. |
| `Last Wheel Surface Guide Count` | Wheel-surface guide corrections applied. |
| `Last Runtime Surface Contact Count` | Runtime point-versus-surface contacts accepted during physical solving. |
| `Last Max Runtime Surface Contact Correction` | Largest runtime surface-contact correction. |
| `Last Track Plane Limit Count` | Points corrected back toward the configured track plane. |
| `Last Max Track Plane Error` | Largest lateral track-plane error detected. |
| `Last Wheel Guide Count` | Total generated wheel guides. |
| `Last Active Wheel Guide Count` | Guides active in the current solve. |
| `Last Generated Wheel Guide Anchor Count` | Guide-anchor records created by bone-rig generation. |
| `Last Top Sag Point Count` | Detail points identified as upper unsupported-span points. |
| `Last Physical Topology Resample Count` | Number of physical-state resamples caused by a desired-point topology change. |
| `Last Physical Topology Resample From Count` | Previous point count before the latest resample. |
| `Last Physical Topology Resample To Count` | New point count after the latest resample. |
| `Last Runtime Subdivision Hold Count` | Runtime subdivision decisions held from the previous frame to prevent topology chatter. |
| `Last Free Road Wheel Trace Count` | Free lower points around road-wheel spans that performed runtime road traces. |
| `Last Ground Friction Count` | Points that received longitudinal ground-friction processing. |
| `Last Max Ground Contact Correction` | Largest preserved-ground-contact correction. |
| `Last Average Rest Length Error` | Average absolute physical segment error relative to its current rest length. |
| `Last Max Rest Length Error` | Largest physical segment rest-length error. |
| `Last Average Physical Slack` | Average slack currently available in physical segments. |
| `Last Max Physical Slack` | Largest slack value on one physical segment. |
| `Last Average Segment Length` | Average solved segment length. |
| `Last Min Segment Length` | Shortest solved segment. |
| `Last Short Segment Count` | Segments classified as suspiciously short. |
| `Last Average Point Speed` | Average speed of simulated points. |
| `Last Max Point Speed` | Highest simulated point speed. |
| `Last Top Sag Speed Tension Alpha` | Current normalized speed-tension amount from 0 to 1. |
| `Last Top Sag Speed Tension Speed` | Vehicle speed used for the current speed-tension calculation. |
| `Last Max Extra Sag` | Largest procedural unsupported-span sag depth generated in the latest solve. |

### Output and timing status (Advanced)

| Field | Meaning |
| --- | --- |
| `Last Effective Update Interval` | Actual solve interval after runtime quality or adaptive-rate overrides. |
| `Last Builder Update Max Delta` | Largest point movement considered by the most recent Builder-update decision. |
| `Last Skipped Builder Update Count` | Consecutive or accumulated stable Builder updates skipped by the optimization. |
| `Last Builder Update Status` | Text explanation of the latest Builder resolution/update decision. |
| `Last Solve Delta Time` | Time step consumed by the latest solve after interval accumulation. |
| `Last Solve Delta Time Clamped` | True when the latest solve time step was limited by `Max Solve Delta Time`. |
| `Last First Desired Point` | Local-space position of the first desired point, useful for loop-order diagnostics. |
| `Last Last Desired Point` | Local-space position of the final desired point, useful for seam/closure diagnostics. |

## Editor actions

Editor actions appear as momentary checkboxes. Selecting one executes the
action and the component immediately clears the checkbox.

| Action | Purpose |
| --- | --- |
| `Generate Bone Rig Now` | Regenerates the main control loop from the current source component, side, wheel names, radii, wrap, shape, and trace settings. Use it after changing topology or bone naming. |
| `Preview Solved Spline After Generate` (read-only) | Reports whether editor generation is currently configured to leave the target spline in solved-preview form. Normal generation keeps the authored/generated loop stable. |

## Simulation

Changing `Physics Feel Preset` applies a complete group of physical values and
resets solver history. Choose the closest preset first, then make small changes
to the exposed controls if necessary.

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Physics Feel Preset` | Realistic Heavy | Selects the overall solver mode and a coherent set of physical tuning values. |
| `Responsive` | Preset option | Uses fast target following with a tight, stable response and minimal free inertia. It is the cheapest and least physically loose preset. |
| `Realistic Heavy` | Preset option | Uses the physical chain with restrained slack, strong wheel guidance, ground contacts, suspension response, and heavy damping. This is the recommended starting point for a tank. |
| `Loose Physical` | Preset option | Uses more slack, inertia, detached upper motion, and weaker shape guidance. It is more expressive but easier to destabilize on extreme geometry. |
| `Chain Gravity Scale` | 1.0 | Multiplier applied to gravity during physical-chain integration. The selected preset normally replaces the native default. |
| `Generated Shape Pull` | 0.35 | Pulls simulated points toward the generated desired track shape. Higher values are more controlled; lower values leave contacts, constraints, and inertia more authoritative. |
| `Wheel Guide Pull` (Advanced) | 0.10 | Minimum attraction toward top-roller and end-wheel guide shapes. Detached upper points receive only a reduced fraction. |
| `Per-Segment Slack Ratio` | 0 | Adds compliant rest-length slack to each physical segment. Effective slack is also scaled by `Unsupported Span Sag Ratio`. |
| `Chain Velocity Damping` (Advanced) | 0.15 | Removes physical point velocity each step. Higher values settle motion sooner; excessive damping makes the track look rigid. |
| `Preserve Ground Contacts` (Advanced) | On | Retains accepted ground contacts during physical constraint solving instead of allowing the chain to immediately fall away. |
| `Ground Contact Strength` (Advanced) | 1.0 | Strength of the preserved-contact correction. Visible only while ground-contact preservation is enabled. |
| `Maximum Extra Sag` | 35 cm | Maximum additional downward travel below the generated unsupported-span shape. A value of 0 disables this envelope. |
| `Keep Track Outside Wheels` | On | Applies one-sided road, top, and end-wheel radius constraints. It prevents physical points from passing through configured wheels without pulling already-clear points back onto the circle. |
| `Wheel Surface Following` (Advanced) | 0 | Guides nearby physical points along the wheel circumference after the outside-wheel limit. The recommended preset supplies its own non-zero value. |

## Output: solved spline and Track Builder

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Spline Point Type` (Advanced) | Curve | Unreal spline interpolation type written to solved spline points. `Curve` is the intended normal track output. |
| `Update Track Builder After Solve` | On | Updates the matching `Track Spline Builder` after the solver changes the spline, keeping rendered link instances synchronized. |
| `Skip Stable Builder Updates` (Advanced) | On | Avoids rebuilding link transforms when the solved spline has not moved enough to produce a visible change. |
| `Builder Update Movement Threshold` (Advanced) | 0.15 cm | Maximum point movement below which a stable Builder update may be skipped. |
| `Track Builder` | None | Name of the `Track Spline Builder` component driven by this solver. If unassigned, setup helpers can resolve a matching builder on the same actor. |

## Runtime

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Rebuild On Begin Play` | On | Schedules an initial runtime generation/rebuild after BeginPlay. |
| `Runtime Quality` | Full Physical | `Full Physical` runs normal traces and physical solve. `Cheap Remote` disables expensive physical/traced detail and preserves only the key generated shape for distant or replicated visual copies. |
| `Lower Shoe Tangent Scale` | 0.55 | Cheap Remote spline tangent length along the lower shoe run. Visible only in `Cheap Remote`. |
| `Lower Transition Tangent Scale` | 0.35 | Cheap Remote tangent length where the lower run enters an end-wheel arc. Visible only in `Cheap Remote`. |
| `BeginPlay Rebuild Delay` (Advanced) | 0.2 s | Delay before the scheduled BeginPlay rebuild. It allows skeletal and vehicle components to initialize first. |
| `Regenerate Controls On BeginPlay` | On | Regenerates controls from the suspension and wheel bones before the BeginPlay rebuild. Leave it enabled for the supported release workflow. |
| `Update Every Tick` | On | Enables continuous runtime solving. The component still respects `Solve Interval`. |
| `Solve Interval` (Advanced) | 0.033 s | Minimum time between solves. A value of 0 solves every component tick; larger values reduce work but also reduce response cadence. |
| `Max Solve Delta Time` (Advanced) | 0.05 s | Maximum time step accepted by one solve. Longer accumulated frames are clamped to protect the physical integration from large jumps. |

## Quick setup order

For a first setup, work through the component in this order:

1. connect the components and verify the left/right naming;
2. generate the control points and check that the loop is correct;
3. set the road, top, and end-wheel radii, then verify track width;
4. choose a suitable `Physics Feel Preset`;
5. configure link count, orientation, and drive behavior in `Track Builder`;
6. use debug drawing and status fields only when investigating a specific problem;
7. finish by testing performance and quality modes under the intended gameplay conditions.

You do not need to tune every Advanced setting for a first pass. Start with a
preset and open the additional controls only when you know which behavior needs
to change.

