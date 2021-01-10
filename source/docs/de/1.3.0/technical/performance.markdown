---
Type:            article
Title:           Performance
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        German
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Performance
===========

Videokodierung ist eine der am meisten fordernden Aktivitäten für Computer.

Eine schnelle CPU und Memory helfen HandBrake's Software Videokodierer, Videofilter, Audiokodierer und anderen Prozessen. HandBrake's Hardware Videokodierer könnenn auch einen Nutzen aus moderner GPU Hardware ziehen. Im [Systemanforderungen](system-requirements.html) Artikel sind die minimalen Hardwareanforderungen für die Nutzung von HandBrake aufgelistet.

Um einen Vergleich zu bieten, wie verschiedene Features und Einstellungen die Kodierungsperformance beeinflussen, haben wir eine High Quality 4K 2160p24 (eigentlich 3840x1714) Version des offenen Films *[Tears Of Steel](https://mango.blender.org/)* kodiert. Die Laufzeit der `Quelldatei` ist 12 Minuten und 14 Sekunden und enthält ein H.264 Video, verlustfreies FLAC Stereo Audio und Dolby Digital (AC-3) 5.1 Surround Audio.

## Performance Vergleich zwischen offiziellen Voreinstellungen

Eine `Voreinstellung` ist eine Gruppe von Einstellungen, die auf die Software oder das Gerät auf dem du das Video abspielen möchtest, zugeschnitten ist. Lese [hier](official-presets.html) mehr über HandBrake's offizielle Voreinstellungen.
`Voreinstellungen` unterscheiden sich auf mehrere Arten. Zum Beispiel: Videoauflösung, Filter, Kodierer, Kodierervoreinstellung und Qualität; Audiospuren (Stereo, Surround Sound oder beides), Kodierer und Qualität; Untertitelspuren und -typen; Kapitelmarkierungen; Containeroptionen und Kompatibilität. Durch die große Anzahl an Variablen kann sich die Performance zuwischen verschiedenen `Voreinstellungen` stark unterscheiden.

HandBrake's General `Voreinstellungen` sind so designed, dass sie die Kompatibilität mit einer großen Anzahl von modernen Geräten und Software sicherstellen. Zudem legen sie vernünftige Einstellungen für Kodierungsperformance, Qualität und Dateigröße fest.

Die folgenden Resultate wurden mit einem Mitte-2010 Mac Pro mit einer Intel Xeon w3680 CPU mit 6 Kernen und 12 Threads bei 3.33 GHz, 26 GB Memory und macOS Mojave produziert.

| Offizielle Voreinstellung | Kodierer     | Qualität| Audiospuren                      | Kodierungsgeschwindigkeit | Realtime Speed | Bit Rate | Größe |
|---------------------------|--------------|---------|----------------------------------|----------------|----------------|----------------|------------|
| Very Fast 1080p30         | H.264 (x264) | RF 24   | AAC stereo                       | 33.1 FPS       | 1.38x          |  3.50 Mb/s     | 320.8 MB   |
| Fast 1080p30              | H.264 (x264) | RF 22   | AAC stereo                       | 19.1 FPS       | 0.80x          |  5.49 Mb/s     | 503.6 MB   |
| HQ 1080p30 Surround       | H.264 (x264) | RF 20   | AAC stereo; Dolby Digital (AC-3) | 12.7 FPS       | 0.53x          |  8.15 Mb/s     | 748.0 MB   |
| Super HQ 1080p30 Surround | H.264 (x264) | RF 18   | AAC stereo; Dolby Digital (AC-3) |  6.7 FPS       | 0.28x          | 10.71 Mb/s     | 983.7 MB   |

![Vergleich von offiziellen 1080p General Voreinstellungen](../../../en/images/performance-general-presets-1.3.0.png "HandBrake's schnellere General Voreinstellungen produzieren kleinere Dateien mit einer durchschnittlichen Qualität während die High Quality Voreinstellungen größere Dateien produzieren die auch länger zum Kodieren benötigen.")

Die Very Fast `Voreinstellung` beginnt mit einer schnelleren Videokodierer Voreinstellung (x264 veryfast) und der Qualität RF 24. Die Fast `Voreinstellung` verwendet eine längsamere Videokodierer Voreinstellung (x264 fast) und erhöht die Qualität zudem auf RF 22. Kombiniert resultiert dies in einem Video mit besserer Qualität und einer größerer Datei und der Kodierungsprozess dauert länger.

Die HQ und Super HQ `Voreinstellungen` verwenden noch langsamere Videokodierer Voreinstellungen (x264 slow und veryslow respektive), noch höhere Qualität (RF 20 und 18 respektive) und inkludieren des Weiteren Surround Audio. Der Preis für eine höhere Qualität und mehr Features ist wiederum eine größere Datei und eine Erhöhung der Verarbeitungszeit.

Eine High Quality 4K 2160p `Quelldatei` auf einem veralteten Computer zu 1080p zu kodieren kann lange dauern. Nur die schnellste `Voreinstellung` war schneller als Realtime. Dies bedeutet, dass das Kodieren nicht so lange dauert wie wenn man sich den Film selbst anschauen würde.

Probieren wir dasselbe auf einem schnelleren Computer. Die folgenden Resultate wurden mit einem PC mit einer Intel Xeon E5-2699 v4 CPU mit 22 Kernen und 44 Threads bei 2.6-2.8 GHz (durchgehend im Turbo), 32 GB Memory und Windows 10 Professional produziert.

| Offizielle Voreinstellung | Kodierer     | Qualität| Audiospuren                      | Kodierungsgeschwindigkeit | Realtime Speed | Bit Rate | Größe |
|---------------------------|--------------|---------|----------------------------------|----------------|----------------|----------------|------------|
| Very Fast 1080p30         | H.264 (x264) | RF 24   | AAC stereo                       | 66.4 FPS       | 2.77x          |  3.46 Mb/s     | 317.3 MB   |
| Fast 1080p30              | H.264 (x264) | RF 22   | AAC stereo                       | 55.8 FPS       | 2.33x          |  5.37 Mb/s     | 492.5 MB   |
| HQ 1080p30 Surround       | H.264 (x264) | RF 20   | AAC stereo; Dolby Digital (AC-3) | 44.1 FPS       | 1.84x          |  8.00 Mb/s     | 734.4 MB   |
| Super HQ 1080p30 Surround | H.264 (x264) | RF 20   | AAC stereo; Dolby Digital (AC-3) | 23.8 FPS       | 0.99x          | 10.30 Mb/s     | 949.3 MB   |

Der neuere Computer mit einer schnelleren CPU und Memory schneidet besser ab. Der x264 Codec skaliert zwar nicht linear mit der hohen Thread Anzahl aber der Prozess läuft trotzdem deutlich schneller ab. Die Qualität ist dieselbe wie auf dem langsameren Computer, die Prozesse laufen jedoch schneller ab.

*Du kannst diese Tests auch selbst durchführen.*

Öffne eine `Quelldatei` in HandBrake und kodiere sie mit jedem dieser `Voreinstellungen`. Beachte wie schnell jede `Voreinstellung` fertig ist. Vergleiche die Größen der resultierenden Dateien. Schaue dir die Ergebnisse an und bewerte die visuelle Qualität. Überlege, ob du Surround Audio möchtest (angenommen die `Quelldatei` enthält eine Surround Audio Spur). Entscheide abschließend welche `Voreinstellung` deinen Bedürfnissen entspricht und verwende es zukünftig.

## Performancevergleich zwischen Videokodierer

Videokodierer verwenden fortgeschrittene mathematische Algorithmen um die Größe deines Videos zu verringern und gleichzeitig die wahrgenommene Qualität beizubehalten. Diverse Kodierer verwenden zwar ähnliche Techniken aber jeder Kodierer ist anders. Manche sind effizienter als andere.

x264 is der Standard Videokodierer welcher von vielen von HandBrake's offiziellen `Voreinstellungen` verwendet wird. x264 erstellt Standard H.264/AVC Video mit einer hohen Qualität, einer vernünftigen Dateigröße und ist relativ schnell auf modernen Computern. Ein Großteil moderner Mobilgeräte verfügen über Hardware Dekodierer welche eine Energieeffiziente Wiedergabe von H.264/AVC Videos ermöglichen.

x265 ist ein neuerer Videokodierer welcher Standard H.265/HEVC Videos erstellt. Neuere Mobilgeräte verfügen gleich wie bei x264 über einen Hardware Dekodierer und somit wird x265 immer bekannter. Unter bestimmten Umständen wie zum Beispiel die Kodierung in 4K Ultra High Definition oder die Erstellung von kleineren Videos mit einer niedrigeren Bitrate, kann x265 die gleiche oder sogar bessere Qualität produzieren als x264 und gleichzeitig noch kleinere Dateien erzeugen. Das alles geht auf Kosten der Kodierzeit da x265 viel langsamer beim Kodieren ist.

Andere Videokodierer wie beispielsweise VP8 und VP9 versprechen Resultate änhlich denen von x264 und x265 aber benötigen üblicherweise länger zum Kodieren. VP8 und VP9 Hardware Dekodierer für Mobilgeräte sind nicht weit verbreitet, dadurch kann die Batterie schneller aufgebraucht werden wenn Videos dieser Typen angeschaut werden.

HandBrake unterstützt zudem AMD VCE, Intel QSV und NVIDIA NVENC Hardware Kodierer. Diese Kodierer produzieren H.264 und/oder H.265 Videos mit extrem hoher Geschwindigkeit jedoch mit etwas geringerer Qualität und größeren Dateien.

Vergleichen wir einmal ein paar Kodierer. Wir haben dieselbe High Quality 2160p 4K Video `Quelle` zu 1080p mit acht verschiedenen Kodieren kodiert.

Die folgenden Resultate wurden mit einem PC mit einer Intel Xeon E5-2699 v4 CPU mit 22 Kernen und 44 Threads bei 2.6-2.8 GHz (konstanter Turbo), 32 GB Memory, einer AMD Radeon RX 580, einer NVIDIA GeForce GTX 1060 und Windows 10 Professional erzeugt.

| Offizielle Voreinstellung   | Kodierer       | Typ     | Qualität / Bit Rate   | Audiospuren  | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bit Rate | Gesamtgröße |
|-------------------|---------------|----------|----------------------|---------------|----------------|----------------|----------------|------------|
| H.265 MKV 1080p30 | H.265 (x265)  | Software | RF 22                | AAC stereo    | 16.1 FPS       | 0.67x          |  5.08 Mb/s     |   466.3 MB |
| H.264 MKV 1080p30 | H.264 (x264)  | Software | RF 22                | AAC stereo    | 53.9 FPS       | 2.25x          |  5.19 Mb/s     |   476.2 MB |
| VP9 MKV 1080p30   | VP9           | Software | ABR 4500 kb/s 2-pass | Opus stereo   | 10.2 FPS       | 0.43x          |  4.64 Mb/s     |   425.5 MB |
| VP8 MKV 1080p30   | VP8           | Software | ABR 6000 kb/s 2-pass | Vorbis stereo | 21.2 FPS       | 0.88x          |  8.40 Mb/s     |   770.2 MB |
| *custom*          | H.265 (VCE)   | Hardware | CQ 22                | AAC stereo    | 60.9 FPS       | 2.54x          | 10.70 Mb/s     |   978.1 MB |
| *custom*          | H.264 (VCE)   | Hardware | CQ 22                | AAC stereo    | 61.3 FPS       | 2.55x          | 11.20 Mb/s     | 1,026.0 MB |
| *custom*          | H.265 (NVENC) | Hardware | CQ 22                | AAC stereo    | 63.4 FPS       | 2.64x          |  9.88 Mb/s     |   906.5 MB |
| *custom*          | H.264 (NVENC) | Hardware | CQ 22                | AAC stereo    | 63.6 FPS       | 2.65x          | 11.20 Mb/s     | 1,024.0 MB |

Manche Kodierer sind deutlich schneller als andere. Hardware Kodierer sind üblicherweise viel schneller als Software Kodierer, produzieren jedoch größere Dateien und/oder Videos mit etwas geringerer Qualität. In diesem Fall ist x264 der klare Gewinner mit einer Balance von Geschwindigkeit, Qualität und Dateigröße.

Die offiziellen `Voreinstellungen` in diesem Test sind so designed, dass sie unabhängig vom verwendeten Kodierer Resultate mit vergleichbarer Qualität produzieren. Der Vergleich ist demnach nciht besonders fair. Manche verwenden Qualitätsbasiertes Kodieren, andere Durchschnittliche Bitrate (welches die Dateigröße priorisiert und mehr Varianz in der Qualität erlaubt). Zusätzliche Variablen wie Filter und Audio können auch Auswirkungen haben.

Vergleichen wir erneut mit weniger Variablen. Hier haben wir den Decomb Deinterlacing Filter, Audiospuren und die Suche nach fremdsprachigem Audio deaktiviert. Zudem verwenden wir immer die Methode Durchschnittliche Bitrate mit 2-pass mode. Wir haben die Bitrate auf 3000 kb/s reduziert, um die Effizienz der unterschiedlichen Kodierer in Bezug auf Qualität im Verhältnis zur Dateigröße hervorzuheben. Beachte, dass die VCE und NVENC Hardware Kodierer nur 1-pass mode unterstützen.

| Kodierer       | Typ     | Kodierer Voreinstellung | Video Bit Rate       | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bit Rate | Gesamtgröße |
|---------------|----------|----------------|----------------------|----------------|----------------|----------------|------------|
| H.265 (x265)  | Software | Medium         | ABR 3000 kb/s 2-pass | 27.8 FPS       | 1.16x          |  2.94 Mb/s     | 275.4 MB   |
| H.264 (x264)  | Software | Medium         | ABR 3000 kb/s 2-pass | 72.1 FPS       | 3.00x          |  3.00 Mb/s     | 275.5 MB   |
| VP9           | Software | Medium         | ABR 3000 kb/s 2-pass | 11.3 FPS       | 0.47x          |  2.96 Mb/s     | 277.1 MB   |
| VP8           | Software | Medium         | ABR 3000 kb/s 2-pass | 29.1 FPS       | 1.21x          |  2.94 Mb/s     | 275.2 MB   |
| H.265 (VCE)   | Hardware | Medium         | ABR 3000 kb/s 1-pass | 76.0 FPS       | 3.17x          |  3.52 Mb/s     | 323.2 MB   |
| H.264 (VCE)   | Hardware | Medium         | ABR 3000 kb/s 1-pass | 73.6 FPS       | 3.07x          |  2.99 Mb/s     | 274.4 MB   |
| H.265 (NVENC) | Hardware | Medium         | ABR 3000 kb/s 1-pass | 75.9 FPS       | 3.16x          |  2.87 Mb/s     | 268.3 MB   |
| H.264 (NVENC) | Hardware | Medium         | ABR 3000 kb/s 1-pass | 76.0 FPS       | 3.17x          |  3.00 Mb/s     | 272.5 MB   |

![Qualitätsvergleich von HandBrake's Videokodierern](../../../en/images/performance-quality-video-encoders-1.3.0.png "Qualitätsvergleich von HandBrake's Videokodierern")

Mit diesem ausbalancierten Vergleich sehen wir, dass x264 und die Hardware Kodierer mehr als 2,5 mal so schnell sind wie x265 und VP8 und mehr als sechs mal so schnell wie VP9. Beim schnellen H.265 Kodieren sind die VCE und NVENC Hardware Kodierer weitaus schneller als die x265 Software Kodierer; dies geht wiederum auf Kosten der Qualität.

Obwohl keine kompatible Hardware für diesen Test zur Verfügung stand, würde der Intel QSV Hardware Kodierer in etwa gleich abschneiden wie VCE und NVENC. Intel QSV produziert jedoch eine geringfügig höhere Qualität.

Kodierer nach Schnelligkeit absteigend sortiert:

1. Hardware Kodierer (AMD VCE, Intel QSV, NVIDIA NVENC)
2. x264
3. VP8
4. x265
5. VP9

Kodierer nach Qualität vs. Dateigröße absteigend sortiert:

1. x265 and VP9
2. x264
3. Hardware encoders (AMD VCE, Intel QSV, NVIDIA NVENC)
4. VP8

Der x264 Software Kodierer stellt eine exzellente Balance zwischen Geschwindigkeit und Qualität dar und das H.264/AVC Video das erstellt wird ist mit einem Großteil moderner Geräte kompatibel. Er ist der Standard Videokodierer bei den meisten der offiziellen `Voreinstellungen` von HandBrake.

Hardware Kodierer wie zum Beispiel AMD VCE, Intel QSV und NVIDIA NVENC sind sehr schnell und sind die beste Wahl auf langsameren Computern wo die Performance im Vordergrund steht, und höchste Qualität und sehr kleine Dateien nicht so wichtig sind.

x265 und VP9 produzieren Videos mit exzellenter Qualität, brauchen dafür jedoch lange. Hier musst du, mit Ausnahme von sehr schnellen Computern, mit langen Zeiten rechnen.

VP8 ist bereits ein älterer Kodierer und das wird hier spürbar. Verglichen mit den anderen, moderneren Kodierern, kann VP8 nicht Videos mit guter Qualität erzeugen und die Dateigröße dabei auf einem vernünftigen Niveau behalten. Dies trifft auch auf die älteren MPEG-4, MPEG-2 und Theora Kodierer zu, welche in diesem Artikel nicht verglichen werden.

## Performancevergleich zwischen Videokodierer Voreinstellungen

Ein Teil von HandBrake's Videokodierer haben ihre eigenen Voreinstellungen. Diese unterscheiden sich von HandBrake's `Voreinstellungen`, welche alle Video, Filter, Audio, Untertitel, Kapitel und Container Einstellungen beinhalten. Die Videokodierer Voreinstellungen sind spezifisch für jeden individuellen Videokodierer und kontrollieren, welche Features von dem Videokodierer aktiviert sind.

Manche Kodierer Voreinstellungen sind so gestaltet, dass die Geschwindigkeit des Kodierungsprozesses beeinflusst wird. Die Aktivierung von bestimmten Optimierungen oder die Deaktivierung von bestimmten rechenintensiven Features des Kodierers hat eine Beschleunigung des Kodierungsprozesses zur Folge. Dies kann jedoch die resultierende Dateigröße und/oder die Qualität negativ beeinflussen. Alle x264 und x265 Kodierer Voreinstellungen beziehen sich auf die Geschwindigkeit.

Andere Kodierer, vor allem Hardware Kodierer wie AMD VCE, Intel QSV und NVIDIA NVENC, haben zudem Qualitätsbasierte Kodierer Voreinstellungen um fortgeschrittene Features zu aktivieren welche die Qualität verbessern; wiederum auf Kosten der Geschwindigkeit.

Hier haben wir dieselbe High Quality 2160p 4K Video `Quelle` zu 1080p mit den unterschiedlichen Geschwindigkeitsbasierten Kodierer Voreinstellungen des x264 Kodierers kodiert.


Die folgenden Resultate wurden mit einem PC mit einer Intel Xeon E5-2699 v4 CPU mit 22 Kernen und 44 Threads bei 2.6-2.8 GHz (konstanter Turbo), 32 GB Memory und Windows 10 Professional erzeugt.

| Kodierer     | Kodierer Voreinstellung | Qualität | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bit Rate | Gesamtgröße |
|--------------|----------------|---------|----------------|----------------|----------------|------------|
| H.264 (x264) | Ultrafast      | RF 24   | 73.1 FPS       | 3.05x          |  9.91 Mb/s     | 909.1 MB   |
| H.264 (x264) | Superfast      | RF 24   | 74.2 FPS       | 3.09x          |  4.99 Mb/s     | 457.8 MB   |
| H.264 (x264) | Veryfast       | RF 24   | 72.6 FPS       | 3.03x          |  3.26 Mb/s     | 299.5 MB   |
| H.264 (x264) | Faster         | RF 24   | 71.0 FPS       | 2.96x          |  3.78 Mb/s     | 346.8 MB   |
| H.264 (x264) | Fast           | RF 24   | 72.6 FPS       | 3.03x          |  3.98 Mb/s     | 365.8 MB   |
| H.264 (x264) | Medium         | RF 24   | 69.1 FPS       | 2.88x          |  3.86 Mb/s     | 354.1 MB   |
| H.264 (x264) | Slow           | RF 24   | 63.2 FPS       | 2.63x          |  3.75 Mb/s     | 343.9 MB   |
| H.264 (x264) | Slower         | RF 24   | 39.8 FPS       | 1.66x          |  3.76 Mb/s     | 345.5 MB   |
| H.264 (x264) | Veryslow       | RF 24   | 33.9 FPS       | 1.41x          |  3.50 Mb/s     | 321.0 MB   |

Selbst auf diesem sehr starken Rechner und mit einem schnellen Software Kodierer wie x264 benötigt der langsamste Prozess doppelt so lange wie der schnellste.

Allgemein wird durch die zusätzliche Arbeit von x264's langsameren Voreinstellungen die Größe der resultierenden Datei verringert und manchmal die Qualität geringfügig erhöht (üblicherweise vernachlässigbar). Da sich in der Praxis jedoch viele der Einstellungen der unterschiedlichen Voreinstellungen unterscheiden, ist dies nicht immer zutreffend. Wie in der Tabelle zu sehen ist, produziert die Veryfast Voreinstellung eine kleinere Datei als die Slower Voreinstellung auf Kosten der Qualität.

Beachte, dass obwohl die x264 Kodierer Voreinstellungen mit "Fast" im Namen auf diesem High Performance Computer nicht wirklich schneller werden, diese durchaus auf schwächeren Computern eine große Auswirkung haben können.

Schauen wir uns einmal denselben Test mit dem x265 Kodierer an.

| Kodierer     | Kodierer Voreinstellung | Qualität | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bitrate | Gesamtgröße |
|--------------|----------------|---------|----------------|----------------|----------------|------------|
| H.265 (x265) | Ultrafast      | RF 24   | 70.1 FPS       | 2.92x          |  2.63 Mb/s     | 241.8 MB   |
| H.265 (x265) | Superfast      | RF 24   | 68.2 FPS       | 2.84x          |  2.64 Mb/s     | 242.4 MB   |
| H.265 (x265) | Veryfast       | RF 24   | 56.9 FPS       | 2.37x          |  2.78 Mb/s     | 255.2 MB   |
| H.265 (x265) | Faster         | RF 24   | 56.6 FPS       | 2.36x          |  2.78 Mb/s     | 254.8 MB   |
| H.265 (x265) | Fast           | RF 24   | 51.2 FPS       | 2.13x          |  2.82 Mb/s     | 259.1 MB   |
| H.265 (x265) | Medium         | RF 24   | 33.8 FPS       | 1.41x          |  3.27 Mb/s     | 300.2 MB   |
| H.265 (x265) | Slow           | RF 24   | 14.1 FPS       | 0.59x          |  3.44 Mb/s     | 316.0 MB   |
| H.265 (x265) | Slower         | RF 24   |  3.2 FPS       | 0.13x          |  3.47 Mb/s     | 318.4 MB   |
| H.265 (x265) | Veryslow       | RF 24   |  1.8 FPS       | 0.08x          |  3.46 Mb/s     | 317.2 MB   |

Verglichen mit x264 ist der x265 Kodierer besser für CPUs mit einer hohen Kernanzahl wie dem E5-2699 v4 optimiert. Dies wird in den schnelleren Kodierer Voreinstellungen spürbar, welche fast gleich schnell sind wie bei x264 auf diesem Computer, obwohl der Prozess für H.265 Video rechenintensiver ist. Die signifikante Verarbeitungszeit die die langsameren Voreinstellungen von x265 mit sich ziehen, machen den Kodierungsprozess selbst auf sehr starken Rechnern extrem langsam und erhöhen sogar die Dateigröße in dem Versuch, die Qualität besser zu erhalten.

Die empfohlene Best Practice beim manuellen Anpassen der Einstellungen ist, die langsamste Voreinstellung auszuwählen, welche auf deinem Computer in akzeptabler Zeit fertig wird und dabei geringe Abstriche in der Qualität und Dateigröße in Kauf zu nehmen. Noch besser ist es, eine von HandBrake's allumfassenden `Voreinstellungen` zu verwenden, welche eine passende Kodierer Voreinstellung für dich auswählen und noch andere Einstellungen für den beabsichtigen Einsatzzweck treffen.

## Performancevergleich von Videoqualitätseinstellungen

Die Videoqualität kann eine bedeutende Auswirkung auf die Kodiergeschwindigkeit und die Dateigröße haben.

In diesem Test haben wir dieselbe 2160p 4K Video `Quelle` zu 1080p kodiert und dabei nur die Videoqualität geändert und alle anderen Einstellungen gleich gelassen.

Höhere RF Werte bedeuten eine niedriegere Bildqualität und kleinere Dateien, niedrigere RF Werte eine höhere Bildqualität und größere Dateien. Du kannst darüber mehr in dem [Qualität einstellen](../workflow/adjust-quality.html) Artikel lesen.

Die folgenden Resultate wurden mit einem Mitte-2010 Mac Pro mit einer Intel Xeon w3680 CPU mit 6 Kernen und 12 Threads bei 3.33 GHz, 24 GB Memory und macOS Mojave erzeugt.

| Kodierer     | Kodierer Voreinstellung | Qualität | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bitrate | Gesamtgröße |
|--------------|----------------|---------|----------------|----------------|----------------|------------|
| H.264 (x264) | Medium         | RF 36   | 30.9 FPS       | 1.29x          |  0.92 Mb/s     |   84.2 MB  |
| H.264 (x264) | Medium         | RF 33   | 29.3 FPS       | 1.22x          |  1.26 Mb/s     |  115.9 MB  |
| H.264 (x264) | Medium         | RF 30   | 27.8 FPS       | 1.16x          |  1.78 Mb/s     |  163.8 MB  |
| H.264 (x264) | Medium         | RF 27   | 26.0 FPS       | 1.08x          |  2.59 Mb/s     |  238.0 MB  |
| H.264 (x264) | Medium         | RF 24   | 25.5 FPS       | 1.06x          |  3.89 Mb/s     |  357.5 MB  |
| H.264 (x264) | Medium         | RF 21   | 22.4 FPS       | 0.93x          |  6.13 Mb/s     |  562.7 MB  |
| H.264 (x264) | Medium         | RF 18   | 19.7 FPS       | 0.82x          | 10.20 Mb/s     |  938.8 MB  |
| H.264 (x264) | Medium         | RF 15   | 17.1 FPS       | 0.71x          | 17.20 Mb/s     | 1578.6 MB  |

![Qualitätsvergleich von einem x264 Video zwischen RF 36 und RF 15 in Dreierschritten](../../../en/images/performance-quality-x264-1.3.0.png "Höhere RF Werte bedeuten eine niedriegere Bildqualität und kleinere Dateien, niedrigere RF Werte eine höhere Bildqualität und größere Dateien")

Hier sehen wir, dass Prozesse mit niedrigerer Qualität schneller fertig werden. Grundlegend ist es schneller feine Details zu verwerfen als sie beizubehalten. Demnach hat die Videoqualität einen großen Einfluss auf die Kodiergeschwindigkeit, die Kodierzeit und Dateigröße.

## Performancevergleich von Bildauflösungen

Die Videoauflösung kann ebenfalls eine bedeutende Auswirkung auf die Kodiergeschwindigkeit und die Dateigröße haben.

Die Auflösung eines Videos ist die Höhe und Breite des Videos in Pixel oder in individuellen Punkten auf einem Display. HandBrake inkludiert offizielle `Voreinstellungen` die mehrere Standardauflösungen für das `Ziel` definieren wie z.B. 2160p UHD 4K, 1080p Full HD, 720p HD und 576/480p SD und bestimmte Auflösungen dazwischen.

Die Auflösung wird in zwei Dimensionen berechnet (Höhe und Breite). Beispielsweise hat ein 1080p HD Video eine Breite von 1920 Pixel und eine Höhe von 1080p und wird manchmal geschrieben als 1920x1080. Indem diese Zahlen multipliziert werden, kann die Anzahl der Pixel eines einzelnen Bildes (Frames) berechnet werden. 1920 multipliziert mit 1080 ergibt 2.073.600 Pixel, oder circa 2 Megapixel.

Verglichen mit 480p Standard Definition Video (720x480), welches 345,600 Pixel oder circa 0,35 Megapixel pro Frame hat, ist 1080p circa sechs mal so detailliert. Dadurch kann abgeleitet werden, dass ein HD Blu-ray Video in seiner originalen Auflösung länger zum Kodieren brauchen wird und größere Dateien erzeugen wird, um all die extra Informationen (verglichen mit dem SD Video) zu speichern.

Hier haben wir dieselbe 2160p 4K Video `Quelle` in sechs verschiedenen Auflösungen mit der Medium Voreinstellung des x265 Codecs kodiert.

Die folgenden Resultate wurden mit einem PC mit einer Intel Xeon E5-2699 v4 CPU mit 22 Kernen und 44 Threads bei 2.6-2.8 GHz (durchgehend im Turbo), 32 GB Memory und Windows 10 Professional erzeugt.

| Kodierer     | Videoauflösung                | Megapixel  | Qualität | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bitrate | Gesamtgröße |
|--------------|-------------------------------|------------|---------|----------------|----------------|----------------|------------|
| H.265 (x265) | 3840x1714 (2160p 4K, cropped) | 6.58 MP    | RF 24   | 14.0 FPS       | 0.58x          | 10.00 Mb/s     | 920.7 MB   |
| H.265 (x265) | 2560x1440 (1440p 2.5K)        | 3.69 MP    | RF 24   | 22.7 FPS       | 0.95x          |  5.42 Mb/s     | 497.2 MB   |
| H.265 (x265) | 1920x1080 (1080p Full HD)     | 2.07 MP    | RF 24   | 33.7 FPS       | 1.40x          |  3.27 Mb/s     | 300.2 MB   |
| H.265 (x265) | 1280x720 (720p HD)            | 0.92 MP    | RF 24   | 49.3 FPS       | 2.05x          |  1.84 Mb/s     | 168.9 MB   |
| H.265 (x265) | 960x540 (540p ED)             | 0.52 MP    | RF 24   | 63.7 FPS       | 2.65x          |  1.19 Mb/s     | 109.3 MB   |
| H.265 (x265) | 720x480 (480p SD)             | 0.35 MP    | RF 24   | 74.9 FPS       | 3.12x          |  0.88 Mb/s     |  81.1 MB   |

![Vergleich von gebräuchlichen Videoauflösungen](../../../en/images/performance-resolution-1.3.0.png "Höhere Auflösungen behalten mehr Detail bei, brauchen jedoch länger und erzeugen größere Dateien.")

Die Kodierprozesse mit einer größeren Auflösung benötigen mehr Zeit und erzeugen größere Dateien. Die Kodierprozesse mit einer niedrigeren Auflösung sind schneller fertig und erzeugen kleinere Dateien, haben dafür allerdings auch eine geringere Qualität.

Es ist eine gute Idee die Qualität um 1-2 RF Punkte für Kodierprozesse mit niedrigerer Auflösung zu reduzieren, da kleinere Defekte in der Qualität offensichtlicher werden, wenn das Video auf einem großen Display abgespielt wird. Gleichermaßen benötigen Kodierprozesse mit einer höheren Auflösung üblicherweise nicht so höhe Qualitätseinstellungen, da auf modernen Displays nur eine minimale oder gar keine Skalierung notwendig ist. Du kannst hierüber mehr in dem [Qualität einstellen](../workflow/adjust-quality.html) Artikel lesen.

Abschließend ist zu sagen, dass die Auflösung deiner `Quelle` und die `Voreinstellung` die du auswählst, einen großen Einfluss auf die Dateigröße, Kodiergeschwindigkeit und Gesamtkodierzeit haben wird.

## Wie Filter die Kodierperformance beeinflussen

Manche Filter, wie zum Beispiels die Schärfefilter von HandBrake, benötigen nur geringe Rechenleistung und haben einen vernachlässigbaren Einfluss auf die Performance. Andere, wie zum Beispiel der EEDI2 Deinterlacing Filter oder der NLMeans Denoising Filter, sind rechenintensiver und können sogar langsamer als Videokodierer sein.

Hier haben wir dieselbe High Quality 2160p 4K Video `Quelle` in ihrer Originalauflösung mit und ohne dem NLMeans Denoising Filter kodiert.

Die folgenden Resultate wurden auf einem PC mit einer Intel Xeon E5-2699 v4 CPU mit 22 Kernen und 44 Threads bei 2.6-2.8 GHz (durchgehender Turbo), 32 GB Memory und Windows 10 Professional erzeugt.

| Offizielle Voreinstellung   | Zusätzliche Filter | Qualität | Audiospuren | Kodiergeschwindigkeit | Realtime Speed | Gesamte Bitrate | Gesamtgröße |
|-------------------|------------------|---------|--------------|----------------|----------------|----------------|------------|
| H.265 MKV 2160p60 | *keine*           | RF 24   | AAC stereo   | 7.9 FPS        | 0.33x          | 10.80 Mb/s     | 993.4 MB   |
| H.265 MKV 2160p60 | NLMeans Medium   | RF 24   | AAC stereo   | 5.3 FPS        | 0.22x          |  8.72 Mb/s     | 800.0 MB   |

Wie man der Tabelle entehmen kann, hat der NLMeans Filter selbst auf einem starken Rechner einen großen Einfluss auf die Verarbeitungszeit.

Trotzdem ist der NLMeans Filter ein großartiger Weg, um `Quellen` mit sichtbaren Visual Noise und Grain wiederherzustellen. Selbst bei einer ziemlich sauberen `Quelle` wie der hier verwendeten, reduziert die Noise Reduktion von NLMeans die Dateigröße um 19,5%, benötigt dafür aber 50% länger.

## Zusammenfassung der Faktoren die einen Einfluss auf die Kodierperformance haben

### Videokodierer, Kodierervoreinstellungen und Qualität

Die Einstellungen des Videokodierers haben einen großen Einfluss auf die Performance.

Verglichen mit x264 und Hardwarekodierer wie AMD VCE, Intel QSV und NVIDIA NVENC, benötigen langsamere Kodierer wie x265 und VP9 mehr Zeit.

Ein Großteil der verglichenen Kodierer haben Geschwindigkeitsvoreinstellungen. Schnellere Kodierervoreinstellungen haben eine bessere Performance wobei hier die Qualität und die Dateigröße darunter leiden kann.

Auch die allgemeine Qualitätseinstellung oder durchschnittliche Bitrate beeinflusst die Verarbeitungszeit. Eine höhere Qualität und Bitrate erhöht die Zeit signifikant.

Du kannst die Kodierperformance verbessern, indem du einen schnelleren Kodierer, eine schnellere Voreinstellung und eine niedrigere Qualität bzw. durchschnittliche Bitrate verwendest. Wenn die höchste Qualität und kleine Dateien nicht zwingend notwendig sind, können Hardware Kodierer eine gute Wahl auf langsameren Rechnern darstellen.

### Auflösung

Die Auflösung hat einen großen Einfluss auf die Performance.

Prozesse, die eine höhere Auflösung verwenden, benötigen länger und erzeugen größere Dateien. Zusätzlich wird im Vergleich zu schnellen, niedrig auflösenden Kodierprozessen, mehr Detail beibehalten.

### Filter

Manche Filter sind rechenintensiv und können ein Bottleneck für den Kodierprozess unabhängig von den Kodiereinstellungen darstellen. Dies trifft vor allem für den EEDI2 Deinterlacer und den NLMeans Denoiser zu. Andere Filter wie der Decomb Deinterlacer und der hqdn3d Denoiser sind viel schneller, können aber trotzdem noch ein Bottleneck darstellen, wenn Hardware Kodierer wie AMD VCE, Intel QSV und NVIDIA NVENC verwendet wird.

Aufgrund der weiten Verbreitung von interlaced Content, ist der Decomb Deinterlacer in allen offiziellen `Voreinstellungen` von HandBrake (ausgenommen den Production `Voreinstellungen`) aktiv. Zusätzlich aktiviert ist der Interlacing Detection Filter, welcher sicherstellt, dass nur interlaced frames deinterlaced werden und progressive frames unberührt bleiben. Diese Analyse könnte ein limitierender Factor für die Performance sein. Solltest du dir sicher sein, dass es in der `Quelle` keine interlaced frames gibt, kannst du diese Filter für einen kleinen Performanceboost deaktivieren.

### Audio

Audiokodierer haben allgemein weniger Arbeit als Videokodierer, ihr Einfluss ist daher im Vergleich zu Videoeinstellungen, Auflösung und Filter sehr gering. Trotzdem kann Audio einen Einfluss auf die Performance auf langsameren Rechnern haben und wenn mehrere Audiospuren verwendet werden.

### Andere Faktoren

Andere Features wie Untertitel, Kapitelmarkierungen und Containeroptionen haben einen vernachlässigbaren Einfluss auf die Performance.

Eine nennenswerte Ausnahme ist die Web Optimized Option für den MP4 Container. Dieser verschiebt Teile der Video-Metadaten vom Anfang an den Beginn der Datei. Dies ist hilfreich für das Streaming im Internet. Um das zu erreichen, muss nach dem Ende des Kodierprozesses die gesamte Datei neu geschrieben werden was auf langsameren Rechnern viel Zeit in Anspruch nehmen kann. CPU und Memory Speed kombiniert mit einem schnellen Speichermedium (wie zum Beispiel eine SSD) kann die dafür nötige Zeit minimieren.
