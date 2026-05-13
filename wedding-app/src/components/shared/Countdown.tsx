import { useMemo } from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import styles from './Countdown.module.css'

type CountdownProps = {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const countdown = useCountdown(targetDate)

  const countdownItems = useMemo(
    () => [
      { value: countdown.days, label: 'Días' },
      { value: countdown.hours, label: 'Horas' },
      { value: countdown.minutes, label: 'Minutos' },
      { value: countdown.seconds, label: 'Segundos' },
    ],
    [countdown],
  )

  return (
    <div className={styles.countdown} aria-label="Cuenta regresiva para la boda">
      {countdownItems.map((item, index) => (
        <div className={styles.item} key={item.label}>
          <span className={styles.number}>{item.value}</span>
          <span className={styles.label}>{item.label}</span>
          {index < countdownItems.length - 1 && <span className={styles.separator}>:</span>}
        </div>
      ))}
    </div>
  )
}
