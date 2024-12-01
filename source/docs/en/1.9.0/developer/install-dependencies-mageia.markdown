---
Type:            article
Title:           Installing dependencies on Mageia
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Rob (robxnano) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Mageia
=================================

The following instructions are for [Mageia](https://mageia.org) 9.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- automake
- autoconf
- cmake
- dnf-plugins-core
- gcc-c++
- git
- jansson-devel
- lame-devel
- libass-devel
- libogg-devel
- libtheora-devel
- libtool
- libvorbis-devel
- libvpx-devel
- m4
- make
- meson
- nasm
- ninja
- numa-devel
- opus-devel
- patch
- speex-devel

Additional dependencies not available in the base repository:

- x264-devel [mageia-tainted]

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Graphical interface dependencies:

- desktop-file-utils
- gtk+3.0-devel
- gstreamer1.0-libav
- gstreamer1.0-plugins-good
- gstreamer1.0-plugins-base-devel

Install dependencies.

    sudo dnf install automake autoconf cmake dnf-plugins-core gcc-c++ git jansson-devel lame-devel libass-devel libogg-devel libtheora-devel libtool libvorbis-devel libvpx-devel m4 make meson nasm ninja numa-devel opus-devel patch speex-devel

Enable the Mageia Tainted repository and install related additional dependencies.

    sudo dnf config-manager --enable mageia-x86_64-tainted updates-x86_64-tainted
    sudo dnf install x264-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo dnf install libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf install desktop-file-utils gtk+3.0-devel gstreamer1.0-libav gstreamer1.0-plugins-good gstreamer1.0-plugins-base-devel

Mageia is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
