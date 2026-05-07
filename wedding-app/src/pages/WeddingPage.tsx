import { MusicButton } from '../components/shared/MusicButton'
import { WeddingNav } from '../components/shared/WeddingNav'
import { templateRegistry } from '../templates/templateRegistry'
import type { WeddingInfo } from '../types/wedding'

type WeddingPageProps = {
  wedding: WeddingInfo
}

export function WeddingPage({ wedding }: WeddingPageProps) {
  const Hero = templateRegistry.hero[wedding.template.hero]
  const EventInfo = templateRegistry.eventInfo[wedding.template.eventInfo]
  const Invitation = templateRegistry.invitation[wedding.template.invitation]
  const Gallery = templateRegistry.gallery[wedding.template.gallery]
  const GuestPhotos = templateRegistry.guestPhotos[wedding.template.guestPhotos]
  const Footer = templateRegistry.footer[wedding.template.footer]

  return (
    <main className={`wedding-page template-${wedding.template.page}`}>
      <WeddingNav wedding={wedding} />
      <Hero wedding={wedding} />
      <EventInfo wedding={wedding} />
      <Invitation wedding={wedding} />
      <Gallery wedding={wedding} />
      <GuestPhotos wedding={wedding} />
      <Footer wedding={wedding} />
      <MusicButton />
    </main>
  )
}
