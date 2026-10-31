---
title: Problemet e zakonshme
titleTemplate: Zgjidhja e problemeve - Udhëzuesit
description: Ke probleme me një burim ose me aplikacionin? Ja si t'i përballosh sfidat e zakonshme.
---

# Problemet e zakonshme

Ke probleme me një burim ose me aplikacionin?
Ja si t'i përballosh sfidat e zakonshme.

## Shkarkimet

### Çdo shkarkim dështon me gabim extractor-i / "Unable to extract"
yt-dlp është i vjetruar. Shko te <nav to="update"> dhe përditëso yt-dlp. Nëse vazhdon të dështojë, kalo kanalin në `Nightly` ose `Master`. Në disa vende yt-dlp nuk përditësohet automatikisht, ndaj bëje manualisht.

### "Sign in to confirm you're not a bot" ose HTTP 403 në YouTube
YouTube e bllokoi kërkesën. Provo, sipas këtij rendi:
1. Përditëso yt-dlp.
2. Përdor [cookies](/sq/docs/guides/cookies) nga një llogari e identifikuar.
3. Ndrysho [klientin e luajtësit](/sq/docs/guides/youtube#player-client) ose konfiguro [PO tokens](/sq/docs/guides/youtube#po-tokens).
4. Instalo një JS runtime nga [Paketat](/sq/docs/guides/packages).
5. Ndrysho rrjetin, ose çaktivizo VPN-në.

### Shkarkimi ka mbetur në radhë dhe nuk nis
- Nëse `Download over metered networks` është i çaktivizuar dhe je në të dhëna mobile, shkarkimi pret për një lidhje të pamatur.
- Nëse `Download on schedule` është aktiv, do të presë kohën e lejuar.
- Nëse është vendosur `Download delay`, ka një pritje mes shkarkimeve.
- Kontrollo që numri i `Concurrent downloads` të mos jetë i zënë nga artikuj të tjerë.

### Shkarkimet ndalojnë kur mbyll aplikacionin ose fik ekranin
Çaktivizo optimizimin e baterisë për aplikacionin, me `Ignore battery optimization` te <nav to="general">. Disa prodhues (Xiaomi, Huawei, Samsung, OnePlus e të tjerë) kanë kufizime shtesë agresive në sfond. Kërko pajisjen tënde në [dontkillmyapp.com](https://dontkillmyapp.com/) për të parë si ta lejosh aplikacionin të qëndrojë në ekzekutim.

### Shkarkimi dështon në fund, ose skedari mungon
- Aplikacioni mund të mos jetë në gjendje të shkruajë në dosjen e zgjedhur. Zgjidh një dosje tjetër, ose aktivizo `Cache downloads first` te <nav to="folders">.
- Aktivizo `Restrict filenames` nëse titulli ka karaktere të çuditshme.
- Kontrollo që ka mjaft hapësirë të lirë në pajisje.

### Gabime "ffmpeg", bashkimi ose konvertimi dështon
Provo versionin tjetër të FFmpeg te [Paketat](/sq/docs/guides/packages). Versionet shumë të reja mund të mos ekzekutohen në disa pajisje, dhe ato shumë të vjetra nuk mbështesin disa kodekë.

### Videoja e shkarkuar nuk ka audio, ose audioja është në gjuhën e gabuar
Zgjidhe vetë formatin audio te paneli i formateve në [Kartën e shkarkimit](/sq/docs/guides/formats). Kontrollo që `Remove audio` të jetë i çaktivizuar, dhe vendos `Preferred audio language` te <nav to="processing">.

### Titrat nuk ngulitën
Ngulitja e titrave automatike kërkon së bashku `Save automatic subtitles` dhe `Embed subtitles`. Kontrollo gjithashtu që gjuhët që zgjodhe ekzistojnë vërtet për videon. Shih [Gjuhët e titrave](/sq/docs/guides/subtitle-languages).

### Nuk mund të marr audio më shumë se 128kbps në YouTube Music
Të duhet një llogari YouTube Premium me [cookies](/sq/docs/guides/cookies). Shih [Pyetjet më të shpeshta](/sq/docs/faq/general#is-it-possible-to-get-higher-youtube-music-audio-quality-higher-than-128-kbps).

### Prerja / qethja e kuadrit është gri ose nuk funksionon
Artikulli duhet t'i ketë marrë fillimisht të dhënat. Nëse përdore `Don't fetch data`, prek butonin e përditësimit te karta. Prerja nuk është e disponueshme për të gjitha llojet e artikujve, si disa transmetime live. Qethja e kuadrit e VP9 dhe AV1 kërkon FFmpeg 7.1.1 ose më të lartë nga [Paketat](/sq/docs/guides/packages).

### Shkarkimi është shumë i ngadaltë
- Rrit `Concurrent fragments` te <nav to="downloads">.
- Provo `aria2c` si shkarkues.
- Kontrollo që `Limit rate` të mos jetë vendosur.
- Disa faqe i ngadalësojnë shkarkimet. Përditëso yt-dlp, shpesh ka rregullime për këtë.

### Paralajmërime dyfishimi për diçka që dua ta shkarkoj sërish
Ndrysho ose çaktivizo `Prevent duplicate downloads` te <nav to="downloads">, ose prek `Continue anyway`.

## Aplikacioni

### Aplikacioni mbyllet papritur kur kërkoj
Ndrysho `Data fetching extractor (YouTube)` në `yt-dlp` te <nav to="general">.

### Karta e shkarkimit nuk shfaqet kur ndaj një lidhje
Aktivizo `Display over apps` te <nav to="general">. Kontrollo gjithashtu që `Show download card` të jetë aktiv.

### Paneli i ndarjes nuk e liston YTDLnis
Disa aplikacione ndajnë vetëm tekst, disa ndajnë lidhjet si skedarë. Kopjo lidhjen dhe ngjite në aplikacion, ose përdor butonin e clipboard-it te Kreu.

### Njoftimet nuk shfaqen
Lejo njoftimet për aplikacionin te cilësimet e Android. Në disa pajisje duhet ta lejosh aplikacionin edhe te menaxheri i baterisë.

### Burimet e vëzhguara nuk ekzekutohen në kohën e duhur
Shih [Bëje të besueshëm](/sq/docs/guides/observe-sources#making-it-reliable).

### Cookies nuk funksionojnë
- Aktivizo `Use cookies`.
- Krijo sërish cookie-n dhe aktivizo `User-Agent header` te <nav to="advanced">.
- Në YouTube, llogaritë e identifikuara nga një shfletues i rrotullojnë cookies. Hyr me një [llogari dytësore](/sq/docs/guides/cookies) nëse vazhdojnë të skadojnë.

### Humba historikun / cilësimet pas riinstalimit
Kopjet rezervë nuk janë automatike përveç nëse ke aktivizuar `Automatic backup`. Rikthe kopjen e fundit te cilësimet. Shih [Kopjet rezervë](/sq/docs/guides/backups).

### Aplikacioni zë shumë hapësirë
Hap <nav to="folders"> ➔ `Temporary files` për të parë sa hapësirë përdoret dhe pastroje. Aktivizo gjithashtu `Clean-up leftover downloads` te <nav to="downloads">.

### Instalova një përditësim dhe tani aplikacioni nuk hapet
Riinstalimi i aplikacionit mund të ndihmojë. Bëje vetëm pasi të kesh bërë një [kopje rezervë](/sq/docs/guides/backups), pasi çinstalimi i heq të dhënat e aplikacionit. Instaloje versionin e ri mbi atë ekzistues dhe mos e çinstalo më parë, për sa kohë nënshkrimi është i njëjtë.
