export function BioBlock({ fullBio }: { fullBio: string }) {
  const paragraphs = fullBio.split("\n\n");

  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] space-y-4">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm text-black/60 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
