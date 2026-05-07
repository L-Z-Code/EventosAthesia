import { useState } from 'react'
import type { WeddingInfo } from '../../../types/wedding'

type GuestPhotosStackProps = {
  wedding: WeddingInfo
}

export function GuestPhotosStack({ wedding }: GuestPhotosStackProps) {
  const [activePhoto, setActivePhoto] = useState(0)
  const stackOffsets = [-3, -2, -1, 0, 1, 2, 3]
  const photos = wedding.gallery

  const getPhoto = (offset: number) => {
    const index = (activePhoto + offset + photos.length) % photos.length

    return photos[index]
  }

  const previousPhoto = () => {
    setActivePhoto((photo) => (photo === 0 ? photos.length - 1 : photo - 1))
  }

  const nextPhoto = () => {
    setActivePhoto((photo) => (photo + 1) % photos.length)
  }

  return (
    <section className="guest-photos-section" id="fotos" aria-label="Fotos de invitados">
      <div className="guest-photos-heading">
        <p>Ayúdanos a capturar momentos de nuestra boda</p>
      </div>

      <div className="guest-photos-stack" aria-live="polite">
        {stackOffsets.map((offset) => {
          const photo = getPhoto(offset)

          return (
            <img
              key={`${photo.alt}-${offset}`}
              src={photo.src}
              alt={offset === 0 ? photo.alt : ''}
              className="guest-photo-card"
              data-offset={offset}
              aria-hidden={offset !== 0}
            />
          )
        })}
      </div>

      <div className="guest-photos-controls">
        <button type="button" className="guest-photos-arrow" onClick={previousPhoto} aria-label="Foto anterior">
          ←
        </button>
        <button type="button" className="guest-photos-view-all">
          Ver todo
        </button>
        <button type="button" className="guest-photos-arrow" onClick={nextPhoto} aria-label="Siguiente foto">
          →
        </button>
      </div>
    </section>
  )
}
