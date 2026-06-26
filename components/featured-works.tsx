import Image from "next/image"
import Link from "next/link"
import { getFeaturedWorks } from "@/lib/works"

export async function FeaturedWorks() {
  const featured = await getFeaturedWorks()

  if (featured.length === 0) return null

  return (
    <section id="featured-works" className="border-t border-border bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12">
          <p className="mb-6 text-xs tracking-[0.2em] text-primary uppercase">أبرز الأعمال</p>
          <h2 className="text-3xl font-black sm:text-4xl">مشاريعنا المميزة</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            مجموعة من أبرز المشاريع التي تعكس خبرتنا وإبداعنا في مختلف المجالات.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((w) => (
            <Link
              key={w.slug}
              href={`/work/${w.slug}?from=featured`}
              className="group overflow-hidden rounded-md border border-border bg-card block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={w.banner || w.images?.[0]?.url || "/placeholder.svg"}
                  alt={w.client}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.2em] text-primary uppercase mb-1">{w.service}</p>
                <h3 className="text-xl font-bold">{w.client}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
