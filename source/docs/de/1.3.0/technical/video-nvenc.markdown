---
Type:            article
State:           [ draft ]
Title:           NVIDIA NVENC
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Scott (s55), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Bernhard Rader ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

NVIDIA NVENC
============

## Unterstützte Hardware und Konfigurationen

- NVIDIA GeForce GTX Pascal (1050+) und RTX Turing (1650+, 2060+) series GPU oder besser
- NVIDIA Graphics Driver 418.81 oder neuer
- Windows 10
- Experimentelle Unterstützung für Linux ist via der Kommandozeile verfügbar

Beachte bitte, dass trotz diesen Einschränkungen das Feature *möglicherweise* auf älteren Grafikkarten und Betriebssystemen funktioniert. Dies wird jedoch nicht offiziell unterstützt.


## Unterstützung aktivieren

Unterstützung für den NVENC Kodierer kann in den Einstellungen im Video Tab aktiviert werden. Falls dein System nicht unterstützt wird, ist diese Option deaktiviert.


## Performance

Nur die Videokodierung wird von dem Hardwarekodierer ausgeführt. Alles vor und nach dem Videokodieren inklusive Decoding, Filter, Audio/Video Sync, Audiokodierung, Muxing, usw. wird von der CPU erledigt. Dadurch ist eine hohe CPU Auslastung (sogar 100%) normal.

Es ist vor allem auf lower-end-hardware üblich, dass die CPU ein Bottleneck für den NVIDIA Kodierer darstellt. Um diesen Effekt zu minimieren, deaktiviere jeden Filter den du nicht benötigst.


## Fortgeschrittene Optionen

Der Nividia NVENC Hardwarekodierer hat ein limitiertes Set von Fortgeschrittenen Kodieroptionen welche verwendet werden können. Grundsätzlich ist es nicht empfohlen, diese Parameter zu ändern, da die Built-in Voreinstellungen eine gute Auswahl von Optionen bieten.

Auf der Kommandozeile kannst du den --encopts Parameter wie folgt benutzen:

    --encopts="option1=wert1:option2=wert2"

In der Grafischen Benutzeroberfläche kannst du die Optionen in der Optionen Textbox im Video Tab angeben.

    option1=wert1:option2=wert2

## Optionstypen

Die folgenden Werttypen werden unterstützt (jede Option akzeptiert nur einen Typ):

- integer
  Eine Zahl die ohne Bruch oder Nachkommastellen geschrieben werden kann (= Ganzzahl).

- boolean
  0 bedeutet aus (oder deaktiviert).
  1 bedeutet an (oder aktiviert).
 
- string
  Übernimmt eine Einstellung als String (= Zeichenkette). Schaue in die Kommentare der Optionen für mögliche Werte.

  
## Liste von Optionen

| Option           | Type        | H.264 | H.265 | Comment                                                                        |
|------------------|-------------|------------------------------------------------------------------------------------------------|
| coder            | string      |   X   |       | Optionen: auto, cabac, cavlc                                                   |
| temporal-aq      | boolean     |   X   |   X   |                                                                                |
| spatial-aq       | boolean     |   X   |   X   | Für H.265, verwende "spatial_aq" für H.265 Kodierungen. Beachte den Unterstrich.|
| aq-strength      | int         |   X   |   X   | Wenn Spatial AQ aktiviert ist, reicht die Skala von 1 (niedrig) bis 15 (aggressiv)|
| nonref_p         | boolean     |   X   |   X   | Aktiviere das automatische Einfügen von Non-Reference P-Frames                 |
| strict_gop       | boolean     |   X   |   X   | Minimiere GOP to GOP Ratenfluktuationen                                        |
| weighted_pred    | boolean     |   X   |   X   |                                                                                |
| rc-lookahead     | int         |   X   |   X   | 0 bis 27                                                                       |
| b_adapt          | boolean     |   X   |       | Setze dies auf 0, um Adaptive B-Frame Entscheidungen bei lookahead zu deaktivieren|
| no-scenecut      | boolean     |   X   |   X   | 1 = Deaktivere Adaptives I-Frame-Einfügen bei Scene cuts wenn lookahead verwendet wird|

