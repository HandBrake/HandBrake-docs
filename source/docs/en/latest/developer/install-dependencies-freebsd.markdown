---
Type:            article
Title:           Installing dependencies on FreeBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
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
- gcc
- git
- gmake
- gtar
- harfbuzz
- jansson
- lame (source port)
- libass
- libiconv
- libjpeg-turbo
- libogg
- libsamplerate
- libtheora
- libtool
- libvorbis
- libvpx
- libx264
- libxml2
- lzma
- m4
- meson
- nasm
- ninja
- opus
- patch
- pkgconf
- python
- speex

Intel Quick Sync Video dependencies (optional):

- intel-media-sdk

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

    sudo pkg install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi gcc git lzma gmake gtar harfbuzz jansson libass libiconv libjpeg-turbo libogg libsamplerate libtheora libtool libvorbis libvpx libx264 libxml2 m4 meson nasm ninja opus patch pkgconf python speex

Build and install the `lame` source port.

    sudo portsnap fetch
    bash -c 'if [[ ! -e /usr/ports ]]; then sudo portsnap extract; fi'
    sudo portsnap update
    LASTDIR="`pwd`"
    cd /usr/ports/audio/lame
    sudo make install || sudo make reinstall
    cd "$LASTDIR"

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo pkg install intel-media-sdk

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pkg install atk cairo dbus dbus-glib desktop-file-utils gdk-pixbuf2 gettext glib gnome3 gstreamer1-plugins-gdkpixbuf gtk3 intltool libdvdcss libnotify libvpx pango

FreeBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
