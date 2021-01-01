---
Type:            article
Title:           Arch Abhängigkeiten Installieren
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

Installing dependencies on Arch
===============================

Die folgenden Instruktionen gelten für [Arch](https://www.archlinux.org) 2019.09.01.

Grundvorraussetzungen um Kommandos abzusetzen:

- sudo (für standard user accounts)

Abhängigkeiten:

- base-devel
- cmake
- flac
- fontconfig
- freetype2
- fribidi
- git
- harfbuzz
- jansson
- lame
- libass
- libbluray
- libogg
- libsamplerate
- libtheora
- libvorbis
- libvpx
- libxml2
- meson
- nasm
- ninja
- numactl
- opus
- python2
- speex
- x264
- xz

Abhängigkeiten für die grafische Oberfläche:

- dbus-glib
- gstreamer
- gst-libav
- gst-plugins-base
- intltool
- libgudev
- libnotify
- webkit2gtk

Intel Quick Sync Video Abhängigkeiten:

- libva
- libdrm

Installiere Abhängigkeiten:

    sudo pacman -S base-devel cmake flac fontconfig freetype2 fribidi git harfbuzz jansson lame libass libbluray libogg libsamplerate libtheora libvorbis libvpx libxml2 meson nasm ninja numactl opus python2 speex x264 xz

Um die grafische Benutzeroberfläche zu bauen, installiere zusätzlich die Abhängigkeiten. Hierfür ist der GNOME Desktop mit den zugehörigen Paketen Voraussetzung; z.B.: installiert mit `pacman -S xorg xorg-server && pacman -S gnome gnome-extra`:

    sudo pacman -S dbus-glib gstreamer gst-libav gst-plugins-base intltool libgudev libnotify webkit2gtk

Für die Intel Quick Video Sync Unterstützung, installiere die QSV Abhängigkeiten:

    sudo pacman -S libva libdrm

Arch ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Instruktionen.
