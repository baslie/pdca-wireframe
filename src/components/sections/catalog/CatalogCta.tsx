import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function CatalogCta() {
  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles
          className="w-8 h-8 text-primary mx-auto mb-4"
          strokeWidth={1.5}
        />
        <h2 className="text-xl sm:text-2xl font-extrabold text-secondary mb-3 tracking-tight">
          Не нашли нужный тренинг?
        </h2>
        <p className="text-sm text-black/50 mb-6 max-w-md mx-auto">
          Мы разрабатываем программы под задачи вашей компании. Расскажите, что
          вам нужно — подберём решение.
        </p>
        <Link
          href="/#cta"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-sm hover:bg-primary-hover active:scale-[0.98] transition-all"
        >
          Оставить заявку
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
