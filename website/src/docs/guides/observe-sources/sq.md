---
title: Vëzhgo burimet
titleTemplate: Udhëzuesit
description: Si të konfigurosh Vëzhgimin e burimeve në YTDLnis.
---

# Vëzhgo burimet
Si të konfigurosh Vëzhgimin e burimeve në YTDLnis.

Vëzhgimi i burimeve është një mënyrë që aplikacioni të kontrollojë periodikisht për ndryshime në një burim, si një listë luajtjeje ose kanal, dhe të shkarkojë videot e ngarkuara rishtas prej tij.

::: tip Si të krijosh një burim
1. Shko te <nav to="observe-sources">
2. Prek `New source`
:::

- Mund të konfigurosh një orar të caktuar sipas orëve, ditëve, ditëve të javës ose mujor.
- Sa shpesh të kontrollojë
- Të ndalojë pas një numri të caktuar kontrollesh

Konfigurimi i shkarkimit ndan të njëjtat cilësime me shkarkimin tënd të zakonshëm. Mëso më shumë [këtu.](/sq/docs/guides/download-card)

## Krijimi i një burimi

1. Ngjit lidhjen e listës së luajtjes, kanalit ose çdo faqeje tjetër që liston video.
2. Konfiguro shkarkimin siç do ta bëje te [Karta e shkarkimit](/sq/docs/guides/download-card): audio ose video, kontejneri, formati, dosja, shablloni i emrit të skedarit e kështu me radhë. Çdo artikull i ri do të shkarkohet me këtë konfigurim.
3. Vendos orarin (shih më poshtë).
4. Shtyp `Create`.

## Orari

| Opsioni | Kuptimi |
| --- | --- |
| **Every** | Kontrollo çdo N orë, ditë, javë ose muaj. |
| **Time** | Ora e ditës për kontrollin. |
| **Days of the week** | Kur kontrollon çdo javë, zgjidh në cilat ditë të javës ekzekutohet. |
| **Day of the month** | Kur kontrollon çdo muaj, zgjidh ditën e muajit. |
| **Starts** | Data kur nis kontrollin. |
| **Ends** | `Never`, në një datë të caktuar, ose `After` një numër herësh. |

Kontrolli i radhës i planifikuar shfaqet te karta e burimit.

## Cilësimet

`Get New Uploads Only`

Kur aktivizohet, ekzekutimi i parë nuk do të shkarkojë asgjë. Do t'i regjistrojë të gjithë artikujt e disponueshëm dhe do t'i ruajë si të përpunuar, kështu që herën tjetër do të injorohen

`Sync With Source`

Nëse burimi ka fshirë një artikull nga lista e luajtjes / kanali, aplikacioni do ta fshijë edhe nga historiku yt i shkarkimeve, bashkë me skedarin

`Retry Missing Downloads`

Ky kontrollon historikun tënd të shkarkimeve. Nëse ke fshirë një artikull nga historiku, aplikacioni do të përpiqet ta shkarkojë sërish që historiku dhe burimi të jenë të sinkronizuar.

## Menaxhimi i burimeve

Çdo kartë burimi tregon ekzekutimin e radhës të planifikuar ose që është në pauzë. Prek një burim për të hapur detajet e tij, ku sheh sa ekzekutime ka bërë dhe sa artikuj ka përpunuar dhe anashkaluar (prek etiketat për të parë lidhjet). Prej andej mund të:

- E **pauzosh** ose ta rifillosh
- **Kontrollosh tani** për ta ekzekutuar menjëherë në vend që të presësh orarin e radhës
- **Ndryshosh** konfigurimin ose orarin e tij
- E **fshish**
- Hapësh **cilësimet** e tij për opsionet më poshtë

Cilësimet kanë disa opsione për kur do të ndryshosh se çfarë e konsideron burimi si të përpunuar:

| Veprimi | Çfarë bën |
| --- | --- |
| **Re-scan from scratch** | Harron artikujt e përpunuar dhe shkarkon gjithçka që nuk është ruajtur tashmë. |
| **Skip current backlog** | Shënon si të kryer gjithçka që ndodhet aktualisht në burim. Shkarkohen vetëm ngarkimet e ardhshme. |
| **Un-skip ignored uploads** | Shkarkon ngarkimet ekzistuese që ekzekutimi i parë i anashkaloi për shkak të `Get New Uploads Only`. |

Mund t'i fshish të gjitha burimet nga menyja shtesë.

## Bëje të besueshëm {#making-it-reliable}

Vëzhgimi i burimeve ekzekutohet në sfond. Android është agresiv në ndalimin e aplikacioneve në sfond, prandaj:

- Çaktivizo optimizimin e baterisë për aplikacionin (<nav to="general"> `Ignore battery optimization`).
- Nëse ekzekutimet nuk ndodhin në orën e saktë, aktivizo `Use AlarmManager instead of WorkManager for scheduling` te <nav to="downloads"> dhe jep lejen për alarme të sakta kur të kërkohet.
- Burimet rikthehen pas rinisjes së pajisjes.

Burimet e vëzhguara përfshihen te [kopjet rezervë](/sq/docs/guides/backups).
