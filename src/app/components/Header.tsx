"use client";

import { useTranslation } from "react-i18next";
import { Toggle } from "@/components/ui/toggle";

interface HeaderProps {
  onMenuClick?: () => void;
  onVersionClick?: () => void;
  onContactClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "lt" : "en";
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = i18n.language === "lt" ? "LT" : "EN";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-20 sm:h-24 md:h-28 flex items-center">
      <div className="w-full px-4 sm:px-8 md:px-12">
        <nav className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 cursor-pointer hover:opacity-60 transition-opacity tracking-wider"
          >
            {t('header.menu')}
          </button>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-wider">
            {t('header.welcome')}
          </span>
          <Toggle
            pressed={currentLanguage === "LT"}
            onPressedChange={toggleLanguage}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 hover:opacity-60 transition-opacity tracking-wider border-2 border-gray-900 rounded-md px-3 py-1"
          >
            {currentLanguage}
          </Toggle>
        </nav>
      </div>
    </header>
  );
}
