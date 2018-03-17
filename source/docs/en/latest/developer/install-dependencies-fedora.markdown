---
Type:            article
Title:           Installing dependencies on Fedora
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Fedora
=================================

The following instructions are for [Fedora](https://getfedora.org) 26 and later.

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
- yasm
- zlib-devel

Additional dependencies not available in the base repository:

- x264-devel [RPM Fusion]

Graphical interface dependencies:

- X Software Development
- GNOME Software Development
- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libgudev1-devel
- libnotify-devel

Additional graphical interface dependencies for Fedora 26:

- webkitgtk3-devel

Additional graphical interface dependencies for Fedora 27 and later:

- webkitgtk4-devel

Install dependencies.

    sudo yum update
    sudo yum groupinstall "Development Tools" "Development Libraries"
    sudo yum install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel m4 make opus-devel patch python tar yasm zlib-devel

If you are running Fedora 26, install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-26.noarch.rpm
    sudo yum install x264-devel

If you are running Fedora 27 or later, install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-27.noarch.rpm
    sudo yum install x264-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum groupinstall "X Software Development" "GNOME Software Development"
    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel

If you are running Fedora 26, install the additional graphical interface dependencies.

    sudo yum install webkitgtk3-devel

If you are running Fedora 27 or later, install the additional graphical interface dependencies.

    sudo yum install webkitgtk4-devel

Fedora is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
