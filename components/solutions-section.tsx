import Link from "next/link"
import { ArrowLeft, MapPin, Building2, Landmark, UtensilsCrossed, Rocket, CreditCard, HeartHandshake } from "lucide-react"
import { solutions } from "@/lib/site-data"
import type { ReactNode } from "react"

const icons: Record<string, ReactNode> = {
  destination: <MapPin className="size-4" />,
  "real-estate": <Building2 className="size-4" />,
  government: <Landmark className="size-4" />,
  "F-B": <UtensilsCrossed className="size-4" />,
  tech: <Rocket className="size-4" />,
  retail: <CreditCard className="size-4" />,
  nonprofit: <HeartHandshake className="size-4" />,
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="border-t border-border bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs tracking-[0.2em] text-primary uppercase">الحلول</p>
            <h2 className="text-3xl font-black sm:text-4xl">حلول لكل قطاع</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              نصمم حزماً إبداعية متكاملة مخصصة لطبيعة كل قطاع — لأن كل صناعة لها لغتها.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-5 py-2 text-sm font-medium transition hover:bg-secondary"
          >
            تصفح الحلول
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group rounded-md border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-muted-foreground/50 font-medium">{s.num}</span>
                <span className="text-muted-foreground" aria-hidden="true">
                  {icons[s.slug] || <Rocket className="size-4" />}
                </span>
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
