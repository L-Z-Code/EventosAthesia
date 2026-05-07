import { useMemo } from 'react'
import { useCountdown } from '../../hooks/useCountdown'

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
    <div className="countdown" aria-label="Cuenta regresiva para la boda">
      {countdownItems.map((item, index) => (
        <div className="countdown-item" key={item.label}>
          <span className="countdown-number">{item.value}</span>
          <span className="countdown-label">{item.label}</span>
          {index < countdownItems.length - 1 && <span className="countdown-separator">:</span>}
        </div>
      ))}
    </div>
  )
}
