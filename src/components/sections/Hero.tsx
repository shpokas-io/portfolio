"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-foreground/5 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-24 bg-foreground/5 -rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-1 bg-foreground/5"></div>
      </div>

      {/* Main content - unified layout */}
      <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
        
        {/* Typography section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm tracking-[0.2em] uppercase font-medium opacity-60">
              Portfolio 2025
            </p>
            <div className="w-8 h-px bg-foreground mx-auto opacity-30"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9]">
            SHPOKAS
          </h1>
          
          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
              Creative web developer crafting
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed ml-8">
              digital experiences
            </p>
          </div>
        </div>

        {/* Minimalist photo placeholder */}
        <div className="relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-foreground/10 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 border border-foreground/20 rounded-full flex items-center justify-center">
              <span className="text-xs md:text-sm font-medium opacity-40 tracking-widest">PHOTO</span>
            </div>
          </div>
          
          {/* Minimal decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 border border-foreground/20 rotate-45"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-foreground/10 rounded-full"></div>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-12">
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Mail, href: "#", label: "Email" },
          ].map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              className="group flex flex-col items-center space-y-3 hover:opacity-60 transition-opacity duration-300"
            >
              <div className="w-10 h-10 border border-foreground/20 rounded-full flex items-center justify-center group-hover:border-foreground/40 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs tracking-wider uppercase font-medium opacity-40">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-foreground animate-pulse"></div>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
