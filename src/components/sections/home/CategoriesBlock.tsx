import Link from "next/link";
import {
  TrendingUp,
  ShieldCheck,
  Handshake,
  Users,
  ChevronRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { TrainingCategory } from "@/data/types";

const ICON_MAP: Record<string, React.ElementType> = {
  "chart-line": TrendingUp,
  "shield-check": ShieldCheck,
  handshake: Handshake,
  users: Users,
};

export function CategoriesBlock({
  categories,
}: {
  categories: TrainingCategory[];
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Ключевые направления" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || TrendingUp;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group text-left p-6 bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon
                    className="w-5 h-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-bold text-black text-sm mb-2 leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs text-black/50 leading-relaxed">
                  {cat.result}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                  Программы{" "}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
