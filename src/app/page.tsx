"use client";

import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ScrollIndicator from "./components/ScrollIndicator";
import HorizontalNavigation from "./components/HorizontalNavigation";
import I18nProvider from "./components/I18nProvider";
import FuturisticBackground from "./components/FuturisticBackground";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
const LOGO_SRC = "/shpokas_logo_black.png";

function HomeContent() {
  const { t } = useTranslation();
  const { scrollX, currentSection, setCurrentSection, navigationProgress } =
    useHorizontalScroll();

  const sections = [
    t("navigation.about"),
    t("navigation.projects"),
    t("navigation.experience"),
    t("navigation.blog"),
    t("navigation.contact"),
  ];

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
      <FuturisticBackground />
      
      <Header
        onMenuClick={handleMenuClick}
        onVersionClick={handleVersionClick}
        onContactClick={handleContactClick}
      />

      <HeroSection logoSrc={LOGO_SRC} />

      <ScrollIndicator
        currentSection={currentSection}
        navigationProgress={navigationProgress}
        sections={sections}
      />

      <HorizontalNavigation
        sections={sections}
        scrollX={scrollX}
        currentSection={currentSection}
        onSectionClick={handleSectionClick}
      />
    </div>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
