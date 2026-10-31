import type { DefaultTheme } from 'vitepress'

// Sidebar labels per locale, keyed by the English label. Missing keys fall back to English.
const sq: Record<string, string> = {
  'Changelogs': 'Ndryshimet',
  'Frequently Asked Questions': 'Pyetjet më të shpeshta',
  'General': 'Të përgjithshme',
  'Revanced Integration': 'Integrimi me Revanced',
  'Guides': 'Udhëzuesit',
  'Getting started': 'Fillimi',
  'Home': 'Kreu',
  'Share Menu': 'Menyja e ndarjes',
  'Download Card': 'Karta e shkarkimit',
  'Playlists & Multiple Items': 'Lista luajtjeje dhe shumë artikuj',
  'Formats': 'Formatet',
  'Downloads (History)': 'Shkarkimet (Historiku)',
  'Download Queue': 'Radha e shkarkimeve',
  'Observe Sources': 'Vëzhgo burimet',
  'Command Templates': 'Shabllonet e komandave',
  'Filename Templates': 'Shabllonet e emrit të skedarit',
  'Subtitle Languages': 'Gjuhët e titrave',
  'Extra Commands': 'Komandat shtesë',
  'Terminal': 'Terminali',
  'Download Logs': 'Regjistrat e shkarkimeve',
  'Packages': 'Paketat',
  'Settings': 'Cilësimet',
  'Folders': 'Dosjet',
  'Downloads': 'Shkarkimet',
  'Processing': 'Përpunimi',
  'Updating': 'Përditësimi',
  'Advanced': 'Të avancuara',
  'Backups': 'Kopjet rezervë',
  'Troubleshooting': 'Zgjidhja e problemeve',
  'Common issues': 'Problemet e zakonshme',
  'Diagnosis': 'Diagnostikimi',
}

function sidebarFor(prefix = '', labels: Record<string, string> = {}): DefaultTheme.SidebarMulti {
  const items = defaultSidebar(prefix, labels)
  return Object.fromEntries(
    ['/docs/', '/yt-dlp/', '/changelogs/', '/news/', '/sandbox/'].map(path => [`${prefix}${path}`, items]),
  )
}

function defaultSidebar(p: string, labels: Record<string, string>): DefaultTheme.SidebarItem[] {
  const t = (text: string) => labels[text] ?? text

  return [
    {
      items: [
        {
          text: 'YT-DLP',
          link: `${p}/yt-dlp/`,
        },
        {
          text: t('Changelogs'),
          link: `${p}/changelogs/`,
        },
      ],
    },
    {
      text: t('Frequently Asked Questions'),
      items: [
        { text: t('General'), link: `${p}/docs/faq/general` },
        { text: t('Revanced Integration'), link: `${p}/docs/faq/revanced` },
      ],
    },
    {
      text: t('Guides'),
      items: [
        {
          text: t('Getting started'),
          link: `${p}/docs/guides/getting-started`,
        },
        { text: t('Home'), link: `${p}/docs/guides/home` },
        { text: t('Share Menu'), link: `${p}/docs/guides/share-menu` },
        { text: t('Download Card'), link: `${p}/docs/guides/download-card` },
        { text: t('Playlists & Multiple Items'), link: `${p}/docs/guides/playlists` },
        { text: t('Formats'), link: `${p}/docs/guides/formats` },
        { text: t('Downloads (History)'), link: `${p}/docs/guides/downloads` },
        { text: t('Download Queue'), link: `${p}/docs/guides/download-queue` },
        { text: t('Observe Sources'), link: `${p}/docs/guides/observe-sources` },
        { text: t('Command Templates'), link: `${p}/docs/guides/command-templates` },
        { text: t('Filename Templates'), link: `${p}/docs/guides/filename-templates` },
        { text: 'SponsorBlock', link: `${p}/docs/guides/sponsorblock` },
        { text: t('Subtitle Languages'), link: `${p}/docs/guides/subtitle-languages` },
        { text: t('Extra Commands'), link: `${p}/docs/guides/extra-commands` },
        { text: 'Cookies', link: `${p}/docs/guides/cookies` },
        { text: 'YouTube', link: `${p}/docs/guides/youtube` },
        { text: t('Terminal'), link: `${p}/docs/guides/terminal` },
        { text: t('Download Logs'), link: `${p}/docs/guides/logs` },
        { text: t('Packages'), link: `${p}/docs/guides/packages` },
        {
          text: t('Settings'),
          link: `${p}/docs/guides/settings/`,
          collapsed: true,
          items: [
            { text: t('General'), link: `${p}/docs/guides/settings/general` },
            { text: t('Folders'), link: `${p}/docs/guides/settings/folders` },
            { text: t('Downloads'), link: `${p}/docs/guides/settings/downloads` },
            { text: t('Processing'), link: `${p}/docs/guides/settings/processing` },
            { text: t('Updating'), link: `${p}/docs/guides/settings/updating` },
            { text: t('Advanced'), link: `${p}/docs/guides/settings/advanced/` },
          ],
        },
        { text: t('Backups'), link: `${p}/docs/guides/backups` },
        {
          text: t('Troubleshooting'),
          link: `${p}/docs/guides/troubleshooting/`,
          collapsed: true,
          items: [
            {
              text: t('Common issues'),
              link: `${p}/docs/guides/troubleshooting/common-issues`,
            },
            {
              text: t('Diagnosis'),
              link: `${p}/docs/guides/troubleshooting/diagnosis`,
            },
          ],
        },
      ],
    },
  ]
}

export const sidebarSq = sidebarFor('/sq', sq)

export default sidebarFor()
