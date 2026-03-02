import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Trainer } from "@/data/types";

export function TrainersBlock({ trainers }: { trainers: Trainer[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Наши эксперты" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {trainers.map((tr) => (
            <div
              key={tr.id}
              className="group text-left bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[3/2] bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-black/10">
                    {tr.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Red accent corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-primary origin-bottom-left -rotate-45 scale-150" />
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-bold text-black text-sm mb-0.5">
                  {tr.name}
                </h4>
                <p className="text-xs text-primary font-medium mb-3">
                  {tr.role}
                </p>
                <ul className="space-y-1.5">
                  {tr.highlights.slice(0, 2).map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-xs text-black/60 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Смотреть всех тренеров{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
