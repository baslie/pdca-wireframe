import type { CompanyMetric } from "@/data/types";

export function CompanyMetrics({ metrics }: { metrics: CompanyMetric[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Компания в цифрах
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-3xl lg:text-4xl font-extrabold text-primary">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <div className="font-semibold text-black text-sm mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
