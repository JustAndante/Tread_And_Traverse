---
layout: default
lang: ru
page_kind: reference
title: "Track — Качество и сеть"
description: "Выбор качества гусеницы для локальных, удалённых и серверных копий"
product: track
doc_section: quality-network
---

<p class="doc-breadcrumb">Запуск и поставка</p>

# Качество и сеть

Качество гусеницы — локальное визуальное решение. Оно не должно создавать
лишнюю репликацию или заставлять dedicated server считать косметическую физику.

## Выберите политику

- `Full Physical` — локальная или близкая машина.
- `Cheap Remote` — дешёвый визуальный контур для удалённой машины.
- `Local Ownership + Distance` — каждый клиент выбирает стоимость сам.
- `External` — проект переключает качество через Blueprint.

## Проверьте роли

1. Локальная машина использует ожидаемое полное качество.
2. Удалённая машина переключается независимо от владельца.
3. Cosmetic quality не реплицируется.
4. Dedicated server не создаёт визуальные звенья и не запускает дорогой solve.

Полный список полей: [Simulation и Runtime]({{ '/docs/track-settings-reference.ru.html#simulation-runtime' | relative_url }}).

<div class="page-nav" markdown="1">
[← Звенья и движение]({{ '/docs/track-links-motion.ru.html' | relative_url }})
[Далее: диагностика →]({{ '/docs/track-troubleshooting.ru.html' | relative_url }})
</div>

