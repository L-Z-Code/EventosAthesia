import type { WeddingInfo } from '../../../types/wedding'
import styles from './FooterMinimal.module.css'

type FooterMinimalProps = {
  wedding: WeddingInfo
}

export function FooterMinimal({ wedding }: FooterMinimalProps) {
  return (
    <footer className={styles.footer}>
      <p>{wedding.footer.message}</p>
      <span>
        {wedding.couple.bride} & {wedding.couple.groom} · {wedding.footer.date}
      </span>
    </footer>
  )
}
