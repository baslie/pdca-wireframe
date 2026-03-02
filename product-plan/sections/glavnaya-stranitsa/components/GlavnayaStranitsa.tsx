import { useState, useRef } from 'react'
import {
  Factory,
  Truck,
  Store,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Users,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import type { GlavnayaStranitsaProps, LeadFormData } from '../types'

const ICON_MAP: Record<string, React.ElementType> = {
  factory: Factory,
  truck: Truck,
  store: Store,
  'chart-line': TrendingUp,
  'shield-check': ShieldCheck,
  handshake: Handshake,
  users: Users,
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export function GlavnayaStranitsa({
  heroContent,
  industrySegments,
  trainingCategories,
  workFormats,
  trustFacts,
  caseStudies,
  trainers,
  processSteps,
  faqItems,
  onSegmentClick,
  onCategoryClick,
  onFormatClick,
  onCaseClick,
  onAllCasesClick,
  onTrainerClick,
  onAllTrainersClick,
  onLeadSubmit,
  onHeroCtaClick,
}: GlavnayaStranitsaProps) {
  return (
    <div className="bg-white dark:bg-slate-950" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <HeroBlock hero={heroContent} onCtaClick={onHeroCtaClick} />
      <SegmentsBlock segments={industrySegments} onClick={onSegmentClick} />
      <CategoriesBlock categories={trainingCategories} onClick={onCategoryClick} />
      <FormatsBlock formats={workFormats} onClick={onFormatClick} />
      <TrustBlock facts={trustFacts} />
      <CasesBlock cases={caseStudies} onCaseClick={onCaseClick} onAllClick={onAllCasesClick} />
      <TrainersBlock trainers={trainers} onTrainerClick={onTrainerClick} onAllClick={onAllTrainersClick} />
      <ProcessBlock steps={processSteps} />
      <FaqBlock items={faqItems} />
      <CtaBlock onSubmit={onLeadSubmit} />
    </div>
  )
}

/* ═══════════════════════════ 1. HERO ═══════════════════════════ */

function HeroBlock({
  hero,
  onCtaClick,
}: {
  hero: GlavnayaStranitsaProps['heroContent']
  onCtaClick?: GlavnayaStranitsaProps['onHeroCtaClick']
}) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative diagonal lines — brand signature */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.06] dark:opacity-[0.08]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#e84249]"
              style={{
                width: '3px',
                height: '200%',
                transform: `rotate(-35deg)`,
                left: `${i * 80 + 40}px`,
                top: '-50%',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-black dark:text-white mb-6">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed mb-8 lg:mb-10">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onCtaClick?.('primary')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-md hover:bg-[#d63a41] active:scale-[0.98] transition-all"
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => onCtaClick?.('secondary')}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#003154] dark:border-white/30 text-[#003154] dark:text-white font-semibold text-sm rounded-md hover:bg-[#003154] hover:text-white dark:hover:bg-white/10 transition-all"
              >
                {hero.ctaSecondary.label}
              </button>
            </div>
          </div>

          {/* Right — Geometric visual with brand lines */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden">
              {/* Placeholder: geometric pattern simulating production environment */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />

              {/* Decorative red diagonal stripes overlaying the "photo" */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line x1="30%" y1="0" x2="0" y2="60%" stroke="#e84249" strokeWidth="4" opacity="0.8" />
                <line x1="50%" y1="0" x2="10%" y2="80%" stroke="#e84249" strokeWidth="4" opacity="0.6" />
                <line x1="70%" y1="0" x2="30%" y2="100%" stroke="#e84249" strokeWidth="4" opacity="0.5" />
                <line x1="90%" y1="0" x2="50%" y2="100%" stroke="#e84249" strokeWidth="3" opacity="0.35" />
                <line x1="100%" y1="10%" x2="70%" y2="100%" stroke="#e84249" strokeWidth="3" opacity="0.25" />
              </svg>

              {/* PDCA watermark */}
              <div className="absolute bottom-4 right-4 text-black/10 dark:text-white/10 text-7xl font-extrabold tracking-tighter select-none">
                PDCA
              </div>
            </div>

            {/* Small accent square */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#e84249] rounded-sm" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-[#003154] dark:border-white/20 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. SEGMENTS ═══════════════════════════ */

function SegmentsBlock({
  segments,
  onClick,
}: {
  segments: GlavnayaStranitsaProps['industrySegments']
  onClick?: GlavnayaStranitsaProps['onSegmentClick']
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Кому помогаем" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
          {segments.map((seg) => {
            const Icon = ICON_MAP[seg.icon] || Factory
            return (
              <button
                key={seg.id}
                onClick={() => onClick?.(seg.id)}
                className="group relative text-left p-6 lg:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Red accent bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div className="w-11 h-11 bg-[#e84249]/10 dark:bg-[#e84249]/20 flex items-center justify-center rounded-sm mb-5">
                  <Icon className="w-5 h-5 text-[#e84249]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{seg.title}</h3>
                <p className="text-sm text-black/50 dark:text-white/50 mb-3 leading-relaxed">{seg.pain}</p>
                <p className="text-sm text-black/80 dark:text-white/80 leading-relaxed">{seg.solution}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#e84249] opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. CATEGORIES ═══════════════════════════ */

function CategoriesBlock({
  categories,
  onClick,
}: {
  categories: GlavnayaStranitsaProps['trainingCategories']
  onClick?: GlavnayaStranitsaProps['onCategoryClick']
}) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Ключевые направления" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || TrendingUp
            return (
              <button
                key={cat.id}
                onClick={() => onClick?.(cat.id)}
                className="group text-left p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm shadow-sm hover:shadow-md hover:border-[#e84249]/40 transition-all"
              >
                <div className="w-10 h-10 bg-[#e84249]/10 dark:bg-[#e84249]/20 flex items-center justify-center rounded-sm mb-4 group-hover:bg-[#e84249]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#e84249]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-black dark:text-white text-sm mb-2 leading-snug">{cat.title}</h3>
                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">{cat.result}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#e84249]">
                  Программы <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. FORMATS ═══════════════════════════ */

function FormatsBlock({
  formats,
  onClick,
}: {
  formats: GlavnayaStranitsaProps['workFormats']
  onClick?: GlavnayaStranitsaProps['onFormatClick']
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Форматы работы" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {formats.map((fmt, i) => (
            <button
              key={fmt.id}
              onClick={() => onClick?.(fmt.id)}
              className="group text-left relative p-6 lg:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm hover:shadow-lg transition-all"
            >
              {/* Number */}
              <span className="text-5xl font-extrabold text-[#e84249]/10 dark:text-[#e84249]/20 absolute top-4 right-5 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mb-3">{fmt.title}</h3>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">{fmt.description}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#e84249]">
                Узнать больше <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 5. TRUST / WHY US ═══════════════════════════ */

function TrustBlock({ facts }: { facts: GlavnayaStranitsaProps['trustFacts'] }) {
  return (
    <section className="relative bg-[#003154] py-16 lg:py-20 overflow-hidden">
      {/* Subtle brand pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white"
            style={{
              width: '2px',
              height: '200%',
              transform: 'rotate(-25deg)',
              left: `${i * 14}%`,
              top: '-50%',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-12 tracking-tight">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {facts.map((fact) => (
            <div key={fact.id}>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-[#e84249] tracking-tight">
                  {fact.value}
                </span>
                {fact.unit && (
                  <span className="text-lg font-bold text-[#e84249]/70">{fact.unit}</span>
                )}
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 6. CASES SLIDER ═══════════════════════════ */

function CasesBlock({
  cases,
  onCaseClick,
  onAllClick,
}: {
  cases: GlavnayaStranitsaProps['caseStudies']
  onCaseClick?: GlavnayaStranitsaProps['onCaseClick']
  onAllClick?: GlavnayaStranitsaProps['onAllCasesClick']
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.7
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionHeader title="Кейсы и результаты" noMargin />
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-slate-200 dark:border-slate-700 rounded-sm flex items-center justify-center text-black/60 dark:text-white/60 hover:border-[#e84249] hover:text-[#e84249] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-slate-200 dark:border-slate-700 rounded-sm flex items-center justify-center text-black/60 dark:text-white/60 hover:border-[#e84249] hover:text-[#e84249] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cases.map((cs) => (
            <button
              key={cs.id}
              onClick={() => onCaseClick?.(cs.id)}
              className="group snap-start shrink-0 w-[300px] sm:w-[340px] text-left border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800/50 p-6 hover:shadow-lg hover:border-[#e84249]/30 transition-all"
            >
              {/* Client logo placeholder */}
              <div className="w-full h-10 bg-slate-100 dark:bg-slate-700 rounded-sm mb-4 flex items-center justify-center">
                <span className="text-xs font-semibold text-black/30 dark:text-white/30 tracking-wide uppercase">
                  {cs.clientName}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#e84249] uppercase tracking-wide mb-2">{cs.program}</p>
              <h4 className="font-bold text-black dark:text-white text-sm mb-2 leading-snug">{cs.task}</h4>
              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{cs.result}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onAllClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors"
          >
            Все кейсы <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 7. TRAINERS ═══════════════════════════ */

function TrainersBlock({
  trainers,
  onTrainerClick,
  onAllClick,
}: {
  trainers: GlavnayaStranitsaProps['trainers']
  onTrainerClick?: GlavnayaStranitsaProps['onTrainerClick']
  onAllClick?: GlavnayaStranitsaProps['onAllTrainersClick']
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Наши эксперты" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {trainers.map((tr) => (
            <button
              key={tr.id}
              onClick={() => onTrainerClick?.(tr.id)}
              className="group text-left bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[3/2] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Initials as placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-black/10 dark:text-white/10">
                    {tr.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                {/* Red accent corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#e84249]">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[#e84249] origin-bottom-left -rotate-45 scale-150" />
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-bold text-black dark:text-white text-sm mb-0.5">{tr.name}</h4>
                <p className="text-xs text-[#e84249] font-medium mb-3">{tr.role}</p>
                <ul className="space-y-1.5">
                  {tr.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex gap-2 text-xs text-black/60 dark:text-white/60 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e84249]/60 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onAllClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors"
          >
            Смотреть всех тренеров <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 8. PROCESS ═══════════════════════════ */

function ProcessBlock({ steps }: { steps: GlavnayaStranitsaProps['processSteps'] }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Как мы работаем" />
        <div className="relative">
          {/* Connecting red line (desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[60px] right-[60px] h-0.5 bg-[#e84249]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.id} className="relative text-center lg:text-left">
                {/* Step number circle */}
                <div className="relative z-10 mx-auto lg:mx-0 w-[84px] h-[84px] border-2 border-[#e84249] rounded-full flex items-center justify-center bg-white dark:bg-slate-950 mb-5">
                  <span className="text-2xl font-extrabold text-[#e84249]">{step.order}</span>
                </div>

                {/* Mobile connecting line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[84px] left-1/2 w-0.5 h-6 bg-[#e84249]/20 -translate-x-1/2 sm:hidden" />
                )}

                <h4 className="font-bold text-black dark:text-white text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed max-w-[240px] mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 9. FAQ ═══════════════════════════ */

function FaqBlock({ items }: { items: GlavnayaStranitsaProps['faqItems'] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white mb-10 tracking-tight text-center">
          Частые вопросы
        </h2>
        <div className="space-y-2">
          {items.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
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
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
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

/* ═══════════════════════════ 10. CTA FORM ═══════════════════════════ */

function CtaBlock({ onSubmit }: { onSubmit?: GlavnayaStranitsaProps['onLeadSubmit'] }) {
  const [form, setForm] = useState<LeadFormData>({
    name: '',
    phone: '',
    company: '',
    direction: '',
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
            Получите консультацию эксперта
          </h2>
          <p className="text-sm text-black/50 dark:text-white/50">
            Подберём программу и вышлем предложение в течение рабочего дня
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={inputClass}
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className={inputClass}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Компания"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            className={inputClass}
          />
          <select
            value={form.direction}
            onChange={(e) => setForm((f) => ({ ...f, direction: e.target.value }))}
            className={inputClass}
          >
            <option value="">Интересующее направление</option>
            <option value="lean">Кайдзен и Бережливое производство</option>
            <option value="safety">Производственная безопасность</option>
            <option value="sales">Продажи и переговоры</option>
            <option value="leadership">Управление и Лидерство</option>
            <option value="other">Другое</option>
          </select>
          <button
            type="submit"
            className="w-full py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-sm hover:bg-[#d63a41] active:scale-[0.99] transition-all"
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

function SectionHeader({ title, noMargin }: { title: string; noMargin?: boolean }) {
  return (
    <div className={noMargin ? '' : 'mb-10'}>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight">
        {title}
      </h2>
    </div>
  )
}
