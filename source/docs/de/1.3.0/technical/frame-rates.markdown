---
Type:            article
State:           [ draft ]
Title:           Framerate
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Framerate
==========
Die Framerate (Bildwiederholrate, Bildwiederholfrequenz) stellt die Anzahl der Bilder pro Sekunde dar. Übliche Frameraten sind 23.976/24 für Film, 25/50 für europäische Fernsehausstrahlungen, und 29.97/59.94 oder 30/60 für Ausstrahlungen aus Nordamerika. Moderne Videoformate können über eine variable Framerate verfügen, dadurch können sie problemlos mitten im Video zwischen 23.976 und 29.97 Bilder pro Sekunde hin und her wechseln.

<!-- .system-macos -->

![Einstellungen für die Framerate unter Mac](../../../en/images/mac/frame-rate-controls-1.0.0.png "Einstellungen für die Framerate unter Mac")

<!-- /.system-macos -->

Wenn du `Gleich wie Quelle` auswählst, kannst du `Variable Framerate (VRF)` auswählen. Dies sagt HandBrake, dass die Framerate deines neuen Videos eine exakte Kopie deiner `Quelle` sein soll. Es wird keine Konvertierung der Framerate durchgeführt.

`Konstante Framerate (CFR)` stellt sicher, dass dein neues Video durchgehend eine exakte Framerate verwendet. Wenn es mit `Gleich wie Quelle` verwendet wird, erkennt HandBrake die Framerate deiner `Quelle` und stellt sicher, dass jegliche variable Abschnitte auf eine exakte Framerate gebracht werden. Wenn dies mit einer bestimmten Framerate verwendet wird, passt HandBrake dein Video der neuen Framerate an. Diese Methode ist nicht empfohlen ausser in Ausnahmefällen wie zum Beispiel eine Kodierung für einen Import in ein [NLE](https://en.wikipedia.org/wiki/Non-linear_editing_system) oder für extrem alte Geräte.

Wenn du eine bestimmte Framerate angibst, kannst du zudem `Peak Framerate (PFR)` auswählen, welche das beste beider Welten ist. Denk über PFR wie eine Grenze oder Limit. HandBrake wird Teile deines Videos auf oder unter der Grenze unverändert lassen und Video(abschnitte) mit einer höheren Framerate auf die Grenze limitieren die du angegeben hast.

HandBrake Versionen die älter als Version 1.0.0 sind, hatten die Standardeinstellung `Gleich wie Quelle` und `Variable Framerate (VFR)`. Dies war kein Problem für die meisten Videos damals, jedoch unterstützen nun beispielsweise auch Mobilgeräte oder Action cams Aufnahmen mit hohen Frameraten. Diese Methode kann nicht sicherstellen, dass solche Videos auf Geräten kompatibel sind die eine eingeschränkte Framerate haben. Dies betrifft nahezu alle modernen Geräte die *nicht in der Lage sind* Videos zu erstellen. Um diese Inkompatibilitäten zu vermeiden, verwenden die Voreinstellungen in HandBrake version 1.0.0 und neuer die `Peak Framerate (PFR)`.
