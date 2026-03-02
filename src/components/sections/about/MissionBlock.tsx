import type { CompanyInfo } from "@/data/types";

export function MissionBlock({ companyInfo }: { companyInfo: CompanyInfo }) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute -right-20 top-0 bottom-0 w-[600px] lg:w-[800px] opacity-[0.06]">
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
          <span className="inline-block px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-sm mb-5">
            С {companyInfo.foundedYear} года
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-secondary mb-5">
            О компании PDCA&nbsp;Consulting
          </h1>

          <p className="text-base sm:text-lg text-black/60 leading-relaxed mb-6">
            {companyInfo.mission}
          </p>

          <p className="text-sm text-black/50 leading-relaxed mb-8">
            {companyInfo.description}
          </p>

          <div className="border-l-4 border-primary pl-5 py-1">
            <p className="text-sm text-black/70 leading-relaxed font-medium">
              {companyInfo.methodology}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
