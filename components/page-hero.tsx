import type { ReactNode } from "react"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-[#111827] pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 0%, rgba(37,99,235,0.25), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-4 text-sm font-bold tracking-wide text-[#2563EB]">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/50">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
