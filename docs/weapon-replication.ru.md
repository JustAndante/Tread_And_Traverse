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

Включайте репликацию компонента только если именно он должен синхронизировать
оси. Камеры, локальный HUD и косметическое представление остаются локальными.

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

Подробности: [Replication]({{ '/docs/vehicle-weapon-reference.ru.html#replication' | relative_url }}).

<div class="page-nav" markdown="1">
[← Прицел и UI]({{ '/docs/weapon-ui.ru.html' | relative_url }})
[Далее: диагностика →]({{ '/docs/weapon-troubleshooting.ru.html' | relative_url }})
</div>

