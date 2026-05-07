import { useEffect, useState } from 'react'
import type { WeddingInfo } from '../../../types/wedding'

type GalleryClassicProps = {
  wedding: WeddingInfo
}

export function GalleryClassic({ wedding }: GalleryClassicProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const { gallery } = wedding

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentPhoto((photo) => (photo + 1) % gallery.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [gallery.length])

  const previousPhoto = () => {
    setCurrentPhoto((photo) => (photo === 0 ? gallery.length - 1 : photo - 1))
  }

  const nextPhoto = () => {
    setCurrentPhoto((photo) => (photo + 1) % gallery.length)
  }

  return (
    <section className="gallery-section" id="galeria" aria-label="Galería de fotos">
      <div className="section-heading">
        <p className="eyebrow">Galería</p>
        <h2>Nuestros momentos</h2>
      </div>

      <div className="carousel">
        <button type="button" className="carousel-button" onClick={previousPhoto} aria-label="Foto anterior">
          ‹
        </button>
        <img src={gallery[currentPhoto].src} alt={gallery[currentPhoto].alt} />
        <button type="button" className="carousel-button" onClick={nextPhoto} aria-label="Foto siguiente">
          ›
        </button>
      </div>

      <div className="photo-dots" aria-label="Seleccionar foto">
        {gallery.map((photo, index) => (
          <button
            type="button"
            key={photo.alt}
            className={index === currentPhoto ? 'active' : ''}
            onClick={() => setCurrentPhoto(index)}
            aria-label={`Ver foto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
