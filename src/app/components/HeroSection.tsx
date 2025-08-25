import Image from "next/image";

interface HeroSectionProps {
  logoSrc?: string;
  name?: string;
}

export default function HeroSection({ logoSrc, name }: HeroSectionProps) {
  return (
    <div className="absolute top-12 sm:top-16 left-0 right-0 h-[40vh] sm:h-[50vh] flex items-center justify-center px-4">
      {logoSrc ? (
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <Image
            src={logoSrc}
            alt="Shpokas Logo"
            width={2400}
            height={1000}
            className="object-contain max-w-[95vw] sm:max-w-[120vw] max-h-[35vh] sm:max-h-[70vh] w-auto h-auto"
            priority
          />
        </div>
      ) : (
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] font-black text-gray-900 leading-none tracking-tighter text-center">
          {name?.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block transform hover:scale-110 transition-transform duration-300"
            >
              {char}
            </span>
          ))}
        </h1>
      )}
    </div>
  );
}
