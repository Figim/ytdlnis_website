---
title: Karta e shkarkimit
titleTemplate: Udhëzuesit
description: Si të konfigurosh një shkarkim.
---

# Karta e shkarkimit

Karta e shkarkimit është një dritare që hapet nga poshtë, ku mund të personalizosh (pothuajse) gjithçka që YTDLnis ofron. Ajo hapet kur shtyp butonin audio ose video të një rezultati te [Kreu](/sq/docs/guides/home), ose kur ndan një lidhje nga një aplikacion tjetër përmes [Menysë së ndarjes](/sq/docs/guides/share-menu).

Mund të shkarkosh në 3 mënyra: **Audio**, **Video** dhe **Komandë**.

::: tip Çaktivizimi i kartës
Nëse nuk ke nevojë të konfigurosh asgjë, mund ta çaktivizosh me `Show download card` te <nav to="downloads">. Atëherë aplikacioni do të nisë shkarkimin menjëherë me cilësimet e tua të preferuara. Kartën mund ta hapësh prapë duke mbajtur shtypur butonin audio ose video të një rezultati.
:::

## Pamja kryesore

### Butoni i shkarkimit

Shtypje e shkurtër për të shkarkuar.
Shtypje e gjatë për ta ruajtur shkarkimin te lista e Shkarkimeve të ruajtura, nga ku mund ta shkarkosh më vonë.

### Butoni i planifikimit

Zgjidh orën dhe datën e preferuar të shkarkimit dhe ai do të ruhet te lista e Shkarkimeve të planifikuara.

### Butoni i URL-së

Shtypje e shkurtër për t'u ridrejtuar te URL-ja.
Shtypje e gjatë për ta kopjuar URL-në.

### Butoni i fshehtë (Incognito)

Kur aktivizohet, shkarkimi aktual nuk do të shtohet në historikun e shkarkimeve.

### Butoni i përditësimit

Ky buton nuk shfaqet si parazgjedhje, por nëse artikullit të shkarkimit i mungon informacioni, mund ta përdorësh për të marrë të dhënat e tij. Një shkarkimi i mungojnë të dhënat kur ke aktivizuar Shkarkimin e shpejtë dhe të çon menjëherë te karta e shkarkimit duke anashkaluar procesin e marrjes së të dhënave.

### Personalizimi i kartës

Mund të fshehësh pjesët e kartës që nuk i përdor kurrë (Schedule, Title, Author, Container, Adjust audio, Adjust video, Adjust templates, URL) me `Modify download card` te <nav to="general">. Në të njëjtin seksion mund të aktivizosh gjestet e rrëshqitjes në kartë për të kaluar mes tre skedave.

----

## Audio

- Fushat Titulli dhe Autori plotësohen automatikisht nga procesi i nxjerrjes së të dhënave. Nëse i lë bosh, shkarkimi nuk do t'i mbishkruajë metadatat dhe do t'i mbajë siç janë.

### Kontejneri

Kontejneri e konverton formatin në formatin e zgjedhur. Shumë njerëz gënjehen nga ata konvertuesit "YouTube në mp3 320kbps". Në realitet YouTube nuk ofron formate mp3, por vetëm m4a ose opus. Edhe me Cookies të aktivizuara, maksimumi që merr është 256kbps me ID formati `141`.

Mund ta përdorësh këtë funksion nëse planifikon ta luash audion në një pajisje që nuk e mbështet kontejnerin origjinal. Për çdo gjë tjetër, sugjeroj ta lësh kontejnerin siç është për cilësinë më të mirë të mundshme të audios.

Kontejnerët e disponueshëm: `mp3`, `m4a`, `aac`, `alac`, `flac`, `opus`, `wav` dhe `vorbis`.

### Cilësia e audios

Ky seksion tregon formatin e zgjedhur për shkarkim. Ky format zgjidhet sipas preferencave që ke konfiguruar te cilësimet. Majtas është kontejneri origjinal. Etiketat poshtë tregojnë kodekun dhe madhësinë e skedarit. Djathtas është ID-ja e formatit. Prek për të zgjedhur një tjetër. [Mëso më shumë për formatet](/sq/docs/guides/formats).

### Rregullo audion

`Thumbnail Covers`

Vendos miniaturën e videos si kopertinë të muzikës

`Crop Thumbnail`

E pret miniaturën në formë katrore si një kopertinë e zakonshme muzike, në vend të formatit të zakonshëm 16/9

`Split By Chapters`

E ndan skedarin audio në disa skedarë nëse përmbajtja që po shkarkon ka kapituj. Është e dobishme nëse po shkarkon një video përmbledhëse ose një video albumi, por do çdo këngë veçmas.

`SponsorBlock`

[Mëso më shumë për SponsorBlock](/sq/docs/guides/sponsorblock)

E dobishme sidomos kur shkarkon muzikë dhe nuk do pjesët e tepërta

`Filename Template`

[Mëso më shumë për Shabllonet e emrit të skedarit](/sq/docs/guides/filename-templates)

`Add Extra Commands`

[Mëso më shumë për Komandat shtesë](/sq/docs/guides/extra-commands)

`Cut`

[Mëso më shumë për Prerjen](#cutting)

----

## Video

- Fushat Titulli dhe Autori plotësohen automatikisht nga procesi i nxjerrjes së të dhënave. Nëse i lë bosh, shkarkimi nuk do t'i mbishkruajë metadatat dhe do t'i mbajë siç janë.

### Kontejneri i videos

Kontejneri e konverton formatin në formatin e zgjedhur.
Kontejnerët e disponueshëm: `mp4`, `webm`, `mkv`, `mov`, `avi`, `flv` dhe `gif`.
Mund ta përdorësh këtë funksion nëse planifikon ta luash videon në një pajisje që nuk e mbështet kontejnerin origjinal. Për çdo gjë tjetër, sugjeroj ta lësh kontejnerin siç është për cilësinë më të mirë të mundshme.

### Cilësia e videos

Ky seksion tregon formatin e zgjedhur për shkarkim. Ky format zgjidhet sipas preferencave që ke konfiguruar te cilësimet. Majtas është kontejneri origjinal. Etiketat poshtë tregojnë kodekun dhe madhësinë e skedarit. Djathtas është ID-ja e formatit. Mund të zgjedhësh edhe një format audio që të bashkohet me videon, madje edhe disa formate audio. [Mëso më shumë për formatet](/sq/docs/guides/formats).

### Rregullo videon

`Save Thumbnail`

Shkarkon gjithashtu miniaturën e videos dhe e ruan pranë videos. Formatin e miniaturës mund ta konfigurosh te cilësimet.

`Add Chapters`

Nëse videoja origjinale ka kapituj, i shton ato te metadatat. Gjithashtu, nëse ke aktivizuar SponsorBlock, do të përfshijë edhe kapitujt e SponsorBlock.

`Split By Chapters`

E ndan skedarin video në disa skedarë nëse përmbajtja që po shkarkon ka kapituj.

`Subtitles`

Mund të:
- Ngulitësh titrat (Vendos rrjedhën e titrave brenda videos)
- Ruash titrat (Shkarkon titrat si skedar pranë videos. Formati i titrave mund të konfigurohet te cilësimet)
- Ruash titrat automatike (Shkarkon titrat e përkthyera automatikisht si skedar pranë videos)
- Djegësh titrat (I shkrin titrat përgjithmonë në figurën e videos. Kjo e rikodon videon, ndaj zgjat më shumë)

Ngulitja e titrave si parazgjedhje nuk ngulit titrat automatike. Duhet të aktivizosh Save Automatic Subtitles + Embed Subtitles që t'i ngulitësh edhe ato brenda videos.

[Mëso më shumë si të konfigurosh gjuhët e titrave](/sq/docs/guides/subtitle-languages)

`Audio`

Mund të:
- Heqësh audion (E bën videon pa zë, duke hequr rrjedhën audio prej saj)
- Shkarkosh edhe si audio (Krijon një artikull të dytë shkarkimi në momentin që shtyp shkarko, me cilësimet e tua të preferuara të audios)

`Recode Video`

E rikodon videon në një format tjetër nëse është e nevojshme. Mund të përdoret kur po përpiqesh të ndryshosh kontejnerin. Aktivizo `Compatible Video` te cilësimet e përpunimit nëse rezultati duhet të luhet në aplikacione dhe pajisje të tjera që janë kërkuese me kodekët.

`Live Stream`

Për transmetimet live dhe premierat e ardhshme mund të zgjedhësh:
- **Live from start**: regjistron transmetimin që nga fillimi, në vend që nga momenti kur nise shkarkimin
- **Wait for video**: nëse videoja nuk është ende e disponueshme, provon sërish çdo numër të caktuar minutash derisa të nisë

`SponsorBlock`

[Mëso më shumë për SponsorBlock](/sq/docs/guides/sponsorblock)

E dobishme sidomos kur shkarkon muzikë dhe nuk do pjesët e tepërta

`Filename Template`

[Mëso më shumë për Shabllonet e emrit të skedarit](/sq/docs/guides/filename-templates)

`Add Extra Commands`

[Mëso më shumë për Komandat shtesë](/sq/docs/guides/extra-commands)

`Cut`

[Mëso më shumë për Prerjen](#cutting)

`Crop`

[Mëso më shumë për Qethjen e kuadrit](#cropping)

----

## Komandë

Ky opsion është i çaktivizuar si parazgjedhje, sepse në një instalim të ri nuk ka shabllone komandash të krijuara. Aplikacioni do të të sugjerojë të krijosh një. [Mëso si ta krijosh!](/sq/docs/guides/command-templates)

Fusha e komandës zgjedh automatikisht shabllonin tënd të preferuar të komandës ose krijimin tënd më të fundit. Mund të zgjedhësh një shabllon komande, madje edhe disa njëherësh, dhe kodi do t'i shtohet.

::: tip Shënim
Përveç cilësimeve kryesore si cilësimet e shkarkimit, cookies e të ngjashme, cilësimet e tjera të përpunimit nuk do të zbatohen në këtë lloj shkarkimi, pasi ti ke kontrollin përmes komandave të personalizuara.
:::

### Rregullo shabllonet

`New Template`

Krijo shpejt një shabllon të ri dhe zgjidhe

`Edit Selected`

Ndrysho shabllonin e zgjedhur

`Shortcuts`

Përdor shkurtoret për ta ndërtuar komandën

----

# Prerja {#cutting}

Mund ta zgjedhësh lehtësisht intervalin kohor që do të shkarkosh. Mund të krijosh edhe disa prerje për një shkarkim të vetëm. Prerjet mund të vendosen me rrëshqitësin, duke shkruar kohën e saktë të fillimit dhe mbarimit, ose sipas kapitujve të videos.

Çdo prerje shkarkohet si pjesë më vete. Prek `New cut` për të shtuar sa të duash.

`Force Keyframes At Cuts`

Ky opsion lejon prerje më të sakta, por mund të bëhet shumë i ngadaltë gjatë procesit të prerjes, sidomos me video të gjata. Mund të vendoset edhe globalisht te <nav to="processing">.

::: tip Shënim
Sipas yt-dlp, kjo veçori është eksperimentale dhe në disa raste mund të mos funksionojë siç duhet, ndaj mbaje parasysh.
:::

Nëse artikulli u shtua pa të dhëna (për shembull me Shkarkimin e shpejtë), aplikacioni do të të thotë ta përditësosh artikullin fillimisht, pasi duhet të dijë kohëzgjatjen e videos për ta prerë.

# Qethja e kuadrit {#cropping}

Te skeda e videos mund ta qethësh figurën e videos si të duash. Mund të zgjedhësh raport të lirë, raport të fiksuar ose të vendosësh me dorë dimensionet dhe zhvendosjet X / Y. Një buton rivendosjeje e kthen qethjen në origjinal.

Aplikacioni e zbaton qethjen me një post-procesor FFmpeg, ndaj videoja rikodohet.

::: tip Shënim
Kur qeth video VP9 dhe AV1 mund të të duhet një version më i lartë i FFmpeg. Përmirësoje në FFmpeg 7.1.1 nga seksioni [Paketat](/sq/docs/guides/packages).
:::
