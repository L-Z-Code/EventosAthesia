import { useState } from 'react'
import type { WeddingInfo } from '../../../types/wedding'
import styles from './GuestPhotosOverlay.module.css'

type GuestPhotosOverlayProps = {
  wedding: WeddingInfo
}

export function GuestPhotosOverlay({ wedding }: GuestPhotosOverlayProps) {
  const [activePhoto, setActivePhoto] = useState(0)
  const photos = wedding.gallery
  const mainPhoto = photos[activePhoto]
  const previewPhoto = photos[(activePhoto + 1) % photos.length]

  const previousPhoto = () => {
    setActivePhoto((photo) => (photo === 0 ? photos.length - 1 : photo - 1))
  }

  const nextPhoto = () => {
    setActivePhoto((photo) => (photo + 1) % photos.length)
  }

  return (
    <section className={styles.section} id="fotos" aria-label="Fotos de invitados">
      <div className={styles.frame}>
        <img className={styles.main} src={mainPhoto.src} alt={mainPhoto.alt} />
        <img className={styles.preview} src={previewPhoto.src} alt="" aria-hidden="true" />
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={previousPhoto} aria-label="Foto anterior">
          ←
        </button>
        <button type="button">Ver todo</button>
        <button type="button" onClick={nextPhoto} aria-label="Siguiente foto">
          →
        </button>
      </div>
    </section>
  )
}
