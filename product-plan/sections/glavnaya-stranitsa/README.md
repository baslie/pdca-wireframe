# Главная страница (Landing Page)

## Overview

B2B landing page for PDCA Consulting — a corporate training company. The page consists of 10 sequential blocks designed to guide visitors from awareness to lead submission. Single-page scroll layout with no internal routing.

Typography: Manrope (sans-serif). Brand colors: `#e84249` (red accent), `#003154` (dark blue).

## Component

### GlavnayaStranitsa

Single top-level component that renders all 10 blocks in order.

**Props (data):**
- `heroContent` — headline, subheadline, CTA labels
- `industrySegments` — array of segments with id, title, icon, pain, solution
- `trainingCategories` — array of categories with id, title, icon, result
- `workFormats` — array of formats with id, title, description
- `trustFacts` — array of metrics with id, value, unit, description
- `caseStudies` — array of case cards with clientName, program, task, result
- `trainers` — array of trainer cards with name, role, highlights
- `processSteps` — array of steps with order, title, description
- `faqItems` — array of FAQ with question, answer

**Props (callbacks):**
- `onSegmentClick(segmentId)` — segment card click
- `onCategoryClick(categoryId)` — category card click
- `onFormatClick(formatId)` — format card click
- `onCaseClick(caseId)` — case card click
- `onAllCasesClick()` — "Все кейсы" link
- `onTrainerClick(trainerId)` — trainer card click
- `onAllTrainersClick()` — "Смотреть всех тренеров" link
- `onLeadSubmit(formData)` — lead form submission
- `onHeroCtaClick(type: 'primary' | 'secondary')` — hero CTA buttons

## Blocks

1. **Hero** — headline, subheadline, primary CTA button (red, with ArrowRight icon), secondary CTA button (outlined). Decorative diagonal red lines on the right. Geometric visual with PDCA watermark on desktop.

2. **Кому помогаем (Segments)** — 3-column grid of segment cards. Each card: icon, title, pain point, solution, "Подробнее" link on hover. Red top accent bar animates on hover.

3. **Ключевые направления (Categories)** — 4-column grid of category cards. Each card: icon, title, result text, "Программы" link with ChevronRight.

4. **Форматы работы (Formats)** — 3-column grid. Each card: large number (01, 02, 03), title, description, "Узнать больше" link with ArrowRight.

5. **Почему выбирают нас (Trust)** — dark `#003154` background. 4-column grid of metrics: large red number + unit, description below.

6. **Кейсы и результаты (Cases slider)** — horizontal scrollable row of case cards (300-340px wide). Navigation arrows (ChevronLeft/ChevronRight) on desktop. "Все кейсы" link with ArrowRight below.

7. **Наши эксперты (Trainers)** — 4-column grid. Each card: photo placeholder with initials, name, role (red), highlights with CheckCircle2 icons. "Смотреть всех тренеров" link below the grid.

8. **Как мы работаем (Process)** — 4-step timeline with numbered circles connected by a red line (desktop). Each step: number in a circle, title, description.

9. **Частые вопросы (FAQ)** — accordion list centered at 800px max-width. Click question to expand/collapse. ChevronDown rotates 180deg when open. Only one item open at a time.

10. **Получите консультацию эксперта (CTA Form)** — red accent stripe at top. Form fields: "Ваше имя" (required), "Телефон" (required), "Компания", "Интересующее направление" (select). Submit button: "Отправить заявку". Privacy notice below.

## Dependencies

- `lucide-react`: Factory, Truck, Store, TrendingUp, ShieldCheck, Handshake, Users, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, CheckCircle2
- Tailwind CSS v4
