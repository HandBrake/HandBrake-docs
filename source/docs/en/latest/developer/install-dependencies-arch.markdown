---
Type:            article
Title:           Installing dependencies on Arch
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

Installing dependencies on Arch
===============================

The following instructions are for [Arch](https://www.archlinux.org) 2026.08.01.

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
- libjpeg-turbo
- libogg
- libsamplerate
- libtheora
- libvorbis
- libvpx
- libxml2
- meson
- nasm
- ninja
- numactl
- opus
- python
- speex
- x264
- xz

Dolby Vision dependencies (optional):

- rustup

Intel Quick Sync Video and VAAPI dependencies (optional):

- libva
- libdrm

Nvidia NVENC/NVDEC dependencies (optional):

- clang
- llvm

Graphical interface dependencies:

- desktop-file-utils
- gst-libav
- gst-plugins-good
- gtk4

Install dependencies.

    sudo pacman -S --needed base-devel cmake flac fontconfig freetype2 fribidi git harfbuzz jansson lame libass libbluray libjpeg-turbo libogg libsamplerate libtheora libvorbis libvpx libxml2 meson nasm ninja numactl opus python speex x264 xz

To build with Dolby Vision support, install the Rust dependencies.

    sudo pacman -S --needed rustup
    rustup toolchain install "stable-$(uname -m)-unknown-linux-gnu"
    rustup default "stable-$(uname -m)-unknown-linux-gnu"
    cargo install cargo-c

To build with Intel Quick Sync Video and VAAPI support, install the VAAPI dependencies.

    sudo pacman -S --needed libva libdrm

To build with Nvidia NVENC/NVDEC support, install the CUDA LLVM toolchain dependencies.

    sudo pacman -S --needed clang llvm

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo pacman -S --needed desktop-file-utils gst-libav gst-plugins-good gtk4

Arch is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.markdown) for further instructions.
