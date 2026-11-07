import PageHero from "@/components/PageHero";
import ApproachSection from "@/components/ApproachSection";

export default function AboutPage() {
  return (
    <main className="bg-[#FEFDFD]">
      <PageHero
        eyebrow="ABOUT"
        title="Creative strategy for real businesses."
        description="Logan Avenue Creative is a design and strategy studio helping small businesses and startups build a polished, professional presence that inspires trust and supports growth."
        image="/images/logan-ave-office.png"
      />

      {/* FOUNDER SECTION — NEXT */}
      <PageHero
        eyebrow="MEET THE FOUNDER"
        title=""
        description={`With over 8 years of combined experience in graphic design, UX/UI, software development, and digital marketing, I bring both creative vision and technical expertise to every project.

I'm a graphic designer by trade, with a background in software engineering and user experience design. This combination allows me to approach branding and digital experiences from both sides—creating work that's visually compelling, thoughtfully designed, and built to function.

My passion is helping small businesses and startups establish a polished, professional presence that inspires credibility and trust. I believe great design should do more than look beautiful—it should help businesses grow, connect with their audience, and confidently stand behind what they've built.`}
        image="/images/founder-headshot.png"
        imagePosition="center 25%"
        reverse
        background="bg-[#FEFDFD]"
      >
        <div className="mt-8">
          <p className="font-serif text-4xl italic text-[#8C5042]">Mary</p>
          <p className="mt-2 font-sans text-xs tracking-[0.12em] text-black">
            FOUNDER, LOGAN AVENUE CREATIVE
          </p>
        </div>
      </PageHero>
      {/* OUR APPROACH — NEXT */}
      <ApproachSection />
    </main>
  );
}
