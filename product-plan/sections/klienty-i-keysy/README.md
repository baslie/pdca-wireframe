# Клиенты и кейсы (Clients & Case Studies)

## Overview

Portfolio section with two views: a filterable case studies list (KlientyIKeysy) and a detailed case study page (CaseDetail). Features client logos marquee, dual filter panels (industry + service category), testimonials slider, and lead forms with success state.

Typography: Manrope (sans-serif). Brand colors: `#e84249` (red accent), `#003154` (dark blue).

## Components

### KlientyIKeysy (List View)

Renders the portfolio overview page with filtering and case card grid.

**Props (data):**
- `industrySegments` — array of IndustrySegment with id, name
- `serviceCategories` — array of ServiceCategory with id, name
- `clients` — array of Client with id, name
- `caseStudies` — array of CaseStudy with id, title, challenge, clientId, industryId, serviceCategoryId, metrics[]
- `testimonials` — array of Testimonial with id, text, authorName, authorRole, companyName

**Props (callbacks):**
- `onCaseClick(caseId)` — case card click
- `onFilterChange({ industryId, serviceCategoryId })` — filter change notification
- `onCtaSubmit(formData)` — lead form submission

**Blocks:**
1. **Hero** — dark `#003154` background. Title "Наши клиенты и проекты", description, "Обсудить проект" button (scrolls to CTA form).
2. **Client Logos Marquee** — "Нам доверяют" label. Horizontally auto-scrolling (CSS animation, 30s linear infinite) strip of client name pills. Doubled for seamless loop. Pauses on hover.
3. **Filter Panel** — two rows of filter tabs:
   - "Отрасль": "Все" + industry segment tabs
   - "Направление": "Все" + service category tabs
   - Active tab: dark background (`#003154`) with white text. Clicking an active industry/service tab deselects it (returns to "Все").
4. **Case Grid** — 3-column grid of case cards. Each card: client logo abbreviation, industry badge, title, challenge (3-line clamp), key metric (first metric, large red text), "Подробнее" link. Red top bar on hover.
5. **Empty State** — when no cases match filters: Search icon, "Кейсов по выбранным фильтрам не найдено", "Попробуйте изменить параметры фильтрации".
6. **Testimonials Slider** — "Отзывы клиентов" heading + "Что говорят о работе с нами". Horizontal scrollable cards (320-380px wide). Each: Quote icon, review text (6-line clamp), author name, role + company. Scroll arrows on desktop.
7. **CTA Form** — dark `#003154` background. Two-column layout: left text "Хотите такие же результаты?" + description, right form. Fields: "Имя *" (required), "Компания", "Телефон *" (required), "Email", "Расскажите о задаче" (textarea). Submit: "Отправить заявку" with Send icon. **Success state**: replaces form with "Заявка отправлена" + "Мы свяжемся с вами в ближайшее время".

### CaseDetail (Detail View)

Renders a full case study page.

**Props:**
- `caseStudy` — full CaseStudy object with title, challenge, solution, phases[], metrics[], imageUrls[]
- `client` — Client object
- `industry` — IndustrySegment object
- `serviceCategory` — ServiceCategory object
- `testimonial` — optional Testimonial
- `relatedCases` — array of RelatedCaseBrief
- `onBack()` — back button callback
- `onRelatedCaseClick(caseId)` — related case click
- `onCtaSubmit(formData)` — CTA form submission

**Blocks:**
1. **Case Hero** — dark `#003154` background. Back button "Все кейсы" with ArrowLeft icon. Client name (red), case title, industry badge, service category badge (red). "Обсудить похожий проект" button (scrolls to form).
2. **Задача (Challenge)** — AlertTriangle icon (amber), heading "Задача", challenge text.
3. **Решение (Solution)** — Lightbulb icon (emerald), heading "Решение", solution text.
4. **Этапы проекта (Phases Timeline)** — vertical timeline with red dots and connecting line. Each phase: "Этап N" label, title, description. Hidden if phases array is empty.
5. **Результаты (Metrics Grid)** — 2-column grid of metric cards. Each: large red value + suffix, label. Hidden if metrics array is empty.
6. **Фото и материалы (Image Gallery)** — 3-column grid of image placeholders (aspect 4:3). Image icon placeholder. Hidden if imageUrls is empty.
7. **Testimonial** — Quote icon, blockquote text in italics, author name and role+company. Hidden if no testimonial provided.
8. **Похожие кейсы (Related Cases)** — 3-column grid. Each card: client name (red), industry badge, title, challenge (2-line clamp), key metric. Hidden if empty.
9. **CTA Form** — identical to list view form but with heading "Обсудить похожий проект". Same success state behavior.

## Dependencies

- `lucide-react`: Search, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, AlertTriangle, Lightbulb, Image, Quote, Send
- Tailwind CSS v4
