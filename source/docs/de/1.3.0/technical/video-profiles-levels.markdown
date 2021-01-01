---
Type:            article
State:           [ draft ]
Title:           Profile und Level
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader, Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Profile und Level
==========================

Video Profile
--------------

Video Profile definieren die Features und Fähigkeiten eines Kodierers.

Das Profil entspricht ungefähr dem Level von Komplexität in der Dekodierung/Kodierung. Je höher die Komplexität, desto mehr CPU Power ist für die Dekodierung/Kodierung notwendig. Das Setzen eines Profiles schränkt den Prozess auf Einstellungen ein, die für dieses Profil erlaubt sind.

Üblicherweise geben Geräte Informationen darüber an, mit welchen Profilen und Leveln sie kompatibel sind. Du kannst also einfach die Option verwenden die für dein Gerät am Besten geeignet ist.

Beachte, dass das Setzen eines Profiles nicht bedeutet, dass die resultierende Datei als dieses Profil erzeugt wird. Es stellt einfach nur sicher, dass keine Optionen verwendet werden, welche die Einschränkungen des Profiles verletzen.

Level
------------

Level sind eine andere Form von Einschränkungen die Dinge wie maximale Bitrate, Framerate und Auflösung usw. definieren. Die folgenden Wikipedia Artikel listen die relevanten Informationen für die jeweiligen Level.

The levels are another form of constraints that define things like maximum bitrates, framerates and resolution etc. The following wikipedia articles lists the relevant information for each level.

| Status      | Description                                                                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| H.264       | https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC#Levels                                                                                                    |
| HEVC / H.265| https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding_tiers_and_levels                                                                              |


Ein Großteil der Geräte (und manchmal auch Software Dekodierer) unterstützen ein "Maxmimum" Level. Wenn die Spezifikationen des Videos die Beschränkungen des Levels übersteigen, ist der Dekodierer nicht in der Lage das Video korrekt abzuspielen (oder verhindert überhaupt das Abspielen).

HandBrake's Kodierer setzen den zugehörigen Level automatisch aufgrund der anderen Einstellungen. Um sicherzustellen, dass dein Video nicht einen bestimmten Level übersteigt, musst du die anderen Parameter so konfigurieren, dass sie die Beschränkungen des Levels nicht übersteigen.

Es wird empfohlen diese Einstellung auf "Auto" zu belassen außer du musst es modifizieren um die Kompatibilität mit einem Gerät sicherzustellen.
