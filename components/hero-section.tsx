"use client"

import { motion } from "motion/react"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden" style={{ paddingTop: "5rem" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0f172a]" />
        <video
          className="absolute inset-0 size-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-mountains.webp"
          style={{ opacity: 0.65 }}
        >
          <source src="/videos/VideoBackground.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 lg:px-16">
        <motion.p
          className="text-xs tracking-[0.25em] text-white/40 uppercase mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          وكالة إبداعية · منذ ٢٠١٧
        </motion.p>

        <h1
          className="text-white mb-7"
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
            initial={{ opacity: 0, y: 105 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            ذكـاء. إبـداعـي.
          </motion.span>
        </h1>

        <motion.p
          className="text-white/45 mb-12 max-w-[44ch] leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          نقدم جيل جديد من الحلول التسويقية والتواصلية. تعتمد على أحدث تقنيات
          الذكاء الاصطناعي و GenAI.
        </motion.p>

        <motion.button
          type="button"
          className="inline-flex items-center gap-3 text-sm text-white/55 transition hover:text-white group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="relative flex size-9 items-center justify-center rounded-full border border-white/25 group-hover:border-white/60 transition-colors shrink-0">
            <span className="absolute inset-0 rounded-full border border-white/15 animate-ping-slow" />
            <Play className="size-3 translate-x-px fill-current" />
          </span>
          شاهد الشوريل
        </motion.button>
      </div>
    </section>
  )
}
