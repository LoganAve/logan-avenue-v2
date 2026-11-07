import Image from "next/image";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-rose/8">
      <section className="px-8 py-20 md:px-16 md:py-28">
        <p className="font-sans text-xs tracking-[0.2em] text-clay">WORK</p>

        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
          Work with purpose.
          <br />
          Designed for impact.
        </h1>

        <p className="mt-8 max-w-xl font-sans text-base leading-7 text-black/70">
          A collection of thoughtful branding, websites, and creative solutions
          built to help businesses show up with confidence.
        </p>
      </section>

      <section className="px-8 pb-24 pt-8 md:px-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {/* Harvest African Market */}
          <article>
            <div className="relative aspect-[8/5] overflow-hidden">
              <Image
                src="/images/harvest-featured.png"
                alt="Harvest African Market"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <h2 className="mt-5 font-serif text-3xl">Harvest African Market</h2>

            <p className="mt-2 font-sans text-xs tracking-[0.15em] text-black/50">
              BRAND STRATEGY · WEB DESIGN · MARKETING
            </p>
            <a
              href="/work/harvest-african-market"
              className="mt-5 inline-flex items-center gap-3 border-b border-clay pb-1 font-sans text-xs tracking-[0.15em] text-clay transition-opacity hover:opacity-60"
            >
              VIEW CASE STUDY
            </a>
          </article>

          {/* KobiFlicks */}
          <article>
            <div className="relative aspect-[8/5] overflow-hidden">
              <Image
                src="/images/kobiFlicks-logo.png"
                alt="KobiFlicks branding"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-10"
              />
            </div>

            <h2 className="mt-5 font-serif text-3xl">KobiFlicks</h2>

            <p className="mt-2 font-sans text-xs tracking-[0.15em] text-black/50">
              LOGO DESIGN · BRAND IDENTITY · WEB DESIGN
            </p>
            <a
              href="/work/kobiflicks"
              className="mt-5 inline-flex items-center gap-3 border-b border-clay pb-1 font-sans text-xs tracking-[0.15em] text-clay transition-opacity hover:opacity-60"
            >
              VIEW CASE STUDY
            </a>
          </article>

          {/* Imperial Luxury Design */}
          <article>
            <div className="relative aspect-[8/5] overflow-hidden">
              <Image
                src="/images/imperial-featured.png"
                alt="Imperial Luxury Design branding"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <h2 className="mt-5 font-serif text-3xl">Imperial Luxury Design</h2>

            <p className="mt-2 font-sans text-xs tracking-[0.15em] text-black/50">
              LOGO DESIGN · BRAND IDENTITY · WEB DESIGN · PRINT
            </p>
            <a
              href="/work/imperial-luxury-design"
              className="mt-5 inline-flex items-center gap-3 border-b border-clay pb-1 font-sans text-xs tracking-[0.15em] text-clay transition-opacity hover:opacity-60"
            >
              VIEW CASE STUDY
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
