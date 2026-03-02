# Команда, О нас и Контакты — Test Specs

## AboutCompany

### Mission Block

- **Content**: "С {foundedYear} года" badge, "О компании PDCA Consulting" heading, mission text, description text, and methodology quote (with left red border) are all rendered from `companyInfo` props.

### Team Grid (Наша команда)

- **Render**: all trainers are displayed in a 4-column grid.
- **Card content**: each card shows circular avatar with initials, trainer name, role, and experience badge ("{N} лет опыта").
- **Click**: clicking a trainer card calls `onTrainerClick(trainer.id)`.
- **Hover**: red top accent bar animates in. Card lifts slightly (`-translate-y-0.5`).

### Timeline (История компании)

- **Render**: all milestones are displayed with red dot markers on a vertical line.
- **Content**: each milestone shows year (large red text), title (bold), and description.
- **Order**: milestones are rendered in the order provided.

### Company Metrics (Компания в цифрах)

- **Render**: all metrics from `companyMetrics` are displayed.
- **Content**: each metric shows large red value, optional suffix (also red), and label text.

### Certificates (Аккредитации и сертификаты)

- **Render**: all certificates are displayed in a 4-column grid.
- **Card content**: logo placeholder (3-letter abbreviation from issuer), certificate name, issuer name, optional year in red.
- **Hover**: logo placeholder transitions from grayscale to color on hover.

---

## TrainerProfile

### Back Button

- **Render**: "Назад к команде" text with ArrowLeft icon is displayed.
- **Click**: clicking calls `onBack()`.
- **Conditional**: back button is only rendered when `onBack` prop is provided.

### Profile Header

- **Content**: trainer name as large heading, role text, experience badge ("{N} лет опыта" in red).
- **Avatar**: large circular placeholder (200x200px) showing initials from trainer name.

### Bio

- **Paragraphs**: `trainer.fullBio` text is split by double newlines into separate `<p>` elements.
- **Render**: all paragraphs are displayed with consistent spacing.

### Specializations (Специализации)

- **Render**: all items from `trainer.specializations` are displayed as tag pills in a flex-wrap row.
- **Styling**: stone-colored background, medium font weight.

### Certifications (Сертификаты и квалификации)

- **Render**: all items from `trainer.certifications` are listed vertically.
- **Content**: each item shows a CheckCircle2 icon (red) followed by the certification text.

### Trainings (Проводимые тренинги)

- **Render**: all items from `trainer.trainings` are displayed in a 3-column grid.
- **Card content**: training title, "Проведено: {count} раз" text, format badge (Офлайн/Онлайн/Гибрид).
- **Click**: clicking "Подробнее" on a training card calls `onTrainingClick(training.id)`.

---

## Contacts

### Contact Form

- **Required fields**: "Ваше имя *" and "Телефон *" have the `required` attribute.
- **Optional fields**: "Email" and "Сообщение" (textarea) are not required.
- **Client-side validation**: form checks that name and phone are not empty (trimmed) before calling `onSubmit`. `if (!form.name.trim() || !form.phone.trim()) return`.
- **Submission**: on valid submit, `onSubmit` is called with `{ name, phone, email?, message? }`.
- **Submit button**: "Отправить" with Send icon.
- **Success state**: after submission, the form is replaced with heading "Спасибо за обращение!" and text "Мы свяжемся с вами в течение рабочего дня."
- **Privacy notice**: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности" is visible below the submit button.

### Company Details (Реквизиты)

- **Render**: 5 detail rows are displayed: Адрес, Телефон, Email, Юридическое лицо, ИНН.
- **Phone link**: phone value is rendered as a clickable `<a>` with `href="tel:..."` (non-digit characters stripped). Hover changes text to red.
- **Email link**: email value is rendered as a clickable `<a>` with `href="mailto:..."`. Hover changes text to red.
- **Static fields**: address, legal name, and INN are displayed as plain text (not clickable).

### Social Links (Мы в социальных сетях)

- **Render**: all social links are displayed as square buttons (100x100px).
- **Content**: 2-letter abbreviation (TG for Telegram, VK for VK, YT for YouTube) and platform name.
- **Hover**: border color changes to red (`#e84249`), abbreviation text color changes to red.
- **Link behavior**: each link opens in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).

### Map Placeholder

- **Render**: a 240px-height gray placeholder is displayed with MapPin icon and the address text from `contactInfo.address`.

---

## Navigation Between Views

- **About -> Trainer**: clicking a trainer card in the team grid triggers `onTrainerClick(trainerId)`, which should navigate to the TrainerProfile view.
- **Trainer -> Back to About**: clicking "Назад к команде" in TrainerProfile triggers `onBack()`, returning to the AboutCompany view.
- **Trainer -> Training**: clicking "Подробнее" on a training card in TrainerProfile triggers `onTrainingClick(trainingId)`.

## Empty States

- Not applicable — all views render static content from provided props. No filtering or search functionality exists in these views.

## Responsive Behavior

- Team grid: 1 column on mobile, 2 on `sm:`, 3 on `lg:`, 4 on `xl:`.
- Training cards: 1 column on mobile, 2 on `md:`, 3 on `lg:`.
- Certificate cards: 1 column on mobile, 2 on `sm:`, 4 on `lg:`.
- Contact form + details: stacked on mobile, 2-column on `lg:`.
- Social links: flex-wrap, adapts to available width.
