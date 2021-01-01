---
Type:            article
Title:           Die Warteschlange
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Die Warteschlange
===============

Videos zu kodieren braucht Zeit und kann viel Rechenleistung von deinem Computer fordern.

Glücklicherweise kannst du mehrere Kodierungsaufträge auf einmal einstellen, indem du sie HandBrake's `Warteschlange` hinzufügst.

## Aufträge der Warteschlange hinzufügen

Beginne, indem du eine [Quelle öffnest, einen Titel auswählst](../workflow/open-video-source.html) und [eine Voreinstellung auswählst](../workflow/select-preset.html). Wähle danach den `Zur Warteschlange hinzufügen` Knopf in der Werkzeugleiste aus.

<!-- .system-macos -->

![Einen Kodierungsauftrag der Warteschlange hinzufügen](../../../en/images/mac/add-to-queue-button-1.0.0.png "Wähle den Zur Warteschlange hinzufügen Knopf in der Werkzeugleiste um deinen Kodierungsauftrag der Warteschlange hinzuzufügen.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake Werkzeugleiste unter Windows](../../../en/images/windows/toolbar-1.0.0.png "Wähle den Add to Queue Knopf in der Werkzeugleiste um deinen Kodierungsauftrag der Warteschlange hinzuzufügen.")

<!-- /.system-windows -->

Wähle den `Warteschlange anzeigen` Knopf in der Werkzeugleiste um die gelisteten Kodierungsaufträge (bzw. `Jobs` anzuzeigen).

<!-- .system-macos -->

![Das Warteschlangenfenster öffnen](../../../en/images/mac/queue-button-1.0.0.png "Wähle den Warteschlange anzeigen Knopf in der Werkzeugleiste um das Warteschlangenfenster zu öffnen.")

![Warteschlangenfenster unter Mac](../../../en/images/mac/queue-1.0.0.png "Das Warteschlangenfenster listet die ausstehenden Jobs.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake Werkzeugleiste unter Windows](../../../en/images/windows/toolbar-1.0.0.png "Wähle den Show Queue Knopf in der Werkzeugleiste um das Warteschlangenfenster zu öffnen.")

![Warteschlangenfenster unter Windows](../../../en/images/windows/queue-1.0.0.png "Das Warteschlangenfenster listet die ausstehenden Jobs.)

<!-- /.system-windows -->

Auf gleichem Wege kannst du mehrere `Quellen` öffnen und sie der `Warteschlange` hinzufügen.

## Mehrere Aufträge auf einmal hinzufügen

Wenn du die `Warteschlange` verwendest, kann es von Vorteil sein, mehrere `Aufträge` (auch genannt Jobs) auf einmal zu erstellen.

<!-- .system-macos -->

Auf Mac, öffne zuerst das `Einstellungen` Fenster aus dem `HandBrake` Menü. Stelle in dem `Allgemein` Bereich sicher, dass die `Automatische Benennung von Ausgabedateien` Einstellung aktiviert ist und der `Titel` Teil des `Format` Feldes ist.

![Das Einstellungen Fenster unter Mac öffnen](../../../en/images/mac/preferences-menu-1.0.0.png "Öffne das Einstellungen Fenster mithilfe des HandBrake Menüs.")

![Die Einstellung für die Automatische Benennung auswählen](../../../en/images/mac/preferences-auto-naming-1.0.0.png "Aktiviere die automatische Benennung von Ausgabedateien um sicherzustellen, dass eindeutige Namen für deine Jobs verwendet werden und diese sich somit nicht überschreiben.")

Dies stellt sicher, dass jeder deiner `Aufträge` ein eindeutiger Dateiname zugewiesen wird und somit sich nicht überschreiben.

<!-- /.system-macos -->
<!-- .system-windows -->

Öffne unter Windows zuerst das `Einstellungen` Fenster im `Werkzeuge` Menü. Überprüfe in der `Ausgabedateien` Sektion, dass die `Automatische Benennung von Ausgabedateien` Einstellung aktiviert ist. Setze dann einen `Standardpfad` (wo deine neuen Videos erstellt werden) und stelle sicher, dass das Feld `Titel` in deinem `Dateiformat` Feld enthalten ist.

![Einstellungen Fenster unter Windows öffnen](../../../en/images/windows/preferences-menu-1.0.0.png "Öffne das Preferences Fenster im Tools Menü.")

![Die Einstellung für die Automatische Benennung auswählen](../../../en/images/windows/preferences-auto-naming-1.0.0.png "Aktiviere die automatische Benennung von Ausgabedateien um sicherzustellen, dass eindeutige Namen für deine Jobs verwendet werden und diese sich somit nicht überschreiben.")

Dies stellt sicher, dass jeder deiner `Jobs` einen eindeutigen Dateinamen erhält und sich nit gegenseitig überschreiben.

<!-- /.system-windows -->

Falls deine `Quelle` eine Blu-ray, DVD oder ander Disk oder Disk-ähnliches Format mit mehreren `Titeln` ist, kannst du es mit HandBrake öffnen und mehrere `Titel` auf ein Mal der `Warteschlange` hinzufügen.

Zusätzlich kannst du einen Ordner mit mehreren Einzel-`Titel` Videos (exklusive Disks oder Disk-ähnliche Formate) als eine einzelne virtuelle `Quelle` mit mehreren `Titeln` über den `Quelle öffnen` Dialog öffnen, und dann mehrere `Titel` der `Warteschlange` hinzufügen[^batch-scan-subdirectories].

<!-- .system-macos -->

![Eine Verzeichnis mit mehreren Videoquellen öffnen](../../../en/images/mac/open-source-dialog-folder-1.0.0.png "Der Öffne Quelle Dialog erlaubt dir die Selektion eines Ordners mit mehreren Videodateien.")

![Einen Titel auswählen](../../../en/images/mac/title-selection-1.1.0.png "Die Titelauswahl erlaubt dir den gwünschten Titel zu selektieren.")

<!-- /.system-macos -->
<!-- .system-linux -->

Wähle unter Linux den `Mehrere hinzufügen` Punkt aus dem `Warteschlangen` Menü und füge dann die gewünschten `Titel` im angezeigten Fenster hinzu. Stelle sicher, dass du jeder Datei einen einzigartigen Namen gibst.

<!-- /.system-linux -->
<!-- .system-macos -->

Wähle unter Mac den Menüpunkt `Füge Titel der Warteschlange hinzu...` aus dem `Datei` Menü und wähle dann die gewünschten `Titel` aus dem angezeigten Fenster aus.

![Füge Titel der Warteschlange hinzu](../../../en/images/mac/add-titles-to-queue-menu-1.0.0.png "Wähle Füge Titel der Warteschlange hinzu... aus dem Datei Menü um ein Fenster zur Auswahl zu öffnen.")

![Mehrere Titel auswählen um sie zur Warteschlange hinzuzufügen](../../../en/images/mac/add-titles-to-queue-1.0.0.png "Wähle die gewünschten Titel aus dem Titel zur Warteschlange hinzufügen Dialog aus.")

<!-- /.system-macos -->
<!-- .system-windows -->

Unter Windows kannst du den Punk `Alle Selektionen zur Warteschlange` aus dem `Warteschlangen` Menü auswählen um alle `Titel`hinzuzufügen.

<!-- /.system-windows -->

Du kannst zusätzliche `Quellen` öffnen und auf die gleiche Art und Weise der `Warteschlange` hinzufügen.

## Aufträge bearbeiten

Um Änderungen an `Jobs` in der `Warteschlange` vorzunehmen, öffne zuerst die `Warteschlange` indem du den `Zeige Warteschlange` Knopf in der Werkzeugleiste auswählst.

<!-- .system-macos -->

![Das Warteschlangenfenster öffnen](../../../en/images/mac/queue-button-1.0.0.png "Wähle den Warteschlange anzeigen Knopf in der Werkzeugleiste um das Warteschlangenfenster zu öffnen.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake Werkzeugleiste unter Windows](../../../en/images/windows/toolbar-1.0.0.png "Wähle den Show Queue Knopf in der Werkzeugleiste um das Warteschlangenfenster zu öffnen.")

<!-- /.system-windows -->

Um einen `Job` zu entfernen, wähle den `╳` Knopf neben dem ungewollten `Job`.

<!-- .system-linux -->

Falls du unter Linux Änderungen an einem `Job` machen willst der sich bereits in der `Warteschlange` befindet, wähle den `Job` aus und dann `Bearbeiten`. Dies öffnet die `Quelle` in HandBrake's Hauptfenster und entfernt den `Job` aus der `Warteschlange`.

<!-- /.system-linux -->
<!-- .system-macos -->

Falls du unter Mac Änderungen an einem `Job` machen willst der sich in der `Warteschlange` befindet, führe einen Ctrl+Klick oder Rechtsklick auf den `Job` aus und wähle `Bearbeiten`. Das Bearbeiten eines `Jobs` öffnet die `Quelle` in HandBrake's Hauptfenster und entfernt den `Job` aus der `Warteschlange`.

![Einen Job unter Mac bearbeiten](../../../en/images/mac/queue-edit-1.0.0.png "Kontroll- oder Rechtsklicke den Job und wähle Bearbeiten um Änderungen vorzunehmen.")

<!-- /.system-macos -->
<!-- .system-windows -->

Falls du unter Windows Änderungen an einem `Job` machen willst der sich bereits in der `Warteschlange` befindet, wähle den Bearbeiten Knopf neben dem`Job` aus. Dies öffnet die `Quelle` in HandBrake's Hauptfenster und entfernt den `Job` aus der `Warteschlange`.

![Einen Job unter Windows bearbeiten](../../../en/images/windows/queue-1.0.0.png "Wähle den Edit Knopf der wie ein Blatt Papier aussieht um Änderungen am Job vorzunehmen.")

<!-- /.system-windows -->

Wenn du deine Änderungen gemacht hast, füge den Job erneut deiner `Warteschlange` hinzu indem, du `Zur Warteschlange hinzufügen` in der Werkzeugleiste auswählst.

<!-- .system-macos -->

![Einen Kodierungsjob der Warteschlange hinzufügen](../../../en/images/mac/add-to-queue-button-1.0.0.png "Wähle den Zur Warteschlange hinzufügen Knopf in der Werkzeugleiste um deinen Kodierungsjob der Warteschlange hinzuzufügen.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake Werkzeugleiste unter Windows](../../../en/images/windows/toolbar-1.0.0.png "Wähle den Zur Warteschlange hinzufügen Knopf in der Werkzeugleiste um deinen Kodierungsjob der Warteschlange hinzuzufügen.")

<!-- /.system-windows -->

## Die Warteschlange starten

Wenn du bereit bist, wähle den `Start` Knopf im `Warteschlange` Fenster oder den `Starte Warteschlange` Knopf im Hauptfenster um mit dem Kodieren der `Jobs` in der `Warteschlange` zu beginnen.

<!-- .system-macos -->

![Die Warteschlange starten](../../../en/images/mac/start-queue-button-1.0.0.png "Der Warteschlange starten Knopf beginnt mit dem Kodieren der Jobs in der Warteschlange.")

<!-- /.system-macos -->

[^batch-scan-subdirectories]: Beim Öffnen mehrerer Videos in einem Ordner ignoriert HandBrake andere zusätzliche Ordner darin. Stelle sicher, dass sich die Videos, die du öffnen möchtest, auf der obersten Ebene des ausgewählten Ordners befinden.
