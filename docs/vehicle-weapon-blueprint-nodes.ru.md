---
layout: default
title: "Vehicle Weapon System: Blueprint-ноды — Русский"
description: "Актуальный справочник публичных Blueprint-нод Vehicle Weapon System"
lang: ru
page_kind: reference
product: weapon
doc_section: nodes
---


# Blueprint-ноды Vehicle Weapon System

Эта страница построена по текущим публичным `UFUNCTION` runtime-модуля. Имя в таблице совпадает с именем, которое нужно искать в Blueprint Palette.

- `Vehicle | Weapon System | Core` — обычная интеграция танка, input, fire, HUD и профили;
- `Vehicle | Weapon System | Advanced` — собственный scheduler, ручные каналы/реестры и подробная диагностика.

> Начинайте с Core. Advanced не требуется для стандартного профильного workflow. Старые Shadow/Legacy/Migration-ноды не являются покупательским API и здесь не перечисляются.

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
| `Configure Weapon Axis Aim And Stabilization` | Выполняет операцию «Configure Weapon Axis Aim And Stabilization» из раздела `Vehicle\|Weapon System\|Core\|Axis Control`. |
| `Get Configured Axis Group Rotations` | Выполняет операцию «Get Configured Axis Group Rotations» из раздела `Vehicle\|Weapon System\|Core\|Axis Control`. |
| `Get Weapon Axis Aim And Stabilization Settings` | Читает текущие aim channels и состояние стабилизации выбранной Axis Group. |
| `Reset Weapon Axis Aim And Stabilization` | Возвращает aim channels и стабилизацию Axis Group к профильным значениям. |
| `Submit Manual Weapon Axis Input` | Выполняет операцию «Submit Manual Weapon Axis Input» из раздела `Vehicle\|Weapon System\|Core\|Axis Control`. |
### Баллистика

| Нода | Назначение |
|---|---|
| `Apply Ammo Type Ballistics` | Выполняет операцию «Apply Ammo Type Ballistics» из раздела `Vehicle\|Weapon System\|Core\|Ballistics`. |
### Конфигурация

| Нода | Назначение |
|---|---|
| `Apply Direct Weapon System Profile` | Выполняет операцию «Apply Direct Weapon System Profile» из раздела `Vehicle\|Weapon System\|Core\|Configuration`. |
| `Apply Weapon System Profile` | Применяет переданный профиль; может сохранить vehicle-specific bindings и сразу перестроить runtime. |
| `Export Built-In Setup To Direct Weapon System Profile` | Выполняет операцию «Export Built-In Setup To Direct Weapon System Profile» из раздела `Vehicle\|Weapon System\|Core\|Configuration`. |
| `Initialize Vehicle Armament Profile` | Разрешает и кэширует назначенную профильную цепочку конкретного танка. |
| `Validate Direct Weapon System Profile Compatibility` | Выполняет операцию «Validate Direct Weapon System Profile Compatibility» из раздела `Vehicle\|Weapon System\|Core\|Configuration`. |
| `Validate Vehicle Weapon System Configuration` | Перестраивает реестры и возвращает полный readiness report с ошибками и предупреждениями. |
### Эффекты

| Нода | Назначение |
|---|---|
| `Play Configured Weapon Camera Shake` | Выполняет операцию «Play Configured Weapon Camera Shake» из раздела `Vehicle\|Weapon System\|Core\|Effects`. |
| `Play Configured Weapon Presentation` | Выполняет операцию «Play Configured Weapon Presentation» из раздела `Vehicle\|Weapon System\|Core\|Effects`. |
### Интеграция

| Нода | Назначение |
|---|---|
| `Find Vehicle Weapon System` | Находит единственный компонент Vehicle Weapon System у переданного Actor. |
### Профили

| Нода | Назначение |
|---|---|
| `Get All Resolved Weapon Loadouts` | Возвращает все включённые loadout-записи в стабильном порядке профиля. |
| `Get Effective Vehicle Armament Profile` | Возвращает Armament Profile из Tank Variant Profile либо явный fallback. |
| `Get Resolved Smoke Launcher Setup` | Выполняет операцию «Get Resolved Smoke Launcher Setup» из раздела `Vehicle\|Weapon System\|Core\|Profiles`. |
| `Get Resolved Weapon Effects And Audio` | Выполняет операцию «Get Resolved Weapon Effects And Audio» из раздела `Vehicle\|Weapon System\|Core\|Profiles`. |
| `Get Resolved Weapon Loadout` | Возвращает готовые runtime-настройки одного Weapon ID. |
| `Get Weapon Loadout Definition` | Находит неизменяемое описание оружия в назначенном Weapon Loadout Profile. |
| `Validate Tank Variant Profile` | Проверяет верхний Tank Variant Profile и всю цепочку его вооружения. |
| `Validate Vehicle Armament Profile` | Проверяет связи Armament Profile с aiming/loadout-профилями. |
| `Validate Weapon Loadout Profile` | Проверяет Weapon Loadout Profile и возвращает список ошибок конфигурации. |
### Репликация

| Нода | Назначение |
|---|---|
| `Set Optimized Turret Replication Enabled` | Выполняет операцию «Set Optimized Turret Replication Enabled» из раздела `Vehicle\|Weapon System\|Core\|Replication`. |
| `Should Evaluate Local Weapon Runtime` | Возвращает, должна ли эта копия Pawn считать локальные aim sources, traces и ballistics. Используйте как gate для vehicle-specific Blueprint-логики. |
### Runtime

| Нода | Назначение |
|---|---|
| `Is Weapon System Active` | Проверяет общий lifecycle-gate системы вооружения. |
| `Set Weapon System Active` | Выполняет операцию «Set Weapon System Active» из раздела `Vehicle\|Weapon System\|Core\|Runtime`. |
| `Update Vehicle Aim Sources` | Преобразует настроенные camera/AimCube inputs в единый кэш источников прицеливания. |
| `Update Vehicle Weapon System` | Решает и маршрутизирует оси по уже кэшированным источникам; обычная финальная нода кадра. |
| `Update Weapon Traces And Ballistics` | Обновляет muzzle transforms, непрерывные weapon traces и опциональный ballistic cache. |
### HUD и UI

| Нода | Назначение |
|---|---|
| `Get Active View Aim HUD Screen Data` | Возвращает экранную точку текущей камеры или прицела без привязки к External, Gunner или Commander. |
| `Get Aim Source HUD State` | Выполняет операцию «Get Aim Source HUD State» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Cached Aim Source HUD State` | Выполняет операцию «Get Cached Aim Source HUD State» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Cached HUD State For Weapon` | Выполняет операцию «Get Cached HUD State For Weapon» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Cached Standard Aim Source HUD State` | Выполняет операцию «Get Cached Standard Aim Source HUD State» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Cached Weapon Ballistic Aim HUD Data` | Выполняет операцию «Get Cached Weapon Ballistic Aim HUD Data» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Cached Weapon Muzzle Trace HUD Data` | Выполняет операцию «Get Cached Weapon Muzzle Trace HUD Data» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Vehicle Weapon HUD Snapshot` | Возвращает масштабируемый снимок всех aim sources и оружия для динамического HUD. |
| `Get Weapon Ballistic Aim HUD Data` | Возвращает мировую и экранную баллистическую точку выбранного Weapon ID. |
| `Get Weapon HUD Screen Data` | Возвращает полный плоский набор экранных координат для одного произвольного Weapon ID, включая максимальную дальность лучей без учёта попаданий. |
| `Get Weapon HUD State` | Выполняет операцию «Get Weapon HUD State» из раздела `Vehicle\|Weapon System\|Core\|UI`. |
| `Get Weapon Muzzle Trace HUD Data` | Возвращает начало, конец, экранную позицию и hit-флаг muzzle trace выбранного Weapon ID. |
### Каналы оружия

| Нода | Назначение |
|---|---|
| `Can Fire Weapon From Active Channels` | Выполняет операцию «Can Fire Weapon From Active Channels» из раздела `Vehicle\|Weapon System\|Core\|Weapon Channels`. |
| `Cycle Weapon Channel` | Выбирает следующий или предыдущий канал по порядку в профиле. |
| `Get Active Weapon Channels` | Возвращает текущий реплицируемый набор активных каналов. |
| `Get Active Weapon IDs` | Возвращает уникальные Weapon ID из всех активных каналов. |
| `Get Available Weapon Channels` | Возвращает доступные Channel ID в порядке профиля. |
| `Is Weapon Channel Active` | Проверяет, включён ли указанный канал. |
| `Request Weapon Channel Trigger State` | Выполняет операцию «Request Weapon Channel Trigger State» из раздела `Vehicle\|Weapon System\|Core\|Weapon Channels`. |
| `Set Active Weapon Channel` | Выбирает один канал и выключает остальные. |
| `Set Active Weapon Channels` | Одним вызовом полностью заменяет активный набор. |
| `Set Weapon Channel Active` | Включает или выключает один канал, не меняя остальные; подходит для комбинированных групп. |
### Оружие

| Нода | Назначение |
|---|---|
| `Cancel Configured Weapon Reload Completion` | Выполняет операцию «Cancel Configured Weapon Reload Completion» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Execute Configured Standard Weapon Shot` | Выполняет операцию «Execute Configured Standard Weapon Shot» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Get Configured Weapon Fire Data` | Выполняет операцию «Get Configured Weapon Fire Data» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Get Configured Weapon Muzzle` | Выполняет операцию «Get Configured Weapon Muzzle» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Is Configured Weapon Reload Scheduled` | Выполняет операцию «Is Configured Weapon Reload Scheduled» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Is Configured Weapon Trigger Held` | Выполняет операцию «Is Configured Weapon Trigger Held» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Release All Configured Weapon Triggers` | Выполняет операцию «Release All Configured Weapon Triggers» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Request Configured Weapon Replenishment Update` | Выполняет операцию «Request Configured Weapon Replenishment Update» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Request Configured Weapon Trigger State` | Выполняет операцию «Request Configured Weapon Trigger State» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Schedule Configured Weapon Reload Completion` | Выполняет операцию «Schedule Configured Weapon Reload Completion» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |
| `Set Configured Weapon Trigger Held` | Выполняет операцию «Set Configured Weapon Trigger Held» из раздела `Vehicle\|Weapon System\|Core\|Weapons`. |

<a id="advanced-nodes"></a>

## Advanced

### Каналы наведения

| Нода | Назначение |
|---|---|
| `Clear All Aim Channels` | Очищает все кэшированные каналы. |
| `Clear Named Aim Channel` | Выполняет операцию «Clear Named Aim Channel» из раздела `Vehicle\|Weapon System\|Advanced\|Aim Channels`. |
| `Get Aim Channel State` | Читает состояние именованного канала. |
| `Get Standard Aim Channel ID` | Выполняет операцию «Get Standard Aim Channel ID» из раздела `Vehicle\|Weapon System\|Advanced\|Aim Channels`. |
| `Get Standard Aim Channel State` | Читает состояние стандартного канала по enum. |
| `Set Active Standard Aim Channel` | Выбирает активный стандартный канал для маршрутов, использующих active source. |
| `Set Aim Channel Enabled` | Включает или выключает именованный канал без удаления его состояния. |
| `Set Named Aim Channel Target` | Записывает цель в произвольный именованный канал. |
| `Set Standard Aim Channel Target` | Записывает цель в стандартный канал. |
| `Submit Standard Aim Sources` | Выполняет операцию «Submit Standard Aim Sources» из раздела `Vehicle\|Weapon System\|Advanced\|Aim Channels`. |
### Маршрутизация наведения

| Нода | Назначение |
|---|---|
| `Route Active Aim Channel To Configured Turret` | Использует текущий active standard channel. |
| `Route Aim Channel To Configured Turret` | То же, но использует basis, настроенный в controller. |
| `Route Aim Channel To Turret Solution` | Маршрутизирует именованный канал на явно заданный low-level controller и basis transform. |
| `Route Split Aim Channels To Configured Turret` | Использует разные именованные источники для yaw и pitch. |
| `Route Standard Aim Channel To Configured Turret` | Маршрутизирует один стандартный enum-канал. |
| `Route Standard Split Aim Channels To Configured Turret` | Маршрутизирует разные стандартные каналы на yaw и pitch. |
| `Update Standard Aim Sources And Turret Solution` | Выполняет операцию «Update Standard Aim Sources And Turret Solution» из раздела `Vehicle\|Weapon System\|Advanced\|Aim Routing`. |
### Применение осей

| Нода | Назначение |
|---|---|
| `Apply Pending Turret Axis Commands (Advanced / Detailed)` | Выполняет операцию «Apply Pending Turret Axis Commands (Advanced / Detailed)» из раздела `Vehicle\|Weapon System\|Advanced\|Axis Application`. |
| `Apply Pending Vehicle Turret Commands (Advanced)` | Компактная bool-версия ручного применения pending-команд. |
| `Evaluate And Queue All Turret Axis Commands (Advanced)` | Выполняет операцию «Evaluate And Queue All Turret Axis Commands (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Axis Application`. |
### Маршрутизация осей

| Нода | Назначение |
|---|---|
| `Route Standard Axis Group Solutions` | Решает массив axis-group requests по уже отправленным каналам. |
| `Update Standard Aim Sources And Axis Groups` | Выполняет операцию «Update Standard Aim Sources And Axis Groups» из раздела `Vehicle\|Weapon System\|Advanced\|Axis Routing`. |
### Баллистика

| Нода | Назначение |
|---|---|
| `Update All Weapon Ballistic Predictions` | Выполняет операцию «Update All Weapon Ballistic Predictions» из раздела `Vehicle\|Weapon System\|Advanced\|Ballistics`. |
### Совместимость

| Нода | Назначение |
|---|---|
| `Get Configured Weapon Muzzle Mesh And Socket (Advanced)` | Выполняет операцию «Get Configured Weapon Muzzle Mesh And Socket (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Compatibility`. |
### Конфигурация / установки

| Нода | Назначение |
|---|---|
| `Apply Built-In Weapon Installation Change (Advanced)` | Выполняет операцию «Apply Built-In Weapon Installation Change (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Configuration\|Installations`. |
| `Get Resolved Weapon Installation` | Выполняет операцию «Get Resolved Weapon Installation» из раздела `Vehicle\|Weapon System\|Advanced\|Configuration\|Installations`. |
| `Refresh Weapon Installation Registry` | Перестраивает соответствия `Weapon ID -> Axis Group/Muzzle`. |
### Конфигурация / runtime

| Нода | Назначение |
|---|---|
| `Rebuild Runtime From Built-In Configuration (Advanced)` | Выполняет операцию «Rebuild Runtime From Built-In Configuration (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Configuration\|Runtime Setup`. |
### Пользовательское наведение

| Нода | Назначение |
|---|---|
| `Make World Direction Aim Target (Advanced)` | Выполняет операцию «Make World Direction Aim Target (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Custom Aim`. |
| `Make World Point Aim Target (Advanced)` | Выполняет операцию «Make World Point Aim Target (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Custom Aim`. |
| `Solve Two-Axis Weapon Aim (Advanced)` | Выполняет операцию «Solve Two-Axis Weapon Aim (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Custom Aim`. |
### Дульные точки

| Нода | Назначение |
|---|---|
| `Resolve All Configured Weapon Muzzles (Advanced)` | Выполняет операцию «Resolve All Configured Weapon Muzzles (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Muzzles`. |
### Реестры

| Нода | Назначение |
|---|---|
| `Get Registered Axis Group Controller` | Возвращает low-level controller по `Axis Group ID`. |
| `Get Registered Axis Group For Weapon` | Находит осевую группу, связанную с Weapon ID. |
| `Get Registered Weapon Muzzle` | Возвращает low-level muzzle component по Weapon ID. |
| `Refresh Turret Axis Registry` | Выполняет операцию «Refresh Turret Axis Registry» из раздела `Vehicle\|Weapon System\|Advanced\|Registry`. |
| `Refresh Weapon Muzzle Registry` | Повторно сканирует muzzle components. |
### Runtime

| Нода | Назначение |
|---|---|
| `Update Vehicle Weapon System (Advanced / Detailed Result)` | Выполняет операцию «Update Vehicle Weapon System (Advanced / Detailed Result)» из раздела `Vehicle\|Weapon System\|Advanced\|Runtime`. |
| `Update Vehicle Weapon System (Advanced / Explicit Aim Sources)` | Выполняет операцию «Update Vehicle Weapon System (Advanced / Explicit Aim Sources)» из раздела `Vehicle\|Weapon System\|Advanced\|Runtime`. |
### Runtime-кадр

| Нода | Назначение |
|---|---|
| `Update Muzzle Traces And Ballistics (Advanced / Detailed)` | Выполняет операцию «Update Muzzle Traces And Ballistics (Advanced / Detailed)» из раздела `Vehicle\|Weapon System\|Advanced\|Runtime Frame`. |
### HUD и UI

| Нода | Назначение |
|---|---|
| `Get Cached Vehicle Weapon HUD Snapshot` | Выполняет операцию «Get Cached Vehicle Weapon HUD Snapshot» из раздела `Vehicle\|Weapon System\|Advanced\|UI`. |
| `Refresh Vehicle Weapon HUD Cache (Advanced)` | Выполняет операцию «Refresh Vehicle Weapon HUD Cache (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|UI`. |
### Оружейные лучи

| Нода | Назначение |
|---|---|
| `Update All Continuous Muzzle Traces (Advanced)` | Выполняет операцию «Update All Continuous Muzzle Traces (Advanced)» из раздела `Vehicle\|Weapon System\|Advanced\|Weapon Traces`. |

## Как поддерживается актуальность

Имена и визуальные пины берутся из reflected API runtime-модуля. При изменении публичной ноды этот справочник и `assets/js/blueprint-nodes.js` должны регенерироваться вместе.
