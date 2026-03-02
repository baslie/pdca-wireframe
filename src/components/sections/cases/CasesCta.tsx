import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CasesCta() {
  return (
    <section id="cases-cta" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
            Хотите такие же результаты?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Оставьте заявку — мы подберём решение, которое подойдёт именно вашей
            компании. Первая консультация бесплатна.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary-hover transition-colors"
          >
            Обсудить ваш проект
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
