---
Type:            article
Title:           Aktivitäten Log
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        German
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), John Stebbins (j45), Scott (s55) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Aktivitäten Log
============

Wenn du HandBrake startest, beginnt es, Informationen über seine Operationen in den Aktivitäten Log zu speichern. Wenn du deine `Quelle` öffnest, scannt HandBrake es und schreibt was es findet in den Aktivitäten Log. Gleichfalls wird während der Kodierung der Fortschritt und aufgetretene Probleme in den Log aufgenommen.

Aktivitäten Logs können verwendet werden, um die Einstellungen einzusehen die du bei der Erstellung deiner Videos verwendest, und ob alles so gelaufen ist, wie du es dir erwartet hast.

Falls du Technische Hilfe brauchst, ist die Angabe des Aktivitäten Logs **notwendig** und ist essentiell für die Diagnose deines Problems.

## Warum Aktivitäten Logs für Unterstützung benötigt werden

Oft fragen Leute das HandBrake Team: "Warum *muss* ich den Aktivitäten Log angeben um technische Unterstützung zu erhalten?". Gute Frage!

Erstens loggen viele Applikationen Informationen über ihre Operationen. Dein Betriebssystem verwendet beispielsweise auch unzählige Logs. Diese werden verwendet, um technische Probleme mit einem System oder einem Programm zu diagnostizieren.

Hier sind ein paar Fragen die hilfreich in der Diagnose eines Problems mit HandBrake sind, die der Aktivitäten Log beantworten kann:

- Verwendest du eine offizielle Version von HandBrake oder einen nicht unterstützten Drittanbieter-Build?
- Wo ist HandBrake auf deinem System installiert?
- Welche Version von HandBrake verwendest du?
- Welches Betriebssystem inklusive Version verwendest du?
- Welchen Typ von CPU verwendest du? Unterstützt es Intel QuickSync Video?
- Welchen Typ von GPU verwendest du? Welche version von OpenCL unterstützt es?
- Kann HandBrake deine GPU für bestimmte Features verwenden?
- Was ist deine Bildschirmauflösung?
- Was ist das Verzeichnis deines Systems für temporäre Dateien? Kann HandBrake es verwenden?
- Verwendet HandBrake dvdread oder dvdnav für das Lesen von DVDs?
- Kann HandBrake deine `Quelle` öffnen?
- Kann HandBrake den Mediatyp deiner `Quelle` bestimmen? Welchen Typ (DVD, Blu-ray, MKV/MP4, etc.)?
- Ist deine `Quelle` eine physische DVD oder Blu-ray oder eine Datei auf deinem Computer?
- Ist deine `Quelle` aufgrund von Kopierschutz unbenützbar?
- Welche [Region](https://de.wikipedia.org/wiki/Regionalcode#DVD-Video) ist bei deiner DVD eingestellt und unterstützt dein DVD Laufwerk diese Region?
- Enthält deine `Quelle` mehrere `Titel`? Wie viel? Wie lang sind sie jeweils?
. Kann HandBrake jeden `Titel` parsen und lesen? Gibt es Fehler?
. Welche Audio, Video und Untertitelspuren befinden sich in jedem `Titel`? Welche [Codecs](https://de.wikipedia.org/wiki/Codec) verwendet jede einzelne Spur?
- Gibt es eine Videospur? Welche Framerate und Auflösung hat das Video?
. Kann HandBrake automatisch schwarze Ränder aus dem Video entfernen (abschneiden)?
- Gibt es Audiospuren? Welche Sprache, Sample Rate, Channel Layout und Bitrate hat jede Audiospur?
. Gibt es Untertitel? Welche Typen und Sprachen?
. Führt HandBrake eine Suche nach fremdsprachigen Audio durch um Forced Untertitel zu finden? Hat es welche gefunden?
. Gibt es Kapitelmarkierungen? Wie viele? Wie lang ist jede?
. Welche Voreinstellung wird für das Kodieren verwendet? Ist es eine offizielle Voreinstellung?
. Welche Änderungen werden an den Einstellungen vorgenommen nachdem eine Voreinstellung ausgewählt wurde?
. Was sind die finalen Einstellungen für den Kodierungsjob?
- Kann HandBrake deine `Ziel` Datei schreiben? Falls nicht, warum?
- Kann HandBrake während des Kodierungsprozesses deine gesamte `Quelle` ohne Fehler einlesen?
- Gibt es irgendwelche Probleme mit den Timestamps deiner `Quelle`?
. Wie viele Frames hat HandBrake von deiner `Quelle` während des Kodierens dekodiert? Waren es mehr oder weniger als erwartet?
- Verwirft oder dupliziert HandBrake Frames um eine Konstante Framerate zu erreichen? Wie viele Frames jeweils?
- Was ist die durchschnittliche Bitrate von jeder kodierten Spur in der `Zieldatei`?
- Schließen sich und beenden die Threads von HandBrake ordentlich?
- Treten in HandBrake während des Kodierens Fehler in der Speicherverwaltung (Memory leaks) auf?

Offensichtlich wäre es sehr *arbeitsintensiv* diese Fragen Tausenden von Leuten, die nach Unterstützung für HandBrake suchen, zu fragen.

Einen Aktivitäten Log bereit zu stellen, ist ein einfacher Weg, um genau zu erklären was abläuft - und das ganze in einem Standardisierten Format. Dies hilft bei der Genauigkeit, beim Vermeiden von Verwirrungen/Verwechslungen und beschleunigt den Supportprozess um einiges, was jedem Zeit spart.

Trotz dem gerade dargestellten Grund gibt es ein paar Leute, die es ablehnen, einen Aktivitäten Log bereitzustellen. Oft denken diese Leute, dass ihre Frage so simpel ist das ein Log nicht gebraucht wird. In der Praxis ist dies aber fast nie der Fall und es geht Zeit verloren Fragen zu stellen und zu beantworten, die durch den Aktivitäten Log leicht beantwortet wären - dafür wurde er designed.

Natürlich ist es das Ziel des HandBrake Team's jedem zu Helfen. Jedoch können wir nicht durch Magie erfahren was in deinem Computer abläuft. *Ohne einen Aktivitäten Log, kann das HandBrake Team keinen technischen Support geben.*

## Privacy

Activity Logs are stored *only* on your computer. HandBrake does not send these logs anywhere else.

If you are concerned about retaining these logs indefinitely, feel free to delete them periodically. Be sure not to delete any other files important to HandBrake's operation.

To provide an Activity Log for support, you must send us your log(s) manually. If you are concerned about private information an Activity Log may contain and reveal to others, feel free to read through the log and redact the parts that concern you before sharing.

## Sharing

To share your Activity Log publicly—for instance, to request technical support for HandBrake—you may wish to do one of the following:

- Copy and paste the text of the log to a Pastebin site such as [Pastebin.com](http://pastebin.com)
- Upload the log file to a free temporary file sharing service such as [ExpireBox](http://expirebox.com/) or [WeTransfer](https://www.wetransfer.com/)
- Upload the log file to a paid file sharing service such as [Box](https://www.box.com/), [Dropbox](https://www.dropbox.com), or [Jumpshare](https://jumpshare.com/)

Once your log is available publicly, share its link with your intended recipient(s). When using a free service, be sure to note how long the service intends to store your log (typically 1-7 days).

Activity Logs may also be pasted directly into [new support requests on GitHub](https://github.com/HandBrake/HandBrake/issues/new).

## Where to find the logs

**Note:** When scanning a new source during encoding, log messages from the scan may be intermixed with log messages from your currently running encode.

<!-- .system-linux -->

### Activity Logs on Linux

You can access the current log by opening the Activity Log window in HandBrake.

<!-- image, activity log window on linux -->

On Linux, logs are stored at `Datadir/ghb`, where `Datadir` is the system default data directory (typically `$(HOME)/.config`).

The full path to the log directory is shown at the top of the Activity Log window.

Inside, you may find the following files:

- `Activity.log.ProcessID`, where `ProcessID` is the process identifier given to HandBrake by Linux, contains information about the specific app session
- Log files for individual encodes are located in the `EncodeLogs` subdirectory and named according to the pattern `Videoname Date Time.txt`; encode logs are retained until deleted manually

<!-- /.system-linux -->
<!-- .system-macos -->

### Activity Logs on Mac

You can access the current log by opening the Activity Log window in HandBrake.

<!-- image, activity log window on mac -->

On Mac, logs are stored at `~/Library/Application Support/HandBrake/EncodeLogs`, where `~` is your home folder.

You can open this location directly from HandBrake's Activity Log window.

Inside, you may find the following files:

- `HandBrake-activitylog.txt` is overwritten each time HandBrake starts, and contains information about the latest app session
- Log files for individual encodes are named according to the pattern `Videoname Date Time.txt` and are retained until deleted manually

<!-- /.system-macos -->
<!-- .system-windows -->

### Activity Logs on Windows

You can access the current log by opening the Activity Log window in HandBrake.

<!-- image, activity log window on windows -->

On Windows, logs are stored at the following locations, where `Username` is your user name:

- `C:\Users\Username\AppData\Roaming\HandBrake\logs` on Windows 7, 8, and 10
- `C:\Users\Username\Application Data\HandBrake\logs` on Windows Vista

Inside, you may find the following files:

- `activity_logProcessID.txt`, where `ProcessID` is the process identifier given to HandBrake by Windows, contains information about the specific app session
- Log files for individual encodes are named according to the pattern `Videoname Date Time.txt` and are retained until deleted manually

<!-- /.system-windows -->

### Activity Logs on the command line

HandBrake's command line interface outputs to the standard streams `stdout` and `stderr`, with encode progress information routed to the former and log messages routed to the latter.

To capture HandBrake's log messages to a file, simply redirect `stderr`:

    HandBrakeCLI ... 2> my-activity-log.txt
