---
layout: default
lang: ru
page_kind: reference
title: "Weapon — Схемы установки"
description: "Настройка основного, спаренного, независимого и неподвижного оружия"
product: weapon
doc_section: installations
---

<p class="doc-breadcrumb">Сборка системы · Шаг 1 из 3</p>

# Схемы установки

Сначала выберите механическую схему. От неё зависит, нужна ли оружию собственная
группа осей и какой muzzle binding оно использует.

| Схема | Настройка |
| --- | --- |
| Основное + спаренное | Одна Axis Group, разные Weapon ID и дульные точки. |
| Независимая башня | Отдельная Axis Group и связанные с ней установки. |
| Установка на родителе | `Parent Mounted (Limited Cone)` и механический конус. |
| Неподвижное оружие | `Uses Axis Group` выключено, muzzle definition сохранён. |
| Несколько стволов | Отдельные installation и muzzle definition для каждого Weapon ID. |

## Проверка

- каждый `Weapon ID` уникален и стабилен;
- установка ссылается на ожидаемую Axis Group;
- дульная точка начинается на правильном компоненте и сокете;
- спаренное оружие не создаёт вторую копию тех же физических осей.

Подробные варианты: [Installation Patterns]({{ '/docs/vehicle-weapon-reference.ru.html#installations' | relative_url }}).

<div class="page-nav" markdown="1">
[← Руководство]({{ '/docs/vehicle-weapon-system.ru.html' | relative_url }})
[Далее: наведение →]({{ '/docs/weapon-aiming.ru.html' | relative_url }})
</div>

