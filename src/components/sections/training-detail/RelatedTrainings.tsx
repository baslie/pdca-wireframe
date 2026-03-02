import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { RelatedTraining } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FormatBadge } from "@/components/ui/FormatBadge";

interface RelatedTrainingsProps {
  trainings: RelatedTraining[];
}

export function RelatedTrainings({ trainings }: RelatedTrainingsProps) {
  if (trainings.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Похожие тренинги" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="group flex flex-col border border-slate-200 rounded-sm bg-white p-5 lg:p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-base font-bold text-secondary leading-snug mb-2">
                {training.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed mb-4 line-clamp-2">
                {training.keyResult}
              </p>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-2 text-sm text-black/70">
                  <Clock
                    className="w-4 h-4 text-black/40"
                    strokeWidth={1.5}
                  />
                  {training.duration}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {training.format.map((f) => (
                    <FormatBadge key={f} format={f} />
                  ))}
                </div>

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
          ))}
        </div>
      </div>
    </section>
  );
}
