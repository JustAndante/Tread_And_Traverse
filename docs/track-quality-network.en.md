---
layout: default
lang: en
page_kind: reference
title: "Track — Quality and Network"
description: "Choose track quality for local, remote, and server copies"
product: track
doc_section: quality-network
---

<p class="doc-breadcrumb">Run and ship</p>

# Quality and network

Track quality is a local visual decision. It should not add replication or make
a dedicated server calculate cosmetic physics.

## Choose a policy

- `Full Physical` — local or nearby vehicle.
- `Cheap Remote` — inexpensive visual loop for a remote vehicle.
- `Local Ownership + Distance` — every client selects cost independently.
- `External` — the project switches quality through Blueprint.

## Verify the roles

1. The local vehicle uses the intended full quality.
2. A remote vehicle switches independently of its owner.
3. Cosmetic quality is not replicated.
4. A dedicated server creates no visual links and runs no expensive solve.

All fields: [Simulation and Runtime]({{ '/docs/track-settings-reference.en.html#simulation-runtime' | relative_url }}).

<div class="page-nav" markdown="1">
[← Links and motion]({{ '/docs/track-links-motion.en.html' | relative_url }})
[Next: troubleshooting →]({{ '/docs/track-troubleshooting.en.html' | relative_url }})
</div>

