---
Type:            article
State:           [ obsolete ]
Title:           Geschwindigkeit der Kodierung
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Geschwindigkeit der Kodierung
=============================
## Wie misst man die Geschwindigkeit der Kodierung?
Die Geschwindigkeit in der deine Quelle kodiert wird, wird in Frames pro Sekunde (fps) gemessen. Dies sagt aus wie viele Bilder (Frames) deines Videos pro Sekunde kodiert werden. Falls deine Kodierung zum Beispiel mit 100fps läuft und deine Quelle eine 25fps PAL DVD ist, wird die Kodierung in einem viertel der Länge des Videos abgeschlossen sein.

## Was wirkt sich auf die Geschwindigkeit aus?
Es gibt viele Faktoren die sich auf die Performanz auswirken. Die Hardware auf der das Programm läuft, die Einstellungen für die Kodierung und die Quelle.

### Hardware
Die Hardware über die du verfügst kann einen größen Einfluss auf die Performanz haben. HandBrake skaliert gut auf bis zu 6 CPU Kerne. Eine 4-Kern-CPU kann also fast doppelt so schnell sein wie eine äquivalente 2-Kern-CPU.

HandBrake unterstützt außerdem die Kodierung in der Hardware mit Intel QuickSync. Dies verwendet dedizierte ASIC Hardware auf dem Prozessor um das Video zu kodieren was die CPU entlastet. Falls du einen Intel Haswell oder neueren Intel Prozessor mit einer HD Graphics on-board besitzt kannst du damit sehr hohe Performanz mit einer vernünftigen Qualität erreichen.

Lese unsere [Systemanforderungen](system-requirements.html) für Details über die empfohlene Hardware um HandBrake zu verwenden.

### Einstellungen
Einstellungen spielen eine große Roll in der Performanz. Die meisten Kodierer bieten Konfigurationsoptionen an, um den Kodierer anzupassen. In HandBrake haben wir das mit dem "Video Voreinstellung" Regler vereinfacht. Dieser bietet eine Anzahl an Möglichkeiten von Ultrafast bis Placebo (was extrem langsam ist). Er tauscht Geschwindigkeit gegen Qualität und Dateigröße. Wenn du eine schnellere Voreinstellung verwendest, erhälst du ein Video mit schlechterer Qualität ODER einer größeren Dateigröße. Die Nutzung einer langsameren Voreinstellung verwendet komplexere Algorithmen um  das Video zu komprimieren. dies benötigt mehr Zeit aber liefert ein besseres Resultat.

Für x264 und x265 ist die Medium Voreinstellung ein guter Kompromiss zwischen Qualität, Dateigröße und Geschwindigkeit aber du kannst diesen Regler deinen Bedürfnissen anpassen.

<!-- .system-windows -->

![HandBrake's Videoqualitätseinstellungen](../../../en/images/windows/video-quality-1.0.0.png "HandBrake's Videoqualitätseinstellungen")

<!-- /.system-windows -->

Filter haben auch einen großen Effekt. Vor allem wenn du den Denoise NLMeans Filter verwendest. Dieser ist eine sehr Speicherintensive Operation und kann die Geschwindigkeit deiner Kodierung drastisch verringern. Es gibt jedoch Einstellungen für die Filter die sie für Geschwindigkeit oder Qualität anpassen. Dadurch kannst du unterschiedliche Resultate erhalten, je nachdem welche Voreinstellungen und Anpassungen du verwendest.

<!-- .system-windows -->

![HandBrake's Videofilter Einstellungen](../../../en/images/windows/video-filters-1.0.0.png "HandBrake's Videofilter Einstellungen")

<!-- /.system-windows -->

### Quelle
Deine Quelle hat natürlich auch auf die Performanz Auswirkungen.
Beispielsweise benötigt ein 1080p HD Video länger zum Kodieren mit denselben Einstellungen und Hardware als eine 576P Datei. Das liegt daran, dass in diesem Fall 5 mal so viele Pixel zu verarbeiten sind als in dem 1080p Video.
Ein weiterer Aspekt der die Performanz beeinflusst, ist das Format der Quelldatei. Beispielsweise ist der H.264 Dekodierer sehr gut optimiert aber weniger weit verbreitete Codecs könnten nicht so gut optimiert sein. In einem Codec ist das Dekodieren von Baseline H.264 weit schneller und weniger CPU intensiv als High Profile H.264. Das liegt an den Algorithmen die zum dekodieren verwendet werden. Diese sind in diesem Fall einfacher, dadurch hast du mehr CPU Zeit für die Kodierung zur Verfügung.

