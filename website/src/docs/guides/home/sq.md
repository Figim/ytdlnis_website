---
title: Kreu
titleTemplate: Udhëzuesit
description: Si të përdorësh ekranin kryesor në YTDLnis.
---

# Kreu

Ekrani kryesor është vendi ku kërkon video, ngjit lidhje dhe sheh rezultatet.

## Kërkimi dhe ngjitja e lidhjeve

Shiriti i kërkimit sipër pranon tre lloje hyrjesh:

- **Një lidhje** për një video, listë luajtjeje, kanal ose çdo faqe tjetër që mbështet yt-dlp.
- **Një kërkim**. Aplikacioni kërkon në faqen e vendosur te <nav to="general"> `Preferred search engine`. Mbështeten YouTube, YouTube Music, SoundCloud, Bilibili, PRX Series, PRX Stories, Rokfin dhe Netverse.
- **Disa lidhje / kërkime**, secila në rreshtin e vet.

Sugjerimet e kërkimit nga Google mund të aktivizohen te cilësimet e përgjithshme. Kërkimet e mëparshme ruhen në historikun e kërkimit, të cilin mund ta pastrosh nga menyja shtesë.

### Grumbullimi i kërkimeve

Nëse kërkon diçka ndërkohë që shfaqen rezultate, rezultatet e reja i shtohen listës në vend që t'i zëvendësojnë. Kështu mund të ndërtosh një listë artikujsh nga kërkime të ndryshme dhe t'i shkarkosh të gjitha njëherësh. Përdor `Clear results` te menyja shtesë për të nisur nga e para.

### Importimi i një liste nga një skedar txt {#importing-a-list-from-a-txt-file}

Krijo një skedar `.txt` dhe mbushe me lidhje, lista luajtjeje ose kërkime, të ndara me rresht të ri. Ndaje skedarin te **YTDLnis** dhe aplikacioni do ta përpunojë çdo rresht.

## Butoni i clipboard-it

Kur kopjon një lidhje dhe hap aplikacionin, shfaqet një buton lundrues që ta përpunosh lidhjen me një prekje. Nëse clipboard-i përmban më shumë se një lidhje, aplikacioni hap faqen e kërkimit, i liston të gjitha dhe të lejon të heqësh ato që nuk do, para se të shtypësh ikonën e kërkimit për t'i përpunuar.

Kjo mund të çaktivizohet me `Check clipboard in the home screen` te cilësimet e përgjithshme.

## Kartat e rezultateve

Çdo rezultat ka miniaturë, titull, autor dhe kohëzgjatje, si dhe dy butona për ta shkarkuar si **audio** ose si **video**.

- **Prek** butonin audio ose video për të hapur [Kartën e shkarkimit](/sq/docs/guides/download-card) në atë skedë. Nëse karta e shkarkimit është çaktivizuar te cilësimet, shkarkimi nis menjëherë.
- **Mbaj shtypur** butonin audio ose video për ta hapur kartën e shkarkimit edhe nëse e ke çaktivizuar.
- **Prek kartën** për të parë detajet e artikullit, si formatet që ka.
- **Mbaj shtypur një kartë** për të nisur zgjedhjen e shumë artikujve.

### Zgjedhja e shumë artikujve

Pasi nis një zgjedhje, sipër shfaqet shiriti i kontekstit ku mund t'i shkarkosh të gjithë artikujt e zgjedhur ose t'i heqësh nga lista. Mund edhe:

- `Select all` dhe `Invert selected`
- `Select items between` dy karta të zgjedhura, që të mos e prekësh secilën veç e veç

Kur shkarkon shumë artikuj, hapet [Karta e shkarkimit të shumëfishtë](/sq/docs/guides/playlists#multiple-download-card).

## Listat e luajtjes

Kur një lidhje është listë luajtjeje, aplikacioni i liston artikujt dhe të lejon të zgjedhësh cilët do. Lexo [Lista luajtjeje dhe shumë artikuj](/sq/docs/guides/playlists).

## Rekomandimet e videove {#video-recommendations}

Mund ta mbushësh ekranin kryesor bosh me video të rekomanduara. Shko te <nav to="recommnedations"> dhe zgjidh një burim:

| Burimi | Shënime |
| --- | --- |
| Disabled | Parazgjedhja. Nuk shfaqet asgjë. |
| NewPipe | Video në trend përmes NewPipe extractor. |
| YouTube API | Përdor çelësin tënd të API-së, të cilin e vendos në të njëjtin seksion cilësimesh. |
| yt-dlp YouTube watch later | Kërkon [cookies](/sq/docs/guides/cookies). |
| yt-dlp YouTube recommendations | Kërkon [cookies](/sq/docs/guides/cookies). |
| yt-dlp YouTube liked videos | Kërkon [cookies](/sq/docs/guides/cookies). |
| yt-dlp YouTube watch history | Kërkon [cookies](/sq/docs/guides/cookies). |
| Custom | Jep URL-në tënde që të ngarkohet si burim rekomandimesh. |

## Marrjet e dështuara

Nëse disa artikuj nuk mund të merren gjatë përpunimit, në shiritin e veglave shfaqet butoni `Failed to fetch`. Aty mund të përdorësh `Retry` ose `Retry all`, ose `Download anyway` pa të dhënat e marra.

## Pyetjet më të shpeshta

### Si mund të shkarkoj shumë artikuj njëherësh?
Mbaj shtypur një kartë dhe pastaj mund të shtypësh kartat e tjera. Sipër do të shfaqet shiriti i kontekstit ku mund t'i shkarkosh të gjithë artikujt e zgjedhur ose t'i fshish.
Mund të zgjedhësh edhe dy karta dhe pastaj të prekësh opsionin për të zgjedhur të gjithë artikujt mes tyre, ose të invertosh zgjedhjen ose të zgjedhësh gjithçka.

### Kam shumë URL që duhet t'i shkarkoj
Mund t'i kopjosh në clipboard dhe aplikacioni do të të shfaqë butonin lundrues të clipboard-it. Nëse janë më shumë se 1, aplikacioni do të hapë faqen e kërkimit dhe do t'i listojë të gjitha URL-të. Pastaj mund të heqësh disa prej tyre dhe të shtypësh ikonën e kërkimit për të nisur përpunimin.

### E kam konfiguruar aplikacionin të mos shfaqë kartën e shkarkimit, por ndonjëherë dua që ajo të hapet
Mund të mbash shtypur butonin video/audio te një rezultat dhe karta e shkarkimit do të hapet.

### Dua rekomandime videosh në ekranin kryesor
Shko te <nav to="recommnedations"> dhe zgjidh metodën e rekomandimit të videove.

### Si ta menaxhoj atë që po shkarkohet?
Shko te <nav to="download-queue"> për të ndërvepruar me shkarkimet në radhë ose prek dy herë ikonën e shkarkimeve në shiritin e navigimit.

Anulo të gjithë artikujt duke klikuar butonin **Overflow** pranë një kapitulli serie ose në këndin e sipërm djathtas.

Për ta rirenditur radhën, mbaj shtypur dhe tërhiq ikonën `=` pranë një artikulli në radhë.

### Aplikacioni mbyllet papritur kur kërkoj diçka
Ndrysho `Data fetching extractor (YouTube)` në `yt-dlp` te <nav to="general">. Kjo e anashkalon një defekt në NewPipe extractor.
