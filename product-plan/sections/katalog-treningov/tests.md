# Каталог тренингов — Test Specs

## Tab Filtering

- **Initial state**: "Все" tab is active (red background). All trainings are visible in the grid. Count reflects total number of trainings.
- **Select category**: clicking a category tab activates it (red background), deactivates "Все". Grid filters to show only trainings with matching `categoryId`. Count updates to reflect filtered count.
- **Back to "Все"**: clicking the "Все" tab resets the filter. All trainings are visible again. Category tabs return to inactive styling.
- **Callback**: each tab click calls `onCategoryChange(categoryId)` or `onCategoryChange(null)` for "Все".

## Training Cards

- **Data display**: each card renders the correct `title`, `keyResult` (clamped to 2 lines), `duration` (with Clock icon), format badges, and level label.
- **Format badges**: trainings with `format: ['offline']` show "Офлайн" badge with MapPin icon. Trainings with `format: ['online']` show "Онлайн" with Monitor icon. Trainings with `format: ['hybrid']` show "Гибрид" with MapPin icon. Multiple formats show multiple badges.
- **Level labels**: `managers` displays "Руководители", `line-staff` displays "Линейный персонал", `office` displays "Офис", `all` displays "Все уровни".
- **"Подробнее" button**: each card has a "Подробнее" link in red text with ArrowRight icon. Clicking it calls `onTrainingClick(training.id)` with the correct training id.

## Empty State

- **Trigger**: when the filtered trainings array is empty (a category has no trainings), the grid is replaced with the empty state.
- **Content**: Search icon centered, message text "В этой категории пока нет программ".
- **Transition**: switching from a populated category to an empty one shows the empty state. Switching back to "Все" or a populated category restores the grid.

## CTA Block (Не нашли нужный тренинг?)

- **Render**: Sparkles icon, heading "Не нашли нужный тренинг?", descriptive text, and "Оставить заявку" button are always visible below the grid.
- **Click**: clicking "Оставить заявку" calls `onRequestConsultation()`.

## Header

- **Count display**: the header shows the correct number of filtered trainings with proper Russian pluralization:
  - 1 → "1 программа"
  - 2-4 → "N программы"
  - 5+ → "N программ"
  - 11 → "11 программ" (exception for 11-19)

## Responsive Behavior

- Cards: 1 column on mobile, 2 columns on `md:`, 3 columns on `lg:`.
- Category tabs: wrap to multiple rows on narrow screens via `flex-wrap`.
