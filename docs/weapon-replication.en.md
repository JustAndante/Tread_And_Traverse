---
layout: default
lang: en
page_kind: reference
title: "Weapon — Replication"
description: "Verify network-owned axes and local visual runtime"
product: weapon
doc_section: replication
---

<p class="doc-breadcrumb">Run and ship</p>

# Replication

Enable component replication only when this component should synchronize the
axes. Cameras, local HUD, and cosmetic presentation remain local.

## Verification order

1. Confirm single-player behavior.
2. Test owning client and server copy on a listen server.
3. Test the second player's simulated proxy.
4. Run a dedicated server last.

## Invariants

- Axis Group IDs and Weapon IDs match on server and clients;
- authority enforces mechanical limits;
- a remote proxy receives pose without evaluating local camera runtime;
- server firing uses the server's current physical muzzle socket.

Details: [Replication]({{ '/docs/vehicle-weapon-reference.en.html#replication' | relative_url }}).

<div class="page-nav" markdown="1">
[← Reticle and UI]({{ '/docs/weapon-ui.en.html' | relative_url }})
[Next: troubleshooting →]({{ '/docs/weapon-troubleshooting.en.html' | relative_url }})
</div>

