export default function Hero() {
  return (
    <section className="min-h-[600px] bg-clay">
      <div className="grid min-h-[600px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col px-12 pt-12 pb-16 md:py-12">
          <div className="my-auto">
            <p className="font-sans text-xs tracking-[0.2em] text-cream">
              STRATEGIC DESIGN / FOR GROWING BUSINESSES
            </p>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl font-medium leading-[1.05] text-cream md:text-7xl md:leading-[0.95]">
              Polished presence.
              <br />
              Lasting credibility.
            </h1>
            <p className="mt-6 max-w-md font-sans text-base leading-7 text-cream">
              Branding, websites, and creative support for businesses ready to
              look as established as they are becoming.
            </p>
            <a
              href="#work"
              className="mt-6 inline-block w-fit border-b border-cream pb-2 font-sans text-xs tracking-[0.18em] text-cream"
            >
              VIEW SELECTED WORK
            </a>
          </div>

          <p className="mt-10 font-sans text-xs tracking-[0.2em] text-cream md:mt-0">
            GOOD BRANDS / CREATE OPPORTUNITIES
          </p>
        </div>
        <div
          className="relative min-h-[320px] bg-cover bg-center md:min-h-0"
          style={{ backgroundImage: "url('/images/logan-avenue-hero.png')" }}
        ></div>
      </div>
    </section>
  );
}
