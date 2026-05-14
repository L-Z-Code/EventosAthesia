import type { WeddingInfo } from '../types/wedding'
import styles from './NotFoundPage.module.css'

type NotFoundPageProps = {
  weddings: WeddingInfo[]
}

export function NotFoundPage({ weddings }: NotFoundPageProps) {
  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>Athesia</p>
      <h1>Esta invitación no existe todavía</h1>
      <p>Revisá el enlace o abrí una de las invitaciones disponibles para pruebas.</p>
      <div className={styles.links}>
        {weddings.map((wedding) => (
          <a key={wedding.slug} href={`/${wedding.slug}`}>
            {wedding.couple.bride} & {wedding.couple.groom}
          </a>
        ))}
      </div>
    </main>
  )
}
