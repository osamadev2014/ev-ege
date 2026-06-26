import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase-server"
import { verifyAdminApi } from "@/lib/auth-helpers"

const ALLOWED_TYPES = ["image/png", "image/jpeg"]
const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg"]
const MAX_SIZE = 8 * 1024 * 1024

export async function POST(request: Request) {
  const auth = await verifyAdminApi()
  if (auth) return auth

  const formData = await request.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "الملف مطلوب" }, { status: 400 })
  }

  const ext = "." + file.name.split(".").pop()?.toLowerCase()
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return NextResponse.json({ error: "فقط PNG و JPG مسموح بها" }, { status: 400 })
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "نوع الملف غير مسموح" }, { status: 400 })
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "الملف كبير جداً (الحد الأقصى 8MB)" }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const fileName = `${crypto.randomUUID()}${ext}`
  const filePath = `works/${fileName}`

  const { error } = await supabase.storage
    .from("work-images")
    .upload(filePath, buffer, { contentType: file.type, upsert: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const { data: publicUrl } = supabase.storage.from("work-images").getPublicUrl(filePath)

  return NextResponse.json({ url: publicUrl.publicUrl })
}