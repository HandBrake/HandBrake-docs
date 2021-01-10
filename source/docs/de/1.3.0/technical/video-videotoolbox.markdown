---
Type:            article
Title:           Apple VideoToolbox
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader, Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Apple VideoToolbox
==================

## Unterstütze Hardware

- Großteil der 2015 und neueren Macs

Beachte bitte, dass Hardwarekodierung via VideoToolbox auf älteren GPUs und älteren Betriebssystemen funktionieren *könnte*. Dies wird jedoch nicht offiziell unterstützt.

## Unterstützung aktivieren

Falls dein Computer unterstützt wird, wirst du einen oder mehr der folgenden Videokodierer bei der Encoder Control im `Video` Tab sehen.

- H.264 (VideoToolbox)
- H.265 (VideoToolbox)

Eine Auswahl des darunterliegenden Hardwarekodierers (AMD VCE oder Intel Quick Sync Video) ist nicht verfügbar. Üblicherweise wird die Option mit der besten Qualität ausgewählt.

## Performance

Der Hardwarekodierer kümmert sich nur um die Kodierung des Videos. Alles vor und nach dem Videokodieren inklusive Decoding, Filter, Audio/Video Sync, Audio Encoding, Muxing, usw. wird von der CPU ausgeführt. Dadurch ist eine hohe CPU Auslastung (bis zu 100%) während dem Kodieren normal.

Speziell auf lower-end Hardware ist es für die CPU üblich, ein Bottleneck für den Hardware Videokodierer zu sein. Um diesen Effekt zu minimieren, deaktiviere alle Filter die du nicht benötigst.

## Fortgeschrittene Optionen

Es gibt keine fortgeschrittenen Optionen für VideoToolbox Kodierer.
