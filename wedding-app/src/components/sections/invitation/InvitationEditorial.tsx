import type { WeddingInfo } from '../../../types/wedding'
import styles from './InvitationEditorial.module.css'

type InvitationEditorialProps = {
  wedding: WeddingInfo
}

export function InvitationEditorial({ wedding }: InvitationEditorialProps) {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>{wedding.invitation.eyebrow}</p>
      <div>
        <h2>{wedding.invitation.title}</h2>
        <p>{wedding.invitation.description}</p>
      </div>
    </section>
  )
}
