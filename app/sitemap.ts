import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { SERVICIOS } from '@/lib/servicios'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    ...SERVICIOS.map((s) => ({
      url: `${SITE_URL}/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/contacto`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
