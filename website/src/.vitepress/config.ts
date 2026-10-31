import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vitepress'
import ElementPlus from 'unplugin-element-plus/vite'

import markdownConfig from './config/markdownConfig'
import { localizePath } from './config/scripts/languages'

// For use with loading Markdown plugins
import themeConfig, { themeConfigSq } from './config/themeConfig'

// Theme related config
import headConfig from './config/headConfig'

// Provides how to generate Meta head tags

import generateMeta from './config/hooks/generateMeta'

// Enhanced meta generation
import generateFeed from './config/hooks/generateFeed'

// Allows generation of RSS feed
import generateOgImages from './config/hooks/generateOgImages'

const title = 'YTDLnis'
const description = 'Full Featured Downloader using yt-dlp on your Android Device.'

const env = loadEnv('', process.cwd())
const hostname: string = env.VITE_HOSTNAME || 'http://localhost:4173'

export default defineConfig({
  outDir: '../dist',
  lastUpdated: true,
  cleanUrls: true,
  title,
  description,
  sitemap: {
    hostname,
  },
  head: headConfig,
  markdown: markdownConfig,
  themeConfig,
  rewrites: localizePath,
  locales: {
    root: { label: 'English', lang: 'en' },
    sq: {
      label: 'Shqip',
      lang: 'sq',
      description: 'Shkarkues i plotë që përdor yt-dlp në pajisjen tënde Android.',
      themeConfig: themeConfigSq,
    },
  },
  transformHead: async context => generateMeta(context, hostname),
  buildEnd: async (context) => {
    generateFeed(context, hostname)
    generateOgImages(context)
  },
  vite: {
    resolve: {
      alias: [
        {
          // Used to show the release version on navbar.
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomNavBarMenu.vue', import.meta.url),
          ),
        },
        {
          find: /^.*VPNavScreenMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomNavScreenMenu.vue', import.meta.url),
          ),
        },
        {
          find: /^.*VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomSwitchAppearance.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [ElementPlus({})],
    ssr: {
      noExternal: ['element-plus'],
    },
  },
})
