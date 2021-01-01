---
Type:            article
Title:           Debian Abhängigkeiten installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Debian Abhängigkeiten installieren
=================================

Die folgenden Anweisungen gelten für [Debian](https://www.debian.org) 9.12 Stretch bis 10.3 Buster.

Grundvoraussetzung um Kommandos zu starten:

- curl
- sudo (für standard benutzer accounts)

Abhängigkeiten

- autoconf
- automake
- build-essential
- cmake
- git
- libass-dev
- libbz2-dev
- libfontconfig1-dev
- libfreetype6-dev
- libfribidi-dev
- libharfbuzz-dev
- libjansson-dev
- liblzma-dev
- libmp3lame-dev
- libnuma-dev
- libogg-dev
- libopus-dev
- libsamplerate-dev
- libspeex-dev
- libtheora-dev
- libtool
- libtool-bin
- libvorbis-dev
- libx264-dev
- libxml2-dev
- libvpx-dev
- m4
- make
- ninja-build
- patch
- pkg-config
- python
- tar
- zlib1g-dev

Zusätzliche Debian 10 Abhängigkeiten:

- meson
- nasm

Zusätzliche Debian 9 Abhängigkeiten die nicht im Base Repository zu finden sind:

- meson [backports]
- nasm [buster]

Abhängigkeiten für die Grafische Benutzeroberfläche:

- intltool
- libappindicator-dev
- libdbus-glib-1-dev
- libglib2.0-dev
- libgstreamer1.0-dev
- libgstreamer-plugins-base1.0-dev
- libgtk-3-dev
- libgudev-1.0-dev
- libnotify-dev
- libwebkit2gtk-4.0-dev (libwebkitgtk-3.0-dev für Debian 9)

Intel Quick Sync Video Abhängigkeiten (optional):

- libva-dev
- libdrm-dev

Abhängigkeiten installieren:

    sudo apt-get update
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libnuma-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev libvpx-dev m4 make ninja-build patch pkg-config python tar zlib1g-dev

Solltest du Debian 10 verwenden, installiere die zusätzlichen Abhängigkeiten dafür:

    sudo apt-get install meson nasm

Falls du Debian 9 verwendest, ist das `meson` Paket zu alt. Installiere eine neuere Version welche von Backports Repository bereitgestellt wird.

    sudo add-apt-repository -s 'deb http://deb.debian.org/debian stretch-backports main'
    sudo apt-get update
    sudo apt-get -t stretch-backports install meson

Falls du Debian 9 verwendest, ist das `nasm` Paket zu alt. Installiere eine neuere Version welche von Buster (Debian 10) Repository bereitgestellt wird[^nasm-newer].

    sudo curl -L 'http://ftp.debian.org/debian/pool/main/n/nasm/nasm_2.14.02-1_amd64.deb' -o /var/cache/apt/archives/nasm_2.14.02-1_amd64.deb
    sudo dpkg -i /var/cache/apt/archives/nasm_2.14.02-1_amd64.deb

Um die GTK [GUI](abbr:Grafische Benutzeroberfläche) zu bauen, installiere folgende abhängigkeiten.

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev
    sudo apt-get install libwebkit2gtk-4.0-dev || sudo apt-get install libwebkitgtk-3.0-dev

Für Intel Quick Sync Video Unterstützung, installiere die QSV Abhängigkeiten.

    sudo apt-get install libva-dev libdrm-dev
 
Debian ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiter Anweisungen.

[^nasm-newer]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

