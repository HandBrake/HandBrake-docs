---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on Debian
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

Installing dependencies on Debian
=================================

The following instructions are for [Debian](https://www.debian.org) 9.4 (Stretch) x86_64.

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
- m4
- make
- patch
- pkg-config
- python
- tar
- yasm
- zlib1g-dev

Additional dependencies not available in the base repository:

- nasm [Debian sid]

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
- libwebkitgtk-3.0-dev

Install dependencies.

    sudo apt-get update
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libogg-dev libopus-dev libsamplerate-dev libspeex-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev m4 make patch pkg-config python tar yasm zlib1g-dev

The `nasm` package provided by Debian 9 is too old. Install a newer version provided by Debian sid (unstable/development distribution)[^nasm-sid].

    sudo curl -L 'http://ftp.debian.org/debian/pool/main/n/nasm/nasm_2.13.03-1_amd64.deb' -o /var/cache/apt/archives/nasm_2.13.03-1_amd64.deb
    sudo dpkg -i /var/cache/apt/archives/nasm_2.13.03-1_amd64.deb

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkitgtk-3.0-dev

Debian is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^nasm-sid]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.
