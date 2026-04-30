"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ContentImage } from "@/components/shared/content-image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TaskImageCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: images.length > 1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  if (!images.length) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-muted">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className="min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/10] w-full">
                <ContentImage
                  src={src}
                  alt={`Gallery image ${index + 1} for verified business listing`}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  quality={78}
                  className="object-cover"
                  intrinsicWidth={1440}
                  intrinsicHeight={900}
                  priority={index === 0}
                />
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-zoom-in"
                  aria-label={`Open image ${index + 1} in popup`}
                  onClick={() => setActiveImage(src)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="Close popup"
            className="absolute right-4 top-4 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
            onClick={() => setActiveImage(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <ContentImage
              src={activeImage}
              alt="Expanded image preview"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}




