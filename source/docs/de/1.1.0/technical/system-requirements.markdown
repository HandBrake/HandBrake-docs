---
Type:            article
Title:           Systemanforderungen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Systemanforderungen
===================

## Hardware

Folgende Auflistung ist das Minimum an Hardware das HandBrake unterstützt. Es kann möglich sein, dass HandBrake auf älterer Hardware läuft, dies ist jedoch weder empfohlen noch unterstützt.

<!-- .system-linux -->

### Linux

- Prozessor: Intel Core 2 Duo, AMD Athlon X2, oder besser
- Freier Hauptspeicher:
  - 256 MB um SD(abbr: Standard Definition) Video zu transkodieren
  - 1 GB um HD(abbr: High Definition) Video zu transkodieren
  - 2 GB oder mehr um 4K Video zu transkodieren
- Bildschirmauflösung: mindestens 1024x768
- Festplattenspeicherplatz:
  - 50 MB für die HandBrake Applikation
  - 2 GB oder mehr um deine Videos zu verarbeiten und zu speichern

<!-- /.system-linux -->

<!-- .system-macos -->

### Mac

- Prozessor: Intel Core 2 Duo oder besser
  - 32-bit Intel Macs (2007 und frühere) können keine aktuelle 64-bit HandBrake Version starten
  - 2010 Modelle und neuere sind empfohlen, da ältere Macs oft ziemlich langsam in der Videoverarbeitung sind
- Freier Hauptspeicher:
  - 256 MB um SD(abbr: Standard Definition) Video zu transkodieren
  - 1 GB um HD(abbr: High Definition) Video zu transkodieren
  - 2 GB oder mehr um 4K Video zu transkodieren
- Bildschirmauflösung: mindestens 1024x768
- Festplattenspeicherplatz:
  - 50 MB für die HandBrake Applikation
  - 2 GB oder mehr um deine Videos zu verarbeiten und zu speichern

<!-- /.system-macos -->

<!-- .system-windows -->

### Windows

- Prozessor: Intel Core 2 Duo, AMD Athlon X2, oder besser
- Freier Hauptspeicher:
  - 256 MB um SD(abbr: Standard Definition) Video zu transkodieren
  - 1 GB um HD(abbr: High Definition) Video zu transkodieren
  - 2 GB oder mehr um 4K Video zu transkodieren
- Bildschirmauflösung: mindestens 1024x768 (höher falls du einen High-DPI Modus verwendest, über 96 DPI oder 100%)
- Festplattenspeicherplatz:
  - 50 MB für die HandBrake Applikation
  - 2 GB oder mehr um deine Videos zu verarbeiten und zu speichern

<!-- /.system-windows -->

HandBrake's QuickSync Feature ist nur auf Windows verfügbar. Experimenteller Linux Support ist verfügbar wenn der Quellcode mit `--enable-qsv` kompiliert wird. QuickSync benötigt mindestens einen Intel Core Prozessor der zweiten Generation (Sandy Bridge) mit integrierten Intel HD Graphics aktiviert.

## Software

<!-- .system-linux -->

### Linux

#### Ubuntu (Offizielles PPA)

Siehe [Wo bekomme ich HandBrake her](../get-handbrake/where-to-get-handbrake.html) für PPA Details.

#### Andere Linuxdistributionen

Für andere Linux Distributionen musst du den [Quellcode kompilieren](../developer/build-linux.html).

<!-- /.system-linux -->
<!-- .system-macos -->

### Mac

- OS X 10.7 Lion oder neuer
- [VLC](https://www.videolan.org/vlc/) ist empfohlen um MKV (Matroska) Mediendateien abzuspielen

<!-- /.system-macos -->
<!-- .system-windows -->

### Windows

- Windows 7 Service Pack 1 (64-bit) oder neuer
- Microsoft .NET Framework 4.6.1 oder neuer
- [VLC](https://www.videolan.org/vlc/) ist empfohlen um Mediadateien abzuspielen

<!-- /.system-windows -->
