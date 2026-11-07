const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, audience, and goals.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Build a clear, tailored direction.",
  },
  {
    number: "03",
    title: "Design & Build",
    description: "Bring your brand and digital presence to life.",
  },
  {
    number: "04",
    title: "Support",
    description: "Provide guidance as your business grows.",
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-[#8C5042] px-8 py-20 text-white md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <p className="font-sans text-xs tracking-[0.2em]">OUR APPROACH</p>

        <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
          Strategy first. Designing with purpose.
        </h2>

        <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-white/90">
          Every business has its own story, challenges, and goals. We take the
          time to understand yours before creating thoughtful, practical
          solutions that support your growth.
        </p>

        {/* Four-step process */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`md:px-8 ${
                index === 0 ? "md:pl-0" : "md:border-l md:border-white/30"
              }`}
            >
              <span className="font-sans text-xs tracking-[0.2em] text-white/70">
                {step.number}
              </span>

              <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>

              <p className="mt-3 font-sans text-sm leading-6 text-white/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
