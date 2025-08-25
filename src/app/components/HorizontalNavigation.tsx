interface HorizontalNavigationProps {
  sections: string[];
  scrollX: number;
  currentSection: number;
  onSectionClick: (sectionIndex: number) => void;
}

export default function HorizontalNavigation({
  sections,
  currentSection,
  onSectionClick,
}: HorizontalNavigationProps) {
  const SECTION_WIDTH = 800;

  const getTransformX = () => {
    if (typeof window === "undefined") return 0;

    const viewportWidth = window.innerWidth;
    const centerOffset = viewportWidth / 2 - SECTION_WIDTH / 2;
    const activeIndex = currentSection - 1;
    const targetOffset = activeIndex * SECTION_WIDTH;

    return centerOffset - targetOffset;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-black text-white overflow-hidden flex items-center">
      <div
        className="flex whitespace-nowrap transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(${getTransformX()}px)`,
        }}
      >
        {sections.map((section, index) => {
          const sectionNumber = index + 1;
          const isActive = sectionNumber === currentSection;
          const distance = Math.abs(sectionNumber - currentSection);
          const opacity = Math.max(0.3, 1 - distance * 0.3);
          const scale = isActive ? 1 : Math.max(0.7, 1 - distance * 0.1);

          return (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: `${SECTION_WIDTH}px` }}
            >
              <button
                onClick={() => onSectionClick(sectionNumber)}
                className="text-5xl md:text-7xl font-black leading-none cursor-pointer hover:text-gray-300 transition-all duration-500 select-none"
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  color: isActive ? "#ffffff" : "#6b7280",
                }}
              >
                {section}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
