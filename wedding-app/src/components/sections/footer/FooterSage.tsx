import type { WeddingInfo } from '../../../types/wedding'

type FooterSageProps = {
  wedding: WeddingInfo
}

export function FooterSage({ wedding }: FooterSageProps) {
  return (
    <footer className="site-footer">
      <p className="footer-message">{wedding.footer.message}</p>
      <p className="footer-details">
        {wedding.couple.bride} & {wedding.couple.groom} · {wedding.footer.date}
      </p>
    </footer>
  )
}
