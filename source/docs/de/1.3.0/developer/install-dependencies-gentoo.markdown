---
Type:            article
Title:           Abhängigkeiten für Gentoo installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Abhängigkeiten für Gentoo installieren
=================================

Die folgenden Anweisungen gelten für [Gentoo](https://gentoo.org) Profil `default/linux/amd64/17.1` mit Portage snapshot 20190915 (nur HandBrake [CLI](abbr:Command Line Interface - Kommandozeile)).

Grundvoraussetzungen um Kommandos zu starten:

- sudo (für standard user accounts)

Abhängigkeiten[^rebuild]:

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

Abhängigkeiten installieren:

    sudo emerge --ask fribidi dev-vcs/git harfbuzz jansson lame libass libogg libsamplerate libtheora libvorbis libvpx app-arch/lzma meson nasm ninja numactl opus speex x264
  
Gentoo ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für mehr Anweisungen.

[^rebuild]: Zuvor installierte Abhängigkeiten müssen eventuell vor dem HandBrake Build neu gebaut werden.
