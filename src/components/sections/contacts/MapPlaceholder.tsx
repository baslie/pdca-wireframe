import { MapPin } from "lucide-react";

export function MapPlaceholder({ address }: { address: string }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="h-[240px] bg-slate-100 rounded-sm flex flex-col items-center justify-center gap-3">
          <MapPin
            className="w-8 h-8 text-black/20"
            strokeWidth={1.5}
          />
          <p className="text-sm text-black/40 text-center px-4">
            {address}
          </p>
        </div>
      </div>
    </section>
  );
}
