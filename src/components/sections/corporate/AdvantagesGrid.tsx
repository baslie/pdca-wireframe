import type { Advantage } from "@/data/types";

export function AdvantagesGrid({ advantages }: { advantages: Advantage[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Почему мы
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/50 max-w-2xl">
            Опыт, измеримые результаты и передача компетенций
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group relative p-6 lg:p-8 bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              {adv.stat && (
                <div className="mb-3">
                  <span className="text-4xl font-extrabold text-primary tracking-tight">
                    {adv.stat}
                  </span>
                  {adv.statLabel && (
                    <span className="block text-xs text-black/40 mt-1">
                      {adv.statLabel}
                    </span>
                  )}
                </div>
              )}

              <h4 className="font-bold text-black text-sm mb-2">{adv.title}</h4>
              <p className="text-xs text-black/50 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
