---
Type:            article
State:           [ obsolete ]
Title:           x264 Profile und Levels
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Profile und Levels
==========================

H.264 Profile
--------------
Definiere die Features / Funktionalitäten die der Kodierer verwenden kann.

HandBrake bietet 3 Profile für H.264 Kodierungen an. Du kannst über die Profile als einen Grad von Komplexität denken, der im De-/kodierungsverfahren benötigt wird. Je höher die Komplexität, desto mehr CPU Power wird benötigt um das Video zu kodieren bzw. zu dekodieren. Wenn du ein Profil einstellst, kann der Kodierungsauftrag nur Einstellungen verwenden, die für das Profil erlaubt sind.

Üblicherweise geben Geräte an mit welchen Profilen und Leveln sie kompatibel sind, daher kannst du einfach die Option nehmen die für dein Gerät am besten passt.

-   Auto (Empfohlen)
    -   Dies wählt automatisch das Profil basierend auf den getroffenen Einstellungen aus.
    -   Es ist empfohlen diese Option zu verwenden, ausser du musst ein Profil auswählen um mit einem Gerät kompatibel zu sein.
-   Baseline
    -   Baseline Kodierungen sind die Grundform. Dekodierung ist zwar viel leichter aber es wird eventuell eine weit höhere Bitrate verwendet um den Grad an Qualität beizubehalten.
-   Main
    -   Die mittlere Option. Die meisten modernen / aktuellen Geräte werden dieses Profil unterstützen.
-   High Profile
    -   Für beste Qualität und Dateigröße auf Kosten der CPU Zeit die für das Kodieren und Dekodieren benötigt wird.

Beachte, dass nur weil du ein Profil auswählst deine kodierte Datei nicht automatisch das Profil ist. Es verhindert einfach nur, dass Optionen verwendet werden, die die Einschränkungen des Profiles verletzen würden.

H.264 Levels
------------
Die Levels sind eine andere Form der Einschränkung welche Sachen wie Maximale Bitrate, Frameraten und Auflösung etc. definieren. Der [Wikipedia Artikel](https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC#Levels) listet alle relevanten Informationen für jeden Level.

Die meisten Geräte (und manchmal auch Software Dekodierer) unterstützen einen "maximalen" Level. Wenn die Spezifikationen des Videos die Einschränkungen des Levels übersteigen, kann der Dekodierer das Video nicht ordentlich dekoideren (er wird es vermutlich einfach nicht abspielen).

HandBrake's H.264 Kodierer, x264, setzt die entsprechenden Level automatisch basierend auf allen anderen Einstellungen. Um sicher zu stellen, dass dein Video nicht den Rahmen eines bestimmten Levels sprengt, musst du einfach überprüfen, ob die anderen Parameter die Einschränkungen des Levels beachten.

Es ist empfohlen, dass du diese Einstellung auf "Auto" belässt, ausser du musst es für Gerätekompatibilität setzen.
