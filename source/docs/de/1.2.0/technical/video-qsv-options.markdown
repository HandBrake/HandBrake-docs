---
Type:            article
State:           [ obsolete ]
Title:           Intel QuickSync Optionen
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

Intel Quick Sync Video Erweiterte Konfiguration
==========================

Verwendung der erweiterten Optionen
--------------
Von der Kommandozeile kannst du den --encopts Parameter wie folgt verwenden:

    --encopts="option1=wert1:option2=wert2"

In der grafischen Benutzeroberfläche kannst du die Optionen in der dafür bereitgestellten Textbox eingeben:

    option1=wert1:option2=wert2

Optionstypen
--------------
Die folgenden Typen werden unterstützt (jede Option akzeptiert nur einen Typ):

- integer
Eine Zahl die ohne Bruch oder Dezimalstellen geschrieben werden kann.

- float
Die endliche Repäsentation einer reelen Zahl.

- boolean
0 bedeutet aus
1 bedeutet an

Verfügbare Optionen
--------------
- target-usage (or tu) <integer>
  - Setzt den Kompromiss zwischen Qualität und Geschwindigkeit. Werte gehen von 1 (beste Qualität) bis 7 (beste Geschwindigkeit).
  - Standard: 2

- num-ref-frame (or ref) <integer>
  - Anzahl der Referenzbilder, Werte von 1 bis 16.
  - 0 bedeutet unspezifiziert (wird von der Implementierung zur Laufzeit festgelegt).
  - Standard: 0 (unspezifiziert)

- gop-ref-dist <integer>
  - Distanz zwischen I oder P Referenzbildern, Werte von 1 bis 16.
  - -1 bedeutet automatisch (4 in konstantem QP Modus, sonst 3).
  - 0 bedeutet unspezifiziert (wird von der Implementierung zur Laufzeit festgelegt).
  - 1 bedeutet, dass B-Frames nicht verwendet werden.
  - Standard: -1 (automatisch)
  - Beachte: wird in manchen Fällen auf einen niedrigeren Wert gesetzt um Aufhängungen zu vermeiden.

- gop-pic-size (or keyint) <integer>
  - Anzahl der Bilder in dem aktuellen GOP (aka "Keyframe Interval").
  - -1 bedeutet automatisch (32 in konstantem QP Modus, sonst 1 Sekunde lang).
  - 0 bedeutet unspezifiziert (wird von der Implementierung zur Laufzeit festgelegt).
  - 1 bedeutet, dass nur I-Frames verwendet werden.
  - 2 bedeutet, dass B-Frames nicht verwendet werden.
  - Standard: -1 (automatisch)

- cavlc <boolean>
  - Verwende CAVLC statt CABAC Entropiekodierung. Reduziert Komprimierungseffizienz.
  - Es kann die Kodierungsperformanz vor allem auf alter Hardware verbessern.
  - Beachte: du kannst außerdem ''cabac'' (gleich wie ''cavlc'' mit umgekehrter Bedeutung) verwenden.
  - Standard: 0 (CAVLC aus, CABAC ein)

- b-pyramid <integer>
  - Aktiviert oder Deaktiviert "Pyramidal B-Frames" welche die Komprimierungseffizienz verbessern können.
  - Es kann aber inkompatibel mit manchen Geräten sein (wie die erste Generation AppleTV).
  - Beachte, dass diese Option andere Parameter modifiziert (gop-ref-dist, num-ref-frame, gop-pic-size).
  - -1 bedeutet automatisch (ein in konstantem QP Modus, sonst aus).
  - 0 bedeutet aus (deaktiviert).
  - 1 bedeutet ein (aktiviert).
  - Standard: -1 (automatisch).
  - Nachteile: benötigt Hardwareunterstützung (4te Generation Intel Core Prozessoren oder äquivalentes), und Treiberunterstützung für Version 1.6 von der Media SDK API.

- mbbrc <boolean>
  - Aktiviert Kontrolle der Bitrate auf Makroblockebene welche üblicherweise die subjektive visuelle Qualität erhöht.
  . Es kann negative Auswirkungen auf die Performanz und objektive visuelle Qualitätswerte haben.
  - Standard: 1 (ein)
  - Beachte: nicht kompatibel mit konstantem QP oder !LookAhead Kontrollmethoden (ignoriert).
  - Nachteile: benötigt Hardwareunterstützung (4te Generation Intel Core Prozessoren oder äquivalentes), und Treiberunterstützung für Version 1.6 von der Media SDK API.

- extbrc <boolean>
  - Verwende erweiterte Algorithmen für die Kontrolle der Bitrate.
  - Verbessert meistens die objektiven visuellen Qualitätswerte und die subjektive visuelle Qualität, aber kann auch zur Verletzung von HRD führen und die Performanz stark reduzieren.
  - Standard: 0 (aus)
  - Beachte: nicht kompatibel mit konstantem QP oder !LookAhead Kontrollmethoden (ignoriert).
  - Nachteile: benötigt Treiberunterstützung für Version 1.6 der Media SDK API.

- trellis <integer>
  - Aktiviert Trellis quantization.
  - 0 bedeutet Trellis ist deaktiviert.
  - 1 bedeutet Trellis ist nur für I-Frames aktiviert.
  - 2 bedeutet Trellis ist für I und P-Frames aktiviert.
  - 3 bedeutet Trellis ist für alle Frames aktiviert (I, P und B).
  - Standard: 0 (deaktiviert)
  - Beachte: wird ignoriert falls die Nutzung des Zieles zu niedrig ist (funktioniert üblicherweise nur in Kombination mit tu=1).
  - Nachteile: benötigt Hardwareunterstützung (4te Generation Intel Core Prozessoren oder äquivalentes), und Treiberunterstützung für Version 1.7 von der Media SDK API.

- lookahead (oder la) <boolean>
  - Verwende die !LookAhead (LA oder LA_ICQ) Kontrollalgorithmen für die Bitrate.
  - Standard: 1 (an)
  - Nachteile: benötigt Hardwareunterstützung (4te Generation Intel Core Prozessoren oder äquivalentes), und Treiberunterstützung für Version 1.7 (1.8 für LA_ICQ) von der Media SDK API.

- lookahead-depth (oder la-depth) <integer>
  - Falls !LookAhead Bitratekontrolle aktiviert ist, setzt diese Option die Anzahl der analysierten Frames vor dem Kodieren (Werte von 11 bis 60).
  - Standard: 40
  - Beachte: kann auf niedrigere Werte gesetzt werden um in manchen Fällen Aufhängungen zu vermeiden.
  - Nachteile: benötigt Hardwareunterstützung (4te Generation Intel Core Prozessoren oder äquivalentes), und Treiberunterstützung für Version 1.7 von der Media SDK API.

- force-cqp <boolean>
  - Verwende die Konstante QP Kontrolle im Konstanten Qualitätsmodus selbst wenn intelligente konstante Qualität verfügbar ist.
  - Standard: 0 (ICQ aktiviert falls verfügbar)

- cqp-offset-i <integer>   |  cqp-offset-p <integer>  |   cqp-offset-b <integer>
  - Im konstanten QP (CQP) Bitratenkontrollmodus spezifiziere einen Abstand von den globalen Qualitäts/QP Werten für I, P und B-Frames.
  - Standardwerte sind 0, 2 und 4.

- vbv-maxrate <integer>
  - Setzt die maxmimale Rate in der der VBV Buffer neuauffüllen sollte, in Kilobits pro Sekunden (Kbps).
  - Standard: 0 (zur Laufzeit durch die Implementierung gesetzt)
  - Beachte: Nicht komatibel mit konstantem QP, Intelligenter Konstanten Qualität oder !LookAhead Kontrollmethoden für die Rate(ignoriert).

- vbv-bufsize <integer>
  - Setzt die Größe des VBV Buffers in Kilobits (Kb).
  - Standard: 0 (zur Laufzeit durch die Implementierung gesetzt)
  - Beachte: Nicht komatibel mit konstantem QP, Intelligenter Konstanten Qualität oder !LookAhead Kontrollmethoden für die Rate(ignoriert).

- vbv-init <float>
  - Spezifiziert, wie voll der VBV Buffer sein sollte bevor das Abspielen gestartet wird.
  - Falls der Wert kleiner als 1 ist, liegt die initiale Befüllung bei vbv-init * vbv-bufsize.
  - Ansonsten wird es als die initiale Befüllung in Kilobits (Kb) gewertet.
  - Standard: 0 (zur Laufzeit durch die Implementierung gesetzt)
  - Beachte: Nicht komatibel mit konstantem QP, Intelligenter Konstanten Qualität oder !LookAhead Kontrollmethoden für die Rate(ignoriert).
