interface HeroSectionProps {
  name: string;
}

export default function HeroSection({ name }: HeroSectionProps) {
  return (
    <div className="absolute top-20 left-0 right-0 h-1/2 flex items-center justify-center">
      <h1 className="text-[8vw] md:text-[10vw] font-black text-gray-900 leading-none tracking-tighter text-center">
        {name.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block transform hover:scale-110 transition-transform duration-300"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}