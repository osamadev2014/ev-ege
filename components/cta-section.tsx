"use client"

import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="relative bg-background border-t border-border py-28 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.p
          className="mb-8 text-xs tracking-[0.2em] uppercase"
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
          <span className="block text-foreground">
            هل أنت مستعد
          </span>
          <span className="block text-primary">
            لصنع أثر؟
          </span>
        </h2>

        <motion.p
          className="text-muted-foreground mt-8 mb-14"
          style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
            maxWidth: "40ch",
            lineHeight: 1.8,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          تحدث معنا عن مشروعك. نحن هنا لنحوّل أفكارك إلى واقع.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            تواصل معنا
            <ArrowLeft className="size-4" />
          </Link>
          <a
            href="mailto:info@hamah.sa"
            className="text-sm text-foreground/60 hover:text-foreground"
          >
            info@hamah.sa
          </a>
        </motion.div>
      </div>
    </section>
  )
}
