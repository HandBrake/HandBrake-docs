---
Type:            article
Title:           Installing dependencies on FreeBSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2017 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on FreeBSD
==================================

The following instructions are for [FreeBSD](https://www.freebsd.org) 11.1.

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
- gcc
- gm4
- gmake
- gpatch
- gtar
- harfbuzz
- jansson
- lame (source port)
- libass
- libiconv
- libogg
- libsamplerate
- libtheora
- libtool
- libvorbis
- libx264
- libxml2
- opus
- pkgconf
- python
- yasm

Install the `sudo` package when running as a regular user (not root).

    pkg install sudo

Install dependencies.

    sudo pkg install autoconf automake bash bzip2 cmake flac fontconfig freetype2 fribidi git gcc gm4 gmake gpatch gtar harfbuzz jansson libass libiconv libogg libsamplerate libtheora libtool libvorbis libx264 libxml2 opus pkgconf python yasm

Build and install the `lame` source port.

    sudo portsnap fetch
    bash -c 'if [[ ! -e /usr/ports ]]; then sudo portsnap extract; fi'
    sudo portsnap update
    LASTDIR="`pwd`"
    cd /usr/ports/audio/lame
    sudo make install
    cd "LASTDIR"

FreeBSD is now prepared to build HandBrake. See [Building HandBrake for BSD](build-bsd.html) for further instructions.
