---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on Arch
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

Installing dependencies on Arch
===============================

The following instructions are for [Arch](https://www.archlinux.org) 2018.05.01 (HandBrake [CLI](abbr:Command Line Interface) only).

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- base-devel
- cmake
- flac
- fontconfig
- freetype2
- fribidi
- git
- harfbuzz
- jansson
- lame
- libass
- libbluray
- libogg
- libsamplerate
- libtheora
- libvorbis
- libvpx
- libxml2
- nasm
- opus
- python2
- speex
- x264
- x265
- xz
- yasm

Install dependencies.

    sudo pacman -S base-devel cmake flac fontconfig freetype2 fribidi git harfbuzz jansson lame libass libbluray libogg libsamplerate libtheora libvorbis libvpx libxml2 nasm opus python2 speex x264 x265 xz yasm

Arch is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
