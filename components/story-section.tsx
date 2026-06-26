"use client"

import { motion } from "motion/react"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
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
      className="relative flex items-center justify-center overflow-hidden bg-background py-24 lg:py-28"
      style={{ minHeight: "720px" }}
    >
      <div className="absolute inset-0">
        <Terrain3D />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <p className="text-xs tracking-[0.2em] text-primary uppercase mb-6">
          قصتنا
        </p>

        <div className="mb-8">
          <h2
            className="text-foreground"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.12 }}
          >
            الإنسان + الآلـة
          </h2>
          <p className="text-primary mt-2 text-lg sm:text-xl" style={{ fontWeight: 700 }}>
            جيل جديد من الحلول الإبداعية.
          </p>
        </div>

        <motion.p
          className="text-muted-foreground leading-relaxed mx-auto mb-10"
          style={{
            fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
            maxWidth: "42ch",
            whiteSpace: "pre-line",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {`نقدم جيل جديد من الحلول التسويقية والتواصلية.\nتعتمد على أحدث تقنيات الذكاء الاصطناعي و GenAI.`}
        </motion.p>

        <motion.div
          className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-border bg-card px-5 py-4 min-w-[88px] text-center rounded-md"
            >
              <div className="text-foreground leading-none mb-1 text-xl sm:text-2xl font-black">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/company-profile.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium transition hover:bg-primary/90"
          >
            <span>تحميل الملف التعريفي</span>
            <ArrowDown className="size-4" />
          </Link>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #111827, transparent)" }}
      />
    </section>
  )
}
