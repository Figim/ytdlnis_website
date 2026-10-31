---
title: Radha e shkarkimeve
titleTemplate: Udhëzuesit
description: Ekrani i radhës së shkarkimeve në YTDLnis.
---

# Radha e shkarkimeve

Hape nga skeda **Queue** e shiritit të navigimit, ose nga <nav to="download-queue">. Seksionet janë skeda sipër. Çdo skedë mund të tregojë numrin e artikujve në të, gjë që mund ta çaktivizosh me `Show counts in the download queue screen` te <nav to="general">.

## Në ekzekutim

Këtu do të jenë të gjitha shkarkimet aktive. Mund ta pauzosh / anulosh çdo shkarkim veçmas. Mund t'i pauzosh njëherësh të gjithë artikujt që janë në ekzekutim dhe në radhë, dhe t'i rifillosh më vonë.
Pauza dhe Anulimi në thelb i bëjnë të njëjtën gjë procesit të shkarkimit, por butoni i anulimit e kalon shkarkimin te seksioni i Shkarkimeve të anuluara.

Çdo artikull tregon progresin, shpejtësinë dhe daljen e yt-dlp. Sa artikuj ekzekutohen njëkohësisht vendoset me `Concurrent downloads` te <nav to="downloads">.

## Në radhë

Këtu do të jenë të gjithë artikujt që presin në radhë. Mund t'i rirendisësh duke i tërhequr dhe lëshuar. Mund të zgjedhësh edhe disa artikuj dhe t'i vendosësh në krye ose në fund të radhës. Mund të heqësh artikuj nga radha.

Artikujt qëndrojnë këtu dhe presin nëse ke çaktivizuar `Download over metered networks` dhe nuk je në një lidhje të pamatur, ose nëse ke vendosur një [orar shkarkimi](/sq/docs/guides/settings/downloads#scheduling) dhe jemi jashtë periudhës së lejuar.

## Të planifikuara

Këtu do të jetë çdo shkarkim për të cilin ke konfiguruar një orë të planifikuar. Mund të zgjedhësh t'i shkarkosh menjëherë nëse do, madje edhe në grup. Mund edhe t'i riplanifikosh ose t'i ndryshosh.

## Të anuluara

Të gjithë artikujt që janë anuluar nga përdoruesi. Mund të zgjedhësh t'i rishkarkosh, madje edhe në grup. Rrëshqiti për t'i rishkarkuar ose hequr nëse gjestet e rrëshqitjes janë aktive.

Skedarët e papërfunduar të artikujve të anuluar ruhen që shkarkimi të vazhdojë aty ku mbeti. Mund ta lësh aplikacionin t'i pastrojë automatikisht me `Clean-up leftover downloads` te <nav to="downloads">.

## Me gabime {#errored}

Këtu do të jenë të gjithë artikujt që dështuan të shkarkohen. Mund të shtypësh lehtësisht ikonën e skedarit dhe ajo do të të çojë te skedari i regjistrit që tregon gjithë procesin e shkarkimit dhe gabimin që e bëri të dështonte. Në shumicën e rasteve mund të ketë diçka gabim me extractor-ët e yt-dlp, ose një gabim të përdoruesit. Mund të zgjedhësh ta rishkarkosh artikullin ose ta bësh këtë në grup.
Mund edhe ta rikonfigurosh shkarkimin dhe të ndryshosh gjëra për të rregulluar gabimin që po haste.

Nuk je i sigurt çfarë do të thotë gabimi? Shih [Zgjidhja e problemeve](/sq/docs/guides/troubleshooting/).

## Të ruajtura

Të gjithë artikujt që ke ruajtur për më vonë. Mbaj shtypur butonin e shkarkimit te [Karta e shkarkimit](/sq/docs/guides/download-card) për ta ruajtur një artikull këtu. Mund t'i shkarkosh më vonë një nga një ose të gjithë njëherësh.

## Veprimet e përbashkëta

Në çdo skedë, mbaj shtypur një artikull për të zgjedhur disa, pastaj mund të:

- `Select all`, `Invert selected` ose `Select items between`
- `Copy URLs`
- I zhvendosësh në krye ose në fund (Në radhë)
- Heqësh ose pastrosh zgjedhjen

Menyja e shiritit të veglave ka gjithashtu `Cancel downloads` dhe `Remove all`.

## Njoftimet

Shkarkimet në ekzekutim shfaqin një njoftim me progresin dhe me butonat `Pause` dhe `Cancel`. Kur një shkarkim përfundon, merr një njoftim nga ku mund ta hapësh ose ndash skedarin direkt. Edhe shkarkimet e dështuara të njoftojnë.

::: tip Njoftimet mungojnë
Sigurohu që aplikacioni ka leje për njoftime dhe që optimizimi i baterisë është i çaktivizuar për të. Shih [Zgjidhja e problemeve](/sq/docs/guides/troubleshooting/common-issues).
:::
