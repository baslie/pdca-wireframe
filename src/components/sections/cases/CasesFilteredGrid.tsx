"use client";

import { useState } from "react";
import type {
  DetailedCaseStudy,
  Client,
  CaseIndustrySegment,
  ServiceCategory,
} from "@/data/types";
import { CaseFilters } from "./CaseFilters";
import { CaseGrid } from "./CaseGrid";

interface CasesFilteredGridProps {
  caseStudies: DetailedCaseStudy[];
  clients: Client[];
  industrySegments: CaseIndustrySegment[];
  serviceCategories: ServiceCategory[];
}

export function CasesFilteredGrid({
  caseStudies,
  clients,
  industrySegments,
  serviceCategories,
}: CasesFilteredGridProps) {
  const [filters, setFilters] = useState<{
    industryId: string | null;
    serviceCategoryId: string | null;
  }>({ industryId: null, serviceCategoryId: null });

  const filtered = caseStudies.filter((cs) => {
    if (filters.industryId && cs.industryId !== filters.industryId) return false;
    if (
      filters.serviceCategoryId &&
      cs.serviceCategoryId !== filters.serviceCategoryId
    )
      return false;
    return true;
  });

  return (
    <>
      <CaseFilters
        industrySegments={industrySegments}
        serviceCategories={serviceCategories}
        onFilterChange={setFilters}
      />
      <CaseGrid
        cases={filtered}
        clients={clients}
        industrySegments={industrySegments}
      />
    </>
  );
}
