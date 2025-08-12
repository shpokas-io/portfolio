"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-current/10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl md:text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity duration-300"
          >
            SHPOKAS
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 hover:opacity-100 ${
                  activeSection === item.href.substring(1)
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-current"></div>
                )}
              </button>
            ))}
            
            <div className="w-px h-6 bg-current opacity-20"></div>
            
            <Link href="/blog">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-current/20 hover:border-current/40 transition-all duration-300 hover:scale-105"
              >
                Blog
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full"
            >
              Menu
            </Button>
          </div>

        </div>
      </div>
    </nav>
  )
}