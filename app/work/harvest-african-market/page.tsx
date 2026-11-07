import Image from "next/image";
import Link from "next/link";

export default function HarvestCaseStudy() {
  return (
    <main className="bg-rose/8">
      <section className="px-8 py-20 md:px-16 md:py-28">
        <nav aria-label="Breadcrumb" className="mb-10">
          <div className="flex items-center gap-3 font-sans text-xs tracking-[0.12em]">
            <Link href="/work" className="text-clay hover:underline">
              WORK
            </Link>

            <span className="text-black/30">/</span>

            <span className="text-black/50">HARVEST AFRICAN MARKET</span>
          </div>
        </nav>

        <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
          Harvest African Market
        </h1>

        <p className="mt-6 font-sans text-sm tracking-[0.15em] text-black/50">
          BRAND STRATEGY · WEB DESIGN · MARKETING
        </p>

        <p className="mt-10 max-w-2xl font-sans text-base leading-8 text-black/70">
          Building a digital presence for a family-owned African market,
          connecting the business with its community and creating new
          opportunities for growth.
        </p>
      </section>

      <section className="px-8 pb-20 md:px-16 md:pb-28">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/harvest-featured.png"
            alt="Harvest African Market website displayed on desktop and mobile"
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-8 py-20 md:px-16 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20">
          <p className="font-sans text-xs tracking-[0.2em] text-clay">
            01 / THE CHALLENGE
          </p>

          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A local business ready to be discovered.
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-black/70">
              Harvest African Market was a family-owned grocery store serving
              its local community, but it lacked an online presence. Without a
              website or established digital visibility, potential customers had
              limited ways to discover the store, explore its offerings, or
              connect with the business.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 md:px-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20">
          <p className="font-sans text-xs tracking-[0.2em] text-clay">
            02 / THE APPROACH
          </p>

          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Strategy before design.
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-black/70">
              We began by understanding the client's goals, identifying what
              success would look like, and researching how similar local
              businesses were reaching their customers.
            </p>

            <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-black/70">
              These insights informed a practical digital strategy focused on
              discoverability, accessibility, and growth. Once the
              recommendations were approved, we developed a website, established
              a Google Business Profile, created an in-store brochure, and
              provided social media guidance to strengthen the business's
              presence.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 md:px-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-20">
          <p className="font-sans text-xs tracking-[0.2em] text-clay">
            03 / THE OUTCOME
          </p>

          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              From local presence to digital opportunity.
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-black/70">
              Harvest African Market gained a cohesive digital presence that
              made it easier for customers to discover the business, explore its
              offerings, and connect with the store.
            </p>

            <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-black/70">
              The website also connected customers to DoorDash ordering,
              creating an additional way to shop. Together with the Google
              Business Profile and printed marketing materials, these solutions
              established a foundation for greater visibility and future growth.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="px-8 pb-24 md:px-16 md:pb-32">
        <p className="mb-10 font-sans text-xs tracking-[0.2em] text-clay">
          04 / THE WORK
        </p>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Website */}
          <div className="relative aspect-[4/5] overflow-hidden bg-white">
            <Image
              src="/images/harvest-featured-v2.png"
              alt="Harvest African Market website mockup"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
            />
          </div>

          {/* Logo */}
          <div className="relative aspect-[4/5] overflow-hidden bg-white">
            <Image
              src="/images/harvest-logo.png"
              alt="Harvest African Market logo"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
            />
          </div>

          {/* Brochure */}
          <div className="relative aspect-[4/5] overflow-hidden bg-white">
            <Image
              src="/images/harvest-brochure.png"
              alt="Harvest African Market brochure"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
