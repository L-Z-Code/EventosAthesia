import { MusicButton } from '../components/shared/MusicButton'
import { templateRegistry } from '../templates/templateRegistry'
import { getThemeStyle } from '../themes/themeRegistry'
import type { WeddingInfo } from '../types/wedding'
import styles from './WeddingPage.module.css'

type WeddingPageProps = {
  wedding: WeddingInfo
}

export function WeddingPage({ wedding }: WeddingPageProps) {
  const Nav = templateRegistry.nav[wedding.template.nav]
  const Hero = templateRegistry.hero[wedding.template.hero]
  const EventInfo = templateRegistry.eventInfo[wedding.template.eventInfo]
  const Invitation = templateRegistry.invitation[wedding.template.invitation]
  const Gallery = templateRegistry.gallery[wedding.template.gallery]
  const GuestPhotos = templateRegistry.guestPhotos[wedding.template.guestPhotos]
  const Footer = templateRegistry.footer[wedding.template.footer]
  const themeStyle = getThemeStyle(wedding.theme.palette)

  return (
    <main className={styles.page} style={themeStyle}>
      <Nav wedding={wedding} />
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
