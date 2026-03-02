import { ArrowRight } from "lucide-react";

export function CasesHero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Decorative diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.08]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary"
              style={{
                width: "3px",
                height: "200%",
                transform: "rotate(-35deg)",
                left: `${i * 80 + 40}px`,
                top: "-50%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-white mb-4">
            Наши клиенты и проекты
          </h1>
          <p className="text-base sm:text-lg text-white/70 mb-8 max-w-xl">
            Реальные результаты для реальных компаний. Изучите наши кейсы — от
            бережливого производства до программ развития лидерства.
          </p>
          <a
            href="#cases-cta"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary-hover transition-colors"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
