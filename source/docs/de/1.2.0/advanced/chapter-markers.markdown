---
Type:            article
State:           [ obsolete ]
Title:           Kapitelmarkierungen
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

Kapitelmarkierungen
=============================

## Kapitel

HandBrake kann Kapitelmarkierungen von deiner Quelle in die MP4 oder MKV Ausgabedatei kopieren.

In HandBrake kannst du auf den den 'Kapitel' Tab klicken um eine Liste der erkannten Kapitel zu sehen. HandBrake generiert automatisch Kapitelnamen in dem folgenden Format: "Chapter n". Dabei ist n die Kapitelnummer.

![Kapitel Tab](../../../en/images/windows/chapters-1.0.0.png "Kapitel Tab")

## Kapitel umbenennen

Wenn du möchtest kannst du die Kapitel umbenennen in dem du die Namen im Kapitel Tab änderst.

Du kannst zudem einen Satz an Kapiteln importieren oder exportieren. HandBrake unterstützt den Import von CSV (Comma separated Values) Dateien.

Klicke den Import Knopf um eine CSV Datei auszuwählen. Die Datei muss in dem folgenden Format sein:


```
1,Chapter Name
2,Chapter 2 Name
3,Chapter 3 Name
....
```

Abschließend kannst du die aktuelle Kapitellist in eine CSV Datei exportieren indem du auf den 'Export' Knopf klickst.

## Quellen ohne Kapitel

Leider kann HandBrake aktuell keine Kapitelmarkierungen hinzufügen, falls sie nicht in der Quelle existierten.
