import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TrainerTraining } from "@/data/types";

const FORMAT_LABELS: Record<string, string> = {
  offline: "Офлайн",
  online: "Онлайн",
  hybrid: "Гибрид",
};

export function TrainerTrainings({
  trainings,
}: {
  trainings: TrainerTraining[];
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Проводимые тренинги
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-[1000px]">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="group flex flex-col p-5 lg:p-6 bg-white border border-slate-200 rounded-sm hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-black text-sm leading-snug mb-3">
                {training.title}
              </h3>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-black/50">
                    Проведено:{" "}
                    <span className="font-semibold text-black/70">
                      {training.count} раз
                    </span>
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-slate-100 text-xs font-medium text-black/70 rounded-sm">
                    {FORMAT_LABELS[training.format] ?? training.format}
                  </span>
                </div>

                <Link
                  href={`/trainings/${training.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/btn"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
