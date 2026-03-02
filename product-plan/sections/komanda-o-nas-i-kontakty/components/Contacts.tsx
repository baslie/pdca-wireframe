import { useState } from 'react'
import { MapPin, Phone, Mail, Building2, FileText, Send } from 'lucide-react'
import type {
  ContactsProps,
  ContactFormData,
  ContactInfo,
  SocialLink,
} from '../types'

/* ─────────────────────────── Main Component ─────────────────────────── */

export function Contacts({
  contactInfo,
  socialLinks,
  onSubmit,
}: ContactsProps) {
  return (
    <div
      className="bg-white dark:bg-slate-950"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Form + Details grid */}
      <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ContactFormBlock onSubmit={onSubmit} />
            <CompanyDetailsBlock contactInfo={contactInfo} />
          </div>
        </div>
      </section>

      <SocialLinksBlock socialLinks={socialLinks} />
      <MapPlaceholder address={contactInfo.address} />
    </div>
  )
}

/* ═══════════════════════════ 1. CONTACT FORM ═══════════════════════════ */

function ContactFormBlock({
  onSubmit,
}: {
  onSubmit?: (data: ContactFormData) => void
}) {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    onSubmit?.(form)
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#e84249] focus:ring-1 focus:ring-[#e84249]/30 transition-colors'

  if (submitted) {
    return (
      <div>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight mb-3">
          Спасибо за обращение!
        </h2>
        <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
          Мы свяжемся с вами в течение рабочего дня.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight mb-3">
        Свяжитесь с нами
      </h2>
      <p className="text-sm text-black/50 dark:text-white/50 mb-8">
        Заполните форму — мы свяжемся с вами в течение рабочего дня
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Ваше имя *"
            value={form.name}
            onChange={(e) =>
              setForm((f) => ({ ...f, name: e.target.value }))
            }
            className={inputClass}
            required
          />
          <input
            type="tel"
            placeholder="Телефон *"
            value={form.phone}
            onChange={(e) =>
              setForm((f) => ({ ...f, phone: e.target.value }))
            }
            className={inputClass}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={form.email ?? ''}
          onChange={(e) =>
            setForm((f) => ({ ...f, email: e.target.value }))
          }
          className={inputClass}
        />
        <textarea
          placeholder="Сообщение"
          value={form.message ?? ''}
          onChange={(e) =>
            setForm((f) => ({ ...f, message: e.target.value }))
          }
          className={`${inputClass} resize-none`}
          rows={4}
        />
        <button
          type="submit"
          className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-sm hover:bg-[#d63a41] active:scale-[0.98] transition-all"
        >
          Отправить
          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <p className="text-xs text-black/30 dark:text-white/30">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  )
}

/* ═══════════════════════════ 2. COMPANY DETAILS ═══════════════════════════ */

function CompanyDetailsBlock({
  contactInfo,
}: {
  contactInfo: ContactInfo
}) {
  const details = [
    {
      icon: MapPin,
      label: 'Адрес',
      value: contactInfo.address,
    },
    {
      icon: Phone,
      label: 'Телефон',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Building2,
      label: 'Юридическое лицо',
      value: contactInfo.legalName,
    },
    {
      icon: FileText,
      label: 'ИНН',
      value: contactInfo.inn,
    },
  ]

  return (
    <div>
      <h3 className="text-xl font-extrabold text-black dark:text-white tracking-tight mb-6">
        Реквизиты
      </h3>
      <div className="space-y-5">
        {details.map((detail, i) => {
          const Icon = detail.icon
          return (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 bg-[#e84249]/10 dark:bg-[#e84249]/20 rounded-sm flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#e84249]" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs text-black/40 dark:text-white/40 font-medium block mb-0.5">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-sm text-black/70 dark:text-white/70 hover:text-[#e84249] dark:hover:text-[#e84249] transition-colors font-medium"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm text-black/70 dark:text-white/70 font-medium">
                    {detail.value}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ═══════════════════════════ 3. SOCIAL LINKS ═══════════════════════════ */

const SOCIAL_ABBR: Record<string, string> = {
  telegram: 'TG',
  vk: 'VK',
  youtube: 'YT',
}

function SocialLinksBlock({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight">
            Мы в социальных сетях
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link, i) => {
            const abbr = SOCIAL_ABBR[link.icon] ?? link.platform.slice(0, 2).toUpperCase()
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-[100px] h-[100px] border-2 border-slate-200 dark:border-slate-700 rounded-sm hover:border-[#e84249] dark:hover:border-[#e84249] transition-colors"
              >
                <span className="text-lg font-extrabold text-black/60 dark:text-white/60 group-hover:text-[#e84249] transition-colors">
                  {abbr}
                </span>
                <span className="text-xs text-black/40 dark:text-white/40 mt-1">
                  {link.platform}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. MAP PLACEHOLDER ═══════════════════════════ */

function MapPlaceholder({ address }: { address: string }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="h-[240px] bg-slate-100 dark:bg-slate-800 rounded-sm flex flex-col items-center justify-center gap-3">
          <MapPin className="w-8 h-8 text-black/20 dark:text-white/20" strokeWidth={1.5} />
          <p className="text-sm text-black/40 dark:text-white/40 text-center px-4">
            {address}
          </p>
        </div>
      </div>
    </section>
  )
}
