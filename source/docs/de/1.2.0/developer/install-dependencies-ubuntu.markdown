---
Type:            article
State:           [ obsolete ]
Title:           Ubuntu Abhängigkeiten installieren
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

Ubuntu Abhängigkeiten installieren
=================================

Die folgenden Anweisungen sind für [Ubuntu](https://www.ubuntu.com) 18.04 LTS (Bionic Beaver).

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
- nasm
- patch
- pkg-config
- python
- tar
- yasm
- zlib1g-dev

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
- libwebkitgtk-3.0-dev

Abhängigkeiten installieren:

	sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev m4 make nasm patch pkg-config python tar yasm zlib1g-dev
 
Um die GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) zu bauen, installiere folgende Abhängigkeiten:

	sudo apt-get install gstreamer1.0-libav intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkitgtk-3.0-dev
 
Ubuntu ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Anweisungen.
