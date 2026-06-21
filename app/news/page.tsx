import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { articles } from "@/lib/site-data"

export const metadata = {
  title: "المدونة | Evico agency",
  description: "أفكار ورؤى من فريق Evico agency حول الإبداع والتسويق وبناء العلامات التجارية.",
}

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="الأخبار"
          title="المدونة"
          subtitle="أفكار ورؤى من فريق Evico agency حول الإبداع والتسويق وبناء العلامات التجارية."
        />

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((a, i) => (
              <Reveal as="div" delay={i} key={a.slug}>
                <Link href={`/news/${a.slug}`} className="group block overflow-hidden rounded-3xl border border-border">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.img || "/placeholder.svg"}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <span className="rounded-full bg-primary/10 px-3 py-1 tracking-wide text-primary">
                        {a.category}
                      </span>
                      <span className="text-muted-foreground">{a.date}</span>
                    </div>
                    <h2 className="mt-4 text-balance text-xl font-bold leading-snug transition-colors group-hover:text-primary lg:text-2xl">
                      {a.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-pretty leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    <span className="mt-5 inline-block text-sm font-bold text-primary">اقرأ المقال</span>
                  </div>
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
