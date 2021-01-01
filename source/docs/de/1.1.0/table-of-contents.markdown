---
Type:            article
Title:           Inhaltsverzeichnis
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Inhaltsverzeichnis
=================

## Einführung

- [Quick Start](introduction/quick-start.html)
  *Lernen in ein paar Minuten dein erstes Video zu erstellen*
- [Über HandBrake](introduction/about.html)
  *Was ist HandBrake, was kann es, und was kann es nicht*


## HandBrake herunterladen

- [Wo kann ich HandBrake herunterladen](get-handbrake/where-to-get-handbrake.html)
  *Die offiziell unterstütze Version*
- [HandBrake herunterladen und installieren](get-handbrake/download-and-install.html)
  *Wie du HandBrake auf deinen Computer bringst*
- [Nach Updates suchen](get-handbrake/check-for-updates.html)
  *Bleib up-to-date mit den neuesten Features und Fehlerbehebungen*


## Videos erstellen

- [Öffnen einer Video Quelldatei](workflow/open-video-source.html)
  *Wie du deine Videos in HandBrake importierst*
- [Eine Voreinstellung auswählen](workflow/select-preset.html)
  *Zugeschnittene Einstellungen für sofortige Kompatibilität mit vielen Geräten*
- [Qualitätseinstellungen](workflow/adjust-quality.html)
  *Einfach die visuelle Qualität erhöhen oder Dateigrößen reduzieren*
- [Deine Einstellungen testen](workflow/preview-settings.html)
  *Sehe wie dein Video in einer kurzen Zeitspanne aussehen würde*
- [Kodierung starten](workflow/start-encoding.html)
  *Starte die Kodierung deines neuen Videos mit einem Klick*


## Fortgeschrittene Workflows

- [Die Warteschlange verwenden](advanced/queue.html)
  *Richte mehrere Kodierungsjobs auf einmal ein*
- [Punkt zu Punkt Kodierung](advanced/point-to-point.html)
- [Benutzerdefinierte Voreinstellungen](advanced/custom-presets.html)
- [Audio und Untertitel Standardeinstellungen](advanced/audio-subtitle-defaults.html)
- [Video Größenänderung](advanced/resizing-video.html)
- [Surround Sound beibehalten](advanced/surround-sound.html)
- [Untertitel hinzufügen](advanced/subtitles.html)
- [Kapitelmarkierungen hinzufügen](advanced/chapter-markers.html)

<!-- - [Managing Audio Tracks](advanced/managing-audio.html) -->
<!-- - [Post-processing metadata](advanced/post-processing.html) -->


<!-- ## Restoration and enhancement

- Common video problems
  - Cropping, Black bars at top/bottom or sides
  - Combing effects caused by interlacing or telecine
    - Detelecine filter
    - Decomb filter vs. Deinterlace filter
    - Bob mode and frame rates, motion
  - Noise (grainy appearance and/or color splotches)
    - Denoise filters: NLMeans and HQDN3D
  - Blocky picture
    - Deblock filter
  - Stretched picture (too wide or too tall)
    - Scaling and anamorphic
- Common audio problems
  - Volume level too low
  - Dynamics too wide (soft whispers, loud booms)
-->

<!-- ## Advanced workflows part 2

- [Understanding source types](advanced/video-sources.html)
- [Selecting a container format and encoders](advanced/containers.html)
- [Selecting a video angle](advanced/video-angles.html)
- [Working with frame rates](advanced/frame-rates.html)
- [Adjusting audio quality](advanced/audio-quality.html)
- [Progressive download support](advanced/web-optimised.html)
- [Compatibility with legacy devices](advanced/old-ipod-support.html)
- [Automatically naming files](advanced/automatic-file-naming.html)
-->

## Hilfe bekommen

- [Fehlerbehebung bekannter Probleme](help/troubleshooting-common-issues.html)
  *Was zu tun ist, falls etwas schiefläuft*
- [Community Support](help/community-support.html)
  *Bekomme Hilfe von realen Menschen*
- [Aktivitäten Logs](help/activity-log.html)
  *Aktivitäten Logs helfen dir, besseren Support zu erhalten*


## Mehr Informationen

- [Projekt Historie](about/history.html)
- [Mithelfen](contributing/contribute.html)
  *Wie du mithelfen kannst*

## Commandline Dokumentation

- [CLI Guide](cli/cli-guide.html)
- [Liste von CLI Optionen](cli/cli-options.html)

## Technische Dokumentation

- [Systemvoraussetzungen](technical/system-requirements.html)
  *Stelle sicher, dass auf deinem System HandBrake laufen kann*
- [Unterstützte Formate](technical/source-formats.html)
  *Arten von Videodateien die HandBrake lesen kann*
- [Offizielle Voreinstellungen](technical/official-presets.html)
  *Technische Zusammenfassung der offiziellen Voreinstellungen*
- Video
  - [Video Kodierer](technical/video-codecs.html)
  - [Video Kodierer Performance](technical/video-encoding-performance.html)
  - [Konstante Qualität versus durchschnittliche Bitrate](technical/video-cq-vs-abr.html)
  - [x264 Voreinstellungen und Anpassungen](technical/video-x264-presets-tunes.html)
  - [x264 Profile und Level](technical/video-x264-profiles-levels.html)
  - [Video Blickwinkel/Perspektiven](technical/video-angles.html)
  - [Anamorphisches Video](technical/anamorphic-guide.html)
  - [Modulus](technical/modulus.html)
  - [Framerate](technical/frame-rates.html)
  - [Intel QuickSync Video (QSV) Optionen](technical/video-qsv-options.html)
- Audio
  - [Dynamikumfang Komprimierung (DRC)](technical/dynamic-range-compression.html)
  - [Audio Qualität](technical/audio-quality.html)
- Dateien und Kompatibilität
  - [Container Formate](technical/containers.html)
  - [iPod 5. Generation Unterstützung](technical/old-ipod-support.html)
  - [Automatische Dateibenennung](technical/automatic-file-naming.html)
- Filter
  - [Filter Zusammenfassung](technical/filters-summary.html)

<!--
-  [Web optimized](advanced/web-optimised.html)
-  [Video source type](advanced/video-sources.html)
-  Advanced Filter Settings
-  Advanced preferences
-->

## Entwickler Dokumentation

- HandBrake bauen
  - [HandBrake für BSD bauen](developer/build-bsd.html)
    - Abhängigkeiten unter [FreeBSD](developer/install-dependencies-freebsd.html) installieren
  - [HandBrake für Linux bauen](developer/build-linux.html)
    - Abhängigkeiten für [Arch Linux](developer/install-dependencies-arch.html) / [CentOS](developer/install-dependencies-centos.html) / [Debian](developer/install-dependencies-debian.html) / [Fedora](developer/install-dependencies-fedora.html) / [Gentoo](developer/install-dependencies-gentoo.html) / [Ubuntu](developer/install-dependencies-ubuntu.html)
 installieren
  - [HandBrake für Mac bauen](developer/build-mac.html)
  - [HandBrake für Windows bauen](developer/build-windows.html)
- Packaging HandBrake
  - [Flatpak apps für Linux](developer/flatpak-repo.html)
    *Flatpak Applikationen kompatibel mit mehreren Linux distributionen*

<!-- TODO: link to contributing guide -->
