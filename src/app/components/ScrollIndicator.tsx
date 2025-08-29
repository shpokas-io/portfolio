"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ScrollIndicatorProps {
  currentSection: number;
  navigationProgress: number;
  sections: string[];
}

export default function ScrollIndicator({
  currentSection,
  navigationProgress,
  sections,
}: ScrollIndicatorProps) {
  const { t } = useTranslation();
  const sectionNumber = String(currentSection).padStart(2, "0");
  const currentSectionName = sections[currentSection - 1];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute top-[45vh] left-0 right-0 h-[25vh] flex items-center">
      <div className="w-full px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 sm:gap-8">
          {/* Section numbers - hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block text-right">
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-400">
              {sectionNumber}
            </span>
          </div>

          <div className="text-center space-y-3 sm:space-y-4">
            {/* Mobile: Show section number at top */}
            <div className="sm:hidden text-center mb-2">
              <span className="text-2xl font-light text-gray-400">
                {sectionNumber}
              </span>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-700 leading-relaxed max-w-xs sm:max-w-lg mx-auto px-2 sm:px-0">
              {t('hero.description')}
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center">
                <div className="relative w-80 sm:w-96 md:w-[28rem]">
                  {/* Custom 5-section progress bar */}
                  <div className="flex gap-1 h-6 sm:h-8 md:h-10">
                    {sections.map((_, index) => {
                      const isActive = index + 1 <= currentSection;
                      const isCurrent = index + 1 === currentSection;
                      
                      return (
                        <div
                          key={index}
                          className={`flex-1 relative transition-all duration-500 ease-out ${
                            isActive ? 'bg-gray-900' : 'bg-gray-200'
                          } ${
                            isCurrent ? 'shadow-lg' : ''
                          }`}
                          style={{
                            transform: isCurrent ? 'scaleY(1.1)' : 'scaleY(1)',
                            borderRadius: '4px',
                          }}
                        >
                          {/* Animated fill effect for current section */}
                          {isCurrent && (
                            <div
                              className="absolute inset-0 bg-gray-800 transition-all duration-300 ease-out"
                              style={{
                                width: `${((navigationProgress - (index * 25)) / 25) * 100}%`,
                                borderRadius: '4px',
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 tracking-wider uppercase">
                {currentSectionName}
              </p>
            </div>

            <p className="text-xs font-medium text-gray-500 tracking-widest uppercase">
              {isMobile ? t('navigation.swipeToExplore') : t('navigation.scrollToDiscover')}
            </p>
          </div>

          {/* Section numbers - hidden on mobile, shown on larger screens */}
          <div className="hidden sm:block text-left">
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-400">
              {sectionNumber}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
