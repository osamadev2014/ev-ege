import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { solutions } from "@/lib/site-data"
import { getWorksPublic } from "@/lib/works"
import { ArrowLeft, Check } from "lucide-react"
import { createMetadata } from "@/lib/utils"

export const revalidate = 60

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutions.find((s) => s.slug === slug)
  if (!solution) return createMetadata({ title: "الحلول", description: "", path: "/solutions" })
  return createMetadata({ title: solution.title, description: solution.tagline, path: `/solutions/${slug}` })
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutions.find((s) => s.slug === slug)
  if (!solution) notFound()

  const allWorks = await getWorksPublic()
  const related = allWorks.filter((w) => w.sector === solution.title).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              العودة للحلول
            </Link>
            <p className="mt-8 text-sm font-bold text-primary">القطاع {solution.num}</p>
            <h1 className="mt-3 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {solution.title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {solution.tagline}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <Reveal as="div">
            <p className="mb-6 text-xs tracking-[0.2em] uppercase">ماذا نقدم لهذا القطاع</p>
            <h2 className="text-3xl font-black sm:text-4xl">حزمة الخدمات</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {solution.items.map((it) => (
              <Reveal as="div" key={it}>
                <div className="flex items-center gap-4 rounded-md border border-border bg-card p-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-primary/30 text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="font-medium">{it}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
              <h2 className="mb-10 text-3xl font-black">أعمال في هذا القطاع</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((w) => (
                  <Link key={w.slug} href={`/work/${w.slug}`} className="group block">
                    <p className="text-sm text-primary">{w.client}</p>
                    <h3 className="mt-1 text-xl font-bold transition-colors group-hover:text-primary">{w.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.service}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8 lg:py-28">
          <h2 className="text-balance text-3xl font-black sm:text-4xl">هل قطاعك من ضمن اهتماماتنا؟</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">لنتحدث عن كيف يمكننا بناء حضور إبداعي يليق بك.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            تواصل معنا
            <ArrowLeft className="size-4" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
