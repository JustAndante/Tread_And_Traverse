---
layout: default
title: "Vehicle Weapon System: Blueprint-ноды — Русский"
description: "Справочник Blueprint-нод Vehicle Weapon System"
lang: ru
page_kind: reference
---

<div class="doc-breadcrumbs">
  <a href="{{ '/ru/' | relative_url }}">← Русская документация</a>
  <a href="{{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}">Руководство</a>
  <a class="is-active" href="{{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}">Blueprint-ноды плагина</a>
  <a href="{{ '/docs/blueprint-authoring.ru.html' | relative_url }}">Blueprint проекта</a>
  <a href="{{ '/docs/vehicle-weapon-cpp-api.ru.html' | relative_url }}">C++ API</a>
  <a href="{{ '/docs/vehicle-weapon-blueprint-nodes.en.html' | relative_url }}">English</a>
</div>

# Blueprint-ноды Vehicle Weapon System

Система специально разделена на два уровня:

- `Vehicle | Weapon System | Core` — ноды, из которых собирается обычная машина;
- `Vehicle | Weapon System | Advanced` — явное управление каналами, реестрами, отдельными контроллерами и подробными runtime-кадрами.

Начинайте с `Core`. Переходите к `Advanced` только тогда, когда стандартный компонентный workflow действительно не подходит.

> Визуальный блок в каждой строке ниже строится по актуальной публичной `UFUNCTION`-сигнатуре: показаны реальное имя ноды, все exec/data-пины и параметры `AdvancedDisplay` в развёрнутом виде.

<section class="bp-showcase" aria-label="Пример Blueprint-графа Vehicle Weapon System">
  <div class="bp-showcase__copy">
    <span class="bp-showcase__eyebrow">ОБЫЧНЫЙ RUNTIME-КАДР</span>
    <strong>Три вызова в фиксированном порядке</strong>
    <p>Сначала обновляются лучи и баллистика, затем источники прицеливания, после чего система рассчитывает и применяет команды всех осей.</p>
    <span class="bp-showcase__note">Это основной маршрут. Подробные Advanced-ноды нужны только нестандартным интеграциям.</span>
  </div>
  <div class="bp-graph" role="img" aria-label="Последовательность трёх основных runtime-нод Vehicle Weapon System">
    <div class="bp-graph__flow">
      <div class="bp-node bp-node--system">
        <span class="bp-node__phase">01 · TRACES</span>
        <div class="bp-node__header">Update Weapon Traces And Ballistics</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port"><i class="bp-port__dot"></i>Target</span><span class="bp-port bp-port--bool bp-port--out"><i class="bp-port__dot"></i>Success</span></div>
        </div>
      </div>
      <span class="bp-wire" aria-hidden="true"></span>
      <div class="bp-node bp-node--system">
        <span class="bp-node__phase">02 · AIM SOURCES</span>
        <div class="bp-node__header">Update Vehicle Aim Sources</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port"><i class="bp-port__dot"></i>Target</span><span class="bp-port bp-port--bool bp-port--out"><i class="bp-port__dot"></i>Success</span></div>
        </div>
      </div>
      <span class="bp-wire" aria-hidden="true"></span>
      <div class="bp-node bp-node--system">
        <span class="bp-node__phase">03 · SOLVE</span>
        <div class="bp-node__header">Update Vehicle Weapon System</div>
        <div class="bp-node__ports">
          <div class="bp-node__port-row"><span class="bp-port bp-port--exec"><i class="bp-port__dot"></i>Exec</span><span class="bp-port bp-port--exec bp-port--out"><i class="bp-port__dot"></i>Then</span></div>
          <div class="bp-node__port-row"><span class="bp-port bp-port--number"><i class="bp-port__dot"></i>Delta Seconds</span><span class="bp-port bp-port--bool bp-port--out"><i class="bp-port__dot"></i>Success</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

## Обычный runtime-граф

Вызывайте эти ноды в указанном порядке после подготовки камеры и AimCube:

1. `Update Weapon Traces And Ballistics` — обновляет непрерывные лучи всех зарегистрированных дульных срезов и, при необходимости, баллистику;
2. `Update Vehicle Aim Sources` — строит и кэширует External, Gunner, Commander и дополнительные источники прицеливания;
3. `Update Vehicle Weapon System` — маршрутизирует кэшированные цели на все настроенные оси и формирует команды физическим pivot-компонентам.

Каждая нода возвращает простой `Success`. Подробные результаты сохраняются в компоненте и доступны диагностическим запросам. Нормальному графу не нужно собирать массивы axis requests, вручную обновлять реестры или применять pending-команды.

## Core — Runtime

| Нода | Назначение |
|---|---|
| `Update Weapon Traces And Ballistics` | Обновляет muzzle transforms, непрерывные weapon traces и опциональный ballistic cache. |
| `Update Vehicle Aim Sources` | Преобразует настроенные camera/AimCube inputs в единый кэш источников прицеливания. |
| `Update Vehicle Weapon System` | Решает и маршрутизирует оси по уже кэшированным источникам; обычная финальная нода кадра. |

## Core — Axis Control

| Нода | Назначение |
|---|---|
| `Set Weapon Axis Control State` | Меняет yaw/pitch aim channels и включение стабилизации для указанного `Axis Group ID`. Вызывайте при смене режима, а не каждый Tick. |
| `Arm Weapon Axis Mechanical Drive` | Сообщает стабилизированной оси о ручном вводе. Передавайте yaw и pitch отдельными событиями: `(YawDelta, 0)` и `(0, PitchDelta)`. Значение не накапливается как угол. |
| `Reset Weapon Axis Control To Defaults` | Возвращает runtime-состояние осевой группы к настройкам из definition/profile. |
| `Get Weapon Axis Control State` | Возвращает текущие каналы, стабилизацию и временное состояние выбранной осевой группы. |

## Core — Configuration

| Нода | Назначение |
|---|---|
| `Apply Assigned Weapon System Profile` | Применяет Data Asset, назначенный в `Configuration Profile`. Также доступна как кнопка Details. |
| `Apply Weapon System Profile` | Применяет переданный профиль; может сохранить vehicle-specific bindings и сразу перестроить runtime. |
| `Export Current Setup To Assigned Weapon System Profile` | Копирует текущие embedded definitions в назначенный Data Asset. Изменяет asset — используйте в редакторе осознанно. |
| `Validate Assigned Weapon System Profile Compatibility` | Проверяет профиль и возможность сохранить локальные component/socket bindings без применения. |
| `Validate Vehicle Weapon System Configuration` | Перестраивает реестры и возвращает полный readiness report с ошибками и предупреждениями. |

## Core — UI

### Запросы от Actor

Эти ноды удобны для универсальных widgets: достаточно передать Actor машины.

| Нода | Назначение |
|---|---|
| `Find Vehicle Weapon System` | Находит `Vehicle Weapon System` у Actor. |
| `Get Vehicle Weapon Trace UI` | Возвращает muzzle start, resolved trace end, screen position и hit-флаг для одного Weapon ID. |
| `Get Vehicle Weapon Ballistic UI` | Возвращает ballistic aim point, screen position и hit-флаг. |
| `Get Vehicle Weapon UI Pair` | Компактный адаптер для HUD с двумя выбранными Weapon ID; runtime при этом не ограничен двумя оружиями. |

### Запросы от компонента

| Нода | Назначение |
|---|---|
| `Get Cached Weapon UI State` | Возвращает объединённое UI-состояние одного оружия. |
| `Get Cached Weapon Trace UI` | Возвращает только непрерывный muzzle trace и его экранную позицию. |
| `Get Cached Weapon Ballistic UI` | Возвращает ballistic result и его экранную позицию. |
| `Get Cached Aim Source UI State` | Читает произвольный именованный aim source. |
| `Get Cached Standard Aim Source UI State` | Читает стандартный канал через enum без ручного имени. |

## Core — Replication

| Нода | Назначение |
|---|---|
| `Set Native Axis Replication Enabled` | Включает или выключает встроенную controlled-rate репликацию осей. Не включайте одновременно со старым rotation RPC workflow. |
| `Should Evaluate Local Weapon Runtime` | Возвращает, должна ли эта копия Pawn считать локальные aim sources, traces и ballistics. Используйте как gate для vehicle-specific Blueprint-логики. |

## Advanced — Configuration и Registry

| Нода | Назначение |
|---|---|
| `Set Weapon Definition Source` | Переключает источник definitions во время выполнения. |
| `Rebuild Embedded Weapon Runtime` | Пересоздаёт внутренние axis controllers и muzzle components из embedded definitions. |
| `Refresh Turret Presentation Synchronization` | Повторно строит Tick prerequisites после runtime-замены rig/profile. |
| `Refresh Weapon Installation Registry` | Перестраивает соответствия `Weapon ID -> Axis Group/Muzzle`. |
| `Get Weapon Installation State` | Возвращает разрешённое runtime-состояние одной установки. |
| `Apply Embedded Weapon Installation Change` | Переназначает оружию axis group и/или muzzle без полной замены профиля. |
| `Refresh Weapon Axis Registry` | Повторно сканирует контроллеры осевых групп владельца. |
| `Get Registered Axis Group Controller` | Возвращает low-level controller по `Axis Group ID`. |
| `Get Registered Axis Group For Weapon` | Находит осевую группу, связанную с Weapon ID. |
| `Refresh Weapon Muzzle Registry` | Повторно сканирует muzzle components. |
| `Get Registered Weapon Muzzle` | Возвращает low-level muzzle component по Weapon ID. |

## Advanced — Aim Channels

| Нода | Назначение |
|---|---|
| `Get Standard Aim Channel Name` | Преобразует стандартный enum канала в стабильное `FName`. |
| `Set Standard Aim Channel Target` | Записывает цель в стандартный канал. |
| `Set Named Aim Channel Target` | Записывает цель в произвольный именованный канал. |
| `Submit Standard Aim Frame` | Одним вызовом обновляет все стандартные каналы с общей revision. |
| `Set Active Standard Aim Channel` | Выбирает активный стандартный канал для маршрутов, использующих active source. |
| `Set Aim Channel Enabled` | Включает или выключает именованный канал без удаления его состояния. |
| `Get Aim Channel State` | Читает состояние именованного канала. |
| `Get Standard Aim Channel State` | Читает состояние стандартного канала по enum. |
| `Clear Aim Channel` | Удаляет состояние одного именованного канала. |
| `Clear All Aim Channels` | Очищает все кэшированные каналы. |

## Advanced — Muzzles, traces и ballistics

| Нода | Назначение |
|---|---|
| `Update Registered Weapon Muzzles` | Обновляет shadow state всех зарегистрированных muzzle components и возвращает подробный batch result. |
| `Update Registered Native Weapon Traces` | Выполняет нативные continuous traces для всех зарегистрированных muzzle components. |
| `Get Weapon Trace State` | Читает кэшированный trace state выбранного оружия. |
| `Get Native Weapon Trace State` | Читает именно нативное состояние, минуя legacy compatibility cache. |
| `Update Registered Weapon Ballistics` | Обновляет ballistic prediction всех включённых установок. |
| `Get Weapon Ballistic State` | Читает подробный кэш баллистики одного Weapon ID. |

## Advanced — подробные runtime-кадры и UI

| Нода | Назначение |
|---|---|
| `Update Weapon Runtime Frame (Advanced / Detailed)` | Подробная версия core runtime-ноды; возвращает полный `Weapon Runtime Frame Result`. |
| `Update Vehicle Aim Source Frame (Advanced / Detailed)` | Подробная версия обновления camera/AimCube sources с collision/debug параметрами. |
| `Update Vehicle Weapon System Frame (Advanced / Explicit Aim)` | Решает систему по переданному Standard Aim Frame. |
| `Update Vehicle Weapon System Frame (Advanced / Detailed)` | Решает систему по уже кэшированным aim sources и возвращает полный frame result. |
| `Refresh Vehicle Weapon UI Cache (Advanced)` | Явно перепроецирует UI с заданным Player Controller или viewport-relative режимом. |
| `Get Cached Vehicle Weapon UI Frame` | Возвращает полный произвольного размера UI frame вместо компактных запросов одного оружия. |

## Advanced — Axis Application и Routing

| Нода | Назначение |
|---|---|
| `Evaluate And Queue Registered Axis Solutions` | Решает переданные axis requests и ставит физические команды в очередь. |
| `Apply Pending Vehicle Axis Commands` | Применяет подробный batch pending-команд вручную. В embedded workflow это делает pre-presentation Tick. |
| `Apply Pending Vehicle Turret Commands (Advanced)` | Компактная bool-версия ручного применения pending-команд. |
| `Route Aim Channel To Turret Solution` | Маршрутизирует именованный канал на явно заданный low-level controller и basis transform. |
| `Route Aim Channel To Configured Turret` | То же, но использует basis, настроенный в controller. |
| `Route Split Aim Channels To Configured Turret` | Использует разные именованные источники для yaw и pitch. |
| `Route Standard Aim Channel To Configured Turret` | Маршрутизирует один стандартный enum-канал. |
| `Route Standard Split Aim Channels To Configured Turret` | Маршрутизирует разные стандартные каналы на yaw и pitch. |
| `Route Active Aim Channel To Configured Turret` | Использует текущий active standard channel. |
| `Update Standard Aim Frame And Turret Solution` | Отправляет frame и сразу решает одну явно указанную турель. |
| `Route Standard Axis Group Solutions` | Решает массив axis-group requests по уже отправленным каналам. |
| `Update Standard Aim Frame And Axis Groups` | Отправляет frame и решает массив групп одним вызовом. |

## Advanced — low-level Turret Axis Controller

Эти ноды предназначены для самостоятельного использования `Turret Axis Controller` без facade-компонента.

| Нода | Назначение |
|---|---|
| `Update Low-Level Turret Solution (Advanced)` | Решает target относительно явно переданного aim basis. |
| `Update Low-Level Turret From Active Target (Advanced)` | Решает ранее установленную active target. |
| `Update Low-Level Configured Turret (Advanced)` | Использует component references, настроенные в controller. |
| `Update Low-Level Split Axis Turret (Advanced)` | Принимает отдельные yaw/pitch targets. |
| `Validate Configured Setup` | Проверяет ссылки и настройки controller. |
| `Set Active Aim Target` | Сохраняет общую active target. |
| `Set Active Axis Aim Targets` | Сохраняет разные active targets для yaw и pitch. |
| `Clear Active Aim Target` | Сбрасывает active target state. |
| `Has Valid Active Aim Target` | Проверяет наличие пригодной active target. |
| `Set Weapon Axis Mount Mode` | Меняет механический режим крепления solver. |
| `Get Weapon Axis Mount Mode` | Возвращает текущий mount mode. |

## Advanced — low-level Weapon Muzzle

| Нода | Назначение |
|---|---|
| `Update Low-Level Weapon Muzzle (Advanced)` | Снимает настроенный muzzle transform и строит shadow state. |
| `Execute Low-Level Muzzle Trace (Advanced)` | Выполняет trace непосредственно из low-level muzzle component. |
| `Validate Configured Muzzle` | Проверяет component/socket, trace settings и выдаёт сообщение. |

## Advanced — Custom Aim

| Нода | Назначение |
|---|---|
| `Make Turret Aim Target From World Point (Advanced)` | Создаёт target, зафиксированный на мировой точке. |
| `Make Turret Aim Target From World Direction (Advanced)` | Создаёт direction-only target без обязательной точки попадания. |
| `Solve Two Axis Turret Aim (Advanced)` | Чистая calculate-only функция solver без component state и применения трансформов. |

## Advanced — Migration

Эти адаптеры нужны при постепенном переносе старого Blueprint-графа. В новой машине их лучше не использовать.

| Нода | Назначение |
|---|---|
| `Get Configured Weapon Axis Rotations` | Читает фактические yaw/pitch rotations для старого звука, UI или networking bridge. |
| `Make Weapon Trace Sample` | Собирает legacy trace sample из явного hit-флага. |
| `Make Legacy Weapon Trace Sample From Resolved End` | Восстанавливает sample, когда старый helper не отдаёт hit-флаг. |
| `Submit Weapon Trace Sample` | Отправляет один внешний legacy trace в compatibility cache. |
| `Submit Weapon Trace Frame` | Отправляет массив legacy traces одной revision. |
| `Clear Weapon Trace State` | Очищает compatibility state одного оружия. |
| `Clear All Weapon Trace States` | Очищает весь compatibility trace cache. |
| `Compare Native And Legacy Weapon Traces` | Выполняет оба пути и возвращает расхождения для миграционной проверки. |
| `Get Weapon Trace Compatibility Frame` | Возвращает старый двухоружейный набор trace-переменных. |
| `Get Vehicle Aim Compatibility Frame` | Возвращает старый набор camera/AimCube endpoints. |
| `Get Two Weapon UI Compatibility Frame` | Возвращает старый фиксированный HUD-frame для двух Weapon ID. |
| `Get Weapon Ballistic Crosshair Frame` | Возвращает старую пару ballistic crosshair points. |
| `Update Vehicle Weapon System Frame (Advanced / Migration)` | Полный переходный кадр с explicit aim, axis requests и legacy traces. |

## Advanced — Replication diagnostics

| Нода | Назначение |
|---|---|
| `Should Use Legacy Axis Networking` | Проверяет, должен ли проект пока оставаться на старом networking path. |
| `Update Native Axis Replication Diagnostics` | Принудительно обновляет/публикует replication diagnostics; обычный runtime делает это сам. |

## Дополнительные vehicle-ноды

| Нода | Назначение |
|---|---|
| `Calculate Spring Arm Zoom Magnet` | Считает длину SpringArm и боковой zoom magnet с интерполяцией. |
| `Calculate Camera FOV Zoom` | Безопасно ограничивает zoom index и интерполирует FOV. |
| `Is Component Overlapping Named Object` | Проверяет overlap по имени объекта без небезопасного чтения пустого массива. |
| `Safe Divide (Double)` | Делит конечные double-значения с fallback при нулевом/невалидном знаменателе. |



