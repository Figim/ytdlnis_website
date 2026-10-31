---
title: Shabllonet e komandave
titleTemplate: Udhëzuesit
description: Si të konfigurosh Shabllonet e komandave në YTDLnis.
---

# Si të ekzekutosh komanda yt-dlp nga aplikacioni

Shabllonet e komandave të lejojnë të ruash [opsionet e tua të yt-dlp](https://github.com/yt-dlp/yt-dlp#usage-and-options) dhe t'i ripërdorësh për çdo shkarkim. I zgjedh te skeda **Komandë** e [Kartës së shkarkimit](/sq/docs/guides/download-card).

::: tip Si të krijosh një shabllon komande
1. Shko te <nav to="commandtemplates">
2. Prek butonin `+`
3. Jepi një titull dhe shkruaj argumentet e yt-dlp, për shembull `-x --audio-format mp3 --embed-thumbnail`
4. Shtyp `Create template`
:::

Në një shabllon nuk shkruan URL-në ose fjalën `yt-dlp`. Aplikacioni e shton vetë lidhjen dhe merret me vendndodhjen e daljes.

## Përdorimi i një shablloni

- Te skeda **Komandë** e kartës së shkarkimit zgjidh një ose më shumë shabllone nga lista. Nëse zgjedh disa, argumentet e tyre bashkohen.
- Te [Terminali](/sq/docs/guides/terminal), zgjidh një nga menyja për ta futur.
- Si [Komandë shtesë](/sq/docs/guides/extra-commands) në një shkarkim audio ose video.

::: tip Shënim
Te lloji i shkarkimit Komandë, cilësimet e përpunimit (ngulitja e miniaturës, SponsorBlock, kontejnerët e kështu me radhë) nuk zbatohen, sepse ti kontrollon gjithçka me komandën tënde. Cilësimet kryesore si ato të shkarkimit, cookies dhe rrjetit vazhdojnë të zbatohen.
:::

Dosja e parazgjedhur për këto shkarkime është `Custom command folder` e vendosur te <nav to="folders">.

## Menaxhimi i shablloneve

- **Ndrysho** ose **fshi** një shabllon duke e prekur. Nëse gjestet e rrëshqitjes janë aktive për shabllonet, mund t'i rrëshqitësh për të vepruar mbi to.
- **Kërko** në shabllonet e tua nga shiriti i veglave.

### Opsionet e shabllonit

Kur krijon ose ndryshon një shabllon mund të vendosësh:

| Opsioni | Çfarë bën |
| --- | --- |
| **Title** dhe **Content** | Emri i shabllonit dhe argumentet e yt-dlp. |
| **Preferred command template** | Zgjidhet si parazgjedhje te skeda Komandë e kartës së shkarkimit. |
| **Extra command** | Ia shton shabllonin çdo shkarkimi audio dhe / ose video. Mund të zgjedhësh `Audio`, `Video` ose të dyja. |
| **Data fetching** | E shton shabllonin kur aplikacioni merr të dhënat. Kërkon që `Data fetching extra command` të jetë aktive te <nav to="advanced">. |
| **URL regex** | Përdore shabllonin (si komandë shtesë) vetëm për lidhjet që përputhen me një nga këto shprehje të rregullta. Për shembull `youtube\.com` e kufizon te lidhjet e YouTube. |
| **Shortcuts** | Fut shpejt shkurtoret e tua te përmbajtja. |

## Shablloni i preferuar i komandës

Kur kjo aktivizohet, ky shabllon komande do të zgjidhet si parazgjedhje kur hap kartën e shkarkimit te skeda e komandës. Vendose nga opsionet e shabllonit.

Vendos gjithashtu `Preferred download type` në `Command` te <nav to="downloads"> nëse do që karta të hapet në atë skedë.

## Komanda shtesë

Kur kjo aktivizohet, çdo shkarkimi do t'i shtohet kjo komandë bashkë me konfigurimin e vet. Shih [Komandat shtesë](/sq/docs/guides/extra-commands).

## Komanda shtesë gjatë marrjes së të dhënave (e avancuar)

Kjo nuk është e dukshme si parazgjedhje, por mund ta aktivizosh te cilësimet e avancuara. Në thelb aplikacioni e shton këtë shabllon komande gjatë procesit të marrjes së të dhënave. E dobishme në disa raste për përdoruesit e avancuar, pasi marrja e të dhënave bëhet nga aplikacioni dhe nuk mund të konfigurohet nga përdoruesi.

## Shkurtoret

Shkurtoret janë pjesë të vogla kodi që mund t'i përdorësh për të ndërtuar një shabllon komande.

Krijoji nga butoni i shkurtoreve kudo që shfaqet, për shembull `--embed-metadata` ose `--sponsorblock-remove all`. Pastaj mund t'i prekësh për t'i futur në fushën e tekstit të komandës në vend që ta shkruash gjithçka sërish.

Kur krijon një shabllon komande / shkurtore, mund t'i përdorësh kur:
- përpiqesh të ndryshosh shabllonin te skeda e komandës në kartën e shkarkimit
- përpiqesh t'i shtosh një komandë shtesë një shkarkimi video/audio
- përpiqesh të shkruash një komandë terminali

## Eksporto në clipboard / Importo shabllone

Mund ta përdorësh këtë funksion për t'i eksportuar të gjitha shabllonet e komandave në clipboard si një objekt json.
Mund ta ndash këtë objekt me këdo që ka YTDLnis të instaluar. Ata thjesht duhet ta kopjojnë në clipboard dhe të shtypin importo shabllonet. E thjeshtë.

Shabllonet dhe shkurtoret janë gjithashtu pjesë e [kopjeve rezervë](/sq/docs/guides/backups).
