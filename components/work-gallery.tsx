"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

export type WorkBrief = {
  slug: string
  client: string
  title: string
  service: string
  sector: string
  year: string
  img: string
  banner: string
  images: { url: string }[]
}

const serviceFilters = ["الكل", "الإبداع", "الإنتاج السينمائي", "التحويل و الأداء"]
const sectorFilters = [
  "الكل",
  "القطاع الحكومي",
  "التقنية والتجارة الإلكترونية",
  "الأغذية والمشروبات",
  "الوجهات والأماكن",
  "القطاع غير الربحي",
]

export function WorkGallery({ works }: { works: WorkBrief[] }) {
  const [service, setService] = useState("الكل")
  const [sector, setSector] = useState("الكل")

  const filtered = useMemo(
    () =>
      works.filter(
        (w) => (service === "الكل" || w.service === service) && (sector === "الكل" || w.sector === sector),
      ),
    [service, sector, works],
  )

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
      <div className="flex flex-col gap-6 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase ml-2">الخدمة</span>
          {serviceFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setService(f)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                service === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase ml-2">القطاع</span>
          {sectorFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setSector(f)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                sector === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">{filtered.length} مشروع</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w) => (
          <Reveal as="div" key={w.slug}>
            <Link href={`/work/${w.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
                <Image
                  src={w.banner || w.images?.[0]?.url || w.img || "/placeholder.svg"}
                  alt={w.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute right-4 top-4">
                  <span className="rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium">
                    {w.service}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs tracking-[0.2em] text-primary uppercase">{w.client}</p>
                <h3 className="mt-1 text-xl font-bold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {w.sector} · {w.year}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
