"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { services } from "@/lib/site-data"

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background overflow-hidden py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14">
          <p className="text-xs tracking-[0.2em] text-primary uppercase mb-3">خدماتنا</p>
          <h2 className="text-3xl font-black sm:text-4xl">ماذا نقدم</h2>
        </div>

        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              className="group relative border-t border-border cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="absolute inset-0 bg-muted pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-8 py-8 px-2">
                <span className="text-sm text-muted-foreground/50 shrink-0 mt-1 tabular-nums">
                  {s.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground text-xl font-bold leading-tight">
                    {s.title}
                  </h3>
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
                      <p className="text-muted-foreground leading-relaxed max-w-3xl">{s.desc}</p>
                      <ul className="mt-5 flex flex-col gap-2">
                        {s.items.map((it) => (
                          <li key={it} className="flex items-center gap-3 text-sm text-foreground/80">
                            <span className="size-1.5 shrink-0 rounded-sm bg-primary" />
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
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
