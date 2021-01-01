---
Type:            article
State:           [ draft ]
Title:           Video Größenänderung
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

Video Größenänderung
=============================

## Bildeinstellungen

Der Bildeinstellungen Tab kann in HandBrake's Hauptfenster gefunden werden, und wird aktiv nachdem du eine Quelle gescannt hast.

![Bildeinstellungen Tab](../../../en/images/windows/picture-settings-1.0.0.png "Bildeinstellungen Tab")

### Breite und Höhe

Diese erlauben die die Größe der Ausgabe zu verändern. Wenn du die Pfeile klickst die nach oben und unten zeigen, springt die Zahl um die ausgewählte Zahl in dem "Modulus" Menüpunkt nach oben beziehungsweise unten.

Wenn Anamorphic Strict ausgewählt ist, sind die "Breite" und "Höhe" Boxen deaktiviert. Du bekommst die maximalen Werte der Quelle als Ausgabe.

Wenn loose ausgewählt ist, kannst du die "Breite" herunterskalieren oder es bei der Breite der Quelle belassen.

Wenn none ausgewählt ist, kannst du sowohl "Breite" als auch "Höhe" verändern.

### Modulus

Die Breite und die Höhe müssen durch diese Zahl teilbar sein. Diese Option sollte am besten bei 2 belassen werden, außer du hast ein problematisches Abspielgerät oder eine problematische Abspielsoftware. In diesem Fall kannst du den Wert 16 probieren.

### Anamorphic

Üblicherweise ist es empfohlen diese Einstellung auf "loose" zu behalten. Falls deine Quelle nicht anamorphic ist, und die Option Anamorphic ausgewählt hast, wird die Ausgabe nicht verändert. Dadurch ist es unbedenklich diese Option an zu lassen.

## Hochskalierung (Upscaling)

Die HandBrake GUI's erlauben keine Hochskalierung. Meistens ist es es eine schlechte Idee, da es die Qualität deiner Quelle reduziert und gleichzeitig die Größe der Ausgabedatei erhöht. Das ist suboptimal. Meistens ist es am besten, dem Abspielgerät das hochskalieren zu überlassen. Du gewinnst nichts beim hochskalieren mit HandBrake.

In den extrem seltenen Fällen wo es gebraucht wird, kann es über die Kommandozeile mithilfe der Parameter --width und --height erreicht werden.
Normalerweise würdest du so etwas nur verwenden falls deine Soft- oder Hardware ein Problem mit dem Hochskalieren hat oder es gar nicht hochskalieren kann.

## Abschneiden (Cropping)

HandBrake versucht standardmäßig schwarze Ränder aus dem Video zu entfernen. Das Kodieren von schwarzen Rändern erhöht die Zeit die für die Kodierung benötigt wird und den Speicherplatz. Deshalb ist es am besten HandBrake diese schwarzen Ränder entfernen zu lassen.

HandBrake's auto-crop ist nicht perfekt. Es probiert dir einen Vorschlag für die Werte zu geben. Falls es deiner Meinung nach falsche Werte sind, was etwas unüblich ist, kannst du diese bearbeiten indem du die "Custom" Option wählst.

Die kannst die Effekte deiner Anpassungen überprüfen indem du den "Vorschau" Knopf in der Werkzeugleiste klickst.

![HandBrake Werkzeugleiste](../../../en/images/windows/toolbar-1.0.0.png "HandBrake Werkzeugleiste")

Das Vorschaufenster wird erscheinen und in Echtzeit jegliche Änderungen deiner Bildeinstellungen darstellen.
Falls die Größe deiner Ausgabe die Fenstergröße überschreitet, wird das Vorschaufenster an deine Bildschirmbreite angepasst.

![Vorschaufenster](../../../en/images/windows/preview-window-1.0.0.jpg "Vorschaufenster")
