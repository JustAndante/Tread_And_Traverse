---
layout: default
lang: ru
page_kind: reference
title: "Vehicle Weapon System — Подробный справочник"
description: "Профили, loadout, ammo, стрельба, HUD и репликация"
product: weapon
doc_section: reference
---

# Vehicle Weapon System: подробный справочник

`TurretSystemRuntime` не зависит от Track Spline Builder. Машина использует
один видимый компонент `Vehicle Weapon System` как общий фасад для осей,
наведения, muzzle traces, баллистики, настроенного оружия, presentation и
опциональной репликации.

Для первого результата используйте
[короткое руководство]({{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}).
Эта страница фиксирует нормальный контракт данных и runtime. Точные поисковые
имена Core и Advanced API находятся в
[справочнике Blueprint-нод]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}).

## Runtime-контракт

Обычный Blueprint-кадр состоит из трёх вызовов в фиксированном порядке:

1. `Update Weapon Traces And Ballistics`;
2. `Update Vehicle Aim Sources`;
3. `Update Vehicle Weapon System`.

Компонент кэширует подробные результаты. Обычный граф не должен каждый Tick
пересобирать registries, копировать большие массивы definitions, передавать
legacy trace samples или вручную применять pending axis commands.

`Set Weapon System Active` является единым lifecycle-gate для уничтоженной,
выключенной или отремонтированной машины. В неактивном состоянии компонент
пропускает aim, traces, баллистику, UI, стабилизацию и native replication, даже
если владелец продолжает вызывать компактные update-ноды.

## Один владелец каждой настройки

Рекомендуемая полная цепочка машины:

```text
Tank Variant Profile
└─ Armament Profile
   ├─ Aiming / Turret Setup (Vehicle Weapon System Profile)
   └─ Weapon Loadouts (Vehicle Weapon Loadout Setup)

Vehicle Ammo System
└─ Ammo Type Definitions
```

| Место | Чем владеет |
| --- | --- |
| Aiming / Turret Setup | оси, установки, component/socket bindings muzzle и traces |
| Weapon Loadout | trigger, feed, cadence, reload, heat, recoil, launcher banks, гильзы, эффекты и звук |
| Ammo Type Definition | projectile class, запас, prediction settings кроме скорости, иконка и input |
| Projectile Blueprint | `Initial Speed`, damage, impact/trail и optional sabot |

Скорость projectile имеет одного владельца:
`Projectile Movement -> Initial Speed` загруженного Projectile Class.
Баллистика читает это значение. Второй fallback скорости в профиле машины не
используется.

Smoke является обычным `Weapon ID`. Его launcher geometry и timing принадлежат
loadout, а projectile и запас — Ammo Type. Отдельный Smoke-профиль или
compatibility getter не нужны.

## Выберите один authoring path

Если назначен `Tank Variant Profile`, оставьте
`Use Aiming / Turret Setup From Tank Profile` включённым. Компонент импортирует
оси, установки и muzzle/trace definitions из вложенного профиля и скрывает
локальные override-массивы.

Выключайте тумблер только для рига, где эти три набора definitions должны
принадлежать локальным массивам. Tank Variant всё равно может задавать loadout
и остальные настройки машины. Не заполняйте оба пути как конкурирующие
production-источники.

`Direct Weapon System Profile (Advanced)` предназначен для прямого authoring и
совместимости. `Direct Armament Profile (Fallback)` используется только без
Tank Variant. В обычном Tank Variant workflow оставляйте оба поля пустыми.

Выполните `Initialize Vehicle Armament Profile`, затем
`Validate Vehicle Weapon System Configuration`. Профильные assets и физические
bindings разрешаются и кэшируются при инициализации. Во время выстрела assets
не загружаются, а компоненты Actor не сканируются.

## Стабильные ID

Используйте ролевые ID, не зависящие от конкретного Skeletal Mesh:

- Axis Group ID: `MainTurretAxes`, `CommanderTurretAxes`, `InTowerMGAxes`;
- Weapon ID: `MainGun`, `CoaxMG`, `InTowerMG`, `Smoke`;
- Ammo Type ID: `APFSDS`, `HE`, `HEAT`, `Default`.

Один Weapon ID связывает installation, muzzle, loadout, ammo types, HUD-запросы
и optional selectable channel. Имена компонентов, костей и сокетов являются
bindings конкретной модели и могут отличаться между машинами.

<a id="installations"></a>

## Схемы установки

### Основное орудие и спаренный MG

- одна общая группа осей, обычно `MainTurretAxes`;
- отдельные installations `MainGun` и `CoaxMG`;
- отдельная muzzle-запись для каждого оружия, даже если component общий.

Они используют одну физическую позу, но имеют независимые traces, ammo,
cadence, heat, presentation и HUD state.

### Независимая командирская башня

Создайте отдельную Axis Group со своими yaw/pitch pivots и commander aim source.
Привяжите командирское оружие и muzzle к этой группе.

### Parent-mounted или pitch-only MG

Используйте `Parent Mounted (Limited Cone)`, когда обе плоскости механически
ограничены относительно родителя. Для pitch-only или yaw-only установки
выключите неиспользуемую плоскость. Параллакс между отдельным muzzle и основным
орудием является нормальным.

### Неподвижное оружие

Выключите `Uses Axis Group`, сохранив валидную muzzle definition. Неподвижное
оружие использует те же loadout, trigger, ammo, presentation и HUD API.

Фиксированного количества оружия нет. Для нового Weapon ID добавьте installation,
muzzle и loadout, не расширяя C++ или master Blueprint API.

## Loadout, ammo и стрельба

Типичные сочетания feed и trigger:

| Оружие | Feed | Trigger behavior |
| --- | --- | --- |
| Main gun | `Chamber / Ready Round` | `Single Shot On Press` или `Repeat After Reload While Held` |
| MG/autocannon | `Magazine / Belt` | `Automatic While Held` |
| Smoke launcher | `Round Bank / Launcher Bank` | одиночный или автоматический while held |

В loadout задаются `Initial Ammo Type ID`, ready capacity,
`Time Between Shots` и `Reload Duration`. Heat включается только для оружия,
которому он нужен. `Vehicle Body Recoil Strength` задаёт физический толчок
корпусу от конкретного оружия; ноль отключает его.

Передавайте press/release через
`Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. Стандартное
настроенное оружие расходует заряженный ammo, создаёт chambered Projectile Class
из resolved muzzle, воспроизводит recoil/effects/audio и завершает одну reload-
транзакцию этого Weapon ID. Не добавляйте второй Timeline выстрела.

`Blueprint Custom` — явное исключение для необычной launch-транзакции. Custom
Blueprint выполняет authoritative shot и только после принятия транзакции
вызывает настроенное presentation.

Переключаемые группы используют `Set Active Weapon Channel`,
`Set Weapon Channel Active`, `Set Active Weapon Channels` или
`Cycle Weapon Channel`. `Request Weapon Channel Trigger State` передаёт один
press/release всем оружиям выбранного channel.

<a id="aiming-stabilization"></a>

## Наведение и стабилизация

`Update Vehicle Aim Sources` подготавливает настроенные External, Gunner,
Commander и auxiliary aim sources. Вызывайте
`Configure Weapon Axis Aim And Stabilization` только при смене камеры, режима
оружия или стабилизации; не пересобирайте definitions каждый Tick.

Для ручного управления вызывайте `Submit Manual Weapon Axis Input` из input-
события. Yaw-only и pitch-only input должны идти отдельными линиями. Значения
активируют соответствующую плоскость механического привода, но не прибавляются
как угол или вторая компенсация стабилизации.

AnimBP или Control Rig может читать `Get Configured Axis Group Rotations`, но
писать один физический pivot должна только одна система. Не накладывайте поверх
world stabilization компонента вторую компенсацию вращения корпуса.

<a id="ui-frame"></a>

## HUD и прицелы

Виджеты читают согласованный кэш и не запускают собственную muzzle trace или
баллистическую симуляцию.

- `Get Weapon HUD Screen Data` — полный экранный набор одного Weapon ID;
- `Get Weapon Muzzle Trace HUD Data` — физический muzzle trace этого оружия;
- `Get Weapon Ballistic Aim HUD Data` — его баллистическое решение;
- `Get Aim Source HUD State` — любой настроенный camera, sight или AI source;
- `Get Active View Aim HUD Screen Data` — текущий выбранный view source;
- `Get Vehicle Weapon HUD Snapshot` — масштабируемый снимок любого числа оружия.

`Refresh Vehicle Weapon HUD Cache (Advanced)` нужен только для явного custom
Player Controller, projection mode или независимого UI schedule.

## Правила производительности

- включайте continuous traces только для оружия или HUD, которым они нужны;
- выключайте debug drawing после настройки;
- не сканируйте компоненты и не загружайте assets на fire path;
- не проверяйте reload/replenishment или неактивный heat вторым Blueprint Tick,
  когда этим уже владеет настроенный runtime;
- на proxies защищайте специфичную для машины camera/UI подготовку через
  `Should Evaluate Local Weapon Runtime`.

<a id="replication"></a>

## Репликация

Native axis replication включается явно через
`Set Optimized Turret Replication Enabled`. Не запускайте рядом второй rotation
RPC path для тех же осей.

Порядок проверки:

1. single-player;
2. owning client и authority-копия на listen server;
3. simulated proxy второго игрока;
4. dedicated server, если проект его поддерживает.

Stable Axis Group и Weapon ID должны совпадать на всех копиях. Authority заново
применяет механические пределы; proxies получают физическую позу без расчёта
локального camera runtime. Authoritative firing использует текущий физический
muzzle socket сервера, а не переданный клиентом projectile transform.

## Финальная проверка

- все связанные профили валидны, каждый configured binding разрешается;
- MainGun, каждый MG, Smoke, выбор ammo, reload, heat, replenish, recoil,
  ejection, эффекты и звук работают независимо по Weapon ID;
- полёт projectile и баллистический маркер используют одну class speed;
- held-fire переживает reload и последовательно обслуживает launcher banks;
- отсутствуют duplicate FX, RPC spam, Blueprint runtime errors и debug draw;
- listen server с одним клиентом проходит те же проверки стрельбы и осей.

<div class="page-nav" markdown="1">
[← Руководство]({{ '/docs/vehicle-weapon-system.ru.html' | relative_url }})
[Blueprint-ноды →]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }})
</div>
