import { Search } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = "В этой категории пока нет программ",
}: EmptyStateProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
          <Search className="w-7 h-7 text-black/30" strokeWidth={1.5} />
        </div>
        <p className="text-sm text-black/50">{message}</p>
      </div>
    </section>
  );
}
