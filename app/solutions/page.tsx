import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { solutions } from "@/lib/site-data"
import { ArrowLeft } from "lucide-react"
import { createMetadata } from "@/lib/utils"

export const metadata = createMetadata({
  title: "حلولنا",
  description: "حلول لكل قطاع — نصمم حزماً إبداعية متكاملة مخصصة لطبيعة كل قطاع.",
  path: "/solutions",
})

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

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Reveal as="div" key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-md border border-border bg-card p-7 transition-colors hover:border-primary/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-muted-foreground">{s.num}</span>
                  </div>
                  <h2 className="mt-6 text-xl font-bold transition-colors group-hover:text-primary">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{s.tagline}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.items.slice(0, 3).map((it) => (
                      <li key={it} className="rounded-md bg-secondary px-3 py-1 text-xs text-foreground/80">
                        {it}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    اعرف المزيد
                    <ArrowLeft className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
