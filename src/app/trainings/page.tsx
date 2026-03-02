import { Suspense } from "react";
import { trainings, getAllCategories, getTrainingsByCategory } from "@/data/trainings";
import { pluralize } from "@/lib/utils";
import { CategoryTabs } from "@/components/sections/catalog/CategoryTabs";
import { TrainingGrid } from "@/components/sections/catalog/TrainingGrid";
import { CatalogCta } from "@/components/sections/catalog/CatalogCta";

export const metadata = {
  title: "Каталог тренингов — PDCA Consulting",
  description:
    "Образовательные программы по бережливому производству, безопасности, продажам, лидерству и коммуникациям. 22 программы для развития команд.",
};

interface TrainingsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function TrainingsPage({ searchParams }: TrainingsPageProps) {
  const params = await searchParams;
  const categoryId = params.category ?? null;

  const filteredTrainings = categoryId
    ? getTrainingsByCategory(categoryId)
    : trainings;

  const count = filteredTrainings.length;
  const countLabel = pluralize(count, ["программа", "программы", "программ"]);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-tight mb-3">
            Каталог образовательных программ
          </h1>
          <p className="text-sm sm:text-base text-black/50">
            {count} {countLabel} для развития команд
          </p>
        </div>
      </section>

      {/* Tabs — wrapped in Suspense because useSearchParams requires it */}
      <Suspense fallback={null}>
        <CategoryTabs categories={getAllCategories()} />
      </Suspense>

      {/* Grid */}
      <TrainingGrid trainings={filteredTrainings} />

      {/* CTA */}
      <CatalogCta />
    </div>
  );
}
