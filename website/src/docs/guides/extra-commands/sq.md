---
title: Komandat shtesë
titleTemplate: Udhëzuesit
description: Si të përdorësh komandat shtesë.
---

# Si të përdorësh Komandat shtesë

Komandat shtesë u ndihmojnë përdoruesve të avancuar të ndryshojnë një artikull shkarkimi duke futur komanda yt-dlp të papërpunuara, të cilat i shtohen në fund komandës që gjeneron vetë aplikacioni përmes ndërfaqes. Edhe pse ndërfaqja grafike mbulon shumicën e funksioneve, ndonjëherë duhet të jesh më specifik dhe komandat shtesë të lejojnë ta bësh këtë pa kaluar plotësisht në modalitetin Terminal.

Në ekranin e Komandave shtesë ke qasje te [shabllonet e komandave](/sq/docs/guides/command-templates) dhe shkurtoret për të ndërtuar komandën.

## Ku gjenden

- Për çdo shkarkim: `Add Extra Commands` te seksioni Adjust i skedës audio ose video në [Kartën e shkarkimit](/sq/docs/guides/download-card).
- Për të gjitha shkarkimet: kur krijon një [shabllon komande](/sq/docs/guides/command-templates), shënoje si **komandë shtesë**. Ai do t'i shtohet çdo shkarkimi audio dhe video.

Mund ta çaktivizosh përdorimin e komandave shtesë në çdo kohë me `Add extra commands` te <nav to="processing">.

## Shembuj

| Qëllimi | Komanda shtesë |
| --- | --- |
| Kufizo shkarkimin te videot më të shkurtra se 10 minuta | `--match-filters "duration < 600"` |
| Mos vazhdo pas një artikulli të dështuar në një listë luajtjeje | `--abort-on-error` |
| Shkruaj përshkrimin dhe info json | `--write-description --write-info-json` |
| Përdor një argument specifik të extractor-it | `--extractor-args "youtube:player_client=web"` |

::: tip Shënim
Komandat shtesë shtohen në fund, ndaj mund t'i mbishkruajnë opsionet e vendosura nga ndërfaqja. Ki kujdes me opsionet që ndryshojnë vendndodhjen e daljes ose formatin, pasi mund të bien ndesh me atë që pret aplikacioni.
:::
