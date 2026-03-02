import type {
  AboutCompanyProps,
  Trainer,
  Milestone,
  CompanyMetric,
  Certificate,
} from '../types'

/* ─────────────────────────── Main Component ─────────────────────────── */

export function AboutCompany({
  trainers,
  companyInfo,
  milestones,
  companyMetrics,
  certificates,
  onTrainerClick,
}: AboutCompanyProps) {
  return (
    <div
      className="bg-white dark:bg-slate-950"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <MissionBlock
        mission={companyInfo.mission}
        methodology={companyInfo.methodology}
        description={companyInfo.description}
        foundedYear={companyInfo.foundedYear}
      />
      <TeamBlock trainers={trainers} onTrainerClick={onTrainerClick} />
      <TimelineBlock milestones={milestones} />
      <MetricsBlock metrics={companyMetrics} />
      <CertificatesBlock certificates={certificates} />
    </div>
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

/* ═══════════════════════════ 1. MISSION ═══════════════════════════ */

function MissionBlock({
  mission,
  methodology,
  description,
  foundedYear,
}: {
  mission: string
  methodology: string
  description: string
  foundedYear: number
}) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative diagonal lines */}
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
          <span className="inline-block px-3 py-1 bg-[#e84249]/10 text-[#e84249] text-xs font-semibold rounded-sm mb-5">
            С {foundedYear} года
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-[#003154] dark:text-white mb-5">
            О компании PDCA&nbsp;Consulting
          </h1>

          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed mb-6">
            {mission}
          </p>

          <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed mb-8">
            {description}
          </p>

          <div className="border-l-4 border-[#e84249] pl-5 py-1">
            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed font-medium">
              {methodology}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. TEAM ═══════════════════════════ */

function TeamBlock({
  trainers,
  onTrainerClick,
}: {
  trainers: Trainer[]
  onTrainerClick?: (trainerId: string) => void
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Наша команда" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {trainers.map((trainer) => {
            const initials = trainer.name
              .split(' ')
              .map((n) => n[0])
              .join('')

            return (
              <button
                key={trainer.id}
                onClick={() => onTrainerClick?.(trainer.id)}
                className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all text-left"
              >
                {/* Red accent bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#e84249] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                {/* Avatar */}
                <div className="w-[120px] h-[120px] shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-4">
                  <span className="text-3xl font-extrabold text-black/20 dark:text-white/20">
                    {initials}
                  </span>
                </div>

                <h3 className="font-bold text-black dark:text-white text-sm mb-1">
                  {trainer.name}
                </h3>
                <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed mb-3">
                  {trainer.role}
                </p>

                {/* Experience badge */}
                <span className="inline-block px-2.5 py-1 bg-[#e84249]/10 text-[#e84249] text-xs font-semibold rounded-sm">
                  {trainer.experienceYears} лет опыта
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. TIMELINE ═══════════════════════════ */

function TimelineBlock({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="История компании" />
        <div className="relative max-w-[800px]">
          {/* Vertical line */}
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-0.5 bg-stone-300 dark:bg-stone-600" />

          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="relative flex gap-5 sm:gap-6">
                {/* Dot marker */}
                <div className="relative z-10 shrink-0 w-[32px] sm:w-[40px] flex justify-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-[#e84249] ring-4 ring-white dark:ring-slate-950" />
                </div>

                <div className="pb-2">
                  <span className="text-lg font-bold text-[#e84249] mb-1 block">
                    {milestone.year}
                  </span>
                  <h3 className="font-bold text-black dark:text-white text-sm mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. METRICS ═══════════════════════════ */

function MetricsBlock({ metrics }: { metrics: CompanyMetric[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Компания в цифрах" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-extrabold text-[#e84249] tracking-tight">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-3xl lg:text-4xl font-extrabold text-[#e84249]">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <div className="font-semibold text-black dark:text-white text-sm mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 5. CERTIFICATES ═══════════════════════════ */

function CertificatesBlock({
  certificates,
}: {
  certificates: Certificate[]
}) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Аккредитации и сертификаты" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm hover:shadow-md transition-all"
            >
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-sm flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all">
                <span className="text-xs font-bold text-black/30 dark:text-white/30 uppercase">
                  {cert.issuer
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 3)}
                </span>
              </div>

              <h3 className="font-bold text-black dark:text-white text-sm mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-black/50 dark:text-white/50">
                {cert.issuer}
              </p>
              {cert.year && (
                <span className="mt-2 text-xs text-[#e84249] font-medium">
                  {cert.year}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
