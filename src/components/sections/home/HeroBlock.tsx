import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroContent } from "@/data/types";

export function HeroBlock({ hero }: { hero: HeroContent }) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-black mb-6">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-lg text-black/60 leading-relaxed mb-8 lg:mb-10">
              {hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary-hover active:scale-[0.98] transition-all"
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-secondary text-secondary font-semibold text-sm rounded-md hover:bg-secondary hover:text-white transition-all"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* Right — Geometric visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] bg-slate-100 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <line
                  x1="30%"
                  y1="0"
                  x2="0"
                  y2="60%"
                  stroke="#e84249"
                  strokeWidth="4"
                  opacity="0.8"
                />
                <line
                  x1="50%"
                  y1="0"
                  x2="10%"
                  y2="80%"
                  stroke="#e84249"
                  strokeWidth="4"
                  opacity="0.6"
                />
                <line
                  x1="70%"
                  y1="0"
                  x2="30%"
                  y2="100%"
                  stroke="#e84249"
                  strokeWidth="4"
                  opacity="0.5"
                />
                <line
                  x1="90%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="#e84249"
                  strokeWidth="3"
                  opacity="0.35"
                />
                <line
                  x1="100%"
                  y1="10%"
                  x2="70%"
                  y2="100%"
                  stroke="#e84249"
                  strokeWidth="3"
                  opacity="0.25"
                />
              </svg>
              <div className="absolute bottom-4 right-4 text-black/10 text-7xl font-extrabold tracking-tighter select-none">
                PDCA
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-sm" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-2 border-secondary rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
