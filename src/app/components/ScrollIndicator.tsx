interface ScrollIndicatorProps {
  currentSection: number;
  navigationProgress: number;
}

const SECTION_NAMES = ['About', 'Portfolio', 'Experience', 'Blog', 'Contact'];

export default function ScrollIndicator({ currentSection, navigationProgress }: ScrollIndicatorProps) {
  const sectionNumber = String(currentSection).padStart(2, '0');
  const currentSectionName = SECTION_NAMES[currentSection - 1];

  return (
    <div className="absolute top-1/2 left-0 right-0 h-1/4 flex items-center">
      <div className="w-full px-8">
        <div className="grid grid-cols-3 items-center gap-8">
          <div className="text-right">
            <span className="text-6xl font-light text-gray-400">{sectionNumber}</span>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed max-w-lg mx-auto">
              Hello. I&apos;m Mister Wolf. I solve Problems. Yes I&apos;m an IT Specialist.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-gray-900 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${navigationProgress}%` }}
                  ></div>
                  
                  {SECTION_NAMES.map((_, index) => (
                    <div
                      key={index}
                      className={`absolute top-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 -translate-y-1/2 ${
                        index + 1 <= currentSection 
                          ? 'bg-gray-900 border-gray-900' 
                          : 'bg-white border-gray-300'
                      }`}
                      style={{ left: `${(index / (SECTION_NAMES.length - 1)) * 100}%`, marginLeft: '-6px' }}
                    ></div>
                  ))}
                </div>
              </div>

              <p className="text-sm font-medium text-gray-900 tracking-wide">
                {currentSectionName}
              </p>
            </div>

            <p className="text-xs font-medium text-gray-500 tracking-widest uppercase">
              Scroll To Discover
            </p>
          </div>

          <div className="text-left">
            <span className="text-6xl font-light text-gray-400">{sectionNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}