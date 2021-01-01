---
Type:            article
State:           [ obsolete ]
Title:           Quellformate
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

Quellformate
==============
Eine von HandBrake's Stärken ist seine Fähigkeit eine große Anzahl verschiedener Videoformate einlesen zu können. HandBrake verwendet [FFmpeg](https://ffmpeg.org/) und kann somit alles öffnen was FFmpeg öffnet und zusätzlich disk basierte Formate wie DVD und Blu-Ray.

**Beachte:** HandBrake bricht oder umgeht keinen [Kopierschutz](https://de.wikipedia.org/wiki/Kopierschutz) irgendeiner Art. Es funktioniert nicht mit Videodateien die [Digitale Rechteverwaltung](https://de.wikipedia.org/wiki/Digitale_Rechteverwaltung) (kurz: DRM) verwenden. Siehe [Über HandBrake](../about.html) für mehr Informationen über was HandBrake *kann* und was es *nicht kann*.

## Videos die von Handys, Tablets und vielen Videokameras und Spiegelreflexkameras erstellt wurden
Üblicherweise wird jedes Video eine einzige Datei sein die du auf deinen Computer kopieren kannst und mit HandBrake öffnen kannst. Typischerweise sind es Dateiformate wie MP4 (oder M4V), MOV, MPG (oder MPEG) und AVI.

Manche Kameras speichern mehrere Videos in einer Ordnerstruktur mit einer Playlist die ähnlich der von Blu-Ray Disks ist. Genauer sind dies Kameras die in AVCHD oder AVCHD Lite aufnehmen. HandBrake ist normalerweise in der Lage einzelen Videodateien aus dem Stream Ordner in dem BDMV Ordner zu öffnen. In manchen Fällen ist das jedoch nicht verlässlich, zum Beispiel wenn ein einzelner Videostream über mehrere Dateien aufgeteilt ist.

## Bildschirm und Spielaufnahmen, Web Videos, Videobearbeitungsprojekte und andere Computerbezogene Quellen
Manche Bildschirmaufnahmesoftware kann direkt in einem Format aufnehmen oder in eines exportieren das HandBrake öffnen kann. Übliche Video Dateiformate sind MP4 (oder M4V), MKV, MPG (oder MPEG), AVI und WMV.

HandBrake kann Web Videos in FLV, WEBM, MP4 und vielen anderen Formaten öffnen.

Videos welche mit Videobearbeitungssoftware wie zum Beispiel [iMovie](https://www.apple.com/mac/imovie/) erstellt wurde, müssen zuerst in ein geläufiges Format exportiert werden um mit HandBrake kompatibel zu sein.

## Professionelle Videoproduktionsformate
HandBrake kann eine Reihe von Produktionsformaten öffnen, die von professionellen Videokameras und [NLE](abbr:Non-linear editing system)s erstellt werden, inklusive [ProRes](https://en.wikipedia.org/wiki/Apple_ProRes) und [DNxHD](https://en.wikipedia.org/wiki/DNxHD_codec).

## DVD, Blu-ray, AVCHD/AVCHD Lite[^avchd-partial-support], und HD-DVD[^hddvd-partial-support] Disks oder Disk Backups
HandBrake kann DVD und Blu-Ray Disks direkt öffnen. Meistens ist es jedoch besser die Inhalte der Disks zuerst auf die Festplatte deines Computers zu übertragen[^uncopyable]. Übliche Ordner sind VIDEO_TS und BDMV. Übliche Videoformate VOB, EVO und MTS oder M2TS.

Bestimmte Drittanbieter Werkzeuge für die Kopie von Disks so wie MakeMKV erzeugen üblicherweise... kannst du es erraten?... MKV Videodateien. Andere Werkzeuge erstellen ISO (manchmal als CDR bezeichnet) images von DVD oder Blu-Ray Disks. HandBrake kann diese meistens direkt öffnen.

BIN+CUE, MDF+MDS, und Toast images müssen zuerst gemounted werden. Öffne das Image mithilfe deines Betriebssystems oder einer passenden Software und öffne dann die virtuelle Disk mit HandBrake.

## Aufnahmen von Fernsehausstrahlungen
HandBrake kann typische Videoformate öffnen, die von Fernsehaufnahmen erzeugt werden wie zum Beispiel TS/MTS/M2TS, MP4 (oder M4V), und MPG (oder MPEG).

Aufnahmen die von Fernseher-zu-DVD Rekordern erstellt werden, werden grundsätzlich unterstützt aber beachte bitte, dass manche Rekorder schlecht sind im Disk erstellen. Manche Disks können aufgrund von Mastering Errors nicht funktionieren.

## Digitale Aufnahmen von VHS, Beta, Video8/Hi8, LaserDisc und andere anaolge Quellen
Konvertiere zuerst dein analoges Video in ein digitales mit einem computerbasierten hardware Aufnahmegerät wie das [Blackmagic Design Intensity](https://www.blackmagicdesign.com/products/intensity). Es ist wichtig ein Aufnahmegerät zu wählen, welches in die üblichen Videoformate exportieren kann oder gleich aufnehmen kann. HandBrake kann viele Videoformate öffnen die von Aufnahmesoftware produziert wird inklusive aber nicht limitiert auf TS/MTS/M2TS, MP4 (oder M4V), MOV, MKV, MPG (oder MPEG), und AVI.

[^avchd-partial-support]: AVCHD und AVCHD Lite Playlists werden nicht vollständig unterstützt. Individuelle Dateien/Streams könnten funktionieren.

[^hddvd-partial-support]: HD-DVD Playlists werden nicht vollständig unterstützt. Individuelle Dateien/Streams könnten funktionieren.

[^uncopyable]: Ohne Spezialsoftware kann man nicht direkt VIDEO_TS oder BDMV Ordner von kopiergeschützten Disks kopieren.
