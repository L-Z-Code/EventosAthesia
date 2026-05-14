import { useMusicPlayer } from '../../hooks/useMusicPlayer'
import styles from './MusicButton.module.css'

export function MusicButton() {
  const { isMusicOn, toggleMusic } = useMusicPlayer()

  return (
    <button
      type="button"
      className={`${styles.toggle} ${isMusicOn ? styles.isPlaying : ''}`}
      onClick={toggleMusic}
      aria-label={isMusicOn ? 'Pausar música' : 'Activar música'}
      aria-pressed={isMusicOn}
    >
      {isMusicOn && (
          <span className={styles.notes} aria-hidden="true">
          <span>♪</span>
          <span>♫</span>
          <span>♪</span>
          <span>♬</span>
        </span>
      )}
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 18.5a2.5 2.5 0 1 1-1-2V6.75c0-.46.31-.86.75-.97l8-2A1 1 0 0 1 18 4.75v10.75a2.5 2.5 0 1 1-1-2V8.03l-7 1.75v8.72Z" />
      </svg>
    </button>
  )
}
