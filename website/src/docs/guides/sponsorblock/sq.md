---
title: SponsorBlock
titleTemplate: Udhëzuesit
description: Si funksionon SponsorBlock.
---

# SponsorBlock

[SponsorBlock](https://sponsor.ajay.app/) është një bazë të dhënash komunitare e segmenteve brenda videove të YouTube që nuk janë pjesë e përmbajtjes. Me API-në e SponsorBlock mund të heqësh pjesët e panevojshme nga skedari. Këto përfshijnë:
- Pjesët jo-muzikore dhe jashtë teme
- Sponsorët
- Hyrjen
- Mbylljen
- Vetë-promovimet
- Parapamjet
- Mbushësit
- Kujtesat për abonim
- Grepat / Përshëndetjet

SponsorBlock është i dobishëm sidomos kur shkarkon muzikë, që të mos marrësh pjesët e tepërta.

## Përdorimi

- **Globalisht**: te <nav to="processing"> mbaje `Use SponsorBlock` aktiv dhe zgjidh kategoritë nën `SponsorBlock`.
- **Për çdo shkarkim**: te opsioni `SponsorBlock` i seksionit Adjust të [Kartës së shkarkimit](/sq/docs/guides/download-card), si për audion ashtu edhe për videon.

Segmentet priten nga skedari përfundimtar. Seksionet gjenden nga yt-dlp, i cili i kërkon API-së së SponsorBlock segmentet e videos. Videot pa paraqitje në bazën e të dhënave nuk do të kenë asgjë të hequr.

## Shënimi në vend të heqjes

Me `Chapters in videos` të aktivizuar te cilësimet e përpunimit (ose `Add Chapters` te karta), segmentet e SponsorBlock shtohen si kapituj në video në vend që të hiqen.

## API e personalizuar

Nëse ke serverin ose pasqyrën tënde të SponsorBlock, vendose me `SponsorBlock API URL` te <nav to="processing">.

::: tip Shënim
Prerja e segmenteve kërkon që videoja të përpunohet me FFmpeg, ndaj shkarkimi zgjat më shumë.
:::
