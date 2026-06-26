import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { siteContact } from "@/lib/site-data"
import { Mail, Phone, MapPin } from "lucide-react"
import { createMetadata } from "@/lib/utils"

export const metadata = createMetadata({
  title: "تواصل معنا",
  description: "تحدث معنا عن مشروعك. نحن هنا لنحوّل أفكارك إلى واقع.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="تواصل معنا"
          title="هل أنت مستعد لصنع أثر؟"
          subtitle="تحدث معنا عن مشروعك. نحن هنا لنحوّل أفكارك إلى واقع."
        />

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
            <ContactForm />

            <aside className="flex flex-col gap-8 lg:min-w-72">
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wide text-primary">معلومات الاتصال</h3>
                <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="flex items-center gap-3 transition hover:text-foreground"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border">
                      <Mail className="size-4" />
                    </span>
                    {siteContact.email}
                  </a>
                  <a
                    href={siteContact.phoneHref}
                    dir="ltr"
                    className="flex items-center gap-3 transition hover:text-foreground"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border">
                      <Phone className="size-4" />
                    </span>
                    {siteContact.phone}
                  </a>
                  <p className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border">
                      <MapPin className="size-4" />
                    </span>
                    <span className="pt-2 leading-relaxed">{siteContact.address}</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
