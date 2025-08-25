"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ScrollIndicator from "./components/ScrollIndicator";
import HorizontalNavigation from "./components/HorizontalNavigation";
import SectionIndicator from "./components/SectionIndicator";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

const SECTIONS = ["About", "Portfolio", "Experience", "Blog", "Contact"];
const TOTAL_SECTIONS = 5;
const LOGO_SRC = "/shpokas_logo_black.png";

export default function Home() {
  const { scrollX, currentSection, setCurrentSection, navigationProgress } =
    useHorizontalScroll();

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleVersionClick = () => {
    console.log("Version clicked");
  };

  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  const handleSectionClick = (sectionIndex: number) => {
    setCurrentSection(sectionIndex);
  };

  return (
    <div className="h-screen w-screen bg-white overflow-hidden relative">
      <Header
        onMenuClick={handleMenuClick}
        onVersionClick={handleVersionClick}
        onContactClick={handleContactClick}
      />

      <HeroSection logoSrc={LOGO_SRC} />

      <ScrollIndicator
        currentSection={currentSection}
        navigationProgress={navigationProgress}
      />

      <HorizontalNavigation
        sections={SECTIONS}
        scrollX={scrollX}
        currentSection={currentSection}
        onSectionClick={handleSectionClick}
      />

      <SectionIndicator
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
      />
    </div>
  );
}
