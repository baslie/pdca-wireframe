import type { TrustFact } from "@/data/types";

export function TrustBlock({ facts }: { facts: TrustFact[] }) {
  return (
    <section className="relative bg-secondary py-16 lg:py-20 overflow-hidden">
      {/* Subtle brand pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white"
            style={{
              width: "2px",
              height: "200%",
              transform: "rotate(-25deg)",
              left: `${i * 14}%`,
              top: "-50%",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-12 tracking-tight">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {facts.map((fact) => (
            <div key={fact.id}>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                  {fact.value}
                </span>
                {fact.unit && (
                  <span className="text-lg font-bold text-primary/70">
                    {fact.unit}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
