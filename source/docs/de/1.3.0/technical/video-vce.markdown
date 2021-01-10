---
Type:            article
State:           [ draft ]
Title:           AMD VCE
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55), Bernhard Rader ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

AMD VCE
=======

## Unterstützte Hardware und Konfigurationen

- AMD Radeon RX 400, 500, Vega/II, Navi series GPU or better
- Ubuntu Linux 18.04.3 or later, Windows 10

Bitte beachte, dass trotz dieser Limitierungen die Hardwarekodierung mit VCE *möglicherweise* auf älteren Grafikkarten und Betriebssystemen funktioniert. Dies wird jedoch offiziell nicht unterstützt.

Unter Ubuntu Linux, wird [AMD Radeon Software for Linux version 19.20 or later](https://www.amd.com/en/support/kb/release-notes/rn-amdgpu-unified-linux) benötigt, um den VCE Kodierer zu verwenden. Installiere die Software mit dem `amdgpu-pro-install` Script wie in AMD’s [Installation Guide](https://amdgpu-install.readthedocs.io/en/latest/) beschrieben. Zusätzlich must du das Paket `amf-amdgpu-pro` manuell installieren welches im Download inkludiert ist.

## Unterstützung aktivieren

Unterstützung für den VCE Kodierer kann in den Einstellungen im Video Tab aktiviert werden. Falls dein System nicht unterstützt wird, ist diese Option deaktiviert.


## Performance

Nur die Videokodierung wird von dem Hardwarekodierer erledigt. Alles vor und nach dem Videokodieren wie Decoding, Filter, Audio/Video Sync, Audio Encoding, Muxing, usw. wird von der CPU erledigt. Eine hohe CPU Auslastung (auch 100%) ist während dem Kodieren also normal.

Es ist vor allem auf lower-end-hardware üblich, dass die CPU ein Bottleneck für den NVIDIA Kodierer darstellt. Um diesen Effekt zu minimieren, deaktiviere jeden Filter den du nicht benötigst.


## Fortgeschrittene Optionen

VCE hat ein limitiertes Set von Fortgeschrittenen Kodieroptionen welche verwendet werden können. Grundsätzlich ist es nicht empfohlen, diese Parameter zu ändern, da die Built-in Voreinstellungen eine gute Auswahl von Optionen bieten.

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
  Übernimmt eine Einstellung als String (= Zeichenkette). Die Kommentare zeigen die möglichen Werte.

## Verfügbare Optionen


| Option           | Type        | H.264 | H.265 | Kommentar                                                                      |
|------------------|-------------|------------------------------------------------------------------------------------------------|
| preanalysis      | boolean     |   X   |   X   |                                                                                |
| vbaq             | boolean     |   X   |   X   |                                                                                |
| enforce_hrd      | boolean     |   X   |   X   |                                                                                |
| max_au_size      | int         |   X   |   X   |                                                                                |
| me_half_pel      | boolean     |   X   |   X   |                                                                                |
| me_quarter_pel   | boolean     |   X   |   X   |                                                                                |
| coder            | string      |       |   X   | Options: auto, cabac, cavlc                                                    |
| bf_delta_qp      | boolean     |       |   X   | B-Picture Delta QP                                                             |
| bf_ref           | boolean     |       |   X   | Aktiviere Referenz zu B-Frames                                                 |
| bf_ref_delta_qp  | boolean     |       |   X   | Referenz B-Picture Delta QP                                                   |
| intra_refresh_mb | int         |       |   X   |                                                                                |
