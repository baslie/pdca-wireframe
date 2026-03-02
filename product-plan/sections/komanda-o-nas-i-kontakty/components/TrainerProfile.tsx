import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import type {
  TrainerProfileProps,
  TrainerTraining,
} from '../types'

/* ─────────────────────────── Main Component ─────────────────────────── */

export function TrainerProfile({
  trainer,
  onBack,
  onTrainingClick,
}: TrainerProfileProps) {
  return (
    <div
      className="bg-white dark:bg-slate-950"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <ProfileHeader
        name={trainer.name}
        role={trainer.role}
        experienceYears={trainer.experienceYears}
        onBack={onBack}
      />
      <BioBlock fullBio={trainer.fullBio} />
      <SpecializationsBlock specializations={trainer.specializations} />
      <CertificationsBlock certifications={trainer.certifications} />
      <TrainingsBlock
        trainings={trainer.trainings}
        onTrainingClick={onTrainingClick}
      />
    </div>
  )
}

/* ═══════════════════════════ 1. PROFILE HEADER ═══════════════════════════ */

function ProfileHeader({
  name,
  role,
  experienceYears,
  onBack,
}: {
  name: string
  role: string
  experienceYears: number
  onBack?: () => void
}) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Назад к команде
          </button>
        )}

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          {/* Avatar */}
          <div className="w-[200px] h-[200px] shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="text-5xl font-extrabold text-black/20 dark:text-white/20">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003154] dark:text-white tracking-tight mb-2">
              {name}
            </h1>
            <p className="text-base text-black/60 dark:text-white/60 leading-relaxed mb-4">
              {role}
            </p>
            <span className="inline-block px-3 py-1.5 bg-[#e84249]/10 text-[#e84249] text-sm font-semibold rounded-sm">
              {experienceYears} лет опыта
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. BIO ═══════════════════════════ */

function BioBlock({ fullBio }: { fullBio: string }) {
  const paragraphs = fullBio.split('\n\n')

  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm text-black/60 dark:text-white/60 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. SPECIALIZATIONS ═══════════════════════════ */

function SpecializationsBlock({
  specializations,
}: {
  specializations: string[]
}) {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Специализации" />
        <div className="flex flex-wrap gap-2">
          {specializations.map((spec, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-stone-100 dark:bg-stone-700 text-sm text-black/70 dark:text-white/70 font-medium rounded-sm"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. CERTIFICATIONS ═══════════════════════════ */

function CertificationsBlock({
  certifications,
}: {
  certifications: string[]
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Сертификаты и квалификации" />
        <div className="max-w-[800px] space-y-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex gap-3 items-start"
            >
              <CheckCircle2 className="w-5 h-5 text-[#e84249] shrink-0 mt-0.5" />
              <span className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 5. TRAININGS ═══════════════════════════ */

function TrainingsBlock({
  trainings,
  onTrainingClick,
}: {
  trainings: TrainerTraining[]
  onTrainingClick?: (trainingId: string) => void
}) {
  const FORMAT_LABELS: Record<string, string> = {
    offline: 'Офлайн',
    online: 'Онлайн',
    hybrid: 'Гибрид',
  }

  return (
    <section className="bg-white dark:bg-slate-950 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Проводимые тренинги" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1000px]">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="group flex flex-col p-5 lg:p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-sm hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-black dark:text-white text-sm leading-snug mb-3">
                {training.title}
              </h3>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-black/50 dark:text-white/50">
                    Проведено: <span className="font-semibold text-black/70 dark:text-white/70">{training.count} раз</span>
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-black/70 dark:text-white/70 rounded-sm">
                    {FORMAT_LABELS[training.format] ?? training.format}
                  </span>
                </div>

                <button
                  onClick={() => onTrainingClick?.(training.id)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors group/btn"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
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
