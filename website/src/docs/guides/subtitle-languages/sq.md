---
title: Gjuhët e titrave
titleTemplate: Udhëzuesit
description: Si të konfigurosh gjuhët e preferuara të titrave.
---

# Si të konfigurosh gjuhët e preferuara të titrave

Shembull:

`en.*,.*-orig`

Përveç zgjedhjes së gjuhës përmes etiketave të sugjeruara, mund t'i shkruash vetë kodet e gjuhëve. Për të shkruar disa gjuhë, ndaji kodet me `,`.
Çdo etiketë e sugjeruar përfaqëson një kod gjuhe të caktuar që yt-dlp e kupton.

Gjuhët e titrave për t'u shkarkuar mund të jenë regex. P.sh. "en.*" është një model regex që përputhet me "en" të ndjekur nga 0 ose më shumë karaktere çfarëdo. Mund t'i vendosësh kodit të gjuhës një "-" përpara për ta përjashtuar nga gjuhët e kërkuara, p.sh. -live_chat

## Ku vendoset

- Parazgjedhja: <nav to="processing"> `Subtitle languages` (vlera e parazgjedhur është `.*-orig`, që do të thotë gjuha origjinale e videos)
- Për çdo shkarkim: opsioni `Subtitles` te skeda e videos në [Kartën e shkarkimit](/sq/docs/guides/download-card)

## Vlera të dobishme

| Vlera | Kuptimi |
| --- | --- |
| `en` | Anglisht |
| `en.*` | Anglisht dhe të gjitha variantet e saj si `en-US`, `en-GB` |
| `.*-orig` | Gjuha origjinale e videos, kur ekzistojnë titra automatike |
| `all` | Çdo gjuhë e disponueshme |
| `all,-live_chat` | Gjithçka përveç bisedës live |
| `es,pt.*` | Spanjisht dhe çdo variant i portugalishtes |
| `sq` | Shqip |

## Opsionet e titrave

Te <nav to="processing"> nën **Video**:

| Cilësimi | Kuptimi |
| --- | --- |
| `Embed subtitles` | Vendos rrjedhën e titrave brenda skedarit të videos. |
| `Save subtitles` | Shkruaj titrat si skedar më vete pranë videos. |
| `Save automatic subtitles` | Njësoj, për titrat e gjeneruara ose të përkthyera automatikisht. |
| `Delete subtitle files after embedding` | Kur ruan dhe ngulit njëkohësisht, fshi skedarët pasi të jenë ngulitur. |
| `Subtitle format` | Konverto titrat në `srt`, `ass`, `lrc` ose `vtt`. |

Ngulitja e titrave si parazgjedhje nuk ngulit titrat automatike. Aktivizo së bashku `Save automatic subtitles` dhe `Embed subtitles`.

Mund t'i **djegësh** titrat edhe në figurën e videos nga karta e shkarkimit. Kjo e rikodon videon, dhe shpejtësia varet nga `Internal Plugin FFmpeg Preset` te cilësimet e përpunimit (preset-et më të ngadalta japin skedarë më të vegjël).

::: tip Shënim
Titrat ruhen ose nguliten vetëm kur faqja e internetit i ka. Për titrat automatike, YouTube gjeneron shumë gjuhë të përkthyera, ndaj zgjidh vetëm ato që të duhen, përndryshe shkarkimi mund të ngadalësohet ose të dështojë për shkak të kufizimit të kërkesave.
:::
