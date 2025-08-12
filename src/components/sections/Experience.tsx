"use client";

import { useState } from "react";
import { Calendar, MapPin, Code, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Reiz Tech",
    position: "Front-end Developer",
    duration: "April 2025 - Present",
    type: "Current",
    technologies: ["React", "Tailwind", "SCSS", "TypeScript"],
    description: "Developing modern web applications with focus on user experience and performance optimization.",
    color: "from-blue-500/20 to-purple-500/20",
    status: "current"
  },
  {
    id: 2,
    company: "NanoBitas",
    position: "Fullstack Intern",
    duration: "4 Months",
    type: "Internship",
    technologies: ["React", "Tailwind", "SCSS", "NestJS"],
    description: "Built full-stack applications handling both frontend user interfaces and backend API development.",
    color: "from-green-500/20 to-teal-500/20",
    status: "completed"
  }
];

export function Experience() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="experience" className="min-h-screen relative overflow-hidden flex items-center py-20">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/6 w-80 h-80 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse animation-delay-3000"></div>
        
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-px h-96 opacity-10"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-current/20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-current/20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-4 gap-16">
          
          <div className="lg:col-span-1 space-y-8">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-medium opacity-60 tracking-widest uppercase">
                  Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  Professional
                  <br />
                  <span className="font-black">Path</span>
                </h2>
              </div>
              
              <div className="w-16 h-px opacity-30"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 opacity-60">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm">Experience</span>
              </div>
              <div className="flex items-center space-x-3 opacity-60">
                <Code className="w-4 h-4" />
                <span className="text-sm">Technologies</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-3 relative">
            
            <div className="relative">
              
              <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px opacity-20"></div>
              
              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    
                    <div className="flex items-start gap-8 md:gap-16">
                      
                      <div className="relative flex-shrink-0">
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-current/20 flex items-center justify-center transition-all duration-500 ${
                          hoveredId === exp.id ? 'scale-110 border-current/40' : ''
                        } ${exp.status === 'current' ? 'animate-pulse' : ''}`}>
                          <div className="text-2xl md:text-3xl font-black opacity-60">
                            {index + 1}
                          </div>
                        </div>
                        
                        {exp.status === 'current' && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500/20 border-2 border-green-500/40 animate-ping"></div>
                        )}
                      </div>

                      <div className="flex-1 space-y-6">
                        
                        <div className="space-y-4">
                          
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                                {exp.company}
                              </h3>
                              <div className="text-lg font-light opacity-70 mt-1">
                                {exp.position}
                              </div>
                            </div>
                            
                            <div className="flex flex-col md:items-end gap-2">
                              <div className="flex items-center space-x-2 opacity-60">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{exp.duration}</span>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                exp.status === 'current' 
                                  ? 'border-green-500/30 bg-green-500/10 text-green-600' 
                                  : 'border-current/20 opacity-70'
                              }`}>
                                {exp.type}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 text-sm font-medium rounded-full border border-current/20 bg-background/50 backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div 
                            className={`transition-all duration-500 overflow-hidden ${
                              hoveredId === exp.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="pt-4 border-t border-current/10">
                              <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                                {exp.description}
                              </p>
                            </div>
                          </div>

                        </div>

                        <div className={`w-full h-px transition-all duration-700 ${
                          hoveredId === exp.id ? 'opacity-40' : 'opacity-20'
                        }`}></div>

                      </div>

                    </div>

                  </div>
                ))}
              </div>

            </div>

            <div className="absolute top-1/2 -right-16 text-8xl font-black opacity-5 transform -rotate-90 select-none">
              EXPERIENCE
            </div>

          </div>

        </div>

        <div className="absolute top-1/4 right-1/6 w-2 h-20 opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/12 w-1 h-16 opacity-15 transform -rotate-30"></div>

      </div>

    </section>
  );
}