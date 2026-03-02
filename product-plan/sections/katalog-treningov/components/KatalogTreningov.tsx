import { useState } from 'react'
import {
  Clock,
  MapPin,
  Monitor,
  Users,
  ArrowRight,
  Search,
  Sparkles,
} from 'lucide-react'
import type {
  KatalogTreningovProps,
  Training,
  TrainingFormat,
  TrainingLevel,
  Category,
} from '../types'

const FORMAT_LABELS: Record<TrainingFormat, string> = {
  offline: 'Офлайн',
  online: 'Онлайн',
  hybrid: 'Гибрид',
}

const LEVEL_LABELS: Record<TrainingLevel, string> = {
  managers: 'Руководители',
  'line-staff': 'Линейный персонал',
  office: 'Офис',
  all: 'Все уровни',
}

/* ─────────────────────────── Main Component ─────────────────────────── */

export function KatalogTreningov({
  trainings,
  categories,
  onTrainingClick,
  onCategoryChange,
  onRequestConsultation,
}: KatalogTreningovProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

  const filteredTrainings = activeCategoryId
    ? trainings.filter((t) => t.categoryId === activeCategoryId)
    : trainings

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategoryId(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <div className="bg-white dark:bg-slate-950" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <HeaderBlock count={filteredTrainings.length} />
      <TabsBlock
        categories={categories}
        activeCategoryId={activeCategoryId}
        onChange={handleCategoryChange}
      />
      <CatalogGridBlock
        trainings={filteredTrainings}
        onTrainingClick={onTrainingClick}
      />
      <CtaBlock onRequestConsultation={onRequestConsultation} />
    </div>
  )
}

/* ═══════════════════════════ 1. HEADER ═══════════════════════════ */

function HeaderBlock({ count }: { count: number }) {
  return (
    <section className="bg-white dark:bg-slate-950 pt-12 pb-6 lg:pt-16 lg:pb-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003154] dark:text-white tracking-tight mb-3">
          Каталог образовательных программ
        </h1>
        <p className="text-sm sm:text-base text-black/50 dark:text-white/50">
          {count}{' '}
          {count % 10 === 1 && count % 100 !== 11
            ? 'программа'
            : count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)
              ? 'программы'
              : 'программ'}
          {' '}для развития команд
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 2. TABS ═══════════════════════════ */

function TabsBlock({
  categories,
  activeCategoryId,
  onChange,
}: {
  categories: Category[]
  activeCategoryId: string | null
  onChange: (id: string | null) => void
}) {
  return (
    <section className="bg-white dark:bg-slate-950 pb-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onChange(null)}
            className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all active:scale-[0.98] ${
              activeCategoryId === null
                ? 'bg-[#e84249] text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-black/60 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Все
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all active:scale-[0.98] ${
                activeCategoryId === cat.id
                  ? 'bg-[#e84249] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-black/60 dark:text-white/60 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 3. CATALOG GRID ═══════════════════════════ */

function CatalogGridBlock({
  trainings,
  onTrainingClick,
}: {
  trainings: Training[]
  onTrainingClick?: (id: string) => void
}) {
  if (trainings.length === 0) {
    return (
      <section className="bg-white dark:bg-slate-950 py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
            <Search className="w-7 h-7 text-black/30 dark:text-white/30" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-black/50 dark:text-white/50">
            В этой категории пока нет программ
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white dark:bg-slate-950 pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {trainings.map((training) => (
            <TrainingCard
              key={training.id}
              training={training}
              onClick={() => onTrainingClick?.(training.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ 4. TRAINING CARD ═══════════════════════════ */

function TrainingCard({
  training,
  onClick,
}: {
  training: Training
  onClick?: () => void
}) {
  const formatBadges =
    training.format.length > 0
      ? training.format.map((f) => ({
          label: FORMAT_LABELS[f],
          icon: f === 'online' ? Monitor : MapPin,
        }))
      : [{ label: 'Уточняйте', icon: Sparkles }]

  return (
    <div className="group flex flex-col border border-slate-200 dark:border-slate-700 rounded-sm bg-white dark:bg-slate-800/50 p-5 lg:p-6 hover:shadow-lg transition-all">
      {/* Title */}
      <h3 className="text-base font-bold text-[#003154] dark:text-white leading-snug mb-2">
        {training.title}
      </h3>

      {/* Key result */}
      <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed mb-4 line-clamp-2">
        {training.keyResult}
      </p>

      {/* Meta — pushed to bottom */}
      <div className="mt-auto space-y-3">
        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
          <Clock className="w-4 h-4 text-black/40 dark:text-white/40" strokeWidth={1.5} />
          {training.duration}
        </div>

        {/* Format badges */}
        <div className="flex flex-wrap gap-1.5">
          {formatBadges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-black/70 dark:text-white/70 rounded-sm"
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                {badge.label}
              </span>
            )
          })}
        </div>

        {/* Level */}
        <div className="flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
          <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
          {LEVEL_LABELS[training.level]}
        </div>

        {/* Action */}
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e84249] hover:text-[#d63a41] transition-colors group/btn"
        >
          Подробнее
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════ 5. CTA ═══════════════════════════ */

function CtaBlock({
  onRequestConsultation,
}: {
  onRequestConsultation?: () => void
}) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="w-8 h-8 text-[#e84249] mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#003154] dark:text-white mb-3 tracking-tight">
          Не нашли нужный тренинг?
        </h2>
        <p className="text-sm text-black/50 dark:text-white/50 mb-6 max-w-md mx-auto">
          Мы разрабатываем программы под задачи вашей компании. Расскажите, что вам нужно — подберём решение.
        </p>
        <button
          onClick={onRequestConsultation}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e84249] text-white font-semibold text-sm rounded-sm hover:bg-[#d63a41] active:scale-[0.98] transition-all"
        >
          Оставить заявку
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  )
}
