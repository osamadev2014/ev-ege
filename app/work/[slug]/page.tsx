import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { works } from "@/lib/site-data"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
  if (!work) return { title: "الأعمال | Evico agency" }
  return { title: `${work.title} | Evico agency`, description: work.description }
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = works.find((w) => w.slug === slug)
  if (!work) notFound()

  const others = works.filter((w) => w.slug !== work.slug).slice(0, 3)

  const steps = [
    { num: "١", label: "التحدي", text: work.challenge },
    { num: "٢", label: "الحل", text: work.solution },
    { num: "٣", label: "النتيجة", text: work.result },
  ].filter((s) => s.text)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-28 lg:pt-32">
          <div className="relative h-[50vh] min-h-80 w-full overflow-hidden lg:h-[60vh]">
            <Image src={work.img || "/placeholder.svg"} alt={work.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          <div className="mx-auto -mt-28 max-w-7xl px-5 lg:px-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              الأعمال
            </Link>
            <p className="mt-6 text-sm font-bold text-primary">{work.client}</p>
            <h1 className="mt-2 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {work.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-border px-3 py-1">{work.service}</span>
              <span className="rounded-full border border-border px-3 py-1">{work.sector}</span>
              {work.year && <span className="rounded-full border border-border px-3 py-1">{work.year}</span>}
            </div>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {work.description}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            <div>
              <p className="text-sm text-muted-foreground">العميل</p>
              <p className="mt-1 font-bold">{work.client}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">الخدمة</p>
              <p className="mt-1 font-bold">{work.service}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">القطاع</p>
              <p className="mt-1 font-bold">{work.sector}</p>
            </div>
            {work.year && (
              <div>
                <p className="text-sm text-muted-foreground">السنة</p>
                <p className="mt-1 font-bold">{work.year}</p>
              </div>
            )}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="div" delay={i} key={step.label}>
                <div className="flex h-full flex-col rounded-3xl border border-border p-7">
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.num}
                  </span>
                  <h2 className="mt-5 text-xl font-black">{step.label}</h2>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-3xl font-black">أعمال أخرى</h2>
              <Link href="/work" className="text-sm font-bold text-primary hover:underline">
                عرض الكل
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((w) => (
                <Link key={w.slug} href={`/work/${w.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={w.img || "/placeholder.svg"}
                      alt={w.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm text-primary">{w.client}</p>
                  <h3 className="mt-1 text-xl font-bold transition-colors group-hover:text-primary">{w.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
