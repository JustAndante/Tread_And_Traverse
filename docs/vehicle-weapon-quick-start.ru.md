---
layout: default
lang: ru
page_kind: guide
title: "Vehicle Weapon System — Быстрый старт интеграции"
description: "Подключение нового танка к профильной системе вооружения"
product: weapon
doc_section: guide
---

# Vehicle Weapon System: быстрый старт

Эта инструкция помогает подключить вооружение нового танка без копирования
`BP_Tank_Master` и без переписывания общего графа. `Vehicle Weapon System`
обслуживает башни, орудия, MG, дымовые установки, стабилизацию, трассы,
баллистику, эффекты и сетевое состояние. Связанный `AmmoSystem` хранит типы
боеприпасов, их запас, состояние заряжания и перезарядки.

Подробные параметры танка описаны в
[общей инструкции интеграции]({{ '/docs/blueprint-authoring.ru.html' | relative_url }}),
а полный список нод — в
[справочнике Blueprint API]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}).

## Первый рабочий результат

Для обычной схемы `корпус → башня → орудие`:

1. Создайте child от `BP_Tank_Master`.
2. Назначьте свои меши компонентам `VehicleMesh`, `SK_Tower`, `SK_MainGun` и,
   если она есть, `SK_ComTower`.
3. Создайте реальные muzzle sockets на мешах оружия.
4. Продублируйте четыре профиля ближайшего демонстрационного танка:
   `DA_VWS_*`, `DA_WeaponLoadout_*`, `DA_ArmamentProfile_*` и
   `DA_TankVariant_*`.
5. Замените в копиях component/socket bindings и оружейные ассеты.
6. Назначьте верхний `DA_TankVariant_*` в `WeaponAimSystem`.
7. Запустите `Validate Vehicle Weapon System Configuration`, затем проверьте
   оружие в отдельной PIE-карте.

При первой интеграции не создавайте профили с нуля. Готовый близкий вариант
быстрее приводит к рабочему результату и показывает обязательные связи.

## Где находится каждая настройка

У каждого значения должен быть один владелец:

| Место | Что настраивается |
|---|---|
| `DA_VWS_MyTank` | оси башен, установки оружия, muzzle sockets и traces |
| `DA_WeaponLoadout_MyTank` | trigger, магазин, reload, heat, отдача, гильзы, smoke banks, FX и audio |
| `AmmoSystem → Ammo Type Definitions` | projectile, запас, trajectory prediction, иконка и input action каждого типа |
| Projectile Blueprint | `Initial Speed`, damage, impact/trail и отделяемый поддон |
| `DA_ArmamentProfile_MyTank` | ссылки на VWS и Weapon Loadout |
| `DA_TankVariant_MyTank` | одна верхняя точка подключения конкретного танка |

Не дублируйте скорость projectile, reload или эффекты в других местах. В
текущем workflow нет отдельных Effects или Smoke-профилей.

## 1. Выберите источник настроек

В `WeaponAimSystem` включите `Use Tank Profile Weapon System Settings`.

- **On — рекомендуемый вариант:** механика импортируется из
  `Tank Variant Profile`, а bindings остаются привязанными к компонентам
  конкретной машины.
- **Off — Local Configuration:** локальные массивы компонента полностью
  авторитетны; режим подходит для прототипа или самостоятельного Blueprint.

Не заполняйте профильный и локальный пути одновременно.

## 2. Используйте стабильные ID

ID описывает роль, а не имя меша:

```text
Axis Group IDs: MainTurretAxes, CommanderTurretAxes, InTowerMGAxes
Weapon IDs:     MainGun, CoaxMG, InTowerMG, Smoke
Ammo Type IDs:  APFSDS, HE, HEAT, Default
```

Один `Weapon ID` должен совпадать в installation, muzzle, loadout, ammo type и
optional weapon channel. Новый MG или дополнительное орудие добавляется новым
ID, без новой C++-сигнатуры и без правки `BP_Tank_Master`.

## 3. Настройте оси и muzzle

Откройте `DA_VWS_MyTank`.

### Оси

Одна Axis Group описывает одну независимую механику yaw/pitch.

| Установка | Типичная конфигурация |
|---|---|
| Основная башня | yaw pivot = `SK_Tower`, pitch pivot = `SK_MainGun` |
| Спаренный MG | общий `MainTurretAxes`, отдельный muzzle |
| Командирская башня | своя Axis Group и commander aim source |
| Pitch-only MG | yaw drive выключен, pitch передаётся компоненту или AnimBP |
| Фиксированное оружие | `Uses Axis Group` выключено |

Если кость уже вращает AnimBP или Control Rig, получайте рассчитанные углы в
AnimBP. Не заставляйте одновременно вращать тот же pivot двумя системами.

### Installation и muzzle

Для каждого `Weapon ID`:

1. Добавьте `Vehicle Weapon Installation` и выберите Axis Group либо фиксированный режим.
2. Добавьте `Vehicle Muzzle And Trace` с тем же ID.
3. Укажите реальный component и muzzle socket.
4. Оставьте `Ignore Owning Vehicle` включённым.
5. Включайте continuous trace только для оружия или HUD, которым он нужен.

Muzzle определяет физическое начало луча и выстрела. Запас, темп и скорость
projectile здесь не настраиваются.

## 4. Настройте Weapon Loadout

В `DA_WeaponLoadout_MyTank` одна запись описывает feed, trigger, timing, heat,
отдачу, launcher geometry и presentation одного оружия. Projectile class и
запас принадлежат Ammo Type Definitions и здесь не дублируются.

| Оружие | `Ammo Feed Mode` | `Trigger Behavior` |
|---|---|---|
| Главная пушка | `Chamber / Ready Round` | `Single Shot On Press` или `Repeat After Reload While Held` |
| MG | `Magazine / Belt` | `Automatic While Held` |
| Дымовые гранаты | `Round Bank / Launcher Bank` | `Single Shot On Press` или `Automatic While Held` |

Заполните `Initial Ammo Type ID`, loaded/ready capacity,
`Time Between Shots` и `Reload Duration`. Для MG при необходимости включите
`Use Heat / Overheat`.

`Vehicle Body Recoil Strength` задаёт физический вращательный толчок корпусу
от конкретного оружия. Ноль отключает его.

В `Effects & Audio` находятся muzzle flash, ground blast, fire/reload/overheat
audio, Camera Shake и crew callouts. Concurrency и attenuation остаются в самих
Sound assets или Audio Components. Impact, trail и damage принадлежат
Projectile Blueprint.

### Smoke

Smoke — обычный `Weapon ID`; отдельный Smoke Data Asset не нужен. В его
loadout укажите `Launcher Component`, `Launcher Banks`, реальные socket names,
ready capacity и reload. Projectile, запас, иконка и клавиша находятся в
`Ammo Type Definitions` записи `WeaponId=Smoke`.

## 5. Добавьте типы боеприпасов

В child выберите `AmmoSystem → Ammo Type Definitions`. Одна запись соответствует
паре `Weapon ID + Ammo Type ID`.

Заполните:

- `Projectile Class`;
- `Starting Count` и `Maximum Count`;
- параметры trajectory prediction, кроме скорости;
- UI icon;
- optional `Selection Input Action`.

Начальная скорость задаётся только в
`Projectile Movement → Initial Speed` выбранного Projectile Blueprint.
Баллистический вычислитель читает её оттуда. Не задавайте fallback-скорость в
другом месте.

`Initial Ammo Type ID` в Weapon Loadout явно определяет стартовый заряженный
тип. Выбор через `Set Selected Ammo Type` ставит другой тип следующим в очередь,
но не превращает уже заряженный снаряд мгновенно в другой.

Для четвёртого типа добавьте ещё одну Ammo Type запись с новым ID, projectile,
иконкой и запасом. Если ваш HUD не строит карточки динамически, добавьте ему
соответствующий визуальный элемент.

## 6. Соберите и назначьте профили

В `DA_ArmamentProfile_MyTank` назначьте поля с теми же названиями, которые
показаны в Details:

```text
Aiming / Turret Setup -> DA_VWS_MyTank
Weapon Loadouts       -> DA_WeaponLoadout_MyTank
```

Полученный Armament Profile назначьте в `DA_TankVariant_MyTank`. Затем в child:

```text
Tank Variant Profile                    -> DA_TankVariant_MyTank
Use Tank Profile Weapon System Settings -> On
```

На компоненте оставьте пустыми `Direct Weapon System Profile (Advanced)` и
`Direct Armament Profile (Fallback)`: для машины должен существовать один
очевидный профильный источник настроек.

Итоговая production-цепочка выглядит так:

```text
Tank Variant
└─ Armament Profile
   ├─ Aiming / Turret Setup (DA_VWS)
   └─ Weapon Loadouts

Vehicle child
└─ AmmoSystem
   └─ Ammo Type Definitions
```

## 7. Подключите input и UI

Передавайте press/release в
`Request Configured Weapon Trigger State(Weapon ID, Trigger Held)`. Настроенный
runtime и `AmmoSystem` выполняют cadence, reload и heat; не добавляйте
параллельные Timeline.

Для стандартного настроенного оружия этот единственный input проходит путь:

```text
input press/release
-> configured trigger route по Weapon ID
-> AmmoSystem проверяет и расходует заряженный боеприпас
-> runtime создаёт заряженный Projectile Class из настроенного muzzle
-> runtime воспроизводит recoil и Effects & Audio того же Weapon ID
-> отдельный reload timer этого Weapon ID завершает транзакцию AmmoSystem
```

`Blueprint Custom` — намеренное исключение: особая launch-транзакция остаётся в
child Blueprint, а компонент по-прежнему владеет configured trigger state и
reload timing. Не создавайте рядом второй стандартный путь выстрела.

Для переключаемых групп заполните `Selectable Weapon Channels`:

- `Set Active Weapon Channel` выбирает один канал;
- `Set Weapon Channel Active` комбинирует несколько каналов;
- `Cycle Weapon Channel` выбирает следующий или предыдущий.

HUD не должен повторять traces и баллистический расчёт. Получайте готовые данные
по нужному `Weapon ID`:

- `Get Weapon HUD Screen Data` — полный набор одного оружия;
- `Get Weapon Muzzle Trace HUD Data` — muzzle trace одного оружия;
- `Get Weapon Ballistic Aim HUD Data` — баллистический маркер одного оружия;
- `Get Aim Source HUD State` — конкретная камера, прицел или AI aim source;
- `Get Vehicle Weapon HUD Snapshot` — общий снимок для динамического списка
  любого числа оружия.

Так третье оружие или вторая пушка добавляются новым запросом по ID. Внешний
вид, карточки и уникальные сетки остаются обычным Blueprint/UMG пользователя.

## Добавление ещё одного оружия

Для нового MG, орудия, launcher или фиксированного оружия:

1. Выберите новый стабильный `Weapon ID`.
2. Добавьте installation и muzzle с этим ID в `DA_VWS_MyTank`.
3. Добавьте feed, timing, heat, recoil, launcher и presentation в
   `DA_WeaponLoadout_MyTank`.
4. Добавьте один или несколько Ammo Type с тем же Weapon ID.
5. При необходимости добавьте оружие в selectable weapon channel.
6. Передавайте press/release через ту же configured trigger-ноду.
7. Получайте HUD через те же запросы по Weapon ID.

Править `BP_Tank_Master` или добавлять новую C++-ноду не требуется.

## Проверка

1. `Validate Vehicle Weapon System Configuration` не возвращает blocking errors.
2. Каждый trace начинается из правильного socket; после проверки debug draw выключен.
3. Yaw/pitch соблюдают ограничения, а AnimBP получает нужные оси.
4. MainGun, каждый MG и Smoke создают правильные projectile, FX и audio.
5. Расход, reload, heat и replenish независимы для каждого `Weapon ID`.
6. Выбранный ammo type меняет следующий projectile и баллистический маркер.
7. Replenish не вызывает авто-выстрел и не сбрасывает текущую перезарядку.
8. Стабилизация удерживает направление на движущемся корпусе.
9. В сетевой игре оси и стрельба проверены минимум с двумя клиентами.

## Типовые проблемы

| Симптом | Сначала проверьте |
|---|---|
| Ось не движется | Axis Group ID, pivots, drive mode и владелец AnimBP/Control Rig |
| Оружие смотрит не туда | aim source, basis, installation и hierarchy pivots |
| Луч или выстрел начинается не там | component/socket muzzle записи нужного ID |
| Нет выстрела | одинаковый ID, enabled loadout, ammo type и trigger route |
| Неверный projectile | chambered Ammo Type и его `Projectile Class` |
| Маркер не совпадает с полётом | `Initial Speed` projectile и prediction settings Ammo Type |
| Нет FX или звука | `Effects & Audio`, component/socket и Sound asset concurrency |
| MG не охлаждается | Heat settings и отсутствие второго Blueprint heat Timeline |
| Smoke не стреляет | launcher component, banks, sockets и Round Bank state |
| Профиль не применяется | назначен верхний Tank Variant, прямые profile-поля пусты |

## Справочники

- [Blueprint-ноды Vehicle Weapon System](VehicleWeaponBlueprintNodes.ru.md)
- [Добавление своего танка в VehicleCore](../../../Content/VehicleCore/Documentation/Integrating_Your_Tank.md)
- `DA_VWS_T80U`, `DA_WeaponLoadout_T80U` и `BP_T80U_Variant` — пример основной
  пушки, двух MG и smoke banks.

Начинайте с Core API. Advanced-ноды нужны только для собственного scheduler,
нестандартных aim sources или миграции существующего графа.

