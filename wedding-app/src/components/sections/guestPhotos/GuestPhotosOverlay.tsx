import { useState } from 'react'
import type { WeddingInfo } from '../../../types/wedding'

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
    <section className="guest-photos-overlay-section" id="fotos" aria-label="Fotos de invitados">
      <div className="guest-photos-overlay-frame">
        <img className="guest-photos-overlay-main" src={mainPhoto.src} alt={mainPhoto.alt} />
        <img className="guest-photos-overlay-preview" src={previewPhoto.src} alt="" aria-hidden="true" />
      </div>

      <div className="guest-photos-overlay-controls">
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
