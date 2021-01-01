---
Type:            article
Title:           Ubuntu Abhängigkeiten installieren
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

Ubuntu Abhängigkeiten installieren
=================================

Die folgenden Anweisungen gelten für [Ubuntu](https://www.ubuntu.com) 18.04 LTS (Bionic Beaver) bis 19.10 (Eoan Ermine).

Grundvoraussetzung um Kommandos zu starten:

- sudo (für standard user accounts)

Abhängigkeiten:

- autoconf
- automake
- autopoint
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
- nasm
- ninja-build
- patch
- pkg-config
- python
- tar
- zlib1g-dev

Zusätzliche Abhängigkeiten für Ubuntu 18.10 und neuer:

- meson

Zusätzliche Abhängigkeiten für Ubuntu 18.04 LTS:

- python3-pip
- meson (via pip3)

Abhängigkeiten für die Grafische Benutzeroberfläche:

- gstreamer1.0-libav
- intltool
- libappindicator-dev
- libdbus-glib-1-dev
- libglib2.0-dev
- libgstreamer1.0-dev
- libgstreamer-plugins-base1.0-dev
- libgtk-3-dev
- libgudev-1.0-dev
- libnotify-dev
- libwebkit2gtk-4.0-dev

Abhängigkeiten installieren:

    sudo apt-get install autoconf automake autopoint build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libnuma-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev libvpx-dev m4 make nasm ninja-build patch pkg-config python tar zlib1g-dev

Solltest du Ubuntu 18.10 oder neuer verwenden, installiere die dazugehörigen Abhängigkeiten:

   sudo apt-get install meson

Falls du Ubuntu 18.04 LTS verwendest, ist das `meson` Paket zu alt. Installiere eine neuere Version über den [Python Package Index](https://pypi.org/).

    sudo apt-get install python3-pip
    sudo pip3 install meson

Um die GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) zu bauen, installiere folgende Abhängigkeiten:

    sudo apt-get install gstreamer1.0-libav intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkit2gtk-4.0-dev

Für Intel Quick Sync Video Unterstützung, installiere die QSV Abhängigkeiten:

    sudo apt-get install libva-dev libdrm-dev

Ubuntu ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Anweisungen.
