"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowLeft, X } from "lucide-react"
import type { Showcase } from "@/lib/showcase-types"
import { ShowcaseRenderer } from "./showcase-renderer"

export function ShowcaseTrigger({ showcase }: { showcase: Showcase }) {
  const [open, setOpen] = useState(false)
  const blocksExist = showcase.blocks.length > 0

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!blocksExist) return null

  return (
    <>
      <div className="mt-16">
        <p className="mb-2 text-sm text-muted-foreground">ملف العرض</p>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 text-sm text-foreground/60 transition hover:text-foreground border-b border-transparent hover:border-foreground/30 pb-0.5"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          عرض تفصيلي للمشروع
          <ArrowLeft className="size-3.5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex bg-background"
            role="dialog"
            aria-modal="true"
            aria-label="ملف العرض"
          >
            <button
              onClick={() => setOpen(false)}
              className="fixed left-6 top-6 z-10 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              aria-label="إغلاق"
            >
              <X size={16} />
              إغلاق
            </button>

            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-4xl px-8 py-16 lg:px-16 lg:py-20">
                <ShowcaseRenderer blocks={showcase.blocks} />

                {(showcase.settings.categories.length > 0 ||
                  showcase.settings.tags.length > 0 ||
                  showcase.settings.toolsUsed) && (
                  <div className="mt-20 pt-10 border-t border-border" dir="rtl">
                    {showcase.settings.categories.length > 0 && (
                      <div className="mb-6">
                        <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">المجالات الإبداعية</h3>
                        <div className="flex flex-wrap gap-2">
                          {showcase.settings.categories.map((c) => (
                            <span key={c} className="text-sm text-foreground/70">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {showcase.settings.tags.length > 0 && (
                      <div className="mb-6">
                        <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">الوسوم</h3>
                        <div className="flex flex-wrap gap-2">
                          {showcase.settings.tags.map((t) => (
                            <span key={t} className="text-sm text-primary">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {showcase.settings.toolsUsed && (
                      <div>
                        <h3 className="mb-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">الأدوات المستخدمة</h3>
                        <p className="text-sm text-muted-foreground">{showcase.settings.toolsUsed}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
