---
layout: default
title: "Blueprint-ноды Vehicle Weapon System — Русский"
description: "Актуальный отобранный покупательский Blueprint API Vehicle Weapon System"
lang: ru
page_kind: reference
product: weapon
doc_section: nodes
---

# Blueprint-ноды Vehicle Weapon System

Это отобранный покупательский Blueprint API Vehicle Weapon System. Имя в таблице совпадает с именем, которое нужно искать в Blueprint Palette.

- `Vehicle | Weapon System | Core` — обычная интеграция танка, input, fire, HUD и профили;
- `Vehicle | Weapon System | Advanced` — собственный scheduler, ручные каналы/реестры и подробная диагностика.

> Начинайте с Core. Advanced не требуется для стандартного профильного workflow. Deprecated/Migration, Diagnostics/Internal и соседние общие vehicle-утилиты намеренно не перечисляются, даже если они остаются публичными ради совместимости или developer tooling.

## Обычный runtime-порядок

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

Стрельбу вызывайте через `Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. HUD запрашивайте по произвольному `Weapon ID`; в API нет ограничения «основное + вторичное оружие».

<a id="core-nodes"></a>

## Core

### Управление осями

| Нода | Назначение |
|---|---|
| `Configure Weapon Axis Aim And Stabilization` | Меняет aim source и режим стабилизации одной Axis Group без перестройки контроллеров. Вызывайте при смене режима камеры, оружия или стабилизатора, а не каждый кадр. |
| `Get Configured Axis Group Rotations` | Возвращает реальные relative rotations yaw/pitch-компонентов выбранной Axis Group. Подходит для AnimBP, звука, сети и уникальной presentation; повторно solver не запускает. |
| `Get Weapon Axis Aim And Stabilization Settings` | Читает текущие aim channels и состояние стабилизации выбранной Axis Group. |
| `Reset Weapon Axis Aim And Stabilization` | Возвращает aim channels и стабилизацию Axis Group к профильным значениям. |
| `Submit Manual Weapon Axis Input` | Сообщает активность ручного yaw/pitch ввода. Направление по-прежнему задаёт routed aim target; input только включает соответствующий привод и не складывается с компенсацией стабилизатора. |
### Баллистика

| Нода | Назначение |
|---|---|
| `Apply Ammo Type Ballistics` | Применяет выбранный Ammo Type к прогнозу баллистики Weapon ID. Скорость берётся только из `Initial Speed` заряженного Projectile Class, остальные параметры — из Ammo Type. |
### Конфигурация

| Нода | Назначение |
|---|---|
| `Apply Direct Weapon System Profile` | Импортирует профиль, назначенный в `Configuration Profile`; доступна также как editor-кнопка. |
| `Apply Weapon System Profile` | Применяет переданный профиль; может сохранить vehicle-specific bindings и сразу перестроить runtime. |
| `Export Built-In Setup To Direct Weapon System Profile` | Копирует текущие Local Configuration массивы в назначенный Data Asset. |
| `Initialize Vehicle Armament Profile` | Разрешает и кэширует назначенную профильную цепочку конкретного танка. |
| `Validate Direct Weapon System Profile Compatibility` | Проверяет ID, ссылки, настройки и возможность сохранить vehicle bindings, не применяя профиль. |
| `Validate Vehicle Weapon System Configuration` | Перестраивает реестры и возвращает полный readiness report с ошибками и предупреждениями. |
### Эффекты

| Нода | Назначение |
|---|---|
| `Play Configured Weapon Camera Shake` | Воспроизводит Camera Shake, назначенный конкретному Weapon ID, без asset literals в графе. |
| `Play Configured Weapon Presentation` | Реплицирует одно профильное presentation-событие по Weapon ID. Standard runtime вызывает его сам; Blueprint Custom вызывает после принятой собственной транзакции. |
### Интеграция

| Нода | Назначение |
|---|---|
| `Find Vehicle Weapon System` | Находит единственный компонент Vehicle Weapon System у переданного Actor. |
### Профили

| Нода | Назначение |
|---|---|
| `Get All Resolved Weapon Loadouts` | Возвращает все включённые loadout-записи в стабильном порядке профиля. |
| `Get Effective Vehicle Armament Profile` | Возвращает Armament Profile из Tank Variant Profile либо явный fallback. |
| `Get Resolved Weapon Effects And Audio` | Возвращает готовые эффекты и audio любого стабильного Weapon ID. |
| `Get Resolved Weapon Loadout` | Возвращает готовые runtime-настройки одного Weapon ID. |
| `Get Weapon Loadout Definition` | Находит неизменяемое описание оружия в назначенном Weapon Loadout Profile. |
| `Validate Tank Variant Profile` | Проверяет верхний Tank Variant Profile и всю цепочку его вооружения. |
| `Validate Vehicle Armament Profile` | Проверяет связи Armament Profile с aiming/loadout-профилями. |
| `Validate Weapon Loadout Profile` | Проверяет Weapon Loadout Profile и возвращает список ошибок конфигурации. |
### Репликация

| Нода | Назначение |
|---|---|
| `Set Optimized Turret Replication Enabled` | Включает или выключает штатную native-репликацию осей с ограниченной частотой обновления. |
| `Should Evaluate Local Weapon Runtime` | Возвращает, должна ли эта копия Pawn считать локальные aim sources, traces и ballistics. Используйте как gate для vehicle-specific Blueprint-логики. |
### Runtime

| Нода | Назначение |
|---|---|
| `Is Weapon System Active` | Проверяет общий lifecycle-gate системы вооружения. |
| `Set Weapon System Active` | Общий lifecycle-gate для уничтоженной, отключённой или восстановленной машины. При выключении прекращает расчёт aim, traces, ballistics, stabilization, UI projection и native replication. |
| `Update Vehicle Aim Sources` | Преобразует настроенные camera/AimCube inputs в единый кэш источников прицеливания. |
| `Update Vehicle Weapon System` | Решает и маршрутизирует оси по уже кэшированным источникам; обычная финальная нода кадра. |
| `Update Weapon Traces And Ballistics` | Обновляет muzzle transforms, непрерывные weapon traces и опциональный ballistic cache. |
### HUD и UI

| Нода | Назначение |
|---|---|
| `Get Active View Aim HUD Screen Data` | Возвращает экранную точку текущей камеры или прицела без привязки к External, Gunner или Commander. |
| `Get Aim Source HUD State` | Actor-facing запрос произвольной камеры, прицела или AI aim source по ID. |
| `Get Cached Aim Source HUD State` | Читает произвольный именованный aim source из уже согласованного UI cache. |
| `Get Cached HUD State For Weapon` | Компактный cached-запрос состояния одного Weapon ID для собственного виджета. |
| `Get Cached Standard Aim Source HUD State` | Упрощённый cached-запрос Gunner, Commander, External или Main Gun Aim Ray. |
| `Get Cached Weapon Ballistic Aim HUD Data` | Возвращает cached ballistic aim для пользовательской сетки или hit indicator. |
| `Get Cached Weapon Muzzle Trace HUD Data` | Возвращает cached физический muzzle trace для пользовательской сетки или fire indicator. |
| `Get Vehicle Weapon HUD Snapshot` | Возвращает масштабируемый снимок всех aim sources и оружия для динамического HUD. |
| `Get Weapon Ballistic Aim HUD Data` | Возвращает мировую и экранную баллистическую точку выбранного Weapon ID. |
| `Get Weapon HUD Screen Data` | Возвращает полный плоский набор экранных координат для одного произвольного Weapon ID, включая максимальную дальность лучей без учёта попаданий. |
| `Get Weapon HUD State` | Actor-facing запрос полного HUD state произвольного Weapon ID. |
| `Get Weapon Muzzle Trace HUD Data` | Возвращает начало, конец, экранную позицию и hit-флаг muzzle trace выбранного Weapon ID. |
### Каналы оружия

| Нода | Назначение |
|---|---|
| `Can Fire Weapon From Active Channels` | Проверяет, разрешают ли текущие active channel выбранному Weapon ID стрелять. |
| `Cycle Weapon Channel` | Выбирает следующий или предыдущий канал по порядку в профиле. |
| `Get Active Weapon Channels` | Возвращает текущий реплицируемый набор активных каналов. |
| `Get Active Weapon IDs` | Возвращает уникальные Weapon ID из всех активных каналов. |
| `Get Available Weapon Channels` | Возвращает доступные Channel ID в порядке профиля. |
| `Is Weapon Channel Active` | Проверяет, включён ли указанный канал. |
| `Request Weapon Channel Trigger State` | Network-safe input для всех Weapon ID одного selectable channel; граф ввода не зависит от числа установленных орудий. |
| `Set Active Weapon Channel` | Выбирает один канал и выключает остальные. |
| `Set Active Weapon Channels` | Одним вызовом полностью заменяет активный набор. |
| `Set Weapon Channel Active` | Включает или выключает один канал, не меняя остальные; подходит для комбинированных групп. |
### Оружие

| Нода | Назначение |
|---|---|
| `Cancel Configured Weapon Reload Completion` | Отменяет ожидающий reload timer одного Weapon ID, не изменяя состояние боеприпаса. |
| `Execute Configured Standard Weapon Shot` | Создаёт один обычный projectile из настроенного muzzle и запускает профильную fire presentation. Проверка и расход боеприпаса остаются в AmmoSystem. |
| `Get Configured Weapon Fire Data` | Собирает loadout, installation и живой muzzle binding любого Weapon ID для универсального fire route. |
| `Get Configured Weapon Muzzle` | Возвращает точный component/socket, общий для traces, fire, muzzle FX и custom Blueprint. |
| `Is Configured Weapon Reload Scheduled` | Проверяет, ожидается ли reload-completion pulse этого Weapon ID. |
| `Is Configured Weapon Trigger Held` | Проверяет, удерживается ли configured trigger этого Weapon ID. |
| `Release All Configured Weapon Triggers` | Отпускает все активные configured triggers компонента. |
| `Request Configured Weapon Replenishment Update` | На сервере запрашивает одно обновление replenish после обновления состояния общей зоны пополнения. |
| `Request Configured Weapon Trigger State` | Network-safe input для owning vehicle. Профиль сам выбирает standard runtime или Blueprint Custom route этого Weapon ID. |
| `Schedule Configured Weapon Reload Completion` | Запускает отдельный reload timer Weapon ID по длительности из loadout; повторный вызов не перезапускает уже активный timer. |
| `Set Configured Weapon Trigger Held` | Серверная установка trigger state. Single Shot даёт один pulse, Automatic повторяет его по cadence, Blueprint Custom передаётся child Blueprint. |

<a id="advanced-nodes"></a>

## Advanced

### Каналы наведения

| Нода | Назначение |
|---|---|
| `Clear All Aim Channels` | Очищает все кэшированные каналы. |
| `Clear Named Aim Channel` | Удаляет cached state одного именованного aim channel. |
| `Get Aim Channel State` | Читает состояние именованного канала. |
| `Get Standard Aim Channel ID` | Преобразует enum стандартного канала в его стабильный Channel ID. |
| `Get Standard Aim Channel State` | Читает состояние стандартного канала по enum. |
| `Set Active Standard Aim Channel` | Выбирает активный стандартный канал для маршрутов, использующих active source. |
| `Set Aim Channel Enabled` | Включает или выключает именованный канал без удаления его состояния. |
| `Set Named Aim Channel Target` | Записывает цель в произвольный именованный канал. |
| `Set Standard Aim Channel Target` | Записывает цель в стандартный канал. |
| `Submit Standard Aim Sources` | Обновляет четыре стандартных aim channel с одной общей revision. |
### Источники наведения

| Нода | Назначение |
|---|---|
| `Get Cached Vehicle Aim Data` | Возвращает компактный camera/AimCube frame, уже подготовленный общим обновлением Weapon System. |
| `Update Vehicle Aim Sources (Advanced / Detailed)` | Подробная версия обычного обновления aim sources. Используйте её только когда собственному Blueprint нужна полная структура результата; для стандартной интеграции предназначена Core-нода. |
### Маршрутизация наведения

| Нода | Назначение |
|---|---|
| `Resolve Main Weapon Aim Channel` | Выбирает стандартный источник наведения основного оружия по текущим gunner, commander и double-fire режимам камеры. |
| `Resolve Auxiliary Weapon Aim Channels` | Выбирает yaw/pitch источники для дополнительного или командирского оружия без веток под конкретный танк. |
| `Route Active Aim Channel To Configured Turret` | Использует текущий active standard channel. |
| `Route Aim Channel To Configured Turret` | То же, но использует basis, настроенный в controller. |
| `Route Aim Channel To Turret Solution` | Маршрутизирует именованный канал на явно заданный low-level controller и basis transform. |
| `Route Split Aim Channels To Configured Turret` | Использует разные именованные источники для yaw и pitch. |
| `Route Standard Aim Channel To Configured Turret` | Маршрутизирует один стандартный enum-канал. |
| `Route Standard Split Aim Channels To Configured Turret` | Маршрутизирует разные стандартные каналы на yaw и pitch. |
| `Update Standard Aim Sources And Turret Solution` | Одним вызовом отправляет стандартные sources, выбирает active channel и решает одну основную башню. |
### Применение осей

| Нода | Назначение |
|---|---|
| `Apply Pending Turret Axis Commands (Advanced / Detailed)` | Применяет и удаляет axis-команды, подготовленные предыдущим согласованным кадром. |
| `Apply Pending Vehicle Turret Commands (Advanced)` | Компактная bool-версия ручного применения pending-команд. |
| `Evaluate And Queue All Turret Axis Commands (Advanced)` | Решает все запрошенные оси и ставит relative rotations в очередь для definition с deferred application. |
### Маршрутизация осей

| Нода | Назначение |
|---|---|
| `Route Standard Axis Group Solutions` | Решает массив axis-group requests по уже отправленным каналам. |
| `Update Standard Aim Sources And Axis Groups` | Одним вызовом отправляет стандартные aim sources и маршрутизирует массив Axis Group requests. |
### Баллистика

| Нода | Назначение |
|---|---|
| `Update All Weapon Ballistic Predictions` | Пересчитывает все включённые ballistic definitions из их зарегистрированных muzzle. |
### Конфигурация / установки

| Нода | Назначение |
|---|---|
| `Apply Built-In Weapon Installation Change (Advanced)` | Перепривязывает один Weapon ID к другой Axis Group и, при необходимости, другому muzzle. |
| `Get Resolved Weapon Installation` | Возвращает runtime axis/muzzle binding выбранного Weapon ID. |
| `Refresh Weapon Installation Registry` | Перестраивает соответствия `Weapon ID -> Axis Group/Muzzle`. |
### Конфигурация / runtime

| Нода | Назначение |
|---|---|
| `Rebuild Runtime From Built-In Configuration (Advanced)` | Перестраивает runtime из Local Configuration массивов компонента. Используйте только когда локальный workflow является авторитетным. |
### Пользовательское наведение

| Нода | Назначение |
|---|---|
| `Make World Direction Aim Target (Advanced)` | Создаёт aim target из мировой точки начала и направления без обязательного hit point. |
| `Make World Point Aim Target (Advanced)` | Создаёт aim target по мировой точке и сохраняет признак blocking hit. |
| `Solve Two-Axis Weapon Aim (Advanced)` | Решает yaw/pitch для явно переданных target, basis, текущих углов, ограничений и настроек привода. |
### Дульные точки

| Нода | Назначение |
|---|---|
| `Get Configured Weapon Skeletal Muzzle (Advanced)` | Возвращает настроенную muzzle-точку как Skeletal Mesh для интеграций, которым явно нужен этот тип компонента. |
| `Resolve All Configured Weapon Muzzles (Advanced)` | Обновляет pose/ray всех зарегистрированных muzzle без collision traces. |
### Реестры

| Нода | Назначение |
|---|---|
| `Get Registered Axis Group Controller` | Возвращает low-level controller по `Axis Group ID`. |
| `Get Registered Axis Group For Weapon` | Находит осевую группу, связанную с Weapon ID. |
| `Get Registered Weapon Muzzle` | Возвращает low-level muzzle component по Weapon ID. |
| `Refresh Turret Axis Registry` | Повторно сканирует universal turret controllers владельца; Tick компонентов не включает. |
| `Refresh Weapon Muzzle Registry` | Повторно сканирует muzzle components. |
### Runtime

| Нода | Назначение |
|---|---|
| `Update Vehicle Weapon System (Advanced / Detailed Result)` | Маршрутизирует согласованный aim-source frame и возвращает подробный результат всего component update. |
| `Update Vehicle Weapon System (Advanced / Explicit Aim Sources)` | Принимает camera/AimCube sources явно и строит axis requests из Axis Control States без legacy-массивов. |
### Runtime-кадр

| Нода | Назначение |
|---|---|
| `Update Muzzle Traces And Ballistics (Advanced / Detailed)` | Ранний подробный update всех continuous muzzle rays и optional projectile prediction. |
### Presentation

| Нода | Назначение |
|---|---|
| `Refresh Turret Animation Update Order (Advanced)` | Повторно назначает tick prerequisites skeletal-mesh компонентов после runtime-замены компонентов башни или орудия. Обычная профильная машина не вызывает эту ноду каждый кадр. |
### HUD и UI

| Нода | Назначение |
|---|---|
| `Get Cached Vehicle Weapon HUD Snapshot` | Возвращает полный cached список для UI, который динамически перечисляет любое число оружия. |
| `Refresh Vehicle Weapon HUD Cache (Advanced)` | Перестраивает масштабируемый UI cache из уже готовых aim/trace/installation/ballistic caches без новых traces или prediction. |
### Оружейные лучи

| Нода | Назначение |
|---|---|
| `Update All Continuous Muzzle Traces (Advanced)` | Выполняет один collision trace для каждого включённого зарегистрированного muzzle. |

## Как поддерживается актуальность

Имена и визуальные пины сверяются с reflected API runtime-модуля, после чего список фильтруется до описанного выше покупательского Weapon System API. При изменении перечисленной ноды этот справочник и `assets/js/blueprint-nodes.js` должны регенерироваться вместе.

<div class="page-nav" markdown="1">
[← Подробная интеграция]({{ '/docs/vehicle-weapon-reference.ru.html' | relative_url }})
[Дорожная карта →]({{ '/docs/roadmap.ru.html' | relative_url }})
</div>
