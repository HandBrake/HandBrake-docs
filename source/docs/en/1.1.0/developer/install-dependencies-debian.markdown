---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on Debian
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
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

The following instructions are for [Debian](https://www.debian.org) 9.3 (Stretch).

Basic requirements to run commands:

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
- libmp3lame-dev
- libogg-dev
- libopus-dev
- libsamplerate-dev
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
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev libmp3lame-dev libogg-dev libopus-dev libsamplerate-dev libtheora-dev libtool libtool-bin libvorbis-dev libx264-dev libxml2-dev m4 make patch pkg-config python tar yasm zlib1g-dev

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkitgtk-3.0-dev

Debian is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
