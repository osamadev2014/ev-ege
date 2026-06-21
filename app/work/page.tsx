import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { WorkGallery } from "@/components/work-gallery"

export const metadata = {
  title: "أعمالنا | Evico agency",
  description: "محفظة الأعمال — مشاريع تجمع بين الاستراتيجية والإبداع لعلامات تجارية تؤمن بقيمة التأثير.",
}

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="أعمالنا"
          title="محفظة الأعمال"
          subtitle="مشاريع تجمع بين الاستراتيجية والإبداع — لعلامات تجارية تؤمن بقيمة التأثير."
        />
        <WorkGallery />
      </main>
      <SiteFooter />
    </>
  )
}
