---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on FreeBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on FreeBSD
==================================

The following instructions are for [FreeBSD](https://www.freebsd.org) 11.1 x86_64.

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
- libx264
- libxml2
- lzma
- nasm
- opus
- pkgconf
- python
- speex
- yasm

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

    sudo pkg install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi git gcc lzma m4 gmake patch gtar harfbuzz jansson libass libiconv libogg libsamplerate libtheora libtool libvorbis libx264 libxml2 nasm opus pkgconf python speex yasm

Build and install the `lame` source port.

    sudo portsnap fetch
    bash -c 'if [[ ! -e /usr/ports ]]; then sudo portsnap extract; fi'
    sudo portsnap update
    LASTDIR="`pwd`"
    cd /usr/ports/audio/lame
    sudo make install
    cd "LASTDIR"

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pkg install atk cairo dbus dbus-glib desktop-file-utils gdk-pixbuf2 gettext glib gnome3 gstreamer1-plugins-gdkpixbuf gtk3 intltool libdvdcss libnotify libvpx pango

FreeBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
