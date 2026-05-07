import type { WeddingInfo } from '../../../types/wedding'

type HeroEditorialProps = {
  wedding: WeddingInfo
}

export function HeroEditorial({ wedding }: HeroEditorialProps) {
  const collagePhotos = wedding.gallery.slice(0, 3)

  return (
    <section className="hero-editorial" id="inicio">
      <div className="hero-editorial-copy">
        <h1>
          {wedding.couple.bride}
          <span>&</span>
          {wedding.couple.groom}
        </h1>
      </div>

      <div className="hero-editorial-collage" aria-label="Fotos de la pareja">
        {collagePhotos.map((photo, index) => (
          <img key={photo.alt} src={photo.src} alt={photo.alt} className={`collage-photo collage-photo-${index + 1}`} />
        ))}
      </div>
    </section>
  )
}
