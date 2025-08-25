'use client';

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
  currentSection: number;
  navigationProgress: number;
}

const SECTION_NAMES = ["About", "Portfolio", "Experience", "Blog", "Contact"];

export default function ScrollIndicator({
  currentSection,
  navigationProgress,
}: ScrollIndicatorProps) {
  const sectionNumber = String(currentSection).padStart(2, "0");
  const currentSectionName = SECTION_NAMES[currentSection - 1];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
              Hello. I&apos;m web developer. I solve small Sass business
              problems with elegant design and thoughtful code.
            </p>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center">
                <div className="relative w-56 sm:w-64 md:w-72">
                  <Progress
                    value={navigationProgress}
                    className="h-3 sm:h-4 bg-gray-200 [&>div]:bg-gray-900 shadow-sm"
                  />

                  {SECTION_NAMES.map((_, index) => (
                    <div
                      key={index}
                      className={`absolute top-1/2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-2 transition-all duration-300 -translate-y-1/2 shadow-sm ${
                        index + 1 <= currentSection
                          ? "bg-gray-900 border-gray-900 scale-110"
                          : "bg-white border-gray-300 hover:border-gray-400"
                      }`}
                      style={{
                        left: `${(index / (SECTION_NAMES.length - 1)) * 100}%`,
                        marginLeft: isMobile ? "-5px" : "-7px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 tracking-wider uppercase">
                {currentSectionName}
              </p>
            </div>

            <p className="text-xs font-medium text-gray-500 tracking-widest uppercase">
              {isMobile ? 'Swipe To Explore' : 'Scroll To Discover'}
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
