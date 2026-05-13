import type { WeddingInfo } from '../../../types/wedding'
import styles from './InvitationCentered.module.css'

type InvitationCenteredProps = {
  wedding: WeddingInfo
}

export function InvitationCentered({ wedding }: InvitationCenteredProps) {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>{wedding.invitation.eyebrow}</p>
      <h2>{wedding.invitation.title}</h2>
      <p>{wedding.invitation.description}</p>
    </section>
  )
}
