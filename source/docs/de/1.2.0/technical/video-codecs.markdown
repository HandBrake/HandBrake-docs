---
Type:            article
State:           [ obsolete ]
Title:           Video Codecs
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Video Codecs
============
-   H.264 (x264): Für MPEG-4 Part 10, auch bekannt als H.264/AVC.
    -   Dies ist HandBrakes standard Kodierer. Er bietet exzellente Performanz, Dateigröße und Qualität
    -   Er wird von vielen Playern und Mobilgeräten unterstützt.

-   H.264 (Intel QuickSync): For MPEG-4 Part 10, auch bekannt als H.264/AVC.
    -   Verfügbar auf Intel Prozessoren mit Intel HD Graphics.
    -   QuickSync ist ein hardwarebasierter H.264 Kodierer, daher ist er sehr schnell und belastet die CPU weit weniger als x264.
    -   Intel Haswell oder neuere CPU's sind empfohlen, da diese die besten Resultate in Bezug auf Qualität und Dateigröße liefern.
    -   Du kannst üblicherweise größere (aber meistens nicht viel größere) Dateigrößen und ein bisschen Qualitätsverlust verglichen mit einer äquivalenten x264 Kodierung erwarten. Dies ist ein Kompromiss mit dem die meisten leben können.

-   H.265 (x265): auch bekannt als HEVC
    -   H.265 ist die nächste Generation von Kodierern welcher noch bessere Qualität und Dateigrößen bietet als H.264.
    -   Beachte, dass die Kodierung von H.265 weitaus komplizierter ist als bei H.264, deshalb ist es auch langsamer als HandBrake's H.264 Kodierer.
    -   Die meisten moderene Mobiltelefone unterstützen HEVC bereits aber es ist allgemein nicht so weit verbreitet wie H.265.

-   MPEG-4 (ffmpeg): HandBrake bietet FFmpeg's MPEG-4 Part 2 Kodierer für schnelle qualitätsarme Kodierungen.
    -   Bessere Unterstützung von alten Geräten wie DVD Playern und billigen "MP4 Playern".
    -   Niedrigere Qualität als H.264 aber typischerweise schnellere Kodierungen.

-   MPEG-2 (ffmpeg): HandBrake bietet FFmpeg's MPEG-2 Part 2 Kodierer für schnelle qualitätsarme Kodierungen.
    -   Schnelle Kodierung aber benötigt größere Dateien als MPEG-4 für den selben Grad an Qualität. Hilfreich für Testen aber nicht viel mehr.

-   VP8 (Libvpx):
    -   Ein freier und offener Video Codec welcher signifikante Verbesserungen gegenüber Theora bietet.

-   VP3 (Theora): HandBrake kann auch Theora Video kodieren. Theora Video mit Vorbis Audio in dem Matroska Container (MKV) repräsentiert eine wahrhaft freie Option für multimedia Kodierung.
    -   Theora muss jedoch noch ausreifen in Bezug auf die Qualität bei einer bestimmten Bitrate.
