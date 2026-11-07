import Image from "next/image";
import Link from "next/link";

export default function KobiFlicksPage() {
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
              <span className="text-black/50">KOBIFLICKS</span>
            </div>
          </nav>

          <h1 className="font-serif text-6xl leading-tight md:text-7xl">
            KobiFlicks
          </h1>

          <p className="mt-6 font-sans text-xs tracking-[0.15em] text-clay">
            LOGO DESIGN · BRAND IDENTITY · WEB DESIGN
          </p>

          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-black/70 md:text-lg">
            Creating a recognizable brand identity and digital experience that
            showcases a photographer&apos;s work and makes booking sessions
            simple.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="px-8 pb-24 md:px-16 md:pb-32">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/kobiFlicks-featured2.png"
              alt="KobiFlicks brand and website design"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover object-[center_85%]"
            />
          </div>
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
              A creative business ready to stand out.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              KobiFlicks, a local photography business, needed a modern,
              recognizable identity that clearly communicated its services. The
              business also needed an online presence where prospective clients
              could explore its photography and easily book sessions.
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
              A brand built around the vision.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              We began with discovery conversations and preliminary research to
              understand the client&apos;s goals and visual preferences. From
              there, we established a brand direction and translated it into a
              cohesive visual identity and functional website. Using
              client-provided photography, we created a digital experience that
              showcased the work while giving visitors a clear path to booking.
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
              From visual identity to real bookings.
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-black/70">
              KobiFlicks launched with a logo, brand guidelines, and a website
              aligned with the client&apos;s vision. The new online presence
              provided a dedicated space to showcase photography and book
              sessions. Following launch, customers began booking directly
              through the website.
            </p>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className="px-8 pb-24 md:px-16 md:pb-32">
          <p className="mb-8 font-sans text-xs tracking-[0.2em] text-clay">
            04 / THE WORK
          </p>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-3 lg:h-[700px] lg:grid-cols-[2fr_1fr]">
              {/* Featured website presentation */}
              <div className="relative h-[280px] overflow-hidden bg-white sm:h-[380px] lg:h-full">
                <Image
                  src="/images/kobiFlicks-featured.png"
                  alt="KobiFlicks website presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-contain lg:object-cover object-center"
                />
              </div>

              {/* Supporting brand images */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:h-full lg:grid-cols-1 lg:grid-rows-3">
                {[
                  {
                    src: "/images/kobiFlicks-logo.png",
                    alt: "KobiFlicks primary logo",
                  },
                  {
                    src: "/images/KobiFlicks-logo3.png",
                    alt: "KobiFlicks logo variation",
                  },
                  {
                    src: "/images/KobiFlicks-logo4.png",
                    alt: "KobiFlicks branding presentation",
                  },
                ].map((image) => (
                  <div
                    key={image.src}
                    className="relative h-[180px] overflow-hidden bg-white sm:h-[140px] lg:h-auto lg:min-h-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 30vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
