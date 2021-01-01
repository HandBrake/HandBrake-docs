---
Type:            article
State:           [ obsolete ]
Title:           Arch Abhängigkeiten Installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Arch
===============================

Die folgenden Instruktionen sind für [Arch](https://www.archlinux.org) 2018.05.01 (nur HandBrake [CLI](abbr:Command Line Interface - Kommandozeile)).

Grundvorraussetzungen um Kommandos abzusetzen:

- sudo (für standard user accounts)

Abhängigkeiten:

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

Installiere Abhängigkeiten:

	sudo pacman -S base-devel cmake flac fontconfig freetype2 fribidi git harfbuzz jansson lame libass libbluray libogg libsamplerate libtheora libvorbis libvpx libxml2 nasm opus python2 speex x264 x265 xz yasm

Arch ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Instruktionen.
