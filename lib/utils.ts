import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const siteUrl = 'https://evico.sa'
export const siteName = 'Evico agency'

export function createMetadata(overrides: {
  title: string
  description: string
  path?: string
}): Metadata {
  const title = `${overrides.title} | ${siteName}`
  const description = overrides.description
  const url = overrides.path ? `${siteUrl}${overrides.path}` : siteUrl

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'ar_SA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@evico_sa',
      title,
      description,
    },
  }
}
