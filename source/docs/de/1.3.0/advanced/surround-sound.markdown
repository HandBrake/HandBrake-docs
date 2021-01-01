---
Type:            article
State:           [ draft ]
Title:           Surround Sound Guide
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

Surround Sound Guide
=============================

Es gibt viele verschiedene Multi-Kanal Audioformate welche deine Quelle enthalten kann:

- Dolby Pro Logic
- Dolby Digital Surround
- Digital Theater System (DTS)
- Digital Theater System Master Audio (DTS-HD)
- TrueHD

HandBrake kann diese entweder durchleiten (passthru) oder mit einem Downmix in ein anderes Format konvertieren.

## Downmixing (Abmischen)

Wenn du in der Codecauswahl nicht Passthru ausgewählt hast, kannst du den Downmix aus dem "Mixdown" Menü auswählen.

Die verfügbaren Optionen hängen von der Quellspur ab (Format & Anzahl der Kanäle).

- Dolby Surround
- Dobly ProLogic II
- 5.1 Surround
- 6.1 Surround
- 7.1 Surround

Standardmäßig verwendet HandBrake als Downmix Einstellung Dolby ProLogic II, welches auf Stereo und Multi-Kanal Audiosystemen gut klingt. Du kannst aber natürlich die Einstellung verändern die am besten zu deinem System passt um eine bessere Qualität zu erhalten.

## Audio durchleiten (passthru)

HandBrake kann zudem auch die Quellaudiospur Bit für Bit durchleiten ohne sie abzuändern.

Die folgenden Quellformate können durchgeleitet werden.

- AC3
- E-AC3
- DTS    (Eingeschränkte Player Kompatibilität in MP4)
- DTS-HD (Eingeschränkte Player Kompatibilität in MP4)
- TrueHD (nur MKV Datein)
- FLAC   (nur MKV Datein)
- AAC
- MP3
