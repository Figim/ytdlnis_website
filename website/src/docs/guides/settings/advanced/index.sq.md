---
title: Cilësimet e avancuara
titleTemplate: Cilësimet - Udhëzuesit
description: Cilësimet e avancuara të YTDLnis.
---

# Cilësimet e avancuara

<nav to="advanced">

Këto cilësime janë për njerëzit që e dinë çfarë po ndryshojnë. Parazgjedhjet funksionojnë për shumicën e përdoruesve.

## YouTube

### Klienti i luajtësit
Zgjidh si cilët klientë të YouTube duhet të veprojë yt-dlp dhe vendos PO tokens për ta. Shih [YouTube](/sq/docs/guides/youtube#player-client).

### Gjenero PO tokens
Krijo token-a manualisht, ose përdor ofruesin automatik. Shih [PO tokens](/sq/docs/guides/youtube#po-tokens).

### Përdor gjuhën e aplikacionit për metadatat
Nëse aktivizohet, fushat e metadatave do të ndjekin gjuhën e aplikacionit dhe madje do të ndikojnë në zgjedhjen e formatit duke preferuar versionet e dubluara në vend të origjinalit.

### Argumente të tjera të extractor-it të YouTube
Argumente shtesë që i kalohen extractor-it të YouTube të yt-dlp, si `player_skip=webpage`.

## Shabllonet e komandave

### Komanda shtesë gjatë marrjes së të dhënave
Lejon që [shabllonet e komandave](/sq/docs/guides/command-templates) të përdoren si komanda shtesë gjatë marrjes së të dhënave. Pasi aktivizohet, çdo shabllon merr një opsion për marrjen e të dhënave.

## Formati

### Përdor renditjen sipas rëndësisë së formatit
Peshon vetitë e formateve sipas rendit që zgjedh ti, në vend të zgjedhjes standarde. Vendos rendin për videon dhe audion te dy hyrjet `Format importance order`. Shih [Formatet](/sq/docs/guides/formats#format-importance-order).

## Shkarkimi

### Çaktivizo shkrimin e info json
Sa herë që rinis / vazhdon shkarkimin, yt-dlp do t'i rishkarkojë të dhënat json nga serverët. Nuk rekomandohet.

### Shtyp verifikimin e certifikatës HTTPS
Injoron gabimet e certifikatës. Përdore vetëm nëse një faqe ka certifikatë të pavlefshme dhe i beson asaj.

### Header-i User-Agent
Përdor user agent-in e web view-së kur krijove cookies. Shih [Cookies](/sq/docs/guides/cookies#user-agent-header).

## Të ndryshme

### Çaktivizo flat playlist
Mos përdor `--flat-playlist`. Marrja e të dhënave për listat e luajtjes është më e ngadaltë, por artikujt vijnë me më shumë të dhëna.

### Përdor URL-në origjinale për URL-në e listës së luajtjes
Përdor URL-në e listës së luajtjes që ke dhënë ti në vend të etiketës `playlist_webpage_url` nga json dump.

## Rivendos
Rivendos çdo preferencë në këtë ekran.
