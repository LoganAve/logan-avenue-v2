import Image from "next/image";

export default function StrategySection() {
  return (
    <section className="bg-rose/8">
      <div className="px-11 py-12">
        <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-x-3 md:gap-x-0 md:grid-cols-[5%_40%_55%]">
          <div className="flex items-end justify-center pb-6">
            <p className="font-sans text-xs tracking-[0.22em] text-clay [writing-mode:vertical-rl] rotate-180">
              THINK · CREATE · GROW
            </p>
          </div>

          <div className="relative min-h-[460px] overflow-hidden">
            <Image
              src="/images/strategy-featured.png"
              alt="Logan Avenue brand strategy and design workspace"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          <div className="col-span-2 flex flex-col items-start justify-center px-0 py-12 text-left md:col-span-1 md:p-12">
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-black md:text-6xl md:leading-[1.05]">
              Strategy. Design.
              <br />
              Momentum.
            </h2>

            <p className="mt-6 max-w-md font-sans text-base leading-7 text-black/70">
              Thoughtful, strategic design to help small businesses show up with
              confidence and create real growth.
            </p>

            <a
              href="#"
              className="mt-8 w-fit inline-block border-b border-black pb-1 font-sans text-xs tracking-[0.18em]"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
