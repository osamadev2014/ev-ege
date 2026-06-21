import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { featuredWorks } from "@/lib/site-data"

export function generateStaticParams() {
  return featuredWorks.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = featuredWorks.find((w) => w.slug === slug)
  if (!work) return { title: "أبرز الأعمال | Evico agency" }
  return { title: `${work.client} | Evico agency`, description: work.description }
}

export default async function FeaturedWorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = featuredWorks.find((w) => w.slug === slug)
  if (!work) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative pt-28 lg:pt-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Link
              href="/#featured-works"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowRight className="size-4" />
              العودة إلى أبرز الأعمال
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.images.map((img, i) => (
              <Reveal as="div" delay={i} key={i}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                  <Image src={img || "/placeholder.svg"} alt={`${work.client} — ${work.type} ${i + 1}`} fill className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
            <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-8">
              <div>
                <p className="text-sm text-muted-foreground">القسم</p>
                <p className="mt-1 font-bold">{work.sector}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">اسم العميل</p>
                <p className="mt-1 font-bold">{work.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">نوع الخدمة</p>
                <p className="mt-1 font-bold">{work.type}</p>
              </div>
            </div>

            <div className="mt-12">
              <Reveal as="div">
                <h2 className="text-2xl font-black">عن المشروع</h2>
                <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{work.description}</p>
              </Reveal>
            </div>

            <div className="mt-12">
              <Reveal as="div">
                <h2 className="text-2xl font-black">المنجز ضمن المشروع</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {work.deliverables.map((item) => (
                    <span key={item} className="rounded-full border border-border px-4 py-2 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
