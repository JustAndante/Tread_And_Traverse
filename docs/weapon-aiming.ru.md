---
layout: default
lang: ru
page_kind: reference
title: "Weapon — Наведение и стабилизация"
description: "Настройка источников цели, режимов осей и механического привода"
product: weapon
doc_section: aiming
---

<p class="doc-breadcrumb">Сборка системы · Шаг 2 из 3</p>

# Наведение и стабилизация

Компонент должен получать один выбранный источник цели и применять его к уже
описанным физическим осям.

## Обычный порядок

1. `Update Vehicle Aim Sources` формирует External, Gunner, Commander и
   held/sub-gunner sources.
2. При смене режима вызовите `Configure Weapon Axis Aim And Stabilization`.
3. Для ручного механического движения вызовите
   `Submit Manual Weapon Axis Input` из события ввода.
4. Передавайте yaw и pitch раздельно: `(YawDelta, 0)` и `(0, PitchDelta)`.

Не пересобирайте массивы definition-структур каждый Tick. Камеры и
специфичная для проекта политика урона остаются логикой машины; стандартные
trigger state и presentation приходят из loadout нужного Weapon ID.

## Проверка

- каждая физическая ось движется только в разрешённом направлении;
- механические лимиты сохраняются при смене камеры;
- стабилизация не накладывается второй раз в Blueprint;
- спаренные установки используют одну физическую позу.

Подробности: [Aiming and Stabilization]({{ '/docs/vehicle-weapon-reference.ru.html#aiming-stabilization' | relative_url }}).

<div class="page-nav" markdown="1">
[← Схемы установки]({{ '/docs/weapon-installations.ru.html' | relative_url }})
[Далее: прицел и UI →]({{ '/docs/weapon-ui.ru.html' | relative_url }})
</div>

