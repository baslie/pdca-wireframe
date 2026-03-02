export default function CaseLoading() {
  return (
    <div className="bg-white animate-pulse">
      {/* Hero skeleton */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="h-5 w-32 bg-slate-200 rounded-sm mb-4" />
            <div className="h-10 w-full bg-slate-200 rounded-sm mb-3" />
            <div className="h-10 w-2/3 bg-slate-200 rounded-sm mb-6" />
            <div className="h-5 w-full bg-slate-100 rounded-sm mb-2" />
            <div className="h-5 w-3/4 bg-slate-100 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Metrics skeleton */}
      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-12 w-24 bg-slate-200 rounded-sm mb-2" />
                <div className="h-4 w-32 bg-slate-100 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 bg-slate-200 rounded-sm mb-10" />
          <div className="space-y-4 max-w-[800px]">
            <div className="h-5 w-full bg-slate-100 rounded-sm" />
            <div className="h-5 w-full bg-slate-100 rounded-sm" />
            <div className="h-5 w-3/4 bg-slate-100 rounded-sm" />
            <div className="h-5 w-full bg-slate-100 rounded-sm" />
            <div className="h-5 w-1/2 bg-slate-100 rounded-sm" />
          </div>
        </div>
      </section>
    </div>
  );
}
