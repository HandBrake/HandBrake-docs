---
Type:            article
Title:           Installing dependencies on Void
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

Installing dependencies on Void
===============================

The following instructions are for [Void](https://voidlinux.org) 2020-02-15.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- bzip2-devel
- cmake
- fontconfig-devel
- freetype-devel
- fribidi-devel
- git
- gcc
- harfbuzz-devel
- jansson-devel
- lame-devel
- lbzip2
- libass-devel
- libflac-devel
- libjpeg-turbo
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

- dbus-glib-devel
- gettext-devel
- glib-devel
- gst-libav
- gst-plugins-base1-devel
- gstreamer1-devel
- intltool
- libgudev-devel
- libnotify-devel
- webkit2gtk-devel

Install dependencies.

    sudo xbps-install -S
    sudo xbps-install autoconf automake bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel git gcc harfbuzz-devel jansson-devel lame-devel lbzip2 libass-devel libflac-devel libjpeg-turbo liblzma-devel libnuma-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libvpx-devel libxml2-devel m4 make meson nasm ninja opus-devel patch pkg-config python3 speex-devel x264-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo xbps-install libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo xbps-install dbus-glib-devel gettext-devel glib-devel gst-libav gst-plugins-base1-devel gstreamer1-devel intltool libgudev-devel libnotify-devel webkit2gtk-devel

Void is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
