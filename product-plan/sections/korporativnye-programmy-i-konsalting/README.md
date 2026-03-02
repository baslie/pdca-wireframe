# Корпоративные программы и консалтинг (Corporate Programs)

## Overview

Corporate programs page showcasing pre-built consulting packages with timeline-based stage visualization. Contains 8 blocks: hero, methodology steps, program cards with timelines, custom program CTA, advantages grid, case studies, client logos, and a consultation form.

Typography: Manrope (sans-serif). Brand colors: `#e84249` (red accent), `#003154` (dark blue).

## Component

### KorporativnyeProgrammy

Single top-level component that renders the corporate programs page.

**Props (data):**
- `hero` — HeroContent with title, subtitle, description
- `methodology` — array of MethodologyStep with id, icon, title, description
- `programs` — array of CorporateProgram with id, title, description, duration, stages[]
- `customProgram` — CustomProgramInfo with title, description, bulletPoints[]
- `advantages` — array of Advantage with title, description, stat, statLabel
- `cases` — array of CaseStudyBrief with id, industry, clientName, challenge, result, metric, metricLabel
- `clientLogos` — array of ClientLogo with id, name

**Props (callbacks):**
- `onSubmitConsultation(formData)` — consultation form submission
- `onProgramClick(programId)` — program title click
- `onCaseClick(caseId)` — case card click
- `onScrollToForm()` — fired when CTA scrolls to form

## Blocks

1. **Hero** — title, subtitle (red text), description, "Получить консультацию" button (scrolls to form). Decorative diagonal red lines. Geometric visual with PDCA watermark on desktop.

2. **Процесс работы (Methodology)** — subtitle "Четыре этапа от диагностики до устойчивых результатов". 4-column layout with icon circles connected by a horizontal red line on desktop. Icons from lucide-react (Search, FileText, GraduationCap, Headphones). ChevronRight arrows between steps on desktop.

3. **Готовые программы (Programs)** — subtitle "Проверенные решения для типовых задач бизнеса". 3-column grid of program cards. Each card:
   - Duration badge (Clock icon, red background/text)
   - Title (clickable, triggers `onProgramClick`)
   - Description (3-line clamp)
   - **Timeline**: vertical line with dots at decreasing opacity. Each stage shows title, "мес. {monthStart}-{monthEnd}" badge, and description
   - "Узнать подробности" link (scrolls to form)

4. **Индивидуальная программа (Custom Program)** — dark `#003154` background with brand pattern. Title, description, bullet points with CheckCircle2 icons, "Обсудить индивидуальную программу" outlined button (scrolls to form).

5. **Почему мы (Advantages)** — subtitle "Опыт, измеримые результаты и передача компетенций". 3-column grid. Each card: optional large red stat + statLabel, title, description. Red top accent bar on hover.

6. **Кейсы и результаты (Cases)** — 3-column grid of case cards. Each card: industry badge, large red metric + metricLabel, client name, "Задача: " + challenge, "Результат: " + result. Red accent bar on hover.

7. **Нам доверяют (Client Logos)** — centered flex-wrap of client logo placeholders with Building2 icon and client name. Grayscale by default, color on hover.

8. **Получите консультацию эксперта (Consultation Form)** — red accent stripe at top. Heading "Получите консультацию эксперта", subtext "Обсудим ваши задачи и подберём оптимальное решение". Fields: "Ваше имя *" (required), "Компания", "Телефон *" (required), "Email", "Комментарий" (textarea). Submit: "Отправить заявку". Privacy notice.

## Dependencies

- `lucide-react`: Search, FileText, GraduationCap, Headphones, ArrowRight, CheckCircle2, ChevronRight, Clock, Building2
- Tailwind CSS v4
