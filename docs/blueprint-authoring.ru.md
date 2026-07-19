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

В основной справочник попадают только элементы, достижимые из рабочих Event Graph, Construction Script и автоматических RepNotify-обработчиков. Невызываемые отладочные и устаревшие заготовки намеренно не показываются.

<section class="bp-auth-summary">
<article><strong>182</strong><span>используемых переменных</span></article>
<article><strong>36</strong><span>рабочих функций</span></article>
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
<aside class="bp-auth-note"><strong>Важно о значениях.</strong> Поле «В BP_Tank_Master» показывает конфигурацию, сохранённую для этой машины. Это не универсальный дефолт и не рекомендуемое значение для другого танка: геометрия, углы, скорости, FOV и пределы подбираются под конкретную модель.</aside>
<div class="bp-auth-grid bp-auth-grid--variables">
<article class="bp-auth-card" data-bp-item data-search="globaltracelenght global trace lenght camera|aim cube integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Aim Cube</span>
<div class="bp-auth-card__title"><code>GlobalTraceLenght</code></div>
<p>Числовой параметр «Global Trace Lenght».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>25000000</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Global Trace Lenght Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Global Trace Lenght</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enablesoftnesscamera enable softness camera camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>EnableSoftnessCamera</code></div>
<p>Флаг состояния «Enable Softness Camera».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Enable Softness Camera Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Enable Softness Camera</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="freecamswitch free cam switch camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>FreeCamSwitch</code></div>
<p>Флаг состояния «Free Cam Switch».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Free Cam Switch Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Free Cam Switch</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Free Cam Switch Blueprint node"><div class="bp-auth-node__header"><span>Set Free Cam Switch</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Free Cam Switch</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isbacklightsightenabled? is backlight sight enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBacklightSightEnabled?</code></div>
<p>Флаг состояния «Is Backlight Sight Enabled?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Backlight Sight Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Backlight Sight Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Backlight Sight Enabled?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Backlight Sight Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isballisticcomputerenable? is ballistic computer enable? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsBallisticComputerEnable?</code></div>
<p>Флаг состояния «Is Ballistic Computer Enable?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Ballistic Computer Enable? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Ballistic Computer Enable? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Ballistic Computer Enable?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Ballistic Computer Enable?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isgunnercameraswitch? is gunner camera switch? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsGunnerCameraSwitch?</code></div>
<p>Флаг состояния «Is Gunner Camera Switch?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 18 · запись: 3</span>
<span><b>Графы</b><code>CameraRotMacro</code>, <code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code> +3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Gunner Camera Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Gunner Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Gunner Camera Switch?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Gunner Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="islocktargetenabled? is lock target enabled? camera|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Boolean</span>
<div class="bp-auth-card__title"><code>IsLockTargetEnabled?</code></div>
<p>Флаг состояния «Is Lock Target Enabled?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Lock Target Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Lock Target Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Lock Target Enabled?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Lock Target Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawmaxvalue commander camera yaw max value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMaxValue</code></div>
<p>Числовой параметр «Commander Camera Yaw Max Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>10.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Commander Camera Yaw Max Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Commander Camera Yaw Max Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="commandercamerayawminvalue commander camera yaw min value camera|com tower camera|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Com Tower Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CommanderCameraYawMinValue</code></div>
<p>Числовой параметр «Commander Camera Yaw Min Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>-10.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Commander Camera Yaw Min Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Commander Camera Yaw Min Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="bp comtower field of view bp com tower field of view camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>BP ComTower Field Of View</code></div>
<p>Числовой параметр «BP Com Tower Field Of View».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 1</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get BP Com Tower Field Of View Blueprint variable" title="Float"><span class="bp-auth-var-node__name">BP Com Tower Field Of View</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set BP Com Tower Field Of View Blueprint node"><div class="bp-auth-node__header"><span>Set BP Com Tower Field Of View</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">BP Com Tower Field Of View</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfov com tower cam fov camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOV</code></div>
<p>Числовой параметр «Com Tower Cam FOV».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>CameraRotMacro</code>, <code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam FOV Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam FOV</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Com Tower Cam FOV Blueprint node"><div class="bp-auth-node__header"><span>Set Com Tower Cam FOV</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Com Tower Cam FOV</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfovbounds com tower cam fovbounds camera|comtowercamera|baseparameters vector2d">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOVBounds</code></div>
<p>Допустимый диапазон «Com Tower Cam FOVBounds».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Vector2D</span>
<span><b>В BP_Tank_Master</b>X=2.0, Y=30.0</span>
<span><b>Использование</b>Чтение: 3 · запись: 1</span>
<span><b>Графы</b><code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Com Tower Cam FOVBounds Blueprint variable" title="Vector2D"><span class="bp-auth-var-node__name">Com Tower Cam FOVBounds</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="vector" role="img" aria-label="Set Com Tower Cam FOVBounds Blueprint node"><div class="bp-auth-node__header"><span>Set Com Tower Cam FOVBounds</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Com Tower Cam FOVBounds</span><span class="bp-auth-pin__type">Vector2D</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Vector2D</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfovmultiple com tower cam fovmultiple camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOVMultiple</code></div>
<p>Числовой параметр «Com Tower Cam FOVMultiple».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>10.0</span>
<span><b>Использование</b>Чтение: 4 · запись: 4</span>
<span><b>Графы</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam FOVMultiple Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam FOVMultiple</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Com Tower Cam FOVMultiple Blueprint node"><div class="bp-auth-node__header"><span>Set Com Tower Cam FOVMultiple</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Com Tower Cam FOVMultiple</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercamfovstep com tower cam fovstep camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamFOVStep</code></div>
<p>Числовой параметр «Com Tower Cam FOVStep».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>1.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam FOVStep Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam FOVStep</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercammagnificationmax com tower cam magnification max camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamMagnificationMax</code></div>
<p>Числовой параметр «Com Tower Cam Magnification Max».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>12.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam Magnification Max Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam Magnification Max</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="comtowercammagnificationmin com tower cam magnification min camera|comtowercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>ComTowerCamMagnificationMin</code></div>
<p>Числовой параметр «Com Tower Cam Magnification Min».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>2.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Com Tower Cam Magnification Min Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Com Tower Cam Magnification Min</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="iscomtowercameraswitch? is com tower camera switch? camera|comtowercamera|boolern boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|Boolern</span>
<div class="bp-auth-card__title"><code>IsComTowerCameraSwitch?</code></div>
<p>Флаг состояния «Is Com Tower Camera Switch?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 14 · запись: 3</span>
<span><b>Графы</b><code>CameraRotMacro</code>, <code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code> +2</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Com Tower Camera Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Com Tower Camera Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Com Tower Camera Switch? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Com Tower Camera Switch?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Com Tower Camera Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isdoublefiresysenable? is double fire sys enable? camera|comtowercamera|boolern boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|ComTowerCamera|Boolern</span>
<div class="bp-auth-card__title"><code>IsDoubleFireSysEnable?</code></div>
<p>Флаг состояния «Is Double Fire Sys Enable?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code>, <code>Trace Of Weapon UIAim Calculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Double Fire Sys Enable? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Double Fire Sys Enable?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Double Fire Sys Enable? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Double Fire Sys Enable?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Double Fire Sys Enable?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="bp gunner field of view bp gunner field of view camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>BP Gunner Field Of View</code></div>
<p>Числовой параметр «BP Gunner Field Of View».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 1</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get BP Gunner Field Of View Blueprint variable" title="Float"><span class="bp-auth-var-node__name">BP Gunner Field Of View</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set BP Gunner Field Of View Blueprint node"><div class="bp-auth-node__header"><span>Set BP Gunner Field Of View</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">BP Gunner Field Of View</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfov gunner cam fov camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOV</code></div>
<p>Числовой параметр «Gunner Cam FOV».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>90.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>CameraRotMacro</code>, <code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Cam FOV Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Cam FOV</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Gunner Cam FOV Blueprint node"><div class="bp-auth-node__header"><span>Set Gunner Cam FOV</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Gunner Cam FOV</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfovbounds gunner cam fovbounds camera|gunnercamera|baseparameters vector2d">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOVBounds</code></div>
<p>Допустимый диапазон «Gunner Cam FOVBounds».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Vector2D</span>
<span><b>В BP_Tank_Master</b>X=2.0, Y=30.0</span>
<span><b>Использование</b>Чтение: 3 · запись: 1</span>
<span><b>Графы</b><code>CameraZoom</code>, <code>Client_InputGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Gunner Cam FOVBounds Blueprint variable" title="Vector2D"><span class="bp-auth-var-node__name">Gunner Cam FOVBounds</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="vector" role="img" aria-label="Set Gunner Cam FOVBounds Blueprint node"><div class="bp-auth-node__header"><span>Set Gunner Cam FOVBounds</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Gunner Cam FOVBounds</span><span class="bp-auth-pin__type">Vector2D</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="vector" title="Vector2D"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Vector2D</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfovmultiple gunner cam fovmultiple camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOVMultiple</code></div>
<p>Числовой параметр «Gunner Cam FOVMultiple».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>10.0</span>
<span><b>Использование</b>Чтение: 4 · запись: 4</span>
<span><b>Графы</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Cam FOVMultiple Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Cam FOVMultiple</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Gunner Cam FOVMultiple Blueprint node"><div class="bp-auth-node__header"><span>Set Gunner Cam FOVMultiple</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Gunner Cam FOVMultiple</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamfovstep gunner cam fovstep camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCamFOVStep</code></div>
<p>Числовой параметр «Gunner Cam FOVStep».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>1.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Cam FOVStep Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Cam FOVStep</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamerayawmaxvalue gunner camera yaw max value camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCameraYawMaxValue</code></div>
<p>Числовой параметр «Gunner Camera Yaw Max Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>10.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Camera Yaw Max Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Camera Yaw Max Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnesrmagnificationmax gunnesr magnification max camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnesrMagnificationMax</code></div>
<p>Числовой параметр «Gunnesr Magnification Max».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>12.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunnesr Magnification Max Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunnesr Magnification Max</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnesrmagnificationmin gunnesr magnification min camera|gunnercamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|GunnerCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnesrMagnificationMin</code></div>
<p>Числовой параметр «Gunnesr Magnification Min».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>4.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunnesr Magnification Min Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunnesr Magnification Min</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="camerarot camera rot camera|main camera|base parameters rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|Main Camera|Base Parameters</span>
<div class="bp-auth-card__title"><code>CameraRot</code></div>
<p>Ссылка на <code>Rotator</code>, используемая как «Camera Rot».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Rotator</span>
<span><b>В BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Использование</b>Чтение: 2 · запись: 1</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Camera Rot Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Camera Rot</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Camera Rot Blueprint node"><div class="bp-auth-node__header"><span>Set Camera Rot</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera Rot</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="camera yoffset camera yoffset camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Camera YOffset</code></div>
<p>Смещение «Camera YOffset».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>5.0</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>CameraRotMacro</code>, <code>Client_InputGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Camera YOffset Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Camera YOffset</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="gunnercamerayawminvalue gunner camera yaw min value camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>GunnerCameraYawMinValue</code></div>
<p>Числовой параметр «Gunner Camera Yaw Min Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>-10.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Gunner Camera Yaw Min Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Gunner Camera Yaw Min Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maincamfovmultiple main cam fovmultiple camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainCamFOVMultiple</code></div>
<p>Числовой параметр «Main Cam FOVMultiple».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>2.0</span>
<span><b>Использование</b>Чтение: 4 · запись: 4</span>
<span><b>Графы</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Cam FOVMultiple Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Cam FOVMultiple</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Main Cam FOVMultiple Blueprint node"><div class="bp-auth-node__header"><span>Set Main Cam FOVMultiple</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Cam FOVMultiple</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="temp current zoom temp current zoom camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Temp Current Zoom</code></div>
<p>Числовой параметр «Temp Current Zoom».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 1</span>
<span><b>Графы</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Temp Current Zoom Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Temp Current Zoom</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Temp Current Zoom Blueprint node"><div class="bp-auth-node__header"><span>Set Temp Current Zoom</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Temp Current Zoom</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="zoom bounds zoom bounds camera|maincamera|baseparameters vector2d">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Zoom Bounds</code></div>
<p>Допустимый диапазон «Zoom Bounds».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Vector2D</span>
<span><b>В BP_Tank_Master</b>X=+0, Y=10.0</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>CameraZoom</code>, <code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Zoom Bounds Blueprint variable" title="Vector2D"><span class="bp-auth-var-node__name">Zoom Bounds</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="zoom step zoom step camera|maincamera|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Camera|MainCamera|BaseParameters</span>
<div class="bp-auth-card__title"><code>Zoom Step</code></div>
<p>Числовой параметр «Zoom Step».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>120.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>CameraZoom</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Zoom Step Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Zoom Step</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="as chaos wheeled vehicle movement component as chaos wheeled vehicle movement component components|chaos chaoswheeledvehiclemovementcomponent">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Components|Chaos</span>
<div class="bp-auth-card__title"><code>As Chaos Wheeled Vehicle Movement Component</code></div>
<p>Ссылка на <code>ChaosWheeledVehicleMovementComponent</code>, используемая как «As Chaos Wheeled Vehicle Movement Component».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>ChaosWheeledVehicleMovementComponent</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 7 · запись: 1</span>
<span><b>Графы</b><code>EventGraph</code>, <code>GetAvgWheelsAngularVelocity</code>, <code>Server_SoundGraph</code>, <code>SetDriveBrakeBySide</code>, <code>SetDriveTorqueBySide</code> +2</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get As Chaos Wheeled Vehicle Movement Component Blueprint variable" title="ChaosWheeledVehicleMovementComponent"><span class="bp-auth-var-node__name">As Chaos Wheeled Vehicle Movement Component</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set As Chaos Wheeled Vehicle Movement Component Blueprint node"><div class="bp-auth-node__header"><span>Set As Chaos Wheeled Vehicle Movement Component</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="ChaosWheeledVehicleMovementComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">As Chaos Wheeled Vehicle Movement Component</span><span class="bp-auth-pin__type">ChaosWheeledVehicleMovementComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" title="ChaosWheeledVehicleMovementComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">ChaosWheeledVehicleMovementComponent</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackarray track array components|miarrays array&lt;instancedstaticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Components|MIArrays</span>
<div class="bp-auth-card__title"><code>TrackArray</code></div>
<p>Рабочий список «Track Array».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;InstancedStaticMeshComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_Damage</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Track Array Blueprint variable" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Track Array</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="blockleftside block left side controls|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Boolean</span>
<div class="bp-auth-card__title"><code>BlockLeftSide</code></div>
<p>Флаг состояния «Block Left Side».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 4</span>
<span><b>Графы</b><code>Server_SeparateMovement DEV</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Block Left Side Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Block Left Side</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Block Left Side Blueprint node"><div class="bp-auth-node__header"><span>Set Block Left Side</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Block Left Side</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="blockrightside block right side controls|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Boolean</span>
<div class="bp-auth-card__title"><code>BlockRightSide</code></div>
<p>Флаг состояния «Block Right Side».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 4</span>
<span><b>Графы</b><code>Server_SeparateMovement DEV</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Block Right Side Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Block Right Side</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Block Right Side Blueprint node"><div class="bp-auth-node__header"><span>Set Block Right Side</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Block Right Side</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="separatemovement separate movement controls|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Boolean</span>
<div class="bp-auth-card__title"><code>SeparateMovement</code></div>
<p>Флаг состояния «Separate Movement».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Server_SeparateMovement DEV</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Separate Movement Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Separate Movement</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="forwardspeed forward speed controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>ForwardSpeed</code></div>
<p>Скорость или темп для «Forward Speed».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 4 · запись: 1</span>
<span><b>Графы</b><code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Forward Speed Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Forward Speed</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set Forward Speed Blueprint node"><div class="bp-auth-node__header"><span>Set Forward Speed</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Forward Speed</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maxtorque max torque controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>MaxTorque</code></div>
<p>Числовой параметр «Max Torque».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>2000.0</span>
<span><b>Использование</b>Чтение: 8 · запись: 0</span>
<span><b>Графы</b><code>Server_SeparateMovement DEV</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Max Torque Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Max Torque</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="moverighttriggeredseconds move right triggered seconds controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>MoveRightTriggeredSeconds</code></div>
<p>Числовой параметр «Move Right Triggered Seconds».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Move Right Triggered Seconds Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Move Right Triggered Seconds</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Move Right Triggered Seconds Blueprint node"><div class="bp-auth-node__header"><span>Set Move Right Triggered Seconds</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Move Right Triggered Seconds</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="throttleinput throttle input controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>ThrottleInput</code></div>
<p>Числовой параметр «Throttle Input».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 4 · запись: 1</span>
<span><b>Графы</b><code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Throttle Input Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Throttle Input</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set Throttle Input Blueprint node"><div class="bp-auth-node__header"><span>Set Throttle Input</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Throttle Input</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="throttletriggeredseconds throttle triggered seconds controls|float float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Controls|Float</span>
<div class="bp-auth-card__title"><code>ThrottleTriggeredSeconds</code></div>
<p>Числовой параметр «Throttle Triggered Seconds».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Throttle Triggered Seconds Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Throttle Triggered Seconds</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Throttle Triggered Seconds Blueprint node"><div class="bp-auth-node__header"><span>Set Throttle Triggered Seconds</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Throttle Triggered Seconds</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ammostate server ammo state preferences st_ammostate">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences</span>
<div class="bp-auth-card__title"><code>Server_AmmoState</code></div>
<p>Рабочее значение «Server Ammo State» типа <code>ST_AmmoState</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>ST_AmmoState</span>
<span><b>В BP_Tank_Master</b>Empty</span>
<span><b>Использование</b>Чтение: 30 · запись: 0</span>
<span><b>Графы</b><code>MachineGunCoolingCalculation</code>, <code>Server_FiringGraph</code>, <code>Server_HandleAmmoStateChanged</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_AmmoState</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Server Ammo State Blueprint variable" title="ST_AmmoState"><span class="bp-auth-var-node__name">Server Ammo State</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_engineondelay client engine on delay preferences|client boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Client</span>
<div class="bp-auth-card__title"><code>Client_EngineOnDelay</code></div>
<p>Флаг состояния «Client Engine on Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>OnRep_Server_EngineOnDelay</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Engine on Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Engine on Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Engine on Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Client Engine on Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Engine on Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="crewvoicesenable crew voices enable preferences|client boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Client</span>
<div class="bp-auth-card__title"><code>CrewVoicesEnable</code></div>
<p>Флаг состояния «Crew Voices Enable».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 4 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Crew Voices Enable Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Crew Voices Enable</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="debugon debug on preferences|debug boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Debug</span>
<div class="bp-auth-card__title"><code>DebugOn</code></div>
<p>Флаг состояния «Debug On».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>DebugSwitch</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Debug On Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Debug On</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Debug On Blueprint node"><div class="bp-auth-node__header"><span>Set Debug On</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Debug On</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enginestartingtime engine starting time preferences|server float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>EngineStartingTime</code></div>
<p>Числовой параметр «Engine Starting Time».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>0.699999988079071</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Engine Starting Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Engine Starting Time</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_engineison server engine is on preferences|server boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_EngineIsOn</code></div>
<p>Флаг состояния «Server Engine Is On».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 4 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Server_Input</code>, <code>Server_SoundGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Engine Is On Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Engine Is On</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Engine Is On Blueprint node"><div class="bp-auth-node__header"><span>Set Server Engine Is On</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Engine Is On</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_engineondelay server engine on delay preferences|server boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_EngineOnDelay</code></div>
<p>Флаг состояния «Server Engine on Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_EngineOnDelay</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Engine on Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Engine on Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Engine on Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Server Engine on Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Engine on Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_healthpoint server health point preferences|server float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_HealthPoint</code></div>
<p>Числовой параметр «Server Health Point».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>100.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Server_Damage</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Server Health Point Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Server Health Point</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Server Health Point Blueprint node"><div class="bp-auth-node__header"><span>Set Server Health Point</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Health Point</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_startengineprocess server start engine process preferences|server boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Server</span>
<div class="bp-auth-card__title"><code>Server_StartEngineProcess</code></div>
<p>Флаг состояния «Server Start Engine Process».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>OnRep_Server_EngineOnDelay</code>, <code>OnRep_Server_StartEngineProcess</code>, <code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_StartEngineProcess</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Start Engine Process Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Start Engine Process</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Start Engine Process Blueprint node"><div class="bp-auth-node__header"><span>Set Server Start Engine Process</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Start Engine Process</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="attachsplinepointstowheels attach spline points to wheels preferences|spline condition boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>AttachSplinePointsToWheels</code></div>
<p>Флаг состояния «Attach Spline Points to Wheels».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Attach Spline Points to Wheels Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Attach Spline Points to Wheels</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="enable track constraints physics simulation enable track constraints physics simulation preferences|spline condition boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>Enable Track Constraints Physics Simulation</code></div>
<p>Флаг состояния «Enable Track Constraints Physics Simulation».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Enable Track Constraints Physics Simulation Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Enable Track Constraints Physics Simulation</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maxsplinesagging max spline sagging preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>MaxSplineSagging</code></div>
<p>Числовой параметр «Max Spline Sagging».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>30.0</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Max Spline Sagging Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Max Spline Sagging</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="splineparabolawidth spline parabola width preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>SplineParabolaWidth</code></div>
<p>Числовой параметр «Spline Parabola Width».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>1.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Spline Parabola Width Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Spline Parabola Width</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="stepdeg step deg preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>StepDeg</code></div>
<p>Числовой параметр «Step Deg».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>15.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Step Deg Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Step Deg</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="subtracecount sub trace count preferences|spline condition integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>SubTraceCount</code></div>
<p>Числовой параметр «Sub Trace Count».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>6</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Sub Trace Count Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Sub Trace Count</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="suggingexp sugging exp preferences|spline condition float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|Spline Condition</span>
<div class="bp-auth-card__title"><code>SuggingExp</code></div>
<p>Числовой параметр «Sugging Exp».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>0.5</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Sugging Exp Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Sugging Exp</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="splinesubdivision spline subdivision preferences|splinecondition integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|SplineCondition</span>
<div class="bp-auth-card__title"><code>SplineSubdivision</code></div>
<p>Числовой параметр «Spline Subdivision».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>1</span>
<span><b>Использование</b>Чтение: 7 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Spline Subdivision Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Spline Subdivision</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isshowcontrolsenabled? is show controls enabled? preferences|ui boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Preferences|UI</span>
<div class="bp-auth-card__title"><code>IsShowControlsEnabled?</code></div>
<p>Флаг состояния «Is Show Controls Enabled?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Show Controls Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Show Controls Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Show Controls Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Show Controls Enabled?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Show Controls Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ismachinegunoverheatting? client is machine gun over heatting? tank component|fire system component|machine gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsMachineGunOverHeatting?</code></div>
<p>Флаг состояния «Client Is Machine Gun Over Heatting?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_ Server_IsMachineGunOverHeatting?</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Machine Gun Over Heatting? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Machine Gun Over Heatting? Blueprint node"><div class="bp-auth-node__header"><span>Set Client Is Machine Gun Over Heatting?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ismachinegunreloaded? client is machine gun reloaded? tank component|fire system component|machine gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsMachineGunReloaded?</code></div>
<p>Флаг состояния «Client Is Machine Gun Reloaded?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_Server_IsMachineGunReloaded?</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Machine Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Machine Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Machine Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>Set Client Is Machine Gun Reloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Machine Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="mg_mesh_change mg mesh change tank component|fire system component|machine gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Boolean</span>
<div class="bp-auth-card__title"><code>MG_Mesh_Change</code></div>
<p>Флаг состояния «MG Mesh Change».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>EventGraph</code>, <code>Server_UpdateComTowerRotation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get MG Mesh Change Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">MG Mesh Change</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="mgtype mgtype tank component|fire system component|machine gun|integer integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Machine Gun|Integer</span>
<div class="bp-auth-card__title"><code>MGType</code></div>
<p>Числовой параметр «MGType».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>2</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get MGType Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">MGType</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ejectionanimplay client ejection anim play tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_EjectionAnimPlay</code></div>
<p>Флаг состояния «Client Ejection Anim Play».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>OnRep_Server_EjectionAnimPlay</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Ejection Anim Play Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Ejection Anim Play</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Ejection Anim Play Blueprint node"><div class="bp-auth-node__header"><span>Set Client Ejection Anim Play</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Ejection Anim Play</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_ismaingunreloaded? client is main gun reloaded? tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsMainGunReloaded?</code></div>
<p>Флаг состояния «Client Is Main Gun Reloaded?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_Server_IsMainGunReloaded?</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Main Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Main Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Main Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>Set Client Is Main Gun Reloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Main Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ejectionanimenable ejection anim enable tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>EjectionAnimEnable</code></div>
<p>Флаг состояния «Ejection Anim Enable».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Ejection Anim Enable Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Ejection Anim Enable</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ejectionanimplay server ejection anim play tank component|fire system component|main gun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Main Gun|Boolean</span>
<div class="bp-auth-card__title"><code>Server_EjectionAnimPlay</code></div>
<p>Флаг состояния «Server Ejection Anim Play».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>OnRep_Server_EjectionAnimPlay</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_EjectionAnimPlay</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Ejection Anim Play Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Ejection Anim Play</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Ejection Anim Play Blueprint node"><div class="bp-auth-node__header"><span>Set Server Ejection Anim Play</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Ejection Anim Play</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="client_issmokeshellreloaded? client is smoke shell reloaded? tank component|fire system component|smoke shall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Smoke Shall|Boolean</span>
<div class="bp-auth-card__title"><code>Client_IsSmokeShellReloaded?</code></div>
<p>Флаг состояния «Client Is Smoke Shell Reloaded?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Dispatcher_OnUIStateChangedGraph</code>, <code>OnRep_Server_IsSmokeShellReloaded?</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Client Is Smoke Shell Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Client Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Client Is Smoke Shell Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>Set Client Is Smoke Shell Reloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="issmokeshellfiredelay is smoke shell fire delay tank component|fire system component|smoke shall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Fire System Component|Smoke Shall|Boolean</span>
<div class="bp-auth-card__title"><code>IsSmokeShellFireDelay</code></div>
<p>Флаг состояния «Is Smoke Shell Fire Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Smoke Shell Fire Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Smoke Shell Fire Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Smoke Shell Fire Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Is Smoke Shell Fire Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Smoke Shell Fire Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="crewvoicedelay crew voice delay tank component|sound|crew boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Tank Component|Sound|Crew</span>
<div class="bp-auth-card__title"><code>CrewVoiceDelay</code></div>
<p>Флаг состояния «Crew Voice Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Crew Voice Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Crew Voice Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Crew Voice Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Crew Voice Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Crew Voice Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="destroyed destroyed tankcomponent|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Boolean</span>
<div class="bp-auth-card__title"><code>Destroyed</code></div>
<p>Флаг состояния «Destroyed».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 11 · запись: 3</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>EventGraph</code>, <code>Server_Damage</code>, <code>Server_FiringGraph</code>, <code>Server_Input</code> +1</span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Destroyed Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Destroyed</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Destroyed Blueprint node"><div class="bp-auth-node__header"><span>Set Destroyed</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Destroyed</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isaimtypeswitch? is aim type switch? tankcomponent|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Boolean</span>
<div class="bp-auth-card__title"><code>IsAimTypeSwitch?</code></div>
<p>Флаг состояния «Is Aim Type Switch?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Aim Type Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Aim Type Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Aim Type Switch? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Aim Type Switch?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Aim Type Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isthermalvisswitch? is thermal vis switch? tankcomponent|firesystemcomponent|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Boolean</span>
<div class="bp-auth-card__title"><code>IsThermalVisSwitch?</code></div>
<p>Флаг состояния «Is Thermal Vis Switch?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Thermal Vis Switch? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Thermal Vis Switch?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Thermal Vis Switch? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Thermal Vis Switch?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Thermal Vis Switch?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machiegunpitch machie gun pitch tankcomponent|firesystemcomponent|machinegun|baseparameters rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachieGunPitch</code></div>
<p>Поворот, используемый системой «Machie Gun Pitch».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Rotator</span>
<span><b>В BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_ComTowerRotationGraph</code>, <code>UpdateComTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Machie Gun Pitch Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Machie Gun Pitch</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Machie Gun Pitch Blueprint node"><div class="bp-auth-node__header"><span>Set Machie Gun Pitch</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Machie Gun Pitch</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunfirerate machine gun fire rate tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunFireRate</code></div>
<p>Скорость или темп для «Machine Gun Fire Rate».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>0.1</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Fire Rate Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Fire Rate</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunheat machine gun heat tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunHeat</code></div>
<p>Числовой параметр «Machine Gun Heat».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Heat Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Heat</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunmomentumvalue machine gun momentum value tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunMomentumValue</code></div>
<p>Числовой параметр «Machine Gun Momentum Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>0.2</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Momentum Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Momentum Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunreloaddelay machine gun reload delay tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunReloadDelay</code></div>
<p>Числовой параметр «Machine Gun Reload Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Reload Delay Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Reload Delay</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Machine Gun Reload Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Machine Gun Reload Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Machine Gun Reload Delay</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunreloadtime machine gun reload time tankcomponent|firesystemcomponent|machinegun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MachineGunReloadTime</code></div>
<p>Числовой параметр «Machine Gun Reload Time».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>5.0</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Machine Gun Reload Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Machine Gun Reload Time</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search=" server_ismachinegunoverheatting?  server is machine gun over heatting? tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code> Server_IsMachineGunOverHeatting?</code></div>
<p>Флаг состояния « Server Is Machine Gun Over Heatting?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>OnRep_ Server_IsMachineGunOverHeatting?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_ Server_IsMachineGunOverHeatting?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get  Server Is Machine Gun Over Heatting? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name"> Server Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set  Server Is Machine Gun Over Heatting? Blueprint node"><div class="bp-auth-node__header"><span>Set  Server Is Machine Gun Over Heatting?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"> Server Is Machine Gun Over Heatting?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ismachinegunfiredelay is machine gun fire delay tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code>IsMachineGunFireDelay</code></div>
<p>Флаг состояния «Is Machine Gun Fire Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Machine Gun Fire Delay Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Machine Gun Fire Delay</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Machine Gun Fire Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Is Machine Gun Fire Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Machine Gun Fire Delay</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ismachinegunfire? is machine gun fire? tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code>IsMachineGunFire?</code></div>
<p>Флаг состояния «Is Machine Gun Fire?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Machine Gun Fire? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Machine Gun Fire?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Machine Gun Fire? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Machine Gun Fire?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Machine Gun Fire?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ismachinegunreloaded? server is machine gun reloaded? tankcomponent|firesystemcomponent|machinegun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Boolean</span>
<div class="bp-auth-card__title"><code>Server_IsMachineGunReloaded?</code></div>
<p>Флаг состояния «Server Is Machine Gun Reloaded?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>OnRep_Server_IsMachineGunReloaded?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_IsMachineGunReloaded?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Is Machine Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Is Machine Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Is Machine Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>Set Server Is Machine Gun Reloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Is Machine Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunmuzzlesocket machine gun muzzle socket tankcomponent|firesystemcomponent|machinegun|muzzlesocket name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|MuzzleSocket</span>
<div class="bp-auth-card__title"><code>MachineGunMuzzleSocket</code></div>
<p>Текстовый идентификатор «Machine Gun Muzzle Socket».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Name</span>
<span><b>В BP_Tank_Master</b>MachineGunMuzzleSocket</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Machine Gun Muzzle Socket Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Machine Gun Muzzle Socket</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunfireniagaraeffect machine gun fire niagara effect tankcomponent|firesystemcomponent|machinegun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Particle</span>
<div class="bp-auth-card__title"><code>MachineGunFireNiagaraEffect</code></div>
<p>Рабочее значение «Machine Gun Fire Niagara Effect» типа <code>NiagaraSystem</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>NiagaraSystem</span>
<span><b>В BP_Tank_Master</b>-395</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Machine Gun Fire Niagara Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Machine Gun Fire Niagara Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="overheatingniagaraeffect overheating niagara effect tankcomponent|firesystemcomponent|machinegun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Particle</span>
<div class="bp-auth-card__title"><code>OverheatingNiagaraEffect</code></div>
<p>Рабочее значение «Overheating Niagara Effect» типа <code>NiagaraSystem</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>NiagaraSystem</span>
<span><b>В BP_Tank_Master</b>-397</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Overheating Niagara Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Overheating Niagara Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunprojectile machine gun projectile tankcomponent|firesystemcomponent|machinegun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Projectile</span>
<div class="bp-auth-card__title"><code>MachineGunProjectile</code></div>
<p>Рабочее значение «Machine Gun Projectile» типа <code>Class Class</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Class Class</span>
<span><b>В BP_Tank_Master</b>-12</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Machine Gun Projectile Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Machine Gun Projectile</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="machinegunfiretimer machine gun fire timer tankcomponent|firesystemcomponent|machinegun|timer timerhandle">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MachineGun|Timer</span>
<div class="bp-auth-card__title"><code>MachineGunFireTimer</code></div>
<p>Дескриптор таймера «Machine Gun Fire Timer».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>TimerHandle</span>
<span><b>В BP_Tank_Master</b>0</span>
<span><b>Использование</b>Чтение: 3 · запись: 1</span>
<span><b>Графы</b><code>Server_Damage</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Machine Gun Fire Timer Blueprint variable" title="TimerHandle"><span class="bp-auth-var-node__name">Machine Gun Fire Timer</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="struct" role="img" aria-label="Set Machine Gun Fire Timer Blueprint node"><div class="bp-auth-node__header"><span>Set Machine Gun Fire Timer</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Machine Gun Fire Timer</span><span class="bp-auth-pin__type">TimerHandle</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">TimerHandle</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunmomentumvalue main gun momentum value tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunMomentumValue</code></div>
<p>Числовой параметр «Main Gun Momentum Value».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>20.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Momentum Value Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Momentum Value</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunphysfloat main gun phys float tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunPhysFloat</code></div>
<p>Числовой параметр «Main Gun Phys Float».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 1</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Phys Float Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Phys Float</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Main Gun Phys Float Blueprint node"><div class="bp-auth-node__header"><span>Set Main Gun Phys Float</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Phys Float</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunreloaddelay main gun reload delay tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunReloadDelay</code></div>
<p>Числовой параметр «Main Gun Reload Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Reload Delay Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Reload Delay</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Main Gun Reload Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Main Gun Reload Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Reload Delay</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunreloadtime main gun reload time tankcomponent|firesystemcomponent|maingun|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|BaseParameters</span>
<div class="bp-auth-card__title"><code>MainGunReloadTime</code></div>
<p>Числовой параметр «Main Gun Reload Time».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>0.016</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Main Gun Reload Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Main Gun Reload Time</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ismaingunfiredelay? is main gun fire delay? tankcomponent|firesystemcomponent|maingun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Boolean</span>
<div class="bp-auth-card__title"><code>IsMainGunFireDelay?</code></div>
<p>Флаг состояния «Is Main Gun Fire Delay?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Main Gun Fire Delay? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Main Gun Fire Delay?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Main Gun Fire Delay? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Main Gun Fire Delay?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Main Gun Fire Delay?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_ismaingunreloaded? server is main gun reloaded? tankcomponent|firesystemcomponent|maingun|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Boolean</span>
<div class="bp-auth-card__title"><code>Server_IsMainGunReloaded?</code></div>
<p>Флаг состояния «Server Is Main Gun Reloaded?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>OnRep_Server_IsMainGunReloaded?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_IsMainGunReloaded?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Is Main Gun Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Is Main Gun Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Is Main Gun Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>Set Server Is Main Gun Reloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Is Main Gun Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunfiretimer main gun fire timer tankcomponent|firesystemcomponent|maingun|integer timerhandle">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Integer</span>
<div class="bp-auth-card__title"><code>MainGunFireTimer</code></div>
<p>Дескриптор таймера «Main Gun Fire Timer».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>TimerHandle</span>
<span><b>В BP_Tank_Master</b>0</span>
<span><b>Использование</b>Чтение: 2 · запись: 1</span>
<span><b>Графы</b><code>Server_Damage</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Main Gun Fire Timer Blueprint variable" title="TimerHandle"><span class="bp-auth-var-node__name">Main Gun Fire Timer</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="struct" role="img" aria-label="Set Main Gun Fire Timer Blueprint node"><div class="bp-auth-node__header"><span>Set Main Gun Fire Timer</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Fire Timer</span><span class="bp-auth-pin__type">TimerHandle</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">TimerHandle</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingun fire ground effect main gun fire ground effect tankcomponent|firesystemcomponent|maingun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Particle</span>
<div class="bp-auth-card__title"><code>MainGun Fire Ground Effect</code></div>
<p>Рабочее значение «Main Gun Fire Ground Effect» типа <code>NiagaraSystem</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>NiagaraSystem</span>
<span><b>В BP_Tank_Master</b>-392</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Main Gun Fire Ground Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Main Gun Fire Ground Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunfireniagaraeffect main gun fire niagara effect tankcomponent|firesystemcomponent|maingun|particle niagarasystem">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Particle</span>
<div class="bp-auth-card__title"><code>MainGunFireNiagaraEffect</code></div>
<p>Рабочее значение «Main Gun Fire Niagara Effect» типа <code>NiagaraSystem</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>NiagaraSystem</span>
<span><b>В BP_Tank_Master</b>-396</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Main Gun Fire Niagara Effect Blueprint variable" title="NiagaraSystem"><span class="bp-auth-var-node__name">Main Gun Fire Niagara Effect</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ejectedcartridge ejected cartridge tankcomponent|firesystemcomponent|maingun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Projectile</span>
<div class="bp-auth-card__title"><code>EjectedCartridge</code></div>
<p>Рабочее значение «Ejected Cartridge» типа <code>Class Class</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Class Class</span>
<span><b>В BP_Tank_Master</b>-10</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Ejected Cartridge Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Ejected Cartridge</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunprojectile main gun projectile tankcomponent|firesystemcomponent|maingun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Projectile</span>
<div class="bp-auth-card__title"><code>MainGunProjectile</code></div>
<p>Рабочее значение «Main Gun Projectile» типа <code>Class Class</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Class Class</span>
<span><b>В BP_Tank_Master</b>-13</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Main Gun Projectile Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Main Gun Projectile</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunshellprojectille main gun shell projectille tankcomponent|firesystemcomponent|maingun|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Projectile</span>
<div class="bp-auth-card__title"><code>MainGunShellProjectille</code></div>
<p>Рабочее значение «Main Gun Shell Projectille» типа <code>Class Class</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Class Class</span>
<span><b>В BP_Tank_Master</b>-14</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Main Gun Shell Projectille Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Main Gun Shell Projectille</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunpitch main gun pitch tankcomponent|firesystemcomponent|maingun|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|MainGun|Rotator</span>
<div class="bp-auth-card__title"><code>MainGunPitch</code></div>
<p>Поворот, используемый системой «Main Gun Pitch».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Rotator</span>
<span><b>В BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Server_SoundGraph</code>, <code>Server_TowerRotationGraph</code>, <code>Server_Update Tower Rotation</code>, <code>UpdateTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Main Gun Pitch Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Main Gun Pitch</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Main Gun Pitch Blueprint node"><div class="bp-auth-node__header"><span>Set Main Gun Pitch</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Pitch</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="canitbereplenishing? can it be replenishing? tankcomponent|firesystemcomponent|replenishsys|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|ReplenishSys|Boolean</span>
<div class="bp-auth-card__title"><code>CanItBeReplenishing?</code></div>
<p>Флаг состояния «Can It be Replenishing?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 1</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Can It be Replenishing? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Can It be Replenishing?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Can It be Replenishing? Blueprint node"><div class="bp-auth-node__header"><span>Set Can It be Replenishing?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Can It be Replenishing?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="maingunammochangetracker main gun ammo change tracker tankcomponent|firesystemcomponent|replenishsys|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|ReplenishSys|Boolean</span>
<div class="bp-auth-card__title"><code>MainGunAmmoChangeTracker</code></div>
<p>Флаг состояния «Main Gun Ammo Change Tracker».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 0 · запись: 1</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Main Gun Ammo Change Tracker Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Main Gun Ammo Change Tracker</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Main Gun Ammo Change Tracker Blueprint node"><div class="bp-auth-node__header"><span>Set Main Gun Ammo Change Tracker</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Main Gun Ammo Change Tracker</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="subreplanishboolreturn sub replanish bool return tankcomponent|firesystemcomponent|replenishsys|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|ReplenishSys|Boolean</span>
<div class="bp-auth-card__title"><code>SubReplanishBoolReturn</code></div>
<p>Флаг состояния «Sub Replanish Bool Return».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Sub Replanish Bool Return Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Sub Replanish Bool Return</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Sub Replanish Bool Return Blueprint node"><div class="bp-auth-node__header"><span>Set Sub Replanish Bool Return</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Sub Replanish Bool Return</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellrate smoke shell rate tankcomponent|firesystemcomponent|smokeshall|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|BaseParameters</span>
<div class="bp-auth-card__title"><code>SmokeShellRate</code></div>
<p>Скорость или темп для «Smoke Shell Rate».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>0.5</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Smoke Shell Rate Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Smoke Shell Rate</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellreloaddelay smoke shell reload delay tankcomponent|firesystemcomponent|smokeshall|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|BaseParameters</span>
<div class="bp-auth-card__title"><code>SmokeShellReloadDelay</code></div>
<p>Числовой параметр «Smoke Shell Reload Delay».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Smoke Shell Reload Delay Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Smoke Shell Reload Delay</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Smoke Shell Reload Delay Blueprint node"><div class="bp-auth-node__header"><span>Set Smoke Shell Reload Delay</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Smoke Shell Reload Delay</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellreloadtime smoke shell reload time tankcomponent|firesystemcomponent|smokeshall|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|BaseParameters</span>
<div class="bp-auth-card__title"><code>SmokeShellReloadTime</code></div>
<p>Числовой параметр «Smoke Shell Reload Time».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>1.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Smoke Shell Reload Time Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Smoke Shell Reload Time</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="issmokeshellfire? is smoke shell fire? tankcomponent|firesystemcomponent|smokeshall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Boolean</span>
<div class="bp-auth-card__title"><code>IsSmokeShellFire?</code></div>
<p>Флаг состояния «Is Smoke Shell Fire?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Smoke Shell Fire? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Smoke Shell Fire?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Smoke Shell Fire? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Smoke Shell Fire?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Smoke Shell Fire?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="server_issmokeshellreloaded? server is smoke shell reloaded? tankcomponent|firesystemcomponent|smokeshall|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Boolean</span>
<div class="bp-auth-card__title"><code>Server_IsSmokeShellReloaded?</code></div>
<p>Флаг состояния «Server Is Smoke Shell Reloaded?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 2 · запись: 3</span>
<span><b>Графы</b><code>OnRep_Server_IsSmokeShellReloaded?</code>, <code>Server_FiringGraph</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · OnRep_Server_IsSmokeShellReloaded?</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Server Is Smoke Shell Reloaded? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Server Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Server Is Smoke Shell Reloaded? Blueprint node"><div class="bp-auth-node__header"><span>Set Server Is Smoke Shell Reloaded?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Is Smoke Shell Reloaded?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshelltimer smoke shell timer tankcomponent|firesystemcomponent|smokeshall|integer timerhandle">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Integer</span>
<div class="bp-auth-card__title"><code>SmokeShellTimer</code></div>
<p>Дескриптор таймера «Smoke Shell Timer».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>TimerHandle</span>
<span><b>В BP_Tank_Master</b>0</span>
<span><b>Использование</b>Чтение: 2 · запись: 1</span>
<span><b>Графы</b><code>Server_Damage</code>, <code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Smoke Shell Timer Blueprint variable" title="TimerHandle"><span class="bp-auth-var-node__name">Smoke Shell Timer</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="struct" role="img" aria-label="Set Smoke Shell Timer Blueprint node"><div class="bp-auth-node__header"><span>Set Smoke Shell Timer</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Smoke Shell Timer</span><span class="bp-auth-pin__type">TimerHandle</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="struct" title="TimerHandle"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">TimerHandle</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellprojectile smoke shell projectile tankcomponent|firesystemcomponent|smokeshall|projectile class class">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Projectile</span>
<div class="bp-auth-card__title"><code>SmokeShellProjectile</code></div>
<p>Рабочее значение «Smoke Shell Projectile» типа <code>Class Class</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Class Class</span>
<span><b>В BP_Tank_Master</b>-11</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="class" role="img" aria-label="Get Smoke Shell Projectile Blueprint variable" title="Class Class"><span class="bp-auth-var-node__name">Smoke Shell Projectile</span><span class="bp-auth-pin__dot" data-pin-type="class"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket01 smoke shell socket 01 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket01</code></div>
<p>Рабочий список «Smoke Shell Socket 01».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Name&gt;</span>
<span><b>В BP_Tank_Master</b>SmokeShellSocket_L01, SmokeShellSocket_L02, SmokeShellSocket_R01, SmokeShellSocket_R02</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 01 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 01</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket02 smoke shell socket 02 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket02</code></div>
<p>Рабочий список «Smoke Shell Socket 02».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Name&gt;</span>
<span><b>В BP_Tank_Master</b>SmokeShellSocket_L03, SmokeShellSocket_L04, SmokeShellSocket_R03, SmokeShellSocket_R04</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 02 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 02</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket03 smoke shell socket 03 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket03</code></div>
<p>Рабочий список «Smoke Shell Socket 03».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Name&gt;</span>
<span><b>В BP_Tank_Master</b>SmokeShellSocket_L05, SmokeShellSocket_L06, SmokeShellSocket_R05, SmokeShellSocket_R06</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 03 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 03</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="smokeshellsocket04 smoke shell socket 04 tankcomponent|firesystemcomponent|smokeshall|sockets array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|SmokeShall|Sockets</span>
<div class="bp-auth-card__title"><code>SmokeShellSocket04</code></div>
<p>Рабочий список «Smoke Shell Socket 04».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Name&gt;</span>
<span><b>В BP_Tank_Master</b>SmokeShellSocket_L07, SmokeShellSocket_L08, SmokeShellSocket_R07, SmokeShellSocket_R08</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Smoke Shell Socket 04 Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Smoke Shell Socket 04</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalmaterialparameter thermal material parameter tankcomponent|firesystemcomponent|thermal|materialparameters materialparametercollection">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|MaterialParameters</span>
<div class="bp-auth-card__title"><code>ThermalMaterialParameter</code></div>
<p>Ссылка на <code>MaterialParameterCollection</code>, используемая как «Thermal Material Parameter».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>MaterialParameterCollection</span>
<span><b>В BP_Tank_Master</b>-389</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Thermal Material Parameter Blueprint variable" title="MaterialParameterCollection"><span class="bp-auth-var-node__name">Thermal Material Parameter</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalparametername thermal parameter name tankcomponent|firesystemcomponent|thermal|materialparameters name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|MaterialParameters</span>
<div class="bp-auth-card__title"><code>ThermalParameterName</code></div>
<p>Текстовый идентификатор «Thermal Parameter Name».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Name</span>
<span><b>В BP_Tank_Master</b>ThermalEffect</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Thermal Parameter Name Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Thermal Parameter Name</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalpostprocesssettings_default thermal post process settings default tankcomponent|firesystemcomponent|thermal|postprocesssettings postprocesssettings">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|PostProcessSettings</span>
<div class="bp-auth-card__title"><code>ThermalPostProcessSettings_Default</code></div>
<p>Рабочее значение «Thermal Post Process Settings Default» типа <code>PostProcessSettings</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>PostProcessSettings</span>
<span><b>В BP_Tank_Master</b>412 items</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Thermal Post Process Settings Default Blueprint variable" title="PostProcessSettings"><span class="bp-auth-var-node__name">Thermal Post Process Settings Default</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="thermalpost process settings_mod thermal post process settings mod tankcomponent|firesystemcomponent|thermal|postprocesssettings postprocesssettings">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|FireSystemComponent|Thermal|PostProcessSettings</span>
<div class="bp-auth-card__title"><code>ThermalPost Process Settings_Mod</code></div>
<p>Рабочее значение «Thermal Post Process Settings Mod» типа <code>PostProcessSettings</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>PostProcessSettings</span>
<span><b>В BP_Tank_Master</b>412 items</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Client_InputGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="struct" role="img" aria-label="Get Thermal Post Process Settings Mod Blueprint variable" title="PostProcessSettings"><span class="bp-auth-var-node__name">Thermal Post Process Settings Mod</span><span class="bp-auth-pin__dot" data-pin-type="struct"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="midynamics midynamics tankcomponent|mi array&lt;materialinstancedynamic&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|MI</span>
<div class="bp-auth-card__title"><code>MIDynamics</code></div>
<p>Рабочий список «MIDynamics».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;MaterialInstanceDynamic&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>CreateDynamicMI</code>, <code>Server_Damage</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get MIDynamics Blueprint variable" title="Array&lt;MaterialInstanceDynamic&gt;"><span class="bp-auth-var-node__name">MIDynamics</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="curentrpmratio curent rpmratio tankcomponent|movements|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Movements|BaseParameters</span>
<div class="bp-auth-card__title"><code>CurentRPMRatio</code></div>
<p>Числовой параметр «Curent RPMRatio».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Curent RPMRatio Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Curent RPMRatio</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Curent RPMRatio Blueprint node"><div class="bp-auth-node__header"><span>Set Curent RPMRatio</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Curent RPMRatio</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="forwardaxis  forward axis  tankcomponent|movements|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Movements|BaseParameters</span>
<div class="bp-auth-card__title"><code>ForwardAxis </code></div>
<p>Числовой параметр «Forward Axis ».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 4 · запись: 6</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Server_Damage</code>, <code>Server_Input</code>, <code>Server_SeparateMovement DEV</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Forward Axis  Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Forward Axis </span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Forward Axis  Blueprint node"><div class="bp-auth-node__header"><span>Set Forward Axis </span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Forward Axis </span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="yaw yaw tankcomponent|movements|baseparameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Movements|BaseParameters</span>
<div class="bp-auth-card__title"><code>Yaw</code></div>
<p>Числовой параметр «Yaw».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 6</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Server_Damage</code>, <code>Server_Input</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Yaw Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Yaw</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Yaw Blueprint node"><div class="bp-auth-node__header"><span>Set Yaw</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Yaw</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="nrsound nrsound tankcomponent|sound|noreverb array&lt;audiocomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Sound|Noreverb</span>
<div class="bp-auth-card__title"><code>NRSound</code></div>
<p>Рабочий список «NRSound».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;AudioComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 1</span>
<span><b>Графы</b><code>Server_Damage</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get NRSound Blueprint variable" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-var-node__name">NRSound</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set NRSound Blueprint node"><div class="bp-auth-node__header"><span>Set NRSound</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">NRSound</span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rsound rsound tankcomponent|sound|reverb array&lt;audiocomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Sound|Reverb</span>
<div class="bp-auth-card__title"><code>RSound</code></div>
<p>Рабочий список «RSound».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;AudioComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 1</span>
<span><b>Графы</b><code>Server_Damage</code>, <code>Server_SoundGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get RSound Blueprint variable" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-var-node__name">RSound</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set RSound Blueprint node"><div class="bp-auth-node__header"><span>Set RSound</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">RSound</span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;AudioComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;AudioComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="isstabilizationenabled? is stabilization enabled? tankcomponent|stabilization|boolean boolean">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Stabilization|Boolean</span>
<div class="bp-auth-card__title"><code>IsStabilizationEnabled?</code></div>
<p>Флаг состояния «Is Stabilization Enabled?».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Boolean</span>
<span><b>В BP_Tank_Master</b>True</span>
<span><b>Использование</b>Чтение: 3 · запись: 1</span>
<span><b>Графы</b><code>Client_InputGraph</code>, <code>Dispatcher_OnUIStateChangedGraph</code>, <code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="bool" role="img" aria-label="Get Is Stabilization Enabled? Blueprint variable" title="Boolean"><span class="bp-auth-var-node__name">Is Stabilization Enabled?</span><span class="bp-auth-pin__dot" data-pin-type="bool"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="bool" role="img" aria-label="Set Is Stabilization Enabled? Blueprint node"><div class="bp-auth-node__header"><span>Set Is Stabilization Enabled?</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Stabilization Enabled?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ctcomtowerrotation ctcom tower rotation tankcomponent|tower|comtower|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|ComTower|Rotator</span>
<div class="bp-auth-card__title"><code>CTComTowerRotation</code></div>
<p>Поворот, используемый системой «CTCom Tower Rotation».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Rotator</span>
<span><b>В BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_ComTowerRotationGraph</code>, <code>Server_UpdateComTowerRotation</code>, <code>UpdateComTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get CTCom Tower Rotation Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">CTCom Tower Rotation</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set CTCom Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span>Set CTCom Tower Rotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CTCom Tower Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="mgcomtowerrotation mgcom tower rotation tankcomponent|tower|comtower|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|ComTower|Rotator</span>
<div class="bp-auth-card__title"><code>MGComTowerRotation</code></div>
<p>Поворот, используемый системой «MGCom Tower Rotation».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Rotator</span>
<span><b>В BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Использование</b>Чтение: 1 · запись: 2</span>
<span><b>Графы</b><code>Server_ComTowerRotationGraph</code>, <code>Server_UpdateComTowerRotation</code>, <code>UpdateComTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get MGCom Tower Rotation Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">MGCom Tower Rotation</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set MGCom Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span>Set MGCom Tower Rotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MGCom Tower Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ejectingsocket ejecting socket tankcomponent|tower|maintower|bonenames name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|MainTower|BoneNames</span>
<div class="bp-auth-card__title"><code>EjectingSocket</code></div>
<p>Текстовый идентификатор «Ejecting Socket».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Name</span>
<span><b>В BP_Tank_Master</b>EjectingSocket</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Server_FiringGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Ejecting Socket Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Ejecting Socket</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="towerrotation tower rotation tankcomponent|tower|maintower|rotator rotator">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TankComponent|Tower|MainTower|Rotator</span>
<div class="bp-auth-card__title"><code>TowerRotation</code></div>
<p>Поворот, используемый системой «Tower Rotation».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Rotator</span>
<span><b>В BP_Tank_Master</b>Pitch=+0, Yaw=+0, Roll=+0</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>Server_SoundGraph</code>, <code>Server_TowerRotationGraph</code>, <code>Server_Update Tower Rotation</code>, <code>UpdateTowerRotation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="rotator" role="img" aria-label="Get Tower Rotation Blueprint variable" title="Rotator"><span class="bp-auth-var-node__name">Tower Rotation</span><span class="bp-auth-pin__dot" data-pin-type="rotator"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="rotator" role="img" aria-label="Set Tower Rotation Blueprint node"><div class="bp-auth-node__header"><span>Set Tower Rotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tower Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="down front spline point index down front spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>Down Front Spline Point Index</code></div>
<p>Числовой параметр «Down Front Spline Point Index».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>1</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Down Front Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Down Front Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="downrearsplinepointindex down rear spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>DownRearSplinePointIndex</code></div>
<p>Числовой параметр «Down Rear Spline Point Index».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>11</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Down Rear Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Down Rear Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="up front spline point index up front spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>Up Front Spline Point Index</code></div>
<p>Числовой параметр «Up Front Spline Point Index».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>2</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Up Front Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Up Front Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uprearsplinepointindex up rear spline point index track components|track maker|roller preferences|roller indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Indexes</span>
<div class="bp-auth-card__title"><code>UpRearSplinePointIndex</code></div>
<p>Числовой параметр «Up Rear Spline Point Index».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>10</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Up Rear Spline Point Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Up Rear Spline Point Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelbonename front wheel bone name track components|track maker|roller preferences|roller parameters name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>FrontWheelBoneName</code></div>
<p>Текстовый идентификатор «Front Wheel Bone Name».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Name</span>
<span><b>В BP_Tank_Master</b>RF_Wheel_00</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Front Wheel Bone Name Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Front Wheel Bone Name</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelradius front wheel radius track components|track maker|roller preferences|roller parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>FrontWheelRadius</code></div>
<p>Числовой параметр «Front Wheel Radius».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>26.1031</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Front Wheel Radius Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Front Wheel Radius</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelbonename rear wheel bone name track components|track maker|roller preferences|roller parameters name">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>RearWheelBoneName</code></div>
<p>Текстовый идентификатор «Rear Wheel Bone Name».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Name</span>
<span><b>В BP_Tank_Master</b>RB_Wheel_07</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Rear Wheel Bone Name Blueprint variable" title="Name"><span class="bp-auth-var-node__name">Rear Wheel Bone Name</span><span class="bp-auth-pin__dot" data-pin-type="name"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelradius rear wheel radius track components|track maker|roller preferences|roller parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>RearWheelRadius</code></div>
<p>Числовой параметр «Rear Wheel Radius».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>28.8204</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Rear Wheel Radius Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Rear Wheel Radius</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="topwheelradius top wheel radius track components|track maker|roller preferences|roller parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Roller Parameters</span>
<div class="bp-auth-card__title"><code>TopWheelRadius</code></div>
<p>Числовой параметр «Top Wheel Radius».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>10.0361</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Top Wheel Radius Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Top Wheel Radius</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelangularvelocity_l front wheel angular velocity l track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>FrontWheelAngularVelocity_L</code></div>
<p>Числовой параметр «Front Wheel Angular Velocity L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Front Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Front Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Front Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>Set Front Wheel Angular Velocity L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Front Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="frontwheelangularvelocity_r front wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>FrontWheelAngularVelocity_R</code></div>
<p>Числовой параметр «Front Wheel Angular Velocity R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Front Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Front Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Front Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>Set Front Wheel Angular Velocity R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Front Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="middlewheelangularvelocity_r middle wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>MiddleWheelAngularVelocity_R</code></div>
<p>Числовой параметр «Middle Wheel Angular Velocity R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Middle Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Middle Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Middle Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>Set Middle Wheel Angular Velocity R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Middle Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelangularvelocity_l rear wheel angular velocity l track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>RearWheelAngularVelocity_L</code></div>
<p>Числовой параметр «Rear Wheel Angular Velocity L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Rear Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Rear Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Rear Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>Set Rear Wheel Angular Velocity L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rear Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="rearwheelangularvelocity_r rear wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>RearWheelAngularVelocity_R</code></div>
<p>Числовой параметр «Rear Wheel Angular Velocity R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Rear Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Rear Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Rear Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>Set Rear Wheel Angular Velocity R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rear Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="topwheelangularvelocity_l top wheel angular velocity l track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>TopWheelAngularVelocity_L</code></div>
<p>Числовой параметр «Top Wheel Angular Velocity L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Top Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Top Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Top Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>Set Top Wheel Angular Velocity L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Top Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="topwheelangularvelocity_r top wheel angular velocity r track components|track maker|roller preferences|rollers velocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Roller Preferences|Rollers Velocity</span>
<div class="bp-auth-card__title"><code>TopWheelAngularVelocity_R</code></div>
<p>Числовой параметр «Top Wheel Angular Velocity R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Top Wheel Angular Velocity R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Top Wheel Angular Velocity R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Top Wheel Angular Velocity R Blueprint node"><div class="bp-auth-node__header"><span>Set Top Wheel Angular Velocity R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Top Wheel Angular Velocity R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uppersplinepointzpositionarray_l upper spline point zposition array l track components|track maker|sagging preferences|spline parameters array&lt;vector&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Sagging Preferences|Spline Parameters</span>
<div class="bp-auth-card__title"><code>UpperSplinePointZPositionArray_L</code></div>
<p>Рабочий список «Upper Spline Point ZPosition Array L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Vector&gt;</span>
<span><b>В BP_Tank_Master</b>X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Upper Spline Point ZPosition Array L Blueprint variable" title="Array&lt;Vector&gt;"><span class="bp-auth-var-node__name">Upper Spline Point ZPosition Array L</span><span class="bp-auth-pin__dot" data-pin-type="vector" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uppersplinepointzpositionarray_r upper spline point zposition array r track components|track maker|sagging preferences|spline parameters array&lt;vector&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Sagging Preferences|Spline Parameters</span>
<div class="bp-auth-card__title"><code>UpperSplinePointZPositionArray_R</code></div>
<p>Рабочий список «Upper Spline Point ZPosition Array R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Vector&gt;</span>
<span><b>В BP_Tank_Master</b>X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0, X=+0, Y=+0, Z=+0</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Upper Spline Point ZPosition Array R Blueprint variable" title="Array&lt;Vector&gt;"><span class="bp-auth-var-node__name">Upper Spline Point ZPosition Array R</span><span class="bp-auth-pin__dot" data-pin-type="vector" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="baseangledeg base angle deg track components|track maker|spline preferences|spline floats float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Floats</span>
<div class="bp-auth-card__title"><code>BaseAngleDeg</code></div>
<p>Числовой параметр «Base Angle Deg».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>90.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Base Angle Deg Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Base Angle Deg</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracktraceheight track trace height track components|track maker|spline preferences|spline floats float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Floats</span>
<div class="bp-auth-card__title"><code>TrackTraceHeight</code></div>
<p>Числовой параметр «Track Trace Height».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>40.0</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Track Trace Height Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Track Trace Height</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="absoluteendsplinepoint absolute end spline point track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>AbsoluteEndSplinePoint</code></div>
<p>Числовой параметр «Absolute End Spline Point».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>16</span>
<span><b>Использование</b>Чтение: 10 · запись: 2</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>SplineMirrorCopy</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Absolute End Spline Point Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Absolute End Spline Point</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="int" role="img" aria-label="Set Absolute End Spline Point Blueprint node"><div class="bp-auth-node__header"><span>Set Absolute End Spline Point</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Absolute End Spline Point</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="endsplinepoint end spline point track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>EndSplinePoint</code></div>
<p>Числовой параметр «End Spline Point».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>16</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get End Spline Point Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">End Spline Point</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="int" role="img" aria-label="Set End Spline Point Blueprint node"><div class="bp-auth-node__header"><span>Set End Spline Point</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">End Spline Point</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="physicssplinepointarray physics spline point array track components|track maker|spline preferences|spline indexes array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>PhysicsSplinePointArray</code></div>
<p>Рабочий список «Physics Spline Point Array».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Integer&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Physics Spline Point Array Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Physics Spline Point Array</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="startsplinepoint start spline point track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>StartSplinePoint</code></div>
<p>Числовой параметр «Start Spline Point».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>15</span>
<span><b>Использование</b>Чтение: 13 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>SplineMirrorCopy</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Start Spline Point Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Start Spline Point</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="supportindixesarray support indixes array track components|track maker|spline preferences|spline indexes array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>SupportIndixesArray</code></div>
<p>Рабочий список «Support Indixes Array».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Integer&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Support Indixes Array Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Support Indixes Array</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="suspendedindexes suspended indexes track components|track maker|spline preferences|spline indexes array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>SuspendedIndexes</code></div>
<p>Рабочий список «Suspended Indexes».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Integer&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Suspended Indexes Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Suspended Indexes</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheelsamount wheels amount track components|track maker|spline preferences|spline indexes integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Indexes</span>
<div class="bp-auth-card__title"><code>WheelsAmount</code></div>
<p>Числовой параметр «Wheels Amount».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>7</span>
<span><b>Использование</b>Чтение: 15 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>GetAvgWheelsAngularVelocity</code>, <code>SetDriveBrakeBySide</code>, <code>SetDriveTorqueBySide</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Wheels Amount Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Wheels Amount</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackhelpernames_l track helper names l track components|track maker|spline preferences|spline names array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Names</span>
<div class="bp-auth-card__title"><code>TrackHelperNames_L</code></div>
<p>Рабочий список «Track Helper Names L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Name&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Track Helper Names L Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Track Helper Names L</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackhelpernames_r track helper names r track components|track maker|spline preferences|spline names array&lt;name&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Names</span>
<div class="bp-auth-card__title"><code>TrackHelperNames_R</code></div>
<p>Рабочий список «Track Helper Names R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Name&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 5 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="name" role="img" aria-label="Get Track Helper Names R Blueprint variable" title="Array&lt;Name&gt;"><span class="bp-auth-var-node__name">Track Helper Names R</span><span class="bp-auth-pin__dot" data-pin-type="name" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="customtangent custom tangent track components|track maker|spline preferences|spline vectors vector">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Vectors</span>
<div class="bp-auth-card__title"><code>CustomTangent</code></div>
<p>Положение или координатное значение «Custom Tangent».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Vector</span>
<span><b>В BP_Tank_Master</b>X=+0, Y=+0, Z=+0</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Custom Tangent Blueprint variable" title="Vector"><span class="bp-auth-var-node__name">Custom Tangent</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="vector" role="img" aria-label="Set Custom Tangent Blueprint node"><div class="bp-auth-node__header"><span>Set Custom Tangent</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Custom Tangent</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Vector</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="physicssplinepointlocationarray physics spline point location array track components|track maker|spline preferences|spline vectors array&lt;vector&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Vectors</span>
<div class="bp-auth-card__title"><code>PhysicsSplinePointLocationArray</code></div>
<p>Рабочий список «Physics Spline Point Location Array».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Vector&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Physics Spline Point Location Array Blueprint variable" title="Array&lt;Vector&gt;"><span class="bp-auth-var-node__name">Physics Spline Point Location Array</span><span class="bp-auth-pin__dot" data-pin-type="vector" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackoffset track offset track components|track maker|spline preferences|spline vectors vector">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Spline Preferences|Spline Vectors</span>
<div class="bp-auth-card__title"><code>TrackOffset</code></div>
<p>Смещение «Track Offset».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Vector</span>
<span><b>В BP_Tank_Master</b>X=+0, Y=+0, Z=7.0</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="vector" role="img" aria-label="Get Track Offset Blueprint variable" title="Vector"><span class="bp-auth-var-node__name">Track Offset</span><span class="bp-auth-pin__dot" data-pin-type="vector"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackmeshoffset track mesh offset track components|track maker|track preferences|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Base Parameters</span>
<div class="bp-auth-card__title"><code>TrackMeshOffset</code></div>
<p>Смещение «Track Mesh Offset».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Track Mesh Offset Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Track Mesh Offset</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Track Mesh Offset Blueprint node"><div class="bp-auth-node__header"><span>Set Track Mesh Offset</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Track Mesh Offset</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracksplinelength track spline length track components|track maker|track preferences|base parameters float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Base Parameters</span>
<div class="bp-auth-card__title"><code>TrackSplineLength</code></div>
<p>Числовой параметр «Track Spline Length».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>1400.0</span>
<span><b>Использование</b>Чтение: 0 · запись: 1</span>
<span><b>Графы</b><code>Construct Spline Track</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="float" role="img" aria-label="Get Track Spline Length Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Track Spline Length</span><span class="bp-auth-pin__dot" data-pin-type="float"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="float" role="img" aria-label="Set Track Spline Length Blueprint node"><div class="bp-auth-node__header"><span>Set Track Spline Length</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Track Spline Length</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="constraint instances_l constraint instances l track components|track maker|track preferences|components array&lt;staticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>Constraint Instances_L</code></div>
<p>Рабочий список «Constraint Instances L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;StaticMeshComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpperSplinePointSagging</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Constraint Instances L Blueprint variable" title="Array&lt;StaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Constraint Instances L</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="constraint instances_r constraint instances r track components|track maker|track preferences|components array&lt;staticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>Constraint Instances_R</code></div>
<p>Рабочий список «Constraint Instances R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;StaticMeshComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpperSplinePointSagging</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Constraint Instances R Blueprint variable" title="Array&lt;StaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Constraint Instances R</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="splinetrack_l spline track l track components|track maker|track preferences|components splinecomponent">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>SplineTrack_L</code></div>
<p>Ссылка на <code>SplineComponent</code>, используемая как «Spline Track L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>SplineComponent</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 5 · запись: 1</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Spline Track L Blueprint variable" title="SplineComponent"><span class="bp-auth-var-node__name">Spline Track L</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set Spline Track L Blueprint node"><div class="bp-auth-node__header"><span>Set Spline Track L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Spline Track L</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">SplineComponent</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracksinstances_l tracks instances l track components|track maker|track preferences|components array&lt;instancedstaticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>TracksInstances_L</code></div>
<p>Рабочий список «Tracks Instances L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;InstancedStaticMeshComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Tracks Instances L Blueprint variable" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Tracks Instances L</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set Tracks Instances L Blueprint node"><div class="bp-auth-node__header"><span>Set Tracks Instances L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tracks Instances L</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="tracksinstances_r tracks instances r track components|track maker|track preferences|components array&lt;instancedstaticmeshcomponent&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>TracksInstances_R</code></div>
<p>Рабочий список «Tracks Instances R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;InstancedStaticMeshComponent&gt;</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>Server_TrackPhysGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Tracks Instances R Blueprint variable" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-var-node__name">Tracks Instances R</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set Tracks Instances R Blueprint node"><div class="bp-auth-node__header"><span>Set Tracks Instances R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tracks Instances R</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackmeshesamount track meshes amount track components|track maker|track preferences|index integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Index</span>
<div class="bp-auth-card__title"><code>TrackMeshesAmount</code></div>
<p>Числовой параметр «Track Meshes Amount».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 1</span>
<span><b>Графы</b><code>InstanceTracksCreation</code>, <code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Track Meshes Amount Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Track Meshes Amount</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="int" role="img" aria-label="Set Track Meshes Amount Blueprint node"><div class="bp-auth-node__header"><span>Set Track Meshes Amount</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Track Meshes Amount</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackonside track on side track components|track maker|track preferences|index integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Track Components|Track Maker|Track Preferences|Index</span>
<div class="bp-auth-card__title"><code>TrackOnSide</code></div>
<p>Числовой параметр «Track on Side».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>158</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>InstanceTracksCreation</code>, <code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Track on Side Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Track on Side</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldeltadistancel wheel delta distance l trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDeltaDistanceL</code></div>
<p>Числовой параметр «Wheel Delta Distance L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Delta Distance L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Delta Distance L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Delta Distance L Blueprint node"><div class="bp-auth-node__header"><span>Set Wheel Delta Distance L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Delta Distance L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldeltadistancer wheel delta distance r trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDeltaDistanceR</code></div>
<p>Числовой параметр «Wheel Delta Distance R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 2 · запись: 2</span>
<span><b>Графы</b><code>WheelMovCalculation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Delta Distance R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Delta Distance R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Delta Distance R Blueprint node"><div class="bp-auth-node__header"><span>Set Wheel Delta Distance R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Delta Distance R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldistancel wheel distance l trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDistanceL</code></div>
<p>Числовой параметр «Wheel Distance L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>10.0</span>
<span><b>Использование</b>Чтение: 3 · запись: 3</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Distance L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Distance L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Distance L Blueprint node"><div class="bp-auth-node__header"><span>Set Wheel Distance L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Distance L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="wheeldistancer wheel distance r trackcomponents|trackmaker|chassiscalculation float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|ChassisCalculation</span>
<div class="bp-auth-card__title"><code>WheelDistanceR</code></div>
<p>Числовой параметр «Wheel Distance R».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 3 · запись: 3</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Wheel Distance R Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Wheel Distance R</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Wheel Distance R Blueprint node"><div class="bp-auth-node__header"><span>Set Wheel Distance R</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Wheel Distance R</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="middlewheelangularvelocity_l middle wheel angular velocity l trackcomponents|trackmaker|roller preferences|rollersvelocity float">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Roller Preferences|RollersVelocity</span>
<div class="bp-auth-card__title"><code>MiddleWheelAngularVelocity_L</code></div>
<p>Числовой параметр «Middle Wheel Angular Velocity L».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Float</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 0 · запись: 2</span>
<span><b>Графы</b><code>Server_TrackPhysGraph</code>, <code>WheelMovCalculation</code></span>
</div>
<span class="bp-auth-badge bp-auth-badge--net">Replicated · без RepNotify</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="double" role="img" aria-label="Get Middle Wheel Angular Velocity L Blueprint variable" title="Float"><span class="bp-auth-var-node__name">Middle Wheel Angular Velocity L</span><span class="bp-auth-pin__dot" data-pin-type="double"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="double" role="img" aria-label="Set Middle Wheel Angular Velocity L Blueprint node"><div class="bp-auth-node__header"><span>Set Middle Wheel Angular Velocity L</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Middle Wheel Angular Velocity L</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="uppersplinepointarray upper spline point array trackcomponents|trackmaker|sagging preferences|spline parameters array&lt;integer&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Sagging Preferences|Spline Parameters</span>
<div class="bp-auth-card__title"><code>UpperSplinePointArray</code></div>
<p>Рабочий список «Upper Spline Point Array».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;Integer&gt;</span>
<span><b>В BP_Tank_Master</b>0, 3, 5, 7, 9, 11, 14</span>
<span><b>Использование</b>Чтение: 3 · запись: 0</span>
<span><b>Графы</b><code>Construct Spline Track</code>, <code>UpdateTracksLocation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Upper Spline Point Array Blueprint variable" title="Array&lt;Integer&gt;"><span class="bp-auth-var-node__name">Upper Spline Point Array</span><span class="bp-auth-pin__dot" data-pin-type="int" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackstaticmeshes track static meshes trackcomponents|trackmaker|track preferences|components array&lt;staticmesh&gt;">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Track Preferences|Components</span>
<div class="bp-auth-card__title"><code>TrackStaticMeshes</code></div>
<p>Рабочий список «Track Static Meshes».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Array&lt;StaticMesh&gt;</span>
<span><b>В BP_Tank_Master</b>-583, -584</span>
<span><b>Использование</b>Чтение: 2 · запись: 0</span>
<span><b>Графы</b><code>InstanceTracksCreation</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get Track Static Meshes Blueprint variable" title="Array&lt;StaticMesh&gt;"><span class="bp-auth-var-node__name">Track Static Meshes</span><span class="bp-auth-pin__dot" data-pin-type="object" data-pin-container="array"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="trackindex track index trackcomponents|trackmaker|track preferences||index integer">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">TrackComponents|TrackMaker|Track Preferences||Index</span>
<div class="bp-auth-card__title"><code>TrackIndex</code></div>
<p>Числовой параметр «Track Index».</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Integer</span>
<span><b>В BP_Tank_Master</b>101</span>
<span><b>Использование</b>Чтение: 1 · запись: 0</span>
<span><b>Графы</b><code>SetTracksTransform</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="int" role="img" aria-label="Get Track Index Blueprint variable" title="Integer"><span class="bp-auth-var-node__name">Track Index</span><span class="bp-auth-pin__dot" data-pin-type="int"></span></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="ui ui ui|components object">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">UI|Components</span>
<div class="bp-auth-card__title"><code>UI</code></div>
<p>Рабочее значение «UI» типа <code>Object</code>.</p>
<div class="bp-auth-meta">
<span><b>Тип</b>Object</span>
<span><b>В BP_Tank_Master</b>Наследуется / не сохранено</span>
<span><b>Использование</b>Чтение: 1 · запись: 1</span>
<span><b>Графы</b><code>EventGraph</code></span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node-pair"><div class="bp-auth-var-node bp-auth-var-node--get" data-node-value-type="object" role="img" aria-label="Get UI Blueprint variable" title="Object"><span class="bp-auth-var-node__name">UI</span><span class="bp-auth-pin__dot" data-pin-type="object"></span></div><div class="bp-auth-node bp-auth-node--setter" data-node-value-type="object" role="img" aria-label="Set UI Blueprint node"><div class="bp-auth-node__header"><span>Set UI</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="Object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">UI</span><span class="bp-auth-pin__type">Object</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="object" title="Object"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Object</span></div></div></div></div></div></div>
</article>
</div></section>

<section class="bp-auth-section" data-bp-section="functions">
<h2>Функции</h2>
Для каждой функции сначала разобрана её роль в BP_Tank_Master: внутренняя цепочка, изменяемое состояние и реальные места вызова. Визуальный блок ниже построен по настоящим `Function Entry` и `Function Result` и служит дополнением к объяснению, а не заменяет его.
<div class="bp-auth-grid">
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="userconstructionscript functions function   ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Functions</span>
<div class="bp-auth-card__title"><code>UserConstructionScript</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Подготавливает компоненты и исходные значения экземпляра при создании или изменении Blueprint в редакторе.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>При перестроении экземпляра проверяет, допустима ли редакторская инициализация, и передаёт управление в <code>Construct Spline Track</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>В результате исходные сплайны, вспомогательные точки и инстансы звеньев подготавливаются ещё до начала игры; отдельный ручной вызов этой функции не требуется.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>Construction Script Unreal</dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>4 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>2</span>
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
<span>Что делает</span>
<p>Обновляет положение элементов гусениц по состоянию подвески, колёс и рассчитанного сплайна.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Для каждой точки контура сопоставляет положение с сокетом или состоянием Chaos-колеса, выполняет трассировки поверхности, рассчитывает натяжение и провис, затем сглаживает переходы и обновляет позиции и тангенты сплайна. Внутри предусмотрены отдельные ветви для простой и constraint-физики, левой и правой стороны, верхней ветви и свободных участков.</p>
</div>
<div>
<span>Что получается</span>
<p>Функция является основным runtime-решателем формы гусеницы: после её выполнения <code>TrackPath</code> содержит актуальный замкнутый контур, по которому следующая стадия размещает визуальные звенья.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_TrackPhysGraph</code></dd>
<dt>Читает состояние</dt><dd><code>TrackPath</code>, <code>UpperSplinePointArray</code>, <code>StartSplinePoint</code>, <code>PhysicsSplinePointArray</code>, <code>TrackTraceHeight</code>, <code>PhysicsSplinePointLocationArray</code> <span class="bp-auth-more">+36 ещё</span></dd>
<dt>Изменяет состояние</dt><dd><code>Tension</code>, <code>Spline Element</code>, <code>Pawn WorldLocation</code>, <code>Pawn WorldRotation</code>, <code>Track Path Relative Location</code>, <code>N</code> <span class="bp-auth-more">+5 ещё</span></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>238 нод</span>
<span><b>Сигнатура</b>12 in · 1 out</span>
<span><b>Шаги-вызовы</b>53</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpdateTracksLocation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpdateTracksLocation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Array</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLeftSide?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SimulateConstraintsPhysics?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">UseASimpleSimulation?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EnableTension</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackOffset</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DeltaSecond</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="double" data-pin-container="array" title="Array&lt;Float&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CurrentSplineAngle</span><span class="bp-auth-pin__type">Array&lt;Float&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CurrentMidPointOfSheafNormalized</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MidPointOfSheafArray</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="wheelmovcalculation general logic|tank component|track component function server_trackphysgraph rearwheelradius frontwheelradius topwheelradius wheeldistancel wheeldistancer wheeldeltadistancer wheeldeltadistancel as chaos wheeled vehicle movement component wheels splinetrack_l blockrightside blockleftside autosplinetrack_r frontwheelangularvelocity_l frontwheelangularvelocity_r middlewheelangularvelocity_l middlewheelangularvelocity_r rearwheelangularvelocity_l topwheelangularvelocity_r topwheelangularvelocity_l rearwheelangularvelocity_r wheeldistancel wheeldistancer wheeldeltadistancer wheeldeltadistancel">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Tank Component|Track Component</span>
<div class="bp-auth-card__title"><code>WheelMovCalculation</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Вычисляет рабочие значения движения колёс, используемые системой гусениц.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Берёт среднюю угловую скорость групп колёс, их радиусы и длину сплайна, переводит вращение в пройденное расстояние и отдельно накапливает смещение левой и правой гусеницы. Полученные значения также передаются сетевым событиям колёсной дистанции и скорости.</p>
</div>
<div>
<span>Что получается</span>
<p>Обновляет фазу движения звеньев и рабочие угловые скорости передней, средней, задней и верхней групп; блокировка стороны учитывается до выдачи нового смещения.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_TrackPhysGraph</code></dd>
<dt>Читает состояние</dt><dd><code>RearWheelRadius</code>, <code>FrontWheelRadius</code>, <code>TopWheelRadius</code>, <code>WheelDistanceL</code>, <code>WheelDistanceR</code>, <code>WheelDeltaDistanceR</code> <span class="bp-auth-more">+7 ещё</span></dd>
<dt>Изменяет состояние</dt><dd><code>FrontWheelAngularVelocity_L</code>, <code>FrontWheelAngularVelocity_R</code>, <code>MiddleWheelAngularVelocity_L</code>, <code>MiddleWheelAngularVelocity_R</code>, <code>RearWheelAngularVelocity_L</code>, <code>TopWheelAngularVelocity_R</code> <span class="bp-auth-more">+6 ещё</span></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>65 нод</span>
<span><b>Сигнатура</b>2 in · 1 out</span>
<span><b>Шаги-вызовы</b>8</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="WheelMovCalculation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>WheelMovCalculation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coeficient</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="camerazoom general logic|camera|zoom function eventtick springarm targetarmlength zoom step maincamfovmultiple isgunnercameraswitch? gunnercamera gunnercamfovstep gunnercamfovmultiple fieldofview comtowercamera comtowercamfovstep comtowercamfovmultiple iscomtowercameraswitch? zoom bounds relativelocation gunnercamfovbounds comtowercamfovbounds temp current zoom targetarmlength gunnercamfov comtowercamfov">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Camera|Zoom</span>
<div class="bp-auth-card__title"><code>CameraZoom</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Обрабатывает изменение увеличения активной камеры с учётом заданных границ и шага.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Определяет активный режим обзора — внешний, наводчика или командира — и для него рассчитывает целевую длину Spring Arm либо FOV. Значение изменяется с заданным шагом, ограничивается соответствующим диапазоном и плавно применяется с учётом <code>Delta Seconds</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Меняет только параметры текущей камеры: внешний вид использует дистанцию Spring Arm, оптические каналы — поле зрения своих камер.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>EventTick</code></dd>
<dt>Читает состояние</dt><dd><code>SpringArm</code>, <code>TargetArmLength</code>, <code>Zoom Step</code>, <code>MainCamFOVMultiple</code>, <code>IsGunnerCameraSwitch?</code>, <code>GunnerCamera</code> <span class="bp-auth-more">+11 ещё</span></dd>
<dt>Изменяет состояние</dt><dd><code>Temp Current Zoom</code>, <code>TargetArmLength</code>, <code>GunnerCamFOV</code>, <code>ComTowerCamFOV</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>49 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>9</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="CameraZoom Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>CameraZoom</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="updatetowerrotation general logic|tankcomponent|tower function server_towerrotationgraph weaponaimsystem towerrotation maingunpitch">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|Tower</span>
<div class="bp-auth-card__title"><code>UpdateTowerRotation</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Обновляет наведение основной башни и орудия.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Запрашивает у <code>WeaponAimSystem</code> рассчитанные относительные повороты осей основной башни и орудия. Если включён новый профиль осей, сохраняет эти углы и отправляет их серверному событию; при legacy-режиме оставляет совместимый сетевой путь.</p>
</div>
<div>
<span>Что получается</span>
<p>Подготавливает единое состояние yaw/pitch основной установки, которое затем серверная функция применяет к переданным компонентам башни и пушки.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_TowerRotationGraph</code></dd>
<dt>Читает состояние</dt><dd><code>WeaponAimSystem</code></dd>
<dt>Изменяет состояние</dt><dd><code>TowerRotation</code>, <code>MainGunPitch</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>8 нод</span>
<span><b>Сигнатура</b>3 in · 1 out</span>
<span><b>Шаги-вызовы</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpdateTowerRotation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpdateTowerRotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tower</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGun</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="calculateprojectiledirection general logic|tankcomponent|firesystemcomponent function server_firesystem maingunfiresys smokeshallfiresys  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|FireSystemComponent</span>
<div class="bp-auth-card__title"><code>CalculateProjectileDirection</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Возвращает направление выстрела от выбранного сокета и меша с учётом текущего наведения.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Строит луч из выбранного сокета по его forward-направлению, выполняет трассировку и выбирает точку попадания либо конец луча. Из положения сокета и выбранной цели собирает итоговый transform выстрела.</p>
</div>
<div>
<span>Что получается</span>
<p>Возвращаемый <code>ProjetileDirection</code> используется и основной пушкой, и дымовыми гранатомётами, поэтому направление снаряда и визуальное наведение опираются на одну расчётную точку.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_FireSystem</code>, <code>MainGunFireSys</code>, <code>SmokeShallFireSys</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>14 нод</span>
<span><b>Сигнатура</b>3 in · 2 out</span>
<span><b>Шаги-вызовы</b>8</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="CalculateProjectileDirection Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>CalculateProjectileDirection</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SocketName</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="transform" title="Transform"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ProjetileDirection</span><span class="bp-auth-pin__type">Transform</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SkeletalMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MeshForCalculatePD</span><span class="bp-auth-pin__type">SkeletalMeshComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="machineguncoolingcalculation general logic|tankcomponent|machinegun function eventtick server_ammostate server_ammostate">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|MachineGun</span>
<div class="bp-auth-card__title"><code>MachineGunCoolingCalculation</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Рассчитывает охлаждение и состояние перегрева пулемёта.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Уменьшает поле нагрева пулемёта в <code>Server_AmmoState</code> пропорционально времени кадра и ограничивает результат диапазоном 0–1.</p>
</div>
<div>
<span>Что получается</span>
<p>Даже когда пулемёт не стреляет, его серверное состояние постепенно возвращается к холодному; проверки перегрева в графе стрельбы читают уже это обновлённое значение.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>EventTick</code></dd>
<dt>Читает состояние</dt><dd><code>Server_AmmoState</code></dd>
<dt>Изменяет состояние</dt><dd><code>Server_AmmoState</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>8 нод</span>
<span><b>Сигнатура</b>2 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="MachineGunCoolingCalculation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>MachineGunCoolingCalculation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DeltaSeconds</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_firesystem server logic|tankcomponent|firesystemcomponent function maingunfiresys machinegunfiresys projectille momentumvalue isapfsds? shellprojectille momentummesh ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic|TankComponent|FireSystemComponent</span>
<div class="bp-auth-card__title"><code>Server_FireSystem</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Серверная точка входа для логики стрельбы и проверки доступности оружия.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>На серверной стороне получает transform направления из <code>CalculateProjectileDirection</code>, выбирает переданный класс снаряда и использует сокеты меша как точку появления. Отдельно преобразует направление отдачи и прикладывает к заданному компоненту угловой импульс с указанной величиной.</p>
</div>
<div>
<span>Что получается</span>
<p>Создаёт авторитетный результат выстрела и физическую отдачу; локальные звук, вспышка и наземный эффект запускаются отдельно через <code>Client_FireSystem</code>.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>MainGunFireSys</code>, <code>MachineGunFireSys</code></dd>
<dt>Читает состояние</dt><dd><code>Projectille</code>, <code>MomentumValue</code>, <code>IsAPFSDS?</code>, <code>ShellProjectille</code>, <code>MomentumMesh</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>42 нод</span>
<span><b>Сигнатура</b>10 in · 1 out</span>
<span><b>Шаги-вызовы</b>17</span>
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
<span>Что делает</span>
<p>Выполняет трассировку прицела и получает точку, которую нужно показать в интерфейсе.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Выбирает источник прицеливания по активной камере и режимам свободного обзора, баллистического вычислителя, захвата цели и двойной установки. Затем обновляет источники наведения в <code>WeaponAimSystem</code> и передаёт новое состояние интерфейсу через <code>OnUIStateChanged</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Поддерживает экранную точку прицеливания и данные оружейной системы синхронными с тем каналом наблюдения, которым сейчас пользуется игрок.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>EventTick</code></dd>
<dt>Читает состояние</dt><dd><code>MainCamera</code>, <code>AimCube</code>, <code>CommanderAimCube</code>, <code>GlobalTraceLenght</code>, <code>FreeCamSwitch</code>, <code>IsGunnerCameraSwitch?</code> <span class="bp-auth-more">+5 ещё</span></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>21 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Trace Of Weapon UIAim Calculation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Trace Of Weapon UIAim Calculation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="rotatevectoraroundaxis global function updatetrackslocation  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Global</span>
<div class="bp-auth-card__title"><code>RotateVectorAroundAxis</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Поворачивает вектор вокруг заданной оси и возвращает результат.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Переводит точку в локальное пространство относительно pivot, поворачивает полученный вектор заданным rotator и преобразует его обратно.</p>
</div>
<div>
<span>Что получается</span>
<p>Возвращает мировую позицию после вращения; в системе гусениц используется для геометрических смещений вокруг опорных точек без изменения исходного pivot.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>8 нод</span>
<span><b>Сигнатура</b>4 in · 2 out</span>
<span><b>Шаги-вызовы</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="RotateVectorAroundAxis Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>RotateVectorAroundAxis</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Pivot Vector</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Return Value</span><span class="bp-auth-pin__type">Vector</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Vector to Rotate</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rotation</span><span class="bp-auth-pin__type">Rotator</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="updatecomtowerrotation general logic|tankcomponent|machinegun function server_comtowerrotationgraph weaponaimsystem machiegunpitch mgcomtowerrotation ctcomtowerrotation">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|MachineGun</span>
<div class="bp-auth-card__title"><code>UpdateComTowerRotation</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Обновляет поворот командирской башенки и связанного вооружения.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Получает из <code>WeaponAimSystem</code> относительные углы вспомогательной установки, разделяет yaw командирской башенки и pitch пулемёта и учитывает legacy-сетевой режим. Рассчитанные углы передаются серверному событию.</p>
</div>
<div>
<span>Что получается</span>
<p>Подготавливает три согласованных значения — поворот пулемётной башни, наклон пулемёта и поворот командирской части — для последующего применения на сервере.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_ComTowerRotationGraph</code></dd>
<dt>Читает состояние</dt><dd><code>WeaponAimSystem</code></dd>
<dt>Изменяет состояние</dt><dd><code>MachieGunPitch</code>, <code>MGComTowerRotation</code>, <code>CTComTowerRotation</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>10 нод</span>
<span><b>Сигнатура</b>2 in · 1 out</span>
<span><b>Шаги-вызовы</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpdateComTowerRotation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpdateComTowerRotation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ComTower</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="getuppersplinepointzposition general logic|track components|track maker function construct spline track splinepointarray ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>GetUpperSplinePointZPosition</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Вычисляет высоту точки верхней ветви гусеницы.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Проходит по переданным индексам верхней ветви и читает их положения из <code>TrackPath</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Заполняет рабочий массив высот/позиций верхних точек, который далее нужен построению и восстановлению формы верхней ветви.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Construct Spline Track</code></dd>
<dt>Читает состояние</dt><dd><code>SplinePointArray</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>17 нод</span>
<span><b>Сигнатура</b>3 in · 1 out</span>
<span><b>Шаги-вызовы</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="GetUpperSplinePointZPosition Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>GetUpperSplinePointZPosition</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Array</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="splinemirrorcopy general logic|track components|track maker function construct spline track splinetocopy newsplinelocal currentpointindex startsplinepoint absoluteendsplinepoint newsplinelocal currentpointindex">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>SplineMirrorCopy</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Копирует форму сплайна на противоположную сторону с зеркальным преобразованием.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Создаёт во втором сплайне то же количество точек, что у источника, зеркалит их локальное положение и переносит rotation, тип точки и входящий/исходящий тангенты с разворотом порядка индексов.</p>
</div>
<div>
<span>Что получается</span>
<p>Возвращает готовый зеркальный контур противоположной стороны и замыкает его; исходный сплайн при этом остаётся эталоном.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Construct Spline Track</code></dd>
<dt>Читает состояние</dt><dd><code>SplineToCopy</code>, <code>NewSplineLocal</code>, <code>CurrentPointIndex</code>, <code>StartSplinePoint</code>, <code>AbsoluteEndSplinePoint</code></dd>
<dt>Изменяет состояние</dt><dd><code>NewSplineLocal</code>, <code>CurrentPointIndex</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>58 нод</span>
<span><b>Сигнатура</b>2 in · 2 out</span>
<span><b>Шаги-вызовы</b>30</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SplineMirrorCopy Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SplineMirrorCopy</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SplineToCopy</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">NewSpline</span><span class="bp-auth-pin__type">SplineComponent</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="instancetrackscreation general logic|track components|track maker function construct spline track trackpathtoattach trackstaticmeshes trackmeshesamount trackinstanceslocal trackonside currentinstance currentstaticmesh isleftside? trackmeshesamount currentinstance currentstaticmesh">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>InstanceTracksCreation</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Создаёт и размещает инстансы звеньев гусеницы по рассчитанному контуру.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Создаёт и прикрепляет набор <code>InstancedStaticMeshComponent</code>, назначает каждому компоненту соответствующий меш башмака и добавляет нужное количество экземпляров. Сторона машины влияет на используемое смещение и ориентацию.</p>
</div>
<div>
<span>Что получается</span>
<p>Возвращает массив/компонент инстансов, который <code>SetTracksTransform</code> затем обновляет по сплайну без создания отдельных Actor для каждого звена.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Construct Spline Track</code></dd>
<dt>Читает состояние</dt><dd><code>TrackPathToAttach</code>, <code>TrackStaticMeshes</code>, <code>TrackMeshesAmount</code>, <code>TrackInstancesLocal</code>, <code>TrackOnSide</code>, <code>CurrentInstance</code> <span class="bp-auth-more">+2 ещё</span></dd>
<dt>Изменяет состояние</dt><dd><code>TrackMeshesAmount</code>, <code>CurrentInstance</code>, <code>CurrentStaticMesh</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>37 нод</span>
<span><b>Сигнатура</b>3 in · 2 out</span>
<span><b>Шаги-вызовы</b>10</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="InstanceTracksCreation Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>InstanceTracksCreation</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPathToAttach</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TracksInstances</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLeftSide?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="settrackstransform general logic|tank component|track component function server_trackphysgraph trackinstancecurrent intervalamongtracks chassiscurrentdistance trackpathlength trackonside tracksamountbeforesplineend trackmeshesamount trackinstances trackmeshoffset trackindex trackpath currenttrackdistance trackpathlength intervalamongtracks tracksamountbeforesplineend chassiscurrentdistance trackinstancecurrent currenttrackdistance trackmeshoffset">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Tank Component|Track Component</span>
<div class="bp-auth-card__title"><code>SetTracksTransform</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Применяет вычисленное преобразование к выбранному звену гусеницы.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Считает длину контура и равномерный интервал между звеньями, добавляет накопленную дистанцию движения шасси и циклически оборачивает её на конце сплайна. Для каждого экземпляра макрос <code>CalculateTruckTransform</code> получает позицию и ориентацию, после чего вызывается <code>Update Instance Transform</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Перемещает все визуальные башмаки вдоль уже рассчитанной формы гусеницы и сохраняет текущую фазу между кадрами.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_TrackPhysGraph</code></dd>
<dt>Читает состояние</dt><dd><code>TrackInstanceCurrent</code>, <code>IntervalAmongTracks</code>, <code>ChassisCurrentDistance</code>, <code>TrackPathLength</code>, <code>TrackOnSide</code>, <code>TracksAmountBeforeSplineEnd</code> <span class="bp-auth-more">+6 ещё</span></dd>
<dt>Изменяет состояние</dt><dd><code>TrackPathLength</code>, <code>IntervalAmongTracks</code>, <code>TracksAmountBeforeSplineEnd</code>, <code>ChassisCurrentDistance</code>, <code>TrackInstanceCurrent</code>, <code>CurrentTrackDistance</code> <span class="bp-auth-more">+1 ещё</span></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>65 нод</span>
<span><b>Сигнатура</b>4 in · 1 out</span>
<span><b>Шаги-вызовы</b>16</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SetTracksTransform Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SetTracksTransform</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="object" data-pin-container="array" title="Array&lt;InstancedStaticMeshComponent&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackInstances</span><span class="bp-auth-pin__type">Array&lt;InstancedStaticMeshComponent&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ChassisDistance</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="constructrear|frontsplinepoint general logic|track components|track maker function old mesh ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>ConstructRear|FrontSplinePoint</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Строит переходные точки сплайна у переднего или заднего колеса.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>От положения указанного сокета колеса и его радиуса вычисляет две переходные точки — нижнюю и верхнюю; <code>InvertDownAxis</code> меняет сторону нижнего смещения для переднего/заднего варианта.</p>
</div>
<div>
<span>Что получается</span>
<p>Записывает обе позиции непосредственно в <code>TrackPath</code>, формируя соединение обвода концевого колеса с прямыми ветвями.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Old</code></dd>
<dt>Читает состояние</dt><dd><code>Mesh</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>11 нод</span>
<span><b>Сигнатура</b>7 in · 1 out</span>
<span><b>Шаги-вызовы</b>6</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="ConstructRear|FrontSplinePoint Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>ConstructRear|FrontSplinePoint</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DownRearSplinePointIndex</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">UpRearSplinePointIndex</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="name" title="Name"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InSocketName</span><span class="bp-auth-pin__type">Name</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">WhellRadius</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InvertDownAxis</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="uppersplinepointsagging general logic|track components|track maker function updatetrackslocation vehiclemovementcomponent constraint instances_r relativelocation constraint instances_l ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>UpperSplinePointSagging</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Рассчитывает провис верхней ветви между опорными точками.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Для одной точки верхней ветви вычисляет прогиб между началом и концом участка. В расчёт входят натяжение, доля гусеницы на земле, скорость/направление машины, ограничения провиса и, при включённой constraint-физике, относительное движение физических помощников.</p>
</div>
<div>
<span>Что получается</span>
<p>Записывает скорректированную высоту точки в сплайн; последовательный вызов для массива точек формирует плавную, реагирующую на движение верхнюю ветвь.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Читает состояние</dt><dd><code>VehicleMovementComponent</code>, <code>Constraint Instances_R</code>, <code>RelativeLocation</code>, <code>Constraint Instances_L</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>35 нод</span>
<span><b>Сигнатура</b>13 in · 1 out</span>
<span><b>Шаги-вызовы</b>14</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="UpperSplinePointSagging Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>UpperSplinePointSagging</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" data-pin-container="array" title="Array&lt;Vector&gt;"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Array</span><span class="bp-auth-pin__type">Array&lt;Vector&gt;</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Element</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Index</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StartSplinePoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndSplinePoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AmountOfTrackOnTheGround</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MultiplyingSlackDownwards</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MultiplyingSlackUpwards</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLeftSide?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SimulateConstraintsPhysics?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DisableTension?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="constructsimulativepoints general logic|track components|track maker function construct spline track mesh ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Track Components|Track Maker</span>
<div class="bp-auth-card__title"><code>ConstructSimulativePoints</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Формирует дополнительные точки, используемые симуляцией гусеницы.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Создаёт скрытые Static Mesh-компоненты в выбранной точке сплайна, прикрепляет их к шасси и настраивает физическую симуляцию и constraint между соседними помощниками. Макрос <code>GameMode</code> отделяет редакторское построение от игрового режима.</p>
</div>
<div>
<span>Что получается</span>
<p>Возвращает физические точки-помощники, положение которых затем может участвовать в constraint-ветви расчёта гусеницы.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Construct Spline Track</code></dd>
<dt>Читает состояние</dt><dd><code>Mesh</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>17 нод</span>
<span><b>Сигнатура</b>3 in · 2 out</span>
<span><b>Шаги-вызовы</b>11</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="ConstructSimulativePoints Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>ConstructSimulativePoints</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">PointIndex</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="object" title="StaticMeshComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StaticMeshArray</span><span class="bp-auth-pin__type">StaticMeshComponent</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="createdynamicmi general logic|tankcomponent|micomponent function server_damage midynamics midynamics">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|MIComponent</span>
<div class="bp-auth-card__title"><code>CreateDynamicMI</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Создаёт динамические экземпляры материалов, которыми Blueprint управляет во время игры.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Проходит по всем слотам материала переданного <code>PrimitiveComponent</code>, создаёт для каждого Dynamic Material Instance и сохраняет полученные ссылки.</p>
</div>
<div>
<span>Что получается</span>
<p>После вызова Blueprint может менять параметры повреждения и другие runtime-эффекты, не затрагивая исходные Material Instance.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_Damage</code></dd>
<dt>Читает состояние</dt><dd><code>MIDynamics</code></dd>
<dt>Изменяет состояние</dt><dd><code>MIDynamics</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>9 нод</span>
<span><b>Сигнатура</b>2 in · 1 out</span>
<span><b>Шаги-вызовы</b>4</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="CreateDynamicMI Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>CreateDynamicMI</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="PrimitiveComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MIMesh</span><span class="bp-auth-pin__type">PrimitiveComponent</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="setdrivetorquebyside general logic|controls function server_separatemovement dev wheelsamount as chaos wheeled vehicle movement component ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Controls</span>
<div class="bp-auth-card__title"><code>SetDriveTorqueBySide</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Передаёт тяговый момент на выбранную сторону машины.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>По количеству колёс выбирает индексы левой либо правой стороны, умножает входной момент на заданные коэффициенты и вызывает <code>Set Drive Torque</code> для каждого колеса этой стороны.</p>
</div>
<div>
<span>Что получается</span>
<p>Даёт раздельное управление тягой бортов, используемое экспериментальным графом танкового поворота.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_SeparateMovement DEV</code></dd>
<dt>Читает состояние</dt><dd><code>WheelsAmount</code>, <code>As Chaos Wheeled Vehicle Movement Component</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>13 нод</span>
<span><b>Сигнатура</b>5 in · 1 out</span>
<span><b>Шаги-вызовы</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SetDriveTorqueBySide Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SetDriveTorqueBySide</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Left Side?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DriveTorque</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DriveTorqueMultiply</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TurnGerarRatio</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="setdrivebrakebyside general logic|controls function server_separatemovement dev wheelsamount as chaos wheeled vehicle movement component ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|Controls</span>
<div class="bp-auth-card__title"><code>SetDriveBrakeBySide</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Передаёт тормозное усилие на выбранную сторону машины.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Аналогично тяговой функции выбирает колёса одного борта, рассчитывает итоговый тормозной момент и применяет <code>Set Brake Torque</code> к каждому из них.</p>
</div>
<div>
<span>Что получается</span>
<p>Позволяет замедлять левую и правую стороны независимо при раздельной схеме управления.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_SeparateMovement DEV</code></dd>
<dt>Читает состояние</dt><dd><code>WheelsAmount</code>, <code>As Chaos Wheeled Vehicle Movement Component</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>13 нод</span>
<span><b>Сигнатура</b>5 in · 1 out</span>
<span><b>Шаги-вызовы</b>3</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="SetDriveBrakeBySide Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>SetDriveBrakeBySide</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Is Left Side?</span><span class="bp-auth-pin__type">Boolean</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">DriveTorque</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TorqueMultiply</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TurnGerarRatio</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="getavgwheelsangularvelocity general logic|tankcomponent|trackcomponent function wheelmovcalculation as chaos wheeled vehicle movement component wheels wheelsamount avgl avgr avgl avgr">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic|TankComponent|TrackComponent</span>
<div class="bp-auth-card__title"><code>GetAvgWheelsAngularVelocity</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Возвращает среднюю угловую скорость выбранной группы колёс.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Проверяет колёсные объекты, суммирует их угловые скорости отдельно для левой и правой группы, нормализует результат по количеству и применяет входной коэффициент.</p>
</div>
<div>
<span>Что получается</span>
<p>Возвращает две усреднённые скорости и одновременно обновляет рабочие <code>AvgL</code>/<code>AvgR</code>; <code>WheelMovCalculation</code> использует их для движения гусениц.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>WheelMovCalculation</code></dd>
<dt>Читает состояние</dt><dd><code>As Chaos Wheeled Vehicle Movement Component</code>, <code>Wheels</code>, <code>WheelsAmount</code>, <code>AvgL</code>, <code>AvgR</code></dd>
<dt>Изменяет состояние</dt><dd><code>AvgL</code>, <code>AvgR</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>34 нод</span>
<span><b>Сигнатура</b>2 in · 3 out</span>
<span><b>Шаги-вызовы</b>6</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="GetAvgWheelsAngularVelocity Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>GetAvgWheelsAngularVelocity</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coeficient</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AvgWheelsAngularVelocityL</span><span class="bp-auth-pin__type">Float</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AvgWheelsAngularVelocityR</span><span class="bp-auth-pin__type">Float</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="server_update tower rotation server logic function server_towerrotationgraph towerrotation maingunpitch ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Server Logic</span>
<div class="bp-auth-card__title"><code>Server_Update Tower Rotation</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Передаёт на сервер новое состояние наведения основной башни.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Получает подготовленные повороты основной башни и орудия и применяет их как relative rotation к переданным Scene Component.</p>
</div>
<div>
<span>Что получается</span>
<p>Это серверная стадия наведения: она превращает сетевое состояние углов в фактический transform компонентов.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_TowerRotationGraph</code></dd>
<dt>Читает состояние</dt><dd><code>TowerRotation</code>, <code>MainGunPitch</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>5 нод</span>
<span><b>Сигнатура</b>3 in · 1 out</span>
<span><b>Шаги-вызовы</b>2</span>
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
<span>Что делает</span>
<p>Передаёт на сервер новое состояние командирской башенки.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Применяет серверный поворот командирской установки; дополнительный select учитывает конфигурацию сменного пулемётного меша.</p>
</div>
<div>
<span>Что получается</span>
<p>Обновляет фактический relative rotation вспомогательной башни на авторитетной стороне.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Server_ComTowerRotationGraph</code></dd>
<dt>Читает состояние</dt><dd><code>MGComTowerRotation</code>, <code>CTComTowerRotation</code>, <code>MG_Mesh_Change</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>2 in · 1 out</span>
<span><b>Шаги-вызовы</b>2</span>
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
<span>Что делает</span>
<p>Служебный серверный граф экспериментального раздельного управления движением.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Преобразует продольный ввод и yaw в независимые команды левого и правого борта. По знаку и величине ввода выбирает тягу либо торможение, вызывает <code>SetDriveTorqueBySide</code>/<code>SetDriveBrakeBySide</code> и выставляет блокировку стороны.</p>
</div>
<div>
<span>Что получается</span>
<p>Это development-граф альтернативного танкового управления; штатная колёсная схема может обходить его полностью.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>Client_InputGraph</code>, <code>Server_Input</code></dd>
<dt>Читает состояние</dt><dd><code>MaxTorque</code>, <code>ForwardAxis</code>, <code>VehicleMovementComponent</code>, <code>SeparateMovement</code></dd>
<dt>Изменяет состояние</dt><dd><code>BlockRightSide</code>, <code>BlockLeftSide</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>56 нод</span>
<span><b>Сигнатура</b>3 in · 1 out</span>
<span><b>Шаги-вызовы</b>17</span>
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
<span>Что делает</span>
<p>Собирает замкнутый контур гусеницы из колёс, переходов, верхней и нижней ветвей.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Собирает первоначальный контур левой гусеницы, вычисляет верхние точки и тангенты, создаёт зеркальный правый сплайн, инстансы звеньев и при необходимости физические точки-помощники.</p>
</div>
<div>
<span>Что получается</span>
<p>Формирует все постоянные компоненты и массивы, которые runtime-графы затем только перемещают; запускается из Construction Script.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>UserConstructionScript</code></dd>
<dt>Читает состояние</dt><dd><code>UpperSplinePointArray</code>, <code>SplineTrack_L</code>, <code>Constraint Instances_R</code>, <code>Constraint Instances_L</code>, <code>UpperSplinePointZPositionArray_R</code>, <code>UpperSplinePointZPositionArray_L</code> <span class="bp-auth-more">+3 ещё</span></dd>
<dt>Изменяет состояние</dt><dd><code>SplineTrack_L</code>, <code>TracksInstances_L</code>, <code>TracksInstances_R</code>, <code>TrackSplineLength</code>, <code>CustomTangent</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>45 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>11</span>
</div>

</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Construct Spline Track Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Construct Spline Track</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="client_firesystem general logic function maingunfiresys machinegunfiresys  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">General Logic</span>
<div class="bp-auth-card__title"><code>Client_FireSystem</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Клиентская часть реакции на выстрел: визуальные и локальные эффекты после серверного решения.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>На клиенте прикрепляет Niagara-вспышку к указанному сокету, создаёт наземный эффект в рассчитанной точке и проигрывает переданный Audio Component.</p>
</div>
<div>
<span>Что получается</span>
<p>Отделяет визуально-звуковую реакцию от авторитетного появления снаряда: сервер решает факт выстрела, клиент показывает его эффекты.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>MainGunFireSys</code>, <code>MachineGunFireSys</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>5 нод</span>
<span><b>Сигнатура</b>8 in · 1 out</span>
<span><b>Шаги-вызовы</b>3</span>
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
<span>Что делает</span>
<p>Обновляет локальное состояние и интерфейс после репликации боекомплекта.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Unreal вызывает функцию после получения нового реплицированного <code>Server_AmmoState</code>; граф передаёт изменение в общий <code>Server_HandleAmmoStateChanged</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Все подписчики боекомплекта и UI обновляются через одну точку, независимо от того, был ли расход, перезарядка или пополнение.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>2 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
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
<span>Что делает</span>
<p>Реагирует на репликацию состояния перегрева пулемёта.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Копирует реплицированный серверный флаг перегрева в клиентское состояние и вызывает <code>OnUIStateChanged</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Локальные эффекты и интерфейс видят актуальный перегрев сразу после сетевого обновления.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>Server_IsMachineGunOverHeatting?</code></dd>
<dt>Изменяет состояние</dt><dd><code>Client_IsMachineGunOverHeatting?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
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
<span>Что делает</span>
<p>Реагирует на репликацию готовности основного орудия.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Переносит серверную готовность главного орудия в клиентский флаг и уведомляет UI.</p>
</div>
<div>
<span>Что получается</span>
<p>Кнопки, индикаторы и локальная логика получают единое состояние готовности после репликации.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>Server_IsMainGunReloaded?</code></dd>
<dt>Изменяет состояние</dt><dd><code>Client_IsMainGunReloaded?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
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
<span>Что делает</span>
<p>Запускает локальную реакцию после репликации анимации выброса гильзы.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Копирует реплицированный триггер выброса гильзы в клиентскую переменную анимации.</p>
</div>
<div>
<span>Что получается</span>
<p>Клиентская анимация запускается тем же состоянием, которое подтвердил серверный граф стрельбы.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>Server_EjectionAnimPlay</code></dd>
<dt>Изменяет состояние</dt><dd><code>Client_EjectionAnimPlay</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>5 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>0</span>
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
<span>Что делает</span>
<p>Реагирует на репликацию готовности пулемёта.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Копирует серверный флаг готовности пулемёта в клиентское состояние и вызывает <code>OnUIStateChanged</code>.</p>
</div>
<div>
<span>Что получается</span>
<p>Интерфейс и локальные реакции используют подтверждённую сервером готовность, а не собственный таймер.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>Server_IsMachineGunReloaded?</code></dd>
<dt>Изменяет состояние</dt><dd><code>Client_IsMachineGunReloaded?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
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
<span>Что делает</span>
<p>Реагирует на репликацию готовности дымовых гранатомётов.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Копирует реплицированную готовность дымовых гранатомётов в клиентский флаг и уведомляет UI.</p>
</div>
<div>
<span>Что получается</span>
<p>Состояние пуска дымовых гранат остаётся одинаковым у сервера и владельца машины.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>Server_IsSmokeShellReloaded?</code></dd>
<dt>Изменяет состояние</dt><dd><code>Client_IsSmokeShellReloaded?</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
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
<span>Что делает</span>
<p>Синхронизирует локальную последовательность запуска двигателя с сервером.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>По реплицированному признаку старта выбирает набор обычных или внутренних звуков, назначает их Audio Component, запускает либо плавно вводит звук двигателя и голос экипажа.</p>
</div>
<div>
<span>Что получается</span>
<p>Каждый клиент воспроизводит одну и ту же фазу запуска/остановки двигателя после изменения серверного состояния.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>RStopEngine</code>, <code>StopEngine</code>, <code>CrewSound</code>, <code>RStartEngine</code>, <code>StartEngine</code>, <code>Server_StartEngineProcess</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>15 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>6</span>
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
<span>Что делает</span>
<p>Реагирует на репликацию задержки включения двигателя.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>По текущей фазе <code>Server_StartEngineProcess</code> выставляет клиентский флаг задержки включения двигателя.</p>
</div>
<div>
<span>Что получается</span>
<p>Разрешение локальных частиц и звуков двигателя переключается только после подтверждённой сервером задержки.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd>репликация Unreal (автоматически)</dd>
<dt>Читает состояние</dt><dd><code>Server_StartEngineProcess</code></dd>
<dt>Изменяет состояние</dt><dd><code>Client_EngineOnDelay</code></dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>5 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>0</span>
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
<span>Что делает</span>
<p>На сервере обрабатывает изменение боекомплекта и рассылает новое состояние подписчикам.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Разбирает текущий <code>Server_AmmoState</code>, вызывает <code>OnAmmoChanged</code> с его значениями и проверяет, принадлежит ли Pawn локальному игроку.</p>
</div>
<div>
<span>Что получается</span>
<p>Сводит расход, перезарядку, пополнение и RepNotify к одному уведомлению, на которое могут подписаться HUD и другие Blueprint-системы.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Запускается из</dt><dd><code>OnRep_Server_AmmoState</code>, <code>Ammo Machine Gun Replenish</code>, <code>Smoke Shall Replenish</code>, <code>MainGunFireSys</code>, <code>MachineGunFireSys</code> <span class="bp-auth-more">+2 ещё</span></dd>
<dt>Читает состояние</dt><dd><code>Server_AmmoState</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>1 in · 1 out</span>
<span><b>Шаги-вызовы</b>1</span>
</div>
<span class="bp-auth-badge">Server</span>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--function" role="img" aria-label="Server_HandleAmmoStateChanged Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">ƒ</span><span>Server_HandleAmmoStateChanged</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name"></span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
</div></section>

<section class="bp-auth-section" data-bp-section="macros">
<h2>Макросы</h2>
Описание показывает, зачем макрос существует в проекте и какую повторяющуюся Blueprint-логику он сворачивает. Пины взяты из реальных туннелей `Inputs` и `Outputs`.
<div class="bp-auth-grid">
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="value change tracker macro gun rotation sound tower rotation sound  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>Value Change Tracker</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Сравнивает текущее значение с предыдущим и сообщает, произошло ли изменение.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>При <code>Setup</code> запоминает исходное wildcard-значение. На входе <code>Check Change</code> ищет сохранённую пару, сравнивает новое значение с предыдущим и разводит выполнение по выходам <code>Value Changed</code>/<code>Value not Changed</code>, одновременно возвращая старое и новое значения.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>Используется звуками поворота башни и орудия, чтобы запускать или гасить моторный звук только при реальном изменении угла, а не каждый Tick.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>Gun Rotation Sound</code>, <code>Tower Rotation Sound</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>24 нод</span>
<span><b>Сигнатура</b>4 in · 5 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="Value Change Tracker Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>Value Change Tracker</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Setup</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Setup Complete</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Value</span><span class="bp-auth-pin__type">Wildcard</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Value Not Changed</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Check Change</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Value Changed</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Check Value</span><span class="bp-auth-pin__type">Wildcard</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Old Value</span><span class="bp-auth-pin__type">Wildcard</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="wildcard" title="Wildcard"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">New Value</span><span class="bp-auth-pin__type">Wildcard</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="calculatetrucktransform macro settrackstransform  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>CalculateTruckTransform</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Собирает преобразование звена гусеницы из положения и ориентации сплайна.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Читает location, rotation и right-vector на заданной дистанции вдоль сплайна, учитывает сторону/ориентацию башмака и собирает итоговые позицию и rotator экземпляра.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>Вызывается внутри <code>SetTracksTransform</code> для каждого звена и является единственным местом, где расстояние по сплайну превращается в transform визуального башмака.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>SetTracksTransform</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>9 нод</span>
<span><b>Сигнатура</b>2 in · 2 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="CalculateTruckTransform Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>CalculateTruckTransform</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">CurrentTrackDistance</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Locatioin</span><span class="bp-auth-pin__type">Vector</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SplineComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">TrackPath</span><span class="bp-auth-pin__type">SplineComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rotation</span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="debugswitch macro updatetrackslocation debugon ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>DebugSwitch</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Выдаёт единый флаг, которым графы включают или отключают отладочную ветку.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Преобразует общий флаг <code>DebugOn</code> в значение <code>EDrawDebugTrace</code>: включённая диагностика возвращает режим отрисовки трасс, выключенная — отсутствие отрисовки.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>Позволяет всем трассировкам <code>UpdateTracksLocation</code> пользоваться одним переключателем без повторения ветвлений.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Читает состояние</dt><dd><code>DebugOn</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>4 нод</span>
<span><b>Сигнатура</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="DebugSwitch Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>DebugSwitch</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="byte" title="EDrawDebugTrace"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">EDrawDebugTrace</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="safeclampinterp macro cameratickcomponent  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>SafeClampInterp</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Плавно интерполирует значение и удерживает результат внутри безопасного диапазона.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Находит look-at rotation от опорной оси к целевой точке, нормализует нужный угол, ограничивает его механическими Min/Max и плавно интерполирует от текущего поворота камеры.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>В <code>CameraTickComponent</code> создаёт мягкое, но физически ограниченное слежение оптических камер без скачка через границу ±180°.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>CameraTickComponent</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>22 нод</span>
<span><b>Сигнатура</b>7 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="SafeClampInterp Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>SafeClampInterp</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SpringArm</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Rotator</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">AxisFrom</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="SceneComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">SceneComponent</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="vector" title="Vector"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Vector</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="float" title="Float"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">InterpSpeed</span><span class="bp-auth-pin__type">Float</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="parabolicmarco macro updatetrackslocation  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>ParabolicMarco</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Вычисляет точку или направление по параболической траектории.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Нормализует положение элемента внутри участка и подставляет его в параболическую формулу с заданными шириной, высотой и натяжением.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p><code>UpdateTracksLocation</code> использует результат как вертикальное смещение точки свободного или провисающего участка гусеницы.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>UpdateTracksLocation</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>17 нод</span>
<span><b>Сигнатура</b>6 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ParabolicMarco Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>ParabolicMarco</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Tension</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Height</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Element</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">EndPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">StartPoint</span><span class="bp-auth-pin__type">Integer</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Width</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="camerarotmacro macro cameratickcomponent  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>CameraRotMacro</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Подготавливает поворот камеры с учётом ограничений и текущего режима обзора.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Объединяет два вложенных графа: <code>CameraTurnInput</code> масштабирует ввод по активной оптике/FOV и передаёт движение в Player Controller и механический привод осей, а <code>AimCubeRotation</code> строит rotator прицельного куба из Control Rotation и camera offset.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>Возвращает согласованный <code>Rot</code>, который <code>CameraTickComponent</code> применяет к выбранной камере или Spring Arm.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>CameraTickComponent</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>5 нод</span>
<span><b>Сигнатура</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="CameraRotMacro Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>CameraRotMacro</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="rotator" title="Rotator"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Rot</span><span class="bp-auth-pin__type">Rotator</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="servermacro macro eventtick maingunfiresys machinegunfiresys server_soundgraph server_damage  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>ServerMacro</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Объединяет повторяющуюся проверку сетевой роли перед серверной логикой.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Проверяет authority, локальное владение Pawn и роль proxy, после чего разводит один вход на <code>Server_PhysicsTick</code>, <code>Local_OwnerTick</code> и <code>Proxy_VisualTick</code>.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>Используется в Tick, стрельбе, звуках и повреждениях, чтобы авторитетная физика, локальный ввод и визуальная реплика не выполняли одну и ту же ветвь дважды.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>EventTick</code>, <code>MainGunFireSys</code>, <code>MachineGunFireSys</code>, <code>Server_SoundGraph</code>, <code>Server_Damage</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>10 нод</span>
<span><b>Сигнатура</b>1 in · 3 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="ServerMacro Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>ServerMacro</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Execute</span><span class="bp-auth-pin__type">Exec</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Server Physicstick</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Local Ownertick</span><span class="bp-auth-pin__type">Exec</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="exec" title="Exec"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Proxy Visualtick</span><span class="bp-auth-pin__type">Exec</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="gamemode macro userconstructionscript constructsimulativepoints eventtick  ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>GameMode</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Получает и проверяет используемый Blueprint игрового режима.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Проверяет состояние ReplaySubsystem и standalone-режим и объединяет результаты в один Boolean.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>Construction Script, создание физических помощников и Tick используют его как общий признак контекста, где допустима игровая runtime-логика.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>UserConstructionScript</code>, <code>ConstructSimulativePoints</code>, <code>EventTick</code></dd>
<dt>Читает состояние</dt><dd>—</dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>6 нод</span>
<span><b>Сигнатура</b>0 in · 1 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="GameMode Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>GameMode</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">ReturnValue</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
</article>
<article class="bp-auth-card bp-auth-card--explained" data-bp-item data-search="fovtox macro beginplaymainparam fieldofview ">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Пользовательский макрос</span>
<div class="bp-auth-card__title"><code>FOVtoX</code></div>
<div class="bp-auth-card-summary">
<span>Что делает</span>
<p>Преобразует угол обзора камеры в коэффициент, используемый дальнейшими расчётами.</p>
</div>
<div class="bp-auth-behavior">
<div>
<span>Как работает</span>
<p>Через tan/atan переводит вертикальные границы поля зрения камеры в соответствующие горизонтальные угловые границы с учётом коэффициента проекции.</p>
</div>
<div>
<span>Зачем в этом Blueprint</span>
<p>В <code>BeginPlayMainParam</code> рассчитывает MinX/MaxX для оптических камер, чтобы их yaw-ограничения совпадали с реальным видимым сектором.</p>
</div>
</div>
<dl class="bp-auth-footprint">
<dt>Используется в</dt><dd><code>BeginPlayMainParam</code></dd>
<dt>Читает состояние</dt><dd><code>FieldOfView</code></dd>
<dt>Изменяет состояние</dt><dd>—</dd>
</dl>
<div class="bp-auth-meta">
<span><b>Граф</b>23 нод</span>
<span><b>Сигнатура</b>4 in · 2 out</span>
</div></div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--macro" role="img" aria-label="FOVtoX Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">M</span><span>FOVtoX</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="object" title="CameraComponent"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Camera</span><span class="bp-auth-pin__type">CameraComponent</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MaxX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Max</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin bp-auth-pin--output is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MinX</span><span class="bp-auth-pin__type">Double</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Min</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin bp-auth-pin--input is-linked" data-pin-type="double" title="Double"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Coef</span><span class="bp-auth-pin__type">Double</span></div><div class="bp-auth-pin"></div></div></div></div></div>
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
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnAmmoChanged Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">D</span><span>OnAmmoChanged</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MainGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmoCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">MachineGunAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellCurrent</span><span class="bp-auth-pin__type">Integer</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="int" title="Integer"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">SmokeShellAmmo</span><span class="bp-auth-pin__type">Integer</span></div></div></div></div></div>
</article>
<article class="bp-auth-card" data-bp-item data-search="onuistatechanged dispatcher">
<div class="bp-auth-card__copy">
<span class="bp-auth-kicker">Event Dispatcher</span>
<div class="bp-auth-card__title"><code>OnUIStateChanged</code></div>
<p>Уведомляет интерфейс о смене состояния систем машины.</p>
<div class="bp-auth-meta"><span><b>Данные события</b>15 полей</span></div>
</div>
<div class="bp-auth-card__visual"><div class="bp-auth-node bp-auth-node--dispatcher" role="img" aria-label="OnUIStateChanged Blueprint node"><div class="bp-auth-node__header"><span class="bp-auth-node__icon" aria-hidden="true">D</span><span>OnUIStateChanged</span></div><div class="bp-auth-node__body"><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBallisticComputerEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsBacklightSightEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsShowControlsEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsStabilizationEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsDoubleFireSysEnable?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsLockTargetEnabled?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsGunnerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunOverHeatting?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMainGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsMachineGunReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Client_IsSmokeShellReloaded?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MainGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">Predict Result Hit Result Blocking Hit_MachineGun</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsThermalVisSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div><div class="bp-auth-node__row"><div class="bp-auth-pin"></div><div class="bp-auth-pin bp-auth-pin--output" data-pin-type="bool" title="Boolean"><span class="bp-auth-pin__dot"></span><span class="bp-auth-pin__name">IsComTowerCameraSwitch?</span><span class="bp-auth-pin__type">Boolean</span></div></div></div></div></div>
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
