export type Countdown = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const twoDigits = (value: number) => String(value).padStart(2, '0')

export function getCountdown(targetDate: Date): Countdown {
  const distance = Math.max(targetDate.getTime() - Date.now(), 0)
  const totalSeconds = Math.floor(distance / 1000)

  return {
    days: twoDigits(Math.floor(totalSeconds / 86400)),
    hours: twoDigits(Math.floor((totalSeconds % 86400) / 3600)),
    minutes: twoDigits(Math.floor((totalSeconds % 3600) / 60)),
    seconds: twoDigits(totalSeconds % 60),
  }
}
