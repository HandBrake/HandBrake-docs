---
Type:            article
Title:           Installing dependencies on Debian
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Debian
=================================

The following instructions are for [Debian](https://www.debian.org) 13 Trixie.

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
- libfontconfig-dev
- libfreetype-dev
- libfribidi-dev
- libharfbuzz-dev
- libjansson-dev
- liblzma-dev
- libmp3lame-dev
- libnuma-dev
- libogg-dev
- libopus-dev
- libsamplerate0-dev
- libspeex-dev
- libssl-dev
- libtheora-dev
- libtool
- libtool-bin
- libturbojpeg0-dev
- libvorbis-dev
- libvpx-dev
- libx11-dev
- libx264-dev
- libxml2-dev
- m4
- make
- meson
- nasm
- ninja-build
- patch
- pkg-config
- zlib1g-dev

Dolby Vision dependencies (optional):

- rustup

Intel Quick Sync Video and VAAPI dependencies (optional):

- libva-dev
- libdrm-dev

Nvidia NVENC/NVDEC dependencies (optional):

- clang
- llvm

Graphical interface dependencies:

- appstream
- desktop-file-utils
- gettext
- gstreamer1.0-libav
- gstreamer1.0-plugins-good
- libgstreamer-plugins-base1.0-dev
- libgtk-4-dev

Install dependencies.

    sudo apt-get update
    sudo apt-get install autoconf automake build-essential cmake git libass-dev libbz2-dev libfontconfig-dev libfreetype-dev libfribidi-dev libharfbuzz-dev libjansson-dev liblzma-dev libmp3lame-dev libnuma-dev libogg-dev libopus-dev libsamplerate0-dev libspeex-dev libssl-dev libtheora-dev libtool libtool-bin libturbojpeg0-dev libvorbis-dev libvpx-dev libx11-dev libx264-dev libxml2-dev m4 make meson nasm ninja-build patch pkg-config zlib1g-dev

To build with Dolby Vision support, install the Rust dependencies.

    sudo apt-get install rustup
    rustup toolchain install "stable-$(uname -m)-unknown-linux-gnu"
    rustup default "stable-$(uname -m)-unknown-linux-gnu"
    cargo install cargo-c

To build with Intel Quick Sync Video and VAAPI support, install the VAAPI dependencies.

    sudo apt-get install libva-dev libdrm-dev

To build with Nvidia NVENC/NVDEC support, install the CUDA LLVM toolchain dependencies.

    sudo apt-get install clang llvm

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apt-get install appstream desktop-file-utils gettext gstreamer1.0-libav gstreamer1.0-plugins-good libgstreamer-plugins-base1.0-dev libgtk-4-dev

Debian is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.markdown) for further instructions.
