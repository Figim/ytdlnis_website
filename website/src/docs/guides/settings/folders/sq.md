---
title: Cilësimet e dosjeve
titleTemplate: Cilësimet - Udhëzuesit
description: Cilësimet e dosjeve të YTDLnis.
---

# Cilësimet e dosjeve

<nav to="folders">

## Dosja e audios / Dosja e videos / Dosja e komandave të personalizuara
Ku ruhen shkarkimet e përfunduara të secilit lloj. Dosja e komandave të personalizuara përdoret nga lloji i shkarkimit Komandë dhe nga [Terminali](/sq/docs/guides/terminal).

## Lejo qasje në të gjitha direktoritë
Lejon aplikacionin të shkarkojë në direktori që janë të kufizuara si parazgjedhje. Jepe këtë leje nëse nuk mund të zgjedhësh një dosje, ose nëse shkarkimet në dosjen e zgjedhur dështojnë.

## Kontrollo hapësirën e disponueshme
Para se të nisë një shkarkim, kontrollon nëse ka mjaft hapësirë të lirë në pajisje për të. Nëse jo, shfaqet një paralajmërim.

## Dosja e cache
Nuk rekomandohet ta ndryshosh. Vendos një dosje të personalizuar ku qëndrojnë skedarët e përkohshëm të shkarkimit. Nëse aplikacioni nuk mund të shkruajë në destinacionin e vendosur, do të kthehet te dosja e brendshme e cache.

## Ruaji shkarkimet fillimisht në cache
E dobishme kur aplikacioni nuk mund të shkruajë direkt në vendndodhjen e shkarkimit dhe në vend të kësaj shkruan në dosjen e cache e pastaj e zhvendos skedarin.

## Mos shkarko si fragmente
Çaktivizon përdorimin e skedarëve .part gjatë procesit të shkarkimit.

## Mbaji fragmentet
Zakonisht duhet ta përdorësh këtë me cache të çaktivizuar. Përndryshe ato fragmente të mbetura do të jenë të padobishme, pasi shkarkimet e ardhshme do të kenë dosjen e tyre të re.

## Shablloni i emrit të skedarit
Shablloni i parazgjedhur për shkarkimet e reja, veçmas për videon dhe audion. Parazgjedhja është `%(uploader).30B - %(title).170B`. Shih [Shabllonet e emrit të skedarit](/sq/docs/guides/filename-templates).

## Ruaj në nëndirektori
I rendit automatikisht shkarkimet në dosje sipas metadatave. Zgjidh cilëndo nga `Website`, `Playlist` dhe `Media Type` dhe aplikacioni krijon dosjet brenda dosjes tënde të shkarkimeve.

## Shkurto emrat e skedarëve
I shkurton emrat e gjatë të skedarëve që të mos i kalojnë kufijtë e sistemit të skedarëve.

## Kufizo emrat e skedarëve
I kufizon emrat e skedarëve vetëm në karaktere ASCII dhe shmang "&" dhe hapësirat në emra. E dobishme nëse për ndonjë arsye shkarkimi nuk përfundon kur titulli ka karaktere të çuditshme që Android nuk i mbështet. Ose aktivizo këtë ose ndrysho titullin te karta e shkarkimit.

## Skedarët e përkohshëm
Tregon sa hapësirë zënë skedarët e punës së aplikacionit dhe të lejon t'i menaxhosh:

| Artikulli | Çfarë është |
| --- | --- |
| Shkarkimet e papërfunduara | Skedarë të pjesshëm të shkarkimeve të ndalura ose të dështuara, të ruajtur që të mund të vazhdohen. |
| Info-JSON | Metadata të ruajtura të videos që yt-dlp të mos ketë nevojë t'i marrë sërish. |
| Cache e yt-dlp | Të dhëna që yt-dlp i ripërdor mes ekzekutimeve, si nënshkrimet e luajtësit të YouTube. |
| Konfigurimet e përkohshme | Konfigurime komandash, lista URL-sh dhe skedarë të tjerë jetëshkurtër. |
| APK-të e shkarkuara | APK të shkarkuara për përditësimet e aplikacionit dhe paketave. |

- `Move temporary files` i kalon skedarët e shkarkimit nga cache te dosja e shkarkimeve.
- `Clear everything` fshin gjithçka më sipër. Nuk mund të zhbëhet, dhe shkarkimet e papërfunduara nuk mund të vazhdohen më pas.
