---
Type:            article
Title:           Abhängigkeiten für FreeBSD installieren
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

Abhängigkeiten für FreeBSD installieren
==================================

Die folgenden Anweisungen gelten für [FreeBSD](https://www.freebsd.org) 11 und 12.

Grundvoraussetzungen um Kommandos zu starten:

- sudo (für standard user accounts)

Abhängigkeiten:

- autoconf
- automake
- bash
- bzip2
- cmake
- flac
- fontconfig
- freetype2
- fribidi
- git
- gcc
- m4
- gmake
- patch
- gtar
- harfbuzz
- jansson
- lame (source port)
- libass
- libiconv
- libogg
- libsamplerate
- libtheora
- libtool
- libvorbis
- libvpx
- libx264
- libxml2
- lzma
- meson
- nasm
- ninja
- opus
- pkgconf
- python
- speex

Abhängigkeiten für die Grafische Benutzeroberfläche:

- atk
- cairo
- dbus
- dbus-glib
- desktop-file-utils
- gdk-pixbuf2
- gettext
- glib
- gnome3
- gstreamer1-plugins-gdkpixbuf
- gtk3
- intltool
- libdvdcss
- libnotify
- libvpx
- pango

Abhängigkeiten installieren:

    sudo pkg install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi git gcc lzma m4 gmake patch gtar harfbuzz jansson libass libiconv libogg libsamplerate libtheora libtool libvorbis libvpx libx264 libxml2 meson nasm ninja opus pkgconf python speex
 
Baue und installiere den `lame` Source Port.

    sudo portsnap fetch
    bash -c 'if [[ ! -e /usr/ports ]]; then sudo portsnap extract; fi'
    sudo portsnap update
    LASTDIR="`pwd`"
    cd /usr/ports/audio/lame
    sudo make install || sudo make reinstall
    cd "LASTDIR"

Um die GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) zu bauen, installiere folgende Abhängigkeiten.

    sudo pkg install atk cairo dbus dbus-glib desktop-file-utils gdk-pixbuf2 gettext glib gnome3 gstreamer1-plugins-gdkpixbuf gtk3 intltool libdvdcss libnotify libvpx pango

FreeBSD ist nun bereit HandBrake zu bauen. Siehe [HandBrake für FreeBSD bauen](build-bsd.html) für weitere Anweisungen.
