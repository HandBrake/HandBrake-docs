---
Type:            article
Title:           Installing dependencies on Fedora
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.11.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Fedora
=================================

The following instructions are for [Fedora](https://fedoraproject.org) 43 and 44.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- binutils
- bzip2-devel
- cmake
- fontconfig-devel
- freetype-devel
- fribidi-devel
- gcc-c++
- git
- harfbuzz-devel
- jansson-devel
- lame-devel
- lbzip2
- libass-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libtool
- libvorbis-devel
- libxml2-devel
- libvpx-devel
- m4
- make
- meson
- nasm
- ninja-build
- numactl-devel
- opus-devel
- patch
- pkgconf
- python
- speex-devel
- tar
- turbojpeg-devel
- xz-devel
- zlib-devel

Additional dependencies not available in the base repository:

- x264-devel [RPM Fusion]

Dolby Vision dependencies (optional):

- openssl-devel
- rustup

Intel Quick Sync Video and VAAPI dependencies (optional):

- libva-devel
- libdrm-devel

Nvidia NVENC/NVDEC dependencies (optional):

- clang
- llvm

Graphical interface dependencies:

- desktop-file-utils
- gstreamer1-libav
- gstreamer1-plugins-base-devel
- gstreamer1-plugins-good
- gtk4-devel

Install dependencies.

    sudo dnf5 install autoconf automake binutils bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel lbzip2 libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel libvpx-devel m4 make meson nasm ninja-build numactl-devel opus-devel patch pkgconf python speex-devel tar turbojpeg-devel xz-devel zlib-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo dnf5 install --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
    sudo dnf5 install x264-devel

To build with Dolby Vision support, install the Rust dependencies.

    sudo dnf5 install openssl-devel rustup
    rustup-init -y && source "~/.cargo/env"
    cargo install cargo-c

To build with Intel Quick Sync Video and VAAPI support, install the VAAPI dependencies.

    sudo dnf5 install libva-devel libdrm-devel

To build with Nvidia NVENC/NVDEC support, install the CUDA LLVM toolchain dependencies.

    sudo dnf5 install clang llvm

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf5 install desktop-file-utils gstreamer1-libav gstreamer1-plugins-base-devel gstreamer1-plugins-good gtk4-devel

Fedora is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.markdown) for further instructions.
