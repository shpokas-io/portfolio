import { useEffect, useState, useCallback } from 'react';

interface UseHorizontalScrollReturn {
  scrollX: number;
  currentSection: number;
  setCurrentSection: (section: number) => void;
  navigationProgress: number;
}

const SECTIONS_COUNT = 5;
const MAX_SCROLL = 2000;
const SECTION_WIDTH = MAX_SCROLL / (SECTIONS_COUNT - 1);
const SCROLL_THRESHOLD = 30;
const TOUCH_THRESHOLD = 60;
const COOLDOWN_DURATION = 500;

export function useHorizontalScroll(): UseHorizontalScrollReturn {
  const [scrollX, setScrollX] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const [isThrottled, setIsThrottled] = useState(false);

  const moveToSection = useCallback((newSection: number) => {
    const clampedSection = Math.max(1, Math.min(SECTIONS_COUNT, newSection));
    if (clampedSection === currentSection) return;

    const targetScrollX = clampedSection === SECTIONS_COUNT ? MAX_SCROLL : (clampedSection - 1) * SECTION_WIDTH;
    setScrollX(targetScrollX);
    setCurrentSection(clampedSection);
    
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), COOLDOWN_DURATION);
  }, [currentSection]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isThrottled || Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;
    
    const direction = e.deltaY > 0 ? 1 : -1;
    moveToSection(currentSection + direction);
  }, [currentSection, isThrottled, moveToSection]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (isThrottled || e.touches.length === 0) return;
    
    const startX = e.touches[0].clientX;
    const startY = e.touches[0].clientY;
    let hasMoved = false;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (moveEvent.touches.length === 0) return;
      
      const currentX = moveEvent.touches[0].clientX;
      const currentY = moveEvent.touches[0].clientY;
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      // Only prevent default if this is a horizontal swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        moveEvent.preventDefault();
      }
      
      if (hasMoved || Math.abs(deltaX) < TOUCH_THRESHOLD) return;
      
      // Ensure it's primarily a horizontal swipe
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > TOUCH_THRESHOLD) {
        hasMoved = true;
        const direction = deltaX > 0 ? -1 : 1;
        moveToSection(currentSection + direction);
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', cleanup);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', cleanup, { passive: true });
  }, [currentSection, isThrottled, moveToSection]);

  const handleSetCurrentSection = useCallback((section: number) => {
    moveToSection(section);
  }, [moveToSection]);

  const navigationProgress = (scrollX / MAX_SCROLL) * 100;

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleWheel, handleTouchStart]);

  return {
    scrollX,
    currentSection,
    setCurrentSection: handleSetCurrentSection,
    navigationProgress
  };
}