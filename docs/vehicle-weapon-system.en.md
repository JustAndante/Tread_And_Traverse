---
layout: default
title: "Vehicle Weapon System — English"
description: "Configuration and integration quick start"
lang: en
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/en/' | relative_url }}">← English documentation</a>
  <a href="{{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}">Русский</a>
  <a class="is-active" href="{{ '/docs/vehicle-weapon-system.en.html' | relative_url }}">English</a>
</div>

# Vehicle Weapon System Quick Start

`TurretSystemRuntime` is an independent Runtime module inside the plugin. It does not depend on the track solver. A vehicle normally needs one visible `Vehicle Weapon System` actor component; its per-axis controllers and per-weapon muzzles are created internally from configuration.

## Minimal vehicle setup

1. Add `Vehicle Weapon System` to the vehicle Blueprint.
2. Set `Definition Source` to `Embedded Definitions`.
3. Add one `Embedded Axis Definition` for each independently aimed yaw/pitch mechanism.
4. Add one `Embedded Muzzle Definition` for each logical weapon/barrel.
5. Add one `Embedded Weapon Installation` for each Weapon ID.
6. Click `Rebuild Embedded Weapon Runtime` and then `Validate Vehicle Weapon System Configuration` in the component Details panel.

The readiness result should report equal configured/ready counts and no errors. A warning is informational; an error blocks a complete setup.

The normal Details view intentionally shows only configuration/readiness, performance, debug, and replication controls/status. Configured array rows use their stable IDs as titles (`MainTurretAxes`, `MainGun`, `CoaxMG`) instead of anonymous element numbers. Internal maps, registries, cached frames, pending commands, revisions, routing results, and presentation caches are hidden from Details entirely; they remain Blueprint-readable and available through the compact query APIs when diagnostics or custom integration needs them. Rare compatibility and presentation options live under `Configuration | Advanced`. Settings that belong to a disabled mode are hidden entirely: cone angles, optional yaw limits, restricted pitch-sector values, rate limits, continuous-trace options, ballistic parameters, debug duration/thickness, and native-replication tuning appear only when their owning feature is enabled. Low-level migration, registry, detailed-frame, and direct-routing Blueprint nodes are grouped under `Vehicle | Weapon System | Advanced`; the normal palette keeps the compact update/control/query nodes. These changes affect editor presentation only; existing serialized vehicle/profile values and saved nodes remain compatible.

The normal Blueprint graph uses only the compact frame calls:

- `Update Weapon Traces And Ballistics` once for continuous muzzle traces and optional ballistics;
- `Update Vehicle Aim Sources` after the vehicle has positioned its main camera, AimCube, and commander AimCube. It continuously traces and caches External, Gunner, Commander, and held/sub-gunner sources;
- `Update Vehicle Weapon System` after that call. It consumes the cached aim-source frame and builds requests for every configured axis internally; it does not need an Aim Frame, Axis Group Request array, or legacy trace samples.

Deferred physical commands are applied automatically by the component's pre-presentation tick before controlled skeletal poses, sockets, SpringArms, and cameras update. Do not add `Apply Pending Vehicle Axis Commands` or `Apply Vehicle Turret Commands` to a normal embedded setup. Those calls remain only under the advanced/migration API for rigs that explicitly own their application phase.

The compact calls return only success/failure. Detailed frames stay cached on the component for diagnostics, so normal graphs do not need to split or copy the large result structures. The older detailed calls remain available under the advanced/migration categories.

Each `Embedded Axis Definition` contains default yaw/pitch aim channels and default stabilization state. If camera or weapon mode changes those choices at runtime, call `Set Weapon Axis Control State` for that Axis Group ID. The component retains the state, so the setter normally belongs on the mode-change path rather than being rebuilt as a struct array every Tick. Its advanced current-angle inputs exist only for compatibility with an old calculate-only axis whose state still lives in Blueprint; normally leave them hidden and let the component read the physical pivots.

If a player-controlled stabilized axis must distinguish deliberate drive activity from automatic camera/parent refresh, call `Arm Weapon Axis Mechanical Drive` from the same input event before its normal yaw/pitch input call. Keep yaw and pitch on separate lanes: `(YawDelta, 0)` and `(0, PitchDelta)`. A non-zero sample only arms that plane; its sign and magnitude never become an angle, target, lease, or accumulated command. The single routed target determines direction. The drive remains armed until the physical axis reaches that target, so one mouse/input event may move the sight while the motor completes its normal bounded catch-up.

Camera switching, AimCubes, SpringArm zoom, input selection, UI styling, firing effects, and damage policy remain vehicle-specific Blueprint logic. The component owns the reusable aim solving, physical axis commands, muzzle rays, ballistics caches, configuration validation, and optional axis replication.

## Stable IDs

Use stable names that do not depend on a particular skeletal mesh:

- Axis Group IDs: `MainTurretAxes`, `CommanderTurretAxes`, `RoofMGAxes`.
- Weapon IDs: `MainGun`, `CoaxMG`, `RoofMG`, `SmokeLauncher`.

Profiles and runtime reassignment use these IDs. Component, bone, and socket names are vehicle bindings and may differ between tank models.

## Common installation patterns

### Main gun plus coaxial MG

- One axis definition: `MainTurretAxes`.
- Two installations: `MainGun -> MainTurretAxes` and `CoaxMG -> MainTurretAxes`.
- Two muzzle definitions. They may use different sockets on the same gun component.

Both weapons share physical yaw/pitch but retain separate rays, collision settings, ballistic speeds, UI states, and firing logic.

### Parent-mounted MG with a limited cone

- Add another axis definition whose aim basis is the main turret.
- Set its solver mount mode to `Parent Mounted (Limited Cone)`.
- Configure horizontal, upward, and downward cone half-angles.
- Bind the MG installation to that axis group.

Requests outside the elliptical cone are clamped to its boundary. This works for flexible coax/roof mounts without creating a weapon-specific controller class.

### Independent commander MG turret

- Add `CommanderTurretAxes` with the commander cupola/turret as yaw pivot and the MG cradle as pitch pivot.
- Use the hull or main turret as its configured aim basis, depending on the mechanical hierarchy.
- Bind `RoofMG` to `CommanderTurretAxes` and configure its own muzzle socket.

The same universal axis definition supports a turret placed anywhere on the vehicle. Multiple independent turrets require additional axis entries, not additional component classes.

### Fixed weapon

- Add a weapon installation with `Uses Axis Group` disabled.
- Keep a muzzle definition if the weapon needs a continuous ray or ballistics.

### Two or more MGs

Add one installation and one muzzle per Weapon ID. Weapons may share an axis group or reference different groups. There is no fixed weapon or MG count.

## Reusable profiles and fast model swaps

Create a Data Asset of type `Vehicle Weapon System Profile`.

To capture a working tank:

1. Assign the Data Asset to `Configuration Profile`.
2. Click `Export Current Setup To Assigned Weapon System Profile`.
3. Save the profile asset.

To apply shared behavior to another model while keeping that model's components/sockets:

1. Create local axis and muzzle entries with the same stable IDs as the profile.
2. Assign the new model's aim basis, yaw/pitch components, muzzle components, and sockets.
3. Assign the profile and click `Validate Assigned Weapon System Profile Compatibility`.
4. Resolve every missing-binding/error entry.
5. Leave `Preserve Vehicle Bindings When Applying Profile` enabled.
6. Click `Apply Assigned Weapon System Profile`, then validate the complete vehicle configuration.

The compatibility preflight is non-destructive. It checks duplicate/missing IDs, installation references, limits/ranges/ballistic speed, and whether all axis and muzzle bindings can be preserved before the profile mutates the vehicle setup.

## Aim sources and continuous rays

`Update Vehicle Aim Sources` performs the camera/AimCube conversion automatically and supports Gunner, Commander, External, and a held/sub-gunner channel without Blueprint trace graphs. `Aim Target Policy` controls the target contract:

- `Point On Hit / Direction On Miss` is the preferred default for new rigs;
- `Resolved Endpoint World Point (Legacy Parity)` preserves older screen-ray rigs whose stabilization and camera switching were authored around resolved endpoints. Use it when migrating an existing working vehicle before changing its aim-space contract.

Custom AI or non-camera sources may still submit an explicit standard frame through the advanced API.

Continuous rays are per Weapon ID and are independent of which camera is active. UI code should query the cached state for the intended weapon or active camera solution rather than recalculating traces in widgets.

## Modular UI frame and custom Blueprint integration

`Vehicle Weapon System` maintains one cached `Vehicle Weapon UI Frame`. It contains an arbitrary stable-sorted collection of named aim sources and an arbitrary collection of Weapon-ID entries. Each weapon entry exposes its continuous trace, ballistic result, hit/valid flags, world positions, projected screen positions, and cache revision. It does not run another collision trace or ballistic prediction; it only projects the coherent results already calculated by the runtime frame.

The standard `Update Vehicle Aim Sources` call refreshes this cache automatically. Use `Update Vehicle Weapon UI Frame` only when a custom vehicle needs an explicit Player Controller, viewport-relative projection, or an independently scheduled UI update. Direction-only aim sources use `Direction Marker Projection Distance`; world-point sources and weapon endpoints are unchanged.

For a widget owned by a generic vehicle Actor, the shortest Blueprint surface is:

- `Get Vehicle Weapon Trace UI(Vehicle, Weapon ID)` for muzzle start, resolved end, screen position, hit and projection flags;
- `Get Vehicle Weapon Ballistic UI(Vehicle, Weapon ID)` for ballistic aim point, screen position, hit and projection flags;
- `Get Vehicle Weapon UI Pair(Vehicle, Primary ID, Secondary ID)` for a conventional two-weapon HUD;
- `Find Vehicle Weapon System(Vehicle)` when the widget needs the component itself or a named/standard aim-source query.

Component-aware Blueprints may instead use `Get Cached Weapon Trace UI`, `Get Cached Weapon Ballistic UI`, `Get Cached Aim Source UI State`, or `Get Cached Standard Aim Source UI State`. `Get Cached Vehicle Weapon UI Frame` is available for systems that intentionally want the complete arbitrary-size frame. The two-weapon adapter is convenience/migration glue only; it does not limit the runtime to a main gun and coaxial MG.

Custom camera or AI logic may keep using the explicit aim-channel/frame APIs. Custom widgets may query only one Weapon ID. A vehicle may combine the supplied aim solver with its own UI, or the supplied UI cache with its own named aim sources, without inheriting the Leopard Blueprint or copying its compatibility variables.

Enable `Ignore Owner` for native traces and ballistics unless a weapon intentionally needs to collide with its own vehicle.

All optional drawing is discoverable on the top-level component under `Weapon System | Debug`. Set `Debug Draw Mode` to `Aim Source Rays`, `Weapon / Muzzle Rays`, `Ballistic Paths`, or `All`; keep it `Off` in shipping. `Debug Draw Duration = 0` gives one-frame lines and avoids accumulating persistent geometry.

Ballistic results are cached between prediction updates. `Weapon System | Performance | Ballistic Update Rate Hz` controls the prediction cadence independently of Tick; 20 Hz is the normal starting point. Per-weapon `Simulation Frequency` controls path resolution and should be raised only when collision accuracy requires it. Use the component's `Performance Diagnostics` to inspect aim, muzzle, continuous-trace, ballistic, runtime-frame, and axis-routing time separately. These fields are stored and displayed as raw milliseconds with an explicit `(ms)` suffix. Debug drawing also creates render-thread/GPU work outside those component CPU timers, so compare the full frame profiler with `Debug Draw Mode` set to `Off` and to the desired diagnostic mode.

## Stabilization and application order

`Deferred Relative Rotation` queues the selected world-space target in the coherent weapon-system frame. On the next frame the component's dedicated pre-presentation tick first rebases that target against the already updated physical parent/pivots, then rebuilds the rate-limited step from the current frame delta and consumes the command automatically. Parent movement within the 24/4-style drive limits is therefore followed in the current physical frame. Without an acquired `HoldWorld` latch, faster movement makes the ordinary motor fall behind normally.

When deferred axes drive skeletal-mesh pivots, `Synchronize Controlled Skeletal Presentation` is enabled by default. The component establishes the phase order `movement -> pre-presentation axis application -> controlled skeletal poses/sockets -> vehicle Actor Tick camera/AimCube preparation, rays, UI, and next solve -> SpringArm/camera presentation`. Controlled skinned pivots depend directly on the pre-presentation tick and complete before the owner reads their sockets. SpringArms and cameras complete after the owner has written zoom, magnet, rotation, and switching inputs, so they never render an earlier camera state. This keeps the visible turret, muzzle transforms, Blueprint camera preparation, and final camera presentation ordered without a second bone refresh or a dependency cycle. `Presentation Diagnostics` lists synchronized pivots, aim inputs, and post-owner camera components. Refresh synchronization only after changing a rig/profile at runtime; normal vehicles need no application node.

Dynamic yaw and pitch stabilization is conditional. It acquires a persistent physical latch only after the pivot is already within `Focus Tolerance Degrees` of the requested solution. While the weapon is still slewing toward a new target, the normal configured yaw/pitch drive rate remains authoritative and stabilization adds no counter-rotation. Once focused, parent movement that exceeds the normal drive step retains the exact forward direction sampled from the real yaw/pitch components unless an armed same-direction `ManualDrive` is selected. The latch survives later camera/AimCube ray refreshes, so a camera that follows the rotating hull cannot release the hold on the next frame. During slow parent motion the ordinary drive remains authoritative and the latch synchronizes to the transform that was actually written, preventing a stale snap when motion later becomes fast. The component reprojects the physical direction through the current attachment hierarchy, applying parent axes before their child turrets. Avoid adding a second Blueprint hull-rotation compensation on top of the component's stabilization.

For parent movement above the normal drive step, every stabilized plane has only two control states. `HoldWorld` reprojects the retained real component direction exactly. `ManualDrive` starts with one ordinary 24/4-style parent-relative motor result toward the single routed target. An armed plane enters `ManualDrive` only when that live target lies from the exact held direction in the same signed direction as the measured parent motion; otherwise it remains in `HoldWorld`. If the live target lies between the exact hold and the ordinary motor result, `ManualDrive` stops at that target instead of crossing it. Large commands therefore retain the ordinary motor output, while fine corrections cannot create a Hold/Drive sawtooth by overshooting the sole target. The two outputs are mutually exclusive, and the parent rate is never added to the motor step. Apply consumes one coherent queued frame: a newer input generation waits for the next queued target and can only protect itself from cleanup by an older command. There is no live/queued sign arbitration, target-coherence bridge, substitute target, input-derived angle, lease, or replay queue. Physical convergence returns the plane to `HoldWorld`; configuration loss, disabled stabilization, or suppressed local application clears its transient control state.

Vehicles whose movement component finalizes the hull transform after the normal Blueprint update need no extra graph node. While a physical stabilization latch is active, `Vehicle Weapon System` enables a lightweight `PostPhysics` commit after the owner's movement components. It reapplies only yaw/pitch drift that exceeds the corresponding normal drive step, so a late Chaos vehicle transform cannot create a rendered one-frame turret/ray/UI slip and small physics noise is not amplified. The component Tick remains disabled when neither native axis replication nor a stabilization latch needs it. `Performance Diagnostics` exposes its raw cost, corrected axis count, and maximum hold error.

`Last Pending Axis Application Batch Result` exposes `Yaw/Pitch Stabilization Focus Ready`, persistent `Yaw/Pitch Stabilization Latched`, `Yaw/Pitch Parent Motion Exceeded Drive`, signed parent-motion degrees, final per-axis stabilization-applied flags, immediate `World Hold Error After Apply (deg)` values, and one explicit status string for each axis. `World Stabilization Applied` is set only when the compensated value was committed by the real transform write. These fields distinguish acquisition, retained focus, parent-speed gating, local/proxy write suppression, and physical application without comparing booleans from different axes or frames.

For vehicle-specific camera FOV branches, `Calculate Camera FOV Zoom` clamps the zoom index, protects invalid steps/FOV limits, and returns the smoothly interpolated FOV in one pure node. It is independent from `Calculate Spring Arm Zoom Magnet`, so gunner/commander optical FOV and the external diagonal SpringArm magnet can be configured without sharing state.

For a rear deck, engine cover, or other yaw-dependent obstruction, enable `Use Restricted Pitch Sector` in the axis solver settings. Configure the sector center/half-angle and its alternate minimum/maximum pitch. The restriction is evaluated from the actual current yaw pivot, so it remains correct while the desired target crosses the sector boundary. For example, center `180`, half-angle `40` covers the rearward region beyond approximately `+/-140` degrees.

## Replication

Native axis replication is opt-in. The safe default leaves existing vehicle RPCs active.

When enabled:

- the locally controlled copy publishes compact stable-ID axis states at a controlled rate;
- authority rejects unknown/duplicate axes, reapplies mechanical limits and cone limits, and bounds movement by configured drive rates;
- remote server copies and simulated proxies skip the weapon-system facade's local aim routing, continuous traces, and ballistics, then interpolate the replicated physical pivots;
- authoritative firing should use the server's current physical muzzle socket, not a client-provided projectile transform.

`Should Evaluate Local Weapon Runtime` is also the guard for any vehicle-specific camera, AimCube, or widget preparation that lives outside the component. The Leopard example already separates local-owner and proxy visual Tick paths; custom vehicles should do the same instead of calculating local camera rays for simulated proxies.

Inspect `Replication Status` during a two-player test:

- local authority/owning client: setup ready, publishing axes, local runtime enabled;
- authority copy of a remote pawn/simulated proxy: frames received/applied, local runtime skipped;
- rejected/duplicate counts should remain zero during normal play;
- observed publish rate should be close to the configured rate while axes move.

The replicated axis frame uses owner-skip delivery: an owning client does not receive its own visual state back every update. Inspect server rejection/rate-clamp counters on the server copy. If normal driving produces clamps or visible owner/server divergence, keep the legacy gate enabled and investigate the local/server rate settings before release.

Keep a legacy-network gate until a two-player motion/firing test passes with the project's latency and packet-loss targets.

## Final preflight

Before shipping a vehicle variant:

- readiness is `Ready`, with no errors;
- every installation resolves to the intended shared, independent, or fixed mount;
- every muzzle starts at the correct component/socket and ignores the vehicle;
- gunner/commander/external camera switching and AimCube/SpringArm inputs run after automatic axis/pose preparation; SpringArm/camera component presentation then finalizes after that Blueprint work;
- stabilization holds a world point under hull yaw and pitch without stacked compensation;
- two-player tests cover both owners, server copies, simulated proxies, MainGun/MG firing, and reconnect/relevancy behavior;
- debug trace/trajectory drawing is disabled unless intentionally exposed as a product option.

