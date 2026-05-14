import type { WeddingInfo } from '../../../types/wedding'
import styles from './HeroEditorial.module.css'

type HeroEditorialProps = {
  wedding: WeddingInfo
}

export function HeroEditorial({ wedding }: HeroEditorialProps) {
  const collagePhotos = wedding.gallery.slice(0, 3)

  return (
    <section className={styles.section} id="inicio">
      <div className={styles.copy}>
        <h1>
          {wedding.couple.bride}
          <span>&</span>
          {wedding.couple.groom}
        </h1>
      </div>

      <div className={styles.collage} aria-label="Fotos de la pareja">
        {collagePhotos.map((photo, index) => (
          <img
            key={photo.alt}
            src={photo.src}
            alt={photo.alt}
            className={`${styles.photo} ${
              index === 0 ? styles.photoOne : index === 1 ? styles.photoTwo : styles.photoThree
            }`}
          />
        ))}
      </div>
    </section>
  )
}
