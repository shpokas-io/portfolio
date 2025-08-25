'use client';

import { useRef, useEffect, useState } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      {isMobile ? (
        <div className="w-full px-4">
          <div
            ref={containerRef}
            className="overflow-x-scroll scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex gap-8 py-4" style={{ width: 'max-content', minWidth: '100%' }}>
              {sections.map((section, index) => {
                const sectionNumber = index + 1;
                const isActive = sectionNumber === currentSection;

                return (
                  <button
                    key={index}
                    onClick={() => onSectionClick(sectionNumber)}
                    className={`font-black leading-none transition-all duration-300 select-none text-2xl whitespace-nowrap px-4 py-2 ${
                      isActive 
                        ? 'text-white scale-110' 
                        : 'text-gray-400 scale-90 hover:text-gray-300'
                    }`}
                  >
                    {section}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none cursor-pointer hover:text-gray-300 transition-all duration-300 select-none"
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
      )}
    </div>
  );
}
