import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  reverse?: boolean;
  background?: string;
  textColor?: string;
  children?: ReactNode;
  imagePosition?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
  background = "bg-dustyrose/8",
  textColor = "text-black",
  children,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className={background}>
      <div className="grid min-h-[600px] grid-cols-1 md:grid-cols-2">
        {/* Text */}
        <div
          className={`flex flex-col justify-center px-8 py-16 md:px-12 md:py-16 ${
            reverse ? "md:order-2" : ""
          }`}
        >
          <div className="max-w-xl">
            <p className={`font-sans text-xs tracking-[0.2em] ${textColor}`}>
              {eyebrow}
            </p>

            {title && (
              <h1
                className={`mt-6 font-serif text-5xl leading-tight md:text-6xl lg:text-7xl ${textColor}`}
              >
                {title}
              </h1>
            )}

            <p
              className={`mt-6 max-w-xl whitespace-pre-line font-sans text-base leading-7 ${textColor}`}
            >
              {description}
            </p>

            {children}
          </div>
        </div>

        {/* Image */}
        <div
          className={`relative min-h-[320px] bg-[#D9AFA0]/8 md:min-h-[600px] ${
            reverse ? "md:order-1" : ""
          }`}
          style={
            image
              ? {
                  backgroundImage: `url("${image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: imagePosition,
                }
              : undefined
          }
        >
          {!image && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-sans text-xs tracking-widest text-black/40">
                HERO IMAGE
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
