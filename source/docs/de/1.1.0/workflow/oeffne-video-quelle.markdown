---
Type:            article
Title:           Öffnen einer Video Quelle
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        German
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Öffnen einer Video Quelle
======================

Sobald du [HandBrake heruntergeladen und installiert](../get-handbrake/herunterladen-und-installieren.html) hast, ist es Zeit ein Video zum Kodieren zu öffnen.

## Über Videoquellen

In HandBrake's Jargon ist das Video das du bereits hast die `Quelle`. Einer von HandBrake's Stärken ist seine Fähigkeit, `Quellen` aus einem breiten Spektrum von Video Formaten zu öffnen. Diese inkludieren unter anderem:

- Videos welche von Handy, Tablet, Videokameras und digitalen Spiegelreflexkameras erstellt wurden
- Bildschirm- und Spielaufnahmen, Webvideos, Videobearbeitungsprojekte[^consumer-editor-export], und andere Computerbezogene Quellen
- Formate aus der Professionellen Videoproduktion inklusive ProRes und DNxHD
- DVD, Blu-ray, AVCHD/AVCHD Lite[^avchd-partial-support], und HD-DVD[^hddvd-partial-support] Disks oder Disk Backups
- Übertragene TV Aufnahmen (Broadcasts)
- Digitale Aufnahmen von VHS, Beta, Video8/Hi8, LaserDisc, und andere Analoge Quellen

Du kannst mehr über die [Quellformate](../technisches/quellformate.html) in der Technischen Dokumentation erfahren.

**Beachte:** HandBrake bricht oder umgeht keinen [Kopierschutz](https://de.wikipedia.org/wiki/Kopierschutz) irgendeiner Art. Es funktioniert nicht mit Videodateien die [[DRM](https://de.wikipedia.org/wiki/Digitale_Rechteverwaltung)](abbr:Digital Rights Management) verwenden. Siehe [Über HandBrake](../einfuehrung/ueber.html) für mehr Informationen über was HandBrake *kann* und was es *nicht kann*.

## Arten eine Videoquelle zu öffnen

Standardmäßig präsentiert HandBrake den `Öffne Quelldateien` Dialog beim Starten. Der Dialog kann außerdem in der `Werkzeugleiste` oben in HandBrake's Hauptfenster aufgerufen werden.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Main window toolbar](../../images/mac/toolbar-1.1.0.png "The Toolbar provides easy access to HandBrake's most common functions.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Wähle den `Öffne Quelle` Knopf, um das Video auszuwählen das du öffnen möchtest.

Du kannst auch eine `Quelle` in HandBrake's Hauptfenster ziehen.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Open Source dialog](../../images/mac/open-source-dialog-1.1.0.png "The Open Source dialog allows you to browse your files for a video to open.")

![Opening a video source via drag and drop](../../images/mac/open-source-drag-drop-1.1.0.png "In addition to the Open Source dialog, you may also open a video by dragging it to HandBrake's main window.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

HandBrake wird deine Selektion scannen und nach kurzer Zeit wird das Hauptfenster den Dateinamen der `Quelle` anzeigen die du geöffnet hast plus Zusatzinformation.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Successfully opened source](../../images/mac/open-source-success-1.1.0.png "HandBrake's main window after sucessfully opening a source.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Manche `Quellen` können mehr als eine Videospur enthalten, oder eine Kollektion von `Titeln`. Blu-ra und DVD `Quellen` haben of mehrere `Titel`. Verwende HandBrake's `Titel` Auswahl um die Videospur auszuwählen die du verwenden möchtest.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Selecting a title](../../images/mac/title-selection-1.1.0.png "Some sources may contain more than one video clip. The title control lets you select which video clip you want to use.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Super! An diesem Punkt weiß HandBrake welches Video du verwenden möchtest.

<!-- .continue -->

## Nächste Schritte

<!-- .success -->

Fahre fort zu [Voreinstellung auswählen](voreinstellung-auswaehlen.html).

<!-- /.success -->
<!-- .fail -->

Falls HandBrake dein Video nicht wie erwartet geöffnet hat, oder andere Probleme aufgetreten sind, kannst du weiterlesen um mehr darüber zu erfahren, wie HandBrake arbeitet und funktioniert, oder gleich die [Fehlerbehebung bekannter Probleme](../help/troubleshooting-common-issues.html) anschauen.

<!-- /.fail -->

<!-- /.continue -->

[^consumer-editor-export]: Videos welche mit Videobearbeitungssoftware wie [iMovie](https://www.apple.com/mac/imovie/) erstellt wurden, müssen zuerst in ein geläufiges Videoformat konvertiert werden um kompatibel mit HandBrake zu sein.

[^avchd-partial-support]: AVCHD und AVCHD Lite Playlists werden nicht vollständig unterstützt. Individuelle Dateien/Streams könnten funktionieren.

[^hddvd-partial-support]: HD-DVD Playlists werden nicht vollständig unterstützt. Individuelle Dateien/Streams könnten funktionieren.
