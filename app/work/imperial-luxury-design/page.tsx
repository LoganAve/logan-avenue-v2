import Image from "next/image";
import Link from "next/link";

export default function ImperialLuxuryDesignPage() {
  return (
    <>
      <main className="bg-[#FEFDFD] text-black">
        {/* INTRODUCTION */}
        <section className="px-8 pb-20 pt-24 md:px-16 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-10">
            <div className="flex items-center gap-3 font-sans text-xs tracking-[0.12em]">
              <Link href="/work" className="text-clay hover:underline">
                WORK
              </Link>
              <span className="text-black/30">/</span>
              <span className="text-black/50">IMPERIAL LUXURY DESIGN</span>
            </div>
          </nav>

          <h1 className="font-serif text-6xl leading-tight md:text-7xl">
            Imperial Luxury Design
          </h1>

          <p className="mt-6 font-sans text-xs tracking-[0.15em] text-clay">
            BRAND IDENTITY · LOGO DESIGN · WEB DESIGN · PRINT
          </p>

          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-black/70 md:text-lg">
            Establishing a refined visual identity and digital presence for an
            interior design business, bringing its luxury positioning to life
            across every touchpoint.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="px-8 pb-24 md:px-16 md:pb-32">
          <Image
            src="/images/imperial-luxury-website-v2.png"
            alt="Imperial Luxury Design website mockup"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full"
          />
        </section>

        {/* THE CHALLENGE */}
        <section className="grid grid-cols-1 gap-8 px-8 pb-24 md:grid-cols-12 md:gap-12 md:px-16 md:pb-32">
          <div className="md:col-span-4">
            <p className="font-sans text-xs tracking-[0.2em] text-clay">
              01 / THE CHALLENGE
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A vision of luxury without an identity.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              Imperial Luxury Design, a local interior design business, needed
              to establish its visual identity and online presence. The owner
              envisioned a brand that communicated luxury, reflected her design
              aspirations, and appealed to the clientele she wanted to serve.
            </p>
          </div>
        </section>

        {/* THE APPROACH */}
        <section className="grid grid-cols-1 gap-8 px-8 pb-24 md:grid-cols-12 md:gap-12 md:px-16 md:pb-32">
          <div className="md:col-span-4">
            <p className="font-sans text-xs tracking-[0.2em] text-clay">
              02 / THE APPROACH
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Turning vision into a cohesive experience.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              We began with an initial consultation to understand the
              owner&apos;s vision and translate it into a clear creative
              direction. From there, we developed a logo, color palette, and
              brand guidelines that established a consistent visual foundation.
            </p>

            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              Once approved, we extended the identity into business cards and a
              website designed to reflect the brand&apos;s luxury positioning.
              We selected a platform that prioritized straightforward management
              and low ongoing maintenance, then concluded the engagement with an
              in-person handoff and training session so the owner could
              confidently manage her website independently.
            </p>
          </div>
        </section>

        {/* THE OUTCOME */}
        <section className="grid grid-cols-1 gap-8 px-8 pb-24 md:grid-cols-12 md:gap-12 md:px-16 md:pb-32">
          <div className="md:col-span-4">
            <p className="font-sans text-xs tracking-[0.2em] text-clay">
              03 / THE OUTCOME
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A polished presence, built for independence.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              Imperial Luxury Design gained a cohesive, modern brand identity
              and an online presence aligned with its positioning. With
              consistent branding across its website and printed materials, the
              business is now accepting clients while maintaining control of its
              own digital presence.
            </p>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className="px-8 pb-24 md:px-16 md:pb-32">
          <p className="mb-10 font-sans text-xs tracking-[0.2em] text-clay">
            04 / THE WORK
          </p>

          <div className="mx-auto max-w-5xl space-y-8">
            {/* Brand identity board */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/images/imperial-luxury-brand-board.png"
                alt="Imperial Luxury Design brand identity presentation"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
