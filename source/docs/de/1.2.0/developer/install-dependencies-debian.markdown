---
Type:            article
State:           [ obsolete ]
Title:           Debian Abhängigkeiten installieren
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

Debian Abhängigkeiten installieren
=================================

Die folgenden Anweisungen sind für [Debian](https://www.debian.org) 9.4 (Stretch) x86_64.

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
- m4
- make
- patch
- pkg-config
- python
- tar
- yasm
- zlib1g-dev

Zusätzliche Abhängigkeiten die nicht im Base Repository zu finden sind:

- nasm [Debian sid]

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
- libwebkitgtk-3.0-dev

Abhängigkeiten installieren:

    sudo apt-get update
	sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev m4 make patch pkg-config python tar yasm zlib1g-dev

Das `nasm` Paket von Debian 9 ist zu alt. Installiere eine neuere Version welche von Debian sid (unstable/development distribution) bereitgestellt wird[^nasm-sid].

    sudo curl -L 'http://ftp.debian.org/debian/pool/main/n/nasm/nasm_2.13.03-1_amd64.deb' -o /var/cache/apt/archives/nasm_2.13.03-1_amd64.deb
    sudo dpkg -i /var/cache/apt/archives/nasm_2.13.03-1_amd64.deb

Um die GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) zu bauen, installiere folgende abhängigkeiten.

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkitgtk-3.0-dev

Debian ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiter Anweisungen.

[^nasm-sid]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

