interface HorizontalNavigationProps {
  sections: string[];
  scrollX: number;
  currentSection: number;
  onSectionClick: (sectionIndex: number) => void;
}

export default function HorizontalNavigation({
  sections,
  scrollX,
  currentSection,
  onSectionClick
}: HorizontalNavigationProps) {
  const SECTION_WIDTH = 600;
  
  const getTransformX = () => {
    if (typeof window === 'undefined') return 0;
    
    const viewportWidth = window.innerWidth;
    const totalWidth = sections.length * SECTION_WIDTH;
    const maxOffset = totalWidth - viewportWidth;
    const scrollProgress = scrollX / 2000;
    const offset = scrollProgress * maxOffset;
    
    return -offset;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-black text-white overflow-hidden flex items-center">
      <div
        className="flex whitespace-nowrap transition-transform duration-500 ease-out"
        style={{ 
          transform: `translateX(${getTransformX()}px)`,
          width: `${sections.length * SECTION_WIDTH}px`
        }}
      >
        {sections.map((section, index) => {
          const sectionNumber = index + 1;
          const isActive = sectionNumber === currentSection;
          const distance = Math.abs(sectionNumber - currentSection);
          const opacity = Math.max(0.3, 1 - (distance * 0.3));
          const scale = isActive ? 1 : Math.max(0.7, 1 - (distance * 0.1));

          return (
            <button
              key={index}
              onClick={() => onSectionClick(sectionNumber)}
              className="text-5xl md:text-7xl font-black leading-none cursor-pointer hover:text-gray-300 transition-all duration-500 select-none flex-shrink-0"
              style={{
                opacity,
                transform: `scale(${scale})`,
                color: isActive ? '#ffffff' : '#9ca3af',
                width: `${SECTION_WIDTH}px`,
                textAlign: 'center'
              }}
            >
              {section}
            </button>
          );
        })}
      </div>
    </div>
  );
}