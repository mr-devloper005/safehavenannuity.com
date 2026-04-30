"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContentImage } from "@/components/shared/content-image";

export function TaskPhotoGridLightbox({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  if (!images.length) return null;

  return (
    <>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, 6).map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className="relative h-32 overflow-hidden rounded-xl border border-slate-200"
            onClick={() => setActiveImage(image)}
            aria-label={`Open photo ${index + 1}`}
          >
            <ContentImage src={image} alt={`${title} photo ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

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
          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <ContentImage
              src={activeImage}
              alt={`${title} expanded photo`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

