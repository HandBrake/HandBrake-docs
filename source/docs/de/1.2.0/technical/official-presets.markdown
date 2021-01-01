---
Type:            article
State:           [ obsolete ]
Title:           Offizielle Voreinstellungen
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

Offizielle Voreinstellungen
================

Eine `Voreinstellung` ist eine Reihe an Einstellungen, die speziell für die Software oder das Gerät abgestimmt sind, auf dem du das Video abspielen willst. Eine `Voreinstellung` auszuwählen kann dir dabei helfen, dein Video auf dem Zielgerät abspielbar zu machen.

HandBrake inkludiert einige offizielle `Voreinstellungen` die spezifische Einstellungen für die Kompatibilität mit bestimmten Geräten, dem Web und allgemeinen Gebrauch treffen. Wenn du eine dieser `Voreinstellungen` auswählst, werden Videos mit höherer Auflösung auf ein Maximum herunterskaliert, und höhere Framraten auf einen Spitzenwert limitiert. Audio und und andere Einstellungen werden teilweise auch `aufgezwungen`.

Hier sind ein paar Beispiele, wie `Voreinstellungen` in der Praxis funktionieren:

- Wenn du eine der 720p30 `Voreinstellungen` auswählst, wird eine Quelle mit 1080p Video und 60 FPS auf 720p herunterskaliert und die FPS auf 30 limitiert.
- Wenn du eine der 720p30 `Voreinstellungen` auswählst, wird eine Quelle mit 480p Video und 30 FPS nicht skaliert oder die FPS limitiert.
- Wenn du eine `Voreinstellung` auswählst die keinen Surround Sound inkludiert, wird nur Stereo Audio kodiert. Das Discrete Surround Audio wird verworfen.
- Wenn du eine `Voreinstellung` auswählst die Surround Sound inkludiert, wird Stereo Audio kodiert und Surround Sound wenn möglich durchgeleitet (oder in ein kompatibles Format kodiert)

Wähle eine `Voreinstellung` aus, und prüfe welche Einstellungen sich geändert haben. Diese Einstellungen werden zur Erstellung deines neuen Videos verwendet.

Die Standardvoreinstellung `Fast 1080p30` ist eine gute Wahl, wenn du gerade erst beginnst. Sie ist schnell und mit vielen verschiedenen Geräten und Software kompatibel.

## Generelle Voreinstellungen
HandBrake's Generelle `Voreinstellungen` verwenden den [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14) und sind gedacht, mit einer großen Menge an verschiedensten Geräten und Software kompatibel zu sein.[^high-quality-settings-less-compatible]

Jede Generelle `Voreinstellung` ist benannt nach der Qualität oder Geschwindigkeit, Maximale Auflösung und Maximale Framerate die es produziert.

| Voreinstellung            | Typ  | Video | Audio                            | Bildqualität    | Geschwindigkeit| Dateigröße |
|---------------------------|------|-------|----------------------------------|-----------------|----------------|----------------|
| Very Fast 1080p30         | MP4  | H.264 | AAC stereo                       | Durschnittlich  | Sehr schnell   | Klein          |
| Very Fast 720p30          | MP4  | H.264 | AAC stereo                       | Durschnittlich  | Sehr schnell   | Klein          |
| Very Fast 576p25          | MP4  | H.264 | AAC stereo                       | Durschnittlich  | Sehr schnell   | Klein          |
| Very Fast 480p30          | MP4  | H.264 | AAC stereo                       | Durschnittlich  | Sehr schnell   | Klein          |
| **Fast 1080p30**          | MP4  | H.264 | AAC stereo                       | Standard        | Schnell        | Durchschnittlich|
| Fast 720p30               | MP4  | H.264 | AAC stereo                       | Standard        | Schnell        | Durchschnittlich|
| Fast 576p25               | MP4  | H.264 | AAC stereo                       | Standard        | Schnell        | Durchschnittlich|
| Fast 480p30               | MP4  | H.264 | AAC stereo                       | Standard        | Schnell        | Durchschnittlich|
| HQ 1080p30 Surround       | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Hoch            | Langsam        | Groß          |
| HQ 720p30 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Hoch            | Langsam        | Groß          |
| HQ 576p25 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Hoch            | Langsam        | Groß          |
| HQ 480p30 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Hoch            | Langsam        | Groß          |
| Super HQ 1080p30 Surround | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Superhoch       | **Sehr Langsam**  | **Sehr Groß** |
| Super HQ 720p30 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Superhoch       | **Sehr Langsam**  | **Sehr Groß** |
| Super HQ 576p25 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Superhoch       | **Sehr Langsam**  | **Sehr Groß** |
| Super HQ 480p30 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Superhoch       | **Sehr Langsam**  | **Sehr Groß** |

## Web Voreinstellungen
HandBrake's Web `Voreinstellungen` verwenden den weit verbreiteten [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14) und sind für das Teilen von Videos im Internet angepasst.

Gmail `Voreinstellungen` sind designed um zu garantieren, dass ein Video mit einer bestimten maximalen Länge, eine Datei mit weniger als 25 [MB](abbr:Megabytes) erzeugt um für den Mailversand verwendet zu werden.[^email-size-limit] Die maximale Länge ist Teil des Namens der `Voreinstellung`. Audioqualität ist leicht reduziert und visuell verrauschte oder szenen mit viel bewegung könnten eine Reduktion in der Qualität aufweisen, um die angepeilte Dateigröße zu erreichen.

Vimeo Youtube `Voreinstellungen` erzeugen Videos, die sich für das uploaden auf Video Hosting Services eignen.[^video-hosting-services] `Voreinstellungen` die mit HQ markiert sind, sind designed um höhere Qualität zu liefern und trotzdem nicht viel Zeit zum Kodieren zu benötigen.

| Voreinstellung                | Typ  | Video | Audio      | Bildqualität   | Geschwindigkeit | Dateigröße     |
|-------------------------------|------|-------|------------|-------------------|----------------|---------------|
| Gmail Large 3 Minutes 720p30  | MP4  | H.264 | AAC stereo | hängt von der Quelle ab | Schnell | 25 MB oder weniger |
| Gmail Medium 5 Minutes 480p30 | MP4  | H.264 | AAC stereo | hängt von der Quelle ab | Schnell | 25 MB oder weniger |
| Gmail Small 10 Minutes 288p30 | MP4  | H.264 | AAC mono   | hängt von der Quelle ab | Schnell | 25 MB oder weniger |
| Vimeo YouTube HQ 2160p60 4K   | MP4  | H.264 | AAC stereo | Hoch              | Mittel         | Groß         |
| Vimeo YouTube HQ 1440p60 2.5K | MP4  | H.264 | AAC stereo | Hoch              | Mittel         | Groß         |
| Vimeo YouTube HQ 1080p60      | MP4  | H.264 | AAC stereo | Hoch              | Mittel         | Groß         |
| Vimeo YouTube HQ 720p60       | MP4  | H.264 | AAC stereo | Hoch              | Mittel         | Groß         |
| Vimeo YouTube 720p30          | MP4  | H.264 | AAC stereo | Standard          | Mittel         | Durschnittlich |

## Voreinstellungen für Geräte
HandBrake's `Voreinstellungen` für Gerate zielen auf bestimmte Geräte und Klassen von Geräten ab, wie zum Beispiel Handys, Tablets, TV Media Player und Spielekonsolen.

Die meisten der Geräte `Voreinstellungen` verwenden den weit verbreiteten [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14), und eine wenige den [Matroska Multimedia Container](https://en.wikipedia.org/wiki/Matroska) um erweiterte Features wie zum Beispiel [Ultra HD 4K resolution](https://en.wikipedia.org/wiki/4K_resolution) und zusätzliche Audiotypen, die mit den Geräten kompatibel sind, zu unterstützen.

Jede Geräte `Voreinstellung` ist benannte nach dem Gerät oder Klasse von Gerät, Maximaler Auflösung und maximaler Framerate die sie erzeugt.

| Voreinstellung                      | Typ     | Video     | Audio                            | Geschwindigkeit  |
|-------------------------------------|---------|-----------|----------------------------------|----------------|
| Android 1080p30                     | MP4     | H.264     | AAC stereo                       | Mittel         |
| Android 720p30                      | MP4     | H.264     | AAC stereo                       | Mittel         |
| Android 576p25                      | MP4     | H.264     | AAC stereo                       | Mittel         |
| Android 480p30                      | MP4     | H.264     | AAC stereo                       | Mittel         |
| Apple 2160p60 4K HEVC Surround      | MP4     | **H.265** | AAC stereo; Dolby Digital (AC-3) | **Sehr langsam**  |
| Apple 1080p60 Surround              | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Apple 1080p30 Surround              | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Apple 720p30 Surround               | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Apple 540p30 Surround               | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Apple 240p30                        | MP4     | H.264     | AAC stereo                       | Mittel         |
| Chromecast 2160p60 4K HEVC Surround | MP4     | **H.265** | AAC stereo; Dolby Digital (AC-3) | **Sehr langsam**  |
| Chromecast 1080p30 Surround         | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Fire TV 2160p60 4K HEVC Surround    | MP4     | **H.265** | AAC stereo; Dolby Digital (AC-3) | **Sehr langsam**  |
| Fire TV 1080p30 Surround            | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Playstation 1080p30 Surround        | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Playstation 720p30                  | MP4     | H.264     | AAC stereo                       | Mittel         |
| Playstation 540p30                  | MP4     | H.264     | AAC stereo                       | Mittel         |
| Roku 2160p60 4K HEVC Surround       | **MKV** | **H.265** | AAC stereo; AAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), DTS, or MP3 | **Sehr langsam** |
| Roku 1080p30 Surround               | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Roku 720p30 Surround                | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Roku 576p25                         | MP4     | H.264     | AAC stereo                       | Mittel         |
| Roku 480p30                         | MP4     | H.264     | AAC stereo                       | Mittel         |
| Windows Mobile 1080p30              | MP4     | H.264     | AAC stereo                       | Mittel         |
| Windows Mobile 720p30               | MP4     | H.264     | AAC stereo                       | Mittel         |
| Windows Mobile 540p30               | MP4     | H.264     | AAC stereo                       | Mittel         |
| Windows Mobile 480p30               | MP4     | H.264     | AAC stereo                       | Mittel         |
| Xbox 1080p30 Surround               | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |
| Xbox Legacy 1080p30 Surround        | MP4     | H.264     | AAC stereo; Dolby Digital (AC-3) | Mittel         |

## Matroska Voreinstellungen
HandBrake's Matroska `Voreinstellungen` sind für Software und Geräte gedacht, die den [Matroska Multimedia Container](https://en.wikipedia.org/wiki/Matroska) unterstützen. MKV Dateien unterstützen praktisch alle möglichen Video und Audio typen, inklusive vieler die der [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14) nicht unterstützt.

Jede Matroska `Voreinstellung` ist benannt nach dem Videotyp, Maximaler Auflösung und Maximaler Framerate die sie erzeugt.

| Voreinstellung    | Typ  | Video | Audio         | Geschwindigkeit |
|-------------------|------|-------|---------------|----------------|
| H.265 MKV 2160p60 | MKV  | H.265 | AAC stereo    | **Sehr langsam**  |
| H.265 MKV 1080p30 | MKV  | H.265 | AAC stereo    | **Sehr langsam**  |
| H.265 MKV 720p30  | MKV  | H.265 | AAC stereo    | **Sehr langsam**  |
| H.265 MKV 576p25  | MKV  | H.265 | AAC stereo    | **Sehr langsam**  |
| H.265 MKV 480p30  | MKV  | H.265 | AAC stereo    | **Sehr langsam**  |
| H.264 MKV 2160p60 | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 1080p30 | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 720p30  | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 576p25  | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 480p30  | MKV  | H.264 | AAC stereo    | Standard       |
| VP9 MKV 2160p60   | MKV  | VP9   | Opus stereo   | **Ultra langsam** |
| VP9 MKV 1080p30   | MKV  | VP9   | Opus stereo   | **Ultra langsam** |
| VP9 MKV 720p30    | MKV  | VP9   | Opus stereo   | **Ultra langsam** |
| VP9 MKV 576p25    | MKV  | VP9   | Opus stereo   | **Ultra langsam** |
| VP9 MKV 480p30    | MKV  | VP9   | Opus stereo   | **Ultra langsam** |
| VP8 MKV 1080p30   | MKV  | VP8   | Vorbis stereo | **Ultra langsam** |
| VP8 MKV 720p30    | MKV  | VP8   | Vorbis stereo | **Ultra langsam** |
| VP8 MKV 576p25    | MKV  | VP8   | Vorbis stereo | **Ultra langsam** |
| VP8 MKV 480p30    | MKV  | VP8   | Vorbis stereo | **Ultra langsam** |

## Production Voreinstellungen
HandBrake's Production `Voreinstellungen` erstellen Meistergrade, kurze GOP, konstante Frameraten videos mit einer hohen Bitrate, gedacht für professionelle Videobearbeitungs Workflows. Diese Voreinstellungen erstellen üblicherweise viel größere Dateien als die meisten komprimierten Quellen und sind nicht für den täglichen Gebrauch gedacht.

Production Proxy `Voreinstellungen` erstellen schnell zu kodierende, Intra-only Videos limitiert auf ein Viertel der gewünschten Bearbeitungsauflösung.

| Voreinstellung            | Typ  | Video | Audio      | Maximale Auflösung | Bildqualität | Frametypen | GOP Größe | Geschwindigkeit | Dateigröße |
|---------------------------|------|-------|------------|----------------|-----------------|-------------|----------|-------------------|-----------|
| Production Max            | MP4  | H.264 | AAC stereo | Unlimitiert      | Max Master      | I/P         | 1-12     | Hängt von Quelle ab | Gigantisch  |
| Production Standard       | MP4  | H.264 | AAC stereo | Unlimitiert      | Standard Master | I/P         | 1-12     | Hängt von Quelle ab | Riesig      |
| Production Proxy 1080p    | MP4  | H.264 | AAC stereo | 1/4 2160p 4K   | Proxy           | Intra-only  | 1        | Schnell              | Durchschnittlich   |
| Production Proxy 540p     | MP4  | H.264 | AAC stereo | 1/4 1080p HD   | Proxy           | Intra-only  | 1        | Sehr Schnell      | Klein     |

## Kompatible Ersatzvoreinstellungen für veraltete oder entfernte Voreinstellungen
Von Zeit zu Zeit kann es passieren, dass offizielle `Voreinstellungen` ausrangiert oder entfernt werden. Kompatible Ersatzvoreinstellungen werden hier aufgelistet.

### Legacy Voreinstellungen
| Voreinstellung      | Kompatible Voreinstellungen      | Notizen                                                                                                                                 |
|---------------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Normal              | General > Fast 1080p30           | Decomb filter, maximale Rate auf 30FPS limitiert, leicht verringerte Video Bitrate, verbesserte Bewegungsqualität, Suche nach fremdsprachiger Tonspur. |
| High Profile        | General > HQ 1080p30 Surround    | Maximal 30 FPS, verringerte Video Bitrate Obergrenzen, Suche nach fremdsprachiger Tonspur.                                              |
| Universal           | None                             | General > Fast 576p25/480p30 könnten passend sein, wenn Kompatibilität mit uralten Geräten und Surround Sound nicht benötigt werden.    |
| iPod                | Devices > Apple 240p30           | Decomb filter, Suche nach fremdsprachiger Tonspur.                                                                                      |
| iPhone & iPod touch | Devices > Apple 540p30 Surround  | Decomb filter, leicht erhöhte Video Bitrate, Surround Sound, Suche nach fremdsprachiger Tonspur.                                        |
| iPad                | Devices > Apple 720p30 Surround  | Decomb filter, leicht verringerte Video Bitrate, Surround sound, Suche nach fremdsprachiger Tonspur.                                    |
| AppleTV             | Devices > Apple 540p30 Surround  | Decomb filter, Suche nach fremdsprachiger Tonspur.                                                                                      |
| AppleTV 2           | Devices > Apple 720p30 Surround  | Decomb filter, leicht verringerte Video Bitrate, Suche nach fremdsprachiger Tonspur.                                                    |
| AppleTV 3           | Devices > Apple 1080p30 Surround | Decomb filter, leicht verringerte Video Bitrate, Suche nach fremdsprachiger Tonspur.                                                    |
| Android             | Devices > Android 576p25/480p30  | Decomb filter, maximale Rate auf 25 FPS limitiert (nur Android 576p25), leicht erhöhte Video Bitrate, Suche nach fremdsprachiger Tonspur, Kapitelmarkierungen.  |
| Android Tablet      | Devices > Android 720p30         | Decomb filter, leicht erhöhte Video Bitrate, Suche nach fremdsprachiger Tonspur, Kapitelmarkierungen.                                   |
| Windows Phone 8     | None                             | Devices > Windows Mobile 720p30 könnte passend sein mit Anamorphic deaktiviert und Audio Bitrate auf 128 kbps reduziert.                |

[^high-quality-settings-less-compatible]: Generelle `Voreinstellungen` mit einer höheren Qualität könnten Einstellungen inkludieren die mit alten oder langsamen Geräten inkompatibel sind.

[^email-size-limit]: Die 25 [MB](abbr:megabytes) pro Nachricht Größenbeschränkung ist spezifisch für den [Gmail](https://www.google.com/gmail/) Service und kann in der Zukunft geändert werden. Andere Email Services könnten andere Limits setzen. Es ist generell empfohlen, einen [file hosting service](https://en.wikipedia.org/wiki/Comparison_of_file_hosting_services) zu verwenden, wenn große oder lange Videos geteilt werden.

[^video-hosting-services]: Die [Vimeo](https://vimeo.com/) [YouTube](https://www.youtube.com/) Voreinstellungen sind designed und getestet um die Vorgaben dieser beiden Services einzuhalten. Kompatibilität mit anderen Services ist möglich aber weder getestet noch garantiert.
