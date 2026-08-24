---
layout: default
lang: ru
page_kind: reference
title: "Track Spline Builder — Руководство"
description: "Короткая настройка и практические задачи Track Spline Builder"
product: track
doc_section: guide
---

# Track Spline Builder

Создаёт замкнутую визуальную гусеницу по костям ходовой, деформирует её по
подвеске и поверхности и размещает звенья с постоянным количеством.

<div class="guide-callout" markdown="1">
**Рекомендуемый путь:** сначала соберите одну сторону по разделу ниже. Когда она
работает в PIE, скопируйте компоненты на вторую сторону и поменяйте только имена
костей, направление и визуальные меши.
</div>

<a id="quick-start"></a>

## Быстрый старт

### 1. Подготовьте Actor машины

Для каждой стороны добавьте:

- один `Spline Component`;
- один `Track Spline Builder`;
- один `Track Physics Solver`.

В Skeletal Mesh должны существовать последовательно названные кости опорных
катков. Крайние и поддерживающие колёса можно указать отдельно.

### 2. Настройте визуальные звенья

В `Track Spline Builder`:

1. Выберите созданный сплайн в `Source Spline`.
2. Назначьте `Track Link Mesh` и, если используется, меш коннектора.
3. Задайте фиксированное число звеньев или шаг.
4. Оставьте `Orientation Mode = Planar Track` для обычной танковой гусеницы.

### 3. Постройте контур по колёсам

В `Track Physics Solver`:

1. Выберите тот же сплайн в `Target Spline`.
2. Укажите `Source Mesh Component`.
3. Задайте префикс костей опорных катков и кости крайних колёс.
4. Проверьте радиусы контакта колёс.
5. Нажмите `Generate Bone Rig Now`.

### 4. Свяжите Solver и Builder

1. Выберите соответствующий `Track Builder`.
2. Включите `Update Track Builder After Solve`.
3. Нажмите `Validate Setup`.
4. Исправьте ошибки, пока конфигурация не станет готовой.

### 5. Проверьте в PIE

Рабочий результат:

- контур замкнут;
- число звеньев не меняется;
- звенья распределены равномерно;
- направление и скорость совпадают с движением машины;
- гусеница реагирует на поверхность, но не на корпус танка;
- на dedicated server не считается дорогая визуальная физика, если она не нужна.

Для обычной машины оставьте `Surface Query Mode = World Static Only`.

<div class="guide-next" markdown="1">
**Готово?** Перейдите к нужной задаче ниже. Все поля без сокращений находятся в
[справочнике настроек]({{ '/docs/track-settings-reference.ru.html' | relative_url }}).
</div>

## Выберите следующую задачу

<div class="task-grid">
  <a class="task-card" href="{{ '/docs/track-wheel-shape.ru.html' | relative_url }}"><strong>1. Форма по колёсам</strong><span>Кости, радиусы, крайние колёса и верхние ролики.</span></a>
  <a class="task-card" href="{{ '/docs/track-ground-contact.ru.html' | relative_url }}"><strong>2. Контакт с поверхностью</strong><span>Трассировка, фильтрация и поведение на неровностях.</span></a>
  <a class="task-card" href="{{ '/docs/track-links-motion.ru.html' | relative_url }}"><strong>3. Звенья и движение</strong><span>Число звеньев, ориентация, направление и скорость.</span></a>
  <a class="task-card" href="{{ '/docs/track-quality-network.ru.html' | relative_url }}"><strong>4. Качество и сеть</strong><span>Локальное качество, удалённые машины и dedicated server.</span></a>
  <a class="task-card" href="{{ '/docs/track-troubleshooting.ru.html' | relative_url }}"><strong>Исправить проблему</strong><span>Короткие проверки по видимому симптому.</span></a>
</div>

## Как устроен раздел

- **Руководство** — только первый рабочий результат.
- **Сборка гусеницы** — короткие страницы по форме, поверхности и звеньям.
- **Запуск и поставка** — качество для локальных, удалённых и серверных копий.
- **Справочник** — полный список полей и Blueprint-нод без сокращений.

<div class="guide-next" markdown="1">
**Продолжить по порядку:** [настройте форму по колёсам]({{ '/docs/track-wheel-shape.ru.html' | relative_url }}).
</div>

