export function SpecializationsBlock({
  specializations,
}: {
  specializations: string[];
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-black tracking-tight">
            Специализации
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {specializations.map((spec, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-stone-100 text-sm text-black/70 font-medium rounded-sm"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
