---
Type:            article
State:           [ obsolete ]
Title:           AMD VCE Encoder
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Scott (s55), Bernhard Rader ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

AMD VCE Encoder
==========================

Unterstützte Hardware und Konfigurationen
--------------
- AMD Radeon RX 400 Series, Vega oder besser
- Windows 10

Bitte beachte, dass trotz dieser Limitierungen das Feature *möglicherweise* auf älteren Grafikkarten und Betriebssystemen funktioniert. Dies wird jedoch offiziel nicht unterstützt.

Unterstützung aktivieren
--------------
Unterstützung für den VCE Kodierer kann in den Einstellungen im Video Tab aktiviert werden. Falls dein System nicht unterstützt wird, ist diese Option ausgegraut.


Performance
--------------
Beachte, dass nur die Kodierung der gesamten Pipeline in der AMD Hardware ausgeführt wird.
Jeder Schritt davor oder danach in der Pipeline (inklusive dekodieren, filtern a/v sync, muxing etc.) passieren alle auf der CPU. Dadurch ist es normal, hohe oder 100%ige CPU Auslastung während Kodiervorgängen zu haben.

Es ist vor allem auf lower-end-hardware üblich, dass die CPU ein Bottleneck für den NVIDIA Kodierer darstellt. Um diesen Effekt zu minimieren, deaktiviere jeden Filter den du nicht benötigst.


Verwendung der Fortgeschrittenen Optionen
--------------
VCE hat ein limitiertes Set von Fortgeschrittenen Kodieroptionen welche verwendet werden können. Grundsätzlich ist es nicht empfohlen, diese Parameter zu ändern. Die Built-in Voreinstellungen bieten eine gute Auswahl von Optionen.

Auf der Kommandozeile kannst du den --encopts Parameter wie folgt benutzen:

    --encopts="option1=wert1:option2=wert2"

In der Grafischen Benutzeroberfläche kannst du die Optionen in der Optionen Textbox im Video Tab angeben.

    option1=wert1:option2=wert2


Optionstypen
--------------
Die folgenden Werttypen werden unterstützt (jede Option akzeptiert nur einen Typ):

- integer
  Eine Zahl die ohne Bruch oder Nachkommastellen geschrieben werden kann (= Ganzzahl).

- boolean
  0 bedeutet aus (oder deaktiviert).
  1 bedeutet an (oder aktiviert).
 
- string
  Übernimmt eine Einstellung als String (= Zeichenkette). Schaue in die Kommentare für Details.

Verfügbare Optionen
--------------

| Option           | Type        | H.264 | H.265 | Comment                                                                        |
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
