import Image from "next/image";

type ProjectCardProps = {
  title: string;
  services: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function ProjectCard({
  title,
  services,
  description,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <div className="grid min-h-[460px] min-w-0 flex-[0_0_100%] grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center bg-white px-0 py-8 md:p-12">
        <p className="font-sans text-xs tracking-[0.2em] text-clay">
          {services}
        </p>

        <h2 className="mt-5 font-serif text-4xl text-black md:text-5xl">
          {title}
        </h2>

        <p className="mt-6 max-w-md font-sans text-base leading-6 text-black/70">
          {description}
        </p>

        <a
          href="#"
          className="mt-8 w-fit border-b border-black pb-1 font-sans text-xs tracking-[0.18em] text-black"
        >
          VIEW PROJECT
        </a>
      </div>

      <div className="relative min-h-[300px] overflow-hidden md:min-h-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
