---
layout: default
title: "Vehicle Weapon System Blueprint Nodes — English"
description: "Blueprint node reference for Vehicle Weapon System"
lang: en
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/en/' | relative_url }}">← English documentation</a>
  <a href="{{ '/docs/vehicle-weapon-system.en.html' | relative_url }}">Guide</a>
  <a class="is-active" href="{{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}">Nodes</a>
  <a href="{{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}">Русский</a>
</div>

# Vehicle Weapon System Blueprint nodes

The Blueprint API is intentionally split into two levels:

- `Vehicle | Weapon System | Core` contains the normal vehicle workflow;
- `Vehicle | Weapon System | Advanced` exposes explicit channels, registries, low-level components, detailed frames, and migration adapters.

Start with `Core`. Use `Advanced` only when the standard component workflow does not cover the rig.

## Normal runtime graph

After preparing the camera and AimCubes, call:

1. `Update Weapon Traces And Ballistics` to update continuous muzzle traces and optional ballistics;
2. `Update Vehicle Aim Sources` to cache External, Gunner, Commander, and auxiliary aim sources;
3. `Update Vehicle Weapon System` to route those cached targets to every configured axis group.

The compact nodes return `Success`; detailed results remain cached on the component. A normal graph does not build axis-request arrays, refresh registries, or apply pending commands manually.

## Core — Runtime

| Node | Purpose |
|---|---|
| `Update Weapon Traces And Ballistics` | Updates muzzle transforms, continuous weapon traces, and the optional ballistic cache. |
| `Update Vehicle Aim Sources` | Converts configured camera/AimCube inputs into the coherent aim-source cache. |
| `Update Vehicle Weapon System` | Solves and routes all configured axes from the cached sources. |

## Core — Axis Control

| Node | Purpose |
|---|---|
| `Set Weapon Axis Control State` | Changes yaw/pitch channels and stabilization for an `Axis Group ID`; call on mode changes rather than every Tick. |
| `Arm Weapon Axis Mechanical Drive` | Notifies a stabilized plane of deliberate input. Submit yaw and pitch separately; the value is not accumulated as an angle. |
| `Reset Weapon Axis Control To Defaults` | Restores runtime axis control from the configured definition/profile. |
| `Get Weapon Axis Control State` | Returns the current channels, stabilization, and transient control state. |

## Core — Configuration

| Node | Purpose |
|---|---|
| `Apply Assigned Weapon System Profile` | Applies the Data Asset selected in `Configuration Profile`. |
| `Apply Weapon System Profile` | Applies an explicit profile with optional binding preservation and runtime rebuild. |
| `Export Current Setup To Assigned Weapon System Profile` | Copies embedded definitions into the assigned Data Asset. |
| `Validate Assigned Weapon System Profile Compatibility` | Performs a non-destructive profile and binding-preservation preflight. |
| `Validate Vehicle Weapon System Configuration` | Rebuilds registries and returns the complete readiness report. |

## Core — UI

Actor-facing widget nodes:

| Node | Purpose |
|---|---|
| `Find Vehicle Weapon System` | Finds the facade component on a vehicle Actor. |
| `Get Vehicle Weapon Trace UI` | Returns muzzle start, resolved trace end, screen position, and hit state for one Weapon ID. |
| `Get Vehicle Weapon Ballistic UI` | Returns ballistic aim point, screen position, and hit state. |
| `Get Vehicle Weapon UI Pair` | Compact two-ID HUD adapter; the runtime itself supports any weapon count. |

Component queries:

| Node | Purpose |
|---|---|
| `Get Cached Weapon UI State` | Returns the combined cached UI state for one weapon. |
| `Get Cached Weapon Trace UI` | Returns only the continuous trace UI data. |
| `Get Cached Weapon Ballistic UI` | Returns only the ballistic UI data. |
| `Get Cached Aim Source UI State` | Reads an arbitrary named aim source. |
| `Get Cached Standard Aim Source UI State` | Reads a standard channel by enum. |

## Core — Replication

| Node | Purpose |
|---|---|
| `Set Native Axis Replication Enabled` | Enables controlled-rate native axis replication. Do not run it beside legacy rotation RPCs. |
| `Should Evaluate Local Weapon Runtime` | Gates local aim, trace, ballistic, and vehicle-specific visual preparation. |

## Advanced — Configuration and Registry

| Node | Purpose |
|---|---|
| `Set Weapon Definition Source` | Changes the active definition source at runtime. |
| `Rebuild Embedded Weapon Runtime` | Recreates internal controllers and muzzles from embedded definitions. |
| `Refresh Turret Presentation Synchronization` | Rebuilds Tick prerequisites after a runtime rig/profile change. |
| `Refresh Weapon Installation Registry` | Rebuilds Weapon ID to axis/muzzle mappings. |
| `Get Weapon Installation State` | Reads the resolved state of one installation. |
| `Apply Embedded Weapon Installation Change` | Rebinds one weapon to another axis group and/or muzzle. |
| `Refresh Weapon Axis Registry` | Rescans owner axis controllers. |
| `Get Registered Axis Group Controller` | Gets a low-level controller by Axis Group ID. |
| `Get Registered Axis Group For Weapon` | Resolves the axis group used by a Weapon ID. |
| `Refresh Weapon Muzzle Registry` | Rescans muzzle components. |
| `Get Registered Weapon Muzzle` | Gets a low-level muzzle by Weapon ID. |

## Advanced — Aim Channels

| Node | Purpose |
|---|---|
| `Get Standard Aim Channel Name` | Converts the standard enum to its stable `FName`. |
| `Set Standard Aim Channel Target` | Writes a target to a standard channel. |
| `Set Named Aim Channel Target` | Writes a target to a custom named channel. |
| `Submit Standard Aim Frame` | Updates all standard channels under one revision. |
| `Set Active Standard Aim Channel` | Selects the active standard source. |
| `Set Aim Channel Enabled` | Enables/disables a named channel without removing it. |
| `Get Aim Channel State` | Reads a named channel. |
| `Get Standard Aim Channel State` | Reads a standard channel by enum. |
| `Clear Aim Channel` | Removes one named channel state. |
| `Clear All Aim Channels` | Clears all cached channels. |

## Advanced — Muzzles, traces, and ballistics

| Node | Purpose |
|---|---|
| `Update Registered Weapon Muzzles` | Updates every registered muzzle shadow and returns a detailed batch result. |
| `Update Registered Native Weapon Traces` | Executes native continuous traces for registered muzzles. |
| `Get Weapon Trace State` | Reads a cached trace state. |
| `Get Native Weapon Trace State` | Reads the native state without the legacy compatibility cache. |
| `Update Registered Weapon Ballistics` | Updates enabled ballistic predictions. |
| `Get Weapon Ballistic State` | Reads detailed ballistic state for one Weapon ID. |

## Advanced — Detailed frames and UI

| Node | Purpose |
|---|---|
| `Update Weapon Runtime Frame (Advanced / Detailed)` | Detailed version of the compact weapon runtime call. |
| `Update Vehicle Aim Source Frame (Advanced / Detailed)` | Detailed camera/AimCube update with collision and debug options. |
| `Update Vehicle Weapon System Frame (Advanced / Explicit Aim)` | Solves from an explicit Standard Aim Frame. |
| `Update Vehicle Weapon System Frame (Advanced / Detailed)` | Solves from cached aim sources and returns the full frame result. |
| `Refresh Vehicle Weapon UI Cache (Advanced)` | Explicitly reprojects UI with a chosen Player Controller or viewport mode. |
| `Get Cached Vehicle Weapon UI Frame` | Returns the complete arbitrary-size cached UI frame. |

## Advanced — Axis Application and Routing

| Node | Purpose |
|---|---|
| `Evaluate And Queue Registered Axis Solutions` | Solves explicit axis requests and queues physical commands. |
| `Apply Pending Vehicle Axis Commands` | Manually applies the detailed pending-command batch. |
| `Apply Pending Vehicle Turret Commands (Advanced)` | Compact bool wrapper for manual pending-command application. |
| `Route Aim Channel To Turret Solution` | Routes a named channel using an explicit controller and basis transform. |
| `Route Aim Channel To Configured Turret` | Uses the controller's configured basis. |
| `Route Split Aim Channels To Configured Turret` | Uses different named yaw and pitch sources. |
| `Route Standard Aim Channel To Configured Turret` | Routes one standard enum channel. |
| `Route Standard Split Aim Channels To Configured Turret` | Routes different standard yaw and pitch channels. |
| `Route Active Aim Channel To Configured Turret` | Uses the active standard channel. |
| `Update Standard Aim Frame And Turret Solution` | Submits a frame and solves one explicit turret. |
| `Route Standard Axis Group Solutions` | Solves an axis-request array from already submitted channels. |
| `Update Standard Aim Frame And Axis Groups` | Submits a frame and solves an axis-request array. |

## Advanced — Low-level Turret Axis Controller

| Node | Purpose |
|---|---|
| `Update Low-Level Turret Solution (Advanced)` | Solves a target against an explicit aim basis. |
| `Update Low-Level Turret From Active Target (Advanced)` | Solves the previously stored active target. |
| `Update Low-Level Configured Turret (Advanced)` | Uses component references configured on the controller. |
| `Update Low-Level Split Axis Turret (Advanced)` | Accepts separate yaw and pitch targets. |
| `Validate Configured Setup` | Validates controller references and settings. |
| `Set Active Aim Target` | Stores one shared active target. |
| `Set Active Axis Aim Targets` | Stores separate yaw and pitch targets. |
| `Clear Active Aim Target` | Clears active target state. |
| `Has Valid Active Aim Target` | Checks active target validity. |
| `Set Weapon Axis Mount Mode` | Changes the solver's mechanical mount mode. |
| `Get Weapon Axis Mount Mode` | Reads the current mount mode. |

## Advanced — Low-level Weapon Muzzle

| Node | Purpose |
|---|---|
| `Update Low-Level Weapon Muzzle (Advanced)` | Captures the configured muzzle transform into a shadow state. |
| `Execute Low-Level Muzzle Trace (Advanced)` | Executes a trace directly from the low-level muzzle component. |
| `Validate Configured Muzzle` | Validates the component/socket and trace setup. |

## Advanced — Custom Aim

| Node | Purpose |
|---|---|
| `Make Turret Aim Target From World Point (Advanced)` | Creates a world-point target. |
| `Make Turret Aim Target From World Direction (Advanced)` | Creates a direction-only target. |
| `Solve Two Axis Turret Aim (Advanced)` | Pure calculate-only solver without component state or transform application. |

## Advanced — Migration

These adapters support gradual conversion of an older Blueprint graph. Avoid them in a new vehicle.

| Node | Purpose |
|---|---|
| `Get Configured Weapon Axis Rotations` | Reads real configured yaw/pitch rotations for legacy sound, UI, or networking. |
| `Make Weapon Trace Sample` | Builds a legacy sample with an explicit hit flag. |
| `Make Legacy Weapon Trace Sample From Resolved End` | Reconstructs a sample when the old helper has no hit flag. |
| `Submit Weapon Trace Sample` | Submits one external legacy trace. |
| `Submit Weapon Trace Frame` | Submits a legacy trace array under one revision. |
| `Clear Weapon Trace State` | Clears one compatibility trace state. |
| `Clear All Weapon Trace States` | Clears the compatibility trace cache. |
| `Compare Native And Legacy Weapon Traces` | Executes both paths and reports migration differences. |
| `Get Weapon Trace Compatibility Frame` | Returns the old fixed two-weapon trace output set. |
| `Get Vehicle Aim Compatibility Frame` | Returns the old camera/AimCube endpoint set. |
| `Get Two Weapon UI Compatibility Frame` | Returns the old fixed two-weapon HUD frame. |
| `Get Weapon Ballistic Crosshair Frame` | Returns the old pair of ballistic crosshair points. |
| `Update Vehicle Weapon System Frame (Advanced / Migration)` | Full bridge with explicit aim, axis requests, and legacy traces. |

## Advanced — Replication diagnostics

| Node | Purpose |
|---|---|
| `Should Use Legacy Axis Networking` | Reports whether the project should remain on the legacy networking path. |
| `Update Native Axis Replication Diagnostics` | Explicitly updates/publishes replication diagnostics; normal runtime does this automatically. |

## Additional vehicle utility nodes

| Node | Purpose |
|---|---|
| `Calculate Spring Arm Zoom Magnet` | Calculates interpolated SpringArm length and lateral zoom magnet. |
| `Calculate Camera FOV Zoom` | Safely clamps the zoom index and interpolates FOV. |
| `Is Component Overlapping Named Object` | Checks a named overlap without unsafe empty-array reads. |
| `Safe Divide (Double)` | Divides finite doubles with a fallback for zero/invalid denominators. |


