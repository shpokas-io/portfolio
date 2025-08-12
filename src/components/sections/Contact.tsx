"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Send,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    topic: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ topic: "", message: "" });
      // Here you would integrate with your email service
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative overflow-hidden flex items-center py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-80 h-80 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse animation-delay-2000"></div>

        <div className="absolute top-1/6 left-1/3 w-px h-64 opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-48 opacity-15 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-2/3 left-1/6 w-px h-32 opacity-10 animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none opacity-10 select-none">
                  TALK
                </div>
                <div className="-mt-16 ml-4 lg:ml-8">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider">
                    Let&apos;s Connect
                  </h2>
                </div>
              </div>

              <div className="w-16 h-px opacity-30 ml-4 lg:ml-8"></div>
            </div>

            <div className="space-y-8 ml-4 lg:ml-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium opacity-60 tracking-widest uppercase">
                    Social Links
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="group flex items-center space-x-4 p-4 rounded-2xl border border-current/10 transition-all duration-300 hover:border-current/30 hover:bg-background/50"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-current/20 flex items-center justify-center transition-all duration-300 group-hover:border-current/40 group-hover:scale-110">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm opacity-60">
                        Professional network
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </a>

                  <a
                    href="#"
                    className="group flex items-center space-x-4 p-4 rounded-2xl border border-current/10 transition-all duration-300 hover:border-current/30 hover:bg-background/50"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-current/20 flex items-center justify-center transition-all duration-300 group-hover:border-current/40 group-hover:scale-110">
                      <Github className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm opacity-60">
                        Code repositories
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-current/10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 opacity-60">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Quick response within 24h</span>
                  </div>
                  <div className="flex items-center space-x-3 opacity-60">
                    <Send className="w-4 h-4" />
                    <span className="text-sm">Direct to inbox</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <div className="relative">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium opacity-60 tracking-widest uppercase">
                      Get In Touch
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      Send me a message
                    </h3>
                  </div>
                  <p className="text-lg font-light opacity-80 max-w-lg">
                    Have a project in mind or just want to chat? Drop me a line
                    and I&apos;ll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="topic"
                      className="text-sm font-medium opacity-70"
                    >
                      Topic
                    </label>
                    <input
                      type="text"
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      className="w-full px-4 py-3 rounded-2xl border border-current/20 bg-background/50 backdrop-blur-sm transition-all duration-300 focus:border-current/40 focus:outline-none focus:ring-0 placeholder:opacity-50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-2xl border border-current/20 bg-background/50 backdrop-blur-sm transition-all duration-300 focus:border-current/40 focus:outline-none focus:ring-0 placeholder:opacity-50 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            <div className="absolute top-1/2 -right-20 text-8xl font-black opacity-5 transform rotate-90 select-none">
              CONTACT
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/12 w-2 h-24 opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1 h-16 opacity-15 transform -rotate-30"></div>
      </div>
    </section>
  );
}
