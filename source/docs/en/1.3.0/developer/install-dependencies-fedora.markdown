---
Type:            article
Title:           Installing dependencies on Fedora
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

Installing dependencies on Fedora
=================================

The following instructions are for [Fedora](https://getfedora.org) 28 through 30.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- Development Tools
- C Development Tools and Libraries
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
- python
- speex-devel
- tar
- xz-devel
- zlib-devel

Additional dependencies not available in the base repository:

- x264-devel [RPM Fusion]

Graphical interface dependencies:

- X Software Development
- GNOME Software Development
- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-libav
- gstreamer1-plugins-base-devel
- intltool
- libgudev1-devel
- libnotify-devel
- webkit2gtk3-devel

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Install dependencies.

    sudo dnf update
    sudo dnf groupinstall "Development Tools" "C Development Tools and Libraries"
    sudo dnf install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel lbzip2 libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel libvpx-devel m4 make meson nasm ninja-build numactl-devel opus-devel patch python speex-devel tar xz-devel zlib-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(cat /etc/system-release | awk '{ print $3}').noarch.rpm
    sudo dnf install x264-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf groupinstall "X Software Development" "GNOME Software Development"
    sudo dnf install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkit2gtk3-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo dnf install libva-devel libdrm-devel

Fedora is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
