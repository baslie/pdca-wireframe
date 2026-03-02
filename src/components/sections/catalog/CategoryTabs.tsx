"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import type { Category } from "@/data/types";

interface CategoryTabsProps {
  categories: Category[];
}

export function CategoryTabs({ categories }: CategoryTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategoryId = searchParams.get("category") ?? null;

  const handleChange = (categoryId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="pb-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleChange(null)}
            className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all active:scale-[0.98] ${
              activeCategoryId === null
                ? "bg-primary text-white"
                : "bg-slate-100 text-black/60 hover:bg-slate-200"
            }`}
          >
            Все
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleChange(cat.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-sm transition-all active:scale-[0.98] ${
                activeCategoryId === cat.id
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-black/60 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
