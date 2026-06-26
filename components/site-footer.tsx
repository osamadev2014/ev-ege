import Link from "next/link"
import { navLinks, siteContact } from "@/lib/site-data"

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Evico agency - الصفحة الرئيسية">
              <img src="/logos/footer-logo.svg" alt="Evico agency" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              وكالة إبداعية متكاملة — نقدم جيل جديد من الحلول التسويقية والتواصلية.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteContact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href={siteContact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteContact.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <XIcon />
              </a>
              <a
                href={siteContact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs tracking-[0.2em] uppercase text-primary">روابط</p>
            <nav className="flex flex-col gap-3">
              {navLinks
                .filter((l) => !l.external)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                تواصل معنا
              </Link>
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs tracking-[0.2em] uppercase text-primary">تواصل معنا</p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href={`mailto:${siteContact.email}`} className="hover:text-foreground transition-colors">
                {siteContact.email}
              </a>
              <a href={siteContact.phoneHref} className="hover:text-foreground transition-colors">
                {siteContact.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground">
              <div>
                <p className="text-foreground/60 font-medium mb-1">{siteContact.city}</p>
                <p className="leading-relaxed">{siteContact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground/50 text-xs text-center sm:text-start">
            جميع الحقوق محفوظة لشركة Evico agency لتقنية المعلومات 2026™
          </p>
          <Link href="/" aria-label="Evico agency - الصفحة الرئيسية">
            <img
              src="/logos/footer-logo.svg"
              alt="Evico agency"
              className="object-contain"
              style={{ width: "auto", height: "32px" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
