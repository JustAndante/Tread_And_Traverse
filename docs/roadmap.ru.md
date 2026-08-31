---
layout: default
lang: ru
page_kind: hub
doc_section: roadmap
title: "Tread & Traverse — Дорожная карта"
description: "Публичная дорожная карта Track Spline Builder и Vehicle Weapon System"
---

<section class="hub-hero">
  <div class="hub-hero__copy">
    <p class="eyebrow">TREAD & TRAVERSE · ПУБЛИЧНАЯ ДОРОЖНАЯ КАРТА</p>
    <h1>Дорожная карта</h1>
    <p>Что уже доступно, что блокирует первый покупательский релиз и что планируется дальше.</p>
  </div>
  <aside class="hub-hero__aside">
    <strong>English version</strong>
    <a href="{{ '/docs/roadmap.en.html' | relative_url }}">Open →</a>
  </aside>
</section>

<div class="guide-callout" markdown="1">
Roadmap показывает направление, а не обещает даты. Приоритеты могут меняться
после compatibility-тестов, замеров производительности и пользовательских
отчётов. Обновлено: **31 августа 2026**.
</div>

## Уже доступно

- двуязычная публичная документация обоих runtime-модулей;
- Track Builder, физический Solver, quality modes и editor-only диагностика;
- профильный multi-turret Vehicle Weapon System со стабилизацией, traces,
  баллистикой, настраиваемым оружием, HUD-данными и opt-in репликацией;
- curated Blueprint API для покупателей и валидаторы конфигурации;
- текущая pre-release цель: Unreal Engine 5.4, версия плагина `0.2.0-pre`.

## Сейчас — первый покупательский релиз

- завершить ручную проверку Leopard/T-80/T-90: оружие, UI, эффекты, reload и
  Smoke после последней профильной миграции;
- завершить визуальную и физическую проверку Track на T-80 после декомпозиции
  Solver;
- проверить listen server с клиентом: axis state, firing, held triggers,
  reload, heat, smoke banks и отсутствие duplicate presentation;
- собрать чистый BuildPlugin-архив и проверить его в новом пустом проекте;
- заполнить publisher metadata, support links, проверить права, подготовить
  скриншоты и Fab listing package.

Релиз готов только после совместного прохождения этих gates. Успешная сборка не
заменяет визуальную и сетевую проверку.

## Далее — производительность и удобство

- снизить стоимость remote/offscreen Track simulation без изменения принятой
  физики локальной машины;
- перевести неактивную и replenishment-работу оружия с per-frame polling на
  state-driven updates;
- повторять один и тот же benchmark одного и четырёх танков после каждого
  изолированного изменения;
- улучшать примеры профилей, validation messages и onboarding по реальным bug
  reports.

## Позже — на рассмотрении

- дополнительные версии Unreal Engine после отдельных build и acceptance runs;
- замеры движущихся и сетевых групп машин;
- дополнительные примеры схем вооружения и vehicle rigs;
- явная preload-фаза assets только если измерения массового spawn докажут её
  необходимость.

Пункты этого раздела не являются обещанием релиза. Они переходят в **Сейчас**
только после определения объёма и способа проверки.

## Повлияйте на roadmap

- [Сообщить о воспроизводимом баге](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=bug_report.yml)
- [Предложить улучшение](https://github.com/JustAndante/Tread_And_Traverse/issues/new?template=feature_request.yml)
- [Открыть русскую документацию]({{ '/ru/' | relative_url }})

Создавайте отдельный issue для каждой проблемы или идеи. Не публикуйте в
открытом issue приватные файлы проекта, пароли, ключи лицензий и персональные
данные.
