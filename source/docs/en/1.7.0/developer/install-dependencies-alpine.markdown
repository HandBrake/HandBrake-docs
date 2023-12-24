---
Type:            article
Title:           Installing dependencies on Alpine
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.7.0
Language:        English
Language_Code:   en
Authors:         [ Rob (robxnano) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Alpine
=================================

The following instructions are for [Alpine](https://www.alpinelinux.org) 3.18.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- busybox
- cmake
- g++
- git
- jansson-dev
- lame-dev
- libass-dev
- libjpeg-turbo-dev
- libtheora-dev
- libtool
- libvorbis-dev
- libvpx-dev
- libxml2-dev
- m4
- make
- meson
- nasm
- ninja
- numactl-dev
- opus-dev
- patch
- pkgconf
- python3
- speex-dev
- tar
- x264-dev

Intel Quick Sync Video dependencies (optional):

- libva-dev
- libdrm-dev

Graphical interface dependencies:

- desktop-file-utils
- gstreamer-dev
- gst-libav
- gst-plugins-base-dev
- gst-plugins-good
- gtk+3.0-dev

Install dependencies.

    sudo apk add autoconf automake busybox cmake g++ git jansson-dev lame-dev libass-dev libjpeg-turbo-dev libtheora-dev libtool libvorbis-dev libvpx-dev libxml2-dev m4 make meson nasm ninja numactl-dev opus-dev patch pkgconf python3 speex-dev tar x264-dev

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo apk add libva-dev libdrm-dev

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apk add desktop-file-utils gst-libav gst-plugins-base-dev gst-plugins-good gtk+3.0-dev

Alpine is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
