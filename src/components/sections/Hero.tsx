"use client";

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative w-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-1/4 lg:right-8 lg:left-auto lg:translate-x-0 lg:-translate-y-1/2 xl:right-4 xl:top-1/5 z-20">
              <div className="relative group">
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] transform rotate-12 hover:rotate-6 transition-all duration-700 ease-out">
                  <div
                    className="w-full h-full relative overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 flex items-center justify-center transform -rotate-12">
                      <span className="text-gray-500 text-2xl md:text-3xl font-medium">
                        PHOTO
                      </span>
                    </div>
                  </div>

                  <div className="absolute -top-12 -left-12 w-20 h-20 border-2 border-dashed rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute -bottom-8 -right-12 w-16 h-16 border-2 border-dotted rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
                  <div className="absolute top-1/4 -left-16 w-10 h-10 rounded-full border-2 opacity-30 animate-bounce animation-delay-500"></div>
                </div>

                <div className="absolute inset-0 w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]">
                  <a
                    href="#"
                    className="absolute top-0 left-1/4 transform -translate-x-1/2 group/social"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-125">
                      <Linkedin className="w-6 h-6" />
                    </div>
                  </a>

                  <a
                    href="#"
                    className="absolute top-1/4 right-0 transform translate-x-1/2 group/social"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-125">
                      <Github className="w-6 h-6" />
                    </div>
                  </a>

                  <a
                    href="#"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 group/social"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 bg-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-125">
                      <Mail className="w-6 h-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-30 pt-16 lg:pt-0 lg:-mt-20">
              <div className="mb-12 lg:mb-16">
                <div className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider opacity-80 mb-2 ml-4 lg:ml-8">
                  I&apos;m
                </div>

                <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-none">
                  SHPOKAS
                </h1>
              </div>

              <div className="lg:max-w-md xl:max-w-lg ml-4 lg:ml-8">
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
                  <span className="block">Web developer,</span>
                  <span className="block mt-2 ml-8">with an eye</span>
                  <span className="block mt-2 ml-16">for esthetics</span>
                </p>
              </div>
            </div>

            <div className="absolute top-1/4 right-1/4 w-2 h-24 opacity-20 transform rotate-45"></div>
            <div className="absolute bottom-1/3 left-1/6 w-1 h-16 opacity-15 transform -rotate-12"></div>

            <div className="absolute top-1/3 left-0 w-32 h-px opacity-30"></div>
            <div className="absolute bottom-1/3 right-0 w-24 h-px opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <button
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 group pointer-events-auto"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:bg-background">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
          <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
        </div>
      </button>
    </section>
  );
}
