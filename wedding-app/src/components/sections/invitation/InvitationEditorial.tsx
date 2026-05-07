import type { WeddingInfo } from '../../../types/wedding'

type InvitationEditorialProps = {
  wedding: WeddingInfo
}

export function InvitationEditorial({ wedding }: InvitationEditorialProps) {
  return (
    <section className="invitation-editorial">
      <p className="eyebrow">{wedding.invitation.eyebrow}</p>
      <div>
        <h2>{wedding.invitation.title}</h2>
        <p>{wedding.invitation.description}</p>
      </div>
    </section>
  )
}
