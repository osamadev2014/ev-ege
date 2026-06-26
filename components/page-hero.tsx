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
    <section className="relative overflow-hidden bg-background pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-6 text-xs tracking-[0.2em] uppercase">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
