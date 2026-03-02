export default function TrainingLoading() {
  return (
    <div className="bg-white animate-pulse">
      {/* Hero skeleton */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="h-6 w-40 bg-slate-200 rounded-sm mb-5" />
            <div className="h-10 w-full bg-slate-200 rounded-sm mb-3" />
            <div className="h-10 w-3/4 bg-slate-200 rounded-sm mb-5" />
            <div className="h-5 w-full bg-slate-100 rounded-sm mb-2" />
            <div className="h-5 w-2/3 bg-slate-100 rounded-sm mb-6" />
            <div className="flex gap-3 mb-8">
              <div className="h-8 w-24 bg-slate-100 rounded-sm" />
              <div className="h-8 w-24 bg-slate-100 rounded-sm" />
            </div>
            <div className="h-12 w-44 bg-slate-200 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Content blocks skeleton */}
      {[1, 2, 3].map((i) => (
        <section key={i} className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-64 bg-slate-200 rounded-sm mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-32 bg-slate-100 rounded-sm" />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
