---
Type:            article
Title:           Systemanforderungen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
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

- Prozessor: Intel Core i3, AMD FX / 2014+ APU oder besser
- Freier Hauptspeicher:
  - 512 MB um SD(abbr: Standard Definition) Video zu transkodieren
  - 1,5 GB um HD(abbr: High Definition) Video zu transkodieren
  - 4 GB oder mehr um 4K Video zu transkodieren
- Bildschirmauflösung: mindestens 1024x768
- Festplattenspeicherplatz:
  - 100 MB für die HandBrake Applikation
  - 2 GB oder mehr um deine Videos zu verarbeiten und zu speichern

<!-- /.system-linux -->

<!-- .system-macos -->

### Mac

- Prozessor: Intel Core i3 oder besser
  - 2012 Modelle und neuere sind empfohlen, da ältere Macs oft ziemlich langsam in der Videoverarbeitung sind
- Freier Hauptspeicher:
  - 512 MB um SD(abbr: Standard Definition) Video zu transkodieren
  - 1,5 GB um HD(abbr: High Definition) Video zu transkodieren
  - 4 GB oder mehr um 4K Video zu transkodieren
- Bildschirmauflösung: mindestens 1024x768
- Festplattenspeicherplatz:
  - 100 MB für die HandBrake Applikation
  - 2 GB oder mehr um deine Videos zu verarbeiten und zu speichern

<!-- /.system-macos -->

<!-- .system-windows -->

### Windows

- Prozessor: Intel Core i3, AMD FX / 2014+ APU oder besser
- Freier Hauptspeicher:
  - 512 MB um SD(abbr: Standard Definition) Video zu transkodieren
  - 1,5 GB um HD(abbr: High Definition) Video zu transkodieren
  - 4 GB oder mehr um 4K Video zu transkodieren
- Bildschirmauflösung: mindestens 1024x768 (höher falls du einen High-DPI Modus verwendest, über 96 DPI oder 100%)
- Festplattenspeicherplatz:
  - 50 MB für die HandBrake Applikation
  - 2 GB oder mehr um deine Videos zu verarbeiten und zu speichern

<!-- /.system-windows -->

## Hardware Kodierer

Bitte lese den jeweiligen Dokumentationsartikel für die Kodierer für mehr Details:

- [AMD VCE](video-vce.html)
- [Apple VideoToolbox](video-videotoolbox.html)
- [Intel Quick Sync Video](video-qsv.html)
- [NVIDIA NVENC](video-nvenc.html)

## Software
Folgende Auflistung beschreibt die Unterstützung der aktuellen HandBrake Version für verschiedene Systeme.

| Status      | Beschreibung                                                                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Unterstützt   | HandBrake wurde auf diesen Systemversionen erfolgreich getestet. Das HandBrake Team und Communitymitglieder bieten freiwillig Unterstützung. Zudem sind Problemberichte willkommen. |
| Veraltet  | HandBrake kann auf diesen Systemversionen laufen. Unterstützung ist kurz vorm auslaufen. Eingeschränkte Funktionalität und andere Probleme werden wahrscheinlich nicht beachtet.  |
| Nicht unterstützt | HandBrake funktioniert auf diesen Systemversionen nicht. Es wird keine Unterstützung geboten. Bitte aktualisiere deine Software um von den neuesten Features und Bugfixes zu profitieren.  |

<!-- .system-linux -->

### Linux und BSD

#### Ubuntu (Offizielles PPA)

- Neuere Ubuntu LTS Versionen werden üblicherweise unterstützt
- HandBrake wird üblicherweise für nicht-LTS Versionen bis zum Lebensende der Version mit Updates versorgt
- Besuche [Wo bekomme ich HandBrake her](../get-handbrake/where-to-get-handbrake.html) für mehr Informationen über das PPA

| Ubuntu Version     | Status              | Letzte Kompatible Version |
|--------------------|---------------------|---------------------------|
| 19.04 LTS Disco    | Unterstützt         |                           |
| 18.04 LTS Bionic   | Nicht Unterstützt   | Verwende Flatpak für 1.30 |
| 16.04 LTS Xenial   | Nicht Unterstützt   | HandBrake 1.1.2           |
| 14.04 LTS Trusty   | Nicht Unterstützt   | HandBrake 1.1.2           |

#### Flatpak

Benötigt eine aktuelle Linux Distribution und das `flatpak` Paket.

Der Download ist auf unserer Website und im [FlatHub](https://flathub.org/apps/details/fr.handbrake.ghb) verfügbar.

#### Andere Distributionen

Für andere Distributionen musst du mithilfe der verlinkten Artikel den [Linux](../developer/build-linux.html) bzw. den [BSD](../developer/build-bsd.html) Quellcode kompilieren.

<!-- /.system-linux -->
<!-- .system-macos -->

### Mac

- macOS 10.11 Yosemite und neuer
- [VLC](https://www.videolan.org/vlc/) ist empfohlen um MKV (Matroska) Mediendateien abzuspielen

| macOS Version      | Status              | Letzte Kompatible Version | Notizen                             |
|--------------------|---------------------|---------------------------|-------------------------------------|
| 10.14 Catalina     | Unterstützt         |                           | Benötigt HandBrake 1.2.2 oder neuer.|
| 10.14 Mojave       | Unterstützt         |                           | Benötigt HandBrake 1.1.2 oder neuer.|
| 10.13 High Sierra  | Veraltet seit 1.3.0 |                           |                                     |
| 10.12 Sierra       | Veraltet seit 1.3.0 |                           |                                     |
| 10.11 El Capitan   | Veraltet seit 1.2.0 |                           |                                     |
| 10.10 Yosemite     | Nicht unterstützt   | HandBrake 1.1.2           |                                     |
| 10.9 Mavericks     | Nicht unterstützt   | HandBrake 1.1.2           |                                     |
| 10.8 Mountain Lion | Nicht unterstützt   | HandBrake 1.1.2           |                                     |
| 10.7 Lion          | Nicht unterstützt   | HandBrake 1.1.2           |                                     |
| 10.6 Snow Leopard  | Nicht unterstützt   | HandBrake 0.10.5          |                                     |


<!-- /.system-macos -->
<!-- .system-windows -->

### Windows

- Windows 7 Service Pack 1 (64-bit) oder neuer
- Microsoft .NET Framework 4.8 oder neuer
- [VLC](https://www.videolan.org/vlc/) ist empfohlen um Mediadateien abzuspielen

| Windows Version | Status              | Letzte Kompatible Version |
|-----------------|---------------------|---------------------------|
| Windows 10      | Unterstützt         |                           |
| Windows 8.1     | Unterstützt         |                           |
| Windows 7 SP1   | Veraltet seit 1.1.0 |                           |
| Windows Vista   | Nicht unterstützt   | HandBrake 1.0.7           |
| Windows XP      | Nicht unterstützt   | HandBrake 0.9.9           |

<!-- /.system-windows -->
