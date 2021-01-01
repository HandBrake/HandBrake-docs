---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on Gentoo
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Gentoo
=================================

The following instructions are for [Gentoo](https://gentoo.org) profile `default/linux/amd64/13.0` with Portage snapshot 20161120 (HandBrake [CLI](abbr:Command Line Interface) only).

Dependencies[^rebuild]:

- fribidi
- harfbuzz
- jansson
- lame
- libass
- libogg
- libsamplerate
- libtheora
- libvorbis
- opus
- x264

Install dependencies.

    sudo emerge --ask fribidi harfbuzz jansson lame libass libogg libsamplerate libtheora libvorbis opus x264

Gentoo is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^rebuild]: Previously installed dependencies may need to be rebuilt before building HandBrake.
