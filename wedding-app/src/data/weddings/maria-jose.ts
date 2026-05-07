import coupleOne from '../../assets/couple-1.jpg'
import coupleTwo from '../../assets/couple-2.jpg'
import coupleThree from '../../assets/couple-3.jpg'
import coupleFour from '../../assets/couple-4.jpg'
import heroHands from '../../assets/hero-hands.jpg'
import type { WeddingInfo } from '../../types/wedding'

export const mariaJoseWedding: WeddingInfo = {
  slug: 'maria-jose',
  template: {
    page: 'classic',
    hero: 'classic',
    eventInfo: 'split',
    invitation: 'centered',
    gallery: 'classic',
    guestPhotos: 'stack',
    footer: 'sage',
  },
  couple: {
    bride: 'María',
    groom: 'José Carlos',
    monogram: 'M&J',
  },
  heroImage: heroHands,
  date: new Date('2026-04-25T10:00:00-06:00'),
  ceremonyText: 'Sábado 25 de Abril | 10:00 a.m. | Iglesia de Zarcero',
  venueName: 'Iglesia de Zarcero',
  mapsUrl: 'https://www.google.com/maps?q=Iglesia%20de%20Zarcero,%20Costa%20Rica&output=embed',
  eventInfo: {
    date: 'Sábado 25 de Abril',
    time: '10:00 a.m.',
    location: 'Iglesia de Zarcero',
    closingText: '¡Te esperamos!',
  },
  invitation: {
    eyebrow: 'Nos casamos',
    title: 'Queremos compartir este día con vos',
    description:
      'Después de mucho soñar este momento, nos emociona invitarte a celebrar nuestra boda y acompañarnos en una mañana llena de familia, música y buenos recuerdos.',
  },
  footer: {
    message: '¡Te esperamos!',
    date: '25.04.2026',
  },
  details: [
    {
      number: '01',
      title: 'Ceremonia',
      description: 'Iglesia de Zarcero, sábado 25 de abril a las 10:00 a.m.',
    },
    {
      number: '02',
      title: 'Recepción',
      description: 'Al finalizar la ceremonia tendremos un almuerzo para celebrar juntos.',
    },
    {
      number: '03',
      title: 'Confirmación',
      description: 'Más adelante podemos conectar un formulario para confirmar asistencia y acompañantes.',
    },
  ],
  gallery: [
    { src: coupleOne, alt: 'María y José Carlos sonriendo al atardecer' },
    { src: coupleTwo, alt: 'Retrato de la pareja durante su sesión de fotos' },
    { src: coupleThree, alt: 'Detalle romántico de la pareja' },
    { src: coupleFour, alt: 'María y José Carlos celebrando juntos' },
  ],
}
