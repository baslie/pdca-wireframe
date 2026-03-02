# Главная страница — Test Specs

## Hero Block

- **Primary CTA button**: clicking the primary CTA calls `onHeroCtaClick('primary')`. Button text matches `heroContent.ctaPrimary.label`. Button has red background (`#e84249`), white text, ArrowRight icon.
- **Secondary CTA button**: clicking the secondary CTA calls `onHeroCtaClick('secondary')`. Button text matches `heroContent.ctaSecondary.label`. Button has outlined style with border.
- **Content rendering**: headline and subheadline from `heroContent` are displayed. Geometric visual with diagonal red lines is visible on desktop (`lg:` breakpoint).

## Segment Cards (Кому помогаем)

- **Render**: all items from `industrySegments` are rendered as cards in a 3-column grid.
- **Card content**: each card displays the correct icon, title (`seg.title`), pain point (`seg.pain`), and solution (`seg.solution`).
- **Hover state**: on hover, a red top accent bar animates in (scale-x from 0 to 100%), and "Подробнее" text with ChevronRight appears.
- **Click**: clicking a segment card calls `onSegmentClick(seg.id)` with the correct segment id.

## Category Cards (Ключевые направления)

- **Render**: all items from `trainingCategories` are rendered in a 4-column grid.
- **Card content**: each card shows the correct icon, title, and result text.
- **Click**: clicking a category card calls `onCategoryClick(cat.id)`. Each card displays "Программы" link text with ChevronRight icon.
- **Navigation**: clicking navigates to the corresponding training category.

## Format Cards (Форматы работы)

- **Render**: all items from `workFormats` are rendered. Cards display a padded number (01, 02, 03...), title, and description.
- **Click**: clicking a format card calls `onFormatClick(fmt.id)`. "Узнать больше" link with ArrowRight is visible.

## Trust Block (Почему выбирают нас)

- **Render**: all items from `trustFacts` are rendered in a 4-column grid on dark background.
- **Metrics display**: each metric shows `fact.value` in large red text, optional `fact.unit` beside it, and `fact.description` below.

## Cases Slider (Кейсы и результаты)

- **Render**: all items from `caseStudies` are rendered as horizontally scrollable cards (300-340px wide).
- **Card content**: each card shows client name, program label, task title, and result text.
- **Scroll controls**: left and right arrow buttons scroll the container. Buttons are hidden on small screens.
- **Click case**: clicking a case card calls `onCaseClick(cs.id)`.
- **"Все кейсы" link**: clicking the "Все кейсы" link calls `onAllCasesClick()`.

## Trainers Grid (Наши эксперты)

- **Render**: all items from `trainers` are rendered in a 4-column grid.
- **Card content**: each card shows initials as avatar placeholder, trainer name, role in red, and up to 2 highlights with CheckCircle2 icons.
- **Click trainer**: clicking a trainer card calls `onTrainerClick(tr.id)`.
- **"Смотреть всех тренеров"**: clicking this link calls `onAllTrainersClick()`. Displays ArrowRight icon.

## Process Block (Как мы работаем)

- **Render**: all items from `processSteps` are rendered with numbered circles.
- **Step numbers**: each circle displays `step.order`. Steps are connected by a horizontal red line on desktop.
- **Content**: each step shows title and description.

## FAQ Accordion (Частые вопросы)

- **Initial state**: all FAQ items are collapsed (no answer visible).
- **Open**: clicking a question expands it and shows the answer. ChevronDown icon rotates 180 degrees.
- **Close**: clicking an open question collapses it. ChevronDown returns to default rotation.
- **Single open**: opening one question closes any previously open question.
- **Content**: questions and answers from `faqItems` render correctly.

## Lead Form (Получите консультацию эксперта)

- **Required fields**: "Ваше имя" and "Телефон" fields have the `required` attribute.
- **Optional fields**: "Компания" and "Интересующее направление" (select dropdown) are not required.
- **Select options**: dropdown includes "Кайдзен и Бережливое производство", "Производственная безопасность", "Продажи и переговоры", "Управление и Лидерство", "Другое".
- **Validation**: form does not submit if required fields are empty. Browser native validation applies.
- **Submission**: on valid submit, `onLeadSubmit` is called with `{ name, phone, company, direction }`.
- **Submit button text**: "Отправить заявку".
- **Privacy notice**: text "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности" is visible below the button.

## Empty States

- Not applicable — all blocks render from provided props data. The page is static content driven by data props.

## Responsive Behavior

- Segment cards: 1 column on mobile, 3 columns on `sm:`.
- Category cards: 1 column on mobile, 2 on `sm:`, 4 on `lg:`.
- Format cards: 1 column on mobile, 3 on `md:`.
- Trust metrics: 2 columns on mobile, 4 on `lg:`.
- Trainer cards: 1 column on mobile, 2 on `sm:`, 4 on `lg:`.
- Process steps: 1 column on mobile, 2 on `sm:`, 4 on `lg:`.
- Case slider scroll arrows: hidden on small screens, visible on `sm:`.
