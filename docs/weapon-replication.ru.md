---
layout: default
lang: ru
page_kind: reference
title: "Weapon — Репликация"
description: "Проверка сетевой роли осей и локального визуального runtime"
product: weapon
doc_section: replication
---

<p class="doc-breadcrumb">Запуск и поставка</p>

# Репликация

Включайте optional native axis path через
`Set Optimized Turret Replication Enabled` только если именно компонент должен
синхронизировать оси. Не запускайте рядом второй rotation RPC path для тех же
осей. Камеры, локальный HUD и косметическая подготовка остаются локальными.

## Порядок проверки

1. Подтвердите работу в single-player.
2. Проверьте owning client и серверную копию на listen server.
3. Проверьте simulated proxy второго игрока.
4. После этого запускайте dedicated server.

## Инварианты

- Axis Group ID и Weapon ID одинаковы на сервере и клиентах;
- authority применяет механические пределы;
- remote proxy получает позу, но не рассчитывает локальный camera runtime;
- серверная стрельба использует текущий физический muzzle socket сервера.

Защищайте специфичную для машины подготовку camera, AimCube и widgets на proxy
через `Should Evaluate Local Weapon Runtime`.

Подробности: [Replication]({{ '/docs/vehicle-weapon-reference.ru.html#replication' | relative_url }}).

<div class="page-nav" markdown="1">
[← Прицел и UI]({{ '/docs/weapon-ui.ru.html' | relative_url }})
[Далее: диагностика →]({{ '/docs/weapon-troubleshooting.ru.html' | relative_url }})
</div>

