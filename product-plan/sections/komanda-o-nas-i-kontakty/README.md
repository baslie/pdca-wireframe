# Команда, О нас и Контакты

## Overview

This section contains three distinct views: AboutCompany (company overview), TrainerProfile (individual trainer page), and Contacts (contact form and company details). Each view is a separate top-level component.

Typography: Manrope (sans-serif). Brand colors: `#e84249` (red accent), `#003154` (dark blue headings).

## Components

### AboutCompany

Company overview page with 5 blocks: mission, team grid, company history timeline, metrics, and certificates.

**Props:**
- `trainers` — array of Trainer with id, name, role, experienceYears
- `companyInfo` — object with mission, methodology, description, foundedYear
- `milestones` — array of Milestone with id, year, title, description
- `companyMetrics` — array of CompanyMetric with value, suffix, label
- `certificates` — array of Certificate with id, name, issuer, year
- `onTrainerClick(trainerId)` — trainer card click

**Blocks:**
1. **Mission** — badge "С {foundedYear} года", heading "О компании PDCA Consulting", mission text, description text, methodology quote with left red border accent.
2. **Наша команда (Team Grid)** — 4-column grid of trainer cards. Each card: circular avatar with initials (120x120px), name, role, experience badge ("{N} лет опыта" in red). Red top accent bar on hover. Clickable.
3. **История компании (Timeline)** — vertical timeline at 800px max-width. Each milestone: red dot marker, year (large red text), title, description.
4. **Компания в цифрах (Metrics)** — 4-column grid. Each metric: large red value + suffix, label below.
5. **Аккредитации и сертификаты (Certificates)** — 4-column grid. Each card: logo placeholder (grayscale, color on hover), certificate name, issuer, optional year in red.

### TrainerProfile

Individual trainer detail page with 5 blocks.

**Props:**
- `trainer` — full Trainer object with name, role, experienceYears, fullBio, specializations[], certifications[], trainings[]
- `onBack()` — back button callback
- `onTrainingClick(trainingId)` — training card click

**Blocks:**
1. **Profile Header** — back button "Назад к команде" (ArrowLeft, red text), large circular avatar (200x200px) with initials, name (large heading), role, experience badge.
2. **Bio** — full biography text split by double newlines into paragraphs. Gray background section.
3. **Специализации (Specializations)** — flex-wrap row of tag pills. Each tag: stone-colored background, medium text.
4. **Сертификаты и квалификации (Certifications)** — vertical list. Each item: CheckCircle2 icon (red) + certification text.
5. **Проводимые тренинги (Trainings)** — 3-column grid of training cards. Each card: title, "Проведено: {count} раз" + format badge (Офлайн/Онлайн/Гибрид), "Подробнее" button (red text with ArrowRight).

### Contacts

Contact page with form, company details, social links, and map placeholder.

**Props:**
- `contactInfo` — ContactInfo with address, phone, email, legalName, inn
- `socialLinks` — array of SocialLink with platform, url, icon
- `onSubmit(formData)` — form submission callback

**Blocks:**
1. **Contact Form** — heading "Свяжитесь с нами", subtext "Заполните форму — мы свяжемся с вами в течение рабочего дня". Fields: "Ваше имя *" (required), "Телефон *" (required), "Email", "Сообщение" (textarea). Submit button "Отправить" with Send icon. **Success state**: heading changes to "Спасибо за обращение!" + "Мы свяжемся с вами в течение рабочего дня."
2. **Company Details (Реквизиты)** — displayed alongside the form. Five detail rows with icons: Адрес (MapPin), Телефон (Phone, clickable `tel:` link), Email (Mail, clickable `mailto:` link), Юридическое лицо (Building2), ИНН (FileText).
3. **Мы в социальных сетях (Social Links)** — flex-wrap grid of square social link buttons (100x100px). Each shows 2-letter abbreviation (TG, VK, YT, etc.) and platform name. Border highlights red on hover.
4. **Map Placeholder** — 240px-height gray placeholder with MapPin icon and address text.

## Dependencies

- `lucide-react`: ArrowLeft, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Building2, FileText, Send
- Tailwind CSS v4
