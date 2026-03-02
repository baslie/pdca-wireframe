# Корпоративные программы и консалтинг — Test Specs

## Hero Block

- **Content**: hero title, subtitle (red text), and description from `hero` prop are rendered.
- **CTA button**: "Получить консультацию" button scrolls to the consultation form at the bottom via `scrollIntoView({ behavior: 'smooth' })`.

## Methodology Steps (Процесс работы)

- **Render**: all 4 methodology steps are displayed with their icons, titles, and descriptions.
- **Icons**: each step renders an icon from the icon map (Search, FileText, GraduationCap, Headphones) inside a circular border.
- **Layout**: 4-column grid on desktop with a connecting horizontal red line and ChevronRight arrows between steps. Stacked on mobile.

## Program Cards (Готовые программы)

- **Render**: all programs from `programs` are rendered in a 3-column grid.
- **Card content**: each card shows duration badge (Clock icon), title, description (clamped to 3 lines).
- **Timeline visualization**: each program card contains a vertical timeline with dots showing stages. Each stage displays title, month range badge ("мес. {monthStart}-{monthEnd}"), and description. Dot opacity decreases progressively.
- **Title click**: clicking a program title calls `onProgramClick(program.id)`.
- **"Узнать подробности" link**: clicking this link scrolls to the consultation form.

## Custom Program Block (Индивидуальная программа)

- **Content**: title, description, and bullet points with CheckCircle2 icons are rendered on dark `#003154` background.
- **CTA button**: "Обсудить индивидуальную программу" (outlined, white border) scrolls to the consultation form.

## Advantages Grid (Почему мы)

- **Render**: all advantages are rendered in a 3-column grid.
- **Card content**: each card shows optional stat (large red number) with statLabel, title, and description.
- **Hover**: red top accent bar animates in on hover.

## Case Cards (Кейсы и результаты)

- **Render**: all cases from `cases` are rendered in a 3-column grid.
- **Card content**: each card displays industry badge, metric in large red text + metricLabel, client name (bold), "Задача: " + challenge text, "Результат: " + result text.
- **Click**: clicking a case card calls `onCaseClick(cs.id)`.
- **Hover**: red accent bar animates in on hover.

## Client Logos (Нам доверяют)

- **Render**: heading "Нам доверяют" and all client logos are displayed.
- **Logo display**: each logo shows Building2 icon + client name. Default state: grayscale at 40% opacity. Hover: full color at 100% opacity.

## Consultation Form (Получите консультацию эксперта)

- **Required fields**: "Ваше имя *" and "Телефон *" have the `required` attribute.
- **Optional fields**: "Компания", "Email", "Комментарий" (textarea) are not required.
- **Validation**: form does not submit if required fields are empty. Browser native validation applies.
- **Submission**: on valid submit, `onSubmitConsultation` is called with `{ name, phone, company?, email?, comment? }`.
- **Submit button text**: "Отправить заявку".
- **Privacy notice**: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности" is visible below the button.
- **Scroll targets**: Hero CTA, program card CTAs, and custom program CTA all scroll to this form.

## Responsive Behavior

- Methodology steps: 1 column on mobile, 2 on `sm:`, 4 on `lg:`. Connecting line and arrows hidden on mobile.
- Program cards: 1 column on mobile, 3 on `md:`.
- Advantages: 1 column on mobile, 2 on `sm:`, 3 on `lg:`.
- Cases: 1 column on mobile, 3 on `md:`.
- Form fields: stacked on mobile, 2-column pairs on `sm:`.
