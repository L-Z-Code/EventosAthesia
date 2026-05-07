import { useEffect, useState } from 'react'
import { getCountdown } from '../utils/countdown'

export function useCountdown(targetDate: Date) {
  const [countdown, setCountdown] = useState(() => getCountdown(targetDate))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  return countdown
}
