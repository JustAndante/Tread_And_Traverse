---
layout: default
title: "BP_Tank_Master: переменные и графы"
description: "Справочник пользовательских переменных, функций, макросов и диспетчеров событий Blueprint BP_Tank_Master"
lang: ru
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/ru/' | relative_url }}">← Русская документация</a>
  <a href="{{ '/docs/track-physics-solver.ru.html' | relative_url }}">Параметры</a>
  <a href="{{ '/docs/track-blueprint-nodes.ru.html' | relative_url }}">Blueprint-ноды плагина</a>
  <a class="is-active" href="{{ '/docs/blueprint-authoring.ru.html' | relative_url }}">Blueprint проекта</a>
  <a href="{{ '/docs/track-cpp-api.ru.html' | relative_url }}">C++ API</a>
  <a href="{{ '/docs/blueprint-authoring.en.html' | relative_url }}">English</a>
</div>

# BP_Tank_Master: переменные и графы

Здесь собраны элементы, которые созданы непосредственно в `BP_Tank_Master` и показаны в панели **My Blueprint**. Это не C++ API плагина: ниже именно переменные проекта, пользовательские функции, макросы и Event Dispatcher. Названия и пины сохранены в том виде, в котором они существуют в Blueprint.

<section class="bp-auth-summary">
<article><strong>182</strong><span>используемых переменных</span></article>
<article><strong>38</strong><span>функций</span></article>
<article><strong>9</strong><span>макросов</span></article>
<article><strong>2</strong><span>Event Dispatcher</span></article>
</section>

<div class="bp-auth-toolbar" data-bp-catalog-toolbar>
<label><span>Поиск</span><input type="search" placeholder="Имя, категория или тип" data-bp-search></label>
<div class="bp-auth-tabs" role="tablist" aria-label="Раздел справочника">
<button class="is-active" data-bp-target="variables">Переменные</button>
<button data-bp-target="functions">Функции</button>
<button data-bp-target="macros">Макросы</button>
<button data-bp-target="dispatchers">Event Dispatcher</button>
</div></div>

<section class="bp-auth-section is-active" data-bp-section="variables">
<h2>Переменные</h2>
Показаны только пользовательские переменные, которые реально читаются или изменяются графами. Компоненты, локальные переменные функций и неиспользуемые заготовки сюда не попадают.
<div class="bp-auth-grid bp-auth-grid--variables">
<article class="bp-auth-card" data-bp-item data-search="globaltracelenght global trace lenght camera|aim cube integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Aim Cube</span>
<div class="bp-auth-card__title"><code>GlobalTraceLenght</code></div>
<p>Числовой параметр «Global Trace Lenght».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>По умолчанию</b>25000000</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Global Trace Lenght Blueprint node"><div class="bp-auth-node__header"><span>Get Global Trace Lenght</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Global Trace Lenght</span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enablesoftnesscamera enable softness camera camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>EnableSoftnessCamera</code></div>
<p>Флаг состояния «Enable Softness Camera».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>По умолчанию</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Enable Softness Camera Blueprint node"><div class="bp-auth-node__header"><span>Get Enable Softness Camera</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Enable Softness Camera</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="freecamswitch free cam switch camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>FreeCamSwitch</code></div>
<p>Флаг состояния «Free Cam Switch».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>По умолчанию</b>False</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Free Cam Switch Blueprint node"><div class="bp-auth-node__header"><span>Get Free Cam Switch</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Free Cam Switch</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Free Cam Switch Blueprint node"><div class="bp-auth-node__header"><span>Set Free Cam Switch</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Free Cam Switch</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isbacklightsightenabled? is backlight sight enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBacklightSightEnabled?</code></div>
<p>Флаг состояния «Is Backlight Sight Enabled?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>По умолчанию</b>False</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Backlight Sight Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Backlight Sight Enabled?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Backlight Sight Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Backlight Sight Enabled?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isballisticcomputerenable? is ballistic computer enable? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBallisticComputerEnable?</code></div>
<p>Флаг состояния «Is Ballistic Computer Enable?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>По умолчанию</b>False</span>
<span><b>Использование</b>Чтение: 3 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Ballistic Computer Enable? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Ballistic Computer Enable?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Ballistic Computer Enable? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Ballistic Computer Enable?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isgunnercameraswitch? is gunner camera switch? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsGunnerCameraSwitch?</code></div>
<p>Флаг состояния «Is Gunner Camera Switch?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>По умолчанию</b>False</span>
<span><b>Использование</b>Чтение: 18 · запись: 3</span>
<span><b>Графы</b><code>CameraRotMacro</code>, <code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code> +3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Gunner Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Gunner Camera Switch?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Gunner Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Gunner Camera Switch?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="islocktargetenabled? is lock target enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsLockTargetEnabled?</code></div>
<p>Флаг состояния «Is Lock Target Enabled?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>По умолчанию</b>False</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Is Lock Target Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Get Is Lock Target Enabled?</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div><div class="bp-auth-node bp-auth-node--setter" role="img" aria-label="Set Is Lock Target Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Lock Target Enabled?</span><small>SETTER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawmaxvalue commander camera yaw max value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMaxValue</code></div>
<p>Числовой параметр «Commander Camera Yaw Max Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>По умолчанию</b>10.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Commander Camera Yaw Max Value Blueprint node"><div class="bp-auth-node__header"><span>Get Commander Camera Yaw Max Value</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Commander Camera Yaw Max Value</span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawminvalue commander camera yaw min value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMinValue</code></div>
<p>Числовой параметр «Commander Camera Yaw Min Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>По умолчанию</b>-10.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--variable" role="img" aria-label="Get Commander Camera Yaw Min Value Blueprint node"><div class="bp-auth-node__header"><span>Get Commander Camera Yaw Min Value</span><small>VARIABLE</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Commander Camera Yaw Min Value</span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="bp comtower field of view bp com tower field of view camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>BP ComTower Field Of View</code></div>
<p>Числовой параметр «BP Com Tower Field Of View».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>По умолчанию</b>0</span>
<span><b…100589 tokens truncated…-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SpringArm</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Rotator</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AxisFrom</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InterpSpeed</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="parabolicmarco macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>ParabolicMarco</code></div>
<p>Вычисляет точку или направление по параболической траектории.</p>
<div class="bp-auth-meta">
<span><b>Граф</b>17 нод</span>
<span><b>Сигнатура</b>6 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ParabolicMarco Blueprint node"><div class="bp-auth-node__header"><span>ParabolicMarco</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tension</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Height</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Element</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StartPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Width</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="camerarotmacro macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>CameraRotMacro</code></div>
<p>Подготавливает поворот камеры с учётом ограничений и текущего режима обзора.</p>
<div class="bp-auth-meta">
<span><b>Граф</b>5 нод</span>
<span><b>Сигнатура</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="CameraRotMacro Blueprint node"><div class="bp-auth-node__header"><span>CameraRotMacro</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rot</span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="servermacro macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>ServerMacro</code></div>
<p>Объединяет повторяющуюся проверку сетевой роли перед серверной логикой.</p>
<div class="bp-auth-meta">
<span><b>Граф</b>10 нод</span>
<span><b>Сигнатура</b>1 in · 3 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ServerMacro Blueprint node"><div class="bp-auth-node__header"><span>ServerMacro</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Exec</span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gamemode macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>GameMode</code></div>
<p>Получает и проверяет используемый Blueprint игрового режима.</p>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="GameMode Blueprint node"><div class="bp-auth-node__header"><span>GameMode</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="fovtox macro">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>FOVtoX</code></div>
<p>Преобразует угол обзора камеры в коэффициент, используемый дальнейшими расчётами.</p>
<div class="bp-auth-meta">
<span><b>Граф</b>23 нод</span>
<span><b>Сигнатура</b>4 in · 2 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="FOVtoX Blueprint node"><div class="bp-auth-node__header"><span>FOVtoX</span><small>MACRO</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">CameraComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MaxX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MinX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="real"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coef</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
</div></section>

<section class="bp-auth-section" data-bp-section="dispatchers">
<h2>Event Dispatcher</h2>
Диспетчеры позволяют интерфейсу и другим системам подписаться на изменения без жёсткой связи с внутренними графами машины.
<div class="bp-auth-grid">
<article class="bp-auth-card" data-bp-item data-search="onammochanged dispatcher">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Event Dispatcher</span>
<div class="bp-auth-card__title"><code>OnAmmoChanged</code></div>
<p>Сообщает подписчикам об изменении доступного боекомплекта.</p>
<div class="bp-auth-meta"><span><b>Данные события</b>6 полей</span></div>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnAmmoChanged Blueprint node"><div class="bp-auth-node__header"><span>OnAmmoChanged</span><small>DISPATCHER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="onuistatechanged dispatcher">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Event Dispatcher</span>
<div class="bp-auth-card__title"><code>OnUIStateChanged</code></div>
<p>Уведомляет интерфейс о смене состояния систем машины.</p>
<div class="bp-auth-meta"><span><b>Данные события</b>15 полей</span></div>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnUIStateChanged Blueprint node"><div class="bp-auth-node__header"><span>OnUIStateChanged</span><small>DISPATCHER</small></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBallisticComputerEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBacklightSightEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsShowControlsEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsStabilizationEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsDoubleFireSysEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLockTargetEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsGunnerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunOverHeatting?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMainGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsSmokeShellReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MainGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MachineGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsThermalVisSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="value"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsComTowerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
</div></section>

<p class="bp-auth-empty" data-bp-empty hidden>Ничего не найдено.</p>
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

