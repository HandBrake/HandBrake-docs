---
Type:            article
Title:           Installing dependencies on Gentoo
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

Installing dependencies on Gentoo
=================================

The following instructions are for [Gentoo](https://gentoo.org) profile `default/linux/amd64/17.1` with Portage snapshot 20190915 (HandBrake [CLI](abbr:Command Line Interface) only).

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies[^rebuild]:

- fribidi
- dev-vcs/git
- harfbuzz
- jansson
- lame
- libass
- libogg
- libsamplerate
- libtheora
- libvorbis
- libvpx
- app-arch/lzma
- meson
- nasm
- ninja
- numactl
- opus
- speex
- x264

Install dependencies.

    sudo emerge --ask fribidi dev-vcs/git harfbuzz jansson lame libass libogg libsamplerate libtheora libvorbis libvpx app-arch/lzma meson nasm ninja numactl opus speex x264

Gentoo is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^rebuild]: Previously installed dependencies may need to be rebuilt before building HandBrake.
