import { useEffect, useState } from 'react'
import type { WeddingInfo } from '../../../types/wedding'
import styles from './GalleryClassic.module.css'

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
    <section className={styles.section} id="galeria" aria-label="Galería de fotos">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Galería</p>
        <h2>Nuestros momentos</h2>
      </div>

      <div className={styles.carousel}>
        <button type="button" className={styles.button} onClick={previousPhoto} aria-label="Foto anterior">
          ‹
        </button>
        <img src={gallery[currentPhoto].src} alt={gallery[currentPhoto].alt} />
        <button type="button" className={styles.button} onClick={nextPhoto} aria-label="Foto siguiente">
          ›
        </button>
      </div>

      <div className={styles.dots} aria-label="Seleccionar foto">
        {gallery.map((photo, index) => (
          <button
            type="button"
            key={photo.alt}
            className={index === currentPhoto ? styles.active : ''}
            onClick={() => setCurrentPhoto(index)}
            aria-label={`Ver foto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
