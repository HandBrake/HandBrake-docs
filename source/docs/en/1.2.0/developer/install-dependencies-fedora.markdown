---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on Fedora
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Fedora
=================================

The following instructions are for [Fedora](https://getfedora.org) 26 Workstation and later.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- Development Tools
- Development Libraries
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
- m4
- make
- nasm
- opus-devel
- patch
- python
- speex-devel
- tar
- xz-devel
- yasm
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
- webkit2gtk3-devel (webkitgtk4-devel for Fedora 27, webkitgtk3-devel for Fedora 26)

Install dependencies.

    sudo yum update
    sudo yum groupinstall "Development Tools" "Development Libraries"
    sudo yum install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel lbzip2 libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel m4 make nasm opus-devel patch python speex-devel tar xz-devel yasm zlib-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(cat /etc/system-release | awk '{ print $3}').noarch.rpm
    sudo yum install x264-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum groupinstall "X Software Development" "GNOME Software Development"
    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel
    sudo yum install webkit2gtk3-devel || sudo yum install webkitgtk4-devel || sudo yum install webkitgtk3-devel

Fedora is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
