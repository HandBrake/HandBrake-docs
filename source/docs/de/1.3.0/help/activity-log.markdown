---
Type:            article
Title:           Aktivitäten Log
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), John Stebbins (j45), Scott (s55) ]
Copyright:       2021 HandBrake Team
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
- Welchen Typ von CPU verwendest du? Unterstützt es Intel Quick Sync Video?
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

Offensichtlich wäre es sehr *arbeitsintensiv* diese Fragen Tausenden von Leuten, die nach Unterstützung für HandBrake suchen, zu stellen.

Einen Aktivitäten Log bereit zu stellen, ist ein einfacher Weg, um genau zu erklären was abläuft - und das ganze in einem Standardisierten Format. Dies hilft bei der Genauigkeit, beim Vermeiden von Verwirrungen/Verwechslungen und beschleunigt den Supportprozess um einiges, was jedem Zeit spart.

Trotz dem gerade dargestellten Grund gibt es ein paar Leute, die es ablehnen, einen Aktivitäten Log bereitzustellen. Oft denken diese Leute, dass ihre Frage so simpel ist das ein Log nicht gebraucht wird. In der Praxis ist dies aber fast nie der Fall und es geht Zeit verloren Fragen zu stellen und zu beantworten, die durch den Aktivitäten Log leicht beantwortet wären - dafür wurde er designed.

Natürlich ist es das Ziel des HandBrake Team's jedem zu Helfen. Jedoch können wir nicht durch Magie erfahren was in deinem Computer abläuft. *Ohne einen Aktivitäten Log, kann das HandBrake Team keinen technischen Support geben.*

## Datenschutz

Aktivitätenlogs werden *nu* auf deinem Computer gespeichert. HandBrake versendet diese Logs nicht.

Falls du besorgt darüber bist, diese logs unendlich lange aufzubehalten kannst du diese periodisch manuell löschen. Passe dabei auf, dass du nicht wichtige Dateien löscht die für HandBrake wichtig sind.

Um einen Aktivitätenlog für Supportanfragen bereit zu stellen, musst du uns deinen Log/deine Logs manuell zukommen lassen. Falls du besorgt über private Informationen bist, die ein Aktivitätenlog enhalten kann und für andere im Zuge der Anfrage sichtbar wird, kannst du dir den Log durchlesen und die Teile entfernen die du nicht teilen möchtest.

## Teilen

Um deinen Aktivitätenlog öffentlich zu teilen - zum Beispiel um technische Unterstützung für HandBrake zu bekommen - kannst du folgende Anbieter verwenden:

- Kopiere den Text des Logs auf eine Pastebin Seite wie [pastebin.com](http://pastebin.com)
- Lade die Logdatei auf einen temporären gratis file sharing service wie [WeTransfer](https://www.wetransfer.com/) hoch
- Lade die Logdatei auf einen bezahlten file shareing service wie [Box](https://www.box.com/), [Dropbox](https://www.dropbox.com), oder [Jumpshare](https://jumpshare.com/) hoch

Sobald dein Log öffentlich verfügbar ist, teile den Link mit den beabsichtigten Empfängern. Wenn du einen gratis Service verwendest, schreibe bitte wie lange der Service deine Datei speichert (üblicherweise 1-7 Tage).

Aktivitätenlogs können auch direkt in einen [neuen support requests auf GitHub](https://github.com/HandBrake/HandBrake/issues/new) kopiert werden.

## Wo die Logs zu finden sind

**Beachte:** Wenn du eine neue Quelldatei öffnest während du ein Video kodierst, können sich die Log Nachrichten vermischen.

<!-- .system-linux -->

### Aktivitätenlogs unter Linux
Du kannst den aktuellen Aktivitätenlog öffnen indem du das Aktivitätenlogfenster in HandBrake öffnest.

<!-- image, activity log window on linux -->

Auf Linux werden die Logs in einem von zwei Orten gespeichert (`~` ist dein Home Verzeichnis):

- Das `ghb` Verzeichnis in dem Standarddatenpfad deines Systems (üblicherweise `~/.config`) für das offizielle PPA und selbstkompilierte Builds
- Das `fr.handbrake.ghb/config/ghb` Verzeichnis in dem Flatpak-Datenpfad deines Systems (üblicherweise `~/.var/app`) für die offiziellen Flatpak Bundles

Der absolute Pfad zu dem Log Verzeichnis wird am oberen Rand des Aktivitätenlog Fensters angezeigt.

In dem Verzeichnis findest du die folgenden Dateien:

- `Activity.log.ProcessID`, hier ist die `ProcessID` der Prozess Identifier der HandBrake von Linux gegeben wird. Diese Datei einthält Informationen über die spezifische App Session
- Log Dateien für individuelle Kodierungen werden in dem `Encode Logs` Verzeichnis gespeichert und nach dem Muster `Videoname Datum Zeit.txt` benannt. Kodierungslogs werden aufbehalten bis sie manuell gelöscht werden.

<!-- /.system-linux -->
<!-- .system-macos -->

### Aktivitätenlogs unter Mac
Du kannst den aktuellen Aktivitätenlog öffnen, indem du das Aktivitätenlogfenster in HandBrake öffnest.

<!-- image, activity log window on mac -->

Unter Mac werden die Logs in dem Verzeichnis `~/Library/Application Support/HandBrake/EncodeLogs` gespeichert (`~` ist ein Heimatverzeichnis).

Du kannst dieses Verzeichnis direkt aus HandBrake's Aktivitätenlogfenster öffnen.

In dem Verzeichnis findest du die folgenden Dateien:

- `HandBrake-activitylog.txt` wird bei jedem Start von HandBrake überschrieben und enthält Informationen über die letzte App Session
- Log Dateien für individuelle Kodierungen werden in dem `Encode Logs` Verzeichnis gespeichert und nach dem Muster `Videoname Datum Zeit.txt` benannt. Kodierungslogs werden aufbehalten bis sie manuell gelöscht werden.

<!-- /.system-macos -->
<!-- .system-windows -->

### Aktivitätenlogs unter Windows
Du kannst den aktuellen Aktivitätenlog öffnen indem du das Aktivitätenlogfenster in HandBrake öffnest.

<!-- image, activity log window on windows -->

Unter Windows werden die Logs in den folgenden Verzeichnissen gespeichert (`Username` ist der Name deines Benutzers):

- `C:\Users\Username\AppData\Roaming\HandBrake\logs` für Windows 7, 8, und 10
- `C:\Users\Username\Application Data\HandBrake\logs` für Windows Vista

In dem Verzeichnis findest du die folgenden Dateien:

- `activity_logProcessID.txt`, hier ist `ProcessID` der Prozess Identifier der HandBrake von Windows gegeben wird. Diese Datei enthält Informationen über die spezifische App Session
- Log Dateien für individuelle Kodierungen werden in dem `Encode Logs` Verzeichnis gespeichert und nach dem Muster `Videoname Datum Zeit.txt` benannt. Kodierungslogs werden aufbehalten bis sie manuell gelöscht werden.

<!-- /.system-windows -->

### Aktivitätenlogs auf der Kommandozeile
HandBrake's Kommandozeile schreibt auf die Standardstreams `stdout` und `stderr`. Auf `stdout` werden die Informationen über den Fortschritt der Kodierung geschrieben und auf `stderr` die Log Messages.

Um HandBrake's Log Messages in eine Datei zu schreiben, leite einfach `stderr` um:

    HandBrakeCLI ... 2> mein-aktivitaeten-lgo.txt
