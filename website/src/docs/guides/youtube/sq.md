---
title: YouTube
titleTemplate: Udhëzuesit
description: Cilësime që ndihmojnë kur shkarkon nga YouTube.
---

# YouTube

YouTube i ndryshon shpesh sistemet e veta, që është arsyeja më e zakonshme pse shkarkimet dështojnë. Kjo faqe shpjegon cilësimet që ekzistojnë për të.

Para së gjithash, sigurohu që [yt-dlp është i përditësuar](/sq/docs/guides/settings/updating). Shumicën e kohës kjo mjafton.

## Marrja e të dhënave

Te <nav to="general"> nën **YouTube**:

- **Data fetching extractor (YouTube)**: `yt-dlp` ose `NewPipe`. NewPipe është më i shpejtë për kërkim, ndërsa yt-dlp është më i përputhshëm. Nëse aplikacioni mbyllet papritur gjatë kërkimit, zgjidh yt-dlp.
- **Formats source**: nga vijnë formatet e një videoje, `yt-dlp` ose `NewPipe`.
- **Use item URL instead of playlist URL**: e shkarkon artikullin direkt në vend që përmes listës së luajtjes. Metadatat e listës së luajtjes nuk do të ngulitën.

## Klienti i luajtësit {#player-client}

<nav to="advanced"> ➔ `Player client`

yt-dlp komunikon me YouTube duke u shtirur si një klient i caktuar (`web`, `android`, `ios`, `tv`, `mweb` e të tjerë). Çdo klient ofron formate të ndryshme dhe ka kufizime të ndryshme. Mund të shtosh klientët që do të përdorë yt-dlp, dhe për secilin mund të bashkëngjitësh PO tokens (GVS, Player dhe Subs), ta kufizosh te URL-të që përputhen me një shprehje të rregullt, dhe të aktivizosh `Use only PO token` për ta injoruar klientin e luajtësit dhe të dërgosh vetëm token-in.

Nëse një klient ndalon së funksionuari, provo të kalosh te një tjetër. Videot që kërkojnë identifikim funksionojnë më mirë me cookies dhe një klient `web`.

Mund të kalosh çdo argument tjetër të extractor-it të YouTube te `Other YouTube extractor arguments`, për shembull `player_skip=webpage`.

## PO tokens {#po-tokens}

Një PO (proof of origin) token është diçka që YouTube u kërkon klientëve për të provuar se janë aplikacion i vërtetë. Pa të, disa formate mund të mungojnë ose të kthejnë gabim.

Ka dy mënyra për ta trajtuar:

### PO tokens manuale

<nav to="advanced"> ➔ `Generate PO tokens`

Aplikacioni hap një web view ku hyn në llogarinë tënde Google dhe luan një video me titra të përkthyera automatikisht. Aplikacioni merr **Visitor Data** dhe **PO Token** për GVS (rrjedhën e videos), luajtësin dhe titrat. Pastaj ato i jepen yt-dlp për klientët për të cilët i ke vendosur. Mund t'i rigjenerosh nëse skadojnë.

::: warning
PO tokens manuale janë për përdorim pa cookies. Çaktivizo cookies kur i përdor.
:::

### Ofruesi automatik (BgUtils)

Aplikacioni mund të hostojë një gjenerues PO token për yt-dlp duke përdorur [ofruesin bgutil](https://github.com/Brainicism/bgutil-ytdlp-pot-provider). Kërkon një JS runtime nga [Paketat](/sq/docs/guides/packages) dhe e instalon vetë plugin-in e yt-dlp. Mund të zgjedhësh si gjenerohen token-at:

- **HTTP Server**: një server i vogël JavaScript ekzekutohet në portën `4416`. Aplikacioni e nis kur fillon radha e shkarkimeve ose kur ekzekutohet një burim i vëzhguar, dhe qëndron aktiv derisa ta mbyllësh nga njoftimi i tij. Më i miri nëse shkarkon shumë.
- **Generation script**: një proces i ri niset në çdo thirrje të yt-dlp. Më i thjeshtë, por më i ngadaltë dhe nuk rekomandohet për shumë shkarkime njëkohësisht.

## Cookies në YouTube

Cookies zhbllokojnë videot vetëm për anëtarë, përmbajtjen me kufizim moshe dhe audion më të mirë të YouTube Music. Shih [Cookies](/sq/docs/guides/cookies).

## Gjuha dhe audio e dubluar

`Use app language for metadata` te <nav to="advanced"> bën që titujt dhe përshkrimet të ndjekin gjuhën e aplikacionit dhe preferon pistën audio të dubluar në atë gjuhë kur ekziston. Përndryshe përdoret origjinalja. Mund të vendosësh edhe `Preferred audio language` te [cilësimet e përpunimit](/sq/docs/guides/settings/processing).

## Transmetimet live dhe premierat

Te skeda e videos në [Kartën e shkarkimit](/sq/docs/guides/download-card) mund të regjistrosh një transmetim live që nga fillimi, ose të presësh derisa një transmetim i planifikuar të nisë.

## Pyetje të lidhura

Shih [Pyetjet më të shpeshta](/sq/docs/faq/general) për cilësinë e audios në YouTube Music (`128kbps`, `256kbps`) dhe pse nuk ka mp3 në YouTube.
