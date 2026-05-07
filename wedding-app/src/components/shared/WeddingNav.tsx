import type { WeddingInfo } from '../../types/wedding'
import { Countdown } from './Countdown'

type WeddingNavProps = {
  wedding: WeddingInfo
}

export function WeddingNav({ wedding }: WeddingNavProps) {
  return (
    <header className="wedding-nav">
      <a className="monogram" href="#inicio" aria-label="Ir al inicio">
        {wedding.couple.monogram}
      </a>

      <Countdown targetDate={wedding.date} />

      <nav aria-label="Navegación de la invitación">
        <a href="#informacion">Información</a>
        <a href="#fotos">Fotos</a>
      </nav>
    </header>
  )
}
