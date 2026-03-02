import { Search } from "lucide-react";
import type {
  DetailedCaseStudy,
  Client,
  CaseIndustrySegment,
} from "@/data/types";
import { CaseCard } from "./CaseCard";

interface CaseGridProps {
  cases: DetailedCaseStudy[];
  clients: Client[];
  industrySegments: CaseIndustrySegment[];
}

export function CaseGrid({ cases, clients, industrySegments }: CaseGridProps) {
  if (cases.length === 0) {
    return (
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
          <Search
            className="w-12 h-12 mx-auto mb-4 text-black/20"
            strokeWidth={1.5}
          />
          <p className="text-lg font-semibold text-black/50">
            Кейсов по выбранным фильтрам не найдено
          </p>
          <p className="text-sm text-black/30 mt-1">
            Попробуйте изменить параметры фильтрации
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cases.map((cs) => {
            const client = clients.find((c) => c.id === cs.clientId);
            const industry = industrySegments.find(
              (s) => s.id === cs.industryId
            );
            return (
              <CaseCard
                key={cs.id}
                caseStudy={cs}
                clientName={client?.name ?? ""}
                industryName={industry?.name ?? ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
