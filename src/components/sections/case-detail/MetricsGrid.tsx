import type { CaseStudyMetric } from "@/data/types";

export function MetricsGrid({ metrics }: { metrics: CaseStudyMetric[] }) {
  if (metrics.length === 0) return null;

  return (
    <section className="bg-secondary-light py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-secondary mb-8">
            Результаты
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="border border-slate-200 bg-white rounded-lg p-5"
              >
                <p className="text-3xl font-extrabold text-primary mb-1">
                  {m.value}
                  {m.suffix && (
                    <span className="text-sm font-medium text-black/40 ml-1">
                      {m.suffix}
                    </span>
                  )}
                </p>
                <p className="text-sm text-black/50">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
