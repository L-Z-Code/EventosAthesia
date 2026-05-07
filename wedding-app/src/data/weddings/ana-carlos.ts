import coupleOne from '../../assets/couple-1.jpg'
import coupleTwo from '../../assets/couple-2.jpg'
import coupleThree from '../../assets/couple-3.jpg'
import coupleFour from '../../assets/couple-4.jpg'
import heroImage from '../../assets/prueba.jpg'
import type { WeddingInfo } from '../../types/wedding'

export const anaCarlosWedding: WeddingInfo = {
  slug: 'ana-carlos',
  template: {
    page: 'editorial',
    hero: 'editorial',
    eventInfo: 'cards',
    invitation: 'editorial',
    gallery: 'classic',
    guestPhotos: 'overlay',
    footer: 'minimal',
  },
  couple: {
    bride: 'Ana',
    groom: 'Carlos',
    monogram: 'A&C',
  },
  heroImage,
  date: new Date('2026-06-20T16:00:00-06:00'),
  ceremonyText: 'Sábado 20 de Junio | 4:00 p.m. | Jardín Botánico',
  venueName: 'Jardín Botánico',
  mapsUrl: 'https://www.google.com/maps?q=Jard%C3%ADn%20Bot%C3%A1nico%20Lankester,%20Costa%20Rica&output=embed',
  eventInfo: {
    date: 'Sábado 20 de Junio',
    time: '4:00 p.m.',
    location: 'Jardín Botánico',
    closingText: 'Celebremos juntos',
  },
  invitation: {
    eyebrow: 'Nuestra boda',
    title: 'Una tarde para guardar en el corazón',
    description:
      'Queremos vivir este capítulo rodeados de las personas que han sido parte de nuestra historia. Gracias por acompañarnos en este día tan especial.',
  },
  footer: {
    message: 'Celebremos juntos',
    date: '20.06.2026',
  },
  details: [
    {
      number: '01',
      title: 'Ceremonia',
      description: 'Jardín Botánico, sábado 20 de junio a las 4:00 p.m.',
    },
    {
      number: '02',
      title: 'Recepción',
      description: 'Después de la ceremonia tendremos cena y música.',
    },
    {
      number: '03',
      title: 'Código',
      description: 'Formal de jardín.',
    },
  ],
  gallery: [
    { src: coupleFour, alt: 'Ana y Carlos durante su sesión de fotos' },
    { src: coupleOne, alt: 'Retrato de la pareja al atardecer' },
    { src: coupleTwo, alt: 'Detalle de flores y vestido' },
    { src: coupleThree, alt: 'Recuerdo romántico de la pareja' },
  ],
}
