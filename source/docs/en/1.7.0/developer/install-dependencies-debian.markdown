---
Type:            article
Title:           Installing dependencies on Debian
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.7.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Debian
=================================

The following instructions are for [Debian](https://www.debian.org) 11 Bullseye and 12 Bookworm.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- build-essential
- cmake
- git
- libass-dev
- libbz2-dev
- libfontconfig-dev
- libfreetype6-dev
- libfribidi-dev
- libharfbuzz-dev
- libjansson-dev
- liblzma-dev
- libmp3lame-dev
- libnuma-dev
- libogg-dev
- libopus-dev
- libsamplerate0-dev
- libspeex-dev
- libtheora-dev
- libtool
- libtool-bin
- libturbojpeg0-dev
- libvorbis-dev
- libx264-dev
- libxml2-dev
- libvpx-dev
- m4
- make
- meson
- nasm
- ninja-build
- patch
- pkg-config
- python3
- tar
- zlib1g-dev

Intel Quick Sync Video dependencies (optional):

- libva-dev
- libdrm-dev

Graphical interface dependencies:

- appstream
- desktop-file-utils
- gettext
- gstreamer1.0-libav
- gstreamer1.0-plugins-good
- libgstreamer-plugins-base1.0-dev
- libgtk-3-dev

Install dependencies.

    sudo apt-get update
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libnuma-dev libogg-dev libopus-dev libsamplerate0-dev libspeex-dev libtheora-dev libtool libtool-bin libturbojpeg0-dev libvorbis-dev libx264-dev libxml2-dev libvpx-dev m4 make meson nasm ninja-build patch python3 pkg-config tar zlib1g-dev

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo apt-get install libva-dev libdrm-dev

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apt-get install appstream desktop-file-utils gettext gstreamer1.0-libav gstreamer1.0-plugins-good libgstreamer-plugins-base1.0-dev libgtk-3-dev

Debian is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
