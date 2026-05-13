import type { WeddingInfo } from '../../../types/wedding'
import { Countdown } from '../../shared/Countdown'
import styles from './FixedWeddingNav.module.css'

type FixedWeddingNavProps = {
  wedding: WeddingInfo
}

export function FixedWeddingNav({ wedding }: FixedWeddingNavProps) {
  return (
    <header className={styles.nav}>
      <a className={styles.monogram} href="#inicio" aria-label="Ir al inicio">
        {wedding.couple.monogram}
      </a>

      <Countdown targetDate={wedding.date} />

      <nav className={styles.links} aria-label="Navegación de la invitación">
        <a href="#informacion">Información</a>
        <a href="#fotos">Fotos</a>
      </nav>
    </header>
  )
}
