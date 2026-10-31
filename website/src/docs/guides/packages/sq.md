---
title: Paketat
titleTemplate: Udhëzuesit
description: Përmirëso dhe kthe në version të vjetër Python, FFmpeg, JS runtimes dhe aria2c pa e përditësuar aplikacionin.
---

# Paketat

Paketat janë aplikacione ndihmëse që YTDLnis përdor për të ndihmuar me komandat e yt-dlp. Disa prej tyre vijnë tashmë të përfshira në aplikacion, por mund të instalosh versione më të reja (ose më të vjetra) që janë publikuar, pa pasur nevojë ta përditësosh aplikacionin.

::: tip Si ta hapësh
Shko te <nav to="packages">
:::

## Paketat e disponueshme

| Paketa | Për çfarë përdoret |
| --- | --- |
| **Python** | Ekzekuton yt-dlp. |
| **FFmpeg** | Bashkimi, konvertimi, ngulitja, prerja, qethja e kuadrit dhe gjithçka që përpunon median pas shkarkimit. |
| **JS runtimes** (NodeJS, Deno, QuickJS) | Nevojiten nga yt-dlp për të zgjidhur disa sfida JavaScript, për shembull në YouTube. Përdoren edhe nga ofruesi i [PO token](/sq/docs/guides/youtube#po-tokens). |
| **aria2c** | Shkarkuesi alternativ, që aktivizohet me `aria2c` te cilësimet e shkarkimit. |

Çdo paketë tregon nëse është `Bundled`, `Installed` ose `Not installed`, dhe cili version është në përdorim.

## Instalimi i një pakete

Hap një paketë për të parë versionet e publikuara dhe ndryshimet e tyre. Zgjidh një version dhe prek për ta instaluar. Paketa shkarkohet dhe instalohet nga aplikacioni. Ajo zëvendëson paketën e përfshirë për sa kohë është e instaluar, dhe mund ta heqësh për t'u kthyer te versioni i përfshirë.

Nëse e ke tashmë zip-in e paketës në pajisje, mund ta importosh prej andej.

Paketat publikohen në repository-n [ytdlnis-packages](https://github.com/deniscerri/ytdlnis-packages/). Për më shumë informacion shih README-në e atij repository-je.

::: tip Kur të përmirësosh
- Qethja e kuadrit e videove VP9 dhe AV1 mund të kërkojë një FFmpeg më të lartë, si 7.1.1.
- Nëse FFmpeg mbyllet papritur ose nuk ekzekutohet në pajisjen tënde, provo një version më të vjetër.
- Nëse YouTube kërkon një JS runtime, instalo një nga JS runtimes.
:::

## Metoda e instalimit të APK

Disa paketa, si edhe vetë aplikacioni, shpërndahen si skedarë APK. Si instalohen vendoset me `APK Installation method` te <nav to="update">: `System` (instaluesi i zakonshëm i Android), `Shizuku`, ose një aplikacion instalues `External` që zgjedh ti. Nëse instalimi i sistemit dështon, zgjidh një metodë tjetër.
