---
Type:            article
Title:           Installing dependencies on NetBSD
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

Installing dependencies on NetBSD
=================================

The following instructions are for [NetBSD](https://www.netbsd.org/) 8 and 9.

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
- gmake
- gtar-base
- harfbuzz
- jansson
- lame
- libass
- libiconv
- libjpeg-turbo
- libogg
- libopus
- libsamplerate
- libtheora
- libtool-base
- libvorbis
- libvpx
- libxml2
- lzmalib
- m4
- meson
- nasm
- ninja-build
- patch
- pkgconf
- python37
- speex
- x264-devel

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
- gst-plugins1-base
- gst-plugins1-gdk_pixbuf
- gst-plugins1-libav
- gstreamer1
- gtk3+
- intltool
- libnotify
- libvpx
- pango

Install dependencies.

    sudo pkgin install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi git gmake gtar-base harfbuzz jansson lame libass libiconv libjpeg-turbo libogg libopus libsamplerate libtheora libtool-base libvorbis libvpx libxml2 lzmalib m4 meson nasm ninja-build patch pkgconf python37 speex x264-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pkgin install atk cairo dbus dbus-glib desktop-file-utils gdk-pixbuf2 gettext glib2 glib2-tools gst-plugins1-base gst-plugins1-gdk_pixbuf gst-plugins1-libav gstreamer1 gtk3+ intltool libnotify libvpx pango

Ensure the newly installed packages have search path priority.

    export PATH="${LOCALBASE:-/usr/pkg}/bin:${PATH}"

NetBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
