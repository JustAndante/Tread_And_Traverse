---
layout: default
title: "Vehicle Weapon System — Быстрая настройка"
description: "Минимальная рабочая настройка Vehicle Weapon System"
lang: ru
page_kind: guide
---

<div class="doc-breadcrumbs">
  <a href="{{ '/ru/' | relative_url }}">← Документация</a>
  <a class="is-active" href="{{ '/docs/vehicle-weapon-system.ru.html' | relative_url }}">Инструкция по вооружению</a>
  <a href="{{ '/docs/vehicle-weapon-system.en.html' | relative_url }}">English</a>
</div>

# Vehicle Weapon System — быстрая настройка

Результат: настроенные оси башни и оружейные установки под управлением одного компонента.

## 1. Добавьте компонент

Добавьте один компонент `Vehicle Weapon System` в Blueprint машины.

Установите `Definition Source = Embedded Definitions`.

## 2. Добавьте определения

1. Добавьте `Embedded Axis Definition` для каждого независимо наводимого механизма yaw/pitch.
2. Добавьте `Embedded Muzzle Definition` для каждого логического оружия или ствола.
3. Добавьте `Embedded Weapon Installation` для каждого Weapon ID.
4. Нажмите `Rebuild Embedded Weapon Runtime`.
5. Нажмите `Validate Vehicle Weapon System Configuration`.

Используйте стабильные ID, например `MainTurretAxes`, `MainGun`, `CoaxMG` или `RoofMG`. В привязках должны использоваться те же ID.

## 3. Обновляйте систему

В графе обновления машины вызывайте ноды в таком порядке:

1. `Update Weapon Traces And Ballistics`
2. `Update Vehicle Aim Sources`
3. `Update Vehicle Weapon System`

Переключение камер, UI, ввод стрельбы, боекомплект и урон остаются логикой Blueprint проекта.

## 4. Проверьте

Проверьте:

- readiness показывает `Ready` без ошибок;
- каждая ось двигает нужные кости;
- каждый Weapon ID связан с правильным muzzle;
- стабилизация корректна при движении корпуса;
- сервер и owning client совпадают в сетевом PIE;
- в финальной сборке выключена debug-отрисовка.

## Дополнительно

[Справочник Blueprint-нод Vehicle Weapon System]({{ '/docs/vehicle-weapon-blueprint-nodes.ru.html' | relative_url }}) содержит дополнительные управляющие и информационные ноды.
