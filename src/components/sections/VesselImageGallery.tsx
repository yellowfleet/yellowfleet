"use client";

import { useState } from "react";

type Props = {
  images: string[];
  name: string;
};

export function VesselImageGallery({ images, name }: Props) {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive(active === 0 ? images.length - 1 : active - 1);
  const goNext = () => setActive(active === images.length - 1 ? 0 : active + 1);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white/5">
        <img
          key={images[active]}
          src={images[active]}
          alt={`${name} — image ${active + 1}`}
          className="h-full w-full object-cover transition-opacity duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
              aria-label="Next image"
            >
              →
            </button>
            <span className="absolute bottom-4 right-4 rounded-full bg-navy/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-20 w-32 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                active === i
                  ? "border-gold"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}