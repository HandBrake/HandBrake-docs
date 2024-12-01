---
Type:            article
Title:           Installing dependencies on OpenBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.9.0
Language:        English
Language_Code:   en
Authors:         [ Brad Smith <brad@comstyle.com> (brad0) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on OpenBSD
==================================

The following instructions are for [OpenBSD](https://www.openbsd.org/) 7.4.

Basic requirements to run commands:

- doas (for normal user accounts)

Dependencies:

- autoconf-2.71
- automake-1.16.5
- bzip2
- cmake
- flac
- fribidi
- git
- gmake
- gtar
- harfbuzz
- jansson
- jpeg
- lame
- libass
- libiconv
- libogg
- libsamplerate
- libtheora
- libtool
- libvorbis
- libvpx
- libxml
- m4
- meson
- nasm
- ninja
- opus
- pkgconf
- python3
- speex
- x264
- xz

Graphical interface dependencies:

- desktop-file-utils
- gettext-tools
- gstreamer1-plugins-good
- gstreamer1-plugins-libav
- gtk+3

Install dependencies.

    doas pkg_add autoconf-2.71 automake-1.16.5 bzip2 cmake flac fribidi git gmake gtar-- harfbuzz jansson jpeg lame libass libiconv libogg libsamplerate libtheora libtool libvorbis libvpx libxml m4 meson nasm ninja opus pkgconf python3 speex x264 xz

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    doas pkg_add desktop-file-utils gettext-tools gstreamer1-plugins-good gstreamer1-plugins-libav gtk+3

OpenBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
