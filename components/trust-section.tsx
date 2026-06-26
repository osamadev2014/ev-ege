import Image from "next/image"

const logos = [
  { name: "clup", file: "clup.svg" },
  { name: "Furious", file: "furious.svg" },
  { name: "powr", file: "powr.svg" },
  { name: "riyadh", file: "riyadh.svg" },
  { name: "senam", file: "senam.svg" },
  { name: "tu", file: "tu.svg" },
]

export function TrustSection() {
  return (
    <section className="py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto mb-8 max-w-7xl px-5 lg:px-8">
        <p className="text-xs tracking-[0.2em] text-muted-foreground/50 uppercase text-center">
          يثقون فينا
        </p>
      </div>
      <div
        className="flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee-single items-center gap-16">
          {[...logos, ...logos].map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="relative shrink-0 h-6 w-28">
              <Image
                src={`/hero-clients/${logo.file}`}
                alt={logo.name}
                fill
                sizes="112px"
                className="object-contain brightness-0 invert opacity-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}