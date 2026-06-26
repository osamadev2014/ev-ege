import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { articles } from "@/lib/site-data"

export function NewsSection() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-6 text-xs tracking-[0.2em] uppercase">الأخبار</p>
            <h2 className="text-3xl font-black sm:text-4xl">آخر ما كتبناه</h2>
          </div>
          <Link
            href="/news"
            className="text-sm text-foreground/60 hover:text-foreground"
          >
            كل المقالات
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title}>
              <Link href={`/news/${a.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-border">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute right-4 top-4 rounded-md bg-background/80 px-3 py-1 text-xs font-bold">
                    {a.category}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{a.date}</p>
                <h3 className="mt-2 text-balance text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <span className="mt-3 text-sm font-medium text-primary">
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
