import { useEffect, useState, useCallback } from 'react';

interface UseHorizontalScrollReturn {
  scrollX: number;
  currentSection: number;
  setCurrentSection: (section: number) => void;
  navigationProgress: number;
}

const SECTIONS_COUNT = 5;
const SCROLL_SENSITIVITY = 1.5;
const MAX_SCROLL = 2000;
const SECTION_WIDTH = MAX_SCROLL / (SECTIONS_COUNT - 1);

export function useHorizontalScroll(): UseHorizontalScrollReturn {
  const [scrollX, setScrollX] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    const deltaScroll = e.deltaY * SCROLL_SENSITIVITY;
    const newScrollX = Math.max(0, Math.min(MAX_SCROLL, scrollX + deltaScroll));
    setScrollX(newScrollX);
    
    let sectionProgress;
    if (newScrollX >= MAX_SCROLL) {
      sectionProgress = SECTIONS_COUNT;
    } else {
      sectionProgress = Math.floor(newScrollX / SECTION_WIDTH) + 1;
    }
    
    setCurrentSection(Math.min(SECTIONS_COUNT, Math.max(1, sectionProgress)));
  }, [scrollX]);

  const navigationProgress = (scrollX / MAX_SCROLL) * 100;

  const handleSetCurrentSection = useCallback((section: number) => {
    const targetSection = Math.min(SECTIONS_COUNT, Math.max(1, section));
    const targetScrollX = targetSection === SECTIONS_COUNT ? MAX_SCROLL : (targetSection - 1) * SECTION_WIDTH;
    setScrollX(targetScrollX);
    setCurrentSection(targetSection);
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return {
    scrollX,
    currentSection,
    setCurrentSection: handleSetCurrentSection,
    navigationProgress
  };
}