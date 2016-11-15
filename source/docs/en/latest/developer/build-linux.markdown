---
Type:            article
State:           draft
Title:           Building HandBrake for Linux
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         Bradley Sepos <bradley@bradleysepos.com> (BradleyS)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Linux
============================

## Ubuntu dependencies

The following instructions are for Ubuntu 14.04 LTS (Trusty Tahr) and Ubuntu 16.04 LTS (Xenial Xerus).

Dependencies:

- autoconf
- build-essential
- cmake
- git
- libass-dev
- libbz2-dev
- libfontconfig1-dev
- libfreetype6-dev
- libfribidi-dev
- libharfbuzz-dev
- libjansson-dev
- libmp3lame-dev
- libogg-dev
- libopus-dev
- libsamplerate-dev
- libtheora-dev
- libtool
- libvorbis-dev
- libx264-dev
- libxml2-dev
- m4
- make
- patch
- python 2.7.1 or later (python 3 is currently not supported)
- tar
- yasm 1.2.0 or later (1.3.0 or later recommended)
- zlib1g-dev

Additional Ubuntu 16.04 LTS dependencies:

- libtool-bin

Graphical interface dependencies:

- intltool
- libappindicator-dev
- libdbus-glib-1-dev
- libglib2.0-dev
- libgstreamer1.0-dev
- libgstreamer-plugins-base1.0-dev
- libgtk-3-dev
- libgudev-1.0-dev
- libnotify-dev
- libwebkitgtk-3.0-dev

Install dependencies.

    sudo apt-get install autoconf build-essential cmake git libass-dev libbz2-dev libfontconfig1-dev libfreetype6-dev libfribidi-dev libharfbuzz-dev libjansson-dev libmp3lame-dev libogg-dev libopus-dev libsamplerate-dev libtheora-dev libtool libvorbis-dev libx264-dev libxml2-dev m4 make patch python tar yasm zlib1g-dev

If you are running Ubuntu 16.04 LTS, install the additional dependencies.

    sudo apt-get install libtool-bin

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo apt-get install intltool libappindicator-dev libdbus-glib-1-dev libglib2.0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgtk-3-dev libgudev-1.0-dev libnotify-dev libwebkitgtk-3.0-dev

## Fedora dependencies

The following instructions are for Fedora 20 and later.

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
- python 2.7.1 or later (python 3 is currently not supported)
- tar
- x264-devel
- yasm 1.2.0 or later (1.3.0 or later recommended)
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

    sudo yum groupinstall "Development Tools" "Development Libraries"
    sudo yum install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel m4 make opus-devel patch python tar x264-devel yasm zlib-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum groupinstall "X Software Development" "GNOME Software Development"
    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk3-devel

## Building

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Build HandBrake. To build the command line interface only, disable the GTK GUI by appending `--disable-gtk`.

    ./configure --launch-jobs=$(nproc 2>/dev/null) --launch

When complete, you will find `HandBrakeCLI` in the `build` directory. If enabled, you will also find `ghb` in the `build/gtk/src` directory.

Install HandBrake, including icon and desktop files to populate the Applications menu (optional).

    cd build && sudo make install
