# Страница тренинга — Test Specs

## Hero Block

- **Training info**: title, category badge, description, duration, and key result from props are rendered correctly.
- **Format badges**: each format in the `format` array displays a badge — "Офлайн" (MapPin), "Онлайн" (Monitor), "Гибрид" (MapPin). Duration badge shows Clock icon.
- **CTA button**: "Оставить заявку" button scrolls the page to the lead form section at the bottom.

## Audience Cards (Для кого этот тренинг)

- **Render**: all items from `audience` are rendered in a 4-column grid.
- **Card content**: each card displays role title and painPoint text with a Users icon.

## Results Metrics (Результаты тренинга)

- **Render**: all items from `results` are rendered.
- **Content**: each metric shows `value` in large red text, `label` below, and optional `description` in smaller text.

## Program Accordion (Программа тренинга)

- **First module open**: on initial render, the first module is expanded (its topics are visible). ChevronDown is rotated 180 degrees for the first item.
- **Module header**: each module shows "Модуль N. {title}" where N is the 1-based index.
- **Topics**: expanded module shows a list of topics, each prefixed with a red dash ("—").
- **Click to open**: clicking a collapsed module header expands it and shows its topics.
- **Click to close**: clicking an expanded module header collapses it.
- **Single open**: only one module is open at a time. Opening a new module closes the previously open one.

## Trainer Card (Тренер)

- **Content**: trainer name (bold), role (red text), and credentials list (each with CheckCircle2 icon) are displayed.
- **Avatar**: circular placeholder showing initials derived from the trainer's name.
- **"Подробнее о тренере" button**: displayed only when `trainer.profileUrl` is defined. Clicking calls `onTrainerClick(trainer.id)`. Button has outlined red styling.

## Pricing Block (Стоимость)

- **With price**: when `pricing.price` is a number, it is formatted with Russian locale (Intl.NumberFormat). Currency, label, and note are shown if provided.
- **Without price**: when `pricing.price` is null, the text "Стоимость по запросу" is displayed instead of a numeric price. Optional note is shown below.
- **CTA button**: "Оставить заявку" button scrolls to the lead form section.

## FAQ Accordion (Часто задаваемые вопросы)

- **Initial state**: all items are collapsed.
- **Open**: clicking a question expands it, showing the answer. ChevronDown rotates 180 degrees.
- **Close**: clicking an open question collapses it.
- **Single open**: only one FAQ item is open at a time.

## Related Trainings (Похожие тренинги)

- **Render**: all items from `relatedTrainings` are rendered in a 3-column grid.
- **Hidden when empty**: if `relatedTrainings` is an empty array, the entire block is not rendered.
- **Card content**: each card shows title, keyResult (2-line clamp), duration (Clock icon), format badges.
- **Click**: clicking "Подробнее" on a related training card calls `onRelatedTrainingClick(training.id)`.

## Lead Form (Оставить заявку на тренинг)

- **Required fields**: "Ваше имя *" and "Телефон *" have the `required` attribute.
- **Optional fields**: "Должность", "Компания", "Email", "Комментарий" are not required.
- **Validation**: form does not submit if "Ваше имя *" or "Телефон *" are empty. Browser native validation applies.
- **Form fields preserved on error**: if submission is blocked by validation, the values already entered in all fields (name, phone, position, company, email, comment) remain intact.
- **Submission**: on valid submit, `onSubmitLead` is called with `{ name, position, company, phone, email, comment }`.
- **Submit button text**: "Отправить заявку".
- **Privacy notice**: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности" text is visible.

## CTA Scroll Behavior

- Both the Hero CTA ("Оставить заявку") and the Pricing CTA ("Оставить заявку") trigger smooth scroll to the lead form section via `scrollIntoView({ behavior: 'smooth' })`.

## Responsive Behavior

- Audience cards: 1 column on mobile, 2 on `md:`, 4 on `lg:`.
- Results metrics: 1 column on mobile, 2 on `sm:`, 4 on `lg:`.
- Related trainings: 1 column on mobile, 2 on `md:`, 3 on `lg:`.
- Lead form fields: stacked on mobile, 2-column grid on `sm:` for name/phone row.
