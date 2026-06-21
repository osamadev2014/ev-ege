import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { solutions } from "@/lib/site-data"
import { MapPin, Building2, Landmark, UtensilsCrossed, Rocket, CreditCard, HeartHandshake, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "حلولنا | Evico agency",
  description: "حلول لكل قطاع — نصمم حزماً إبداعية متكاملة مخصصة لطبيعة كل قطاع.",
}

const icons = [MapPin, Building2, Landmark, UtensilsCrossed, Rocket, CreditCard, HeartHandshake]

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="الحلول"
          title="حلول لكل قطاع"
          subtitle="نصمم حزماً إبداعية متكاملة مخصصة لطبيعة كل قطاع — لأن كل صناعة لها لغتها وتحدياتها الفريدة."
        />

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Reveal as="div" delay={i % 3} key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </span>
                      <span className="text-sm font-bold text-muted-foreground">{s.num}</span>
                    </div>
                    <h2 className="mt-6 text-2xl font-black transition-colors group-hover:text-primary">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.items.slice(0, 3).map((it) => (
                        <li key={it} className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80">
                          {it}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      اعرف المزيد
                      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
