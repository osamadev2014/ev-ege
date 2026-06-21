"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpLeft, ArrowDownLeft } from "lucide-react"
import { services } from "@/lib/site-data"

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[#111827] overflow-hidden" style={{ padding: "clamp(5rem, 10vw, 9rem) 0" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="flex items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#2563EB] text-xs tracking-[0.25em] uppercase mb-3">خدماتنا</p>
            <h2
              className="text-white"
              style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
            >
              ماذا نقدم
            </h2>
          </motion.div>
        </div>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="group relative border-t border-white/10 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="absolute inset-0 bg-white/[0.04] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-8 py-8 px-2">
                <span
                  className="text-white/20 shrink-0 mt-1 tabular-nums"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
                >
                  {s.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-0">
                    <h3
                      className="text-white leading-tight"
                      style={{ fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 mt-1 text-white/20 group-hover:text-[#2563EB] transition-colors duration-300">
                  {openIndex === i ? (
                    <ArrowDownLeft className="size-5" />
                  ) : (
                    <ArrowUpLeft className="size-5" />
                  )}
                </div>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 px-2">
                      <p className="text-white/60 leading-relaxed max-w-3xl">{s.desc}</p>
                      <ul className="mt-5 flex flex-col gap-2">
                        {s.items.map((it) => (
                          <li key={it} className="flex items-center gap-3 text-sm text-white/80">
                            <span className="size-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
