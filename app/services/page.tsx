import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/site-data"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createMetadata } from "@/lib/utils"

export const metadata = createMetadata({
  title: "خدماتنا",
  description: "ماذا نقدم — الاستراتيجية، الإبداع، الإنتاج السينمائي، الإنتاج بالذكاء الاصطناعي، التحويل والأداء.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="خدماتنا"
          title="ماذا نقدم"
          subtitle="نؤمن أن الإبداع الحقيقي يبدأ بفهم عميق — لعلامتك التجارية، جمهورك، وما تريد أن تقوله للعالم."
        />

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-px">
            {services.map((s) => (
              <Reveal as="div" key={s.num}>
                <div className="group grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-[auto_1fr_1.5fr] md:items-start md:gap-10">
                  <span className="text-lg font-bold text-primary md:px-2">{s.num}</span>
                  <h2 className="text-3xl font-black transition-colors group-hover:text-primary">
                    {s.title}
                  </h2>
                  <div>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{s.desc}</p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className="size-1.5 shrink-0 rounded-sm bg-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="mt-16">
            <div className="flex flex-col items-start justify-between gap-6 rounded-md border border-border bg-card p-8 sm:flex-row sm:items-center lg:p-12">
              <div>
                <h3 className="text-2xl font-black sm:text-3xl">جاهز لنبدأ مشروعك؟</h3>
                <p className="mt-2 text-muted-foreground">أخبرنا عن فكرتك وسنحوّلها إلى أثر حقيقي.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                تواصل معنا
                <ArrowLeft className="size-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
