"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId === "hero" ? "hero" : targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (targetId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-foreground/5">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-lg font-medium tracking-wider hover:opacity-60 transition-opacity duration-300"
          >
            SHPOKAS
          </button>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 w-4 h-px bg-foreground"></div>
                )}
              </button>
            ))}
            
            <div className="w-px h-4 bg-foreground/20"></div>
            
            <Link href="/blog">
              <button className="text-sm font-light tracking-wide opacity-50 hover:opacity-80 transition-opacity duration-300">
                Blog
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button className="w-6 h-6 flex flex-col justify-center space-y-1 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-full h-px bg-foreground"></div>
              <div className="w-full h-px bg-foreground"></div>
              <div className="w-full h-px bg-foreground"></div>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}