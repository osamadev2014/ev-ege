import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Reveal } from "./reveal"
import { getWorksPublic } from "@/lib/works"

export async function WorkSection() {
  const all = await getWorksPublic()
  const works = all.slice(0, 4)

  if (works.length === 0) return null

  return (
    <section id="work" className="border-t border-border bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-primary uppercase">أعمالنا</p>
            <h2 className="text-3xl font-black sm:text-4xl">من محفظتنا</h2>
          </div>
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-foreground/60 transition hover:text-foreground"
          >
            اكتشف كل الأعمال
            <ArrowLeft className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {works.map((w) => (
            <Reveal as="div" key={w.slug}>
              <Link href={`/work/${w.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
                  <Image
                    src={w.banner || w.images?.[0]?.url || "/placeholder.svg"}
                    alt={w.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="mt-4">
                  <p className="text-xs tracking-[0.2em] text-primary uppercase">{w.service}</p>
                  <h3 className="mt-1 text-xl font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.year}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
