---
layout: default
title: "Vehicle Weapon System: Blueprint Nodes — English"
description: "Current public Vehicle Weapon System Blueprint node reference"
lang: en
page_kind: reference
product: weapon
doc_section: nodes
---

# Vehicle Weapon System Blueprint nodes

This is the curated buyer-facing Vehicle Weapon System Blueprint API. Every table name is the exact name to search in the Blueprint Palette.

- `Vehicle | Weapon System | Core` — normal vehicle integration, input, firing, HUD, and profiles;
- `Vehicle | Weapon System | Advanced` — custom schedulers, explicit channels/registries, and detailed diagnostics.

> Start with Core. A profile-driven vehicle does not need Advanced nodes. Deprecated/Migration, Diagnostics/Internal helpers, and adjacent generic vehicle utilities are intentionally omitted even when they remain public for compatibility or developer tooling.

## Normal runtime order

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

Fire through `Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. Query HUD data by any `Weapon ID`; the API has no primary/secondary weapon limit.

<a id="core-nodes"></a>

## Core

### Axis Control

| Node | Purpose |
|---|---|
| `Configure Weapon Axis Aim And Stabilization` | Changes one configured axis input without rebuilding controllers. Normally call this only when camera/weapon mode or stabilization changes. |
| `Get Configured Axis Group Rotations` | Reads the real configured yaw/pitch component rotations for a stable Axis Group ID. AnimBP, sound, networking, and custom presentation may consume these values; the function never runs another solver or writes a transform. |
| `Get Weapon Axis Aim And Stabilization Settings` | Reads the current aim-source and stabilization settings for one Axis Group ID. |
| `Reset Weapon Axis Aim And Stabilization` | Restores one Axis Group to the aim-source and stabilization values imported from its profile. |
| `Submit Manual Weapon Axis Input` | Reports manual yaw and pitch input activity for this axis group. The current routed aim target determines direction; these values only activate the corresponding mechanical drive plane and are never added to stabilization compensation. Use independent yaw-only and pitch-only input event lanes. |
### Ballistics

| Node | Purpose |
|---|---|
| `Apply Ammo Type Ballistics` | Applies one Ammo Type to ballistic prediction for this Weapon ID. Launch speed is read only from the loaded Projectile Class Initial Speed property; all other trajectory settings come only from the Ammo Type. Disabled prediction clears the runtime state. The call fails when enabled prediction has no valid class speed. |
### Configuration

| Node | Purpose |
|---|---|
| `Apply Direct Weapon System Profile` | Imports the profile selected in Configuration Profile. Also works as an editor button. |
| `Apply Weapon System Profile` | Applies an explicit profile with optional binding preservation and runtime rebuild. |
| `Export Built-In Setup To Direct Weapon System Profile` | Copies the current embedded arrays into the assigned Data Asset. |
| `Initialize Vehicle Armament Profile` | Validates, resolves, and caches the assigned top-level armament profile. |
| `Validate Direct Weapon System Profile Compatibility` | Checks profile IDs, references, settings, and preservable vehicle bindings without applying it. |
| `Validate Vehicle Weapon System Configuration` | Rebuilds registries and returns the complete readiness report. |
### Effects

| Node | Purpose |
|---|---|
| `Play Configured Weapon Camera Shake` | Plays the configured per-Weapon-ID camera feedback without Blueprint asset literals. |
| `Play Configured Weapon Presentation` | Replicates one profile-driven presentation event for any Weapon ID. Standard weapons call this automatically. A Blueprint Custom weapon calls it only after its own authoritative shot/reload transaction is accepted, so custom salvos do not need hard-coded sound or FX assets. |
### Integration

| Node | Purpose |
|---|---|
| `Find Vehicle Weapon System` | Finds the facade component on a vehicle Actor. |
### Profiles

| Node | Purpose |
|---|---|
| `Get All Resolved Weapon Loadouts` | Returns every enabled runtime-ready loadout in stable profile order. |
| `Get Effective Vehicle Armament Profile` | Returns the armament selected by the Tank Variant Profile, or the direct fallback. |
| `Get Resolved Smoke Launcher Setup` | Returns the runtime-ready smoke setup when the profile contains one. |
| `Get Resolved Weapon Effects And Audio` | Returns runtime-ready effects/audio data for any stable Weapon ID. |
| `Get Resolved Weapon Loadout` | Returns runtime-ready loadout data for any stable Weapon ID. |
| `Get Weapon Loadout Definition` | Finds the immutable profile definition for one Weapon ID. |
| `Validate Tank Variant Profile` | Validates the top-level Tank Variant and every referenced armament profile. |
| `Validate Vehicle Armament Profile` | Validates the links from an Armament Profile to its aiming and loadout profiles. |
| `Validate Weapon Loadout Profile` | Validates IDs, feed settings, timing, ammo defaults, launcher banks, and presentation in one loadout profile. |
### Replication

| Node | Purpose |
|---|---|
| `Set Optimized Turret Replication Enabled` | Enables/disables the optional controlled-rate native network path. |
| `Should Evaluate Local Weapon Runtime` | Gates local aim, trace, ballistic, and vehicle-specific visual preparation. |
### Runtime

| Node | Purpose |
|---|---|
| `Is Weapon System Active` | Reads the component-wide lifecycle gate used for destroyed, disabled, or repaired vehicles. |
| `Set Weapon System Active` | One lifecycle gate for destroyed, disabled, or repaired vehicles. Inactive systems skip aim rays, axis solving, traces, ballistics, UI projection, stabilization, and native replication work even if the owning Blueprint continues to call its compact update nodes. |
| `Update Vehicle Aim Sources` | Converts configured camera/AimCube inputs into the coherent aim-source cache. |
| `Update Vehicle Weapon System` | Solves and routes all configured axes from the cached sources. |
| `Update Weapon Traces And Ballistics` | Updates muzzle transforms, continuous weapon traces, and the optional ballistic cache. |
### UI

| Node | Purpose |
|---|---|
| `Get Active View Aim HUD Screen Data` | Current camera/sight aim source without assuming External, Gunner, or Commander. |
| `Get Aim Source HUD State` | Generic actor-facing query for any configured camera, sight, or AI aim source ID. |
| `Get Cached Aim Source HUD State` | Queries one arbitrary named aim source from the coherent cached UI frame. |
| `Get Cached HUD State For Weapon` | Compact pull API for a custom widget or vehicle-specific Blueprint. |
| `Get Cached Standard Aim Source HUD State` | Convenience query for Gunner, Commander, External, or Main Gun Aim Ray. |
| `Get Cached Weapon Ballistic Aim HUD Data` | Returns the ballistic aim solution used by a custom crosshair or hit indicator. |
| `Get Cached Weapon Muzzle Trace HUD Data` | Returns the physical muzzle trace used by a custom reticle or firing indicator. |
| `Get Vehicle Weapon HUD Snapshot` | Complete scalable snapshot for widgets that enumerate weapons or need the active view aim source. |
| `Get Weapon Ballistic Aim HUD Data` | One-node actor-facing ballistic query for custom widgets and vehicle Blueprints. |
| `Get Weapon HUD Screen Data` | Returns HUD screen data for one Weapon ID. Aim Ray outputs describe the assigned camera/sight source. Muzzle Trace outputs describe the named weapon's own barrel. Resolved outputs follow hits; Maximum-Range outputs ignore them. |
| `Get Weapon HUD State` | Generic actor-facing query for any configured weapon ID. |
| `Get Weapon Muzzle Trace HUD Data` | One-node actor-facing trace query for custom widgets and vehicle Blueprints. |
### Weapon Channels

| Node | Purpose |
|---|---|
| `Can Fire Weapon From Active Channels` | Returns whether the weapon's configured channel selection currently permits firing. |
| `Cycle Weapon Channel` | Exclusively selects the next or previous channel in profile order. |
| `Get Active Weapon Channels` | Returns the current replicated channel selection. |
| `Get Active Weapon IDs` | Returns the unique Weapon IDs supplied by all active channels. |
| `Get Available Weapon Channels` | Returns enabled channel IDs in deterministic profile order. |
| `Is Weapon Channel Active` | Reads the bool state of one channel. |
| `Request Weapon Channel Trigger State` | Network-safe trigger entry point for every weapon assigned to one selectable channel. This keeps input graphs independent from the number of physical weapons installed by a vehicle variant. |
| `Set Active Weapon Channel` | Selects one channel exclusively and disables the others. |
| `Set Active Weapon Channels` | Replaces the complete active set in one call. |
| `Set Weapon Channel Active` | Adds or removes one channel without changing the rest; use it for combined fire groups. |
### Weapons

| Node | Purpose |
|---|---|
| `Cancel Configured Weapon Reload Completion` | Cancels a pending configured reload timer without changing ammo state. |
| `Execute Configured Standard Weapon Shot` | Spawns one normal projectile from the configured muzzle and broadcasts profile-driven fire presentation. Ammo validation and consumption stay in the Blueprint ammo component and supply the resolved projectile class. Composite shells and salvos remain Blueprint Custom. |
| `Get Configured Weapon Fire Data` | Collects the profile, installation, and live muzzle binding for any Weapon ID. One generic Blueprint fire route can consume this result for MainGun, any number of MGs, or a user-defined standard projectile weapon. |
| `Get Configured Weapon Muzzle` | Resolves the exact configured component/socket used by traces, firing, muzzle FX, and custom Blueprint integrations. This avoids maintaining a second mesh selector beside the Weapon System profile. |
| `Is Configured Weapon Reload Scheduled` | Returns true while this Weapon ID has a pending reload-completion pulse. |
| `Is Configured Weapon Trigger Held` | Returns true while this configured Weapon ID is currently held. |
| `Release All Configured Weapon Triggers` | Stops every automatic/single-shot trigger currently held by this component. |
| `Request Configured Weapon Replenishment Update` | Broadcasts one server-side replenishment update to the vehicle variant. Call after the common replenishment-zone state has been refreshed. |
| `Request Configured Weapon Trigger State` | Network-safe trigger entry point for an owning vehicle Blueprint. It may be called on the owning client or directly on the server. The active profile decides whether the Weapon ID uses the standard runtime route or a child Blueprint custom handler. |
| `Schedule Configured Weapon Reload Completion` | Starts one per-Weapon-ID reload timer using the duration in the active loadout profile. Repeated calls do not restart an existing timer. |
| `Set Configured Weapon Trigger Held` | Starts or stops a configured weapon trigger. Call this on the server after the owning Blueprint's input RPC. Single-shot weapons pulse once on press; automatic weapons keep pulsing at their configured interval. Blueprint Custom weapons are routed to the vehicle Blueprint without requiring the standard… |

<a id="advanced-nodes"></a>

## Advanced

### Aim Channels

| Node | Purpose |
|---|---|
| `Clear All Aim Channels` | Clears all cached channels. |
| `Clear Named Aim Channel` | Removes the cached state of one named aim channel. |
| `Get Aim Channel State` | Reads a named channel. |
| `Get Standard Aim Channel ID` | Converts a standard aim-channel enum to its stable channel ID. |
| `Get Standard Aim Channel State` | Reads a standard channel by enum. |
| `Set Active Standard Aim Channel` | Selects the active standard source. |
| `Set Aim Channel Enabled` | Enables/disables a named channel without removing it. |
| `Set Named Aim Channel Target` | Writes a target to a custom named channel. |
| `Set Standard Aim Channel Target` | Writes a target to a standard channel. |
| `Submit Standard Aim Sources` | Updates all four standard channels with one shared revision. |
### Aim Sources

| Node | Purpose |
|---|---|
| `Update Vehicle Aim Sources (Advanced / Detailed)` | Detailed version of the normal aim-source update. Use it only when a custom Blueprint needs the full result structure; the Core node is the normal integration path. |
### Aim Routing

| Node | Purpose |
|---|---|
| `Route Active Aim Channel To Configured Turret` | Uses the active standard channel. |
| `Route Aim Channel To Configured Turret` | Uses the controller's configured basis. |
| `Route Aim Channel To Turret Solution` | Routes a named channel using an explicit controller and basis transform. |
| `Route Split Aim Channels To Configured Turret` | Uses different named yaw and pitch sources. |
| `Route Standard Aim Channel To Configured Turret` | Routes one standard enum channel. |
| `Route Standard Split Aim Channels To Configured Turret` | Routes different standard yaw and pitch channels. |
| `Update Standard Aim Sources And Turret Solution` | Convenience path for a single primary turret: submit all channels, select one, and route it. |
### Axis Application

| Node | Purpose |
|---|---|
| `Apply Pending Turret Axis Commands (Advanced / Detailed)` | Applies and consumes the commands queued by the previous coherent frame. |
| `Apply Pending Vehicle Turret Commands (Advanced)` | Compact bool wrapper for manual pending-command application. |
| `Evaluate And Queue All Turret Axis Commands (Advanced)` | Evaluates every requested routed axis and queues relative rotations for embedded definitions explicitly set to deferred application. |
### Axis Routing

| Node | Purpose |
|---|---|
| `Route Standard Axis Group Solutions` | Solves an axis-request array from already submitted channels. |
| `Update Standard Aim Sources And Axis Groups` | One-call path for future multi-installation graphs: submit frame and route every request. |
### Ballistics

| Node | Purpose |
|---|---|
| `Update All Weapon Ballistic Predictions` | Calculates every enabled embedded ballistic definition from its registered muzzle. |
### Compatibility

| Node | Purpose |
|---|---|
| `Get Configured Weapon Muzzle Mesh And Socket (Advanced)` | Skeletal-mesh adapter for Blueprint fire/FX functions that require a USkeletalMeshComponent instead of the general muzzle scene component. |
### Configuration / Installations

| Node | Purpose |
|---|---|
| `Apply Built-In Weapon Installation Change (Advanced)` | Rebinds one logical weapon to another axis and optionally another muzzle. |
| `Get Resolved Weapon Installation` | Returns the runtime axis/muzzle binding resolved for one Weapon ID. |
| `Refresh Weapon Installation Registry` | Rebuilds Weapon ID to axis/muzzle mappings. |
### Configuration / Runtime Setup

| Node | Purpose |
|---|---|
| `Rebuild Runtime From Built-In Configuration (Advanced)` | Rebuilds registries directly from the component's Local Configuration arrays. Use only when the local workflow is authoritative. |
### Custom Aim

| Node | Purpose |
|---|---|
| `Make World Direction Aim Target (Advanced)` | Creates an aim target from a world origin and direction without requiring a hit point. |
| `Make World Point Aim Target (Advanced)` | Creates an aim target from a world point and records whether it came from a blocking hit. |
| `Solve Two-Axis Weapon Aim (Advanced)` | Solves yaw and pitch for an explicit target, basis, current angles, limits, and drive settings. |
### Muzzles

| Node | Purpose |
|---|---|
| `Resolve All Configured Weapon Muzzles (Advanced)` | Resolves every registered muzzle pose/ray; still performs no collision traces. |
### Registry

| Node | Purpose |
|---|---|
| `Get Registered Axis Group Controller` | Gets a low-level controller by Axis Group ID. |
| `Get Registered Axis Group For Weapon` | Resolves the axis group used by a Weapon ID. |
| `Get Registered Weapon Muzzle` | Gets a low-level muzzle by Weapon ID. |
| `Refresh Turret Axis Registry` | Rescans all universal turret controllers on the owning vehicle. No ticking is enabled. |
| `Refresh Weapon Muzzle Registry` | Rescans muzzle components. |
### Runtime

| Node | Purpose |
|---|---|
| `Update Vehicle Weapon System (Advanced / Detailed Result)` | Final one-component path: routes the coherent frame cached by Update Vehicle Aim Source Frame. |
| `Update Vehicle Weapon System (Advanced / Explicit Aim Sources)` | Final compact facade call. It submits the camera/AimCube frame and builds all axis requests from Axis Control States; no Blueprint request or legacy-trace arrays are required. |
### Runtime Frame

| Node | Purpose |
|---|---|
| `Update Muzzle Traces And Ballistics (Advanced / Detailed)` | One early node for continuous rays plus optional projectile prediction. |
### Presentation

| Node | Purpose |
|---|---|
| `Refresh Turret Animation Update Order (Advanced)` | Reapplies the configured skeletal-mesh tick prerequisites after a variant changes turret or gun presentation components at runtime. Normal profile-driven vehicles do not call it every frame. |
### UI

| Node | Purpose |
|---|---|
| `Get Cached Vehicle Weapon HUD Snapshot` | Returns the complete cached collection when a UI needs to enumerate every weapon. |
| `Refresh Vehicle Weapon HUD Cache (Advanced)` | Rebuilds the scalable UI cache from the already coherent aim, trace, installation, and ballistic caches. It performs no collision trace or projectile prediction. |
### Weapon Traces

| Node | Purpose |
|---|---|
| `Update All Continuous Muzzle Traces (Advanced)` | Executes every enabled registered native muzzle trace once. |

## How parity is maintained

Names and visual pins are checked against the runtime module reflected API, then filtered to the buyer-facing Weapon System surface described above. When a listed node changes, this reference and `assets/js/blueprint-nodes.js` must be regenerated together.

