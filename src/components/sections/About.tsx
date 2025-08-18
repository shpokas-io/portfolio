"use client";

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/3 left-1/5 w-px h-40 bg-foreground"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-foreground"></div>
        <div className="absolute top-2/3 left-2/3 w-8 h-8 border border-foreground rotate-45"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
        {/* Left column - Section label */}
        <div className="md:col-span-3 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-xs tracking-[0.3em] uppercase font-medium opacity-40">
                01
              </span>
              <div className="w-8 h-px bg-foreground/20"></div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
              About
            </h2>
          </div>

          {/* Skills list */}
          <div className="space-y-3 text-sm font-medium">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              <span className="opacity-60">Frontend Development</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              <span className="opacity-60">UI/UX Design</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              <span className="opacity-60">Creative Direction</span>
            </div>
          </div>
        </div>

        {/* Right column - Content */}
        <div className="md:col-span-9 space-y-12">
          {/* Main text */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
              <p>
                I&apos;m a creative web developer who believes that great design
                isn&apos;t just about
                <em className="italic font-normal"> how it looks</em>, but how
                it works.
              </p>

              <p className="ml-8 opacity-80">
                Every project is an opportunity to craft something that not only
                functions flawlessly but also creates memorable experiences.
              </p>
            </div>

            <div className="border-l-2 border-foreground/10 pl-6 ml-4 space-y-4">
              <p className="text-base md:text-lg font-light leading-relaxed opacity-70">
                With a background in design and development, I bridge the gap
                between beautiful interfaces and robust functionality. I enjoy
                the entire process—from initial concept to final deployment.
              </p>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-3 gap-8 border-t border-foreground/10 pt-8">
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-light">3+</div>
              <div className="text-xs tracking-wider uppercase opacity-50">
                Years Experience
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-light">20+</div>
              <div className="text-xs tracking-wider uppercase opacity-50">
                Projects
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-light">∞</div>
              <div className="text-xs tracking-wider uppercase opacity-50">
                Ideas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
