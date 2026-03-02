import type { Milestone } from "@/data/types";

export function HistoryTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            История компании
          </h2>
        </div>

        <div className="relative max-w-[800px]">
          {/* Vertical line */}
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-0.5 bg-stone-300" />

          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="relative flex gap-5 sm:gap-6">
                {/* Dot marker */}
                <div className="relative z-10 shrink-0 w-[32px] sm:w-[40px] flex justify-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-white" />
                </div>

                <div className="pb-2">
                  <span className="text-lg font-bold text-primary mb-1 block">
                    {milestone.year}
                  </span>
                  <h3 className="font-bold text-black text-sm mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-black/50 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
