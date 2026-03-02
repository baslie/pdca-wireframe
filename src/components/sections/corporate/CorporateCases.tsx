import type { CaseStudyBrief } from "@/data/types";

export function CorporateCases({ cases }: { cases: CaseStudyBrief[] }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Кейсы и результаты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="group relative text-left border border-slate-200 rounded-sm bg-white p-6 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
            >
              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              {/* Industry badge */}
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-xs font-semibold text-black/50 rounded-sm mb-4">
                {cs.industry}
              </span>

              {/* Metric */}
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-primary tracking-tight">
                  {cs.metric}
                </span>
                <span className="block text-xs text-black/40 mt-1">
                  {cs.metricLabel}
                </span>
              </div>

              <h4 className="font-bold text-black text-sm mb-2 leading-snug">
                {cs.clientName}
              </h4>

              <p className="text-xs text-black/50 mb-3 leading-relaxed">
                <span className="font-semibold text-black/70">Задача: </span>
                {cs.challenge}
              </p>

              <p className="text-xs text-black/70 leading-relaxed">
                <span className="font-semibold">Результат: </span>
                {cs.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
