---
Type:            article
Title:           Installing dependencies on NetBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.8.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2024 HandBrake Team
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
- libogg
- libopus
- libsamplerate
- libtheora
- libtool-base
- libvorbis
- libvpx
- libxml2
- m4
- meson
- nasm
- ninja-build
- patch
- pkgconf
- speex
- x264
- xz

Graphical interface dependencies:

- desktop-file-utils
- gettext
- glib2-tools
- gnome-themes-standard
- gst-plugins1-gdk_pixbuf
- gst-plugins1-libav
- gstreamer1
- gtk4+

Install dependencies.

    sudo pkgin in autoconf automake cmake flac fontconfig freetype2 fribidi git gmake gtar-base harfbuzz jansson lame libass libiconv libogg libopus libsamplerate libtheora libtool-base libvorbis libvpx libxml2 m4 meson nasm ninja-build patch pkgconf speex x264 xz

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pkgin in desktop-file-utils gettext glib2-tools gnome-themes-standard gst-plugins1-gdk_pixbuf gst-plugins1-libav gstreamer1 gtk4+

Ensure the newly installed packages have search path priority.

    export PATH="${LOCALBASE:-/usr/pkg}/bin:${PATH}"

NetBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
