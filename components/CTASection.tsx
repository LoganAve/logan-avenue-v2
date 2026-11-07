import Image from "next/image";

type CTASectionProps = {
  variant?: "clay" | "white";
};

export default function CTASection({ variant = "clay" }: CTASectionProps) {
  const isWhite = variant === "white";

  return (
    <section
      className={`relative overflow-hidden ${
        isWhite ? "bg-white text-black" : "bg-clay text-white"
      }`}
    >
      <Image
        src="/images/cta-botanical.png"
        alt=""
        width={650}
        height={400}
        className="pointer-events-none absolute -right-24 -bottom-20 h-auto w-[500px] opacity-20"
      />

      <div className="relative z-10 px-11 py-20">
        <p
          className={`font-sans text-xs tracking-[0.22em] ${
            isWhite ? "text-[#8C5042]" : "text-white/70"
          }`}
        >
          HAVE A PROJECT IN MIND?
        </p>

        <h2 className="mt-5 font-serif text-6xl leading-[1.05]">
          Let&apos;s work together.
        </h2>
      </div>
    </section>
  );
}
