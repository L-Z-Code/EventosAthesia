import { useEffect, useRef, useState } from 'react'

export function useMusicPlayer() {
  const [isMusicOn, setIsMusicOn] = useState(false)
  const audioContext = useRef<AudioContext | null>(null)
  const oscillator = useRef<OscillatorNode | null>(null)
  const gain = useRef<GainNode | null>(null)

  useEffect(() => {
    return () => {
      oscillator.current?.stop()
      audioContext.current?.close()
    }
  }, [])

  const toggleMusic = async () => {
    if (isMusicOn) {
      gain.current?.gain.setTargetAtTime(0, audioContext.current?.currentTime ?? 0, 0.05)
      window.setTimeout(() => {
        oscillator.current?.stop()
        oscillator.current = null
        audioContext.current?.close()
        audioContext.current = null
        gain.current = null
      }, 180)
      setIsMusicOn(false)
      return
    }

    const context = new AudioContext()
    const tone = context.createOscillator()
    const volume = context.createGain()

    tone.type = 'sine'
    tone.frequency.value = 392
    volume.gain.value = 0.025
    tone.connect(volume)
    volume.connect(context.destination)
    tone.start()

    audioContext.current = context
    oscillator.current = tone
    gain.current = volume
    setIsMusicOn(true)
  }

  return { isMusicOn, toggleMusic }
}
