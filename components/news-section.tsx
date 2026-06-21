import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { articles } from "@/lib/site-data"

export function NewsSection() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 text-sm font-bold tracking-wide text-primary">الأخبار</p>
            <h2 className="text-balance text-4xl font-black sm:text-5xl">آخر ما كتبناه</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold transition hover:text-primary"
          >
            كل المقالات
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title}>
              <Link href={`/news/${a.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    {a.category}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{a.date}</p>
                <h3 className="mt-2 text-balance text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  اقرأ المقال
                  <ArrowLeft className="size-4" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
