import { computed } from 'vue'
import { useData } from 'vitepress'

// Text used inside theme components. Page content lives in the .md files.
// To add a language, add a block below with the same keys (TypeScript flags missing ones).
const en = {
  unsupportedOs: 'Unsupported operating system',
  androidOnly: '<strong>YTDLnis</strong> is an <strong>Android app</strong> only. Use an <strong>Android device</strong> to download and install the app.',
  caution: 'Caution',
  notAffiliated: 'Any app for any operating systems other than Android called <strong>YTDLnis</strong> is not affiliated with this project.',
  moreInfo: 'For more information, read the <a href="/docs/faq/general">General FAQ</a>.',
  stable: 'Stable',
  otherArchitectures: 'Other architectures',
  hideOtherArchitectures: 'Hide other architectures',
  requiresAndroid: 'Requires <strong>Android 7.0</strong> or higher.',
  changelog: 'Changelog',
  viewFullRelease: 'View the full release',
  here: 'here',
  latest: 'Latest',
  noChangelog: 'No changelog provided.',
  readArticle: 'Read article',
  toggleDarkMode: 'Toggle dark mode',
  rssTitle: 'RSS feed for the news archive',
}

const sq: typeof en = {
  unsupportedOs: 'Sistem operativ i pambështetur',
  androidOnly: '<strong>YTDLnis</strong> është vetëm <strong>aplikacion Android</strong>. Përdor një <strong>pajisje Android</strong> për ta shkarkuar dhe instaluar aplikacionin.',
  caution: 'Kujdes',
  notAffiliated: 'Çdo aplikacion për sisteme operative të ndryshme nga Android që quhet <strong>YTDLnis</strong> nuk ka lidhje me këtë projekt.',
  moreInfo: 'Për më shumë informacion, lexo <a href="/sq/docs/faq/general">Pyetjet e përgjithshme</a>.',
  stable: 'E qëndrueshme',
  otherArchitectures: 'Arkitektura të tjera',
  hideOtherArchitectures: 'Fshih arkitekturat e tjera',
  requiresAndroid: 'Kërkon <strong>Android 7.0</strong> ose më të lartë.',
  changelog: 'Ndryshimet',
  viewFullRelease: 'Shiko versionin e plotë',
  here: 'këtu',
  latest: 'Më i fundit',
  noChangelog: 'Nuk ka shënime ndryshimesh.',
  readArticle: 'Lexo artikullin',
  toggleDarkMode: 'Ndrysho pamjen e errët',
  rssTitle: 'RSS për arkivin e lajmeve',
}

const strings: Record<string, typeof en> = { en, sq }

/** Strings for the current page language, falling back to English. */
export function useStrings() {
  const { lang } = useData()
  return computed(() => strings[lang.value] ?? en)
}
