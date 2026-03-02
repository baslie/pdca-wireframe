import { useState, useRef } from 'react'
import {
  ChevronDown,
  ArrowRight,
  Clock,
  MapPin,
  Monitor,
  Users,
  CheckCircle2,
} from 'lucide-react'
import type {
  StranitsTreningaProps,
  AudienceCard,
  ResultMetric,
  ProgramModule,
  TrainerCard,
  PricingInfo,
  FAQItem,
  RelatedTraining,
} from '../types'
import type { TrainingFormat } from '../../katalog-treningov/types'

const FORMAT_LABELS: Record<TrainingFormat, string> = {
  offline: 'Офлайн',
  online: 'Онлайн',
  hybrid: 'Гибрид',
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export function StranitsTreninga({
  title,
  categoryName,
  description,
  duration,
  format,
  keyResult,
  audience,
  results,
  program,
  trainer,
  pricing,
  faq,
  relatedTrainings,
  onSubmitLead,
  onTrainerClick,
  onRelatedTrainingClick,
}: StranitsTreningaProps) {
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div
      className="bg-white dark:bg-slate-950"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <HeroBlock
        title={title}
        categoryName={categoryName}
        description={description}
        duration={duration}
        format={format}
        keyResult={keyResult}
        onCtaClick={scrollToForm}
      />
      <AudienceBlock audience={audience} />
      <ResultsBlock results={results} />
      <ProgramBlock program={program} />
      <TrainerBlock
        trainer={trainer}
        onTrainerClick={onTrainerClick}
      />
      <PricingBlock pricing={pricing} onCtaClick={scrollToForm} />
      <FaqBlock faq={faq} />
      <RelatedBlock
        trainings={relatedTrainings}
        onTrainingClick={onRelatedTrainingClick}
      />
      <div ref={formRef}>
        <LeadFormBlock onSubmit={onSubmitLead} />
      </div>
    </div>
  )
}

/* ═══════════════════════════ 1. HERO ═══════════════════════════ */

function HeroBlock({
  title,
  categoryName,
  description,
  duration,
  format,
  keyResult,
  onCtaClick,
}: {
  title: string
  categoryName: string
  description: string
  duration: string
  format: TrainingFormat[]
  keyResult: string
  onCtaClick: () => void
}) {
  const formatBadges = format.map((f) => ({
    label: FORMAT_LABELS[f],
    icon: f === 'online' ? Monitor : MapPin,
  }))

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative diagonal lines — brand signature */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.06] dark:opacity-[0.08]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#e84249]"
              style={{
                width: '3px',
                height: '200%',
                transform: 'rotate(-35deg)',
                left: `${i * 80 + 40}px`,
                top: '-50%',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 bg-[#e84249]/10 text-[#e84249] text-xs font-semibold rounded-sm mb-5">
            {categoryName}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-[#003154] dark:text-white mb-5">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed mb-6">
            {description}
          </p>

          {/* Meta: format + duration */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {formatBadges.map((badge, i) => {
              const Icon = badge.icon
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-black/70 dark:text-white/70 rounded-sm"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {badge.label}
                </span>
              )
            })}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-black/70 dark:text-white/70 rounded-sm">
              <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
              {duration}
            </span>
          </div>

          {/* Key result */}
          <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed mb-8 lg:mb-10">
            {keyResult}
          </p>

          {/* CTA */}
          <button
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-sm hover:bg-[#d63a41] active:scale-[0.98] transition-all"
          >
            Оставить заявку
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. AUDIENCE ═══════════════════════════ */

function AudienceBlock({ audience }: { audience: AudienceCard[] }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Для кого этот тренинг" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {audience.map((card, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden hover:shadow-md transition-all"
            >
              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="w-11 h-11 bg-[#e84249]/10 dark:bg-[#e84249]/20 flex items-center justify-center rounded-sm mb-4">
                <Users
                  className="w-5 h-5 text-[#e84249]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-bold text-black dark:text-white text-sm mb-2 leading-snug">
                {card.role}
              </h3>
              <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                {card.painPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. RESULTS ═══════════════════════════ */

function ResultsBlock({ results }: { results: ResultMetric[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Результаты тренинга" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {results.map((metric, i) => (
            <div key={i}>
              <div className="text-5xl lg:text-6xl font-extrabold text-[#e84249] tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-black dark:text-white text-sm mb-1">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. PROGRAM ═══════════════════════════ */

function ProgramBlock({ program }: { program: ProgramModule[] }) {
  const [openId, setOpenId] = useState<string | null>(
    program[0]?.id ?? null,
  )

  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Программа тренинга" />
        <div className="max-w-[800px] space-y-2">
          {program.map((mod, i) => {
            const isOpen = openId === mod.id
            return (
              <div
                key={mod.id}
                className="border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : mod.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-sm text-black dark:text-white leading-snug">
                    Модуль {i + 1}. {mod.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black/40 dark:text-white/40 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-200"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <ul className="px-5 pb-5 space-y-2">
                      {mod.topics.map((topic, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm text-black/60 dark:text-white/60 leading-relaxed"
                        >
                          <span className="text-[#e84249] shrink-0">
                            —
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 5. TRAINER ═══════════════════════════ */

function TrainerBlock({
  trainer,
  onTrainerClick,
}: {
  trainer: TrainerCard
  onTrainerClick?: (id: string) => void
}) {
  const initials = trainer.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Тренер" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm p-6 lg:p-8 max-w-[800px]">
          {/* Photo placeholder — circle with initials */}
          <div className="w-20 h-20 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="text-2xl font-extrabold text-black/20 dark:text-white/20">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-black dark:text-white text-base mb-1">
              {trainer.name}
            </h3>
            <p className="text-sm text-[#e84249] font-medium mb-4">
              {trainer.role}
            </p>

            <ul className="space-y-2 mb-5">
              {trainer.credentials.map((cred, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-black/60 dark:text-white/60 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#e84249]/60 shrink-0 mt-0.5" />
                  {cred}
                </li>
              ))}
            </ul>

            {trainer.profileUrl && (
              <button
                onClick={() => onTrainerClick?.(trainer.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#e84249] text-[#e84249] font-semibold text-sm rounded-sm hover:bg-[#e84249] hover:text-white transition-all"
              >
                Подробнее о тренере
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 6. PRICING ═══════════════════════════ */

function PricingBlock({
  pricing,
  onCtaClick,
}: {
  pricing: PricingInfo
  onCtaClick: () => void
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Стоимость" />
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm p-6 lg:p-8 max-w-[600px]">
          {pricing.price ? (
            <>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#003154] dark:text-white tracking-tight">
                  {new Intl.NumberFormat('ru-RU').format(pricing.price)}
                </span>
                {pricing.currency && (
                  <span className="text-2xl font-bold text-[#003154] dark:text-white">
                    {pricing.currency}
                  </span>
                )}
              </div>
              {pricing.label && (
                <p className="text-sm font-medium text-black/60 dark:text-white/60 mb-2">
                  {pricing.label}
                </p>
              )}
              {pricing.note && (
                <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed mb-6">
                  {pricing.note}
                </p>
              )}
            </>
          ) : (
            <div className="mb-6">
              <p className="text-2xl font-extrabold text-[#003154] dark:text-white mb-2">
                Стоимость по запросу
              </p>
              {pricing.note && (
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  {pricing.note}
                </p>
              )}
            </div>
          )}

          <button
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-sm hover:bg-[#d63a41] active:scale-[0.98] transition-all"
          >
            Оставить заявку
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 7. FAQ ═══════════════════════════ */

function FaqBlock({ faq }: { faq: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white mb-10 tracking-tight text-center">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-2">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-sm text-black dark:text-white leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black/40 dark:text-white/40 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-200"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-black/60 dark:text-white/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 8. RELATED ═══════════════════════════ */

function RelatedBlock({
  trainings,
  onTrainingClick,
}: {
  trainings: RelatedTraining[]
  onTrainingClick?: (id: string) => void
}) {
  if (trainings.length === 0) return null

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Похожие тренинги" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {trainings.map((training) => {
            const formatBadges = training.format.map((f) => ({
              label: FORMAT_LABELS[f],
              icon: f === 'online' ? Monitor : MapPin,
            }))

            return (
              <div
                key={training.id}
                className="group flex flex-col border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800/50 p-5 lg:p-6 hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-bold text-[#003154] dark:text-white leading-snug mb-2">
                  {training.title}
                </h3>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 line-clamp-2">
                  {training.keyResult}
                </p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                    <Clock
                      className="w-4 h-4 text-black/40 dark:text-white/40"
                      strokeWidth={1.5}
                    />
                    {training.duration}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {formatBadges.map((badge, i) => {
                      const Icon = badge.icon
                      return (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-black/70 dark:text-white/70 rounded-sm"
                        >
                          <Icon
                            className="w-3.5 h-3.5"
                            strokeWidth={1.5}
                          />
                          {badge.label}
                        </span>
                      )
                    })}
                  </div>

                  <button
                    onClick={() =>
                      onTrainingClick?.(training.id)
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors group/btn"
                  >
                    Подробнее
                    <ArrowRight
                      className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 9. LEAD FORM ═══════════════════════════ */

function LeadFormBlock({
  onSubmit,
}: {
  onSubmit?: StranitsTreningaProps['onSubmitLead']
}) {
  const [form, setForm] = useState({
    name: '',
    position: '',
    company: '',
    phone: '',
    email: '',
    comment: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(form)
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#e84249] focus:ring-1 focus:ring-[#e84249]/30 transition-colors'

  return (
    <section className="relative bg-white dark:bg-slate-950 py-16 lg:py-20 overflow-hidden">
      {/* Accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#e84249]" />

      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white mb-3 tracking-tight">
            Оставить заявку на тренинг
          </h2>
          <p className="text-sm text-black/50 dark:text-white/50">
            Заполните форму — мы свяжемся с вами в течение рабочего дня
          </p>
        </div>

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
            type="text"
            placeholder="Должность"
            value={form.position}
            onChange={(e) =>
              setForm((f) => ({ ...f, position: e.target.value }))
            }
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Компания"
            value={form.company}
            onChange={(e) =>
              setForm((f) => ({ ...f, company: e.target.value }))
            }
            className={inputClass}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((f) => ({ ...f, email: e.target.value }))
            }
            className={inputClass}
          />
          <textarea
            placeholder="Комментарий"
            value={form.comment}
            onChange={(e) =>
              setForm((f) => ({ ...f, comment: e.target.value }))
            }
            className={`${inputClass} resize-none`}
            rows={3}
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-sm hover:bg-[#d63a41] active:scale-[0.99] transition-all"
          >
            Отправить заявку
          </button>
          <p className="text-xs text-center text-black/30 dark:text-white/30">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </section>
  )
}

/* ═══════════════════════════ SHARED ═══════════════════════════ */

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight">
        {title}
      </h2>
    </div>
  )
}
