"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpLeft } from "lucide-react"
import { HamahLogo } from "./hamah-logo"
import { navLinks } from "@/lib/site-data"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-[#111827]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
        <div className="grid h-20 items-center" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-white/80 transition hover:text-white"
              aria-label="فتح القائمة"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
            <nav className="hidden items-center gap-5 lg:flex">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div className="flex justify-center">
            <Link href="/" aria-label="Evico agency - الصفحة الرئيسية">
              <HamahLogo />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3">
            <a
              href="#"
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-sm font-medium text-white/70 transition hover:border-white/70 hover:text-white"
            >
              EN
            </a>
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2563EB]/90 sm:inline-flex"
            >
              تواصل معنا
              <ArrowUpLeft className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#111827]/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#2563EB] px-3 py-3 text-center text-base font-medium text-white"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
