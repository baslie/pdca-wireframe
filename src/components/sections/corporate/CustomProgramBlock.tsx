import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { CustomProgramInfo } from "@/data/types";

export function CustomProgramBlock({ info }: { info: CustomProgramInfo }) {
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
        <div className="max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight">
            {info.title}
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8">
            {info.description}
          </p>

          <ul className="space-y-3 mb-10">
            {info.bulletPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/80 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="#consultation-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold text-sm rounded-md hover:bg-white/10 active:scale-[0.98] transition-all"
          >
            Обсудить индивидуальную программу
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
