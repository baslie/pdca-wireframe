import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { WorkFormat } from "@/data/types";

export function FormatsBlock({ formats }: { formats: WorkFormat[] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Форматы работы" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {formats.map((fmt, i) => (
            <Link
              key={fmt.id}
              href={fmt.href}
              className="group text-left relative p-6 lg:p-8 bg-white border border-slate-200 rounded-sm hover:shadow-lg transition-all"
            >
              <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-5 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-black mb-3">
                {fmt.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {fmt.description}
              </p>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary">
                Узнать больше{" "}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
