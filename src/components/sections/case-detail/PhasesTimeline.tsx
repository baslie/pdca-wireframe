import type { ProjectPhase } from "@/data/types";

export function PhasesTimeline({ phases }: { phases: ProjectPhase[] }) {
  if (phases.length === 0) return null;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-secondary mb-8">
            Этапы проекта
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {phases.map((phase, idx) => (
                <div key={phase.id} className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-white" />

                  {/* Phase label */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                    Этап {idx + 1}
                  </p>
                  <h3 className="text-base font-bold text-black mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
