"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["INITIALIZING", "LOADING", "READY"];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 1000);
    const timer2 = setTimeout(() => setCurrentStep(2), 2000);
    const timer3 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background animated gradient - consistent website colors */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, hsl(185 100% 60%) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, hsl(185 100% 60%) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, hsl(185 100% 60%) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, hsl(185 100% 60%) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative flex flex-col items-center space-y-8">
          {/* Main logo animation */}
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
          >
            {/* Outer ring - electric cyan */}
            <motion.div
              className="w-24 h-24 border-4 rounded-full"
              style={{ borderColor: "hsl(185 100% 60%)" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Middle ring - electric cyan */}
            <motion.div
              className="absolute top-2 left-2 w-20 h-20 border-2 rounded-full"
              style={{ borderColor: "hsl(185 100% 60%)", opacity: 0.7 }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Inner ring - electric cyan */}
            <motion.div
              className="absolute top-4 left-4 w-16 h-16 border-2 rounded-full"
              style={{ borderColor: "hsl(185 100% 60%)", opacity: 0.5 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center dot - electric cyan */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: "hsl(185 100% 60%)" }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />

            {/* Floating particles - electric cyan */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "hsl(185 100% 60%)",
                  top: `${20 + Math.sin(i * Math.PI / 3) * 40}px`,
                  left: `${20 + Math.cos(i * Math.PI / 3) * 40}px`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Loading text with typewriter effect */}
          <motion.div className="text-center">
            <motion.h1
              className="text-2xl font-black tracking-wider mb-2"
              style={{ color: "hsl(185 100% 60%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              SHPOKAS
            </motion.h1>
            
            <motion.div
              className="text-sm tracking-widest text-muted-foreground"
              key={currentStep}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {steps[currentStep]}
            </motion.div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "hsl(185 100% 60%)" }}
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Loading dots */}
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "hsl(185 100% 60%)" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}