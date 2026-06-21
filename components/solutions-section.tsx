import Link from "next/link"
import { ArrowLeft, MapPin, Building2, Landmark, UtensilsCrossed, Rocket, CreditCard, HeartHandshake, Package } from "lucide-react"
import { solutions } from "@/lib/site-data"
import type { ReactNode } from "react"

const icons: Record<string, ReactNode> = {
  destination: <MapPin className="size-6" />,
  "real-estate": <Building2 className="size-6" />,
  government: <Landmark className="size-6" />,
  "F-B": <UtensilsCrossed className="size-6" />,
  tech: <Rocket className="size-6" />,
  retail: <CreditCard className="size-6" />,
  nonprofit: <HeartHandshake className="size-6" />,
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="border-t border-white/10 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-bold tracking-wide text-primary">الحلول</p>
            <h2 className="text-balance text-4xl font-black sm:text-5xl">حلول لكل قطاع</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              نصمم حزماً إبداعية متكاملة مخصصة لطبيعة كل قطاع — لأن كل صناعة لها لغتها.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold transition hover:bg-secondary"
          >
            تصفح الحلول
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold text-muted-foreground">{s.num}</span>
                <span className="text-primary" aria-hidden="true">
                  {icons[s.slug] || <Package className="size-6" />}
                </span>
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
