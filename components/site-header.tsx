"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowLeft } from "lucide-react"
import { HamahLogo } from "./hamah-logo"
import { navLinks } from "@/lib/site-data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground/70 transition hover:text-foreground"
            aria-label="فتح القائمة"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 transition hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70 transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <Link href="/" aria-label="Evico agency - الصفحة الرئيسية" className="shrink-0">
          <HamahLogo />
        </Link>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:inline-flex"
        >
          تواصل معنا
          <ArrowLeft className="size-3.5" />
        </Link>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-foreground/70 transition hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-foreground/70 transition hover:bg-white/5 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-3 py-3 text-center text-base font-medium text-primary-foreground"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
