"use client"

import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-background" />
        <video
          className="absolute inset-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-mountains.webp"
          style={{ opacity: 0.3 }}
        >
          <source src="/videos/VideoBackground.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8" style={{ paddingTop: "5rem" }}>
        <motion.p
          className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          وكالة إبداعية · منذ ٢٠١٧
        </motion.p>

        <h1
          className="text-foreground mb-8"
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 9rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            maxWidth: "14ch",
          }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            ذكـاء. إبـداعـي.
          </motion.span>
        </h1>

        <motion.p
          className="text-base text-muted-foreground max-w-[44ch] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          نقدم جيل جديد من الحلول التسويقية والتواصلية. تعتمد على أحدث تقنيات
          الذكاء الاصطناعي و GenAI.
        </motion.p>
      </div>
    </section>
  )
}
