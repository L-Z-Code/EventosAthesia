import type { WeddingInfo } from '../../../types/wedding'
import styles from './HeroClassic.module.css'

type HeroClassicProps = {
  wedding: WeddingInfo
}

export function HeroClassic({ wedding }: HeroClassicProps) {
  return (
    <section className={styles.section} id="inicio" style={{ backgroundImage: `url(${wedding.heroImage})` }}>
      <div className={styles.copy}>
        <h1>
          <span>{wedding.couple.bride}</span>
          <span>&</span>
          <span>{wedding.couple.groom}</span>
        </h1>
        <p>{wedding.ceremonyText}</p>
      </div>
    </section>
  )
}
