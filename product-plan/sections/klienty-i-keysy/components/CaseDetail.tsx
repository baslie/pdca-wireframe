import { useState, useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Image,
  Quote,
  Send,
} from 'lucide-react'
import type {
  CaseDetailProps,
  RelatedCaseBrief,
  CaseStudy,
  Client,
  IndustrySegment,
  ServiceCategory,
  Testimonial,
  ProjectPhase,
  CaseStudyMetric,
} from '../types'

/* ─────────────────────────── Main Component ─────────────────────────── */

export function CaseDetail({
  caseStudy,
  client,
  industry,
  serviceCategory,
  testimonial,
  relatedCases,
  onBack,
  onRelatedCaseClick,
  onCtaSubmit,
}: CaseDetailProps) {
  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-white dark:bg-slate-950" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <CaseHero
        caseStudy={caseStudy}
        client={client}
        industry={industry}
        serviceCategory={serviceCategory}
        onBack={onBack}
        onCtaClick={scrollToForm}
      />
      <ChallengeBlock text={caseStudy.challenge} />
      <SolutionBlock text={caseStudy.solution} />
      {caseStudy.phases.length > 0 && <PhasesTimeline phases={caseStudy.phases} />}
      {caseStudy.metrics.length > 0 && <MetricsGrid metrics={caseStudy.metrics} />}
      {caseStudy.imageUrls.length > 0 && <ImageGallery images={caseStudy.imageUrls} />}
      {testimonial && <TestimonialBlock testimonial={testimonial} />}
      {relatedCases.length > 0 && (
        <RelatedCasesBlock cases={relatedCases} onClick={onRelatedCaseClick} />
      )}
      <div ref={formRef}>
        <CtaSection onSubmit={onCtaSubmit} />
      </div>
    </div>
  )
}

/* ═══════════════════════════ 1. CASE HERO ═══════════════════════════ */

function CaseHero({
  caseStudy,
  client,
  industry,
  serviceCategory,
  onBack,
  onCtaClick,
}: {
  caseStudy: CaseStudy
  client: Client
  industry: IndustrySegment
  serviceCategory: ServiceCategory
  onBack?: () => void
  onCtaClick?: () => void
}) {
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

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Все кейсы
        </button>

        {/* Client name */}
        <p className="text-sm font-semibold text-[#e84249] uppercase tracking-wider mb-2">
          {client.name}
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white mb-4 max-w-3xl">
          {caseStudy.title}
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80 px-3 py-1.5 rounded">
            {industry.name}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider bg-[#e84249]/20 text-[#e84249] px-3 py-1.5 rounded">
            {serviceCategory.name}
          </span>
        </div>

        <button
          onClick={onCtaClick}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-md hover:bg-[#d63a41] transition-colors"
        >
          Обсудить похожий проект
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. CHALLENGE ═══════════════════════════ */

function ChallengeBlock({ text }: { text: string }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white">
              Задача
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-white/70 leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. SOLUTION ═══════════════════════════ */

function SolutionBlock({ text }: { text: string }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white">
              Решение
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-white/70 leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. PHASES TIMELINE ═══════════════════════════ */

function PhasesTimeline({ phases }: { phases: ProjectPhase[] }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white mb-8">
          Этапы проекта
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-[#e84249]/20" />

          <div className="space-y-8">
            {phases.map((phase, idx) => (
              <div key={phase.id} className="relative pl-12">
                {/* Dot */}
                <div className="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full border-2 border-[#e84249] bg-white dark:bg-slate-950" />

                {/* Phase label */}
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e84249] mb-1">
                  Этап {idx + 1}
                </p>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 5. METRICS GRID ═══════════════════════════ */

function MetricsGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white mb-8">
          Результаты
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-lg p-5"
            >
              <p className="text-3xl font-extrabold text-[#e84249] mb-1">
                {m.value}
                {m.suffix && (
                  <span className="text-sm font-medium text-slate-400 dark:text-white/40 ml-1">
                    {m.suffix}
                  </span>
                )}
              </p>
              <p className="text-sm text-slate-500 dark:text-white/50">{m.label}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 6. IMAGE GALLERY ═══════════════════════════ */

function ImageGallery({ images }: { images: string[] }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white mb-8">
          Фото и материалы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((url, idx) => (
            <div
              key={idx}
              className="aspect-[4/3] rounded-lg bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center border border-slate-200 dark:border-slate-700"
            >
              <Image className="w-10 h-10 text-slate-300 dark:text-white/20" strokeWidth={1.5} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 7. TESTIMONIAL ═══════════════════════════ */

function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Quote className="w-10 h-10 text-[#e84249]/30 mb-4" strokeWidth={1.5} />
          <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-white/80 leading-relaxed mb-6 italic">
            &laquo;{testimonial.text}&raquo;
          </blockquote>
          <div>
            <p className="text-base font-bold text-slate-900 dark:text-white">
              {testimonial.authorName}
            </p>
            <p className="text-sm text-slate-500 dark:text-white/50">
              {testimonial.authorRole}, {testimonial.companyName}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 8. RELATED CASES ═══════════════════════════ */

function RelatedCasesBlock({
  cases,
  onClick,
}: {
  cases: RelatedCaseBrief[]
  onClick?: (id: string) => void
}) {
  return (
    <section className="bg-white dark:bg-slate-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white mb-8">
          Похожие кейсы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((cs) => (
            <button
              key={cs.id}
              onClick={() => onClick?.(cs.id)}
              className="group relative text-left w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#e84249]/30 transition-all duration-300"
            >
              {/* Animated red top bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#e84249]">{cs.clientName}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40 bg-slate-100 dark:bg-slate-700/60 px-2 py-1 rounded">
                    {cs.industryName}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-white/50 line-clamp-2 mb-3">
                  {cs.challenge}
                </p>

                {cs.keyMetric && (
                  <p className="text-xl font-extrabold text-[#e84249]">
                    {cs.keyMetric.value}
                    {cs.keyMetric.suffix && (
                      <span className="text-xs font-medium text-slate-400 dark:text-white/40 ml-1">
                        {cs.keyMetric.suffix}
                      </span>
                    )}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 9. CTA SECTION ═══════════════════════════ */

function CtaSection({
  onSubmit,
}: {
  onSubmit?: CaseDetailProps['onCtaSubmit']
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
              Обсудить похожий проект
            </h2>
            <p className="text-white/60 max-w-md">
              Расскажите о вашей задаче — мы предложим подходящее решение на основе
              нашего опыта. Первая консультация бесплатна.
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
