import { useEffect, useState, useCallback, useRef } from 'react';

interface UseHorizontalScrollReturn {
  scrollX: number;
  currentSection: number;
  setCurrentSection: (section: number) => void;
  navigationProgress: number;
}

const SECTIONS_COUNT = 5;
const MAX_SCROLL = 2000;
const SECTION_WIDTH = MAX_SCROLL / (SECTIONS_COUNT - 1);

export function useHorizontalScroll(): UseHorizontalScrollReturn {
  const [scrollX, setScrollX] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const touchStartX = useRef(0);
  const isTouching = useRef(false);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    
    // If already scrolling or too soon since last scroll, ignore additional scroll events
    if (isScrolling.current || (now - lastScrollTime.current < 600)) return;
    
    // Any scroll triggers section change, but only one section at a time
    if (Math.abs(e.deltaY) > 0) {
      // Record this scroll time and set scrolling flag
      lastScrollTime.current = now;
      isScrolling.current = true;
      
      // Determine direction - only move one section regardless of scroll strength
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.min(SECTIONS_COUNT, Math.max(1, currentSection + direction));
      
      // Only update if we're actually changing sections
      if (newSection !== currentSection) {
        // Calculate exact scroll position for the target section
        const targetScrollX = newSection === SECTIONS_COUNT ? MAX_SCROLL : (newSection - 1) * SECTION_WIDTH;
        setScrollX(targetScrollX);
        setCurrentSection(newSection);
      }
      
      // Much longer delay to prevent rapid section jumping from big scrolls
      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // 600ms delay to ensure only one section per scroll gesture
    }
  }, [currentSection]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    isTouching.current = true;
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isTouching.current || isScrolling.current) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const deltaX = Math.abs(touchStartX.current - touchCurrentX);
    
    // Light swipe triggers section change, but only one section at a time
    if (deltaX > 50) {
      // Set scrolling flag to prevent multiple section jumps during one swipe gesture
      isScrolling.current = true;
      
      const direction = touchStartX.current > touchCurrentX ? 1 : -1;
      const newSection = Math.min(SECTIONS_COUNT, Math.max(1, currentSection + direction));
      
      // Only update if we're actually changing sections
      if (newSection !== currentSection) {
        // Calculate exact scroll position for the target section
        const targetScrollX = newSection === SECTIONS_COUNT ? MAX_SCROLL : (newSection - 1) * SECTION_WIDTH;
        setScrollX(targetScrollX);
        setCurrentSection(newSection);
      }
      
      // Same long cooldown as desktop to ensure consistent behavior
      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // 600ms cooldown to ensure only one section per swipe gesture
      
      // End touch to prevent multiple triggers
      isTouching.current = false;
    }
  }, [currentSection]);

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