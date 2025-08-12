import { Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <div className="space-y-12">
          
          <div className="space-y-8">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-current/20 flex items-center justify-center animate-pulse">
              <Construction className="w-10 h-10 opacity-60" />
            </div>
            
            <div className="space-y-6">
              <div className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none opacity-10 select-none">
                BLOG
              </div>
              <div className="-mt-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
                  Under Construction
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              I'm currently working on something amazing for this space.
            </p>
            <p className="text-lg font-light opacity-70">
              This blog will feature insights about web development, design trends, and my journey as a creative developer. Stay tuned!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 flex items-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2 opacity-60">
              <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-current animate-pulse animation-delay-500"></div>
              <div className="w-2 h-2 rounded-full bg-current animate-pulse animation-delay-1000"></div>
            </div>
          </div>

        </div>

        <div className="absolute top-1/4 right-1/6 w-2 h-24 opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/12 w-1 h-16 opacity-15 transform -rotate-30"></div>

      </div>

    </div>
  );
}