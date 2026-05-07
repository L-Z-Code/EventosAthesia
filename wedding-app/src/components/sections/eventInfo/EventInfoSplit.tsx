import type { WeddingInfo } from '../../../types/wedding'

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
    <section className="event-info-section" id="informacion">
      <div className="event-info-list">
        {items.map((item) => (
          <article className="event-info-item" key={item.label}>
            <h2>{item.label}</h2>
            <p>{item.value}</p>
          </article>
        ))}
        <p className="event-info-closing">{wedding.eventInfo.closingText}</p>
      </div>

      <div className="event-map">
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
