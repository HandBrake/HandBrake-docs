---
Type:            article
State:           [ obsolete ]
Title:           Nvidia NVEnc Encoder
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

Nvidia NVEnc Encoder
==========================

Unterstützte Hardware und Konfigurationen
--------------
- Nvidia GeForce 10 und 20 Series Grafikkarten werden unterstützt
- Treiber "399.24" oder neuer muss installiert sein
- Windows 7 SP1 und neuer (Linux *könnte* funktionieren aber nur via der Kommandozeile)

Beachte bitte, dass trotz diesen Einschränkungen das Feature *möglicherweise* auf älteren Grafikkarten und Betriebssystemen funktioniert. Dies wird jedoch nicht offiziell unterstützt.


Unterstützung aktivieren
--------------
Unterstützung für den NVEnc Kodierer kann in den Einstellungen im Video Tab aktiviert werden. Falls dein System nicht unterstützt wird, ist diese Option ausgegraut.


Performance
--------------
Beachte, dass nur die Kodierung der gesamten Pipeline in der NVIDIA ASIC Hardware ausgeführt wird.
Jeder Schritt davor oder danach in der Pipeline (inklusive dekodieren, filtern a/v sync, muxing etc.) passieren alle auf der CPU. Dadurch ist es normal, hohe oder 100%ige CPU Auslastung während Kodiervorgängen zu haben.

Es ist vor allem auf lower-end-hardware üblich, dass die CPU ein Bottleneck für den NVIDIA Kodierer darstellt. Um diesen Effekt zu minimieren, deaktiviere jeden Filter den du nicht benötigst.


Verwendung der Fortgeschrittenen Optionen
--------------
NVEnc hat ein limitiertes Set von Fortgeschrittenen Kodieroptionen welche verwendet werden können. Grundsätzlich ist es nicht empfohlen, diese Parameter zu ändern. Die Built-in Voreinstellungen bieten eine gute Auswahl von Optionen.

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



