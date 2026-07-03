import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import award from "@/assets/gallery/award.jpeg";
import event1 from "@/assets/gallery/event1.jpeg";
import groundbreaking from "@/assets/gallery/groundbreaking.jpeg";
import felicitation from "@/assets/gallery/felicitation.jpeg";

const photos = [
  {
    src: felicitation,
    title: "Felicitation Ceremony",
    caption: "Mr. Arif A. S. Sayed being honoured by dignitaries and community leaders.",
    span: "md:col-span-2 md:row-span-2",
    fit: "object-contain bg-secondary/40" as const,
  },
  {
    src: event1,
    title: "Industry Leaders Meet",
    caption: "With respected leaders at a real-estate industry gathering.",
    span: "",
  },
  {
    src: groundbreaking,
    title: "Groundbreaking Ceremony",
    caption: "Bhoomi Pujan of a new project site with the community.",
    span: "",
  },
  {
    src: award,
    title: "Safety Recognition",
    caption: "Recognising our on-site safety champions on the field.",
    span: "md:col-span-2",
  },
];

export const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % photos.length));
  const prev = () =>
    setActive((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center animate-slide-up">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <Camera className="h-4 w-4" /> Moments & Milestones
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Glimpses from events, felicitations, groundbreaking ceremonies and moments
            that define our journey.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-500 hover:shadow-elegant ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className={`h-full w-full transition-transform duration-700 group-hover:scale-110 ${(photo as any).fit ?? "object-cover"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                <h3 className="text-lg font-bold drop-shadow">{photo.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/85">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[active].src}
              alt={photos[active].title}
              className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{photos[active].title}</h3>
              <p className="mt-1 text-white/80">{photos[active].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};