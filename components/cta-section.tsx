"use client"

import { motion } from "motion/react"
import { ArrowUpLeft } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative bg-[#111827] overflow-hidden" style={{ padding: "clamp(6rem, 14vw, 12rem) 0" }}>
      <div
        className="absolute pointer-events-none"
        style={{
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-screen-xl px-6 lg:px-16">
        <motion.p
          className="text-[#2563EB] text-xs tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          لنبدأ
        </motion.p>

        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          <motion.span
            className="block text-white"
            initial={{ opacity: 0, y: 105 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            هل أنت مستعد
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 105 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="text-[#2563EB]">لصنع أثر؟</span>
          </motion.span>
        </h2>

        <motion.p
          className="text-white/40 mt-8 mb-14"
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
            maxWidth: "40ch",
            lineHeight: 1.8,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          تحدث معنا عن مشروعك. نحن هنا لنحوّل أفكارك إلى واقع.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#2563EB] text-white font-medium px-8 py-4 rounded-full hover:bg-[#2563EB]/90 transition-all hover:scale-[1.03] active:scale-[0.98] group"
          >
            تواصل معنا
            <ArrowUpLeft className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:info@hamah.sa"
            className="text-white/40 hover:text-white/70 transition-colors text-sm"
            style={{ letterSpacing: "0.02em" }}
          >
            info@hamah.sa
          </a>
        </motion.div>
      </div>
    </section>
  )
}
