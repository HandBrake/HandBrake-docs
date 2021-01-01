---
Type:            article
State:           [ obsolete ]
Title:           Quick Start
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Quick Start
===========

HandBrake nimmt Videos die du bereits hast und erstellt neue, welche auf deinem Handy, Tablet, Fernseher, Spielekonsole, Computer oder Browser laufen - nahezu alles was moderne Videoformate unterstützt.

Dieser Quick Start Guide setzt voraus, dass du bereits HandBrake heruntergeladen und installiert hast. Falls du HandBrake noch nicht hast, sehe dir bitte [HandBrake herunterladen und installieren](../get-handbrake/download-and-install.html) an.

Lass uns beginnen.

## HandBrake starten

Starte HandBrake mit einem Doppelklick auf das Cocktail & Ananas Icon. Abhängig von deinen Systemeinstellungen kann auch ein einzelner Klick genügen.

![HandBrake icon](../../../en/images/icon-1.1.0.png)![Doppelklick auf HandBrake icon](../../../en/images/icon-click-1.1.0.gif)

## Öffne ein ein bereits vorhandenes Video

HandBrake nennt dein zu kodierendes Video die Quelle (oder auch Quelldatei).

Selektiere den `Öffne Quelldateien` Button in der Werkzeugleiste um deine Dateien für ein Video zum Öffnen zu durchsuchen. Du kannst auch deine Quelldatei in das HandBrake Fenster ziehen.

<!-- .system-linux -->

![Suchen einer Videodatei zum öffnen](../../../en/images/linux/open-source.png "Der Öffne Quelldateien Dialog ermöglicht es dir, deine Dateien nach einem Video zum Öffnen zu durchsuchen")

<!-- /.system-linux -->
<!-- .system-macos -->

![Suchen einer Videodatei zum öffnen](../../../en/images/mac/open-source-dialog-1.1.0.png "Der Öffne Quelldateien Dialog erlaubt es dir deine Dateien nach einem Video zum Öffnen zu durchsuchen")

![Öffnen einer Videodatei per Drag-And-Drop](../../../en/images/mac/open-source-drag-drop-1.1.0.png "Zusätzlich zum Öffne Quelldateien Dialog kannst du auch ein Video öffnen indem du es in das HandBrake Fenster ziehst.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

## Einen Titel auswählen

Manche `Quellen` können mehr als einen Videoclip enthalten, oder eine Kollektion von `Titeln`. Mithilfe von HandBrake's `Titel` Selektion kannst du den Video Clip aussuchen den du verwenden möchtest.

<!-- .system-linux -->

![Titel auswählen](../../../en/images/linux/title-selection.png "Auswählen des zu verwendenden Videoclips")

<!-- /.system-linux -->
<!-- .system-macos -->

![Titel auswählen](../../../en/images/mac/title-selection-1.1.0.png "Auswählen des zu verwendenden Videoclips")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Manche `Quellen` haben nur einen `Titel`. Blu-ray und DVD `Quellen` haben oft mehrere `Titel`.

## Eine Voreinstellung auswählen

HandBrake liefert einige `Voreinstellungen` um dein neues Video für deine Geräte und Software ideal anzupassen. Falls du zum Beispiel eine Playstation 4 hast, könntest du die `Playstation 1080p30 Surround` Voreinstellung unter `Geräte` wählen.

Die Standard-Voreinstellung `Fast 1080p30` ist meistens eine gute Wahl, da es schnell und mit den meisten Geräten kompatibel ist.

<!-- .system-linux -->

![Eine Voreinstellung auswählen](../../../en/images/linux/preset-selection.png "Voreinstellung sind Ein-Klick Einstellungen die dir Zeit sparen und dir dabei helfen, auf die Gerätekompatibilität zu achten.")

<!-- /.system-linux -->
<!-- .system-macos -->

![Eine Voreinstellung auswählen](../../../en/images/mac/preset-selection-1.1.0.png "Voreinstellung sind Ein-Klick Einstellungen die dir Zeit sparen und dir dabei helfen, auf die Gerätekompatibilität zu achten.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

`Voreinstellungen` können die Kompatibilität (wie gut das Video auf deinem Gerät und Software läuft) und Kodierungszeit beeinflussen. Lerne mehr über [eine Voreinstellung auswählen](../workflow/select-preset.html).

## Wähle ein Ziel

HandBrake nennt den Dateinamen und den Speicherort deines neuen Videos das `Ziel`.

`Speichern als` ist der Dateiname deines neuen Videos. Du kannst ihn durch Ändern des Textfeldes anpassen.

`In` ist der Ort wo HandBrake das neue Video abspeichern wird. Durch einen Klick darauf kannst du den Speicherort verändern.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Speicherort auswählen](../../../en/images/mac/destination-field-1.1.0.png "Der Speicherort gibt an, wo HandBrake dein neues Video ablegen wird.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Bitte *vergesse nicht* deinen Zielort. Sonst könntest du eventuell dein neues Video nicht mehr finden. Du kannst es später noch verschieben falls du es möchtest.

## Kodierung starten

Wähle den `Start` Knopf in der Werkzeugleiste aus, um dein neues Video zu erstellen.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Kodierungsfortschritt](../../../en/images/mac/encode-progress-1.1.0.png "HandBrake stellt den Fortschritt während dem Kodieren dar.")

![Kodierung Abgeschlossen Benachrichtigung](../../../en/images/mac/encode-complete-1.1.0.png "HandBrake benachrichtigt wenn es mit dem Kodieren fertig ist.")

<!-- /.system-macos -->

HandBrake stellt den Fortschritt während des Vorganges laufend dar und wird dich informieren, sobald der Kodierungsprozess abgeschlossen ist. Dann findest du deine neue Videodatei an dem spezifizierten Speicherort.

<!-- .system-macos -->

![Speicherort in Finder](../../../en/images/mac/destination-finder-1.1.0.png "Dein Video liegt in dem von dir angegebenen Speicherort.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Herzlichen Glückwunsch! Du hast soeben dein erstes Video mit HandBrake erstellt. Es ist nun bereit, auf deinen Geräten abgespielt zu werden.

<!-- .continue -->

## Weitere Schritte

<!-- .success -->

Fahre fort zu [Über HandBrake](about.html).

<!-- /.success -->
<!-- .fail -->

Falls du dein Video nicht wie erwartet bekommen hast, Fehler aufgetreten sind oder du andere Probleme hast, kannst du weiterlesen um mehr über die Arbeitsweise von HandBrake zu erfahren oder dir gleich die [Fehlerbehebung bekannter Probleme](../help/troubleshooting-common-issues.html) anschauen.

<!-- /.fail -->

<!-- /.continue -->
