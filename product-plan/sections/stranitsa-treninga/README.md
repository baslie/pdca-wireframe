# Страница тренинга (Training Detail Page)

## Overview

Detail landing page for an individual training program. Contains 9 blocks: hero with training metadata, audience cards, results metrics, program accordion, trainer card, pricing, FAQ, related trainings, and a lead form. CTA buttons throughout the page scroll to the lead form at the bottom.

Typography: Manrope (sans-serif). Brand colors: `#e84249` (red accent), `#003154` (dark blue headings).

## Component

### StranitsTreninga

Single top-level component that renders the training detail page.

**Props (data):**
- `title` — training name
- `categoryName` — category badge text
- `description` — training description
- `duration` — duration string (e.g., "2 дня")
- `format` — array of TrainingFormat ('offline' | 'online' | 'hybrid')
- `keyResult` — key outcome text
- `audience` — array of AudienceCard with role, painPoint
- `results` — array of ResultMetric with value, label, description
- `program` — array of ProgramModule with id, title, topics[]
- `trainer` — TrainerCard with id, name, role, credentials[], profileUrl
- `pricing` — PricingInfo with price (number or null), currency, label, note
- `faq` — array of FAQItem with question, answer
- `relatedTrainings` — array of RelatedTraining with id, title, keyResult, duration, format

**Props (callbacks):**
- `onSubmitLead(formData)` — lead form submission
- `onTrainerClick(trainerId)` — "Подробнее о тренере" button
- `onRelatedTrainingClick(trainingId)` — related training card click

## Blocks

1. **Hero** — category badge (red background/text), title, description, format badges (Офлайн/Онлайн/Гибрид with icons), duration badge (Clock icon), key result. CTA button "Оставить заявку" scrolls to the lead form. Decorative diagonal red lines.

2. **Для кого этот тренинг (Audience)** — 4-column grid of audience cards. Each card: Users icon, role title, pain point. Red top accent bar on hover.

3. **Результаты тренинга (Results)** — 4-column grid of metrics. Each metric: large red value, label, optional description.

4. **Программа тренинга (Program accordion)** — accordion list at 800px max-width. Each module: "Модуль N. {title}" header with ChevronDown. Topics listed with red dash prefix. First module is open by default. Click to open/close. Only one module open at a time.

5. **Тренер (Trainer card)** — horizontal card with circular avatar (initials placeholder), name, role (red text), credentials list with CheckCircle2 icons, and "Подробнее о тренере" outlined button (only shown if `profileUrl` exists).

6. **Стоимость (Pricing)** — if `pricing.price` exists: formatted number + currency + label + note. If `pricing.price` is null: "Стоимость по запросу" text + note. CTA button "Оставить заявку" scrolls to form.

7. **Часто задаваемые вопросы (FAQ)** — accordion at 800px max-width. ChevronDown rotates when open. Only one item open at a time. Initially all collapsed.

8. **Похожие тренинги (Related)** — 3-column grid of training cards (hidden if empty). Each card: title, keyResult, duration, format badges, "Подробнее" button.

9. **Оставить заявку на тренинг (Lead Form)** — red accent stripe at top. Heading "Оставить заявку на тренинг", subtext "Заполните форму — мы свяжемся с вами в течение рабочего дня". Fields: "Ваше имя *" (required), "Телефон *" (required), "Должность", "Компания", "Email", "Комментарий" (textarea). Submit button "Отправить заявку". Privacy notice below.

## Dependencies

- `lucide-react`: ChevronDown, ArrowRight, Clock, MapPin, Monitor, Users, CheckCircle2
- Tailwind CSS v4
