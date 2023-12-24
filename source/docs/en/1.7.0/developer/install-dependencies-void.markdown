---
Type:            article
Title:           Installing dependencies on Void
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.7.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Void
===============================

The following instructions are for [Void](https://voidlinux.org) 2022-10-01.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- bzip2-devel
- cmake
- diffutils
- fontconfig-devel
- file
- findutils
- freetype-devel
- fribidi-devel
- git
- gcc
- gzip
- harfbuzz-devel
- jansson-devel
- lame-devel
- lbzip2
- libass-devel
- libflac-devel
- libjpeg-turbo-devel
- liblzma-devel
- libnuma-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libtool
- libvorbis-devel
- libvpx-devel
- libxml2-devel
- m4
- make
- meson
- nasm
- ninja
- opus-devel
- patch
- pkg-config
- python3
- speex-devel
- x264-devel

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Graphical interface dependencies:

- desktop-file-utils
- gettext
- glib-devel
- gst-libav
- gst-plugins-base1-devel
- gst-plugins-good1
- gtk+3-devel

Install dependencies.

    sudo xbps-install -Su
    sudo xbps-install -u autoconf automake bzip2-devel cmake diffutils fontconfig-devel file findutils freetype-devel fribidi-devel git gcc gzip harfbuzz-devel jansson-devel lame-devel lbzip2 libass-devel libflac-devel libjpeg-turbo-devel liblzma-devel libnuma-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libvpx-devel libxml2-devel m4 make meson nasm ninja opus-devel patch pkg-config python3 speex-devel x264-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo xbps-install -u libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo xbps-install -u desktop-file-utils gettext glib-devel gst-libav gst-plugins-base1-devel gst-plugins-good1 gtk+3-devel

Void is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
