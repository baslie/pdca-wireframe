import type { TrainingDetail } from "@/data/types";
import { TrainingCard } from "@/components/sections/catalog/TrainingCard";
import { EmptyState } from "@/components/ui/EmptyState";

interface TrainingGridProps {
  trainings: TrainingDetail[];
}

export function TrainingGrid({ trainings }: TrainingGridProps) {
  if (trainings.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {trainings.map((training) => (
            <TrainingCard key={training.id} training={training} />
          ))}
        </div>
      </div>
    </section>
  );
}
