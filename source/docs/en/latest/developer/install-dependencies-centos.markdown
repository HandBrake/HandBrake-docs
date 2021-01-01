---
Type:            article
Title:           Installing dependencies on CentOS
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on CentOS
=================================

## CentOS 8

The following instructions are for [CentOS](https://centos.org) 8.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- Development Tools
- cmake
- fribidi-devel
- git
- jansson-devel
- libxml2-devel
- numactl-devel
- python3
- xz-devel

Additional dependencies not available in the base repository:

- lame-devel [PowerTools]
- libass-devel [EPEL]
- libogg-devel [PowerTools]
- libsamplerate-devel [PowerTools]
- libtheora-devel [PowerTools]
- libvorbis-devel [PowerTools]
- libvpx-devel [PowerTools]
- meson [PowerTools]
- nasm [PowerTools]
- ninja-build [PowerTools]
- opus-devel [PowerTools]
- speex-devel [PowerTools]
- turbojpeg-devel [PowerTools]
- x264-devel [RPM Fusion]

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Graphical interface dependencies:

- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libnotify-devel
- webkit2gtk3-devel

Additional graphical interface dependencies not available in the base repository:

- gstreamer1-libav [RPM Fusion]
- libgudev1-devel [PowerTools]

Install dependencies.

    sudo dnf update
    sudo dnf groupinstall "Development Tools"
    sudo dnf install cmake fribidi-devel git jansson-devel libxml2-devel numactl-devel python3 xz-devel

Enable the CentOS PowerTools repository and install related additional dependencies.

    sudo dnf config-manager --set-enabled PowerTools
    sudo dnf install lame-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel libvpx-devel meson nasm ninja-build opus-devel speex-devel turbojpeg-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo dnf install epel-release
    sudo dnf install libass-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-8.noarch.rpm
    sudo dnf install x264-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo dnf install libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkit2gtk3-devel

CentOS is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
