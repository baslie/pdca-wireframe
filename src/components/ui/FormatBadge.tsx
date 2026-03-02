import { MapPin, Monitor, Sparkles } from "lucide-react";
import type { TrainingFormat } from "@/data/types";
import { FORMAT_LABELS } from "@/data/trainings";

interface FormatBadgeProps {
  format: TrainingFormat;
}

const DOT_COLORS: Record<TrainingFormat, string> = {
  offline: "bg-secondary",
  online: "bg-green-500",
  hybrid: "bg-amber-500",
};

const ICONS: Record<TrainingFormat, typeof MapPin> = {
  offline: MapPin,
  online: Monitor,
  hybrid: Sparkles,
};

export function FormatBadge({ format }: FormatBadgeProps) {
  const Icon = ICONS[format];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-xs font-medium text-black/70 rounded-sm">
      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[format]}`} />
      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
      {FORMAT_LABELS[format]}
    </span>
  );
}
