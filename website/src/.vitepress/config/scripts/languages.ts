export function simpleLangName(code: string) {
  if (code === 'all')
    return 'All'

  const namesInEnglish = new Intl.DisplayNames(['en'], { type: 'language' })
  return capitalize(namesInEnglish.of(code)!, 'en')
}

export function langName(code: string) {
  if (code === 'all')
    return 'All'

  const namesInEnglish = new Intl.DisplayNames(['en'], { type: 'language' })
  const namesInNative = new Intl.DisplayNames([code], { type: 'language' })
  return `${capitalize(namesInEnglish.of(code)!, 'en')} - ${capitalize(namesInNative.of(code)!, code)}`
}

function capitalize(string: string, locale: string) {
  return string.charAt(0).toLocaleUpperCase(locale) + string.substring(1)
}

/**
 * Maps a source file to the path it is served at. Used by `rewrites` and anything that
 * works with source paths (e.g. the content loader), so the rule lives in one place.
 *
 *   docs/guides/home/en.md   → docs/guides/home.md       (pages get their own folder)
 *   docs/guides/home/sq.md   → sq/docs/guides/home.md
 *   privacy/index.sq.md      → sq/privacy/index.md       (section pages keep index.md)
 */
export function localizePath(id: string) {
  let m = id.match(/^(.+)\/([a-z]{2})\.md$/)
  if (m)
    return m[2] === 'en' ? `${m[1]}.md` : `${m[2]}/${m[1]}.md`

  m = id.match(/^(.+)\.([a-z]{2})\.md$/)
  if (m)
    return `${m[2]}/${m[1]}.md`

  return id
}
