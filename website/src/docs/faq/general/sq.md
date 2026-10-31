---
title: Të përgjithshme
titleTemplate: Pyetjet më të shpeshta
description: Pyetjet më të shpeshta
---

# Të përgjithshme
Pyetjet më të shpeshta

## Çfarë është YTDLnis?
**YTDLnis** është një shkarkues falas dhe me burim të hapur videosh dhe audiosh për Android 7.0 e lart, krijuar nga Denis Çerri. Është një ndërfaqe grafike për [yt-dlp](/sq/yt-dlp/) dhe mund të shkarkojë nga më shumë se 1000 faqe interneti. Shih [Fillimi](/sq/docs/guides/getting-started).

## A është falas? A ka reklama?
Është plotësisht falas dhe me burim të hapur nën licencën GNU General Public License v3.0, pa reklama. [Kodi burimor](https://github.com/deniscerri/ytdlnis) është publik. Shkarkoje vetëm nga burimet zyrtare të listuara në [faqen e shkarkimit](/sq/download) dhe në repository.

## Cilat faqe interneti mbështet?
Çdo faqe që mbështet yt-dlp, shih [listën e faqeve të mbështetura](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md).

## Pse YTDLnis nuk është në Google Play Store?
**YTDLnis** nuk do të jetë në **Google Play Store**.

yt-dlp dhe mjete të ngjashme bien ndesh me [politikën e përmbajtjes së Google Play](https://play.google.com/about/developer-content-policy/).
**Google** mund ta heqë aplikacionin për shkak të përmbajtjeve të caktuara, gjë që zhvilluesit duan ta shmangin.

## A është YTDLnis i disponueshëm për iOS/iPadOS?
Nuk ka version për iOS ose iPadOS dhe as nuk ka plane për një të tillë.
Përshtatja është e vështirë sepse aplikacionet iOS dhe Android kanë kod të ndarë. Gjithashtu nuk ekziston një librari që implementon yt-dlp për iOS.
Mund t'i hedhësh një sy [SW-DLT](https://routinehub.co/shortcut/7284/), që është një mjet bazik për shkarkim në iOS.

Çdo aplikacion që pretendon të jetë "**YTDLnis për iOS**" nuk është yni dhe duhet trajtuar si mashtrim.

## A mund të shkarkoj nga Netflix / Amazon Prime etj.?
Jo, dhe e kam fjalën që yt-dlp nuk e mbështet këtë. Kjo sepse Spotify është një nga shumë shërbimet e mbrojtura me DRM, dhe përpjekja për të anashkaluar DRM-në është **e paligjshme**. Jo vetëm Spotify, edhe shumë platforma të tjera e bëjnë këtë. Pra, do të duhet të gjesh një mënyrë tjetër për të shkarkuar nga këto platforma të mbrojtura me DRM.

## A mund të shikoj YouTube nga aplikacioni?
**YTDLnis** nuk është krijuar për transmetim videosh, por për shkarkimin e rrjedhave video/audio.

## Ku ruhen shkarkimet e mia?
Në dosjet e audios dhe videos që ke vendosur te <nav to="folders">. Shkarkimet e përfunduara listohen në skedën [Shkarkimet](/sq/docs/guides/downloads), ku mund ta hapësh skedarin ose të shohësh vendndodhjen e tij.

## A mund të shkarkoj një listë luajtjeje ose kanal të tërë?
Po. Ngjit lidhjen dhe zgjidh artikujt. Shih [Lista luajtjeje dhe shumë artikuj](/sq/docs/guides/playlists). Për të vazhduar të shkarkosh automatikisht ngarkimet e reja, përdor [Vëzhgo burimet](/sq/docs/guides/observe-sources).

## A mund të shkarkoj vetëm një pjesë të videos?
Po, me veçorinë e prerjes te [Karta e shkarkimit](/sq/docs/guides/download-card#cutting). Mund të bësh disa prerje ose ta ndash sipas kapitujve.

## A mund ta konvertoj në mp3?
Po. Zgjidh `Audio` dhe zgjidh `mp3` te kontejneri. Mbaj parasysh që YouTube nuk ka skedarë mp3, aplikacioni konverton nga `m4a` ose `opus`, kështu që cilësia nuk do të jetë më e mirë se origjinali.

## A mund t'i planifikoj shkarkimet?
Po. Te [Karta e shkarkimit](/sq/docs/guides/download-card) përdor butonin e planifikimit për të zgjedhur datën dhe orën. Mund t'i kufizosh shkarkimet edhe në një dritare kohore me `Download on schedule` te <nav to="downloads">.

## A mund të shkarkoj në sfond / shumë njëherësh?
Po. Shkarkimet ekzekutohen në sfond dhe mund të ekzekutosh disa njëherësh me `Concurrent downloads`. Shih [Radha e shkarkimeve](/sq/docs/guides/download-queue).

## A mund të përdor komandat e mia të yt-dlp?
Po, me [Shabllonet e komandave](/sq/docs/guides/command-templates), [Komandat shtesë](/sq/docs/guides/extra-commands) dhe [Terminalin](/sq/docs/guides/terminal).

## A mund të shkarkoj video private ose vetëm për anëtarë?
Nëse llogaria jote ka qasje, atëherë po. Hyr me [Cookies](/sq/docs/guides/cookies).

## A mund t'i kaloj të dhënat në një telefon të ri?
Po. Bëj një [kopje rezervë](/sq/docs/guides/backups) në telefonin e vjetër, kalo skedarin dhe riktheje në të riun.

## A i mbledh aplikacioni të dhënat e mia?
Jo. Lexo [politikën e privatësisë](/sq/privacy/).

## Ku duhet të raportoj probleme ose të sugjeroj veçori?
Mënyra më e preferuar është raportimi në GitHub, por para se të raportosh diçka, hidhu një sy fillimisht [atyre ekzistuese](https://github.com/deniscerri/ytdlnis/issues?q=is%3Aissue), një (ose më shumë) prej tyre mund të jetë e ngjashme me atë që ke në mendje. Kështu duam të shmangim issue-t e dyfishta. Nëse je i sigurt që e kupton dhe do të vazhdosh, ndiq këtë [lidhje](https://github.com/deniscerri/ytdlnis/issues/new/choose).

Mënyra e dytë është raportimi në [grupin e Telegram](https://t.me/ytdlnis/1). Preferohet të përfshish etiketën `#bug_report` ose `#suggestion` për gjurmim më të lehtë nga zhvilluesi, mirëmbajtësi dhe administratori.

## A mund të ndihmoj në përkthimin e aplikacionit?
Po! Përkthimet bëhen në [Weblate](https://hosted.weblate.org/engage/ytdlnis/).

## Cilin version të yt-dlp duhet të zgjedh?
<i>More ➔ Settings ➔ Updating ➔ yt-dlp Source</i>

- Stable (parazgjedhur), zgjidhe këtë nëse nuk e përdor shumë aplikacionin ose nëse nuk shkarkon nga shumë faqe.
- Nightly, ka stabilitet të balancuar dhe rekomandohet për shumicën e përdoruesve. Përmban shumicën e rregullimeve që versioni stable shpesh nuk i ka.
- Master, më pak i qëndrueshmi, por vjen me rregullimet dhe/ose shtesat më të fundit krahasuar me versionin nightly. Rekomandohet vetëm për përdoruesit e avancuar ose kur është e nevojshme.

Lexo më shumë [këtu](https://github.com/yt-dlp/yt-dlp#:~:text=There%20are%20currently,master-builds.).

- Mund të vendosësh edhe burimin tënd të personalizuar që përfaqëson një fork të yt-dlp

## A është e mundur të marr cilësi më të lartë audioje nga YouTube Music (më shumë se 128 Kbps)? {#is-it-possible-to-get-higher-youtube-music-audio-quality-higher-than-128-kbps}

Po, por të duhet abonimi YouTube Premium, dhe aplikacioni ka nevojë për të për të krijuar një cookie. Nëse nuk e ke abonimin, atëherë nuk do të jetë e mundur të marrësh cilësi më të lartë audioje.

Kjo audio më e lartë është zakonisht 256 Kbps, pra dyfishi i cilësisë më të mirë pa Premium. Por mbaj mend, nëse përpiqesh ta konvertosh në një kontejner tjetër dhe/ose ta vendosësh në cilësi më të lartë audioje për të marrë sërish cilësi më të mirë, nuk do të funksionojë. Thënë thjesht, është e pamundur, ose nuk do të bëjë asnjë ndryshim ose madje do ta ulë cilësinë. Këtë e kanë bërë shumë aplikacione për t'i mashtruar përdoruesit se aplikacioni mund t'u japë cilësi të mirë ose madje më të mirën e audios, gjë që është vërtet, vërtet e rreme.
