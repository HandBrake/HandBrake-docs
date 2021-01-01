---
Type:            article
State:           [ draft ]
Title:           Audioqualität
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Audioqualität
=============================
Die Einstellungen für die Qualität der Audiospuren befinden sich im "Audio" Tab im Hauptfenster.

Jede Spur kann deinen Bedürfnissen angepasst werden.

<!-- .system-windows -->

![HandBrake's Einstellungen für Audiospuren](../../../en/images/windows/audio-quality-1.0.0.png "HandBrake's Einstellungen für Audiospuren")

<!-- /.system-windows -->

Es gibt ein paar verschiedene Modi in denen HandBrake operieren kann.

### Durchschnittliche (Average) Bitrate
HandBrake unterstützt durchschnittliche Bitrate für alle Kodierer mit ausnahme von FLAC.

### Qualitätsbasierte Kodierung
Qualitätsbasierte Kodierung ist für folgende Codecs verfügbar:
- AAC
- MP3
- Vorbis

Der Einfluss der Einstellung ist weitaus geringer als beim Videoqualitätsregler. Änderungen haben somit nicht annähernd so große Auswirkungen auf die Dateigröße.

### Verlustfrei (Lossless)
HandBrake unterstützt FLAC (16 und 24bit) bei einer Ausgabedatei im MKV Format.

Zusätzlich kann HandBrake folgende Quellaudioformate durchleiten:

- AC3 und E-AC3
- DTS, DTS-HD
- TrueHD
- AAC
- MP3
- FLAC

