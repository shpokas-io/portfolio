import { useEffect, useState, useCallback, useRef } from 'react';

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
  const touchStartX = useRef(0);
  const isTouching = useRef(false);

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

  const handleTouchStart = useCallback((e: TouchEvent) => {
    isTouching.current = true;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isTouching.current) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const deltaX = touchStartX.current - touchCurrentX;
    const deltaScroll = deltaX * SCROLL_SENSITIVITY * 2; // More sensitive for touch
    
    const newScrollX = Math.max(0, Math.min(MAX_SCROLL, scrollX + deltaScroll));
    setScrollX(newScrollX);
    
    let sectionProgress;
    if (newScrollX >= MAX_SCROLL) {
      sectionProgress = SECTIONS_COUNT;
    } else {
      sectionProgress = Math.floor(newScrollX / SECTION_WIDTH) + 1;
    }
    
    setCurrentSection(Math.min(SECTIONS_COUNT, Math.max(1, sectionProgress)));
    
    touchStartX.current = touchCurrentX;
  }, [scrollX]);

  const handleTouchEnd = useCallback(() => {
    isTouching.current = false;
  }, []);

  const navigationProgress = (scrollX / MAX_SCROLL) * 100;

  const handleSetCurrentSection = useCallback((section: number) => {
    const targetSection = Math.min(SECTIONS_COUNT, Math.max(1, section));
    const targetScrollX = targetSection === SECTIONS_COUNT ? MAX_SCROLL : (targetSection - 1) * SECTION_WIDTH;
    setScrollX(targetScrollX);
    setCurrentSection(targetSection);
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    scrollX,
    currentSection,
    setCurrentSection: handleSetCurrentSection,
    navigationProgress
  };
}