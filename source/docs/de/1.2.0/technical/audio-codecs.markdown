---
Type:            article
State:           [ obsolete ]
Title:           Audio Codecs
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

Audio Codecs
============

Kodierung vs Passthrough (Durchleiten)
-----------------------

HandBrake unterstützt zwei Modi für das Handling von Audiospuren der Quelle.

Es kann entweder:

-   Die Spur in ein neues Format neukodieren. Zum Beispiel AC3 oder DTS Audio von einer DVD oder Blu-Ray in AAC für das Abspielen auf Mobilgeräten.
-   Passthru kopiert einfach die Audiospur von der Quelle in die neu kodierte Datei.

Audio Kodierer
--------------

-   AAC:
    -   Advanced Audio Coding (AAC) ist eine der beliebtesten Formate die in HandBrake verfügbar ist und wird von sehr vielen Mediaplayern und Mobilgeräten unterstützt.
    -   Unter Linux und Windows verwendet HandBrake den FFmpeg AAC Kodierer.
    -   Unter Mac verwendet HandBrake Apple's CoreAudio AAC Kodierer. Es ist bekannt für seine überragene Qualität und ist die Standardoption für Mac Benutzer.

-   HE-AAC (nur unter Mac)
    -   High Efficiency AAC Kodierer. Dieser Kodierer ist für niedrige Bitraten optimiert was für Streaming nützlich sein kann.
    -   Nur unter Mac verfügbar.

-   MP3:
    -   HandBrake bietet auch den MP3 Audio Codec an, für den es den sehr geschätzten LAME Kodierer verwendet.

-   Vorbis:
    -   HandBrake bietet zudem auch Vorbis Audiokodierung an, für den es den aoTuV Branch verwendet der Anpassungen für die Qualität beinhaltet.

-   AC3:
    -   HandBrake kann mithilfe von FFmpeg nach AC3 kodieren.
    -   Dies ist nicht dasselbe wie Passthru. Du kannst jede beliebige Audiospur nach AC3 kodieren.

-   Flac 16 and 24bit (FFmpeg)
    -   Verlustfreie Audiokompression.
    -   Verfügbar in MKV Dateien.
    -   Es ist derzeit nicht möglich den Kompressionsgrad der standardmäßig auf "5" gesetzt ist, zu dem ffmpeg Kodierer durchzuleiten.
 

Passthru Optionen
-----------------
HandBrake unterstützt Passthru für eine eingeschränkte Zahl beliebter quelloffener Formate.
Diese sind AC3, DTS, DTS-HD, TrueHD, MP3 oder AAC (Passthru)

Passthru kopiert das Audio Bit für Bit von der Quelle dadurch gibt es keinen Qualitätsverlust des Audios.
Diese Audiospuren können ziemlich groß sein und die finale Dateigröße stark beeinflussen.


Auto Passthru
-------------
In der Liste der Audiokodierer gibt es eine Option die "Auto Passthru" genannt wird. Beim Kodieren leitet dies automatisch jegliche unterstütze Formate durch. Falls das Quellformat nicht unterstützt wird, oder der Container das Format nicht unterstützt, wird der Fallback Kodierer verwendet. Dieser ist standardmäßig AAC.
