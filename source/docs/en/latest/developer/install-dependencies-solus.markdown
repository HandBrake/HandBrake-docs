---
Type:            article
Title:           Installing dependencies on Solus
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Rob (robxnano) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Solus
================================

The following instructions are for [Solus](https://getsol.us) 4.4.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- binutils
- bzip2-devel
- cargo
- cargo-c
- cmake
- g++
- gcc
- git
- glibc-devel
- lame-devel
- libass-devel
- libjpeg-turbo-devel
- libogg-devel
- libtheora-devel
- libtool-devel
- libspeex-devel
- libvorbis-devel
- libvpx-devel
- libxml2-devel
- linux-headers
- m4
- make
- meson
- nasm
- ninja
- numactl-devel
- opus-devel
- patch
- pkg-config
- rust
- x264-devel
- xz-devel
- zlib-devel

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Graphical interface dependencies:

- appstream
- desktop-file-utils
- gstreamer-1.0-plugins-good
- gstreamer-1.0-libav
- gstreamer-1.0-plugins-base-devel
- libgtk-3-devel

Install dependencies.

    sudo eopkg install autoconf automake binutils bzip2-devel cargo cargo-c cmake g++ gcc git glibc-devel lame-devel libass-devel libjpeg-turbo-devel libogg-devel libtheora-devel libtool-devel libspeex-devel libvorbis-devel libvpx-devel libxml2-devel linux-headers m4 make meson nasm ninja numactl-devel opus-devel patch pkg-config rust x264-devel xz-devel zlib-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo eopkg install libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo eopkg install appstream desktop-file-utils gstreamer-1.0-plugins-good gstreamer-1.0-libav gstreamer-1.0-plugins-base-devel libgtk-3-devel

Solus is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
