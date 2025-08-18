"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Takade",
    url: "takade.lt",
    description: "Course platform designed and built from scratch",
    technologies: ["Next.js", "Supabase", "React", "Tailwind"],
    year: "2024",
  },
  {
    id: 2,
    title: "EcoTracker",
    url: "ecotracker.app", 
    description: "Sustainability tracking platform for environmental consciousness",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    year: "2023",
  },
];

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="min-h-screen flex items-center py-20">
      {/* Subtle geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.015]">
        <div className="absolute top-1/4 right-1/3 w-px h-64 bg-foreground"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-px bg-foreground"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-16">
        
        {/* Section header */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <span className="text-xs tracking-[0.3em] uppercase font-medium opacity-40">
              02
            </span>
            <div className="w-8 h-px bg-foreground/20"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
            Selected Work
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-b border-foreground/5 pb-16 last:border-b-0"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                
                {/* Project number and year */}
                <div className="md:col-span-2 space-y-2">
                  <div className="text-xs tracking-[0.3em] uppercase font-medium opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-light opacity-60">
                    {project.year}
                  </div>
                </div>

                {/* Project content */}
                <div className="md:col-span-7 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide group-hover:opacity-70 transition-opacity duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light tracking-wide opacity-50">
                      {project.url}
                    </p>
                  </div>
                  
                  <p className="text-base md:text-lg font-light leading-relaxed opacity-80 max-w-md">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium tracking-wide opacity-40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project visual placeholder */}
                <div className="md:col-span-3">
                  <div className="relative aspect-square bg-foreground/5 border border-foreground/10 group-hover:border-foreground/20 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium opacity-30 tracking-widest">
                        IMAGE
                      </span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-foreground/90 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="text-background">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div className="flex justify-center pt-8 border-t border-foreground/10">
          <button className="group flex items-center space-x-3 text-sm font-light tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-300">
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
