"use client";

import { useState } from "react";
import type { CaseIndustrySegment, ServiceCategory } from "@/data/types";

interface CaseFiltersProps {
  industrySegments: CaseIndustrySegment[];
  serviceCategories: ServiceCategory[];
  onFilterChange: (filters: {
    industryId: string | null;
    serviceCategoryId: string | null;
  }) => void;
}

export function CaseFilters({
  industrySegments,
  serviceCategories,
  onFilterChange,
}: CaseFiltersProps) {
  const [industryId, setIndustryId] = useState<string | null>(null);
  const [serviceCategoryId, setServiceCategoryId] = useState<string | null>(
    null
  );

  const tabBase =
    "px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap";
  const tabActive = "bg-secondary text-white";
  const tabInactive = "text-black/60 hover:bg-slate-100";

  const handleIndustryChange = (id: string | null) => {
    setIndustryId(id);
    onFilterChange({ industryId: id, serviceCategoryId });
  };

  const handleServiceChange = (id: string | null) => {
    setServiceCategoryId(id);
    onFilterChange({ industryId, serviceCategoryId: id });
  };

  return (
    <section className="bg-white pt-8 pb-4">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Industry tabs */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-2">
            Отрасль
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleIndustryChange(null)}
              className={`${tabBase} ${industryId === null ? tabActive : tabInactive}`}
            >
              Все
            </button>
            {industrySegments.map((seg) => (
              <button
                key={seg.id}
                onClick={() =>
                  handleIndustryChange(seg.id === industryId ? null : seg.id)
                }
                className={`${tabBase} ${industryId === seg.id ? tabActive : tabInactive}`}
              >
                {seg.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service category tabs */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-2">
            Направление
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleServiceChange(null)}
              className={`${tabBase} ${serviceCategoryId === null ? tabActive : tabInactive}`}
            >
              Все
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  handleServiceChange(
                    cat.id === serviceCategoryId ? null : cat.id
                  )
                }
                className={`${tabBase} ${serviceCategoryId === cat.id ? tabActive : tabInactive}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
