---
Type:            article
Title:           Installing dependencies on Alpine
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Rob (robxnano) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Alpine
=================================

The following instructions are for [Alpine](https://www.alpinelinux.org) 3.24.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- build-base
- busybox
- cmake
- freetype-dev
- fribidi-dev
- git
- harfbuzz-dev
- jansson-dev
- lame-dev
- libjpeg-turbo-dev
- libogg-dev
- libtheora-dev
- libtool
- libunwind-static
- libvorbis-dev
- libxml2-dev
- m4
- meson
- nasm
- ninja
- numactl-dev
- opus-dev
- pkgconf
- python3
- speex-dev
- tar

Additional dependencies not available in the base repository:

- libass-dev [Alpine Community]
- libvpx-dev [Alpine Community]
- x264-dev [Alpine Community]

Dolby Vision dependencies (optional):

- openssl-libs-static
- rustup [Alpine Community]
- zlib-static

Intel Quick Sync Video and VAAPI dependencies (optional):

- libva-dev
- libdrm-dev

Nvidia NVENC/NVDEC dependencies (optional):

- clang22
- llvm22

Graphical interface dependencies:

- desktop-file-utils
- gstreamer-dev
- gst-libav
- gst-plugins-base-dev
- gst-plugins-good
- gtk4.0-dev

Install dependencies.

    sudo apk add autoconf automake build-base busybox cmake freetype-dev fribidi-dev git harfbuzz-dev jansson-dev lame-dev libass-dev libjpeg-turbo-dev libogg-dev libtheora-dev libtool libunwind-static libvorbis-dev libxml2-dev m4 meson nasm ninja numactl-dev opus-dev pkgconf python3 speex-dev tar x264-dev

Enable the Alpine community repository and install related additional dependencies.

    sudo setup-apkrepos -c
    sudo apk add libass-dev libvpx-dev x264-dev

To build with Dolby Vision support, install the Rust dependencies.

    sudo apk add openssl-libs-static rustup zlib-static
    rustup-init -y && source "${HOME}/.cargo/env"
    rustup toolchain install "stable-$(uname -m)-unknown-linux-musl"
    rustup default "stable-$(uname -m)-unknown-linux-musl"
    cargo install cargo-c

To build with Intel Quick Sync Video and VAAPI support, install the VAAPI dependencies.

    sudo apk add libva-dev libdrm-dev

To build with Nvidia NVENC/NVDEC support, install the CUDA LLVM toolchain dependencies.

    sudo apt-get install clang22 llvm22

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apk add desktop-file-utils gst-libav gst-plugins-base-dev gst-plugins-good gtk4.0-dev

Alpine is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.markdown) for further instructions.
