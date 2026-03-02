import { useState, useRef } from 'react'
import {
  Search,
  FileText,
  GraduationCap,
  Headphones,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Building2,
} from 'lucide-react'
import type {
  KorporativnyeProgrammyProps,
  CorporateProgram,
  ProgramStage,
  MethodologyStep,
  Advantage,
  CaseStudyBrief,
  ClientLogo,
  CustomProgramInfo,
  HeroContent,
} from '../types'

const ICON_MAP: Record<string, React.ElementType> = {
  search: Search,
  'file-text': FileText,
  'graduation-cap': GraduationCap,
  headphones: Headphones,
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export function KorporativnyeProgrammy({
  hero,
  methodology,
  programs,
  customProgram,
  advantages,
  cases,
  clientLogos,
  onSubmitConsultation,
  onProgramClick,
  onCaseClick,
  onScrollToForm,
}: KorporativnyeProgrammyProps) {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onScrollToForm?.()
  }

  return (
    <div className="bg-white dark:bg-slate-950" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <HeroBlock hero={hero} onCtaClick={scrollToForm} />
      <MethodologyBlock steps={methodology} />
      <ProgramsBlock programs={programs} onProgramClick={onProgramClick} onCtaClick={scrollToForm} />
      <CustomProgramBlock info={customProgram} onCtaClick={scrollToForm} />
      <AdvantagesBlock advantages={advantages} />
      <CasesBlock cases={cases} onCaseClick={onCaseClick} />
      <ClientLogosBlock logos={clientLogos} />
      <CtaFormBlock ref={formRef} onSubmit={onSubmitConsultation} />
    </div>
  )
}

/* ═══════════════════════════ SHARED ═══════════════════════════ */

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-black/50 dark:text-white/50 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ═══════════════════════════ 1. HERO ═══════════════════════════ */

function HeroBlock({
  hero,
  onCtaClick,
}: {
  hero: HeroContent
  onCtaClick: () => void
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
                transform: 'rotate(-35deg)',
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
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-black dark:text-white mb-4">
              {hero.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[#e84249] mb-4">
              {hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed mb-8 lg:mb-10">
              {hero.description}
            </p>
            <button
              onClick={onCtaClick}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-md hover:bg-[#d63a41] active:scale-[0.98] transition-all"
            >
              Получить консультацию
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right — Geometric visual with brand lines */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />

              {/* Decorative red diagonal stripes */}
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

/* ═══════════════════════════ 2. METHODOLOGY ═══════════════════════════ */

function MethodologyBlock({ steps }: { steps: MethodologyStep[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Процесс работы" subtitle="Четыре этапа от диагностики до устойчивых результатов" />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[60px] right-[60px] h-0.5 bg-[#e84249]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Search
              return (
                <div key={step.id} className="relative text-center lg:text-left">
                  {/* Icon circle */}
                  <div className="relative z-10 mx-auto lg:mx-0 w-[84px] h-[84px] border-2 border-[#e84249] rounded-full flex items-center justify-center bg-white dark:bg-slate-900 mb-5">
                    <Icon className="w-6 h-6 text-[#e84249]" strokeWidth={1.5} />
                  </div>

                  {/* Mobile connecting line */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute top-[84px] left-1/2 w-0.5 h-8 bg-[#e84249]/20 -translate-x-1/2 sm:hidden" />
                  )}

                  {/* Desktop arrow connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[34px] -right-2 z-20">
                      <ChevronRight className="w-5 h-5 text-[#e84249]/40" />
                    </div>
                  )}

                  <h4 className="font-bold text-black dark:text-white text-sm mb-2">{step.title}</h4>
                  <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed max-w-[240px] mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. PROGRAMS ═══════════════════════════ */

function ProgramsBlock({
  programs,
  onProgramClick,
  onCtaClick,
}: {
  programs: CorporateProgram[]
  onProgramClick?: (programId: string) => void
  onCtaClick: () => void
}) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Готовые программы" subtitle="Проверенные решения для типовых задач бизнеса" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onProgramClick={onProgramClick}
              onCtaClick={onCtaClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramCard({
  program,
  onProgramClick,
  onCtaClick,
}: {
  program: CorporateProgram
  onProgramClick?: (programId: string) => void
  onCtaClick: () => void
}) {
  return (
    <div className="group relative flex flex-col border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800/50 overflow-hidden hover:shadow-lg transition-all h-full">
      {/* Red accent bar on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e84249]/10 dark:bg-[#e84249]/20 text-[#e84249] text-xs font-semibold rounded-sm w-fit mb-3">
          <Clock className="w-3.5 h-3.5" />
          {program.duration}
        </span>

        <h3
          className="text-lg font-bold text-black dark:text-white mb-3 cursor-pointer hover:text-[#e84249] transition-colors"
          onClick={() => onProgramClick?.(program.id)}
        >
          {program.title}
        </h3>

        <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 line-clamp-3">
          {program.description}
        </p>

        {/* Timeline */}
        <ProgramTimeline program={program} />

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors"
          >
            Узнать подробности
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ───────────────── ProgramTimeline (KEY UI) ───────────────── */

function ProgramTimeline({ program }: { program: CorporateProgram }) {
  const stageOpacities = [1, 0.8, 0.6, 0.45, 0.35]

  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />

      <div className="space-y-4">
        {program.stages.map((stage, i) => {
          const opacity = stageOpacities[i] ?? 0.3
          return (
            <div key={stage.id} className="relative">
              {/* Dot */}
              <div
                className="absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800"
                style={{ backgroundColor: `rgba(232, 66, 73, ${opacity})` }}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-black dark:text-white">{stage.title}</span>
                  <span className="inline-flex px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-[10px] font-medium text-black/50 dark:text-white/50 rounded">
                    мес. {stage.monthStart}–{stage.monthEnd}
                  </span>
                </div>
                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ═══════════════════════════ 4. CUSTOM PROGRAM ═══════════════════════════ */

function CustomProgramBlock({
  info,
  onCtaClick,
}: {
  info: CustomProgramInfo
  onCtaClick: () => void
}) {
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
        <div className="max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight">
            {info.title}
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8">
            {info.description}
          </p>

          <ul className="space-y-3 mb-10">
            {info.bulletPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#e84249] shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold text-sm rounded-md hover:bg-white/10 active:scale-[0.98] transition-all"
          >
            Обсудить индивидуальную программу
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 5. ADVANTAGES ═══════════════════════════ */

function AdvantagesBlock({ advantages }: { advantages: Advantage[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Почему мы" subtitle="Опыт, измеримые результаты и передача компетенций" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group relative p-6 lg:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              {adv.stat && (
                <div className="mb-3">
                  <span className="text-4xl font-extrabold text-[#e84249] tracking-tight">{adv.stat}</span>
                  {adv.statLabel && (
                    <span className="block text-xs text-black/40 dark:text-white/40 mt-1">{adv.statLabel}</span>
                  )}
                </div>
              )}

              <h4 className="font-bold text-black dark:text-white text-sm mb-2">{adv.title}</h4>
              <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 6. CASES ═══════════════════════════ */

function CasesBlock({
  cases,
  onCaseClick,
}: {
  cases: CaseStudyBrief[]
  onCaseClick?: (caseId: string) => void
}) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Кейсы и результаты" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {cases.map((cs) => (
            <button
              key={cs.id}
              onClick={() => onCaseClick?.(cs.id)}
              className="group relative text-left border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800/50 p-6 overflow-hidden hover:shadow-lg hover:border-[#e84249]/30 transition-all"
            >
              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              {/* Industry badge */}
              <span className="inline-block px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-semibold text-black/50 dark:text-white/50 rounded-sm mb-4">
                {cs.industry}
              </span>

              {/* Metric */}
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-[#e84249] tracking-tight">{cs.metric}</span>
                <span className="block text-xs text-black/40 dark:text-white/40 mt-1">{cs.metricLabel}</span>
              </div>

              <h4 className="font-bold text-black dark:text-white text-sm mb-2 leading-snug">
                {cs.clientName}
              </h4>

              <p className="text-xs text-black/50 dark:text-white/50 mb-3 leading-relaxed">
                <span className="font-semibold text-black/70 dark:text-white/70">Задача: </span>
                {cs.challenge}
              </p>

              <p className="text-xs text-black/70 dark:text-white/70 leading-relaxed">
                <span className="font-semibold">Результат: </span>
                {cs.result}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 7. CLIENT LOGOS ═══════════════════════════ */

function ClientLogosBlock({ logos }: { logos: ClientLogo[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-black/30 dark:text-white/30 uppercase tracking-wider mb-8">
          Нам доверяют
        </h3>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center h-12 px-4 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-black/40 dark:text-white/40" />
                <span className="text-sm font-semibold text-black/60 dark:text-white/60 whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 8. CTA FORM ═══════════════════════════ */

import { forwardRef } from 'react'

const CtaFormBlock = forwardRef<HTMLDivElement, {
  onSubmit?: KorporativnyeProgrammyProps['onSubmitConsultation']
}>(function CtaFormBlock({ onSubmit }, ref) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    comment: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({
      name: form.name,
      phone: form.phone,
      company: form.company || undefined,
      email: form.email || undefined,
      comment: form.comment || undefined,
    })
  }

  const inputClass =
    'w-full px-4 py-3 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:border-[#e84249] focus:ring-1 focus:ring-[#e84249]/30 transition-colors'

  return (
    <section ref={ref} className="relative bg-white dark:bg-slate-950 py-16 lg:py-20 overflow-hidden">
      {/* Accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#e84249]" />

      <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black dark:text-white mb-3 tracking-tight">
            Получите консультацию эксперта
          </h2>
          <p className="text-sm text-black/50 dark:text-white/50">
            Обсудим ваши задачи и подберём оптимальное решение
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Ваше имя *"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={inputClass}
              required
            />
            <input
              type="text"
              placeholder="Компания"
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Телефон *"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className={inputClass}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={inputClass}
            />
          </div>
          <textarea
            placeholder="Комментарий"
            value={form.comment}
            onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
            className={`${inputClass} resize-none`}
            rows={4}
          />
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
})
