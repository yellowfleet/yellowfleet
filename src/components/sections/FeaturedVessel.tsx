"use client";

import { useState, useEffect, useCallback } from "react";
import { Vessel } from "@/types/vessel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function FeaturedVessel({ vessels }: { vessels: Vessel[] }) {
  const [activeVessel, setActiveVessel] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);

  const vessel = vessels[activeVessel];
  const images = vessel.images?.length ? vessel.images : [vessel.image_url];

  const goTo = useCallback(
    (i: number, dir: number) => {
      setDirection(dir);
      setActiveVessel(i);
      setActiveImage(0);
    },
    []
  );

  const goNext = useCallback(() => {
    goTo(activeVessel === vessels.length - 1 ? 0 : activeVessel + 1, 1);
  }, [activeVessel, vessels.length, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeVessel === 0 ? vessels.length - 1 : activeVessel - 1, -1);
  }, [activeVessel, vessels.length, goTo]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      className="relative overflow-hidden bg-navy px-6 py-24 text-white"
      
    >
      <div className="fixed inset-0 z-0">
    <img
      src="/images/ocean-bg.png"
      alt=""
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-navy/90" />
  </div>
       
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Our Fleet</SectionLabel>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
              Electric vessels, built for India
            </h2>
          </div>
          <Button href="/fleet" variant="outline-light" className="self-start sm:self-auto">
            View full fleet
          </Button>
        </div>

       {/* Vessel tabs */}
<div className="mt-10 flex gap-2 overflow-x-auto pb-1">
  {vessels.map((v, i) => (
    <button
      key={v.id}
      onClick={() => goTo(i, i > activeVessel ? 1 : -1)}
      className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
        activeVessel === i
          ? "bg-gold text-navy"
          : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
      }`}
    >
      {v.name}
    </button>
  ))}
</div>
        {/* Card */}
<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={vessel.id}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className="mt-6 relative"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >
    {/* Center-section prev arrow */}
    <button
  onClick={goPrev}
  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
  aria-label="Previous vessel"
>
  ←
</button>

<button
  onClick={goNext}
  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-navy/60 text-white backdrop-blur-sm transition-colors hover:bg-gold hover:text-navy"
  aria-label="Next vessel"
>
  →
</button>

    <div className="grid gap-8 overflow-hidden rounded-2xl bg-white/5 p-6 sm:p-8 lg:grid-cols-2">

      {/* Image gallery */}
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/10">
          <img
            key={images[activeImage]}
            src={images[activeImage]}
            alt={`${vessel.name} — image ${activeImage + 1}`}
            className="h-full w-full object-cover opacity-90 transition-opacity duration-500"
          />
          {images.length > 1 && (
            <span className="absolute bottom-3 right-3 rounded-full bg-navy/60 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm">
              {activeImage + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  activeImage === i
                    ? "border-gold"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`${vessel.name} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold">
          Electric Catamaran
        </span>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
          {vessel.name}
        </h3>
        <p className="mt-4 text-white/70">{vessel.description}</p>

        <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-white/50">Capacity</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-gold">
              {vessel.capacity}
              <span className="text-sm font-normal text-white/60"> pax</span>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-white/50">Range</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-gold">
              {vessel.range_km > 0 ? vessel.range_km : "TBC"}
              {vessel.range_km > 0 && <span className="text-sm font-normal text-white/60"> km</span>}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-white/50">Top speed</dt>
            <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-gold">
              {vessel.speed_knots > 0 ? vessel.speed_knots : "TBC"}
              {vessel.speed_knots > 0 && <span className="text-sm font-normal text-white/60"> kn</span>}
            </dd>
          </div>
        </dl>

        {/* Dots */}
        <div className="mt-8 flex items-center gap-2">
          {vessels.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > activeVessel ? 1 : -1)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeVessel === i ? "w-6 bg-gold" : "w-1.5 bg-white/30"
              }`}
              aria-label={`Go to vessel ${i + 1}`}
            />
          ))}
        </div>

        <p className="mt-4 text-xs text-white/30">
          {paused ? "Paused" : "Auto-scrolling — hover to pause"}
        </p>
      </div>
    </div>
  </motion.div>
</AnimatePresence>
      </div>
    </section>
  );
}