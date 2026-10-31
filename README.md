<p align="center">
	<br>
	<a href="https://ytdlnis.org">
		<img src="./.github/assets/logo.png" width="90"/>
	</a>
</p>

<h1 align="center">YTDLnis <a href="#">Website</a></h1>
<h3 align="center">Android Video/Audio Downloader app using yt-dlp</h3>

<p align="center">
	<a title="Netlify deployment" href="https://app.netlify.com/sites/ytdlniswebsite/deploys">
		<img src="https://api.netlify.com/api/v1/badges/95d9e2f8-42ae-4e40-8c99-82b870c51e1a/deploy-status">
	</a>
	<br>
	<br>
</p>

<h3 align="center">Contributing</h3>

<p align="center">
	<a href="./CODE_OF_CONDUCT.md">Code of conduct</a>
	·
	<a href="./CONTRIBUTING.md">Contributing guide</a>
	·
	<a href="https://ytdlnis.org/sandbox/style-guide/">Project style guide</a>
</p>

<p align="center">Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

## 🌍 Translating the website

The website can be read in several languages (for example English and [Shqip](https://ytdlnis.org/sq/)). You can add your own language or improve an existing translation with a pull request. To translate the **app** itself, use [Weblate](https://hosted.weblate.org/engage/ytdlnis/) instead.

The examples below add German (`de`). Use your language's two-letter [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) instead. See the [Contributing guide](./CONTRIBUTING.md) for how to set up and run the site locally.

### How pages are organized

Every translation sits next to the English page it translates. All paths are inside `website/src`:

```
docs/guides/
  home/
    en.md          → /docs/guides/home        (English)
    sq.md          → /sq/docs/guides/home     (Albanian)
    de.md          → /de/docs/guides/home     (your translation)
  settings/
    index.md       → /docs/guides/settings/   (section pages use index.md)
    index.sq.md    → /sq/docs/guides/settings/
    index.de.md    → /de/docs/guides/settings/
```

- If a page is a folder with `en.md`, add `de.md` next to it.
- If a page is an `index.md` (the home page, section pages, `privacy/`, `yt-dlp/` and others), add `index.de.md` next to it.
- Pages you haven't translated yet don't need a file.

### Adding a new language

1. **Translate the pages.** Copy `en.md` to `de.md` (or `index.md` to `index.de.md`) and translate the text, including the `title` and `description` at the top of the file.
2. **Register the language** under `locales` in `website/src/.vitepress/config.ts`, the same way `sq` is:
   ```ts
   de: {
     label: 'Deutsch',
     lang: 'de',
     description: '…',
     themeConfig: themeConfigDe,
   },
   ```
3. **Translate the navigation and theme labels:**
   - `config/navigation/navbar.ts`: add a `navDe` list, copying `navSq`.
   - `config/navigation/sidebar.ts`: add a `de` table of labels and export `sidebarDe = sidebarFor('/de', de)`.
   - `config/themeConfig.ts`: add `themeConfigDe` (footer, "edit this page", outline, previous/next labels), copying `themeConfigSq`. Add a `de` entry under `search.options.locales` to translate the search box.
4. **Translate the component text** by adding a `de` block to `website/src/.vitepress/theme/i18n.ts`. It must have the same keys as `en`, and TypeScript flags any you miss.
5. **Localize the release dates** by adding `import 'moment/locale/de'` next to the existing `sq` import in `theme/components/ReleaseDate.vue`.
6. Run `pnpm build` from the `website` folder. The build fails if any link points to a page that doesn't exist.

### Translation guidelines

- **Links** to other pages need your language prefix: `[Cookies](/de/docs/guides/cookies)`, not `/docs/guides/cookies`. Otherwise readers are sent back to the English page.
- **Headings that other pages link to** must keep their English ID, so links like `#cutting` keep working. Add it after the translated heading:
  ```md
  ## Schneiden {#cutting}
  ```
- **Option names in backticks** (for example `` `Use cookies` ``) and `<nav to="…">` shortcodes are left as they are.
- **News posts and changelogs** stay in English. Translate only their index pages.

<h3 align="center">License</h3>

## 📄 License

[GNU GPL v3.0](https://github.com/deniscerri/ytdlnis/blob/main/LICENSE)

⚠️  Warning <br>

Except for the source code licensed under the GPLv3 license, all other parties are prohibited from using the 'YTDLnis' name as a downloader app, and the same is true for its derivatives. Derivatives include but are not limited to forks and unofficial builds.

<h3 align="center">Credits</h3>

<p align="center">Thank you to all the people who have already contributed!</p>
<p align="right">
	<a href="https://github.com/deniscerri/ytdlnis/graphs/contributors">
		<img src="https://contrib.rocks/image?repo=deniscerri/ytdlnis_website" width="300"/>
	</a>
</p>
