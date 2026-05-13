import type { WeddingInfo } from '../../../types/wedding'
import styles from './EventInfoSplit.module.css'

type EventInfoSplitProps = {
  wedding: WeddingInfo
}

export function EventInfoSplit({ wedding }: EventInfoSplitProps) {
  const items = [
    { label: 'Fecha', value: wedding.eventInfo.date },
    { label: 'Hora', value: wedding.eventInfo.time },
    { label: 'Ubicación', value: wedding.eventInfo.location },
  ]

  return (
    <section className={styles.section} id="informacion">
      <div className={styles.list}>
        {items.map((item) => (
          <article className={styles.item} key={item.label}>
            <h2>{item.label}</h2>
            <p>{item.value}</p>
          </article>
        ))}
        <p className={styles.closing}>{wedding.eventInfo.closingText}</p>
      </div>

      <div className={styles.map}>
        <iframe
          title={`Mapa de ${wedding.venueName}`}
          src={wedding.mapsUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
