---
title: Cookies
titleTemplate: Udhëzuesit
description: Si të qasesh në media me cookies.
---

# Cookies

Mund të të duhen cookies në rastet kur përmbajtja që po përpiqesh të hapësh kërkon identifikim, ose thjesht faqja është mjaft e rreptë sa të mos të lejojë qasje të lirë pa cookies.

Cookies të lejojnë të:
- hapësh video private
- hapësh video të disponueshme vetëm me abonim / video vetëm për anëtarë
- hapësh përmbajtje me kufizim moshe
- kesh formate shtesë për një shkarkim të caktuar, si formati me ID `141` që përfaqëson audio me cilësi të LARTË në YouTube Music.
- marrësh [rekomandime videosh](/sq/docs/guides/home#video-recommendations) të personalizuara, si "watch later", videot e pëlqyera ose historikun.

::: tip Si të hapësh ekranin e Cookies
Shko te <nav to="cookies">
:::

## Krijimi i një cookie

Për të krijuar një, shtyp `New Cookie` dhe shkruaj domenin e faqes së internetit. Për shembull `https://youtube.com`.
Do të hapet një dritare shfletuesi dhe mund të hysh në llogarinë tënde si zakonisht. Pasi të mbarosh, shtyp butonin OK sipër dhe ke përfunduar. Aplikacioni e ka ruajtur regjistrin e cookie-t në bazën e vet të brendshme të të dhënave dhe ka gjeneruar brenda një skedar cookies.txt me të cilin punon yt-dlp.

Dritarja e shfletuesit ka një meny ku mund të kalosh te versioni desktop i faqes, gjë që disa faqe e kërkojnë për t'u identifikuar siç duhet.

## Përdorimi i cookies

Cookies përdoren vetëm kur `Use cookies` është aktiv. Çelësi ndodhet në krye të ekranit të Cookies, si dhe te <nav to="downloads">. Kur është aktiv, yt-dlp-së i jepen cookies e ruajtura për çdo shkarkim. Mund ta shohësh dhe heqësh çdo cookie të ruajtur nga lista.

Nëse hap kartën e shkarkimit ose kërkon diçka dhe një faqe të thotë të identifikohesh, aplikacioni të sugjeron të aktivizosh cookies.

## Importimi i cookies

Nëse ke gjeneruar cookies diku tjetër, thjesht kopjo përmbajtjen e tyre në clipboard dhe përdor funksionin `Import from clipboard` te menyja sipër. Përmbajtja duhet të jetë në formatin Netscape cookies.txt që përdor yt-dlp.

## Eksportimi i cookies

Mund t'i eksportosh cookies në clipboard, ose si skedar .txt te dosja e shkarkimeve.

## Fshirja e cookies

Hiq një cookie të vetme nga lista, ose përdor `Delete all cookies` nga menyja.

## Header-i User-Agent {#user-agent-header}

Kur kjo aktivizohet, ndërsa gjeneron cookies, webview merr header-in user agent të përdorur për të shfaqur faqen dhe e ruan te preferencat e pajisjes. Ky më pas përdoret kur shkarkon, me komandën:
`--add-header "User-Agent:<header-i që u kopjua>"`

Disa faqe i lidhin cookies me shfletuesin e përdorur për identifikim. Nëse cookies të ndalojnë së funksionuari, provo ta aktivizosh këtë dhe krijo sërish cookie-n. Ndodhet te <nav to="advanced">.

::: warning Mbaji cookies private
Cookies japin qasje në llogarinë tënde. Mos i ndaj me askënd cookies e eksportuara ose [kopjet rezervë](/sq/docs/guides/backups) që i përmbajnë. Disa faqe mund t'i shënjojnë llogaritë që shkarkojnë shumë, ndaj mendo të përdorësh një llogari dytësore.
:::

::: tip YouTube
YouTube i rrotullon cookies për llogaritë e përdorura në një shfletues. Nëse cookies skadojnë shpejt, shih udhëzuesin [YouTube](/sq/docs/guides/youtube).
:::
