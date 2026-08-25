---
layout: default
lang: en
page_kind: reference
title: "Track Spline Builder — Solver settings"
description: "Track Physics Solver shape, contact, physics, and runtime fields"
product: track
doc_section: settings
---


# Track Physics Solver settings

This page collects the release-facing fields of the `Track Physics Solver`. Use the
[short guide]({{ '/docs/track-physics-solver.en.html' | relative_url }}) for
first setup and task-based help. Callable actions are listed separately in the
[Blueprint node reference]({{ '/docs/track-blueprint-nodes.en.html' | relative_url }}).

<a id="solver-settings"></a>

## How to read this page

Names below match the Unreal Engine Details panel. Values are native class
defaults; runtime does not silently retune editable fields. Distances use Unreal
centimeters unless stated otherwise.

## Output: target spline

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Target Spline` | None | Name of the spline component that receives the solved track loop. Select the same spline used by the matching `Track Spline Builder`. |

<a id="geometry-source"></a>

## Setup: source

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Closed Track Loop` (Advanced) | On | Connects the first and last solved points. Keep a continuous tank track closed. |
| `Source Mesh Component` | None | Skeletal or scene component that owns the configured wheel bones. It is also the authoritative source used for runtime suspension-motion sampling. |
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
| `Road Wheel Prefix` | `LM_Wheel_` | Text before the numbered road-wheel index. Set it explicitly for each track side. |
| `Road Wheel Suffix` | Empty | Text after the numbered index. Leave empty for names such as `LM_Wheel_01`; use a suffix only when the skeletal rig includes one. |
| `First Road Wheel Index` | 1 | First numbered road-wheel bone in the sequence. |
| `Road Wheel Count` | 7 | Manual number of road wheels. Visible only when `Auto Detect Wheel Counts` is disabled. |
| `Road Wheel Index Digits` (Advanced) | 2 | Minimum number of digits in the generated index. A value of 2 produces `01`, `02`, and so on. |
| `Pin Edge Road Wheel Anchors (Guided)` (Advanced) | Off | Hard-pins generated edge anchors to wheel-center radius positions in guided modes. Physical Chain may still move normal road-wheel points. |
| `Trace Free Wheel Anchors` (Advanced) | On | Lets free wheel anchors query an accepted surface instead of unconditionally following interpolation. |
| `Trace Ground Between Road Wheels` | On | Ground-traces the generated lower detail points between neighboring road-wheel centers. Disable only when a rigid/interpolated lower run is desired. |
| `Road Wheel Contact Radius` | 39 cm | Radius used only for solver shape and road-wheel contact. Link travel speed is calculated separately by `Track Spline Builder` from the selected Chaos wheel's runtime radius. |

## Setup: top rollers

All child settings in this section hide when `Generate Top Rollers` is disabled.

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Generate Top Rollers` | On | Includes the configured return rollers in the generated upper run. |
| `Top Roller Bone Prefix` (Advanced) | `TopWheel` | Text before the numbered top-roller index. |
| `Top Roller Bone Suffix` (Advanced) | `_L` | Text after the numbered top-roller index. Set it explicitly when the two sides use different suffixes. |
| `First Top Roller Index` | 1 | First numbered top-roller bone in the sequence. |
| `Top Roller Count` | 4 | Manual number of top rollers. Visible only when automatic wheel-count detection is disabled. |
| `Top Roller Index Digits` (Advanced) | 2 | Minimum digit count used when composing top-roller bone names. |
| `Detail Points To Next` (Advanced) | 2 | Additional points between the current top roller and the next control. |
| `Sag To Next` (Advanced) | 8 cm | Extra sag applied to the span after the top roller. |
| `Top Roller Contact Radius` | 22 cm | Radius used to place the track around each top-roller center and to enforce its one-sided wheel constraint. |
| `Allow Top Roller Detach` | Off | Lets top-roller anchor points leave their exact bone positions while retaining radius guidance. This allows the upper track to react to impacts and suspension inertia. |
| `Top Run Physics` | On | Enables physical simulation for the upper return run. Disable it for a cheaper generated upper shape. |
| `Upper Run Physics Weight` (Advanced) | 0.45 | Strength with which detached upper-run points receive physical motion and inertia. Visible only when upper physics and detachment are both enabled. |
| `Upper Run Impulse Multiplier` (Advanced) | 1.0 | Scales owner and suspension impulses for the physical upper run only. It does not change gravity, constraints, or lower-run points. |
| `Detached Upper Travel Limit` (Advanced) | 18 cm | Maximum travel around the generated upper shape for detached upper points. A value of 0 disables this upper envelope. |
| `Speed Tension` | Off | Reduces upper-run sag as vehicle speed rises without changing the lower contact shape. Its child fields define the response directly. |
| `Speed Tension Start` (Advanced) | 250 cm/s | Speed where tension begins. |
| `Speed Tension Full` (Advanced) | 950 cm/s | Speed where tension reaches full strength. |
| `Speed Tension Strength` (Advanced) | 0.85 | Fraction of upper sag removed at full speed. |

## Setup: end wheels

`End Wheels` covers the front idler/end wheel and the rear drive wheel. The
names are mechanical roles; either end may be a sprocket on a different vehicle
as long as the configured bones and radii match the loop order.

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Generate End Wheels` | On | Generates the front and rear end-wheel arcs that connect the upper and lower runs. |
| `Front End Wheel Bone` | `LF_Wheel_00` | Bone used as the center of the front end-wheel wrap. |
| `Rear Drive Wheel Bone` | `LB_Wheel_08` | Bone used as the center of the rear end-wheel wrap and, by default, the visual track-distance driver. |
| `Front End Wheel Wrap Radius` | 55 cm | Radius of the generated track-center arc around the front end wheel. |
| `Rear Drive Wheel Wrap Radius` | 0 cm | Radius around the rear drive wheel. A value of 0 reuses `Front End Wheel Wrap Radius`. |
| `Wrap Points Per End Wheel` | 3 | Number of main generated control points on each end-wheel arc. More points describe the circle more closely but add solve work. |
| `Edge Road Wheel Guard Points` | 3 | Adds shape points next to the first and last road wheel so spline interpolation does not cut through a large edge wheel. |
| `End Wheel Wrap Arc` (Advanced) | 130 degrees | Angular portion of each end-wheel circle used by the generated track loop. |
| `End Wheel Wrap Angle Offset` (Advanced) | 0 degrees | Rotates both generated wrap arcs around their wheel centers to align the transitions with a particular rig. |
| `End Wheel Physics Weight` (Advanced) | 0 | Physical motion allowed on the main end-arc points. |
| `Trace Lower Transitions` (Advanced) | On | Lets lower transitions between the edge road wheel and end arc query the surface. |
| `Transition Detail Points` (Advanced) | 2 | Trace-point count on each lower transition. |
| `Transition Sag To Next` (Advanced) | 0 cm | Extra lower-transition sag before the next control. |

## Setup: shape

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Generate Detail Points By Spacing` | On | Adds intermediate points to long generated segments so detail density follows a target distance instead of only the number of main wheel controls. |
| `Target Detail Point Spacing` | 35 cm | Desired maximum spacing used to calculate intermediate detail points. Smaller values produce a denser and more expensive solved spline. |
| `Maximum Detail Points Per Segment` (Advanced) | 6 | Safety cap on automatically generated intermediate points between two neighboring main controls. |
| `Trace Generated Detail Points` | On | Lets intermediate points sample the ground instead of merely interpolating between the main controls. This is important for steps and obstacles between wheels. |
| `Unsupported Span Sag Ratio` | 0.08 | Sag depth as a fraction of unsupported span length. It also scales the physical-chain slack and extra-sag limits, so large changes affect both the generated target and physical response. |
| `Contact Solve Iterations` (Advanced) | 4 | Local passes used to refine unsupported-span contact. |
| `Runtime Point Merge Radius` (Advanced) | 2 cm | Merges nearly coincident runtime points after loop generation to prevent tiny segments. |

<a id="surface-tracing"></a>

## Setup: ground trace

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Surface Query Mode` | World Static Only | Selects the collision filter shared by generated ground traces, physical-chain sweeps, and runtime overlap broadphase. `World Static Only` excludes the vehicle body, pawns, and movable scene clutter without requiring a project-specific collision channel. |
| `Surface Object Types` | Empty | Object types accepted when `Surface Query Mode` is `Object Types`. Populate the list to support movable platforms or project-defined surface object channels. An empty list intentionally disables surface hits in this mode. |
| `Surface Trace Channel` | Visibility | Channel used only when `Surface Query Mode` is `Trace Channel`. This compatibility/custom mode accepts any component that blocks the selected channel. |
| `Enable Ground Tracing` | On | Allows generated trace-enabled points to find world surfaces and build lower-run contacts. |
| `Snap Trace Points To Ground` | On | Places accepted trace points directly on the contact result. When disabled, the solver uses `Ground Alignment Strength` for a softer blend. |
| `Ground Trace Length` | 350 cm | Total downward search length available to automatically generated trace points. |
| `Ground Trace Start Height` | 120 cm | Distance above the generated point where its downward trace begins. |
| `Track Contact Width` | 0 cm | Single full width used by generated probes and runtime contact. A value of 0 uses only the center probe; otherwise use approximately the physical shoe width. |
| `Ground Trace Shape` (Advanced) | Sphere | `Line` uses a zero-radius ray. `Sphere` sweeps the configured radius and is more tolerant of small gaps and sharp mesh details. |
| `Ground Trace Radius` (Advanced) | 3 cm | Sphere radius used when `Ground Trace Shape` is `Sphere`. |
| `Ground Alignment Strength` (Advanced) | 0.35 | Blend toward the accepted surface when direct ground snapping is disabled. |
| `Maximum Ground Snap Distance` (Advanced) | 26 cm | Rejects a contact if accepting it would move the point farther than this distance. This prevents distant or unrelated surfaces from capturing the track. |
| `Maximum Ground Search Drop` (Advanced) | 90 cm | Rejects a surface found too far below the generated track point, even if it lies inside the full trace length. |

The trace length defines where the solver may search. The snap and drop limits
define which search results it may accept. They solve different problems and
should not be treated as interchangeable values.

The surface query filter affects only the visual track solver. It does not
change Chaos vehicle collision. Choose `Object Types` or `Trace Channel` when
tracks must follow movable platforms or another explicitly configured surface;
otherwise keep the release default `World Static Only`.

## Diagnostics use a separate component

Debug drawing, point-map recording, and the copy-ready log belong to the
editor-only [Track Physics Diagnostics]({{ '/docs/track-diagnostics-reference.en.html' | relative_url }})
component. These are not Solver settings; the component is excluded from cooked builds.

## Setup utilities

| Utility | Available from | Purpose |
| --- | --- | --- |
| `Auto Assign Components` | Details / Blueprint | Resolves the normal same-actor spline, source mesh, and Builder when the setup is unambiguous. |
| `Validate Setup` | Details / Blueprint | Returns the number of setup issues. A release-ready configuration should return 0. |
| `Generate Controls From Wheel Rig` | Blueprint | Explicitly refreshes the control loop after changing wheel topology or bone names. Normal runtime also regenerates it automatically when required. |

<a id="simulation-runtime"></a>

## Simulation

| Setting | Default | Purpose |
| --- | ---: | --- |
| `Solver Mode` (Advanced) | Physical Chain | Selects the track-shape algorithm. This is separate from per-viewer runtime quality selection. |
| `Chain Gravity Scale` | 1.0 | Multiplier applied to gravity during physical-chain integration. |
| `Generated Shape Pull` | 0.35 | Pulls simulated points toward the generated desired track shape. Higher values are more controlled; lower values leave contacts, constraints, and inertia more authoritative. |
| `Wheel Guide Pull` (Advanced) | 0.10 | Minimum attraction toward top-roller and end-wheel guide shapes. Detached upper points receive only a reduced fraction. |
| `Per-Segment Slack Ratio` | 0 | Adds compliant rest-length slack to each physical segment. Effective slack is also scaled by `Unsupported Span Sag Ratio`. |
| `Chain Velocity Damping` (Advanced) | 0.15 | Removes physical point velocity each step. Higher values settle motion sooner; excessive damping makes the track look rigid. |
| `Preserve Ground Contacts` (Advanced) | On | Retains accepted ground contacts during physical constraint solving instead of allowing the chain to immediately fall away. |
| `Physical Contact Hold Strength` (Advanced) | 1.0 | Strength used to preserve an already accepted physical ground contact. It does not control trace alignment. |
| `Maximum Extra Sag` | 35 cm | Maximum additional downward travel below the generated unsupported-span shape. A value of 0 disables this envelope. |
| `Keep Track Outside Wheels` | On | Applies one-sided road, top, and end-wheel radius constraints. It prevents physical points from passing through configured wheels without pulling already-clear points back onto the circle. |
| `Wheel Clearance` (Advanced) | 0 cm | Single extra radial clearance used by all outside-wheel constraints. |
| `Wheel Surface Following` (Advanced) | 0 | Guides nearby physical points along the wheel circumference after the outside-wheel limit. |
| `Traced Point Physics Weight` (Advanced) | 0.2 | Physics participation assigned to points created from ground traces. It does not change trace alignment or contact hold strength. |

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
| `Solve Track On BeginPlay` | On | Generates controls when requested, solves the spline after the configured delay, and refreshes the paired Builder. |
| `Manual / Fallback Quality` | Full Physical | Used directly by `Manual`, and as the safe fallback before `External` receives a value. `Full Physical` runs the normal traced solver, `Cheap Remote` keeps the inexpensive procedural shape, and `Advanced Material Track` enables the persistent material-chain renderer. |
| `Quality Selection` | Manual | `Manual` never overrides the selected quality. `Local Ownership` gives a locally controlled player Pawn its local quality and all other Pawns the remote quality. `Local Ownership + Distance` also divides remote Pawns into near and far groups using the nearest local camera. `External` accepts an explicit local Blueprint/C++ decision. |
| `Locally Controlled Quality` | Full Physical | Quality used for a Pawn controlled by a local human Player Controller. AI controllers are not treated as a local player. |
| `Remote / Near Quality` | Cheap Remote | Quality used for non-local Pawns by `Local Ownership`, or for nearby non-local Pawns by the distance policy. |
| `Remote Far Quality` | Cheap Remote | Quality used by the distance policy for distant non-local Pawns and for clients or dedicated servers without a valid local view. With `Local Ownership`, all non-local Pawns use `Remote / Near Quality`. |
| `Remote Near Distance` | 5000 cm | Camera distance separating near and far remote Pawns. Distance is evaluated independently on each client. |
| `Distance Hysteresis` | 500 cm | Prevents repeated quality switching around the distance boundary. |
| `Selection Update Interval` | 0.25 s | How often automatic ownership/distance selection is reevaluated. Use `Refresh Runtime Quality Selection` after an immediate possession or camera change. |
| `Lower Shoe Tangent Scale` | 0.55 | Cheap Remote spline tangent length along the lower shoe run. |
| `Lower Transition Tangent Scale` | 0.35 | Cheap Remote tangent length where the lower run enters an end-wheel arc. |
| `BeginPlay Rebuild Delay` (Advanced) | 0.2 s | Delay before the scheduled BeginPlay rebuild. It allows skeletal and vehicle components to initialize first. |
| `Generate Controls On BeginPlay` | On | Generates controls from suspension and wheel bones before the scheduled BeginPlay rebuild. Keep it enabled for normal setup. |
| `Solve Every Tick` | On | Enables continuous runtime solving while respecting `Solve Interval`. |
| `Solve Interval` (Advanced) | 0.033 s | Minimum time between solves. A value of 0 solves every component tick; larger values reduce work but also reduce response cadence. |
| `Max Solve Delta Time` (Advanced) | 0.05 s | Maximum time step accepted by one solve. Longer accumulated frames are clamped to protect the physical integration from large jumps. |

Quality selection is deliberately local and is not replicated. This lets every
player choose an appropriate rendering cost without changing authoritative
vehicle state. For complete project-side control, set the policy to `External`
and call `Set External Runtime Quality`; call `Clear External Runtime Quality`
to return to `Manual / Fallback Quality`.


