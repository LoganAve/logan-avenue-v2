"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function FeaturedWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  return (
    <section id="work" className="bg-cream">
      <div className="px-11 pt-12 pb-20">
        <div className="flex items-center gap-6">
          <p className="shrink-0 font-sans text-xs tracking-[0.22em] text-black">
            FEATURED WORK
          </p>

          <div className="h-px flex-1 bg-black/20"></div>

          <div className="flex shrink-0 items-center gap-5 font-sans text-xs tracking-[0.18em]">
            <span>{String(selectedIndex + 1).padStart(2, "0")} / 03</span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => emblaApi?.scrollPrev()}
                className="font-sans text-lg font-light outline-none focus:outline-none focus-visible:outline-none"
              >
                &lt;
              </button>

              <button
                type="button"
                aria-label="Next project"
                onClick={() => emblaApi?.scrollNext()}
                className="font-sans text-lg font-light outline-none focus:outline-none focus-visible:outline-none"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        <div ref={emblaRef} className="mt-12 overflow-hidden">
          <div className="flex">
            {/* Harvest */}
            <ProjectCard
              title="Harvest African Market"
              services="BRAND STRATEGY · WEB DESIGN · MARKETING"
              description="A refreshed brand and digital presence designed to help a local African market strengthen its identity, reach more customers, and grow online."
              image="/images/harvest-featured.png"
              imageAlt="Harvest African Market website shown on laptop and mobile"
            />
            {/* KobiFlicks */}
            <ProjectCard
              title="KobiFlicks"
              services="LOGO DESIGN · BRAND IDENTITY · WEB DESIGN"
              description="A clean, modern brand and responsive website designed to showcase a photographer's work and create a strong digital presence."
              image="/images/kobiFlicks-logo.png"
              imageAlt="KobiFlicks logo"
            />

            {/* Imperial Luxury Design */}
            <ProjectCard
              title="Imperial Luxury Design"
              services="LOGO DESIGN · BRAND IDENTITY · WEB DESIGN · PRINT"
              description="A refined visual identity and digital presence created to reflect the studio's luxury aesthetic while building a polished, elevated, and cohesive brand."
              image="/images/imperial-featured.png"
              imageAlt="Imperial Luxury Design brand identity and business card design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
