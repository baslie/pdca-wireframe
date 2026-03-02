import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { CorporateProgram, ProgramStage } from "@/data/types";

export function ProgramCards({ programs }: { programs: CorporateProgram[] }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Готовые программы
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/50 max-w-2xl">
            Проверенные решения для типовых задач бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: CorporateProgram }) {
  return (
    <div className="group relative flex flex-col border border-slate-200 rounded-sm bg-white overflow-hidden hover:shadow-lg transition-all h-full">
      {/* Red accent bar on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-sm w-fit mb-3">
          <Clock className="w-3.5 h-3.5" />
          {program.duration}
        </span>

        <h3 className="text-lg font-bold text-black mb-3 hover:text-primary transition-colors">
          {program.title}
        </h3>

        <p className="text-sm text-black/60 leading-relaxed mb-4 line-clamp-3">
          {program.description}
        </p>

        {/* Timeline */}
        <ProgramTimeline stages={program.stages} />

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-slate-100">
          <Link
            href="#consultation-form"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Узнать подробности
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProgramTimeline({ stages }: { stages: ProgramStage[] }) {
  const stageOpacities = [1, 0.8, 0.6, 0.45, 0.35];

  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200" />

      <div className="space-y-4">
        {stages.map((stage, i) => {
          const opacity = stageOpacities[i] ?? 0.3;
          return (
            <div key={stage.id} className="relative">
              {/* Dot */}
              <div
                className="absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 border-white"
                style={{ backgroundColor: `rgba(232, 66, 73, ${opacity})` }}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-black">
                    {stage.title}
                  </span>
                  <span className="inline-flex px-1.5 py-0.5 bg-slate-100 text-[10px] font-medium text-black/50 rounded">
                    мес. {stage.monthStart}–{stage.monthEnd}
                  </span>
                </div>
                <p className="text-xs text-black/50 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
