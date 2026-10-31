import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Changelogs',
    link: '/changelogs/',
  },
  {
    text: 'Docs',
    link: '/docs/guides/getting-started',
    activeMatch: '/docs/',
  },
  {
    text: 'News',
    link: '/news/',
    activeMatch: '/news/',
  },
]

export const navSq: DefaultTheme.NavItem[] = [
  {
    text: 'Ndryshimet',
    link: '/sq/changelogs/',
  },
  {
    text: 'Dokumentacioni',
    link: '/sq/docs/guides/getting-started',
    activeMatch: '/sq/docs/',
  },
  {
    text: 'Lajme',
    link: '/sq/news/',
    activeMatch: '/sq/news/',
  },
]

export default nav
