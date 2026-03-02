# Клиенты и кейсы — Test Specs

## List View (KlientyIKeysy)

### Client Logos Marquee

- **Render**: all client names from `clients` array are displayed in the marquee strip.
- **Animation**: logos auto-scroll horizontally via CSS animation (30s linear infinite). Array is doubled for seamless looping.
- **Pause on hover**: animation pauses when user hovers over the marquee.
- **Label**: "Нам доверяют" heading is visible above the strip.

### Industry Filter Tabs

- **Initial state**: "Все" tab is active (dark background, white text). All cases are visible.
- **Select industry**: clicking an industry tab filters cases to those matching `industryId`. Active tab gets dark background styling.
- **Deselect**: clicking an already active industry tab deselects it (returns to "Все" state, showing all cases).
- **Callback**: `onFilterChange` is called with current `{ industryId, serviceCategoryId }`.

### Service Category Filter Tabs

- **Initial state**: "Все" tab is active. All cases visible.
- **Select category**: clicking a service category tab filters cases to those matching `serviceCategoryId`.
- **Deselect**: clicking an already active service tab deselects it.
- **Callback**: `onFilterChange` is called with updated filter state.

### Combined Filtering

- **Both filters active**: when both an industry and a service category are selected, only cases matching BOTH criteria are shown.
- **Sequential filtering**: selecting industry first, then service category, progressively narrows results. Deselecting one filter widens results accordingly.

### Case Cards

- **Data display**: each card shows the client name abbreviation (first 3 letters), industry badge, case title, challenge text (clamped to 3 lines).
- **Key metric**: the first metric from `caseStudy.metrics[0]` is displayed in large red text with optional suffix and label.
- **"Подробнее" link**: visible on each card in red text with ArrowRight icon.
- **Click**: clicking a case card calls `onCaseClick(cs.id)` with the correct case id.

### Empty State

- **Trigger**: when no cases match the currently active filters, the grid is replaced with the empty state.
- **Content**: Search icon, message "Кейсов по выбранным фильтрам не найдено", hint "Попробуйте изменить параметры фильтрации".
- **Recovery**: changing filters to match existing cases restores the grid.

### Testimonials Slider

- **Render**: all testimonials are displayed as horizontally scrollable cards.
- **Card content**: each card shows Quote icon, review text (clamped to 6 lines), author name (bold), author role + company name.
- **Scroll controls**: left and right arrow buttons (ChevronLeft/ChevronRight) are visible on `sm:` screens. Clicking scrolls the container by 80% of its width.
- **Hidden when empty**: the entire testimonials section is hidden if `testimonials` array is empty.

### CTA Form (List View)

- **Required fields**: "Имя *" and "Телефон *" have the `required` attribute.
- **Optional fields**: "Компания", "Email", "Расскажите о задаче" are not required.
- **Validation**: form does not submit if required fields are empty.
- **Submission**: on valid submit, `onCtaSubmit` is called with `{ name, phone, company?, email?, comment? }`.
- **Submit button**: "Отправить заявку" with Send icon.
- **Success state**: after successful submission, the form is replaced with "Заявка отправлена" heading and "Мы свяжемся с вами в ближайшее время" text, centered with a Send icon in a red circle.

---

## Detail View (CaseDetail)

### Back Button

- **Render**: "Все кейсы" text with ArrowLeft icon is displayed at the top of the hero.
- **Click**: clicking calls `onBack()`.

### Case Hero

- **Content**: client name (red, uppercase), case title, industry badge (white/translucent), service category badge (red), "Обсудить похожий проект" button.
- **CTA**: "Обсудить похожий проект" button scrolls to the CTA form at the bottom.

### Challenge Block (Задача)

- **Render**: AlertTriangle icon in amber, "Задача" heading, and challenge text from `caseStudy.challenge`.

### Solution Block (Решение)

- **Render**: Lightbulb icon in emerald, "Решение" heading, and solution text from `caseStudy.solution`.

### Phases Timeline (Этапы проекта)

- **Render**: vertical timeline with red dots. Each phase shows "Этап N" label, title, and description.
- **Hidden when empty**: entire block is not rendered if `caseStudy.phases` is empty.

### Metrics Grid (Результаты)

- **Render**: 2-column grid of metric cards. Each shows value in large red text, optional suffix, and label.
- **Hidden when empty**: not rendered if `caseStudy.metrics` is empty.

### Image Gallery (Фото и материалы)

- **Render**: 3-column grid of image placeholders with Image icon.
- **Hidden when empty**: not rendered if `caseStudy.imageUrls` is empty.

### Testimonial Block

- **Render**: Quote icon, quoted text in italics, author name (bold), author role + company name.
- **Hidden when empty**: not rendered if `testimonial` prop is undefined.

### Related Cases (Похожие кейсы)

- **Render**: 3-column grid of related case cards. Each shows client name, industry badge, title, challenge (2-line clamp), key metric.
- **Click**: clicking a related case card calls `onRelatedCaseClick(cs.id)`.
- **Hidden when empty**: not rendered if `relatedCases` is empty.

### CTA Form (Detail View)

- **Heading**: "Обсудить похожий проект".
- **Required fields**: "Имя *" and "Телефон *".
- **Submission**: calls `onCtaSubmit` with form data.
- **Success state**: identical to list view — "Заявка отправлена" + "Мы свяжемся с вами в ближайшее время".

---

## Responsive Behavior

- Case cards: 1 column on mobile, 2 on `md:`, 3 on `xl:`.
- Filter tabs: flex-wrap on narrow screens.
- Testimonial cards: touch-scrollable on mobile, arrow buttons on desktop.
- CTA form: stacked on mobile, 2-column (text + form) on `lg:`.
- Image gallery: 1 column on mobile, 2 on `sm:`, 3 on `lg:`.
