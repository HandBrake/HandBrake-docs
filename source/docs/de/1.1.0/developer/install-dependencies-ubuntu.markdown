---
Type:            article
Title:           Ubuntu Abhängigkeiten installieren
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

Ubuntu Abhängigkeiten installieren
=================================

Die folgenden Anweisungen sind für [Ubuntu](https://www.ubuntu.com) 18.04 LTS (Bionic Beaver), 16.04 LTS (Xenial Xerus), und Ubuntu 14.04 LTS (Trusty Tahr).

Grundvoraussetzung um Kommandos zu starten:

- sudo (für standard user accounts)

Abhängigkeiten:

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
- libmp3lame-dev
- libogg-dev
- libopus-dev
- libsamplerate-dev
- libtheora-dev
- libtool
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

Zusätzliche Ubuntu 18.04 LTS and 16.04 LTS Abhängigkeiten:

- libtool-bin

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

Zusätzliche Ubuntu 18.04 LTS Abhängigkeiten für die Grafische Benutzeroberfläche:

- gstreamer1.0-libav

Abhängigkeiten installieren:

    sudo apt-get update
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev libmp3lame-dev libogg-dev libopus-dev libsamplerate-dev libtheora-dev libtool libvorbis-dev libx264-dev libxml2-dev m4 make patch pkg-config python tar yasm zlib1g-dev

Falls du Ubuntu 18.04 LTS oder 16.04 LTS verwendest, installiere folgende zusätzliche Abhängigkeiten.

    sudo apt-get install libtool-bin

Um die GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) zu bauen, installiere folgende Abhängigkeiten:

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkitgtk-3.0-dev

Falls du Ubuntu 18.04 LTS verwendest, installiere folgende zusätzliche Abhängigkeiten für die Grafische Benutzeroberfläche.

    sudo apt-get install gstreamer1.0-libav

Ubuntu ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Anweisungen.
