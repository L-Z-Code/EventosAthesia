import type { WeddingInfo } from '../../../types/wedding'

type FooterMinimalProps = {
  wedding: WeddingInfo
}

export function FooterMinimal({ wedding }: FooterMinimalProps) {
  return (
    <footer className="footer-minimal">
      <p>{wedding.footer.message}</p>
      <span>
        {wedding.couple.bride} & {wedding.couple.groom} · {wedding.footer.date}
      </span>
    </footer>
  )
}
