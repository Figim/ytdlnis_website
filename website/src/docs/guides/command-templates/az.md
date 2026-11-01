---
title: Əmr Şablonları
titleTemplate: Bələdçilər
description: YTDLnis-də Əmr Şablonlarını necə tənzimləməli.
---

# Tətbiqdən yt-dlp əmrlərini necə icra etməli

Əmr şablonları öz [yt-dlp seçimlərinizi](https://github.com/yt-dlp/yt-dlp#usage-and-options) yadda saxlamağa və onları istənilən yükləmə üçün yenidən istifadə etməyə imkan verir. Onları [Yükləmə Kartının](/docs/guides/download-card) **Əmr** tabında seçirsiniz.

::: tip Əmr şablonunu necə yaratmalı
1. Keçin: <nav to="commandtemplates">
2. `+` düyməsinə toxunun
3. Başlıq verin və yt-dlp arqumentlərini yazın, məsələn: `-x --audio-format mp3 --embed-thumbnail`
4. `Şablon yarat` düyməsinə sıxın
:::

Şablonda URL və ya `yt-dlp` sözünü yazmırsınız. Tətbiq linki özü əlavə edir və çıxış qovluğunu idarə edir.

## Şablondan istifadə

- Yükləmə kartının **Əmr** tabında siyahıdan bir və ya bir neçə şablon seçin. Çoxlu seçim etsəniz, onların arqumentləri bir-birinə birləşdiriləcək.
- [Terminal](/docs/guides/terminal) bölməsində daxil etmək üçün menyudan birini seçin.
- Audio və ya video yükləmələrində [Əlavə Əmr](/docs/guides/extra-commands) kimi istifadə edin.

::: tip Qeyd
Əmr növü ilə yükləmədə emal tənzimləmələri (miniatürün yerləşdirilməsi, SponsorBlock, konteynerlər və s.) tətbiq olunmur, çünki hər şeyi öz əmrinizlə idarə edirsiniz. Yükləmə, kuki faylları və şəbəkə tənzimləmələri kimi əsas parametrlər tətbiq olunmağa davam edir.
:::

Bu yükləmələr üçün standart qovluq <nav to="folders"> bölməsində təyin edilmiş `Xüsusi əmr qovluğu`dur.

## Şablonların idarə edilməsi

- Toxunaraq şablonu **Düzəliş edin** və ya **Silin**. Şablonlar üçün sürüşdürmə jestləri aktivdirso, üzərində sürüşdürərək əməliyyat edə bilərsiniz.
- Alətlər panelindən şablonlarınızı **Axtarın**.

### Şablon parametrləri

Şablon yaradarkən və ya düzəliş edərkən aşağıdakıları təyin edə bilərsiniz:

| Seçim | Nə iş görür |
| --- | --- |
| **Başlıq** və **Məzmun** | Şablonun adı və yt-dlp arqumentləri. |
| **Üstünlük verilən əmr şablonu** | Yükləmə kartının Əmr tabında susmaya görə seçilir. |
| **Əlavə əmr** | Şablonu hər bir audio və/və ya video yükləməsinə əlavə edir. `Audio`, `Video` və ya hər ikisini seçə bilərsiniz. |
| **Məlumatların alınması** | Tətbiq məlumatları əldə edərkən şablonu əlavə edir. <nav to="advanced"> bölməsində `Məlumat almaq üçün əlavə əmr` aktiv olmalıdır. |
| **URL Regex** | Şablonu (əlavə əmr kimi) yalnız bu müntəzəm ifadələrdən (regex) birinə uyğun gələn linklər üçün istifadə edir. Məsələn, `youtube\.com` onu yalnız YouTube linkləri ilə məhdudlaşdırır. |
| **Qısayollar** | Məzmuna qısayollarınızı tez daxil edin. |

## Üstünlük Verilən Əmr Şablonu

Bu seçim aktiv olduqda, yükləmə kartını əmr tabında açdıqda bu əmr şablonu susmaya görə seçiləcək. Onu şablonun parametrlərindən təyin edin.

Kartın həmin tabda açılmasını istəyirsinizsə, <nav to="downloads"> bölməsində `Üstünlük verilən yükləmə növü` seçimini də `Əmr` olaraq təyin edin.

## Əlavə Əmr

Bu seçim aktiv olduqda, hər bir yükləmə öz konfiqurasiyası ilə yanaşı bu əmri də sonuna əlavə edəcək. Baxın: [Əlavə Əmrlər](/docs/guides/extra-commands).

## Məlumatların Alınması üçün Əlavə Əmr (Qabaqcıl)

Bu seçim susmaya görə görünmür, lakin onu qabaqcıl tənzimləmələrdə aktivləşdirə bilərsiniz. Əslində tətbiq məlumat toplama prosesi zamanı bu əmr şablonunu əlavə edir. Məlumatların alınması tətbiq tərəfindən yerinə yetirildiyi və istifadəçi tərəfindən konfiqurasiya edilə bilmədiyi üçün qabaqcıl istifadəçilər üçün bəzi hallarda faydalıdır.

## Qısayollar

Qısayollar əmr şablonu yaratmaq üçün istifadə edə biləcəyiniz kiçik kod parçalarıdır.

Onları göstərildiyi hər yerdə qısayollar düyməsindən yaradın, məsələn `--embed-metadata` və ya `--sponsorblock-remove all`. Sonra bütün mətni yenidən yazmaq əvəzinə, əmr mətni sahəsinə daxil etmək üçün onların üzərinə toxuna bilərsiniz.

Əmr şablonu / qısayol yaradarkən aşağıdakı hallarda onlara daxil ola bilərsiniz:
- yükləmə kartındakı əmr tabında şablonu dəyişməyə çalışarkən
- video/audio yükləməsinə əlavə əmr əlavə etməyə çalışarkən
- terminal əmri yazmağa çalışarkən

## Müqəvaya kopyala / Şablonları idxal et

Bütün əmr şablonlarınızı JSON obyekti kimi müqəvaya (clipboard) ixrac etmək üçün bu funksiyadan istifadə edə bilərsiniz.
Bu obyekti YTDLnis quraşdırılmış hər kəslə bölüşə bilərsiniz. Onların yalnız bunu müqəvaya kopyalaması və şablonları idxal et düyməsini sıxması kifayətdir. Çox sadədir.

Şablonlar və qısayollar [yedəkləmələrin](/docs/guides/backups) də bir hissəsidir.