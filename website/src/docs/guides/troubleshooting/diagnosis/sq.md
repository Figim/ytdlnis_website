---
title: Diagnostikimi
titleTemplate: Zgjidhja e problemeve - Udhëzuesit
description: Ke probleme me një burim ose me aplikacionin? Ndiq këto hapa për t'i diagnostikuar dhe gjetur zgjidhje.
---

# Diagnostikimi

Ke probleme me një burim ose me aplikacionin?
Ndiq këto hapa për t'i diagnostikuar dhe gjetur zgjidhje.

## Diagnostikimi parësor

1. **Përditëso aplikacionin**: Shko te <nav to="update"> dhe prek **Check for updates**.
2. **Përditëso yt-dlp**: Shko te <nav to="update"> ➔ yt-dlp dhe përditësoje. Nëse kjo nuk ndihmon, provo kanalin `Nightly` ose `Master`. Pastaj provo sërish.
3. **Përditëso paketat**: Te <nav to="packages"> kontrollo nëse ka version më të ri të FFmpeg, Python ose JS runtime. Nëse përditësove një së fundmi dhe problemi nisi pas tij, kthehu te versioni i përfshirë.
4. **Provo një lloj tjetër shkarkimi ose format**: Shkarko si audio në vend të videos, ose zgjidh një format tjetër te [Karta e shkarkimit](/sq/docs/guides/download-card).
5. **Pastro skedarët e përkohshëm**: Shko te <nav to="folders"> ➔ `Temporary files` dhe prek `Clear everything`. Të dhënat e vjetra në cache mund të prishin gjëra.
6. **Lexo regjistrin**: Hap [regjistrin](/sq/docs/guides/logs) dhe shiko fundin e tij.

## Diagnostikimi dytësor

1. **Çaktivizo ndryshimet e tua**: Çaktivizo [komandat shtesë](/sq/docs/guides/extra-commands), proxy-n, `Force IPv4`, kufizimet e shpejtësisë, `Aria2` dhe klientët e personalizuar të luajtësit. Provo sërish, pastaj aktivizoji një nga një për të gjetur fajtorin.
2. **Rivendos cilësimet**: Çdo ekran [cilësimesh](/sq/docs/guides/settings/) ka një buton `Reset`. Provoje te ekranet Processing dhe Downloads.
3. **Provo me cookies**: Nëse përmbajtja kërkon identifikim, krijo [cookies](/sq/docs/guides/cookies) dhe sigurohu që `Use cookies` është aktiv. Nëse cookies janë aktive dhe problemi nisi, provo pa to.
4. **Testo te Terminali**: Ekzekuto një komandë të thjeshtë te [Terminali](/sq/docs/guides/terminal), për shembull `-F <lidhja>` për të listuar formatet. Nëse dështon edhe kjo, problemi është te yt-dlp ose te faqja, jo te konfigurimi yt.
5. **Provo një rrjet tjetër**: Kalo mes Wi-Fi dhe të dhënave mobile, ose çaktivizo VPN-në. Disa faqe bllokojnë adresa të caktuara IP.

## Raportimi i një problemi

Nëse asgjë nuk funksionoi, hap një issue në [GitHub](https://github.com/deniscerri/ytdlnis/issues/new/choose) dhe përfshi:

- Versionin e aplikacionit, versionin e Android dhe pajisjen
- Versionin e yt-dlp dhe kanalin e përditësimit që përdor
- Lidhjen që dështon (nëse nuk është private)
- [Regjistrin](/sq/docs/guides/logs) e shkarkimit
- Hapat që ndoqe për ta shkaktuar problemin

Të lutem kërko fillimisht te [issue-t ekzistuese](https://github.com/deniscerri/ytdlnis/issues?q=is%3Aissue).
