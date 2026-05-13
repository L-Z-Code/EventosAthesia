import type { WeddingInfo } from '../../../types/wedding'
import styles from './FooterSage.module.css'

type FooterSageProps = {
  wedding: WeddingInfo
}

export function FooterSage({ wedding }: FooterSageProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.message}>{wedding.footer.message}</p>
      <p className={styles.details}>
        {wedding.couple.bride} & {wedding.couple.groom} · {wedding.footer.date}
      </p>
    </footer>
  )
}
