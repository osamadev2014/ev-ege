"use client"

import { useState } from "react"
import { Send, Check } from "lucide-react"

const subjects = ["استفسار عام", "مشروع جديد", "شراكة", "وظائف", "أخرى"]

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" />
        </div>
        <h3 className="text-2xl font-bold">تم إرسال رسالتك</h3>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
           شكراً لتواصلك مع Evico agency. سيتواصل معك فريقنا في أقرب وقت ممكن.
        </p>
        <button
          onClick={() => {
            setSent(false)
            setForm({ name: "", email: "", phone: "", subject: subjects[0], message: "" })
          }}
          className="mt-6 text-sm font-bold text-primary transition hover:opacity-80"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            الاسم الكامل
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="اكتب اسمك"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="email@example.com"
            dir="ltr"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-bold">
            رقم الجوال
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="05xxxxxxxx"
            dir="ltr"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-bold">
            الموضوع
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-bold">
          رسالتك
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="resize-none rounded-lg border border-input bg-background p-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="أخبرنا عن مشروعك أو استفسارك"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
      >
        <Send className="size-4" />
        إرسال الرسالة
      </button>
    </form>
  )
}
