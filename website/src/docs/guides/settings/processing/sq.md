---
title: Cilësimet e përpunimit
titleTemplate: Cilësimet - Udhëzuesit
description: Cilësimet e përpunimit të YTDLnis.
---

# Cilësimet e përpunimit

<nav to="processing">

Këto cilësime janë parazgjedhjet për atë që i zbatohet medias. Secili prej tyre mund të ndryshohet për një shkarkim të vetëm te [Karta e shkarkimit](/sq/docs/guides/download-card). Ato nuk zbatohen për llojin e shkarkimit Komandë.

## Të përgjithshme

### Përdor SponsorBlock
Heq pjesët e padëshiruara nga videot. Zgjidh kategoritë te `SponsorBlock` dhe një server të personalizuar me `SponsorBlock API URL`. Shih [SponsorBlock](/sq/docs/guides/sponsorblock).

### Aktivizo mtime
Vendos kohën e ndryshimit të fundit të skedarit sipas header-it HTTP `Last-Modified` të faqes, në vend të kohës kur përfundoi shkarkimi.

### Ruaj përshkrimin
Shkruan përshkrimin e videos në një skedar.

### Shto komanda shtesë
Për shkarkimet audio / video. Shton komanda shtesë bashkë me konfigurimin e ndërfaqes. Shih [Komandat shtesë](/sq/docs/guides/extra-commands).

### Detyro keyframes te prerjet
Proces më i ngadaltë, por prerje më të sakta.

### Ngulit metadatat
Analizon dhe ngulit metadatat (titullin, autorin e më shumë) në skedar.

## Audio

### Bitrate
Bitrate-i në të cilin konvertohet audioja, nga 64 kbps deri në 320 kbps. Parazgjedhja mban origjinalin.

### Miniaturat si kopertinë
Përdor miniaturën si kopertinë.

### Qeth miniaturën
E qeth miniaturën në formë katrore për shkarkimet audio.

### Përdor emrin e listës së luajtjes si metadatë albumi
Nëse metadata e albumit mungon, përdor në vend të saj emrin e listës së luajtjes.

### Gjuha e preferuar e audios
Për videot me disa pista audio, zgjidh këtë gjuhë.

### Kodeku i preferuar i audios
`M4A` ose `OPUS`.

### Prefero kontejnerin mbi kodekun për shkarkimet audio
Me këtë të aktivizuar, preferenca e kodekut të audios do të injorohet dhe do të ndryshojë vetëm kontejneri.

### Formati i audios
Kontejneri në të cilin konvertohet audioja: `mp3`, `m4a`, `aac`, `alac`, `flac`, `opus`, `wav` ose `vorbis`.

### ID-ja e preferuar e formatit audio
Zgjedh formatin me këtë ID te karta e shkarkimit.

### Prefero audion DRC
Preferon audion me kompresim të gamës dinamike.

## Video

### Ngulit titrat
Shton titrat në video.

### Ruaj titrat / Ruaj titrat automatike
Shkruan titrat si skedar pranë videos.

### Fshi skedarët e titrave pas ngulitjes
Kur përdor si Embed Subtitles ashtu edhe Write Subtitles, mos i mbaj skedarët e titrave pas ngulitjes.

### Gjuhët e titrave
Shih [Gjuhët e titrave](/sq/docs/guides/subtitle-languages).

### Formati i titrave
`srt`, `ass`, `lrc` ose `vtt`.

### Ruaj miniaturën
Ruan miniaturën te dosja e shkarkimit, si `PNG` ose `JPG` (`Thumbnail format`).

### Miniaturat si kopertinë (video)
Përdor miniaturën si kopertinë të skedarit video.

### Kapitujt në video
Shënon segmentet e YouTube / SponsorBlock si kapituj të videos.

### Formati i videos
Kontejneri: `mp4`, `webm`, `mkv`, `mov`, `avi`, `flv` ose `gif`.

### Rikodo videon
E rikodon skedarin video në formatin e specifikuar të videos.

### Video e përputhshme
E rikodon videon duke e bërë të përputhshme me aplikacione dhe pajisje të tjera.

### Kodeku i preferuar i videos
`AV1`, `VP9`, `AVC (H264)` ose `HEVC (H265)`.

### Cilësia e videos
Nga cilësia më e mirë deri në ~2160p, ~1440p, ~1080p, ~720p, ~480p, ~360p, ~240p ose cilësia më e dobët.

### ID-ja e preferuar e formatit video
Zgjedh formatin me këtë ID te karta e shkarkimit.

### Preset-i FFmpeg i plugin-it të brendshëm
Preset-i që përdor FFmpeg për gjërat që aplikacioni bën vetë, si djegia e titrave. Preset-et më të ngadalta krijojnë skedarë më të vegjël, ato më të shpejta mbarojnë më herët. Ndryshimi i tij ndikon në madhësinë përfundimtare të skedarit.

### Hiq audion
Shkarkon videot pa zë.

### Shkarko edhe si audio
Çdo shkarkim video krijon edhe një shkarkim audio.

## Formati

### Madhësia e preferuar e formatit / Madhësia e preferuar e formatit audio
Kur përputhen disa formate, prefero atë `Smallest` ose `Largest`.

Shih [Formatet](/sq/docs/guides/formats) për të kuptuar si funksionojnë këto së bashku.

## Rivendos
Rivendos çdo preferencë në këtë ekran.
