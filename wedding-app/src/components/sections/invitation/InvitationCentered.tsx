import type { WeddingInfo } from '../../../types/wedding'

type InvitationCenteredProps = {
  wedding: WeddingInfo
}

export function InvitationCentered({ wedding }: InvitationCenteredProps) {
  return (
    <section className="invitation-section">
      <p className="eyebrow">{wedding.invitation.eyebrow}</p>
      <h2>{wedding.invitation.title}</h2>
      <p>{wedding.invitation.description}</p>
    </section>
  )
}
