---
Type:            article
Title:           Die Warteschlange
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        German
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Die Warteschlange
===============

Videos zu kodieren braucht Zeit und kann viel Rechenleistung von deinem Computer fordern.

Glücklicherweise kannst du mehrere Kodierungsaufträge auf einmal einstellen, indem du sie HandBrake's `Warteschlange` hinzufügst.

## Aufträge der Warteschlange hinzufügen

Beginne, indem du eine [Quelle öffnest, einen Titel auswählst](../workflow/oeffne-video-quelle.html) und [eine Voreinstellung auswählst](../workflow/voreinstellung-auswaehlen.html). Wähle danach den `Zur Warteschlange hinzufügen` Knopf in der Werkzeugleiste aus.

<!-- .system-macos -->

![Adding an encode to the Queue](../../images/mac/add-to-queue-button-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-windows -->

Select the `Show Queue` button on the toolbar to see the queued encodes, or `Jobs`.

<!-- .system-macos -->

![Opening the Queue window](../../images/mac/queue-button-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

![Queue window on Mac](../../images/mac/queue-1.0.0.png "The Queue window lists pending Jobs.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

![Queue window on Windows](../../images/windows/queue-1.0.0.png "The Queue window lists pending Jobs.")

<!-- /.system-windows -->

Auf gleichem Wege kannst du mehrere `Quellen` öffnen und sie der `Warteschlange` hinzufügen.

## Mehrere Aufträge auf einmal hinzufügen

Wenn du die `Warteschlange` verwendest, kann es von Vorteil sein, mehrere `Aufträge` (auch genannt Jobs) auf einmal zu erstellen.

<!-- .system-macos -->

Auf Mac, öffne zuerst das `Einstellungen` Fenster aus dem `HandBrake` Menü. Stelle in dem `Allgemein` Bereich sicher, dass die `Automatische Benennung von Ausgabedateien` Einstellung aktiviert ist und der `Titel` Teil des `Format` Feldes ist.

![Opening the Preferences window on Mac](../../images/mac/preferences-menu-1.0.0.png "Open the Preferences window using the HandBrake menu.")

![Selecting the Automatically name output files setting](../../images/mac/preferences-auto-naming-1.0.0.png "Select Automatically name output files to ensure unique file names when adding multiple Titles to the Queue.")

Dies stellt sicher, dass jeder deiner `Aufträge` ein eindeutiger Dateiname zugewiesen wird und somit sich nicht überschreiben.

<!-- /.system-macos -->
<!-- .system-windows -->

Öffne unter Windows zuerst das `Einstellungen` Fenster im `Werkzeuge` Menü. Überprüfe in der `Ausgabedateien` Sektion, dass die `Automatische Benennung von Ausgabedateien` Einstellung aktiviert ist. Setze dann einen `Standardpfad` (wo deine neuen Videos erstellt werden) und stelle sicher, dass das Feld `Titel` in deinem `Dateiformat` Feld enthalten ist.

![Opening the Preferences window on Windows](../../images/windows/preferences-menu-1.0.0.png "Open the Preferences window using the Tools menu.")

![Selecting the Automatically name output files setting](../../images/windows/preferences-auto-naming-1.0.0.png "Set up Automatic File Naming to ensure unique file names when adding multiple Titles to the Queue.")

Dies stellt sicher, dass jeder deiner `Jobs` einen eindeutigen Dateinamen erhält und sich nit gegenseitig überschreiben.

<!-- /.system-windows -->

Falls deine `Quelle` eine Blu-ray, DVD oder ander Disk oder Disk-ähnliches Format mit mehreren `Titeln` ist, kannst du es mit HandBrake öffnen und mehrere `Titel` auf ein Mal der `Warteschlange` hinzufügen.

Zusätzlich kannst du einen Ordner mit mehreren Einzel-`Titel` Videos (exklusive Disks oder Disk-ähnliche Formate) als eine einzelne virtuelle `Quelle` mit mehreren `Titeln` über den `Quelle öffnen` Dialog öffnen, und dann mehrere `Titel` der `Warteschlange` hinzufügen[^batch-scan-subdirectories].

<!-- .system-macos -->

![Opening a folder containing multiple video Sources](../../images/mac/open-source-dialog-folder-1.0.0.png "The Open Source dialog allows you to select a folder containing multiple video files.")

![Selecting a Title](../../images/mac/title-selection-1.1.0.png "The Title control lets you select which video clip you want to use.")

<!-- /.system-macos -->
<!-- .system-linux -->

Wähle unter Linux den `Mehrere hinzufügen` Punkt aus dem `Warteschlangen` Menü und füge dann die gewünschten `Titel` im angezeigten Fenster hinzu. Stelle sicher, dass du jeder Datei einen einzigartigen Namen gibst.

<!-- /.system-linux -->
<!-- .system-macos -->

Wähle unter Mac den Menüpunkt `Füge Titel der Warteschlange hinzu...` aus dem `Datei` Menü und wähle dann die gewünschten `Titel` aus dem angezeigten Fenster aus.

![Add Titles to Queue menu item](../../images/mac/add-titles-to-queue-menu-1.0.0.png "Select Add Titles to Queue... from the File menu to open a selection dialog.")

![Selecting multiple Titles to add to the Queue](../../images/mac/add-titles-to-queue-1.0.0.png "Select the Titles you wish to encode from the Add Titles to Queue dialog.")

<!-- /.system-macos -->
<!-- .system-windows -->

Unter Windows kannst du den Punk `Alle Selektionen zur Warteschlange` aus dem `Warteschlangen` Menü auswählen um alle `Titel`hinzuzufügen.

<!-- /.system-windows -->

Du kannst zusätzliche `Quellen` öffnen und auf die gleiche Art und Weise der `Warteschlange` hinzufügen.

## Aufträge bearbeiten

Um Änderungen an `Jobs` in der `Warteschlange` vorzunehmen, öffne zuerst die `Warteschlange` indem du den `Zeige Warteschlange` Knopf in der Werkzeugleiste auswählst.

<!-- .system-macos -->

![Opening the Queue window](../../images/mac/queue-button-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

<!-- /.system-windows -->

Um einen `Job` zu entfernen, wähle den `╳` Knopf neben dem ungewollten `Job`.

<!-- .system-linux -->

Falls du unter Linux Änderungen an einem `Job` machen willst der sich bereits in der `Warteschlange` befindet, wähle den `Job` aus und dann `Bearbeiten`. Dies öffnet die `Quelle` in HandBrake's Hauptfenster und entfernt den `Job` aus der `Warteschlange`.

<!-- /.system-linux -->
<!-- .system-macos -->

Falls du unter Mac Änderungen an einem `Job` machen willst der sich in der `Warteschlange` befindet, führe einen Ctrl+Klick oder Rechtsklick auf den `Job` aus und wähle `Bearbeiten`. Das Bearbeiten eines `Jobs` öffnet die `Quelle` in HandBrake's Hauptfenster und entfernt den `Job` aus der `Warteschlange`.

![Editing an encode Job on Mac](../../images/mac/queue-edit-1.0.0.png "Control- or right-click the Job and select Edit to make changes.")

<!-- /.system-macos -->
<!-- .system-windows -->

Falls du unter Windows Änderungen an einem `Job` machen willst der sich bereits in der `Warteschlange` befindet, wähle den Bearbeiten Knopf neben dem`Job` aus. Dies öffnet die `Quelle` in HandBrake's Hauptfenster und entfernt den `Job` aus der `Warteschlange`.

![Editing an encode Job on Windows](../../images/windows/queue-1.0.0.png "Select the edit button, which looks like a sheet of paper, to make changes to a Job.")

<!-- /.system-windows -->

Wenn du deine Änderungen gemacht hast, füge den Job erneut deiner `Warteschlange` hinzu indem, du `Zur Warteschlange hinzufügen` in der Werkzeugleiste auswählst.

<!-- .system-macos -->

![Adding an encode to the Queue](../../images/mac/add-to-queue-button-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-windows -->

## Die Warteschlange starten

Wenn du bereit bist, wähle den `Start` Knopf im `Warteschlange` Fenster oder den `Starte Warteschlange` Knopf im Hauptfenster um mit dem Kodieren der `Jobs` in der `Warteschlange` zu beginnen.

<!-- .system-macos -->

![Starting the Queue](../../images/mac/start-queue-button-1.0.0.png "The Start Queue button begins encoding the Jobs in the Queue.")

<!-- /.system-macos -->

[^batch-scan-subdirectories]: Beim Öffnen mehrerer videos in einem Ordner ignoriert HandBrake andere zusätzliche Ordner darin. Stelle sicher, dass sich die Videos, die du öffnen möchtest, auf der obersten Ebene des ausgewählten Ordners befinden.
