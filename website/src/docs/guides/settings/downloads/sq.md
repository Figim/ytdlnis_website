---
title: Cilësimet e shkarkimit
titleTemplate: Cilësimet - Udhëzuesit
description: Cilësimet e shkarkimit të YTDLnis.
---

# Cilësimet e shkarkimit

<nav to="downloads">

## Modaliteti i fshehtë {#incognito}
Aplikacioni nuk do t'i ruajë shkarkimet në historikun e shkarkimeve. Mund ta vendosësh këtë edhe për artikuj të veçantë te karta e shkarkimit.

## Shfaq kartën e shkarkimit
Aktive si parazgjedhje, por nëse çaktivizohet nuk do të shfaqë konfigurimin e shkarkimit dhe do të nisë shkarkimin menjëherë me konfigurimin tënd.

## Shkarkimi i shpejtë
Quhet `Don't fetch data` në aplikacion. Parandalon marrjen e të dhënave kur ngarkon një URL te karta e shkarkimit. Mund të provosh prapë t'i marrësh të dhënat te karta e shkarkimit.

## Parandalo shkarkimet e dyfishta {#prevent-duplicate-downloads}
- Disabled (i çaktivizuar)
- Download Archive (Me këtë aplikacioni ruan një skedar txt me të gjitha lidhjet e përpunuara dhe krahason me të kur përpiqesh ta shkarkosh sërish të njëjtën lidhje, duke të ndaluar. Përdor arkivin e shkarkimeve të vetë yt-dlp)
- URL & Download Type (krahason sipas URL-së dhe llojit të shkarkimit)
- Full Configuration (krahason nëse përdoret e njëjta komandë yt-dlp)

Kur gjendet një dyfishim, vendos ti nëse do të vazhdosh gjithsesi. Përdor `Download archive folder` për të zgjedhur ku ruhet skedari i arkivit.

## Vonesa e shkarkimit
Pret sekondat e konfiguruara mes çdo shkarkimi, si vonesë minimale dhe maksimale që pritja të jetë e rastësishme. E dobishme kundër faqeve që bllokojnë kërkesat e shpejta të përsëritura. Kjo veçori i çaktivizon shkarkimet njëkohësisht.

## Shkarko në rrjete të matura
Nëse çaktivizohet, shkarkimet do të qëndrojnë në radhë derisa të lidhesh me një rrjet wifi.

## Detyro IPv4
Mund të jetë e dobishme në disa shkarkime të përdorësh vetëm lidhje ipv4.

## Përdor cookies
U jep yt-dlp [cookies](/sq/docs/guides/cookies) e tua të ruajtura.

## URL e proxy-t Socks5
Vendos një URL proxy-je për ta përdorur gjatë shkarkimit. Mbështeten proxy HTTP, HTTPS dhe SOCKS.

## Lloji i preferuar i shkarkimit
Nëse karta e shkarkimit është aktive, ajo do të zgjedhë këtë lloj, dhe nëse është e çaktivizuar do të shkarkojë menjëherë me këtë lloj të preferuar. Nëse lloji i preferuar është komanda, do të përdorë shabllonin e fundit të përdorur ose shabllonin tënd të preferuar të komandës.

Nëse lloji vendoset në Auto, aplikacioni do të zgjedhë formatin audio për disa lloje URL-sh si YouTube Music ose SoundCloud.

## Mbaj mend llojin e shkarkimit
Injoron llojin e preferuar të shkarkimit dhe vazhdon të përdorë llojin e fundit të përdorur.

## Fragmente njëkohësisht
Numri i fragmenteve të një videoje dash/hls që shkarkohen njëkohësisht.

## Shkarkime njëkohësisht
Vendos sa shkarkime të ekzekutohen në të njëjtën kohë.

## Kufizo shpejtësinë
Kufizon shpejtësinë e shkarkimit, në bajt për sekondë. P.sh. `50K` ose `4.2M`

## Madhësia e buffer-it
Vendos madhësinë e buffer-it të shkarkimit, p.sh. `1024` ose `16K`. Parazgjedhja është 1024.

## Koha e pritjes së socket-it
Vendos sa sekonda duhet të presë aplikacioni para se ta konsiderojë një shkarkim të dështuar nëse nuk përgjigjet.

## Aria2
Shkarkues alternativ i yt-dlp që mund ta përdorësh. Ndonjëherë mund të ketë defekte. Kërkon [paketën](/sq/docs/guides/packages) aria2c.

## Regjistro shkarkimet
Krijon një skedar regjistri për çdo shkarkim. E mirë për diagnostikim. Aplikacioni krijon gjithmonë një regjistër shkarkimi nëse shkarkimi jep gabim, edhe nëse regjistrimi është i çaktivizuar. Shih [Regjistrat e shkarkimeve](/sq/docs/guides/logs).

## Pastro shkarkimet e mbetura
Vendos një punë në sfond për të pastruar shkarkimet te seksionet e anuluara dhe me gabime. Zgjidh `Disabled`, `Daily`, `Weekly` ose `Monthly`.

## Riprovimet dhe riprovimet e fragmenteve
Lidhet me kohën e pritjes së socket-it. Pasi një shkarkim konsiderohet i dështuar, vendos sa herë të riprovohet para se të heqë dorë.

# Planifikimi {#scheduling}
Mund të vendosësh periudhën kohore kur aplikacioni duhet të shkarkojë.

## Shkarko sipas orarit
Kur aktivizohet, shkarkimet ekzekutohen vetëm mes orëve `Start` dhe `End`. Jashtë kësaj dritareje ato presin në radhë. E dobishme për të shkarkuar natën, ose kur lidhja jote është e lirë.

## Përdor AlarmManager
Një metodë më e rreptë për ta zgjuar aplikacionin që të nisë shkarkimin në kohë, pasi WorkManager respekton kufizimet e pajisjes dhe mund të vonohet. Kërkon lejen për alarme të sakta, të cilën aplikacioni do ta kërkojë.

## Rivendos
Rivendos çdo preferencë në këtë ekran.
