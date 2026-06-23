import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { articles } from "@/lib/site-data"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: "المدونة | Evico agency" }
  return { title: `${article.title} | Evico agency`, description: article.excerpt }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const more = articles.filter((a) => a.slug !== article.slug)

  return (
    <>
      <SiteHeader />
      <main>
        <article className="pt-28 lg:pt-32">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              العودة للمدونة
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs font-bold">
              <span className="rounded-full bg-primary/10 px-3 py-1 tracking-wide text-primary">
                {article.category}
              </span>
              <span className="text-muted-foreground">{article.fullDate}</span>
            </div>
            <h1 className="mt-5 text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </div>

          <div className="mx-auto mt-10 max-w-4xl px-5 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
              <Image src={article.img || "/placeholder.svg"} alt={article.title} fill priority sizes="(max-width: 1200px) 100vw, 896px" className="object-cover" />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl px-5 pb-16 lg:px-8 lg:pb-24">
            <div className="flex flex-col gap-6 text-lg leading-loose text-foreground/90">
              {article.body.map((p, i) => (
                <p key={i} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </article>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <h2 className="mb-10 text-3xl font-black">مقالات أخرى</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {more.map((a) => (
                <Link
                  key={a.slug}
                  href={`/news/${a.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-border bg-background"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.img || "/placeholder.svg"}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold tracking-wide text-primary">{a.category}</span>
                    <h3 className="mt-2 text-balance text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                      {a.title}
                    </h3>
                  </div>
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
