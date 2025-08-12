"use client";

import { useState, useEffect } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Takade",
    url: "takade.lt",
    description:
      "A course platform website where I designed and built it from scratch",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "Supabase", "React", "Tailwind"],
    fullDescription:
      "Complete learning management system with user authentication, course management, and payment integration. Built with modern web technologies for optimal performance.",
    year: "2024",
  },
  {
    id: 2,
    title: "EcoTracker",
    url: "ecotracker.app",
    description:
      "Sustainability tracking platform for environmental consciousness",
    image: "/api/placeholder/400/300",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    fullDescription:
      "Comprehensive environmental impact tracking application with data visualization, goal setting, and community features. Full-stack solution built from concept to deployment.",
    year: "2023",
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const currentProject = projects[currentIndex];

  return (
    <section
      id="portfolio"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 opacity-5 transform -skew-x-6"></div>

        <div className="absolute top-1/4 right-1/4 w-px h-96 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-80 opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/6 w-px h-60 opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-medium opacity-60 tracking-widest uppercase">
                  Portfolio
                </div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  Selected
                  <br />
                  <span className="font-black">Work</span>
                </h2>
              </div>

              <div className="w-16 h-px opacity-30"></div>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`group text-left w-full transition-all duration-300 ${
                    index === currentIndex
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between py-4 border-b border-current/10">
                    <div>
                      <div className="text-sm opacity-60">{project.year}</div>
                      <div className="font-medium">{project.title}</div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        index === currentIndex
                          ? "translate-x-2"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 relative">
            <div
              className="relative transition-all duration-700"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3 space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-end gap-4">
                      <div className="text-7xl md:text-8xl lg:text-9xl font-black leading-none opacity-20 select-none">
                        0{currentIndex + 1}
                      </div>
                      <div className="pb-4">
                        <div className="text-lg opacity-60 mb-2">
                          {currentProject.url}
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                          {currentProject.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 ml-20 lg:ml-24">
                      {currentProject.description}
                    </p>

                    <div
                      className={`ml-20 lg:ml-24 transition-all duration-500 overflow-hidden ${
                        isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-current/10">
                        <p className="text-lg font-light opacity-80">
                          {currentProject.fullDescription}
                        </p>
                      </div>
                    </div>

                    <div className="ml-20 lg:ml-24 flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-current/20 opacity-70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 relative">
                  <div className="sticky top-20">
                    <div className="group cursor-pointer relative transform transition-all duration-500 hover:scale-105 hover:-rotate-2">
                      <div className="absolute -inset-4 opacity-20 rounded-2xl transform rotate-3"></div>

                      <div className="relative overflow-hidden rounded-2xl border-2 border-current/10">
                        <div className="w-full aspect-[4/5] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-lg font-medium">
                            {currentProject.title}
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <div className="text-white text-sm font-medium">
                                View Project
                              </div>
                              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <ExternalLink className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-6 -right-6 w-4 h-4 rounded-full border-2 border-current/30 animate-ping"></div>
                      <div className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full border border-current/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-20 text-9xl font-black opacity-5 transform rotate-90 select-none">
              WORK
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8">
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-1 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-current opacity-100"
                    : "bg-current opacity-20 hover:opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
