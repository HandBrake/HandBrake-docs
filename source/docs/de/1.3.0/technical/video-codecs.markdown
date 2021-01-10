---
Type:            article
State:           [ draft ]
Title:           Videocodecs
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Videocodecs
============

Folgende Videocodecs sind zur Verwendung in HandBrake verfügbar:

- H.264 (x264):
    - MPEG-4 Part 10, auch bekannt als H.264/AVC
    - Bietet exzellente Performance, Dateigröße und Qualität
    - Er wird von vielen Playern und Mobilgeräten unterstützt

- H.264 (Intel QSV):
    - MPEG-4 Part 10, auch bekannt als H.264/AVC
    - Hardwarebasierter Kodierer verfügbar auf Intel Prozessoren mit Intel HD Graphics (Haswell oder neuere CPU's sind empfohlen, da diese die besten Resultate in Bezug auf Qualität und Dateigröße liefern).
    - Sehr schnell und belastet die CPU weit weniger als H.264 Softwarekodierer wie x264.
    - Du kannst üblicherweise größere (aber meistens nicht viel größere) Dateigrößen und ein bisschen Qualitätsverlust verglichen mit einer äquivalenten x264 Kodierung erwarten. Dies ist vor allem auf Low-Performance Geräten akzeptabel.

- H.265 (x265):
    - MPEG-H Part 2, auch bekannt als H.265/HEVC
    - Nachfolger von H.264, welcher noch bessere Qualität und Dateigrößen bietet.
    - Seine Stärken inkludieren bessere Qualität und Komprimierung für niedrige Bitraten und für Ultra High Definition.
    - Viel langsamer als Software H.264/AVC Kodierer
    - Eingeschränkte Kompatibilität mit Endgeräten (verglichen mit H.264/AVC), dies ändert sich jedoch schnell

- MPEG-4 (ffmpeg):
    - MPEG-4 Part 2, auch bekannt als MPEG-4 Visual
    - Vorgänger von H.264/AVC, welcher schnell ist, jedoch nicht so eine gute Qualität produziert wie H.264/AVC
    - Kompatibel mit alten Geräten und billigen DVD/Flash/Network Playern

- MPEG-2 (ffmpeg):
    - MPEG-2 Part 2, auch bekannt als MPEG-2 Visual und H.262
    - Vorgänger von MPEG-4 Visual, welcher sehr schnell ist, jedoch nicht so eine gute Qualität produziert wie moderne Codecs
    - Produziert größere Dateien als moderne Codecs

- VP9 (libvpx):
    - Entwickelt von Google als Nachfolger von VP8; Freier und offener Videocodec
    - Vergleichbar mit H.265/HEVC in Bezug auf Qualität und Dateigröße
    - Langsamer als x265

- VP8 (Libvpx):
    - Erstellt von On2 Technologies und aufgekauft von Google; freier und offener Videocodec
    - Nachfolger von Theora welcher signifikante Verbesserungen bietet; vergleichbar mit H264/AVC

- VP3 (Theora):
    - Entwickelt von Xiph.Org Foundation basierend auf On2 Technologies' VP3; freier und offener Videocodec
    - Vergleichbar mit MPEG-4 Visual in Bezug auf Qualität und Dateigröße
