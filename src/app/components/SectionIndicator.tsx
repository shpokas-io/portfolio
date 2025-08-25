interface SectionIndicatorProps {
  currentSection: number;
  totalSections: number;
}

export default function SectionIndicator({ currentSection, totalSections }: SectionIndicatorProps) {
  return (
    <div className="absolute bottom-6 right-8 text-sm text-gray-400 z-10">
      <span>
        {String(currentSection).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
      </span>
    </div>
  );
}