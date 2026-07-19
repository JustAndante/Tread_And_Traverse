---
layout: default
title: "BP_Tank_Master: variables and graphs"
description: "Reference for authored variables, functions, macros, and event dispatchers in BP_Tank_Master"
lang: en
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/en/' | relative_url }}">← English documentation</a>
  <a href="{{ '/docs/track-physics-solver.en.html' | relative_url }}">Parameters</a>
  <a href="{{ '/docs/track-blueprint-nodes.en.html' | relative_url }}">Plugin Blueprint nodes</a>
  <a class="is-active" href="{{ '/docs/blueprint-authoring.en.html' | relative_url }}">Project Blueprint</a>
  <a href="{{ '/docs/track-cpp-api.en.html' | relative_url }}">C++ API</a>
  <a href="{{ '/docs/blueprint-authoring.ru.html' | relative_url }}">Русский</a>
</div>

# BP_Tank_Master: variables and graphs

This page covers the items authored directly in `BP_Tank_Master` and shown in the **My Blueprint** panel. It is separate from the plugin C++ API: the sections below contain project variables, authored functions, macros, and event dispatchers. Names and pins match the Blueprint asset.

The release reference includes only items reachable from live Event Graphs, Construction Script, and automatic RepNotify handlers. Uncalled debug helpers and legacy drafts are intentionally omitted.

<section class="bp-auth-summary">
<article><strong>182</strong><span>used variables</span></article>
<article><strong>36</strong><span>used functions</span></article>
<article><strong>9</strong><span>macros</span></article>
<article><strong>2</strong><span>Event Dispatcher</span></article>
</section>

<div class="bp-auth-toolbar" data-bp-catalog-toolbar>
<label><span>Search</span><input type="search" placeholder="Name, category, or type" data-bp-search></label>
<div class="bp-auth-tabs" role="tablist" aria-label="Reference section">
<button class="is-active" data-bp-target="variables">Variables</button>
<button data-bp-target="functions">Functions</button>
<button data-bp-target="macros">Macros</button>
<button data-bp-target="dispatchers">Event Dispatcher</button>
</div></div>

<section class="bp-auth-section is-active" data-bp-section="variables">
<h2>Variables</h2>
Only authored variables that are actually read or written by the graphs are shown. Components, function locals, and unused placeholders are excluded.
<aside class="bp-auth-note"><strong>About the displayed values.</strong> “In BP_Tank_Master” is the configuration stored for this reference vehicle. It is neither a universal default nor a recommended value for another tank; geometry, angles, rates, FOV, and limits are vehicle-specific.</aside>
<div class="bp-auth-grid bp-auth-grid--variables">
<article class="bp-auth-card" data-bp-item data-search="globaltracelenght global trace lenght camera|aim cube integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Aim Cube</span>
<div class="bp-auth-card__title"><code>GlobalTraceLenght</code></div>
<p>Numeric value for “Global Trace Lenght”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>25000000</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Global Trace Lenght Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Global Trace Lenght</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enablesoftnesscamera enable softness camera camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>EnableSoftnessCamera</code></div>
<p>State flag for “Enable Softness Camera”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Enable Softness Camera Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Enable Softness Camera</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="freecamswitch free cam switch camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>FreeCamSwitch</code></div>
<p>State flag for “Free Cam Switch”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Free Cam Switch Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Free Cam Switch</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Free Cam Switch Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Free Cam Switch</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isbacklightsightenabled? is backlight sight enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBacklightSightEnabled?</code></div>
<p>State flag for “Is Backlight Sight Enabled?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Backlight Sight Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Backlight Sight Enabled? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isballisticcomputerenable? is ballistic computer enable? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBallisticComputerEnable?</code></div>
<p>State flag for “Is Ballistic Computer Enable?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Ballistic Computer Enable? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Ballistic Computer Enable? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isgunnercameraswitch? is gunner camera switch? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsGunnerCameraSwitch?</code></div>
<p>State flag for “Is Gunner Camera Switch?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 18 · writes: 3</span>
<span><b>Graphs</b><code>CameraRotMacro</code>, <code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code> +3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Gunner Camera Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Gunner Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="islocktargetenabled? is lock target enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsLockTargetEnabled?</code></div>
<p>State flag for “Is Lock Target Enabled?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Lock Target Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Lock Target Enabled? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawmaxvalue commander camera yaw max value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMaxValue</code></div>
<p>Numeric value for “Commander Camera Yaw Max Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>10.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Commander Camera Yaw Max Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Commander Camera Yaw Max Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawminvalue commander camera yaw min value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMinValue</code></div>
<p>Numeric value for “Commander Camera Yaw Min Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>-10.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Commander Camera Yaw Min Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Commander Camera Yaw Min Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="bp comtower field of view bp com tower field of view camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>BP ComTower Field Of View</code></div>
<p>Numeric value for “BP Com Tower Field Of View”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get BP Com Tower Field Of View Blueprint variable" title="Float"><span class="bp-auth-var-node__name">BP Com Tower Field Of View</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set BP Com Tower Field Of View Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">BP Com Tower Field Of View</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfov com tower cam fov camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOV</code></div>
<p>Numeric value for “Com Tower Cam FOV”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>CameraRotMacro</code>, <code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam FOV Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam FOV</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Com Tower Cam FOV Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Com Tower Cam FOV</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfovbounds com tower cam fovbounds camera|comtowercamera|baseparameters vector2d">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOVBounds</code></div>
<p>Allowed range for “Com Tower Cam FOVBounds”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Vector2D</span>
<span><b>In BP_Tank_Master</b>X=2.0, Y=30.0</span>
<span><b>Usage</b>Reads: 3 · writes: 1</span>
<span><b>Graphs</b><code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Com Tower Cam FOVBounds Blueprint variable" title="Vector2D"><span class="bp-auth-var-node__name">Com Tower Cam FOVBounds</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="vector" role="img" aria-label="Set Com Tower Cam FOVBounds Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Com Tower Cam FOVBounds</span><span class="bp-auth-pin__type">Vector2D</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Vector2D</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfovmultiple com tower cam fovmultiple camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOVMultiple</code></div>
<p>Numeric value for “Com Tower Cam FOVMultiple”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>10.0</span>
<span><b>Usage</b>Reads: 4 · writes: 4</span>
<span><b>Graphs</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam FOVMultiple Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam FOVMultiple</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Com Tower Cam FOVMultiple Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Com Tower Cam FOVMultiple</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfovstep com tower cam fovstep camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOVStep</code></div>
<p>Numeric value for “Com Tower Cam FOVStep”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>1.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam FOVStep Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam FOVStep</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercammagnificationmax com tower cam magnification max camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamMagnificationMax</code></div>
<p>Numeric value for “Com Tower Cam Magnification Max”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>12.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam Magnification Max Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam Magnification Max</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercammagnificationmin com tower cam magnification min camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamMagnificationMin</code></div>
<p>Numeric value for “Com Tower Cam Magnification Min”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>2.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam Magnification Min Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam Magnification Min</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="iscomtowercameraswitch? is com tower camera switch? camera|comtowercamera|boolern boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|Boolern</span>
<div class="bp-auth-card__title"><code>IsComTowerCameraSwitch?</code></div>
<p>State flag for “Is Com Tower Camera Switch?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 14 · writes: 3</span>
<span><b>Graphs</b><code>CameraRotMacro</code>, <code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code> +2</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Com Tower Camera Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Com Tower Camera Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Com Tower Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Com Tower Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isdoublefiresysenable? is double fire sys enable? camera|comtowercamera|boolern boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|Boolern</span>
<div class="bp-auth-card__title"><code>IsDoubleFireSysEnable?</code></div>
<p>State flag for “Is Double Fire Sys Enable?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Double Fire Sys Enable? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Double Fire Sys Enable?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Double Fire Sys Enable? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Double Fire Sys Enable?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="bp gunner field of view bp gunner field of view camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>BP Gunner Field Of View</code></div>
<p>Numeric value for “BP Gunner Field Of View”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get BP Gunner Field Of View Blueprint variable" title="Float"><span class="bp-auth-var-node__name">BP Gunner Field Of View</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set BP Gunner Field Of View Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">BP Gunner Field Of View</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfov gunner cam fov camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOV</code></div>
<p>Numeric value for “Gunner Cam FOV”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>90.0</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>CameraRotMacro</code>, <code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Cam FOV Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Cam FOV</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Gunner Cam FOV Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Gunner Cam FOV</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfovbounds gunner cam fovbounds camera|gunnercamera|baseparameters vector2d">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOVBounds</code></div>
<p>Allowed range for “Gunner Cam FOVBounds”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Vector2D</span>
<span><b>In BP_Tank_Master</b>X=2.0, Y=30.0</span>
<span><b>Usage</b>Reads: 3 · writes: 1</span>
<span><b>Graphs</b><code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Gunner Cam FOVBounds Blueprint variable" title="Vector2D"><span class="bp-auth-var-node__name">Gunner Cam FOVBounds</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="vector" role="img" aria-label="Set Gunner Cam FOVBounds Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Gunner Cam FOVBounds</span><span class="bp-auth-pin__type">Vector2D</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Vector2D</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfovmultiple gunner cam fovmultiple camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOVMultiple</code></div>
<p>Numeric value for “Gunner Cam FOVMultiple”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>10.0</span>
<span><b>Usage</b>Reads: 4 · writes: 4</span>
<span><b>Graphs</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Cam FOVMultiple Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Cam FOVMultiple</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Gunner Cam FOVMultiple Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Gunner Cam FOVMultiple</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfovstep gunner cam fovstep camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOVStep</code></div>
<p>Numeric value for “Gunner Cam FOVStep”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>1.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Cam FOVStep Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Cam FOVStep</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamerayawmaxvalue gunner camera yaw max value camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCameraYawMaxValue</code></div>
<p>Numeric value for “Gunner Camera Yaw Max Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>10.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Camera Yaw Max Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Camera Yaw Max Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnesrmagnificationmax gunnesr magnification max camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnesrMagnificationMax</code></div>
<p>Numeric value for “Gunnesr Magnification Max”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>12.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunnesr Magnification Max Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunnesr Magnification Max</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnesrmagnificationmin gunnesr magnification min camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnesrMagnificationMin</code></div>
<p>Numeric value for “Gunnesr Magnification Min”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>4.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunnesr Magnification Min Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunnesr Magnification Min</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="camerarot camera rot camera|main camera|base parameters rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Main Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CameraRot</code></div>
<p>Reference to <code>Rotator</code> used as “Camera Rot”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Rotator</span>
<span><b>In BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Usage</b>Reads: 2 · writes: 1</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Camera Rot Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Camera Rot</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Camera Rot Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera Rot</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="camera yoffset camera yoffset camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Camera YOffset</code></div>
<p>Offset applied to “Camera YOffset”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>5.0</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>CameraRotMacro</code>, <code>Client_InputGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Camera YOffset Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Camera YOffset</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamerayawminvalue gunner camera yaw min value camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCameraYawMinValue</code></div>
<p>Numeric value for “Gunner Camera Yaw Min Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>-10.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Camera Yaw Min Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Camera Yaw Min Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maincamfovmultiple main cam fovmultiple camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainCamFOVMultiple</code></div>
<p>Numeric value for “Main Cam FOVMultiple”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>2.0</span>
<span><b>Usage</b>Reads: 4 · writes: 4</span>
<span><b>Graphs</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Cam FOVMultiple Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Cam FOVMultiple</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Main Cam FOVMultiple Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Cam FOVMultiple</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="temp current zoom temp current zoom camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Temp Current Zoom</code></div>
<p>Numeric value for “Temp Current Zoom”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Temp Current Zoom Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Temp Current Zoom</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Temp Current Zoom Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Temp Current Zoom</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="zoom bounds zoom bounds camera|maincamera|baseparameters vector2d">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Zoom Bounds</code></div>
<p>Allowed range for “Zoom Bounds”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Vector2D</span>
<span><b>In BP_Tank_Master</b>X=+0, Y=10.0</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Zoom Bounds Blueprint variable" title="Vector2D"><span class="bp-auth-var-node__name">Zoom Bounds</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="zoom step zoom step camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Zoom Step</code></div>
<p>Numeric value for “Zoom Step”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>120.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Zoom Step Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Zoom Step</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="as chaos wheeled vehicle movement component as chaos wheeled vehicle movement component components|chaos chaoswheeledvehiclemovementcomponent">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Components|Chaos</span>
<div class="bp-auth-card__title"><code>As Chaos Wheeled Vehicle Movement Component</code></div>
<p>Reference to <code>ChaosWheeledVehicleMovementComponent</code> used as “As Chaos Wheeled Vehicle Movement Component”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>ChaosWheeledVehicleMovementComponent</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 7 · writes: 1</span>
<span><b>Graphs</b><code>EventGraph</code>, <code>GetAvgWheelsAngularVelocity</code>, <code>Server_SoundGraph</code>, <code>SetDriveBrakeBySide</code>, <code>SetDriveTorqueBySide</code> +2</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get As Chaos Wheeled Vehicle Movement Component Blueprint variable" title="ChaosWheeledVehicleMovementComponent"><span class="bp-auth-var-node__name">As Chaos Wheeled Vehicle Movement Component</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set As Chaos Wheeled Vehicle Movement Component Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="ChaosWheeledVehicleMovementComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">As Chaos Wheeled Vehicle Movement Component</span><span class="bp-auth-pin__type">ChaosWheeledVehicleMovementComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" title="ChaosWheeledVehicleMovementComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">ChaosWheeledVehicleMovementComponent</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackarray track array components|miarrays array&lt;instancedstaticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Components|MIArrays</span>
<div class="bp-auth-card__title"><code>TrackArray</code></div>
<p>Working collection for “Track Array”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;InstancedStaticMeshComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_Damage</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Track Array Blueprint variable" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Track Array</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="blockleftside block left side controls|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Boolean</span>
<div class="bp-auth-card__title"><code>BlockLeftSide</code></div>
<p>State flag for “Block Left Side”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 4</span>
<span><b>Graphs</b><code>Server_SeparateMovement DEV</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Block Left Side Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Block Left Side</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Block Left Side Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Block Left Side</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="blockrightside block right side controls|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Boolean</span>
<div class="bp-auth-card__title"><code>BlockRightSide</code></div>
<p>State flag for “Block Right Side”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 4</span>
<span><b>Graphs</b><code>Server_SeparateMovement DEV</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Block Right Side Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Block Right Side</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Block Right Side Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Block Right Side</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="separatemovement separate movement controls|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Boolean</span>
<div class="bp-auth-card__title"><code>SeparateMovement</code></div>
<p>State flag for “Separate Movement”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Server_SeparateMovement DEV</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Separate Movement Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Separate Movement</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="forwardspeed forward speed controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>ForwardSpeed</code></div>
<p>Speed or rate used by “Forward Speed”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 4 · writes: 1</span>
<span><b>Graphs</b><code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Forward Speed Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Forward Speed</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set Forward Speed Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Forward Speed</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maxtorque max torque controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>MaxTorque</code></div>
<p>Numeric value for “Max Torque”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>2000.0</span>
<span><b>Usage</b>Reads: 8 · writes: 0</span>
<span><b>Graphs</b><code>Server_SeparateMovement DEV</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Max Torque Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Max Torque</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="moverighttriggeredseconds move right triggered seconds controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>MoveRightTriggeredSeconds</code></div>
<p>Numeric value for “Move Right Triggered Seconds”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Move Right Triggered Seconds Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Move Right Triggered Seconds</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Move Right Triggered Seconds Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Move Right Triggered Seconds</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="throttleinput throttle input controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>ThrottleInput</code></div>
<p>Numeric value for “Throttle Input”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 4 · writes: 1</span>
<span><b>Graphs</b><code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Throttle Input Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Throttle Input</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set Throttle Input Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Throttle Input</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="throttletriggeredseconds throttle triggered seconds controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>ThrottleTriggeredSeconds</code></div>
<p>Numeric value for “Throttle Triggered Seconds”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Throttle Triggered Seconds Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Throttle Triggered Seconds</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Throttle Triggered Seconds Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Throttle Triggered Seconds</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ammostate server ammo state preferences st_ammostate">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences</span>
<div class="bp-auth-card__title"><code>Server_AmmoState</code></div>
<p>Working <code>ST_AmmoState</code> value for “Server Ammo State”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>ST_AmmoState</span>
<span><b>In BP_Tank_Master</b>Empty</span>
<span><b>Usage</b>Reads: 30 · writes: 0</span>
<span><b>Graphs</b><code>MachineGunCoolingCalculation</code>, <code>Server_FiringGraph</code>, <code>Server_HandleAmmoStateChanged</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_AmmoState</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Server Ammo State Blueprint variable" title="ST_AmmoState"><span class="bp-auth-var-node__name">Server Ammo State</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_engineondelay client engine on delay preferences|client boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Client</span>
<div class="bp-auth-card__title"><code>Client_EngineOnDelay</code></div>
<p>State flag for “Client Engine on Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_Server_EngineOnDelay</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Engine on Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Engine on Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Engine on Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Engine on Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="crewvoicesenable crew voices enable preferences|client boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Client</span>
<div class="bp-auth-card__title"><code>CrewVoicesEnable</code></div>
<p>State flag for “Crew Voices Enable”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 4 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Crew Voices Enable Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Crew Voices Enable</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="debugon debug on preferences|debug boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Debug</span>
<div class="bp-auth-card__title"><code>DebugOn</code></div>
<p>State flag for “Debug On”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>DebugSwitch</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Debug On Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Debug On</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Debug On Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Debug On</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enginestartingtime engine starting time preferences|server float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>EngineStartingTime</code></div>
<p>Numeric value for “Engine Starting Time”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>0.699999988079071</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Engine Starting Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Engine Starting Time</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_engineison server engine is on preferences|server boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_EngineIsOn</code></div>
<p>State flag for “Server Engine Is On”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 4 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Server_Input</code>, <code>Server_SoundGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Engine Is On Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Engine Is On</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Engine Is On Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Engine Is On</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_engineondelay server engine on delay preferences|server boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_EngineOnDelay</code></div>
<p>State flag for “Server Engine on Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_EngineOnDelay</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Engine on Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Engine on Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Engine on Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Engine on Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_healthpoint server health point preferences|server float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_HealthPoint</code></div>
<p>Numeric value for “Server Health Point”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>100.0</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Server_Damage</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Server Health Point Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Server Health Point</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Server Health Point Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Health Point</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_startengineprocess server start engine process preferences|server boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_StartEngineProcess</code></div>
<p>State flag for “Server Start Engine Process”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_Server_EngineOnDelay</code>, <code>OnRep_Server_StartEngineProcess</code>, <code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_StartEngineProcess</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Start Engine Process Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Start Engine Process</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Start Engine Process Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Start Engine Process</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="attachsplinepointstowheels attach spline points to wheels preferences|spline condition boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>AttachSplinePointsToWheels</code></div>
<p>State flag for “Attach Spline Points to Wheels”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Attach Spline Points to Wheels Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Attach Spline Points to Wheels</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enable track constraints physics simulation enable track constraints physics simulation preferences|spline condition boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>Enable Track Constraints Physics Simulation</code></div>
<p>State flag for “Enable Track Constraints Physics Simulation”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Enable Track Constraints Physics Simulation Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Enable Track Constraints Physics Simulation</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maxsplinesagging max spline sagging preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>MaxSplineSagging</code></div>
<p>Numeric value for “Max Spline Sagging”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>30.0</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Max Spline Sagging Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Max Spline Sagging</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="splineparabolawidth spline parabola width preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>SplineParabolaWidth</code></div>
<p>Numeric value for “Spline Parabola Width”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>1.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Spline Parabola Width Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Spline Parabola Width</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="stepdeg step deg preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>StepDeg</code></div>
<p>Numeric value for “Step Deg”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>15.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Step Deg Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Step Deg</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="subtracecount sub trace count preferences|spline condition integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>SubTraceCount</code></div>
<p>Numeric value for “Sub Trace Count”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>6</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Sub Trace Count Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Sub Trace Count</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="suggingexp sugging exp preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>SuggingExp</code></div>
<p>Numeric value for “Sugging Exp”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>0.5</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Sugging Exp Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Sugging Exp</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="splinesubdivision spline subdivision preferences|splinecondition integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|SplineCondition</span>
<div class="bp-auth-card__title"><code>SplineSubdivision</code></div>
<p>Numeric value for “Spline Subdivision”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>1</span>
<span><b>Usage</b>Reads: 7 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Spline Subdivision Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Spline Subdivision</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isshowcontrolsenabled? is show controls enabled? preferences|ui boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|UI</span>
<div class="bp-auth-card__title"><code>IsShowControlsEnabled?</code></div>
<p>State flag for “Is Show Controls Enabled?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Show Controls Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Show Controls Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Show Controls Enabled? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Show Controls Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ismachinegunoverheatting? client is machine gun over heatting? tank component|fire system component|machine gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsMachineGunOverHeatting?</code></div>
<p>State flag for “Client Is Machine Gun Over Heatting?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_ Server_IsMachineGunOverHeatting?</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Machine Gun Over Heatting? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Machine Gun Over Heatting? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ismachinegunreloaded? client is machine gun reloaded? tank component|fire system component|machine gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsMachineGunReloaded?</code></div>
<p>State flag for “Client Is Machine Gun Reloaded?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_Server_IsMachineGunReloaded?</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Machine Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Machine Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Machine Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Machine Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="mg_mesh_change mg mesh change tank component|fire system component|machine gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Boolean</span>
<div class="bp-auth-card__title"><code>MG_Mesh_Change</code></div>
<p>State flag for “MG Mesh Change”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code>, <code>Server_UpdateComTowerRotation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get MG Mesh Change Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">MG Mesh Change</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="mgtype mgtype tank component|fire system component|machine gun|integer integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Integer</span>
<div class="bp-auth-card__title"><code>MGType</code></div>
<p>Numeric value for “MGType”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>2</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get MGType Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">MGType</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ejectionanimplay client ejection anim play tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_EjectionAnimPlay</code></div>
<p>State flag for “Client Ejection Anim Play”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_Server_EjectionAnimPlay</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Ejection Anim Play Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Ejection Anim Play</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Ejection Anim Play Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Ejection Anim Play</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ismaingunreloaded? client is main gun reloaded? tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsMainGunReloaded?</code></div>
<p>State flag for “Client Is Main Gun Reloaded?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_Server_IsMainGunReloaded?</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Main Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Main Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Main Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Main Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ejectionanimenable ejection anim enable tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>EjectionAnimEnable</code></div>
<p>State flag for “Ejection Anim Enable”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Ejection Anim Enable Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Ejection Anim Enable</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ejectionanimplay server ejection anim play tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Server_EjectionAnimPlay</code></div>
<p>State flag for “Server Ejection Anim Play”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_Server_EjectionAnimPlay</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_EjectionAnimPlay</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Ejection Anim Play Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Ejection Anim Play</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Ejection Anim Play Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Ejection Anim Play</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_issmokeshellreloaded? client is smoke shell reloaded? tank component|fire system component|smoke shall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Smoke Shall|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsSmokeShellReloaded?</code></div>
<p>State flag for “Client Is Smoke Shell Reloaded?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_Server_IsSmokeShellReloaded?</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Smoke Shell Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Smoke Shell Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="issmokeshellfiredelay is smoke shell fire delay tank component|fire system component|smoke shall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Smoke Shall|Boolean</span>
<div class="bp-auth-card__title"><code>IsSmokeShellFireDelay</code></div>
<p>State flag for “Is Smoke Shell Fire Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Smoke Shell Fire Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Smoke Shell Fire Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Smoke Shell Fire Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Smoke Shell Fire Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="crewvoicedelay crew voice delay tank component|sound|crew boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Sound|Crew</span>
<div class="bp-auth-card__title"><code>CrewVoiceDelay</code></div>
<p>State flag for “Crew Voice Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Crew Voice Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Crew Voice Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Crew Voice Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Crew Voice Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="destroyed destroyed tankcomponent|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Boolean</span>
<div class="bp-auth-card__title"><code>Destroyed</code></div>
<p>State flag for “Destroyed”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 11 · writes: 3</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>EventGraph</code>, <code>Server_Damage</code>, <code>Server_FiringGraph</code>, <code>Server_Input</code> +1</span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Destroyed Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Destroyed</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Destroyed Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Destroyed</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isaimtypeswitch? is aim type switch? tankcomponent|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Boolean</span>
<div class="bp-auth-card__title"><code>IsAimTypeSwitch?</code></div>
<p>State flag for “Is Aim Type Switch?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Aim Type Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Aim Type Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Aim Type Switch? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Aim Type Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isthermalvisswitch? is thermal vis switch? tankcomponent|firesystemcomponent|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Boolean</span>
<div class="bp-auth-card__title"><code>IsThermalVisSwitch?</code></div>
<p>State flag for “Is Thermal Vis Switch?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Thermal Vis Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Thermal Vis Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Thermal Vis Switch? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Thermal Vis Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machiegunpitch machie gun pitch tankcomponent|firesystemcomponent|machinegun|baseparameters rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachieGunPitch</code></div>
<p>Rotation used by “Machie Gun Pitch”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Rotator</span>
<span><b>In BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_ComTowerRotationGraph</code>, <code>UpdateComTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Machie Gun Pitch Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Machie Gun Pitch</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Machie Gun Pitch Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Machie Gun Pitch</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunfirerate machine gun fire rate tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunFireRate</code></div>
<p>Speed or rate used by “Machine Gun Fire Rate”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>0.1</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Fire Rate Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Fire Rate</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunheat machine gun heat tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunHeat</code></div>
<p>Numeric value for “Machine Gun Heat”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Heat Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Heat</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunmomentumvalue machine gun momentum value tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunMomentumValue</code></div>
<p>Numeric value for “Machine Gun Momentum Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>0.2</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Momentum Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Momentum Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunreloaddelay machine gun reload delay tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunReloadDelay</code></div>
<p>Numeric value for “Machine Gun Reload Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Reload Delay Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Reload Delay</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Machine Gun Reload Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Machine Gun Reload Delay</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunreloadtime machine gun reload time tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunReloadTime</code></div>
<p>Numeric value for “Machine Gun Reload Time”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>5.0</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Reload Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Reload Time</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search=" server_ismachinegunoverheatting?  server is machine gun over heatting? tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code> Server_IsMachineGunOverHeatting?</code></div>
<p>State flag for “ Server Is Machine Gun Over Heatting?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_ Server_IsMachineGunOverHeatting?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_ Server_IsMachineGunOverHeatting?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get  Server Is Machine Gun Over Heatting? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name"> Server Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set  Server Is Machine Gun Over Heatting? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"> Server Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ismachinegunfiredelay is machine gun fire delay tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code>IsMachineGunFireDelay</code></div>
<p>State flag for “Is Machine Gun Fire Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Machine Gun Fire Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Machine Gun Fire Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Machine Gun Fire Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Machine Gun Fire Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ismachinegunfire? is machine gun fire? tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code>IsMachineGunFire?</code></div>
<p>State flag for “Is Machine Gun Fire?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Machine Gun Fire? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Machine Gun Fire?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Machine Gun Fire? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Machine Gun Fire?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ismachinegunreloaded? server is machine gun reloaded? tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code>Server_IsMachineGunReloaded?</code></div>
<p>State flag for “Server Is Machine Gun Reloaded?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_Server_IsMachineGunReloaded?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_IsMachineGunReloaded?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Is Machine Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Is Machine Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Is Machine Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Is Machine Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunmuzzlesocket machine gun muzzle socket tankcomponent|firesystemcomponent|machinegun|muzzlesocket name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|MuzzleSocket</span>
<div class="bp-auth-card__title"><code>MachineGunMuzzleSocket</code></div>
<p>Text identifier for “Machine Gun Muzzle Socket”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Name</span>
<span><b>In BP_Tank_Master</b>MachineGunMuzzleSocket</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Machine Gun Muzzle Socket Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Machine Gun Muzzle Socket</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunfireniagaraeffect machine gun fire niagara effect tankcomponent|firesystemcomponent|machinegun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Particle</span>
<div class="bp-auth-card__title"><code>MachineGunFireNiagaraEffect</code></div>
<p>Working <code>NiagaraSystem</code> value for “Machine Gun Fire Niagara Effect”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>NiagaraSystem</span>
<span><b>In BP_Tank_Master</b>-395</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Machine Gun Fire Niagara Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Machine Gun Fire Niagara Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="overheatingniagaraeffect overheating niagara effect tankcomponent|firesystemcomponent|machinegun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Particle</span>
<div class="bp-auth-card__title"><code>OverheatingNiagaraEffect</code></div>
<p>Working <code>NiagaraSystem</code> value for “Overheating Niagara Effect”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>NiagaraSystem</span>
<span><b>In BP_Tank_Master</b>-397</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Overheating Niagara Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Overheating Niagara Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunprojectile machine gun projectile tankcomponent|firesystemcomponent|machinegun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Projectile</span>
<div class="bp-auth-card__title"><code>MachineGunProjectile</code></div>
<p>Working <code>Class Class</code> value for “Machine Gun Projectile”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Class Class</span>
<span><b>In BP_Tank_Master</b>-12</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Machine Gun Projectile Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Machine Gun Projectile</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunfiretimer machine gun fire timer tankcomponent|firesystemcomponent|machinegun|timer timerhandle">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Timer</span>
<div class="bp-auth-card__title"><code>MachineGunFireTimer</code></div>
<p>Timer handle for “Machine Gun Fire Timer”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>TimerHandle</span>
<span><b>In BP_Tank_Master</b>0</span>
<span><b>Usage</b>Reads: 3 · writes: 1</span>
<span><b>Graphs</b><code>Server_Damage</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Machine Gun Fire Timer Blueprint variable" title="TimerHandle"><span class="bp-auth-var-node__name">Machine Gun Fire Timer</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="struct" role="img" aria-label="Set Machine Gun Fire Timer Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Machine Gun Fire Timer</span><span class="bp-auth-pin__type">TimerHandle</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">TimerHandle</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunmomentumvalue main gun momentum value tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunMomentumValue</code></div>
<p>Numeric value for “Main Gun Momentum Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>20.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Momentum Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Momentum Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunphysfloat main gun phys float tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunPhysFloat</code></div>
<p>Numeric value for “Main Gun Phys Float”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Phys Float Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Phys Float</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Main Gun Phys Float Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Phys Float</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunreloaddelay main gun reload delay tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunReloadDelay</code></div>
<p>Numeric value for “Main Gun Reload Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Reload Delay Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Reload Delay</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Main Gun Reload Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Reload Delay</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunreloadtime main gun reload time tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunReloadTime</code></div>
<p>Numeric value for “Main Gun Reload Time”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>0.016</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Reload Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Reload Time</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ismaingunfiredelay? is main gun fire delay? tankcomponent|firesystemcomponent|maingun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Boolean</span>
<div class="bp-auth-card__title"><code>IsMainGunFireDelay?</code></div>
<p>State flag for “Is Main Gun Fire Delay?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Main Gun Fire Delay? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Main Gun Fire Delay?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Main Gun Fire Delay? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Main Gun Fire Delay?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ismaingunreloaded? server is main gun reloaded? tankcomponent|firesystemcomponent|maingun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Boolean</span>
<div class="bp-auth-card__title"><code>Server_IsMainGunReloaded?</code></div>
<p>State flag for “Server Is Main Gun Reloaded?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>OnRep_Server_IsMainGunReloaded?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_IsMainGunReloaded?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Is Main Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Is Main Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Is Main Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Is Main Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunfiretimer main gun fire timer tankcomponent|firesystemcomponent|maingun|integer timerhandle">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Integer</span>
<div class="bp-auth-card__title"><code>MainGunFireTimer</code></div>
<p>Timer handle for “Main Gun Fire Timer”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>TimerHandle</span>
<span><b>In BP_Tank_Master</b>0</span>
<span><b>Usage</b>Reads: 2 · writes: 1</span>
<span><b>Graphs</b><code>Server_Damage</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Main Gun Fire Timer Blueprint variable" title="TimerHandle"><span class="bp-auth-var-node__name">Main Gun Fire Timer</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="struct" role="img" aria-label="Set Main Gun Fire Timer Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Fire Timer</span><span class="bp-auth-pin__type">TimerHandle</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">TimerHandle</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingun fire ground effect main gun fire ground effect tankcomponent|firesystemcomponent|maingun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Particle</span>
<div class="bp-auth-card__title"><code>MainGun Fire Ground Effect</code></div>
<p>Working <code>NiagaraSystem</code> value for “Main Gun Fire Ground Effect”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>NiagaraSystem</span>
<span><b>In BP_Tank_Master</b>-392</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Main Gun Fire Ground Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Main Gun Fire Ground Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunfireniagaraeffect main gun fire niagara effect tankcomponent|firesystemcomponent|maingun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Particle</span>
<div class="bp-auth-card__title"><code>MainGunFireNiagaraEffect</code></div>
<p>Working <code>NiagaraSystem</code> value for “Main Gun Fire Niagara Effect”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>NiagaraSystem</span>
<span><b>In BP_Tank_Master</b>-396</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Main Gun Fire Niagara Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Main Gun Fire Niagara Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ejectedcartridge ejected cartridge tankcomponent|firesystemcomponent|maingun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Projectile</span>
<div class="bp-auth-card__title"><code>EjectedCartridge</code></div>
<p>Working <code>Class Class</code> value for “Ejected Cartridge”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Class Class</span>
<span><b>In BP_Tank_Master</b>-10</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Ejected Cartridge Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Ejected Cartridge</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunprojectile main gun projectile tankcomponent|firesystemcomponent|maingun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Projectile</span>
<div class="bp-auth-card__title"><code>MainGunProjectile</code></div>
<p>Working <code>Class Class</code> value for “Main Gun Projectile”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Class Class</span>
<span><b>In BP_Tank_Master</b>-13</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Main Gun Projectile Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Main Gun Projectile</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunshellprojectille main gun shell projectille tankcomponent|firesystemcomponent|maingun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Projectile</span>
<div class="bp-auth-card__title"><code>MainGunShellProjectille</code></div>
<p>Working <code>Class Class</code> value for “Main Gun Shell Projectille”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Class Class</span>
<span><b>In BP_Tank_Master</b>-14</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Main Gun Shell Projectille Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Main Gun Shell Projectille</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunpitch main gun pitch tankcomponent|firesystemcomponent|maingun|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Rotator</span>
<div class="bp-auth-card__title"><code>MainGunPitch</code></div>
<p>Rotation used by “Main Gun Pitch”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Rotator</span>
<span><b>In BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Server_SoundGraph</code>, <code>Server_TowerRotationGraph</code>, <code>Server_Update Tower Rotation</code>, <code>UpdateTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Main Gun Pitch Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Main Gun Pitch</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Main Gun Pitch Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Pitch</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="canitbereplenishing? can it be replenishing? tankcomponent|firesystemcomponent|replenishsys|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|ReplenishSys|Boolean</span>
<div class="bp-auth-card__title"><code>CanItBeReplenishing?</code></div>
<p>State flag for “Can It be Replenishing?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 1</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Can It be Replenishing? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Can It be Replenishing?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Can It be Replenishing? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Can It be Replenishing?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunammochangetracker main gun ammo change tracker tankcomponent|firesystemcomponent|replenishsys|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|ReplenishSys|Boolean</span>
<div class="bp-auth-card__title"><code>MainGunAmmoChangeTracker</code></div>
<p>State flag for “Main Gun Ammo Change Tracker”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Main Gun Ammo Change Tracker Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Main Gun Ammo Change Tracker</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Main Gun Ammo Change Tracker Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Ammo Change Tracker</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="subreplanishboolreturn sub replanish bool return tankcomponent|firesystemcomponent|replenishsys|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|ReplenishSys|Boolean</span>
<div class="bp-auth-card__title"><code>SubReplanishBoolReturn</code></div>
<p>State flag for “Sub Replanish Bool Return”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Sub Replanish Bool Return Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Sub Replanish Bool Return</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Sub Replanish Bool Return Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Sub Replanish Bool Return</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellrate smoke shell rate tankcomponent|firesystemcomponent|smokeshall|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|BaseParameters</span>
<div class="bp-auth-card__title"><code>SmokeShellRate</code></div>
<p>Speed or rate used by “Smoke Shell Rate”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>0.5</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Smoke Shell Rate Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Smoke Shell Rate</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellreloaddelay smoke shell reload delay tankcomponent|firesystemcomponent|smokeshall|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|BaseParameters</span>
<div class="bp-auth-card__title"><code>SmokeShellReloadDelay</code></div>
<p>Numeric value for “Smoke Shell Reload Delay”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Smoke Shell Reload Delay Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Smoke Shell Reload Delay</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Smoke Shell Reload Delay Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Smoke Shell Reload Delay</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellreloadtime smoke shell reload time tankcomponent|firesystemcomponent|smokeshall|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|BaseParameters</span>
<div class="bp-auth-card__title"><code>SmokeShellReloadTime</code></div>
<p>Numeric value for “Smoke Shell Reload Time”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>1.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Smoke Shell Reload Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Smoke Shell Reload Time</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="issmokeshellfire? is smoke shell fire? tankcomponent|firesystemcomponent|smokeshall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Boolean</span>
<div class="bp-auth-card__title"><code>IsSmokeShellFire?</code></div>
<p>State flag for “Is Smoke Shell Fire?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Smoke Shell Fire? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Smoke Shell Fire?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Smoke Shell Fire? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Smoke Shell Fire?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_issmokeshellreloaded? server is smoke shell reloaded? tankcomponent|firesystemcomponent|smokeshall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Boolean</span>
<div class="bp-auth-card__title"><code>Server_IsSmokeShellReloaded?</code></div>
<p>State flag for “Server Is Smoke Shell Reloaded?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 2 · writes: 3</span>
<span><b>Graphs</b><code>OnRep_Server_IsSmokeShellReloaded?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_IsSmokeShellReloaded?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Is Smoke Shell Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Is Smoke Shell Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshelltimer smoke shell timer tankcomponent|firesystemcomponent|smokeshall|integer timerhandle">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Integer</span>
<div class="bp-auth-card__title"><code>SmokeShellTimer</code></div>
<p>Timer handle for “Smoke Shell Timer”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>TimerHandle</span>
<span><b>In BP_Tank_Master</b>0</span>
<span><b>Usage</b>Reads: 2 · writes: 1</span>
<span><b>Graphs</b><code>Server_Damage</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Smoke Shell Timer Blueprint variable" title="TimerHandle"><span class="bp-auth-var-node__name">Smoke Shell Timer</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="struct" role="img" aria-label="Set Smoke Shell Timer Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Smoke Shell Timer</span><span class="bp-auth-pin__type">TimerHandle</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">TimerHandle</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellprojectile smoke shell projectile tankcomponent|firesystemcomponent|smokeshall|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Projectile</span>
<div class="bp-auth-card__title"><code>SmokeShellProjectile</code></div>
<p>Working <code>Class Class</code> value for “Smoke Shell Projectile”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Class Class</span>
<span><b>In BP_Tank_Master</b>-11</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Smoke Shell Projectile Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Smoke Shell Projectile</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket01 smoke shell socket 01 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket01</code></div>
<p>Working collection for “Smoke Shell Socket 01”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Name&gt;</span>
<span><b>In BP_Tank_Master</b>SmokeShellSocket_L01, SmokeShellSocket_L02, SmokeShellSocket_R01, SmokeShellSocket_R02</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 01 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 01</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket02 smoke shell socket 02 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket02</code></div>
<p>Working collection for “Smoke Shell Socket 02”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Name&gt;</span>
<span><b>In BP_Tank_Master</b>SmokeShellSocket_L03, SmokeShellSocket_L04, SmokeShellSocket_R03, SmokeShellSocket_R04</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 02 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 02</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket03 smoke shell socket 03 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket03</code></div>
<p>Working collection for “Smoke Shell Socket 03”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Name&gt;</span>
<span><b>In BP_Tank_Master</b>SmokeShellSocket_L05, SmokeShellSocket_L06, SmokeShellSocket_R05, SmokeShellSocket_R06</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 03 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 03</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket04 smoke shell socket 04 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket04</code></div>
<p>Working collection for “Smoke Shell Socket 04”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Name&gt;</span>
<span><b>In BP_Tank_Master</b>SmokeShellSocket_L07, SmokeShellSocket_L08, SmokeShellSocket_R07, SmokeShellSocket_R08</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 04 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 04</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalmaterialparameter thermal material parameter tankcomponent|firesystemcomponent|thermal|materialparameters materialparametercollection">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|MaterialParameters</span>
<div class="bp-auth-card__title"><code>ThermalMaterialParameter</code></div>
<p>Reference to <code>MaterialParameterCollection</code> used as “Thermal Material Parameter”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>MaterialParameterCollection</span>
<span><b>In BP_Tank_Master</b>-389</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Thermal Material Parameter Blueprint variable" title="MaterialParameterCollection"><span class="bp-auth-var-node__name">Thermal Material Parameter</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalparametername thermal parameter name tankcomponent|firesystemcomponent|thermal|materialparameters name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|MaterialParameters</span>
<div class="bp-auth-card__title"><code>ThermalParameterName</code></div>
<p>Text identifier for “Thermal Parameter Name”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Name</span>
<span><b>In BP_Tank_Master</b>ThermalEffect</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Thermal Parameter Name Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Thermal Parameter Name</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalpostprocesssettings_default thermal post process settings default tankcomponent|firesystemcomponent|thermal|postprocesssettings postprocesssettings">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|PostProcessSettings</span>
<div class="bp-auth-card__title"><code>ThermalPostProcessSettings_Default</code></div>
<p>Working <code>PostProcessSettings</code> value for “Thermal Post Process Settings Default”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>PostProcessSettings</span>
<span><b>In BP_Tank_Master</b>412 items</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Thermal Post Process Settings Default Blueprint variable" title="PostProcessSettings"><span class="bp-auth-var-node__name">Thermal Post Process Settings Default</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalpost process settings_mod thermal post process settings mod tankcomponent|firesystemcomponent|thermal|postprocesssettings postprocesssettings">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|PostProcessSettings</span>
<div class="bp-auth-card__title"><code>ThermalPost Process Settings_Mod</code></div>
<p>Working <code>PostProcessSettings</code> value for “Thermal Post Process Settings Mod”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>PostProcessSettings</span>
<span><b>In BP_Tank_Master</b>412 items</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Thermal Post Process Settings Mod Blueprint variable" title="PostProcessSettings"><span class="bp-auth-var-node__name">Thermal Post Process Settings Mod</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="midynamics midynamics tankcomponent|mi array&lt;materialinstancedynamic&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|MI</span>
<div class="bp-auth-card__title"><code>MIDynamics</code></div>
<p>Working collection for “MIDynamics”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;MaterialInstanceDynamic&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>CreateDynamicMI</code>, <code>Server_Damage</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get MIDynamics Blueprint variable" title="Array&lt;MaterialInstanceDynamic&gt;"><span class="bp-auth-var-node__name">MIDynamics</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="curentrpmratio curent rpmratio tankcomponent|movements|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Movements|BaseParameters</span>
<div class="bp-auth-card__title"><code>CurentRPMRatio</code></div>
<p>Numeric value for “Curent RPMRatio”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Curent RPMRatio Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Curent RPMRatio</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Curent RPMRatio Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Curent RPMRatio</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="forwardaxis  forward axis  tankcomponent|movements|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Movements|BaseParameters</span>
<div class="bp-auth-card__title"><code>ForwardAxis </code></div>
<p>Numeric value for “Forward Axis ”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 4 · writes: 6</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Server_Damage</code>, <code>Server_Input</code>, <code>Server_SeparateMovement DEV</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Forward Axis  Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Forward Axis </span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Forward Axis  Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Forward Axis </span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="yaw yaw tankcomponent|movements|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Movements|BaseParameters</span>
<div class="bp-auth-card__title"><code>Yaw</code></div>
<p>Numeric value for “Yaw”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 6</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Server_Damage</code>, <code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Yaw Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Yaw</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Yaw Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Yaw</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="nrsound nrsound tankcomponent|sound|noreverb array&lt;audiocomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Sound|Noreverb</span>
<div class="bp-auth-card__title"><code>NRSound</code></div>
<p>Working collection for “NRSound”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;AudioComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 1</span>
<span><b>Graphs</b><code>Server_Damage</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get NRSound Blueprint variable" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-var-node__name">NRSound</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set NRSound Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">NRSound</span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rsound rsound tankcomponent|sound|reverb array&lt;audiocomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Sound|Reverb</span>
<div class="bp-auth-card__title"><code>RSound</code></div>
<p>Working collection for “RSound”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;AudioComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 1</span>
<span><b>Graphs</b><code>Server_Damage</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get RSound Blueprint variable" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-var-node__name">RSound</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set RSound Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">RSound</span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isstabilizationenabled? is stabilization enabled? tankcomponent|stabilization|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Stabilization|Boolean</span>
<div class="bp-auth-card__title"><code>IsStabilizationEnabled?</code></div>
<p>State flag for “Is Stabilization Enabled?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>In BP_Tank_Master</b>True</span>
<span><b>Usage</b>Reads: 3 · writes: 1</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Stabilization Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Stabilization Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Stabilization Enabled? Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Stabilization Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ctcomtowerrotation ctcom tower rotation tankcomponent|tower|comtower|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|ComTower|Rotator</span>
<div class="bp-auth-card__title"><code>CTComTowerRotation</code></div>
<p>Rotation used by “CTCom Tower Rotation”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Rotator</span>
<span><b>In BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_ComTowerRotationGraph</code>, <code>Server_UpdateComTowerRotation</code>, <code>UpdateComTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get CTCom Tower Rotation Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">CTCom Tower Rotation</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set CTCom Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CTCom Tower Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="mgcomtowerrotation mgcom tower rotation tankcomponent|tower|comtower|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|ComTower|Rotator</span>
<div class="bp-auth-card__title"><code>MGComTowerRotation</code></div>
<p>Rotation used by “MGCom Tower Rotation”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Rotator</span>
<span><b>In BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Server_ComTowerRotationGraph</code>, <code>Server_UpdateComTowerRotation</code>, <code>UpdateComTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get MGCom Tower Rotation Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">MGCom Tower Rotation</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set MGCom Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MGCom Tower Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ejectingsocket ejecting socket tankcomponent|tower|maintower|bonenames name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|MainTower|BoneNames</span>
<div class="bp-auth-card__title"><code>EjectingSocket</code></div>
<p>Text identifier for “Ejecting Socket”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Name</span>
<span><b>In BP_Tank_Master</b>EjectingSocket</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Ejecting Socket Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Ejecting Socket</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="towerrotation tower rotation tankcomponent|tower|maintower|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|MainTower|Rotator</span>
<div class="bp-auth-card__title"><code>TowerRotation</code></div>
<p>Rotation used by “Tower Rotation”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Rotator</span>
<span><b>In BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Server_SoundGraph</code>, <code>Server_TowerRotationGraph</code>, <code>Server_Update Tower Rotation</code>, <code>UpdateTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Tower Rotation Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Tower Rotation</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tower Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="down front spline point index down front spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>Down Front Spline Point Index</code></div>
<p>Numeric value for “Down Front Spline Point Index”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>1</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Down Front Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Down Front Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="downrearsplinepointindex down rear spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>DownRearSplinePointIndex</code></div>
<p>Numeric value for “Down Rear Spline Point Index”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>11</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Down Rear Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Down Rear Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="up front spline point index up front spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>Up Front Spline Point Index</code></div>
<p>Numeric value for “Up Front Spline Point Index”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>2</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Up Front Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Up Front Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uprearsplinepointindex up rear spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>UpRearSplinePointIndex</code></div>
<p>Numeric value for “Up Rear Spline Point Index”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>10</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Up Rear Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Up Rear Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelbonename front wheel bone name track components|track maker|roller preferences|roller parameters name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>FrontWheelBoneName</code></div>
<p>Text identifier for “Front Wheel Bone Name”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Name</span>
<span><b>In BP_Tank_Master</b>RF_Wheel_00</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Front Wheel Bone Name Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Front Wheel Bone Name</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelradius front wheel radius track components|track maker|roller preferences|roller parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>FrontWheelRadius</code></div>
<p>Numeric value for “Front Wheel Radius”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>26.1031</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Front Wheel Radius Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Front Wheel Radius</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelbonename rear wheel bone name track components|track maker|roller preferences|roller parameters name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>RearWheelBoneName</code></div>
<p>Text identifier for “Rear Wheel Bone Name”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Name</span>
<span><b>In BP_Tank_Master</b>RB_Wheel_07</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Rear Wheel Bone Name Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Rear Wheel Bone Name</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelradius rear wheel radius track components|track maker|roller preferences|roller parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>RearWheelRadius</code></div>
<p>Numeric value for “Rear Wheel Radius”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>28.8204</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Rear Wheel Radius Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Rear Wheel Radius</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="topwheelradius top wheel radius track components|track maker|roller preferences|roller parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>TopWheelRadius</code></div>
<p>Numeric value for “Top Wheel Radius”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>10.0361</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Top Wheel Radius Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Top Wheel Radius</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelangularvelocity_l front wheel angular velocity l track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>FrontWheelAngularVelocity_L</code></div>
<p>Numeric value for “Front Wheel Angular Velocity L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Front Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Front Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Front Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Front Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelangularvelocity_r front wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>FrontWheelAngularVelocity_R</code></div>
<p>Numeric value for “Front Wheel Angular Velocity R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Front Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Front Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Front Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Front Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="middlewheelangularvelocity_r middle wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>MiddleWheelAngularVelocity_R</code></div>
<p>Numeric value for “Middle Wheel Angular Velocity R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Middle Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Middle Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Middle Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Middle Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelangularvelocity_l rear wheel angular velocity l track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>RearWheelAngularVelocity_L</code></div>
<p>Numeric value for “Rear Wheel Angular Velocity L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Rear Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Rear Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Rear Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rear Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelangularvelocity_r rear wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>RearWheelAngularVelocity_R</code></div>
<p>Numeric value for “Rear Wheel Angular Velocity R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Rear Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Rear Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Rear Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rear Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="topwheelangularvelocity_l top wheel angular velocity l track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>TopWheelAngularVelocity_L</code></div>
<p>Numeric value for “Top Wheel Angular Velocity L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Top Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Top Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Top Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Top Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="topwheelangularvelocity_r top wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>TopWheelAngularVelocity_R</code></div>
<p>Numeric value for “Top Wheel Angular Velocity R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Top Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Top Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Top Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Top Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uppersplinepointzpositionarray_l upper spline point zposition array l track components|track maker|sagging preferences|spline parameters array&lt;vector&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Sagging Preferences|Spline Parameters</span>
<div class="bp-auth-card__title"><code>UpperSplinePointZPositionArray_L</code></div>
<p>Working collection for “Upper Spline Point ZPosition Array L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Vector&gt;</span>
<span><b>In BP_Tank_Master</b>X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Upper Spline Point ZPosition Array L Blueprint variable" title="Array&lt;Vector&gt;"><span class="bp-auth-var-node__name">Upper Spline Point ZPosition Array L</span><span class="bp-auth-pin__dot" data-pin-type="vector" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uppersplinepointzpositionarray_r upper spline point zposition array r track components|track maker|sagging preferences|spline parameters array&lt;vector&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Sagging Preferences|Spline Parameters</span>
<div class="bp-auth-card__title"><code>UpperSplinePointZPositionArray_R</code></div>
<p>Working collection for “Upper Spline Point ZPosition Array R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Vector&gt;</span>
<span><b>In BP_Tank_Master</b>X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Upper Spline Point ZPosition Array R Blueprint variable" title="Array&lt;Vector&gt;"><span class="bp-auth-var-node__name">Upper Spline Point ZPosition Array R</span><span class="bp-auth-pin__dot" data-pin-type="vector" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="baseangledeg base angle deg track components|track maker|spline preferences|spline floats float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Floats</span>
<div class="bp-auth-card__title"><code>BaseAngleDeg</code></div>
<p>Numeric value for “Base Angle Deg”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>90.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Base Angle Deg Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Base Angle Deg</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracktraceheight track trace height track components|track maker|spline preferences|spline floats float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Floats</span>
<div class="bp-auth-card__title"><code>TrackTraceHeight</code></div>
<p>Numeric value for “Track Trace Height”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>40.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Track Trace Height Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Track Trace Height</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="absoluteendsplinepoint absolute end spline point track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>AbsoluteEndSplinePoint</code></div>
<p>Numeric value for “Absolute End Spline Point”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>16</span>
<span><b>Usage</b>Reads: 10 · writes: 2</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>SplineMirrorCopy</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Absolute End Spline Point Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Absolute End Spline Point</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="int" role="img" aria-label="Set Absolute End Spline Point Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Absolute End Spline Point</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="endsplinepoint end spline point track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>EndSplinePoint</code></div>
<p>Numeric value for “End Spline Point”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>16</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get End Spline Point Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">End Spline Point</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="int" role="img" aria-label="Set End Spline Point Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">End Spline Point</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="physicssplinepointarray physics spline point array track components|track maker|spline preferences|spline indexes array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>PhysicsSplinePointArray</code></div>
<p>Working collection for “Physics Spline Point Array”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Integer&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Physics Spline Point Array Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Physics Spline Point Array</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="startsplinepoint start spline point track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>StartSplinePoint</code></div>
<p>Numeric value for “Start Spline Point”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>15</span>
<span><b>Usage</b>Reads: 13 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>SplineMirrorCopy</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Start Spline Point Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Start Spline Point</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="supportindixesarray support indixes array track components|track maker|spline preferences|spline indexes array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>SupportIndixesArray</code></div>
<p>Working collection for “Support Indixes Array”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Integer&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Support Indixes Array Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Support Indixes Array</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="suspendedindexes suspended indexes track components|track maker|spline preferences|spline indexes array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>SuspendedIndexes</code></div>
<p>Working collection for “Suspended Indexes”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Integer&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Suspended Indexes Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Suspended Indexes</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheelsamount wheels amount track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>WheelsAmount</code></div>
<p>Numeric value for “Wheels Amount”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>7</span>
<span><b>Usage</b>Reads: 15 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>GetAvgWheelsAngularVelocity</code>, <code>SetDriveBrakeBySide</code>, <code>SetDriveTorqueBySide</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Wheels Amount Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Wheels Amount</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackhelpernames_l track helper names l track components|track maker|spline preferences|spline names array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Names</span>
<div class="bp-auth-card__title"><code>TrackHelperNames_L</code></div>
<p>Working collection for “Track Helper Names L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Name&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Track Helper Names L Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Track Helper Names L</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackhelpernames_r track helper names r track components|track maker|spline preferences|spline names array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Names</span>
<div class="bp-auth-card__title"><code>TrackHelperNames_R</code></div>
<p>Working collection for “Track Helper Names R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Name&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 5 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Track Helper Names R Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Track Helper Names R</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="customtangent custom tangent track components|track maker|spline preferences|spline vectors vector">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Vectors</span>
<div class="bp-auth-card__title"><code>CustomTangent</code></div>
<p>Position or coordinate value for “Custom Tangent”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Vector</span>
<span><b>In BP_Tank_Master</b>X=+0, Y=+0, Z=+0</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Custom Tangent Blueprint variable" title="Vector"><span class="bp-auth-var-node__name">Custom Tangent</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="vector" role="img" aria-label="Set Custom Tangent Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Custom Tangent</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Vector</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="physicssplinepointlocationarray physics spline point location array track components|track maker|spline preferences|spline vectors array&lt;vector&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Vectors</span>
<div class="bp-auth-card__title"><code>PhysicsSplinePointLocationArray</code></div>
<p>Working collection for “Physics Spline Point Location Array”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Vector&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Physics Spline Point Location Array Blueprint variable" title="Array&lt;Vector&gt;"><span class="bp-auth-var-node__name">Physics Spline Point Location Array</span><span class="bp-auth-pin__dot" data-pin-type="vector" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackoffset track offset track components|track maker|spline preferences|spline vectors vector">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Vectors</span>
<div class="bp-auth-card__title"><code>TrackOffset</code></div>
<p>Offset applied to “Track Offset”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Vector</span>
<span><b>In BP_Tank_Master</b>X=+0, Y=+0, Z=7.0</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Track Offset Blueprint variable" title="Vector"><span class="bp-auth-var-node__name">Track Offset</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackmeshoffset track mesh offset track components|track maker|track preferences|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Base Parameters</span>
<div class="bp-auth-card__title"><code>TrackMeshOffset</code></div>
<p>Offset applied to “Track Mesh Offset”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Track Mesh Offset Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Track Mesh Offset</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Track Mesh Offset Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Track Mesh Offset</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracksplinelength track spline length track components|track maker|track preferences|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Base Parameters</span>
<div class="bp-auth-card__title"><code>TrackSplineLength</code></div>
<p>Numeric value for “Track Spline Length”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>1400.0</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Track Spline Length Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Track Spline Length</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set Track Spline Length Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Track Spline Length</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="constraint instances_l constraint instances l track components|track maker|track preferences|components array&lt;staticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>Constraint Instances_L</code></div>
<p>Working collection for “Constraint Instances L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;StaticMeshComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpperSplinePointSagging</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Constraint Instances L Blueprint variable" title="Array&lt;StaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Constraint Instances L</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="constraint instances_r constraint instances r track components|track maker|track preferences|components array&lt;staticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>Constraint Instances_R</code></div>
<p>Working collection for “Constraint Instances R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;StaticMeshComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpperSplinePointSagging</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Constraint Instances R Blueprint variable" title="Array&lt;StaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Constraint Instances R</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="splinetrack_l spline track l track components|track maker|track preferences|components splinecomponent">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>SplineTrack_L</code></div>
<p>Reference to <code>SplineComponent</code> used as “Spline Track L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>SplineComponent</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 5 · writes: 1</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Spline Track L Blueprint variable" title="SplineComponent"><span class="bp-auth-var-node__name">Spline Track L</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set Spline Track L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Spline Track L</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">SplineComponent</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracksinstances_l tracks instances l track components|track maker|track preferences|components array&lt;instancedstaticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>TracksInstances_L</code></div>
<p>Working collection for “Tracks Instances L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;InstancedStaticMeshComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Tracks Instances L Blueprint variable" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Tracks Instances L</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set Tracks Instances L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tracks Instances L</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracksinstances_r tracks instances r track components|track maker|track preferences|components array&lt;instancedstaticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>TracksInstances_R</code></div>
<p>Working collection for “Tracks Instances R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;InstancedStaticMeshComponent&gt;</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Tracks Instances R Blueprint variable" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Tracks Instances R</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set Tracks Instances R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tracks Instances R</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackmeshesamount track meshes amount track components|track maker|track preferences|index integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Index</span>
<div class="bp-auth-card__title"><code>TrackMeshesAmount</code></div>
<p>Numeric value for “Track Meshes Amount”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 1</span>
<span><b>Graphs</b><code>InstanceTracksCreation</code>, <code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Track Meshes Amount Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Track Meshes Amount</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="int" role="img" aria-label="Set Track Meshes Amount Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Track Meshes Amount</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackonside track on side track components|track maker|track preferences|index integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Index</span>
<div class="bp-auth-card__title"><code>TrackOnSide</code></div>
<p>Numeric value for “Track on Side”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>158</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>InstanceTracksCreation</code>, <code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Track on Side Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Track on Side</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldeltadistancel wheel delta distance l trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDeltaDistanceL</code></div>
<p>Numeric value for “Wheel Delta Distance L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Delta Distance L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Delta Distance L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Delta Distance L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Delta Distance L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldeltadistancer wheel delta distance r trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDeltaDistanceR</code></div>
<p>Numeric value for “Wheel Delta Distance R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Delta Distance R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Delta Distance R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Delta Distance R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Delta Distance R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldistancel wheel distance l trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDistanceL</code></div>
<p>Numeric value for “Wheel Distance L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>10.0</span>
<span><b>Usage</b>Reads: 3 · writes: 3</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Distance L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Distance L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Distance L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Distance L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldistancer wheel distance r trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDistanceR</code></div>
<p>Numeric value for “Wheel Distance R”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 3 · writes: 3</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Distance R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Distance R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Distance R Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Distance R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="middlewheelangularvelocity_l middle wheel angular velocity l trackcomponents|trackmaker|roller preferences|rollersvelocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Roller Preferences|RollersVelocity</span>
<div class="bp-auth-card__title"><code>MiddleWheelAngularVelocity_L</code></div>
<p>Numeric value for “Middle Wheel Angular Velocity L”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 0 · writes: 2</span>
<span><b>Graphs</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · without RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Middle Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Middle Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Middle Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Middle Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uppersplinepointarray upper spline point array trackcomponents|trackmaker|sagging preferences|spline parameters array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Sagging Preferences|Spline Parameters</span>
<div class="bp-auth-card__title"><code>UpperSplinePointArray</code></div>
<p>Working collection for “Upper Spline Point Array”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;Integer&gt;</span>
<span><b>In BP_Tank_Master</b>0, 3, 5, 7, 9, 11, 14</span>
<span><b>Usage</b>Reads: 3 · writes: 0</span>
<span><b>Graphs</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Upper Spline Point Array Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Upper Spline Point Array</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackstaticmeshes track static meshes trackcomponents|trackmaker|track preferences|components array&lt;staticmesh&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>TrackStaticMeshes</code></div>
<p>Working collection for “Track Static Meshes”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Array&lt;StaticMesh&gt;</span>
<span><b>In BP_Tank_Master</b>-583, -584</span>
<span><b>Usage</b>Reads: 2 · writes: 0</span>
<span><b>Graphs</b><code>InstanceTracksCreation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Track Static Meshes Blueprint variable" title="Array&lt;StaticMesh&gt;"><span class="bp-auth-var-node__name">Track Static Meshes</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackindex track index trackcomponents|trackmaker|track preferences||index integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Track Preferences||Index</span>
<div class="bp-auth-card__title"><code>TrackIndex</code></div>
<p>Numeric value for “Track Index”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>In BP_Tank_Master</b>101</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Track Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Track Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ui ui ui|components object">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">UI|Components</span>
<div class="bp-auth-card__title"><code>UI</code></div>
<p>Working <code>Object</code> value for “UI”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Object</span>
<span><b>In BP_Tank_Master</b>Inherited / not stored</span>
<span><b>Usage</b>Reads: 1 · writes: 1</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get UI Blueprint variable" title="Object"><span class="bp-auth-var-node__name">UI</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set UI Blueprint node"><div class="bp-auth-node__header"><span>SET</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="Object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">UI</span><span class="bp-auth-pin__type">Object</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" title="Object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Object</span></div></div></div></div></div></div>
</article>
</div></section>

<section class="bp-auth-section" data-bp-section="functions">
<h2>Functions</h2>
Each function is explained in its BP_Tank_Master context: internal flow, affected state, and real call sites. The visual below comes from the actual `Function Entry` and `Function Result`; it supplements the explanation instead of replacing it.
<div class="bp-auth-grid">
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="userconstructionscript functions function   ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>UserConstructionScript</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Prepares components and initial instance values when the Blueprint is created or edited.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Checks whether editor-side initialization is appropriate and forwards construction to <code>Construct Spline Track</code> whenever the instance is rebuilt.</p>
</div>
<div>
<span>Result</span>
<p>The source splines, helper points, and link instances are therefore prepared before play; this function is not called manually.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal Construction Script</dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>4 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>2</span>
</div>
<span class="bp-auth-badge">Construction</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UserConstructionScript Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UserConstructionScript</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="updatetrackslocation general logic|track components|track maker function server_trackphysgraph trackpath uppersplinepointarray startsplinepoint physicssplinepointarray tracktraceheight physicssplinepointlocationarray absoluteendsplinepoint tension subtracecount stepdeg baseangledeg mesh relativelocation pawn worldlocation pawn worldrotation track path relative location trackhelpernames_r wheelsamount maxsplinesagging as chaos wheeled vehicle movement component isleftside? trackhelpernames_l useasimplesimulation? splinesubdivision simulateconstraintsphysics? enabletension spline element suspendedindexes splineparabolawidth attachsplinepointstowheels n customtangent deltasecond smoothedangle trackoffset targetlocal currentsplineangle midpointofsheafarray currentmidpointofsheafnormalized midpointofsheafsmoothed midpointofsheaflocal trackhitcountlocal tension spline element pawn worldlocation pawn worldrotation track path relative location n smoothedangle targetlocal midpointofsheafsmoothed midpointofsheaflocal trackhitcountlocal">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>UpdateTracksLocation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Updates track elements from suspension, wheel, and solved-spline state.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Matches each loop point to a wheel socket or Chaos wheel state, traces the surface, solves tension and sag, smooths transitions, and writes spline positions and tangents. Separate branches handle simple versus constraint physics, each side, the upper run, and free spans.</p>
</div>
<div>
<span>Result</span>
<p>This is the main runtime track-shape solver: after it runs, <code>TrackPath</code> is the current closed loop consumed by visual-link placement.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_TrackPhysGraph</code></dd>
<dt>Reads state</dt><dd><code>TrackPath</code>, <code>UpperSplinePointArray</code>, <code>StartSplinePoint</code>, <code>PhysicsSplinePointArray</code>, <code>TrackTraceHeight</code>, <code>PhysicsSplinePointLocationArray</code> <span class="bp-auth-more">+36 more</span></dd>
<dt>Writes state</dt><dd><code>Tension</code>, <code>Spline Element</code>, <code>Pawn WorldLocation</code>, <code>Pawn WorldRotation</code>, <code>Track Path Relative Location</code>, <code>N</code> <span class="bp-auth-more">+5 more</span></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>238 nodes</span>
<span><b>Signature</b>12 in · 1 out</span>
<span><b>Call steps</b>53</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpdateTracksLocation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpdateTracksLocation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Array</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLeftSide?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SimulateConstraintsPhysics?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">UseASimpleSimulation?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EnableTension</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackOffset</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DeltaSecond</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" data-pin-container="array" title="Array&lt;Float&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CurrentSplineAngle</span><span class="bp-auth-pin__type">Array&lt;Float&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CurrentMidPointOfSheafNormalized</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MidPointOfSheafArray</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="wheelmovcalculation general logic|tank component|track component function server_trackphysgraph rearwheelradius frontwheelradius topwheelradius wheeldistancel wheeldistancer wheeldeltadistancer wheeldeltadistancel as chaos wheeled vehicle movement component wheels splinetrack_l blockrightside blockleftside autosplinetrack_r frontwheelangularvelocity_l frontwheelangularvelocity_r middlewheelangularvelocity_l middlewheelangularvelocity_r rearwheelangularvelocity_l topwheelangularvelocity_r topwheelangularvelocity_l rearwheelangularvelocity_r wheeldistancel wheeldistancer wheeldeltadistancer wheeldeltadistancel">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Tank Component|Track Component</span>
<div class="bp-auth-card__title"><code>WheelMovCalculation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Calculates wheel-motion values used by the track system.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Reads average wheel angular speeds, wheel radii, and spline length, converts rotation into travelled distance, and accumulates left/right track phase. The resulting distance and speed are also sent through the wheel network events.</p>
</div>
<div>
<span>Result</span>
<p>It updates visual link motion plus the front, middle, rear, and top wheel-speed values while respecting a blocked side.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_TrackPhysGraph</code></dd>
<dt>Reads state</dt><dd><code>RearWheelRadius</code>, <code>FrontWheelRadius</code>, <code>TopWheelRadius</code>, <code>WheelDistanceL</code>, <code>WheelDistanceR</code>, <code>WheelDeltaDistanceR</code> <span class="bp-auth-more">+7 more</span></dd>
<dt>Writes state</dt><dd><code>FrontWheelAngularVelocity_L</code>, <code>FrontWheelAngularVelocity_R</code>, <code>MiddleWheelAngularVelocity_L</code>, <code>MiddleWheelAngularVelocity_R</code>, <code>RearWheelAngularVelocity_L</code>, <code>TopWheelAngularVelocity_R</code> <span class="bp-auth-more">+6 more</span></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>65 nodes</span>
<span><b>Signature</b>2 in · 1 out</span>
<span><b>Call steps</b>8</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="WheelMovCalculation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>WheelMovCalculation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coeficient</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="camerazoom general logic|camera|zoom function eventtick springarm targetarmlength zoom step maincamfovmultiple isgunnercameraswitch? gunnercamera gunnercamfovstep gunnercamfovmultiple fieldofview comtowercamera comtowercamfovstep comtowercamfovmultiple iscomtowercameraswitch? zoom bounds relativelocation gunnercamfovbounds comtowercamfovbounds temp current zoom targetarmlength gunnercamfov comtowercamfov">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Camera|Zoom</span>
<div class="bp-auth-card__title"><code>CameraZoom</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Applies camera zoom input within the configured bounds and step.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Selects the external, gunner, or commander view and computes either a Spring Arm target or a camera FOV target. The active value is stepped, clamped to its own range, and smoothly applied using frame time.</p>
</div>
<div>
<span>Result</span>
<p>Only the active view is changed: third person uses arm length, while optic views use their camera field of view.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>EventTick</code></dd>
<dt>Reads state</dt><dd><code>SpringArm</code>, <code>TargetArmLength</code>, <code>Zoom Step</code>, <code>MainCamFOVMultiple</code>, <code>IsGunnerCameraSwitch?</code>, <code>GunnerCamera</code> <span class="bp-auth-more">+11 more</span></dd>
<dt>Writes state</dt><dd><code>Temp Current Zoom</code>, <code>TargetArmLength</code>, <code>GunnerCamFOV</code>, <code>ComTowerCamFOV</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>49 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>9</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="CameraZoom Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>CameraZoom</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="updatetowerrotation general logic|tankcomponent|tower function server_towerrotationgraph weaponaimsystem towerrotation maingunpitch">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|Tower</span>
<div class="bp-auth-card__title"><code>UpdateTowerRotation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Updates main-turret and gun aiming.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Requests the solved main-turret and gun axis rotations from <code>WeaponAimSystem</code>. The configured-axis path stores the rotations and sends them to the server event, while legacy axis networking remains available for compatibility.</p>
</div>
<div>
<span>Result</span>
<p>It prepares the shared main-mount yaw/pitch state later applied to the turret and gun components on the server.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_TowerRotationGraph</code></dd>
<dt>Reads state</dt><dd><code>WeaponAimSystem</code></dd>
<dt>Writes state</dt><dd><code>TowerRotation</code>, <code>MainGunPitch</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>8 nodes</span>
<span><b>Signature</b>3 in · 1 out</span>
<span><b>Call steps</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpdateTowerRotation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpdateTowerRotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tower</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGun</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="calculateprojectiledirection general logic|tankcomponent|firesystemcomponent function server_firesystem maingunfiresys smokeshallfiresys  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|FireSystemComponent</span>
<div class="bp-auth-card__title"><code>CalculateProjectileDirection</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Returns the firing direction from the selected socket and mesh using the current aim.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Traces forward from the selected socket, chooses the impact point or trace end, and builds a firing transform from the socket position toward that target.</p>
</div>
<div>
<span>Result</span>
<p>The returned <code>ProjetileDirection</code> is shared by the main gun and smoke launchers so projectile and aiming logic use the same solved point.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_FireSystem</code>, <code>MainGunFireSys</code>, <code>SmokeShallFireSys</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>14 nodes</span>
<span><b>Signature</b>3 in · 2 out</span>
<span><b>Call steps</b>8</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="CalculateProjectileDirection Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>CalculateProjectileDirection</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SocketName</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="transform" title="Transform"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ProjetileDirection</span><span class="bp-auth-pin__type">Transform</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MeshForCalculatePD</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="machineguncoolingcalculation general logic|tankcomponent|machinegun function eventtick server_ammostate server_ammostate">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|MachineGun</span>
<div class="bp-auth-card__title"><code>MachineGunCoolingCalculation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Updates machine-gun cooling and overheat state.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Reduces machine-gun heat inside <code>Server_AmmoState</code> by a frame-time-scaled amount and clamps the field to 0–1.</p>
</div>
<div>
<span>Result</span>
<p>The server heat state cools continuously between shots and the firing graph reads this updated value for overheat decisions.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>EventTick</code></dd>
<dt>Reads state</dt><dd><code>Server_AmmoState</code></dd>
<dt>Writes state</dt><dd><code>Server_AmmoState</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>8 nodes</span>
<span><b>Signature</b>2 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="MachineGunCoolingCalculation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>MachineGunCoolingCalculation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DeltaSeconds</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_firesystem server logic|tankcomponent|firesystemcomponent function maingunfiresys machinegunfiresys projectille momentumvalue isapfsds? shellprojectille momentummesh ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic|TankComponent|FireSystemComponent</span>
<div class="bp-auth-card__title"><code>Server_FireSystem</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Server entry point for firing logic and weapon-availability checks.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Uses <code>CalculateProjectileDirection</code> to obtain the authoritative firing transform, spawns the supplied projectile class from the mesh socket, and transforms the recoil direction before applying angular impulse to the supplied component.</p>
</div>
<div>
<span>Result</span>
<p>It creates the authoritative projectile and recoil; sound, muzzle flash, and ground FX are handled separately by <code>Client_FireSystem</code>.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>MainGunFireSys</code>, <code>MachineGunFireSys</code></dd>
<dt>Reads state</dt><dd><code>Projectille</code>, <code>MomentumValue</code>, <code>IsAPFSDS?</code>, <code>ShellProjectille</code>, <code>MomentumMesh</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>42 nodes</span>
<span><b>Signature</b>10 in · 1 out</span>
<span><b>Call steps</b>17</span>
</div>
<span class="bp-auth-badge">Server</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Server_FireSystem Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Server_FireSystem</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TankMesh</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MomentumDirectionCalcSocket</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MomentumSocket</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MomentumValue</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MomentumMesh</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DirectionCalcMesh</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsAPFSDS?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="class" title="Class Class"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ShellProjectille</span><span class="bp-auth-pin__type">Class Class</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="class" title="Class Class"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Projectille</span><span class="bp-auth-pin__type">Class Class</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="trace of weapon uiaim calculation general logic|camera|ui function eventtick maincamera aimcube commanderaimcube globaltracelenght freecamswitch isgunnercameraswitch? iscomtowercameraswitch? isdoublefiresysenable? islocktargetenabled? isballisticcomputerenable? weaponaimsystem ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Camera|UI</span>
<div class="bp-auth-card__title"><code>Trace Of Weapon UIAim Calculation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Traces the weapon aim and produces the point shown by the UI.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Chooses an aim source from the active camera plus free-look, ballistic-computer, target-lock, and dual-mount state. It updates <code>WeaponAimSystem</code> aim sources and dispatches the resulting UI state.</p>
</div>
<div>
<span>Result</span>
<p>The on-screen aim point and weapon runtime stay aligned with the observation channel currently used by the player.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>EventTick</code></dd>
<dt>Reads state</dt><dd><code>MainCamera</code>, <code>AimCube</code>, <code>CommanderAimCube</code>, <code>GlobalTraceLenght</code>, <code>FreeCamSwitch</code>, <code>IsGunnerCameraSwitch?</code> <span class="bp-auth-more">+5 more</span></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>21 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Trace Of Weapon UIAim Calculation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Trace Of Weapon UIAim Calculation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="rotatevectoraroundaxis global function updatetrackslocation  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Global</span>
<div class="bp-auth-card__title"><code>RotateVectorAroundAxis</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Rotates a vector around the supplied axis and returns the result.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Moves the point into pivot-local space, applies the supplied rotator, and transforms it back.</p>
</div>
<div>
<span>Result</span>
<p>Returns the rotated world position used by track geometry without moving the pivot itself.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>8 nodes</span>
<span><b>Signature</b>4 in · 2 out</span>
<span><b>Call steps</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="RotateVectorAroundAxis Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>RotateVectorAroundAxis</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Pivot Vector</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Return Value</span><span class="bp-auth-pin__type">Vector</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Vector to Rotate</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="updatecomtowerrotation general logic|tankcomponent|machinegun function server_comtowerrotationgraph weaponaimsystem machiegunpitch mgcomtowerrotation ctcomtowerrotation">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|MachineGun</span>
<div class="bp-auth-card__title"><code>UpdateComTowerRotation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Updates commander-cupola and attached-weapon rotation.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Reads the auxiliary mount rotations from <code>WeaponAimSystem</code>, separates cupola yaw from weapon pitch, preserves the legacy networking path, and sends the solved angles to the server event.</p>
</div>
<div>
<span>Result</span>
<p>It prepares the machine-gun mount yaw, gun pitch, and commander-cupola yaw as one coherent state.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_ComTowerRotationGraph</code></dd>
<dt>Reads state</dt><dd><code>WeaponAimSystem</code></dd>
<dt>Writes state</dt><dd><code>MachieGunPitch</code>, <code>MGComTowerRotation</code>, <code>CTComTowerRotation</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>10 nodes</span>
<span><b>Signature</b>2 in · 1 out</span>
<span><b>Call steps</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpdateComTowerRotation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpdateComTowerRotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ComTower</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="getuppersplinepointzposition general logic|track components|track maker function construct spline track splinepointarray ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>GetUpperSplinePointZPosition</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Calculates the height of an upper-run spline point.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Iterates the supplied upper-run indices and reads their locations from <code>TrackPath</code>.</p>
</div>
<div>
<span>Result</span>
<p>Fills the working upper-point position/height array used when constructing and restoring the upper run.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Construct Spline Track</code></dd>
<dt>Reads state</dt><dd><code>SplinePointArray</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>17 nodes</span>
<span><b>Signature</b>3 in · 1 out</span>
<span><b>Call steps</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="GetUpperSplinePointZPosition Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>GetUpperSplinePointZPosition</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Array</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="splinemirrorcopy general logic|track components|track maker function construct spline track splinetocopy newsplinelocal currentpointindex startsplinepoint absoluteendsplinepoint newsplinelocal currentpointindex">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>SplineMirrorCopy</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Copies a spline shape to the opposite side using a mirrored transform.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Creates the same number of points in the destination spline, mirrors local positions, reverses point order, and transfers rotation, point type, and arrive/leave tangents.</p>
</div>
<div>
<span>Result</span>
<p>Returns a closed mirrored loop for the opposite vehicle side without modifying the source spline.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Construct Spline Track</code></dd>
<dt>Reads state</dt><dd><code>SplineToCopy</code>, <code>NewSplineLocal</code>, <code>CurrentPointIndex</code>, <code>StartSplinePoint</code>, <code>AbsoluteEndSplinePoint</code></dd>
<dt>Writes state</dt><dd><code>NewSplineLocal</code>, <code>CurrentPointIndex</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>58 nodes</span>
<span><b>Signature</b>2 in · 2 out</span>
<span><b>Call steps</b>30</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SplineMirrorCopy Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SplineMirrorCopy</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SplineToCopy</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">NewSpline</span><span class="bp-auth-pin__type">SplineComponent</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="instancetrackscreation general logic|track components|track maker function construct spline track trackpathtoattach trackstaticmeshes trackmeshesamount trackinstanceslocal trackonside currentinstance currentstaticmesh isleftside? trackmeshesamount currentinstance currentstaticmesh">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>InstanceTracksCreation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Creates and places track-link instances along the solved loop.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Creates and attaches the required Instanced Static Mesh components, assigns each track-link mesh, and adds the configured instance count with side-aware offsets.</p>
</div>
<div>
<span>Result</span>
<p>Returns the instance components later moved by <code>SetTracksTransform</code>, avoiding one Actor per link.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Construct Spline Track</code></dd>
<dt>Reads state</dt><dd><code>TrackPathToAttach</code>, <code>TrackStaticMeshes</code>, <code>TrackMeshesAmount</code>, <code>TrackInstancesLocal</code>, <code>TrackOnSide</code>, <code>CurrentInstance</code> <span class="bp-auth-more">+2 more</span></dd>
<dt>Writes state</dt><dd><code>TrackMeshesAmount</code>, <code>CurrentInstance</code>, <code>CurrentStaticMesh</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>37 nodes</span>
<span><b>Signature</b>3 in · 2 out</span>
<span><b>Call steps</b>10</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="InstanceTracksCreation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>InstanceTracksCreation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPathToAttach</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TracksInstances</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLeftSide?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="settrackstransform general logic|tank component|track component function server_trackphysgraph trackinstancecurrent intervalamongtracks chassiscurrentdistance trackpathlength trackonside tracksamountbeforesplineend trackmeshesamount trackinstances trackmeshoffset trackindex trackpath currenttrackdistance trackpathlength intervalamongtracks tracksamountbeforesplineend chassiscurrentdistance trackinstancecurrent currenttrackdistance trackmeshoffset">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Tank Component|Track Component</span>
<div class="bp-auth-card__title"><code>SetTracksTransform</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Applies a calculated transform to a selected track link.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Measures loop length, derives even link spacing, adds accumulated chassis travel, wraps distance at the spline end, and uses <code>CalculateTruckTransform</code> before updating every instance transform.</p>
</div>
<div>
<span>Result</span>
<p>Moves all visual track shoes along the solved loop while preserving phase from frame to frame.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_TrackPhysGraph</code></dd>
<dt>Reads state</dt><dd><code>TrackInstanceCurrent</code>, <code>IntervalAmongTracks</code>, <code>ChassisCurrentDistance</code>, <code>TrackPathLength</code>, <code>TrackOnSide</code>, <code>TracksAmountBeforeSplineEnd</code> <span class="bp-auth-more">+6 more</span></dd>
<dt>Writes state</dt><dd><code>TrackPathLength</code>, <code>IntervalAmongTracks</code>, <code>TracksAmountBeforeSplineEnd</code>, <code>ChassisCurrentDistance</code>, <code>TrackInstanceCurrent</code>, <code>CurrentTrackDistance</code> <span class="bp-auth-more">+1 more</span></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>65 nodes</span>
<span><b>Signature</b>4 in · 1 out</span>
<span><b>Call steps</b>16</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SetTracksTransform Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SetTracksTransform</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackInstances</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ChassisDistance</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="constructrear|frontsplinepoint general logic|track components|track maker function old mesh ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>ConstructRear|FrontSplinePoint</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Builds transition points near the front or rear end wheel.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Uses a wheel socket and radius to compute the lower and upper transition points; <code>InvertDownAxis</code> selects the front/rear lower-offset direction.</p>
</div>
<div>
<span>Result</span>
<p>Writes both positions into <code>TrackPath</code>, joining the end-wheel wrap to the straight runs.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Old</code></dd>
<dt>Reads state</dt><dd><code>Mesh</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>11 nodes</span>
<span><b>Signature</b>7 in · 1 out</span>
<span><b>Call steps</b>6</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="ConstructRear|FrontSplinePoint Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>ConstructRear|FrontSplinePoint</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DownRearSplinePointIndex</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">UpRearSplinePointIndex</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InSocketName</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">WhellRadius</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InvertDownAxis</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="uppersplinepointsagging general logic|track components|track maker function updatetrackslocation vehiclemovementcomponent constraint instances_r relativelocation constraint instances_l ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>UpperSplinePointSagging</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Calculates upper-run sag between supports.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Solves one upper-run point between span endpoints using tension, grounded-track amount, vehicle speed/direction, sag limits, and—when enabled—relative constraint-helper motion.</p>
</div>
<div>
<span>Result</span>
<p>Writes the corrected point height to the spline; repeated calls form a smooth upper run that reacts to motion.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Reads state</dt><dd><code>VehicleMovementComponent</code>, <code>Constraint Instances_R</code>, <code>RelativeLocation</code>, <code>Constraint Instances_L</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>35 nodes</span>
<span><b>Signature</b>13 in · 1 out</span>
<span><b>Call steps</b>14</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpperSplinePointSagging Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpperSplinePointSagging</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Array</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Element</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Index</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StartSplinePoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndSplinePoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AmountOfTrackOnTheGround</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MultiplyingSlackDownwards</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MultiplyingSlackUpwards</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLeftSide?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SimulateConstraintsPhysics?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DisableTension?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="constructsimulativepoints general logic|track components|track maker function construct spline track mesh ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>ConstructSimulativePoints</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Builds the additional points consumed by track simulation.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Creates hidden Static Mesh helpers at spline points, attaches them to the chassis, enables physics as required, and constrains adjacent helpers. <code>GameMode</code> separates editor construction from play behavior.</p>
</div>
<div>
<span>Result</span>
<p>Returns physical helper points consumed by the constraint-physics track branch.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Construct Spline Track</code></dd>
<dt>Reads state</dt><dd><code>Mesh</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>17 nodes</span>
<span><b>Signature</b>3 in · 2 out</span>
<span><b>Call steps</b>11</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="ConstructSimulativePoints Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>ConstructSimulativePoints</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">PointIndex</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="object" title="StaticMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StaticMeshArray</span><span class="bp-auth-pin__type">StaticMeshComponent</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="createdynamicmi general logic|tankcomponent|micomponent function server_damage midynamics midynamics">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|MIComponent</span>
<div class="bp-auth-card__title"><code>CreateDynamicMI</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Creates dynamic material instances controlled by the Blueprint at runtime.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Iterates every material slot on the supplied primitive, creates a Dynamic Material Instance, and stores the resulting references.</p>
</div>
<div>
<span>Result</span>
<p>The Blueprint can then drive damage and other runtime parameters without modifying source materials.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_Damage</code></dd>
<dt>Reads state</dt><dd><code>MIDynamics</code></dd>
<dt>Writes state</dt><dd><code>MIDynamics</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>9 nodes</span>
<span><b>Signature</b>2 in · 1 out</span>
<span><b>Call steps</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="CreateDynamicMI Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>CreateDynamicMI</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="PrimitiveComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MIMesh</span><span class="bp-auth-pin__type">PrimitiveComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="setdrivetorquebyside general logic|controls function server_separatemovement dev wheelsamount as chaos wheeled vehicle movement component ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Controls</span>
<div class="bp-auth-card__title"><code>SetDriveTorqueBySide</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Applies drive torque to the selected vehicle side.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Selects wheel indices for one side, scales the requested torque, and calls <code>Set Drive Torque</code> on each selected Chaos wheel.</p>
</div>
<div>
<span>Result</span>
<p>Provides independent left/right propulsion for the experimental separated-movement graph.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_SeparateMovement DEV</code></dd>
<dt>Reads state</dt><dd><code>WheelsAmount</code>, <code>As Chaos Wheeled Vehicle Movement Component</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>13 nodes</span>
<span><b>Signature</b>5 in · 1 out</span>
<span><b>Call steps</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SetDriveTorqueBySide Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SetDriveTorqueBySide</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Left Side?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DriveTorque</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DriveTorqueMultiply</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TurnGerarRatio</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="setdrivebrakebyside general logic|controls function server_separatemovement dev wheelsamount as chaos wheeled vehicle movement component ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Controls</span>
<div class="bp-auth-card__title"><code>SetDriveBrakeBySide</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Applies braking input to the selected vehicle side.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Selects one side&#x27;s wheel indices, calculates the final brake torque, and calls <code>Set Brake Torque</code> for each wheel.</p>
</div>
<div>
<span>Result</span>
<p>Provides independent left/right braking for separated movement.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_SeparateMovement DEV</code></dd>
<dt>Reads state</dt><dd><code>WheelsAmount</code>, <code>As Chaos Wheeled Vehicle Movement Component</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>13 nodes</span>
<span><b>Signature</b>5 in · 1 out</span>
<span><b>Call steps</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SetDriveBrakeBySide Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SetDriveBrakeBySide</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Left Side?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DriveTorque</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TorqueMultiply</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TurnGerarRatio</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="getavgwheelsangularvelocity general logic|tankcomponent|trackcomponent function wheelmovcalculation as chaos wheeled vehicle movement component wheels wheelsamount avgl avgr avgl avgr">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|TrackComponent</span>
<div class="bp-auth-card__title"><code>GetAvgWheelsAngularVelocity</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Returns the average angular velocity of a wheel group.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Validates wheel objects, accumulates angular velocity separately for left and right groups, normalizes by wheel count, and applies the input coefficient.</p>
</div>
<div>
<span>Result</span>
<p>Returns both averages, updates working <code>AvgL</code>/<code>AvgR</code>, and feeds <code>WheelMovCalculation</code>.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>WheelMovCalculation</code></dd>
<dt>Reads state</dt><dd><code>As Chaos Wheeled Vehicle Movement Component</code>, <code>Wheels</code>, <code>WheelsAmount</code>, <code>AvgL</code>, <code>AvgR</code></dd>
<dt>Writes state</dt><dd><code>AvgL</code>, <code>AvgR</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>34 nodes</span>
<span><b>Signature</b>2 in · 3 out</span>
<span><b>Call steps</b>6</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="GetAvgWheelsAngularVelocity Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>GetAvgWheelsAngularVelocity</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coeficient</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AvgWheelsAngularVelocityL</span><span class="bp-auth-pin__type">Float</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AvgWheelsAngularVelocityR</span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_update tower rotation server logic function server_towerrotationgraph towerrotation maingunpitch ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic</span>
<div class="bp-auth-card__title"><code>Server_Update Tower Rotation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Sends the new main-turret aim state to the server.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Receives the prepared turret and gun rotations and applies them as relative rotations to the supplied scene components.</p>
</div>
<div>
<span>Result</span>
<p>This is the authoritative stage that turns replicated aim state into component transforms.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_TowerRotationGraph</code></dd>
<dt>Reads state</dt><dd><code>TowerRotation</code>, <code>MainGunPitch</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>5 nodes</span>
<span><b>Signature</b>3 in · 1 out</span>
<span><b>Call steps</b>2</span>
</div>
<span class="bp-auth-badge">Server</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Server_Update Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Server_Update Tower Rotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tower</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGun</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_updatecomtowerrotation server logic function server_comtowerrotationgraph mgcomtowerrotation ctcomtowerrotation mg_mesh_change ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic</span>
<div class="bp-auth-card__title"><code>Server_UpdateComTowerRotation</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Sends the new commander-cupola state to the server.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Applies the commander-mount rotation on the server, with a select path for the alternate machine-gun mesh configuration.</p>
</div>
<div>
<span>Result</span>
<p>Updates the auxiliary turret&#x27;s authoritative relative rotation.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Server_ComTowerRotationGraph</code></dd>
<dt>Reads state</dt><dd><code>MGComTowerRotation</code>, <code>CTComTowerRotation</code>, <code>MG_Mesh_Change</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>2 in · 1 out</span>
<span><b>Call steps</b>2</span>
</div>
<span class="bp-auth-badge">Server</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Server_UpdateComTowerRotation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Server_UpdateComTowerRotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ComTower</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_separatemovement dev server logic function client_inputgraph server_input maxtorque forwardaxis vehiclemovementcomponent separatemovement blockrightside blockleftside">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic</span>
<div class="bp-auth-card__title"><code>Server_SeparateMovement DEV</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Development-only server graph for experimental split movement control.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Converts forward and yaw input into independent left/right commands, chooses propulsion or braking for each side, invokes the side helpers, and updates side-block flags.</p>
</div>
<div>
<span>Result</span>
<p>This is a development alternative to standard vehicle input and may be bypassed by the regular wheel setup.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>Client_InputGraph</code>, <code>Server_Input</code></dd>
<dt>Reads state</dt><dd><code>MaxTorque</code>, <code>ForwardAxis</code>, <code>VehicleMovementComponent</code>, <code>SeparateMovement</code></dd>
<dt>Writes state</dt><dd><code>BlockRightSide</code>, <code>BlockLeftSide</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>56 nodes</span>
<span><b>Signature</b>3 in · 1 out</span>
<span><b>Call steps</b>17</span>
</div>
<span class="bp-auth-badge">Server</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Server_SeparateMovement DEV Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Server_SeparateMovement DEV</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ForwardAxis</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Yaw</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="construct spline track general logic|track components|track maker function userconstructionscript uppersplinepointarray splinetrack_l constraint instances_r constraint instances_l uppersplinepointzpositionarray_r uppersplinepointzpositionarray_l enable track constraints physics simulation absoluteendsplinepoint autosplinetrack_r splinetrack_l tracksinstances_l tracksinstances_r tracksplinelength customtangent">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>Construct Spline Track</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Builds the closed track loop from wheels, transitions, and upper and lower runs.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Builds the initial left loop, upper-point data, and tangents, mirrors the right spline, creates link instances, and optionally creates physics helpers.</p>
</div>
<div>
<span>Result</span>
<p>Creates the persistent components and arrays consumed by runtime graphs and is launched by the Construction Script.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>UserConstructionScript</code></dd>
<dt>Reads state</dt><dd><code>UpperSplinePointArray</code>, <code>SplineTrack_L</code>, <code>Constraint Instances_R</code>, <code>Constraint Instances_L</code>, <code>UpperSplinePointZPositionArray_R</code>, <code>UpperSplinePointZPositionArray_L</code> <span class="bp-auth-more">+3 more</span></dd>
<dt>Writes state</dt><dd><code>SplineTrack_L</code>, <code>TracksInstances_L</code>, <code>TracksInstances_R</code>, <code>TrackSplineLength</code>, <code>CustomTangent</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>45 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>11</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Construct Spline Track Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Construct Spline Track</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="client_firesystem general logic function maingunfiresys machinegunfiresys  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic</span>
<div class="bp-auth-card__title"><code>Client_FireSystem</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Runs client-side visual and local firing reactions after the server decision.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Attaches muzzle Niagara FX to the selected socket, creates the ground effect at the solved point, and plays the supplied audio component on the client.</p>
</div>
<div>
<span>Result</span>
<p>Keeps audiovisual feedback separate from authoritative projectile spawning: the server validates the shot and the client presents it.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>MainGunFireSys</code>, <code>MachineGunFireSys</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>5 nodes</span>
<span><b>Signature</b>8 in · 1 out</span>
<span><b>Call steps</b>3</span>
</div>
<span class="bp-auth-badge">Client</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Client_FireSystem Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Client_FireSystem</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TankMesh</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SocketEffect</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">FireSound</span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="NiagaraSystem"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">FireGroundEffect</span><span class="bp-auth-pin__type">NiagaraSystem</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SocketGroundEffect</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="NiagaraSystem"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">FireNiagaraEffect</span><span class="bp-auth-pin__type">NiagaraSystem</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MeshForFireFX|Calc</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_ammostate functions function   ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_AmmoState</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Refreshes local state and UI after ammunition replication.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Unreal invokes this after replicated <code>Server_AmmoState</code> changes; it forwards the new state to <code>Server_HandleAmmoStateChanged</code>.</p>
</div>
<div>
<span>Result</span>
<p>Spending, reload, replenishment, and replication all reach ammo/UI subscribers through one path.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>2 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_AmmoState Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_AmmoState</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_ server_ismachinegunoverheatting? functions function  server_ismachinegunoverheatting? client_ismachinegunoverheatting?">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_ Server_IsMachineGunOverHeatting?</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Handles replicated machine-gun overheat state.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Copies the replicated server overheat flag into client state and dispatches <code>OnUIStateChanged</code>.</p>
</div>
<div>
<span>Result</span>
<p>Local effects and UI receive the authoritative overheat value after replication.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>Server_IsMachineGunOverHeatting?</code></dd>
<dt>Writes state</dt><dd><code>Client_IsMachineGunOverHeatting?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_ Server_IsMachineGunOverHeatting? Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_ Server_IsMachineGunOverHeatting?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_ismaingunreloaded? functions function  server_ismaingunreloaded? client_ismaingunreloaded?">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_IsMainGunReloaded?</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Handles replicated main-gun readiness.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Copies server main-gun readiness into the client flag and notifies the UI.</p>
</div>
<div>
<span>Result</span>
<p>Indicators and local input logic share the authoritative readiness state.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>Server_IsMainGunReloaded?</code></dd>
<dt>Writes state</dt><dd><code>Client_IsMainGunReloaded?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_IsMainGunReloaded? Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_IsMainGunReloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_ejectionanimplay functions function  server_ejectionanimplay client_ejectionanimplay">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_EjectionAnimPlay</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Starts the local casing-ejection reaction after replication.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Copies the replicated casing-ejection trigger into the client animation variable.</p>
</div>
<div>
<span>Result</span>
<p>The local ejection animation follows the state confirmed by the server firing graph.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>Server_EjectionAnimPlay</code></dd>
<dt>Writes state</dt><dd><code>Client_EjectionAnimPlay</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>5 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>0</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_EjectionAnimPlay Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_EjectionAnimPlay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_ismachinegunreloaded? functions function  server_ismachinegunreloaded? client_ismachinegunreloaded?">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_IsMachineGunReloaded?</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Handles replicated machine-gun readiness.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Copies replicated machine-gun readiness into client state and dispatches <code>OnUIStateChanged</code>.</p>
</div>
<div>
<span>Result</span>
<p>UI and local reactions use server-confirmed readiness rather than a private timer.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>Server_IsMachineGunReloaded?</code></dd>
<dt>Writes state</dt><dd><code>Client_IsMachineGunReloaded?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_IsMachineGunReloaded? Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_IsMachineGunReloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_issmokeshellreloaded? functions function  server_issmokeshellreloaded? client_issmokeshellreloaded?">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_IsSmokeShellReloaded?</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Handles replicated smoke-launcher readiness.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Copies replicated smoke-launcher readiness into the client flag and notifies the UI.</p>
</div>
<div>
<span>Result</span>
<p>Smoke-launch availability remains consistent between server and owning client.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>Server_IsSmokeShellReloaded?</code></dd>
<dt>Writes state</dt><dd><code>Client_IsSmokeShellReloaded?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_IsSmokeShellReloaded? Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_IsSmokeShellReloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_startengineprocess functions function  rstopengine stopengine crewsound rstartengine startengine server_startengineprocess ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_StartEngineProcess</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Synchronizes the local engine-start sequence with the server.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Selects normal or interior start/stop assets from replicated engine state, assigns them to audio components, and plays or fades engine and crew audio.</p>
</div>
<div>
<span>Result</span>
<p>Each client presents the same engine-start phase after the server state changes.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>RStopEngine</code>, <code>StopEngine</code>, <code>CrewSound</code>, <code>RStartEngine</code>, <code>StartEngine</code>, <code>Server_StartEngineProcess</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>15 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>6</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_StartEngineProcess Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_StartEngineProcess</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="onrep_server_engineondelay functions function  server_startengineprocess client_engineondelay">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>OnRep_Server_EngineOnDelay</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Handles the replicated engine-start delay.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Sets the client engine-delay flag from the current <code>Server_StartEngineProcess</code> phase.</p>
</div>
<div>
<span>Result</span>
<p>Local engine particles and audio are enabled only after the replicated delay is confirmed.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd>Unreal replication (automatic)</dd>
<dt>Reads state</dt><dd><code>Server_StartEngineProcess</code></dd>
<dt>Writes state</dt><dd><code>Client_EngineOnDelay</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>5 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>0</span>
</div>
<span class="bp-auth-badge">RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="OnRep_Server_EngineOnDelay Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>OnRep_Server_EngineOnDelay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_handleammostatechanged server logic function onrep_server_ammostate ammo machine gun replenish smoke shall replenish maingunfiresys machinegunfiresys smokeshallfiresys ammo main gun replenish server_ammostate ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic</span>
<div class="bp-auth-card__title"><code>Server_HandleAmmoStateChanged</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Processes ammunition changes on the server and broadcasts the new state.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Breaks the current <code>Server_AmmoState</code>, broadcasts its values through <code>OnAmmoChanged</code>, and checks whether the Pawn is locally controlled.</p>
</div>
<div>
<span>Result</span>
<p>Spending, reload, replenishment, and RepNotify converge on one notification point for HUD and other Blueprint subscribers.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Called from</dt><dd><code>OnRep_Server_AmmoState</code>, <code>Ammo Machine Gun Replenish</code>, <code>Smoke Shall Replenish</code>, <code>MainGunFireSys</code>, <code>MachineGunFireSys</code> <span class="bp-auth-more">+2 more</span></dd>
<dt>Reads state</dt><dd><code>Server_AmmoState</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>1 in · 1 out</span>
<span><b>Call steps</b>1</span>
</div>
<span class="bp-auth-badge">Server</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Server_HandleAmmoStateChanged Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Server_HandleAmmoStateChanged</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
</div></section>

<section class="bp-auth-section" data-bp-section="macros">
<h2>Macros</h2>
The description explains why the macro exists and which repeated Blueprint logic it encapsulates. Pins come from the real `Inputs` and `Outputs` tunnels.
<div class="bp-auth-grid">
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="value change tracker macro gun rotation sound tower rotation sound  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>Value Change Tracker</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Compares the current value with the previous one and reports whether it changed.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p><code>Setup</code> stores the initial wildcard value. <code>Check Change</code> finds the stored pair, compares the new value with the previous one, routes execution to <code>Value Changed</code> or <code>Value not Changed</code>, and returns both values.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p>Turret and gun rotation audio use it so motor sounds start or fade only when the angle actually changes, not on every Tick.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>Gun Rotation Sound</code>, <code>Tower Rotation Sound</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>24 nodes</span>
<span><b>Signature</b>4 in · 5 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="Value Change Tracker Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>Value Change Tracker</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Setup</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Setup Complete</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Value</span><span class="bp-auth-pin__type">Wildcard</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Value Not Changed</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Check Change</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Value Changed</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Check Value</span><span class="bp-auth-pin__type">Wildcard</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Old Value</span><span class="bp-auth-pin__type">Wildcard</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">New Value</span><span class="bp-auth-pin__type">Wildcard</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="calculatetrucktransform macro settrackstransform  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>CalculateTruckTransform</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Builds a track-link transform from spline position and orientation.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Reads spline location, rotation, and right vector at the requested distance, accounts for side/link orientation, and builds the final instance position and rotator.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p><code>SetTracksTransform</code> calls it once per link; it is the conversion point from spline distance to visual shoe transform.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>SetTracksTransform</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>9 nodes</span>
<span><b>Signature</b>2 in · 2 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="CalculateTruckTransform Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>CalculateTruckTransform</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CurrentTrackDistance</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Locatioin</span><span class="bp-auth-pin__type">Vector</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rotation</span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="debugswitch macro updatetrackslocation debugon ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>DebugSwitch</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Produces the shared flag used to enable or bypass diagnostic graph branches.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Converts the shared <code>DebugOn</code> flag into <code>EDrawDebugTrace</code>, returning a drawn-trace mode when enabled and no drawing when disabled.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p>All traces inside <code>UpdateTracksLocation</code> can share one switch without duplicating branches.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Reads state</dt><dd><code>DebugOn</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>4 nodes</span>
<span><b>Signature</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="DebugSwitch Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>DebugSwitch</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="byte" title="EDrawDebugTrace"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">EDrawDebugTrace</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="safeclampinterp macro cameratickcomponent  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>SafeClampInterp</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Interpolates a value smoothly while keeping the result inside a safe range.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Finds a look-at rotation from the reference axis to the endpoint, normalizes the controlled angle, clamps it to mechanical limits, and interpolates from the current camera rotation.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p><code>CameraTickComponent</code> uses it for soft but mechanically limited optic tracking without ±180° wrap jumps.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>CameraTickComponent</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>22 nodes</span>
<span><b>Signature</b>7 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="SafeClampInterp Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>SafeClampInterp</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SpringArm</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Rotator</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AxisFrom</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InterpSpeed</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="parabolicmarco macro updatetrackslocation  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>ParabolicMarco</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Calculates a point or direction along a parabolic trajectory.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Normalizes an element position within the span and evaluates a parabola using width, height, and tension.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p><code>UpdateTracksLocation</code> consumes the result as the vertical offset of a free or sagging track span.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>17 nodes</span>
<span><b>Signature</b>6 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ParabolicMarco Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>ParabolicMarco</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tension</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Height</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Element</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StartPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Width</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="camerarotmacro macro cameratickcomponent  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>CameraRotMacro</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Prepares camera rotation for the active view mode and its limits.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Combines two collapsed graphs: <code>CameraTurnInput</code> scales input by the active optic/FOV and drives both Player Controller and mechanical weapon axes, while <code>AimCubeRotation</code> builds aim-cube rotation from Control Rotation and camera offset.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p>Returns the coherent <code>Rot</code> applied by <code>CameraTickComponent</code> to the selected camera or Spring Arm.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>CameraTickComponent</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>5 nodes</span>
<span><b>Signature</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="CameraRotMacro Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>CameraRotMacro</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rot</span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="servermacro macro eventtick maingunfiresys machinegunfiresys server_soundgraph server_damage  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>ServerMacro</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Encapsulates the repeated network-role check used before server logic.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Checks authority, local Pawn ownership, and proxy role, then routes one input into <code>Server_PhysicsTick</code>, <code>Local_OwnerTick</code>, or <code>Proxy_VisualTick</code>.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p>Tick, firing, sound, and damage graphs use it to keep authoritative physics, owner input, and proxy visuals from running the same branch twice.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>EventTick</code>, <code>MainGunFireSys</code>, <code>MachineGunFireSys</code>, <code>Server_SoundGraph</code>, <code>Server_Damage</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>10 nodes</span>
<span><b>Signature</b>1 in · 3 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ServerMacro Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>ServerMacro</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Execute</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Physicstick</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Local Ownertick</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Proxy Visualtick</span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="gamemode macro userconstructionscript constructsimulativepoints eventtick  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>GameMode</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Gets and validates the project game-mode Blueprint.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Checks ReplaySubsystem play state and standalone mode and combines them into one Boolean.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p>Construction, physics-helper creation, and Tick use it as the shared indication that runtime game logic is appropriate.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>UserConstructionScript</code>, <code>ConstructSimulativePoints</code>, <code>EventTick</code></dd>
<dt>Reads state</dt><dd>—</dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="GameMode Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>GameMode</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="fovtox macro beginplaymainparam fieldofview ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>FOVtoX</code></div>
<div class="bp-auth-card-summary">
<span>Purpose</span>
<p>Converts camera field of view into a coefficient used by later calculations.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>How it works</span>
<p>Uses tan/atan projection math to convert vertical camera FOV limits into matching horizontal angular limits with the supplied coefficient.</p>
</div>
<div>
<span>Why this Blueprint uses it</span>
<p><code>BeginPlayMainParam</code> uses MinX/MaxX so optic-camera yaw limits match the actually visible sector.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Used by</dt><dd><code>BeginPlayMainParam</code></dd>
<dt>Reads state</dt><dd><code>FieldOfView</code></dd>
<dt>Writes state</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Graph</b>23 nodes</span>
<span><b>Signature</b>4 in · 2 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="FOVtoX Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>FOVtoX</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="CameraComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">CameraComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MaxX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MinX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coef</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
</div></section>

<section class="bp-auth-section" data-bp-section="dispatchers">
<h2>Event Dispatcher</h2>
Dispatchers let UI and other systems react to changes without being tightly coupled to the vehicle's internal graphs.
<div class="bp-auth-grid">
<article class="bp-auth-card" data-bp-item data-search="onammochanged dispatcher">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Event Dispatcher</span>
<div class="bp-auth-card__title"><code>OnAmmoChanged</code></div>
<p>Notifies subscribers when the available ammunition state changes.</p>
<div class="bp-auth-meta"><span><b>Payload</b>6 fields</span></div>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnAmmoChanged Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">D</span><span>OnAmmoChanged</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="onuistatechanged dispatcher">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Event Dispatcher</span>
<div class="bp-auth-card__title"><code>OnUIStateChanged</code></div>
<p>Notifies the UI when vehicle-system state changes.</p>
<div class="bp-auth-meta"><span><b>Payload</b>15 fields</span></div>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnUIStateChanged Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">D</span><span>OnUIStateChanged</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBallisticComputerEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBacklightSightEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsShowControlsEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsStabilizationEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsDoubleFireSysEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLockTargetEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsGunnerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunOverHeatting?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMainGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsSmokeShellReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MainGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MachineGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsThermalVisSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsComTowerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
</div></section>

<p class="bp-auth-empty" data-bp-empty hidden>No matching items.</p>
<script>
(() => {
  const root = document.currentScript.closest('.doc-shell__content') || document;
  const buttons = [...root.querySelectorAll('[data-bp-target]')];
  const sections = [...root.querySelectorAll('[data-bp-section]')];
  const search = root.querySelector('[data-bp-search]');
  const empty = root.querySelector('[data-bp-empty]');
  let active = 'variables';
  const refresh = () => {
    const query = (search?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    sections.forEach(section => {
      const isActive = section.dataset.bpSection === active;
      section.classList.toggle('is-active', isActive);
      section.querySelectorAll('[data-bp-item]').forEach(item => {
        const match = !query || (item.dataset.search || '').includes(query);
        item.hidden = !match;
        if (isActive && match) visible += 1;
      });
    });
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.bpTarget === active));
    if (empty) empty.hidden = visible !== 0;
  };
  buttons.forEach(button => button.addEventListener('click', () => { active = button.dataset.bpTarget; refresh(); }));
  search?.addEventListener('input', refresh);
  refresh();
})();
</script>
