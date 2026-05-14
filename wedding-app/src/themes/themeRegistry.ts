import type { CSSProperties } from 'react'
import type { ThemeId } from '../types/wedding'

export type ThemeTokens = {
  pageBg: string
  surface: string
  surfaceAlt: string
  primary: string
  primaryContrast: string
  accent: string
  text: string
  muted: string
  border: string
  navBg: string
  navText: string
  navShadow: string
  musicAccent: string
  musicSurface: string
  heroTitle: string
  heroAmpersand: string
  footerBg: string
  footerText: string
}

export const themeRegistry: Record<ThemeId, ThemeTokens> = {
  sage: {
    pageBg: '#fff9ee',
    surface: '#fff9ee',
    surfaceAlt: '#f7f6f2',
    primary: '#77754b',
    primaryContrast: '#fffdf3',
    accent: '#f7dfaa',
    text: '#161412',
    muted: '#6f665c',
    border: 'rgba(55, 50, 38, 0.14)',
    navBg: '#e7e9c9',
    navText: '#161412',
    navShadow: 'rgba(55, 50, 38, 0.08)',
    musicAccent: '#77754b',
    musicSurface: 'rgba(255, 253, 247, 0.88)',
    heroTitle: '#030303',
    heroAmpersand: '#030303',
    footerBg: '#e7e9c9',
    footerText: '#161412',
  },
  terracotta: {
    pageBg: '#fffdf9',
    surface: '#fffdf9',
    surfaceAlt: '#fbf7ec',
    primary: '#7f2f1f',
    primaryContrast: '#fffdf9',
    accent: '#f7dfaa',
    text: '#2b211d',
    muted: '#6f5a50',
    border: 'rgba(86, 39, 25, 0.16)',
    navBg: '#7f2f1f',
    navText: '#000000',
    navShadow: 'rgba(86, 39, 25, 0.12)',
    musicAccent: '#7f2f1f',
    musicSurface: 'rgba(251, 255, 249, 0.9)',
    heroTitle: '#7f2f1f',
    heroAmpersand: '#e34745',
    footerBg: '#7f2f1f',
    footerText: '#000000',
  },
}

export function getThemeStyle(themeId: ThemeId) {
  const theme = themeRegistry[themeId]

  return {
    '--color-page-bg': theme.pageBg,
    '--color-surface': theme.surface,
    '--color-surface-alt': theme.surfaceAlt,
    '--color-primary': theme.primary,
    '--color-primary-contrast': theme.primaryContrast,
    '--color-accent': theme.accent,
    '--color-text': theme.text,
    '--color-muted': theme.muted,
    '--color-border': theme.border,
    '--color-nav-bg': theme.navBg,
    '--color-nav-text': theme.navText,
    '--color-nav-shadow': theme.navShadow,
    '--color-music-accent': theme.musicAccent,
    '--color-music-surface': theme.musicSurface,
    '--color-hero-title': theme.heroTitle,
    '--color-hero-ampersand': theme.heroAmpersand,
    '--color-footer-bg': theme.footerBg,
    '--color-footer-text': theme.footerText,
  } as CSSProperties
}
