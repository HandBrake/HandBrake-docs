---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on Fedora
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
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

The following instructions are for [Fedora](https://getfedora.org) 20.

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
- libass-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libtool
- libvorbis-devel
- libxml2-devel
- m4
- make
- opus-devel
- patch
- python
- tar
- x264-devel
- yasm
- zlib-devel

Graphical interface dependencies:

- X Software Development
- GNOME Software Development
- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libgudev1-devel
- libnotify-devel
- webkitgtk3-devel

Install dependencies.

    sudo yum update
    sudo yum groupinstall "Development Tools" "Development Libraries"
    sudo yum install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel m4 make opus-devel patch python tar x264-devel yasm zlib-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum groupinstall "X Software Development" "GNOME Software Development"
    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk3-devel

Fedora is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^python-centos-6]: Installing Python from CentOS [SCL](https://wiki.centos.org/AdditionalResources/Repositories/SCL) does not impact the default system Python; newer versions are installed alongside and in addition to the system version.
