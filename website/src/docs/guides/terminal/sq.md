---
title: Terminali
titleTemplate: Udhëzuesit
description: Si të përdorësh emulatorin e integruar të terminalit.
---

# Terminali
Si të përdorësh emulatorin e integruar të terminalit.

Terminali në **YTDLnis** është një emulator i vërtetë terminali, i ndërtuar mbi të njëjtën pamje terminali si Termux. Të jep një shell që i njeh tashmë yt-dlp, Python, FFmpeg dhe JS runtimes që përdor aplikacioni, kështu që mund të ekzekutosh çdo komandë yt-dlp dhe të menaxhosh edhe mjetet pas tij.

::: tip Si ta hapësh
Shko te <nav to="terminal">
:::

## Ekzekutimi i yt-dlp

Shkruaj komandën si do ta shkruaje në kompjuter dhe shtyp enter:

`yt-dlp -f bestaudio -x --audio-format mp3 "https://www.youtube.com/watch?v=..."`

Komanda `yt-dlp` konfigurohet nga aplikacioni. Ajo ekzekuton të njëjtin yt-dlp me të cilin shkarkon aplikacioni dhe e drejton automatikisht te FFmpeg dhe JS runtimes të aplikacionit, si dhe te [cookies](/sq/docs/guides/cookies) e tua nëse `Use cookies` është aktiv. Nuk ke nevojë të konfigurosh asgjë.

Gjëra të dobishme për të provuar:

| Komanda | Çfarë bën |
| --- | --- |
| `yt-dlp -F "<lidhja>"` | Liston të gjitha formatet e një lidhjeje. |
| `yt-dlp --version` | Tregon versionin e instaluar të yt-dlp. |
| `yt-dlp -U` | Përditëson yt-dlp. |
| `yt-dlp -J "<lidhja>"` | Printon të gjitha metadatat e një lidhjeje si JSON. |
| `yt-dlp --list-extractors` | Liston çdo faqe interneti që mbështet yt-dlp. |

## Komandat e disponueshme

Këto janë të disponueshme në çdo seancë, kur janë të instaluara:

| Komanda | Mjeti |
| --- | --- |
| `yt-dlp` | yt-dlp |
| `python` | Python, ai mbi të cilin ekzekutohet yt-dlp |
| `pip` | Menaxheri i paketave të Python (njësoj si `python -m pip`) |
| `ffmpeg` | FFmpeg |
| `node`, `npm` | NodeJS dhe menaxheri i tij i paketave |
| `deno` | Deno |
| `qjs` | QuickJS |
| `aria2` | aria2c |

Cilat prej tyre ekzistojnë varet nga [Paketat](/sq/docs/guides/packages) që ke. Përveç tyre ke komandat e zakonshme të shell-it të Android si `ls`, `cd`, `cat`, `cp`, `mv` dhe `rm`.

Shell-i nis te hapësira e përbashkët e ruajtjes së pajisjes, ndaj `ls` tregon dosjet e tua të zakonshme, si `Download`, `Movies` dhe `Music`.

## Përdorimi i avancuar

Meqë ke një shell të vërtetë me Python brenda, mund ta mirëmbash mjedisin ku ekzekutohet yt-dlp.

### Përditëso yt-dlp

```sh
yt-dlp -U
```

Mund ta përditësosh edhe nga <nav to="update"> ose ta lësh aplikacionin ta bëjë automatikisht. Shih [Përditësimi](/sq/docs/guides/settings/updating).

### Përditëso ose instalo paketa pip

```sh
pip install -U pip
pip list
pip install -U <paketa>
pip install <paketa>
```

Përdore këtë për të instaluar paketa Python që nuk janë të instaluara, për shembull varësi opsionale që mund të përdorë yt-dlp ose plugin-e që do. Pas instalimit, yt-dlp (që ekzekutohet në të njëjtin Python) mund t'i përdorë.

::: tip Shënim
Paketat që duhet të kompilohen, ose që varen nga libraritë e sistemit që Android nuk i ka, mund të dështojnë të instalohen. Paketat e pastra Python funksionojnë më mirë. Pip kërkon lidhje interneti.
:::

### Node dhe mjete të tjera

Nëse ke instaluar paketën NodeJS, `node` dhe `npm` funksionojnë gjithashtu, njësoj edhe për `deno` dhe `qjs`. Ato janë edhe ato që përdor yt-dlp për sfidat JavaScript të disa faqeve.

### Ekzekuto çdo gjë tjetër që të duhet

Testo një komandë këtu para se ta kthesh në [Shabllon komande](/sq/docs/guides/command-templates), eksploro skedarët e shkarkuar me `ls`, ose konverto një skedar me `ffmpeg -i input.mp4 output.mp3`.

## Seancat

Çdo terminal është një seancë. Nis të tjera me butonin `Add` te shiriti i veglave dhe kalo mes tyre nga lista e seancave. Terminali vazhdon të ekzekutohet në sfond me një njoftim, kështu që një komandë e gjatë nuk ndalon kur largohesh nga ekrani. Përdor `Exit` për ta mbyllur një seancë. Edhe njoftimi të lejon ta mbyllësh.

## Shkrimi në telefon

Poshtë terminalit ka një rresht me taste shtesë që tastiera e telefonit nuk i ka, si `ESC`, `TAB`, `CTRL`, `ALT` dhe shigjetat. Prek `CTRL` dhe pastaj një shkronjë për të dërguar një kombinim, për shembull `CTRL` pastaj `C` për të ndalur një komandë në ekzekutim. Nëse përdor tastierë fizike, funksionojnë edhe shkurtoret e zakonshme.

## Opsionet

Shiriti poshtë ka shkurtore që shkruajnë në terminal për ty:

- **Command templates**: zgjidh një ose më shumë nga [shabllonet e komandave](/sq/docs/guides/command-templates) dhe përmbajtja e tyre shkruhet në terminal. Çaktivizohet nëse nuk ke asnjë.
- **Shortcuts**: fut një nga shkurtoret e ruajtura.
- **Filename template**: zgjidh një [shabllon emri skedari](/sq/docs/guides/filename-templates) dhe ai shkruhet si tekst.
- **Custom command folder**: zgjidh një dosje dhe shkruhet vendndodhja e saj, për shembull për ta përdorur si vendndodhje daljeje.
- **Text size**: zmadho ose zvogëlo tekstin.

Te shiriti sipër mund t'i mbështjellësh rreshtat e gjatë të daljes dhe të kopjosh në clipboard gjithçka që shfaqet në terminal.

## Terminali në menynë e ndarjes

Te cilësimet e përgjithshme aktivizo `Show terminal in share menu` për ta pasur terminalin si opsion te menyja e ndarjes kur ndan një URL. Hapet një seancë e re me `yt-dlp "<lidhja>"` të shkruar tashmë, gati që të shtosh opsione dhe të shtypësh enter.

## Terminali kundrejt shkarkimit me komandë

| | Terminali | Lloji i shkarkimit Komandë |
| --- | --- | --- |
| Ku | More ➔ Terminal | Skeda Komandë e [Kartës së shkarkimit](/sq/docs/guides/download-card) |
| Çfarë është | Një shell i plotë, ti kontrollon gjithçka | Ekzekuton një shabllon komande për një lidhje |
| Rezultati | Dalja shfaqet drejtpërdrejt | Shfaqet në radhë dhe në historik si një shkarkim i zakonshëm |
| Më i miri për | Eksperimentim, përditësim mjetesh, instalim paketash, komanda të njëhershme | Ripërdorim shabllonesh, shumë artikuj |
