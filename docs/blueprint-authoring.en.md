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

<section class="bp-auth-summary">
<article><strong>182</strong><span>used variables</span></article>
<article><strong>38</strong><span>functions</span></article>
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
<div class="bp-auth-grid bp-auth-grid--variables">
<article class="bp-auth-card" data-bp-item data-search="globaltracelenght global trace lenght camera|aim cube integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Aim Cube</span>
<div class="bp-auth-card__title"><code>GlobalTraceLenght</code></div>
<p>Numeric value for “Global Trace Lenght”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Integer</span>
<span><b>Default</b>25000000</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Global Trace Lenght Blueprint node"><div class="bp-auth-node__header"><span>Get Global Trace Lenght</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Global Trace Lenght</span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enablesoftnesscamera enable softness camera camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>EnableSoftnessCamera</code></div>
<p>State flag for “Enable Softness Camera”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>Default</b>True</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Enable Softness Camera Blueprint node"><div class="bp-auth-node__header"><span>Get Enable Softness Camera</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Enable Softness Camera</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="freecamswitch free cam switch camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>FreeCamSwitch</code></div>
<p>State flag for “Free Cam Switch”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>Default</b>False</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Free Cam Switch Blueprint node"><div class="bp-auth-node__header"><span>Get Free Cam Switch</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Free Cam Switch</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Free Cam Switch Blueprint node"><div class="bp-auth-node__header"><span>Set Free Cam Switch</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Free Cam Switch</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isbacklightsightenabled? is backlight sight enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBacklightSightEnabled?</code></div>
<p>State flag for “Is Backlight Sight Enabled?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>Default</b>False</span>
<span><b>Usage</b>Reads: 1 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Backlight Sight Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Backlight Sight Enabled?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Backlight Sight Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Backlight Sight Enabled?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isballisticcomputerenable? is ballistic computer enable? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBallisticComputerEnable?</code></div>
<p>State flag for “Is Ballistic Computer Enable?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>Default</b>False</span>
<span><b>Usage</b>Reads: 3 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Ballistic Computer Enable? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Ballistic Computer Enable?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Ballistic Computer Enable? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Ballistic Computer Enable?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isgunnercameraswitch? is gunner camera switch? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsGunnerCameraSwitch?</code></div>
<p>State flag for “Is Gunner Camera Switch?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>Default</b>False</span>
<span><b>Usage</b>Reads: 18 · writes: 3</span>
<span><b>Graphs</b><code>CameraRotMacro</code>, <code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code> +3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Gunner Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Gunner Camera Switch?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Gunner Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Gunner Camera Switch?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="islocktargetenabled? is lock target enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsLockTargetEnabled?</code></div>
<p>State flag for “Is Lock Target Enabled?”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Boolean</span>
<span><b>Default</b>False</span>
<span><b>Usage</b>Reads: 2 · writes: 2</span>
<span><b>Graphs</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Lock Target Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Lock Target Enabled?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Lock Target Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Lock Target Enabled?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawmaxvalue commander camera yaw max value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMaxValue</code></div>
<p>Numeric value for “Commander Camera Yaw Max Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>Default</b>10.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Commander Camera Yaw Max Value Blueprint node"><div class="bp-auth-node__header"><span>Get Commander Camera Yaw Max Value</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Commander Camera Yaw Max Value</span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawminvalue commander camera yaw min value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMinValue</code></div>
<p>Numeric value for “Commander Camera Yaw Min Value”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>Default</b>-10.0</span>
<span><b>Usage</b>Reads: 1 · writes: 0</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Commander Camera Yaw Min Value Blueprint node"><div class="bp-auth-node__header"><span>Get Commander Camera Yaw Min Value</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Commander Camera Yaw Min Value</span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="bp comtower field of view bp com tower field of view camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>BP ComTower Field Of View</code></div>
<p>Numeric value for “BP Com Tower Field Of View”.</p>
<div class="bp-auth-meta">
<span><b>Type</b>Float</span>
<span><b>Default</b>0</span>
<span><b>Usage</b>Reads: 0 · writes: 1</span>
<span><b>Graphs</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get BP Com Tower Field Of View Blueprint node"><div class="bp-auth-node__header"><span>Get BP Com Tower Field Of View</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">BP Com Tower Field Of View</span><span class="bp-auth-pin__type">Float</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set BP Com Tower Field Of View Blueprint node"><div class="bp-auth-node__header"><span>Set BP Com Tower Field Of View</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__do…95942 tokens truncated…>EDrawDebugTrace</span><span class="bp-auth-pin__default">None</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="safeclampinterp macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>SafeClampInterp</code></div>
<p>Interpolates a value smoothly while keeping the result inside a safe range.</p>
<div class="bp-auth-meta">
<span><b>Graph</b>22 nodes</span>
<span><b>Signature</b>7 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="SafeClampInterp Blueprint node"><div class="bp-auth-node__header"><span>SafeClampInterp</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SpringArm</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Rotator</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AxisFrom</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InterpSpeed</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="parabolicmarco macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>ParabolicMarco</code></div>
<p>Calculates a point or direction along a parabolic trajectory.</p>
<div class="bp-auth-meta">
<span><b>Graph</b>17 nodes</span>
<span><b>Signature</b>6 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ParabolicMarco Blueprint node"><div class="bp-auth-node__header"><span>ParabolicMarco</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tension</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Height</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Element</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StartPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Width</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="camerarotmacro macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>CameraRotMacro</code></div>
<p>Prepares camera rotation for the active view mode and its limits.</p>
<div class="bp-auth-meta">
<span><b>Graph</b>5 nodes</span>
<span><b>Signature</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="CameraRotMacro Blueprint node"><div class="bp-auth-node__header"><span>CameraRotMacro</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rot</span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="servermacro macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>ServerMacro</code></div>
<p>Encapsulates the repeated network-role check used before server logic.</p>
<div class="bp-auth-meta">
<span><b>Graph</b>10 nodes</span>
<span><b>Signature</b>1 in · 3 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ServerMacro Blueprint node"><div class="bp-auth-node__header"><span>ServerMacro</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gamemode macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>GameMode</code></div>
<p>Gets and validates the project game-mode Blueprint.</p>
<div class="bp-auth-meta">
<span><b>Graph</b>6 nodes</span>
<span><b>Signature</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="GameMode Blueprint node"><div class="bp-auth-node__header"><span>GameMode</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="fovtox macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Authored macro</span>
<div class="bp-auth-card__title"><code>FOVtoX</code></div>
<p>Converts camera field of view into a coefficient used by later calculations.</p>
<div class="bp-auth-meta">
<span><b>Graph</b>23 nodes</span>
<span><b>Signature</b>4 in · 2 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="FOVtoX Blueprint node"><div class="bp-auth-node__header"><span>FOVtoX</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">CameraComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MaxX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MinX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coef</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
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
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnAmmoChanged Blueprint node"><div class="bp-auth-node__header"><span>OnAmmoChanged</span><small>DISPATCHER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="onuistatechanged dispatcher">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Event Dispatcher</span>
<div class="bp-auth-card__title"><code>OnUIStateChanged</code></div>
<p>Notifies the UI when vehicle-system state changes.</p>
<div class="bp-auth-meta"><span><b>Payload</b>15 fields</span></div>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnUIStateChanged Blueprint node"><div class="bp-auth-node__header"><span>OnUIStateChanged</span><small>DISPATCHER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBallisticComputerEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBacklightSightEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsShowControlsEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsStabilizationEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsDoubleFireSysEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLockTargetEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsGunnerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunOverHeatting?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMainGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsSmokeShellReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MainGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MachineGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsThermalVisSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsComTowerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
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

