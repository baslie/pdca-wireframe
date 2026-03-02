import { useState, useRef } from 'react'
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote,
  Send,
} from 'lucide-react'
import type {
  KlientyIKejsyProps,
  IndustrySegment,
  ServiceCategory,
  Client,
  CaseStudy,
  CaseStudyMetric,
  Testimonial,
} from '../types'

/* ─────────────────────────── Main Component ─────────────────────────── */

export function KlientyIKeysy({
  industrySegments,
  serviceCategories,
  clients,
  caseStudies,
  testimonials,
  onCaseClick,
  onFilterChange,
  onCtaSubmit,
}: KlientyIKejsyProps) {
  const [industryId, setIndustryId] = useState<string | null>(null)
  const [serviceCategoryId, setServiceCategoryId] = useState<string | null>(null)

  const filtered = caseStudies.filter((cs) => {
    if (industryId && cs.industryId !== industryId) return false
    if (serviceCategoryId && cs.serviceCategoryId !== serviceCategoryId) return false
    return true
  })

  const handleIndustryChange = (id: string | null) => {
    setIndustryId(id)
    onFilterChange?.({ industryId: id, serviceCategoryId })
  }

  const handleServiceChange = (id: string | null) => {
    setServiceCategoryId(id)
    onFilterChange?.({ industryId, serviceCategoryId: id })
  }

  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollToCta = () => ctaRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-white dark:bg-slate-950" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <HeroBlock onCtaClick={scrollToCta} />
      <ClientLogosStrip clients={clients} />
      <FilterPanel
        industrySegments={industrySegments}
        serviceCategories={serviceCategories}
        activeIndustryId={industryId}
        activeServiceCategoryId={serviceCategoryId}
        onIndustryChange={handleIndustryChange}
        onServiceChange={handleServiceChange}
      />
      <CaseGridBlock cases={filtered} clients={clients} industrySegments={industrySegments} onCaseClick={onCaseClick} />
      {testimonials.length > 0 && <TestimonialsSlider testimonials={testimonials} />}
      <div ref={ctaRef}>
        <CtaFormBlock onSubmit={onCtaSubmit} />
      </div>
    </div>
  )
}

/* ═══════════════════════════ 1. HERO ═══════════════════════════ */

function HeroBlock({ onCtaClick }: { onCtaClick?: () => void }) {
  return (
    <section className="relative overflow-hidden bg-[#003154]">
      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.08]">
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
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-white mb-4">
            Наши клиенты и проекты
          </h1>
          <p className="text-base sm:text-lg text-white/70 mb-8 max-w-xl">
            Реальные результаты для реальных компаний. Изучите наши кейсы — от
            бережливого производства до программ развития лидерства.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-md hover:bg-[#d63a41] transition-colors"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. CLIENT LOGOS ═══════════════════════════ */

function ClientLogosStrip({ clients }: { clients: Client[] }) {
  const doubled = [...clients, ...clients]
  return (
    <section className="bg-white dark:bg-slate-950 py-10 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40">
          Нам доверяют
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-8 w-max">
          {doubled.map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-36 h-14 rounded-md bg-slate-100 dark:bg-slate-800/60 px-4"
            >
              <span className="text-xs font-bold text-slate-500 dark:text-white/50 truncate">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

/* ═══════════════════════════ 3. FILTER PANEL ═══════════════════════════ */

function FilterPanel({
  industrySegments,
  serviceCategories,
  activeIndustryId,
  activeServiceCategoryId,
  onIndustryChange,
  onServiceChange,
}: {
  industrySegments: IndustrySegment[]
  serviceCategories: ServiceCategory[]
  activeIndustryId: string | null
  activeServiceCategoryId: string | null
  onIndustryChange: (id: string | null) => void
  onServiceChange: (id: string | null) => void
}) {
  const tabBase =
    'px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap'
  const tabActive = 'bg-[#003154] text-white dark:bg-white dark:text-slate-900'
  const tabInactive =
    'text-slate-600 dark:text-white/60 hover:bg-slate-100 dark:hover:bg-slate-800'

  return (
    <section className="bg-white dark:bg-slate-950 pt-8 pb-4">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Industry tabs */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40 mb-2">
            Отрасль
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onIndustryChange(null)}
              className={`${tabBase} ${activeIndustryId === null ? tabActive : tabInactive}`}
            >
              Все
            </button>
            {industrySegments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => onIndustryChange(seg.id === activeIndustryId ? null : seg.id)}
                className={`${tabBase} ${activeIndustryId === seg.id ? tabActive : tabInactive}`}
              >
                {seg.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service category tabs */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40 mb-2">
            Направление
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onServiceChange(null)}
              className={`${tabBase} ${activeServiceCategoryId === null ? tabActive : tabInactive}`}
            >
              Все
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  onServiceChange(cat.id === activeServiceCategoryId ? null : cat.id)
                }
                className={`${tabBase} ${activeServiceCategoryId === cat.id ? tabActive : tabInactive}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. CASE GRID ═══════════════════════════ */

function CaseGridBlock({
  cases,
  clients,
  industrySegments,
  onCaseClick,
}: {
  cases: CaseStudy[]
  clients: Client[]
  industrySegments: IndustrySegment[]
  onCaseClick?: (id: string) => void
}) {
  if (cases.length === 0) {
    return (
      <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <Search className="w-12 h-12 mx-auto mb-4 text-slate-300 dark:text-white/20" strokeWidth={1.5} />
          <p className="text-lg font-semibold text-slate-500 dark:text-white/50">
            Кейсов по выбранным фильтрам не найдено
          </p>
          <p className="text-sm text-slate-400 dark:text-white/30 mt-1">
            Попробуйте изменить параметры фильтрации
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white dark:bg-slate-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cases.map((cs) => {
            const client = clients.find((c) => c.id === cs.clientId)
            const industry = industrySegments.find((s) => s.id === cs.industryId)
            return (
              <CaseCard
                key={cs.id}
                caseStudy={cs}
                clientName={client?.name ?? ''}
                industryName={industry?.name ?? ''}
                onClick={() => onCaseClick?.(cs.id)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseCard({
  caseStudy,
  clientName,
  industryName,
  onClick,
}: {
  caseStudy: CaseStudy
  clientName: string
  industryName: string
  onClick?: () => void
}) {
  const keyMetric: CaseStudyMetric | undefined = caseStudy.metrics[0]

  return (
    <button
      onClick={onClick}
      className="group relative text-left w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#e84249]/30 transition-all duration-300"
    >
      {/* Animated red top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-5 sm:p-6">
        {/* Client logo placeholder + industry badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded bg-slate-100 dark:bg-slate-700/60">
            <span className="text-[10px] font-bold text-slate-400 dark:text-white/40 leading-tight text-center">
              {clientName.slice(0, 3)}
            </span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#003154] dark:text-white/50 bg-slate-100 dark:bg-slate-700/60 px-2 py-1 rounded">
            {industryName}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {caseStudy.title}
        </h3>

        {/* Challenge excerpt */}
        <p className="text-sm text-slate-500 dark:text-white/50 line-clamp-3 mb-4">
          {caseStudy.challenge}
        </p>

        {/* Key metric */}
        {keyMetric && (
          <div className="mb-4">
            <p className="text-2xl font-extrabold text-[#e84249]">
              {keyMetric.value}
              {keyMetric.suffix && (
                <span className="text-sm font-medium text-slate-400 dark:text-white/40 ml-1">
                  {keyMetric.suffix}
                </span>
              )}
            </p>
            <p className="text-xs text-slate-400 dark:text-white/40">{keyMetric.label}</p>
          </div>
        )}

        {/* CTA */}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#e84249] group-hover:gap-2 transition-all">
          Подробнее
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </span>
      </div>
    </button>
  )
}

/* ═══════════════════════════ 5. TESTIMONIALS SLIDER ═══════════════════════════ */

function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.8
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header + nav buttons */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003154] dark:text-white tracking-tight">
              Отзывы клиентов
            </h2>
            <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
              Что говорят о работе с нами
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-white/50 hover:border-[#e84249] hover:text-[#e84249] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-white/50 hover:border-[#e84249] hover:text-[#e84249] transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-lg p-6"
            >
              <Quote className="w-8 h-8 text-[#e84249]/30 mb-3" strokeWidth={1.5} />
              <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed line-clamp-6 mb-5">
                {t.text}
              </p>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t.authorName}</p>
                <p className="text-xs text-slate-400 dark:text-white/40">
                  {t.authorRole}, {t.companyName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 6. CTA FORM ═══════════════════════════ */

function CtaFormBlock({
  onSubmit,
}: {
  onSubmit?: KlientyIKejsyProps['onCtaSubmit']
}) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({
      name: form.name,
      company: form.company || undefined,
      phone: form.phone,
      email: form.email || undefined,
      comment: form.comment || undefined,
    })
    setSubmitted(true)
  }

  const inputBase =
    'w-full px-4 py-3 text-sm rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#e84249]/40 focus:border-[#e84249] transition-colors'

  if (submitted) {
    return (
      <section className="bg-[#003154] py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e84249]/20 flex items-center justify-center">
            <Send className="w-7 h-7 text-[#e84249]" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-2">Заявка отправлена</h2>
          <p className="text-white/60">Мы свяжемся с вами в ближайшее время</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#003154] py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Хотите такие же результаты?
            </h2>
            <p className="text-white/60 max-w-md">
              Оставьте заявку — мы подберём решение, которое подойдёт именно вашей
              компании. Первая консультация бесплатна.
            </p>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Имя *"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className={inputBase}
              />
              <input
                placeholder="Компания"
                value={form.company}
                onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                className={inputBase}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                type="tel"
                placeholder="Телефон *"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className={inputBase}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className={inputBase}
              />
            </div>
            <textarea
              placeholder="Расскажите о задаче"
              rows={3}
              value={form.comment}
              onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
              className={inputBase + ' resize-none'}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-md hover:bg-[#d63a41] transition-colors"
            >
              Отправить заявку
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
