---
Type:            article
Title:           Qualität einstellen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Qualität einstellen
=================

HandBrake's Standardeinstellungen und ein Großteil der offiziellen `Voreinstellungen` verwenden eine Kodierungsmethode mit konstanter Qualität. Dadurch schaut dein Video von Anfang bis Ende gleich aus. Verwende immer konstante Qualität, außer du hast einen speziellen Grund es nicht zu tun.

Du kannst die Standardeinstellungen der gewählten `Voreinstellung` verwenden, oder den Qualitätsregler nach Belieben höher oder niedriger stellen. Eine Erhöhung der Qualität führt zu einem großeren Speicherplatzverbrauch auf deinem Computer oder Abspielgerät, hingegen verringert eine niedrigere Qualität typischerweise die Videogröße.

## Den Qualitätsregler verwenden

Ein Großteil von HandBrake's offiziellen `Voreinstellungen` verwendet die x264 oder x265 Videokodierer mit einem Constant Rate Factor, meist abgekürzt als CRF oder RF. Eine niedrigere RF Zahl resultiert in einer *höheren*, und eine höhere RF Zahl in einer *niedrigeren* Videoqualität.

Du kannst dir den RF Regler in HandBrake wie einen Qualitätsregler vorstellen. Um die Videoqualität zu erhöhen schiebe den Regler nach rechts, zum Verringern nach Links.

<!-- .system-macos -->

![Verwendung des Reglers für konstante Qualität](../../../en/images/mac/quality-control-1.1.0.png "Den Regler nach rechts verschieben erhöht die Qualität, nach Links verringert es die Qualität.")

<!-- /.system-macos -->

Beginne mit kleinen Veränderungen. Üblicherweise ist bereits ein plus oder minus von 1-2 RF bemerkbar.

## Empfohlene Qualitätseinstellungen

Empfohlene Einstellungen für **x264** und **x265** Kodierer:

- RF 18-22 für 480p/576p Standard Definition[^SD]
- RF 19-23 für 720p High Definition[^720p]
- RF 20-24 für 1080p Full High Definition[^1080p]
- RF 22-28 für 2160p 4K Ultra High Definition[^2160p]

Die Qualität um minus 1-2 RF zu erhöhen, kann bessere Resultate beim Kodieren von animierten `Quellen` (Anime, Cartoons) liefern. Niedrigere Qualitätseinstellungen können verwendet werden, um kleinere Dateien zu erzeugen. Stark verringerte Qualitätseinstellungen könnten ein Video erzeugen, welches sehr viel an Detail verloren hat.

Wenn Einstellungen über den Empfohlenen getroffen werden, können *extrem große Dateien* entstehen, welche eventuell nicht mit deinen Geräten kompatibel sind. Wenn du dir unsicher bist, bleib bei den empfohlenen Einstellungen oder verwende die Standardeinstellungen der von dir gewählten `Voreinstellung`.

## Bildschirmgröße und Betrachtungsdistanz

Imperfektionen fallen leichter auf großen Bildschirmen und nahen Distanzen auf. Dies gilt besonders für Videos in niedriger Auflösung (unter 720p), welche auf die volle Bildschirmgröße hochskaliert werden und dadurch die Fehler noch mehr hervorheben.

Du könntest beim Betrachten auf großen Bildschirmen (50 Zoll / 125 cm Diagonale oder mehr) oder beim Betrachten aus kurzen Distanzen[^viewing-distance] die Einstellung der Qualität leicht erhöhen. Reduzierte Qualität kann für Betrachtung auf kleineren Bildschirmen akzeptabel sein oder auf Geräten die limitierten Speicherplatz haben wie zum Beispiel Mobiltelefone.

<!-- .continue -->

## Nächste Schritte

<!-- .success -->

Fahre fort zu [Einstellungen testen](preview-settings.html).

<!-- /.success -->

<!-- /.continue -->

[^SD]: [SD](abbr:Standard Definition) Video hat eine Auflösung von 720x480 oder weniger Pixel (720x576 für PAL). DVDs, kleine Web Videos, und viele Analoge Quellen sind SD.

[^720p]: 720p [HD](abbr:High Definition) Video hat eine Auflösung von 1280x720 Pixel. Mit einer drei mal so großen Auflösung als SD und circa die Hälfte von 1080p, ist 720p HD weit verbreitet bei Videokameras, Web Videos und TV Sendungen.

[^1080p]: 1080p [HD](abbr:High Definition) Video hat eine Auflösung von 1920x1080, Pixel — das Doppelte von 720p und sechs mal so viel wie 480p.1080p HD Video wird meistens von Mobiltelefonen und Tablets, Videokameras und Blu-ray verwendet.

[^2160p]: 2160p [UHD](abbr:Ultra High Definition) Video hat eine Auflösung von 3840x2160 Pixel und hat vier mal so viel Pixel wie 1080p. 4K Video wird von High-End Mobiltelefonen und Tablets, professionellen Videokameras und 4K Blu-ray verwendet.

[^viewing-distance]: Lerne mehr über die [optimale Betrachtungsdistanz für HD TV Bildschirme](https://en.wikipedia.org/wiki/Optimum_HDTV_viewing_distance)(Englisch).
