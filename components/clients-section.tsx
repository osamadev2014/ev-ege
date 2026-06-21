"use client"

import { motion } from "motion/react"

const clients = [
  { name: "وزارة البلديات والإسكان", img: "/clients/client-1.png" },
  { name: "وزارة البيئة والمياه والزراعة", img: "/clients/client-2.svg" },
  { name: "وزارة الثقافة", img: "/clients/client-3.svg" },
  { name: "وزارة الحج والعمرة", img: "/clients/client-4.svg" },
  { name: "الهيئة الملكية لمكة المكرمة", img: "/clients/client-5.svg" },
  { name: "هيئة البحر الأحمر", img: "/clients/client-6.png" },
  { name: "البنك المركزي السعودي", img: "/clients/client-7.png" },
  { name: "موان", img: "/clients/client-8.png" },
  { name: "المركز الوطني للنخيل والتمور", img: "/clients/client-9.svg" },
  { name: "الاتحاد السعودي للملاكمة", img: "/clients/client-10.png" },
  { name: "شركة الدرعية", img: "/clients/client-11.png" },
  { name: "نادك", img: "/clients/client-12.png" },
  { name: "مجموعة السنبلة", img: "/clients/client-13.png" },
  { name: "أراسكو", img: "/clients/client-14.svg" },
  { name: "إنتاج", img: "/clients/client-15.png" },
  { name: "قصص", img: "/clients/client-16.png" },
  { name: "إسناد", img: "/clients/client-17.svg" },
  { name: "Yelo", img: "/clients/client-18.png" },
  { name: "زد", img: "/clients/client-19.png" },
  { name: "ساري", img: "/clients/client-20.svg" },
  { name: "دخون", img: "/clients/client-21.png" },
  { name: "بست شيلد", img: "/clients/client-22.png" },
  { name: "رصف", img: "/clients/client-23.png" },
  { name: "سليمان الراجحي العقارية", img: "/clients/client-24.png" },
]

function Row({ items }: { items: typeof clients }) {
  return (
    <div className="flex w-max animate-marquee items-center gap-4">
      {[...items, ...items].map((client, i) => (
        <div
          key={`${client.name}-${i}`}
          className="flex h-20 min-w-44 items-center justify-center rounded-xl border border-border bg-card px-6"
        >
          <img
            src={client.img}
            alt={client.name}
            className="max-h-10 max-w-28 object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  )
}

export function ClientsSection() {
  const half = Math.ceil(clients.length / 2)
  return (
    <section className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto mb-12 max-w-7xl px-5 lg:px-8">
        <motion.p
          className="mb-4 text-sm font-bold tracking-wide text-primary"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          عملاؤنا
        </motion.p>
        <motion.h2
          className="text-balance text-4xl font-black sm:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          علامات تجارية نفخر بخدمتها
        </motion.h2>
      </div>

      <div
        className="flex flex-col gap-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <Row items={clients.slice(0, half)} />
        <Row items={clients.slice(half)} />
      </div>
    </section>
  )
}
