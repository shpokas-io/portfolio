"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-pink-500/5 to-yellow-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none opacity-10 select-none"
                animate={{ rotateY: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ABOUT
              </motion.div>
              <div className="-mt-16 ml-4 lg:ml-8">
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Creative Developer
                </motion.h2>
              </div>
            </div>

            <motion.div
              className="w-16 h-px bg-current opacity-30 ml-4 lg:ml-8"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="block">
                    I&apos;m a creative web developer
                  </span>
                  <span className="block ml-8 lg:ml-12">
                    with an eye for esthetics.
                  </span>
                </motion.p>

                <motion.div
                  className="ml-8 lg:ml-12 space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                    I create websites and web UI&apos;s that don&apos;t just
                    function—they captivate.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-current opacity-20" />
                <div className="pl-8 space-y-4">
                  <p className="text-lg md:text-xl font-light leading-relaxed">
                    <span className="block">With a design background,</span>
                    <span className="block ml-6">I make websites</span>
                    <span className="block ml-12 font-medium">pop.</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="ml-16 lg:ml-24 space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                  What I really enjoy is building web systems from
                  scratch—watching ideas transform into interactive experiences.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center space-x-12 opacity-40"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`${
                    i % 2 === 0
                      ? "w-8 h-8 rounded-full border-2"
                      : "w-12 h-px bg-current"
                  }`}
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                    scale: i % 2 === 0 ? [1, 1.1, 1] : [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
