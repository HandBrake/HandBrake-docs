---
Type:            article
State:           [ obsolete ]
Title:           Automatische Dateibenennung
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Automatische Dateibenennung
=============================
HandBrake kann deine Ausgabedateien automatisch für dich basierend auf ein paar Kriterien benennen.

Wenn du die Optionen des Programmes öffnest, wirst du einen Abschnitt sehen der sich mit den "Ausgabedateien" beschäftigt.

![Einstellungen für Ausgabedateien](../../../en/images/windows/output-file-preferences-1.0.0.png "Einstellungen für Ausgabedateien")

Hier kannst du den Standardpfad für die Ausgabe der Dateien und das Format des Dateinamens einstellen.

Standardmäßig ist das Format {source}--{title}
Du kannst dazu noch {chapters} hinzufügen.

### Behandlung des Namens der Quelle
Manche Quellen haben komische Namen (beispielsweise alles Großbuchstaben). HandBrake bietet dafür ein paar Optionen um es zu korrigieren.

Die folgenden Optionen beeinflussen den Quellnamen:

- "Change to Title case", Dies ist auch als Camel Case bekannt. Hierbei wird immer der erste Buchstabe eines Wortes groß geschrieben und der Rest klein.
- "Replace underscores with a space"  i.e  "_" zu " "
- "Remove common punctuation" i.e ( Bindestrich - Punkt . Kommas ,)

### Behandlung von MP4 Dateiendung
Die letzte Option erlaubt dir die Behandlung von MP4 Dateiendungen einzustellen.

MP4 und M4V Dateien sind identisch. Es ist nur eine andere Benennung.

HandBrake wird für MP4 Dateien automatisch die Endung M4V verwenden, wenn du Audio (AC3) durchleitest, SRT Untertitel verwendest oder Kapitelmarkierungen aktiviert hast.

Du kannst einfach die Dateiendung zwischen .mp4 und .m4v ändern da die Datei exakt gleich ist. Es gibt einen Unterschied im Inhalt oder im Container selbst.
