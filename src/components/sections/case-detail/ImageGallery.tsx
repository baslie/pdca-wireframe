import { ImageIcon } from "lucide-react";

export function ImageGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-secondary mb-8">
            Фото и материалы
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((_, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200"
              >
                <ImageIcon
                  className="w-10 h-10 text-black/20"
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
