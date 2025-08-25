interface SectionIndicatorProps {
  currentSection: number;
  totalSections: number;
}

export default function SectionIndicator({ currentSection, totalSections }: SectionIndicatorProps) {
  return (
    <div className="absolute bottom-8 right-12 text-xl font-bold text-gray-400 z-10 tracking-wider">
      <span>
        {String(currentSection).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
      </span>
    </div>
  );
}