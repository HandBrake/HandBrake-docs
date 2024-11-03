---
Type:            article
Title:           Installing dependencies on Enterprise Linux
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Enterprise Linux
===========================================

The following instructions are for distributions based on Enterprise Linux 8 and 9 (such as [Rocky Linux](https://rockylinux.org) and [AlmaLinux](https://almalinux.org)), as well as [CentOS Stream](https://centos.org).

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- bzip2
- cmake
- diffutils
- dnf-plugins-core
- fribidi-devel
- gcc-c++
- git
- libxml2-devel
- libtool
- m4
- make
- numactl-devel
- patch
- pkg-config
- python3
- tar
- xz-devel

Additional dependencies not available in the base repository:

- jansson-devel [PowerTools]
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

- desktop-file-utils
- gstreamer1-libav
- gstreamer1-plugins-base-devel
- gstreamer1-plugins-good
- gtk4-devel

Additional graphical interface dependencies not available in the base repository:

- appstream [EPEL]
- gstreamer1-libav [RPM Fusion]

Install dependencies.

    sudo dnf install autoconf automake bzip2 cmake diffutils dnf-plugins-core fribidi-devel gcc-c++ git libtool libxml2-devel m4 make numactl-devel patch pkg-config python39 tar xz-devel

Enable the Enterprise Linux [PowerTools](abbr:also known as CRB) repository and install related additional dependencies.

    sudo dnf config-manager --set-enabled crb || sudo dnf config-manager --set-enabled powertools
    sudo dnf install jansson-devel lame-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel libvpx-devel meson nasm ninja-build opus-devel speex-devel turbojpeg-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    # AlmaLinux/Rocky Linux:
    sudo dnf install epel-release
    sudo dnf install libass-devel

    # CentOS Stream:
    sudo dnf install epel-next-release
    sudo dnf install libass-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-$(rpm -E %rhel).noarch.rpm
    sudo dnf install x264-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo dnf install libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf install appstream desktop-file-utils gstreamer1-libav gstreamer1-plugins-base-devel gstreamer1-plugins-good gtk4-devel

Enterprise Linux is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
