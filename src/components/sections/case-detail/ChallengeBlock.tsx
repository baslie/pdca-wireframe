import { AlertTriangle } from "lucide-react";

export function ChallengeBlock({ text }: { text: string }) {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <AlertTriangle
                className="w-5 h-5 text-amber-500"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-secondary">
              Задача
            </h2>
          </div>
          <p className="text-base text-black/60 leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
