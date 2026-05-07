import type { WeddingInfo } from '../../../types/wedding'

type EventInfoCardsProps = {
  wedding: WeddingInfo
}

export function EventInfoCards({ wedding }: EventInfoCardsProps) {
  const items = [
    { label: 'Hora', value: wedding.eventInfo.time },
    { label: 'Fecha', value: wedding.eventInfo.date },
    { label: 'Ubicación', value: wedding.eventInfo.location },
  ]

  return (
    <section className="event-cards-section" id="informacion">
      <div className="event-cards-map">
        <iframe
          title={`Mapa de ${wedding.venueName}`}
          src={wedding.mapsUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="event-cards-grid">
        {items.map((item) => (
          <article key={item.label}>
            <h2>{item.label}:</h2>
            <p>{item.value}</p>
          </article>
        ))}
      </div>

      <p className="event-cards-closing">{wedding.eventInfo.closingText}</p>
    </section>
  )
}
