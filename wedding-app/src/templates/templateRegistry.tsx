import type { ComponentType } from 'react'
import type { TemplateConfig, WeddingInfo } from '../types/wedding'
import { EventInfoCards } from '../components/sections/eventInfo/EventInfoCards'
import { EventInfoSplit } from '../components/sections/eventInfo/EventInfoSplit'
import { FooterMinimal } from '../components/sections/footer/FooterMinimal'
import { FooterSage } from '../components/sections/footer/FooterSage'
import { GalleryClassic } from '../components/sections/gallery/GalleryClassic'
import { GuestPhotosOverlay } from '../components/sections/guestPhotos/GuestPhotosOverlay'
import { GuestPhotosStack } from '../components/sections/guestPhotos/GuestPhotosStack'
import { HeroClassic } from '../components/sections/hero/HeroClassic'
import { HeroEditorial } from '../components/sections/hero/HeroEditorial'
import { InvitationCentered } from '../components/sections/invitation/InvitationCentered'
import { InvitationEditorial } from '../components/sections/invitation/InvitationEditorial'

export type WeddingSectionComponent = ComponentType<{ wedding: WeddingInfo }>

export const templateRegistry = {
  hero: {
    classic: HeroClassic,
    editorial: HeroEditorial,
  },
  eventInfo: {
    split: EventInfoSplit,
    cards: EventInfoCards,
  },
  invitation: {
    centered: InvitationCentered,
    editorial: InvitationEditorial,
  },
  gallery: {
    classic: GalleryClassic,
  },
  guestPhotos: {
    stack: GuestPhotosStack,
    overlay: GuestPhotosOverlay,
  },
  footer: {
    sage: FooterSage,
    minimal: FooterMinimal,
  },
} satisfies {
  hero: Record<TemplateConfig['hero'], WeddingSectionComponent>
  eventInfo: Record<TemplateConfig['eventInfo'], WeddingSectionComponent>
  invitation: Record<TemplateConfig['invitation'], WeddingSectionComponent>
  gallery: Record<TemplateConfig['gallery'], WeddingSectionComponent>
  guestPhotos: Record<TemplateConfig['guestPhotos'], WeddingSectionComponent>
  footer: Record<TemplateConfig['footer'], WeddingSectionComponent>
}
