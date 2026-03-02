# Каталог тренингов (Training Catalog)

## Overview

Training catalog page with category tab filtering and a responsive card grid. Displays all available training programs with key metadata. Includes an empty state and a CTA block for custom training requests.

Typography: Manrope (sans-serif). Brand colors: `#e84249` (red accent), `#003154` (dark blue headings).

## Component

### KatalogTreningov

Single top-level component that renders the catalog page.

**Props (data):**
- `trainings` — array of Training objects with id, title, keyResult, duration, format (array of 'offline' | 'online' | 'hybrid'), level ('managers' | 'line-staff' | 'office' | 'all'), categoryId
- `categories` — array of Category objects with id, name

**Props (callbacks):**
- `onTrainingClick(trainingId)` — "Подробнее" button on training card
- `onCategoryChange(categoryId | null)` — tab filter change
- `onRequestConsultation()` — CTA block button click

## Blocks

1. **Header** — page title "Каталог образовательных программ" and dynamic count with Russian plural forms (программа/программы/программ) + "для развития команд".

2. **Category Tabs** — horizontal pill-style filter buttons. "Все" tab (shows all trainings) + one tab per category. Active tab: red background with white text. Inactive: gray background. Selecting a category filters the grid. Clicking "Все" resets the filter.

3. **Catalog Grid** — 3-column responsive grid of training cards (`md:2`, `lg:3`). Each card displays:
   - **Title** in bold dark blue
   - **Key result** (2-line clamp)
   - **Duration** with Clock icon
   - **Format badges**: "Офлайн" (MapPin icon), "Онлайн" (Monitor icon), "Гибрид" (MapPin icon). Falls back to "Уточняйте" (Sparkles icon) if no formats.
   - **Level**: "Руководители", "Линейный персонал", "Офис", or "Все уровни" with Users icon
   - **"Подробнее" button**: red text with ArrowRight icon

4. **Empty State** — shown when no trainings match the selected category. Search icon, message: "В этой категории пока нет программ".

5. **CTA Block** — Sparkles icon, heading "Не нашли нужный тренинг?", description "Мы разрабатываем программы под задачи вашей компании. Расскажите, что вам нужно — подберём решение.", button "Оставить заявку" with ArrowRight icon.

## Dependencies

- `lucide-react`: Clock, MapPin, Monitor, Users, ArrowRight, Search, Sparkles
- Tailwind CSS v4
