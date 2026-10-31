---
title: Shabllonet e emrit të skedarit
titleTemplate: Udhëzuesit
description: Si të krijosh shabllone të personalizuara për emrin e skedarit.
---

# Çfarë janë shabllonet e emrit të skedarit?

Shabllonet e emrit të skedarit janë një mënyrë për t'i dërguar argumente yt-dlp për të konfiguruar si shkruhet emri i skedarit të një artikulli shkarkimi.

Shabllon shembull:

`%(uploader).30B - %(title).170B`

Rezultati shembull:

`Eminem - Rap God`

Ky shabllon i thotë yt-dlp të përdorë ngarkuesin e videos jo më të gjatë se 30 bajt dhe titullin jo më të gjatë se 170 bajt.

Shabllonet e emrit të skedarit krijohen përmes etiketave të metadatave, të cilat duken kështu:

`%(tagname)s`

Seksioni i sugjerimeve të jep të gjitha etiketat e mundshme që mbështet yt-dlp. Kjo nuk do të thotë që artikulli yt i shkarkimit do të mund t'i përkthejë nëse nuk ka ato metadata, p.sh. përdorimi i një etikete liste luajtjeje në shkarkimin e një artikulli të vetëm.

## Ku vendosen

- **Parazgjedhja për të gjitha shkarkimet**: <nav to="folders"> `Filename template`. Ka një për videon dhe një për audion.
- **Për një shkarkim të vetëm**: opsioni `Filename Template` te [Karta e shkarkimit](/sq/docs/guides/download-card).
- **Për disa artikuj njëherësh**: te [Karta e shkarkimit të shumëfishtë](/sq/docs/guides/playlists#multiple-download-card).
- Te [Terminali](/sq/docs/guides/terminal), nga menyja e shiritit të veglave.

Gjatë ndryshimit, `Preview filename` të tregon si do të duket rezultati për artikullin aktual. Shabllonet që përdor mund të ruhen te `My filename templates` që t'i zgjedhësh sërish më vonë.

## Etiketat e zakonshme

| Etiketa | Kuptimi |
| --- | --- |
| `%(title)s` | Titulli i videos |
| `%(uploader)s` | Emri i plotë i ngarkuesit |
| `%(channel)s` | Emri i kanalit |
| `%(id)s` | Identifikuesi i videos |
| `%(upload_date)s` | Data e ngarkimit, `YYYYMMDD` |
| `%(duration_string)s` | Kohëzgjatja, `HH:mm:ss` |
| `%(playlist)s` | ID-ja ose titulli i listës së luajtjes |
| `%(playlist_title)s` | Emri i listës së luajtjes |
| `%(playlist_index)s` | Indeksi i artikullit në listën e luajtjes |
| `%(playlist_autonumber)s` | Pozicioni i artikullit në radhën e shkarkimeve |
| `%(autonumber)s` | Numër që rritet me çdo shkarkim |
| `%(rownumber)s` | Numri i rreshtit të artikullit kur shkarkon shumë artikuj |
| `%(artist)s`, `%(album)s`, `%(track)s` | Metadatat e muzikës, kur faqja i ka |
| `%(webpage_url_domain)s` | Domeni i faqes së internetit |
| `%(resolution)s` | Rezolucioni i formatit |
| `%(extractor)s` | Emri i extractor-it |
| `%(playlist_index,playlist_autonumber&{}. \|)s%(title)s` | Titulli me indeksin e listës së luajtjes përpara, nëse ekziston |

Aplikacioni liston çdo etiketë që mbështet yt-dlp bashkë me llojin e saj, te sugjerimet poshtë fushës së tekstit. Prek një etiketë për ta futur.

## Shkurtimi dhe formatimi

Mund ta kufizosh gjatësinë e një etikete. `%(title).170B` e kufizon titullin në 170 bajt, dhe është e dobishme sepse Android ka një kufi për gjatësinë e emrit të skedarit. Shablloni i parazgjedhur `%(uploader).30B - %(title).170B` i mban emrat brenda atij kufiri. Shih edhe `Trim filenames` te <nav to="folders">.

Veçori të tjera të shablloneve të daljes së yt-dlp, si vlerat e parazgjedhura (`%(uploader|Unknown)s`) dhe alternativat (`%(artist,uploader)s`), funksionojnë gjithashtu. Shih [dokumentacionin e yt-dlp](https://github.com/yt-dlp/yt-dlp#output-template).

## Shkarkimi në një nëndosje

Shabllon shembull:

`mysubfoldername/%(title)s`

Kjo do ta shkarkojë skedarin në vendndodhjen tënde të preferuar të shkarkimit, do të krijojë dosjen `mysubfoldername` dhe pastaj do të vendosë aty skedarin e shkarkuar me emrin e titullit.

Mund të shkosh një hap më tej duke përdorur etiketa. Si p.sh. përdorimi i emrit të listës së luajtjes si emër nëndosjeje:

`%(playlist)s/%(playlist_index)s - %(title)s`

::: tip Nuk nevojitet shabllon
Nëse të duhet vetëm një strukturë e thjeshtë, nuk ke nevojë të shkruash shabllon. Përdor `Save to subdirectory` te <nav to="folders"> për t'i vendosur automatikisht shkarkimet në dosje me emrin e **faqes së internetit**, **listës së luajtjes** ose **llojit të medias**.
:::

::: tip Etiketa e prapashtesës
Etiketa %(ext)s, që përfaqëson prapashtesën e skedarit, futet automatikisht nga aplikacioni dhe nuk ke nevojë ta shkruash te shablloni i emrit të skedarit
:::
