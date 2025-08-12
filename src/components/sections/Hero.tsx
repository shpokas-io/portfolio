"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mobile Layout (sm and below) */}
      <div className="block lg:hidden max-w-sm mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Mobile Text */}
          <div>
            <p className="text-xl sm:text-2xl font-light opacity-80">I&apos;m</p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tighter leading-none">
              SHPOKAS
            </h1>
          </div>

          {/* Mobile Photo */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              {/* Smaller Hexagon for mobile */}
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rotate-12 hover:rotate-6 transition-transform duration-700 mx-auto"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <span className="text-gray-500 text-lg sm:text-xl font-medium -rotate-12">
                  PHOTO
                </span>
              </div>

              {/* Mobile Decorations - smaller and fewer */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-dashed border-gray-300 rounded-full animate-pulse opacity-60" />
              <div className="absolute -bottom-3 -right-4 w-6 h-6 border-2 border-dotted border-gray-300 rounded-full animate-pulse opacity-40" />
            </div>
          </div>

          {/* Mobile Description */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Web developer,
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              with an eye for esthetics
            </p>
          </div>

          {/* Mobile Socials - horizontal layout */}
          <div className="flex justify-center space-x-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
              { icon: Mail, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 w-full h-full py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Desktop Text */}
          <div className="flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light opacity-80">
              I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none">
              SHPOKAS
            </h1>
            <div className="mt-4 sm:mt-6 md:mt-8 max-w-lg">
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
                <span className="block">Web developer,</span>
                <span className="block ml-4 sm:ml-6 md:ml-8">with an eye</span>
                <span className="block ml-8 sm:ml-12 md:ml-16">
                  for esthetics
                </span>
              </p>
            </div>
          </div>

          {/* Desktop Photo + Socials */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              {/* Hexagon */}
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rotate-12 hover:rotate-6 transition-transform duration-700"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <span className="text-gray-500 text-2xl sm:text-3xl md:text-4xl font-medium -rotate-12">
                  PHOTO
                </span>
              </div>

              {/* Decorations */}
              <div className="absolute -top-8 -left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-dashed border-gray-300 rounded-full animate-pulse opacity-60" />
              <div className="absolute -bottom-6 -right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-dotted border-gray-300 rounded-full animate-pulse opacity-40" />

              {/* Socials */}
              {[
                { icon: Linkedin, pos: "top-0 left-12 sm:left-16 md:left-20" },
                { icon: Github, pos: "top-12 sm:top-16 md:top-20 right-0" },
                { icon: Mail, pos: "bottom-0 left-1/2 -translate-x-1/2" },
              ].map(({ icon: Icon, pos }, i) => (
                <a
                  key={i}
                  className={`absolute ${pos} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
