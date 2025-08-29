"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FuturisticBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    console.log("FuturisticBackground starting");
    const container = containerRef.current;

    // Create visible particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: #333;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      container.appendChild(particle);

      // Simple floating animation
      gsap.to(particle, {
        y: "+=50",
        x: "+=30",
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 2
      });

      // Fade in/out
      gsap.to(particle, {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 3
      });
    }

    // Create some moving lines
    for (let i = 0; i < 3; i++) {
      const line = document.createElement("div");
      line.style.cssText = `
        position: absolute;
        width: 100px;
        height: 1px;
        background: rgba(0, 0, 0, 0.3);
        top: ${20 + i * 30}%;
        left: -100px;
      `;
      container.appendChild(line);

      gsap.to(line, {
        x: window.innerWidth + 100,
        duration: 5 + Math.random() * 3,
        repeat: -1,
        ease: "none",
        delay: i * 2
      });
    }

    console.log("Animations created");

  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 1
      }}
    />
  );
}