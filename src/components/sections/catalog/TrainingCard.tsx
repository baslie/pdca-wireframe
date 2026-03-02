import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";
import type { TrainingDetail } from "@/data/types";
import { LEVEL_LABELS } from "@/data/trainings";
import { FormatBadge } from "@/components/ui/FormatBadge";

interface TrainingCardProps {
  training: TrainingDetail;
}

export function TrainingCard({ training }: TrainingCardProps) {
  return (
    <div className="group flex flex-col border border-slate-200 rounded-sm bg-white p-5 lg:p-6 hover:shadow-lg transition-all">
      {/* Title */}
      <h3 className="text-base font-bold text-secondary leading-snug mb-2">
        {training.title}
      </h3>

      {/* Key result */}
      <p className="text-sm text-black/60 leading-relaxed mb-4 line-clamp-2">
        {training.keyResult}
      </p>

      {/* Meta — pushed to bottom */}
      <div className="mt-auto space-y-3">
        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-black/70">
          <Clock className="w-4 h-4 text-black/40" strokeWidth={1.5} />
          {training.duration}
        </div>

        {/* Format badges */}
        <div className="flex flex-wrap gap-1.5">
          {training.format.length > 0 ? (
            training.format.map((f) => <FormatBadge key={f} format={f} />)
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-xs font-medium text-black/70 rounded-sm">
              Уточняйте
            </span>
          )}
        </div>

        {/* Level */}
        <div className="flex items-center gap-2 text-xs text-black/50">
          <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
          {LEVEL_LABELS[training.level]}
        </div>

        {/* Action */}
        <Link
          href={`/trainings/${training.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/btn"
        >
          Подробнее
          <ArrowRight
            className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"
            strokeWidth={1.5}
          />
        </Link>
      </div>
    </div>
  );
}
