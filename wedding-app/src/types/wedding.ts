export type GalleryPhoto = {
  src: string
  alt: string
}

export type DetailItem = {
  number: string
  title: string
  description: string
}

export type TemplateId = 'classic' | 'editorial'

export type TemplateConfig = {
  page: TemplateId
  hero: 'classic' | 'editorial'
  eventInfo: 'split' | 'cards'
  invitation: 'centered' | 'editorial'
  gallery: 'classic'
  guestPhotos: 'stack' | 'overlay'
  footer: 'sage' | 'minimal'
}

export type WeddingInfo = {
  slug: string
  template: TemplateConfig
  couple: {
    bride: string
    groom: string
    monogram: string
  }
  heroImage: string
  date: Date
  ceremonyText: string
  venueName: string
  mapsUrl: string
  eventInfo: {
    date: string
    time: string
    location: string
    closingText: string
  }
  invitation: {
    eyebrow: string
    title: string
    description: string
  }
  footer: {
    message: string
    date: string
  }
  details: DetailItem[]
  gallery: GalleryPhoto[]
}
