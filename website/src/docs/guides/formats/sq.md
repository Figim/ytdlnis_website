---
title: Formatet
titleTemplate: Udhëzuesit
description: Si i zgjedh YTDLnis formatet e shkarkimit dhe si të lejon t'i zgjedhësh vetë.
---

# Formatet

Kur hap [Kartën e shkarkimit](/sq/docs/guides/download-card), aplikacioni merr formatet e disponueshme për atë artikull dhe zgjedh automatikisht një sipas preferencave të tua. Mund të prekësh kartën e formatit te skeda **Audio** ose **Video** për të zgjedhur një tjetër.

## Leximi i një karte formati

Çdo format tregon:

- **Kontejnerin**, si `mp4`, `webm`, `m4a` ose `opus`
- **Cilësinë / rezolucionin**, si `1080p` ose `128kbps`
- **Kodekun** dhe **madhësinë e skedarit** si etiketa
- **ID-në e formatit**, numrin që yt-dlp përdor për ta identifikuar

## Zgjedhja e një formati

Paneli i zgjedhjes së formatit liston çdo format, me disa mënyra për t'i organizuar.

- **Format order** e rendit listën sipas `File size`, `Container`, `Codec` ose `ID`.
- **Format filter** shfaq `All` formatet, vetëm ato `Suggested`, ose `Smallest format (per resolution)`.

Këto vendosen te <nav to="update"> nën kategorinë **Format**.

## Formatet e përgjithshme

Nëse aplikacioni nuk mund t'i marrë formatet, ose kur përdor `Don't fetch data`, ai kalon te formatet e përgjithshme që nuk lidhen me një faqe të caktuar:

- Video: Cilësia më e mirë, ~2160p, ~1440p, ~1080p, ~720p, ~480p, ~360p, ~240p, Cilësia më e dobët
- Audio: Cilësia më e mirë, ~192kbps, ~160kbps, ~128kbps, ~96kbps, ~64kbps, Cilësia më e dobët

Aplikacioni i përkthen këto në një përzgjedhës formati të yt-dlp, ndaj cilësia reale do të jetë më e afërta e disponueshme për atë faqe.

## Si e zgjedh aplikacioni automatikisht një format

Formati i parazgjedhur zgjidhet me këto preferenca te <nav to="processing">:

| Cilësimi | Efekti |
| --- | --- |
| **Video quality** | Rezolucioni i synuar, nga më i miri te më i dobëti. |
| **Preferred video codec** | AV1, VP9, AVC (H264) ose HEVC (H265). |
| **Preferred audio codec** | M4A ose OPUS. |
| **Preferred audio language** | Zgjedh pistën audio në atë gjuhë kur artikulli ka disa. |
| **Preferred format ID** | Nëse artikulli ka një format me këtë ID, ai zgjidhet. Veçmas për audion dhe videon. |
| **Preferred Format Size** | Prefero formatin `Smallest` ose `Largest`. Veçmas për videon dhe audion. |
| **Prefer DRC audio** | Prefero audion me kompresim të gamës dinamike. |

### Rendi i rëndësisë së formatit {#format-importance-order}

Te <nav to="advanced"> mund të aktivizosh `Use format importance ordering` dhe të vendosësh në çfarë rendi i peshon aplikacioni vetitë e një formati. Ky rend përdoret vetëm kur aplikacioni merr formatet te karta e shkarkimit dhe zgjedh automatikisht një.

- **Video**: ID-ja e preferuar e formatit, cilësia e videos, kodeku, video pa audio, kontejneri, madhësia e skedarit
- **Audio**: ID-ja e preferuar e formatit, gjuha, kodeku, kontejneri, madhësia e skedarit

Tërhiq elementet për të ndryshuar se çfarë ka më shumë rëndësi për ty.

## Burimi i formateve

Për YouTube, formatet mund të merren me `yt-dlp` ose me `NewPipe`. Ndryshoje me `Formats source` te <nav to="general">.

## Përditëso formatet

`Update formats` te <nav to="update"> i merr formatet sapo shfaqet karta e shkarkimit. Nëse hap kartën për një artikull pa të dhëna formati, mund të prekësh edhe butonin e përditësimit te karta për t'i marrë.

## Artikujt vetëm me audio

Disa artikuj përmbajnë vetëm formate audio. Aplikacioni ta tregon këtë te karta dhe të lejon të zgjedhësh vetëm formate audio.

## Kontejneri kundrejt formatit

Cilësimi i **kontejnerit** nuk është i njëjtë me zgjedhjen e një formati. Formati është ajo që ekziston në faqen e internetit. Kontejneri e konverton formatin e shkarkuar në një lloj tjetër skedari pasi shkarkimi përfundon. Konvertimi i një formati me cilësi të ulët në një kontejner tjetër nuk e përmirëson cilësinë.
