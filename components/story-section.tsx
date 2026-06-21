"use client"

import { motion } from "motion/react"
import { ArrowDown } from "lucide-react"
import dynamic from "next/dynamic"

const Terrain3D = dynamic(
  () => import("./terrain-3d").then((m) => m.Terrain3D),
  { ssr: false },
)

const stats = [
  { value: "١٠٠+", label: "عميل" },
  { value: "٥٠٠+", label: "مشروع" },
  { value: "٢٠١٧", label: "تأسيس" },
]

export function StorySection() {
  return (
    <section
      dir="rtl"
      className="relative flex items-center justify-center overflow-hidden bg-[#111827]"
      style={{ minHeight: "720px", padding: "clamp(5rem, 10vw, 9rem) 0" }}
    >
      <div className="absolute inset-0">
        <Terrain3D />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(37,99,235,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 text-center">
        <motion.p
          className="text-[#2563EB] mb-7 tracking-[0.35em] uppercase"
          style={{ fontSize: "0.7rem" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          قصتنا
        </motion.p>

        <h2
          className="mb-10 leading-[1.12]"
          style={{ fontWeight: 900 }}
        >
          <motion.span
            className="block text-white"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", whiteSpace: "nowrap" }}
            initial={{ opacity: 0, y: 110 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            الإنسان + الآلـة
          </motion.span>
          <motion.span
            className="block mt-1 text-[#1DA1F2]"
            style={{ fontSize: "clamp(1.1rem, 2.4vw, 2rem)" }}
            initial={{ opacity: 0, y: 110 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            جيل جديد من الحلول الإبداعية.
          </motion.span>
        </h2>

        <motion.p
          className="text-white/35 leading-relaxed mx-auto mb-10"
          style={{
            fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
            maxWidth: "42ch",
            whiteSpace: "pre-line",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {`نقدم جيل جديد من الحلول التسويقية والتواصلية.\nتعتمد على أحدث تقنيات الذكاء الاصطناعي و GenAI.`}
        </motion.p>

        <motion.div
          className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-4 min-w-[88px] text-center"
              style={{ borderRadius: "14px" }}
            >
              <div
                className="text-white leading-none mb-1"
                style={{ fontWeight: 900, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/35" style={{ fontSize: "0.68rem", letterSpacing: "0.18em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="/company-profile.pdf"
          download
          className="inline-flex items-center gap-3 bg-[#2563EB] text-white px-8 py-3.5 hover:bg-white hover:text-[#111827] transition-all duration-300 group"
          style={{ borderRadius: "9999px", fontSize: "0.85rem", letterSpacing: "0.08em" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>تحميل الملف التعريفي</span>
          <ArrowDown className="size-4" />
        </motion.a>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #111827, transparent)" }}
      />
    </section>
  )
}
