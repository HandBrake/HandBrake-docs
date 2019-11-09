---
Type:            article
Title:           Installing dependencies on FreeBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on FreeBSD
==================================

The following instructions are for [FreeBSD](https://www.freebsd.org) 11 and 12.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

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

Graphical interface dependencies:

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

Install dependencies.

    sudo pkg install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi git gcc lzma m4 gmake patch gtar harfbuzz jansson libass libiconv libogg libsamplerate libtheora libtool libvorbis libvpx libx264 libxml2 meson nasm ninja opus pkgconf python speex

Build and install the `lame` source port.

    sudo portsnap fetch
    bash -c 'if [[ ! -e /usr/ports ]]; then sudo portsnap extract; fi'
    sudo portsnap update
    LASTDIR="`pwd`"
    cd /usr/ports/audio/lame
    sudo make install || sudo make reinstall
    cd "$LASTDIR"

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pkg install atk cairo dbus dbus-glib desktop-file-utils gdk-pixbuf2 gettext glib gnome3 gstreamer1-plugins-gdkpixbuf gtk3 intltool libdvdcss libnotify libvpx pango

FreeBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
