import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { stats } from "@/lib/site-data"

export const metadata = {
  title: "قصتنا | Evico agency",
  description: "الذكاء الإبداعي — Evico agency وكالة إبداعية تأسست في الرياض عام ٢٠١٧.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="قصتنا"
          title="الذكاء الإبداعي"
          subtitle="ذكاء حقيقي مبني على بيانات، مغلّف بإبداع يخلق أثراً — Evico agency وكالة إبداعية تأسست في الرياض عام ٢٠١٧."
        />

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal as="div">
              <p className="mb-3 text-sm font-bold text-primary">فكرتنا</p>
              <h2 className="text-3xl font-black sm:text-4xl">الذكاء الإبداعي</h2>
              <div className="mt-6 flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  في عام ٢٠١٧، انطلقت Evico agency من الرياض بيقين واحد: أن الإبداع الحقيقي لا يُقاس بعدد المنتجات — بل
                  بالأثر الذي تتركه في الذاكرة وتحقق أهدافاً حقيقية.
                </p>
                <p>
                  في عام ٢٠٢٥، نحدد موقفنا بوضوح: لسنا وكالة تستخدم الذكاء الاصطناعي كأداة إضافية. نحن نؤمن بما
                  نسميه "الذكاء الإبداعي" — حيث يجتمع الذكاء البشري والاصطناعي في منظومة واحدة لإنتاج حلول تواصلية
                  لم تكن ممكنة من قبل.
                </p>
                <p>
                  هذا يعني دورات إنتاج أقصر بكثير، وقدرة على التخصيص والتوطين بحجم غير مسبوق، واستراتيجيات مبنية
                  على بيانات حقيقية — كل ذلك دون التنازل عن الجوهر الإنساني الذي يجعل الرسائل مؤثرة.
                </p>
              </div>
            </Reveal>
            <Reveal as="div">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <Image src="/about/team.webp" alt="فريق Evico agency — الرياض" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <p className="text-sm font-bold">فريق Evico agency — الرياض</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 lg:grid-cols-4 lg:px-8">
            {stats.map((s, i) => (
              <Reveal as="div" delay={i} key={s.label} className="px-2 py-8 text-center">
                <p className="text-4xl font-black text-primary lg:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <Reveal as="div">
            <div className="rounded-3xl border border-border bg-card p-8 lg:p-12">
              <p className="mb-3 text-sm font-bold text-primary">شركاؤنا</p>
              <h2 className="text-3xl font-black sm:text-4xl">جزء من مجموعة One</h2>
              <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                Evico agency ليست وحدها — نحن جزء من مجموعة One، منظومة متكاملة من الشركات المتخصصة التي تعمل معاً لتقديم
                حلول شاملة في الإبداع والإنتاج والتقنية والأعمال.
              </p>
            </div>
          </Reveal>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
