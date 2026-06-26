"use client"

import Image from "next/image"
import { motion } from "motion/react"

const clients = [
  { name: "وزارة البلديات والإسكان", img: "/clients/client-1.webp" },
  { name: "وزارة البيئة والمياه والزراعة", img: "/clients/client-2.svg" },
  { name: "وزارة الثقافة", img: "/clients/client-3.svg" },
  { name: "وزارة الحج والعمرة", img: "/clients/client-4.svg" },
  { name: "الهيئة الملكية لمكة المكرمة", img: "/clients/client-5.svg" },
  { name: "هيئة البحر الأحمر", img: "/clients/client-6.webp" },
  { name: "البنك المركزي السعودي", img: "/clients/client-7.webp" },
  { name: "موان", img: "/clients/client-8.webp" },
  { name: "المركز الوطني للنخيل والتمور", img: "/clients/client-9.svg" },
  { name: "الاتحاد السعودي للملاكمة", img: "/clients/client-10.webp" },
  { name: "شركة الدرعية", img: "/clients/client-11.webp" },
  { name: "نادك", img: "/clients/client-12.webp" },
  { name: "مجموعة السنبلة", img: "/clients/client-13.webp" },
  { name: "أراسكو", img: "/clients/client-14.svg" },
  { name: "إنتاج", img: "/clients/client-15.webp" },
  { name: "قصص", img: "/clients/client-16.webp" },
  { name: "إسناد", img: "/clients/client-17.svg" },
  { name: "Yelo", img: "/clients/client-18.webp" },
  { name: "زد", img: "/clients/client-19.webp" },
  { name: "ساري", img: "/clients/client-20.svg" },
  { name: "دخون", img: "/clients/client-21.webp" },
  { name: "بست شيلد", img: "/clients/client-22.webp" },
  { name: "رصف", img: "/clients/client-23.webp" },
  { name: "سليمان الراجحي العقارية", img: "/clients/client-24.webp" },
]

function Row({ items }: { items: typeof clients }) {
  return (
    <div className="flex w-max animate-marquee items-center gap-4">
      {[...items, ...items].map((client, i) => (
        <div
          key={`${client.name}-${i}`}
          className="flex h-20 min-w-44 items-center justify-center rounded-md border border-border bg-card px-6"
        >
          <div className="relative h-10 w-28 shrink-0">
            <Image
              src={client.img}
              alt={client.name}
              fill
              sizes="112px"
              className="object-contain opacity-50"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ClientsSection() {
  const half = Math.ceil(clients.length / 2)
  return (
    <section className="border-t border-border bg-background py-24 lg:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-5 lg:px-8">
        <motion.p
          className="mb-6 text-xs tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          عملاؤنا
        </motion.p>
        <motion.h2
          className="text-3xl font-black sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
