---
Type:            article
Title:           Installing dependencies on NetBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2020 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on NetBSD
=================================

The following instructions are for [NetBSD](https://www.netbsd.org/) 8.

Basic requirements to run commands:

- [pkgin](https://wiki.netbsd.org/pkgsrc/how_to_upgrade_packages/)
- [pkgsrc](https://www.netbsd.org/docs/pkgsrc/getting.html)
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
- lzma
- m4
- gmake
- patch
- gtar
- harfbuzz
- jansson
- lame
- libass
- libiconv
- libogg
- libopus
- libsamplerate
- libtheora
- libtool
- libvorbis
- libvpx
- libxml2
- meson
- nasm
- ninja
- pkgconf
- python37
- speex
- x264-devel (pkgsrc)

Graphical interface dependencies:

- atk
- cairo
- dbus
- dbus-glib
- desktop-file-utils
- gdk-pixbuf2
- gettext
- glib2
- glib2-tools
- gstreamer1
- gst-plugins1-base
- gst-plugins1-gdk_pixbuf
- gst-plugins1-libav
- gtk3+
- intltool
- libnotify
- libvpx
- pango

Install dependencies.

    sudo pkgin install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi git lzma m4 gmake patch gtar harfbuzz jansson lame libass libiconv libogg libopus libsamplerate libtheora libtool libvorbis libvpx libxml2 meson nasm ninja pkgconf python37 speex

Build and install `x264-devel` from [pkgsrc](https://www.netbsd.org/docs/software/packages.html).

    cd /usr/pkgsrc/multimedia/x264-devel
    sudo make install

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pkgin install atk cairo dbus dbus-glib desktop-file-utils gdk-pixbuf2 gettext glib2 glib2-tools gstreamer1 gst-plugins1-base gst-plugins1-gdk_pixbuf gst-plugins1-libav gtk3+ intltool libnotify libvpx pango

Ensure the newly installed packages have search path priority.

    export PATH="${LOCALBASE:-/usr/pkg}/bin:${PATH}"

NetBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
