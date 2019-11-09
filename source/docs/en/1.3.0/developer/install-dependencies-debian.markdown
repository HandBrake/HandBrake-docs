---
Type:            article
Title:           Installing dependencies on Debian
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

Installing dependencies on Debian
=================================

The following instructions are for [Debian](https://www.debian.org) 9.11 Stretch through 10.1 Buster.

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
- libfontconfig1-dev
- libfreetype6-dev
- libfribidi-dev
- libharfbuzz-dev
- libjansson-dev
- liblzma-dev
- libmp3lame-dev
- libnuma-dev
- libogg-dev
- libopus-dev
- libsamplerate-dev
- libspeex-dev
- libtheora-dev
- libtool
- libtool-bin
- libvorbis-dev
- libx264-dev
- libxml2-dev
- libvpx-dev
- m4
- make
- ninja-build
- patch
- pkg-config
- python
- tar
- zlib1g-dev

Additional Debian 10 dependencies:

- meson
- nasm

Additional Debian 9 dependencies not available in the base repository:

- meson [backports]
- nasm [sid]

Graphical interface dependencies:

- intltool
- libappindicator-dev
- libdbus-glib-1-dev
- libglib2.0-dev
- libgstreamer1.0-dev
- libgstreamer-plugins-base1.0-dev
- libgtk-3-dev
- libgudev-1.0-dev
- libnotify-dev
- libwebkit2gtk-4.0-dev (libwebkitgtk-3.0-dev for Debian 9)

Intel Quick Sync Video dependencies (optional):

- libva-dev
- libdrm-dev

Install dependencies.

    sudo apt-get update
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libnuma-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev libvpx-dev m4 make ninja-build patch pkg-config python tar zlib1g-dev

If you are running Debian 10, install the additional dependencies.

    sudo apt-get install meson nasm

If you are running Debian 9, the `meson` package is too old. Install a newer version provided by the backports repository.

    sudo add-apt-repository -s 'deb http://deb.debian.org/debian stretch-backports main'
    sudo apt-get update
    sudo apt-get -t stretch-backports install meson

If you are running Debian 9, the `nasm` package is too old. Install a newer version provided by Debian sid (unstable/development distribution)[^nasm-sid].

    sudo curl -L 'http://ftp.debian.org/debian/pool/main/n/nasm/nasm_2.13.03-1_amd64.deb' -o /var/cache/apt/archives/nasm_2.13.03-1_amd64.deb
    sudo dpkg -i /var/cache/apt/archives/nasm_2.13.03-1_amd64.deb

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev
    sudo apt-get install libwebkit2gtk-4.0-dev || sudo apt-get install libwebkitgtk-3.0-dev

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo apt-get install libva-dev libdrm-dev

Debian is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^nasm-sid]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.
