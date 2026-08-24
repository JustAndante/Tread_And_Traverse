---
layout: default
lang: en
page_kind: reference
title: "Weapon — Reticle and UI"
description: "Connect cached aiming points to the user interface"
product: weapon
doc_section: ui
---

<p class="doc-breadcrumb">Build the system · Step 3 of 3</p>

# Reticle and UI

UI should read the prepared runtime cache. Do not start a second trace or
ballistic calculation from a widget.

## Use prepared data

- `Get Weapon HUD Screen Data(Vehicle, Weapon ID)` — all screen points for one
  arbitrary weapon, including maximum-range rays that ignore hits;
- `Get Weapon Muzzle Trace HUD Data(Vehicle, Weapon ID)` — muzzle trace only;
- `Get Weapon Ballistic Aim HUD Data(Vehicle, Weapon ID)` — ballistic marker;
- `Get Aim Source HUD State(Vehicle, Aim Source ID)` — camera, sight, or AI source;
- `Get Vehicle Weapon HUD Snapshot` — a dynamic list for any weapon count;
- `Find Vehicle Weapon System` — component lookup without a hard reference.

Pass a third or fourth Weapon ID to the same nodes. The current API has no
Primary/Secondary slots. The Advanced `Refresh Vehicle Weapon HUD Cache
(Advanced)` node is only needed by a custom scheduler with an explicit Player
Controller.

## Verify

1. Runtime updates before the UI cache is read.
2. Camera switching changes the source instead of creating another trace path.
3. The widget does not break large runtime structs every Tick.
4. A simulated proxy does not use the owner's local camera.

Details: [Modular UI Frame]({{ '/docs/vehicle-weapon-reference.en.html#ui-frame' | relative_url }}).

<div class="page-nav" markdown="1">
[← Aiming]({{ '/docs/weapon-aiming.en.html' | relative_url }})
[Next: replication →]({{ '/docs/weapon-replication.en.html' | relative_url }})
</div>

