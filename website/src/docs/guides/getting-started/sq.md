---
title: Fillimi
titleTemplate: Udhëzuesit
description: Informacion thelbësor për të të ndihmuar të nisësh me YTDLnis.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Fillimi

Informacion thelbësor për të të ndihmuar të nisësh me YTDLnis.

**YTDLnis** është një shkarkues falas dhe me burim të hapur videosh dhe audiosh për Android 7.0 e lart. Është një ndërfaqe grafike për [yt-dlp](/sq/yt-dlp/), ndaj mund të shkarkojë nga [më shumë se 1000 faqe interneti](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md).

## Udhëzuesi i instalimit

### Shkarkimi i YTDLnis

1. Vizito faqen tonë të [shkarkimit](/sq/download) për të marrë versionin më të fundit të **YTDLnis**.
2. Pasi të përfundojë shkarkimi, hap skedarin `.apk`.
3. Vazhdo me procesin e instalimit.

- Faqja e shkarkimit sugjeron versionin e duhur për pajisjen tënde (arm64-v8a, ose armeabi-v7a për pajisjet e vjetra 32-bit). Nëse je në PC, sugjeron arm64. Për një emulator ose [WSA](https://learn.microsoft.com/en-us/windows/android/wsa/) përdor butonin `Arkitektura të tjera` për të zgjedhur versionin x86_64.
- Aplikacioni gjendet edhe në [F-Droid](https://f-droid.org/en/packages/com.deniscerri.ytdl), në [repository-n IzzyOnDroid](https://apt.izzysoft.de/packages/com.deniscerri.ytdl) dhe në [Uptodown](https://ytdlnis.en.uptodown.com/android/download).

::: warning Beso vetëm burimet zyrtare
Burimet e vetme të besueshme të YTDLnis janë lidhjet më sipër, [repository-ja në GitHub](https://github.com/deniscerri/ytdlnis) dhe kjo faqe interneti. Aplikacionet që pretendojnë të jenë "YTDLnis për iOS" ose që gjenden diku tjetër nuk janë tonat.
:::

### Lejet

Në hapjen e parë aplikacioni do të kërkojë leje për të shkruar skedarë në pajisjen tënde, që të mund t'i ruajë shkarkimet. Nëse do të shkarkosh në dosje që Android i kufizon si parazgjedhje, aktivizo `Allow access to all directories` te <nav to="folders">.

Nëse shkarkimet ndalen kur ekrani fiket, çaktivizo optimizimin e baterisë për aplikacionin. Mund ta bësh nga <nav to="general"> duke shtypur `Ignore battery optimization`.

## Shkarkimi yt i parë

Ka tre mënyra të lehta për të nisur një shkarkim:

1. **Nga ekrani kryesor**: shkruaj një term kërkimi ose ngjit një lidhje te shiriti i kërkimit dhe shtyp enter.
2. **Nga menyja e ndarjes**: në një aplikacion tjetër (shfletues, YouTube, TikTok etj.) ndaje lidhjen te **YTDLnis**. Një kartë shfaqet menjëherë sipër aplikacionit ku je. [Mëso më shumë](/sq/docs/guides/share-menu).
3. **Nga clipboard-i**: kopjo një lidhje dhe hap aplikacionin. Në ekranin kryesor do të shfaqet një buton për ta përpunuar. [Mëso më shumë](/sq/docs/guides/home).

Pasi lidhja të përpunohet, merr një kartë ku zgjedh mes **Audio**, **Video** ose **Komandë**, rregullon çfarë të duhet dhe shtyp **Shkarko**. Shih udhëzuesin [Karta e shkarkimit](/sq/docs/guides/download-card) për gjithçka që mund të bëjë.

Mund ta ndjekësh progresin te ekrani [Radha e shkarkimeve](/sq/docs/guides/download-queue) ose nga njoftimi. Kur një shkarkim përfundon, ai shfaqet në listën e [Shkarkimeve](/sq/docs/guides/downloads), ku mund ta hapësh, ndash ose fshish skedarin.

## Ku ndodhet çdo gjë?

Shiriti i navigimit poshtë ka katër seksione:

| Seksioni | Çfarë është |
| --- | --- |
| **Home** | Kërko, ngjit lidhje dhe shiko rezultatet. [Udhëzuesi](/sq/docs/guides/home) |
| **Downloads** | Historiku i gjithçkaje që ke shkarkuar. [Udhëzuesi](/sq/docs/guides/downloads) |
| **Queue** | Shkarkimet në ekzekutim, në radhë, të planifikuara, të anuluara, me gabime dhe të ruajtura. [Udhëzuesi](/sq/docs/guides/download-queue) |
| **More** | Terminali, regjistrat, shabllonet e komandave, cookies, vëzhgimi i burimeve dhe cilësimet. |

Mund t'i rirendisësh, t'u ndryshosh emërtimet dhe të zgjedhësh me cilin ekran hapet aplikacioni te <nav to="general">.

## Mbaje yt-dlp të përditësuar

Faqet e internetit ndryshojnë vazhdimisht dhe yt-dlp duhet t'i ndjekë. Është ide e mirë t'u hedhësh një sy cilësimeve të përditësimit, ta përditësosh yt-dlp dhe ta mbash të aktivizuar përditësimin automatik. Në disa vende yt-dlp nuk përditësohet automatikisht, ndaj aplikacioni mund të mos shkarkojë siç duhet menjëherë. Përditëso yt-dlp, pastaj provo sërish. [Mëso më shumë](/sq/docs/guides/settings/updating).

## Çfarë më pas?

- Mëso si të konfigurosh një shkarkim te [Karta e shkarkimit](/sq/docs/guides/download-card).
- Shkarko një listë luajtjeje të tërë te [Lista luajtjeje dhe shumë artikuj](/sq/docs/guides/playlists).
- Automatizo shkarkimin e ngarkimeve të reja me [Vëzhgo burimet](/sq/docs/guides/observe-sources).
- Diçka nuk funksionon? Shih [Zgjidhja e problemeve](/sq/docs/guides/troubleshooting/).
- Përshtate aplikacionin sipas dëshirës te [Cilësimet](/sq/docs/guides/settings/).
