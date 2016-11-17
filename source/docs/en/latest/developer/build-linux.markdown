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

## Installing dependencies

### Ubuntu

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
- python
- tar
- yasm
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

### Fedora

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

    sudo yum groupinstall "Development Tools" "Development Libraries"
    sudo yum install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel m4 make opus-devel patch python tar x264-devel yasm zlib-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum groupinstall "X Software Development" "GNOME Software Development"
    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk3-devel

### CentOS 6

The following instructions are for CentOS 6.8 x86_64 and HandBrake [CLI](abbr:Command Line Interface) only.

Dependencies:

- Development tools
- Additional Development
- cmake
- libicu-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel

Additional dependencies not available in the base repository:

- fribidi-devel [EPEL]
- harfbuzz-devel [spec file]
- jansson-devel [EPEL]
- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- opus-devel [EPEL]
- python27 [SCL]
- x264-devel [RPM Fusion]
- yasm [EPEL]

Install dependencies.

    sudo yum groupinstall "Development tools" "Additional Development"
    sudo yum install cmake libicu-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel

Install the [Software Collections (SCL)](https://wiki.centos.org/AdditionalResources/Repositories/SCL) repository and Python 2.7.x[^python-centos-6].

    sudo yum install centos-release-scl
    sudo yum install python27 python27-python-devel python27-python-setuptools python27-python-tools python27-python-virtualenv

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo yum install epel-release
    sudo yum install fribidi-devel jansson-devel libass-devel opus-devel yasm

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/updates/6/i386/rpmfusion-free-release-6-1.noarch.rpm
    sudo yum install lame-devel x264-devel

Download the HarfBuzz spec file from the CentOS 7 [rpms/harfbuzz](https://git.centos.org/summary/rpms!harfbuzz.git) git repository and remove the `graphite2-devel` dependency.

    sudo mkdir -p /root/rpmbuild/SPECS
    sudo curl -o /root/rpmbuild/SPECS/harfbuzz.spec 'https://git.centos.org/raw/rpms!harfbuzz.git/f5bd1f4920ed0fc56cd21547294f7c34deeb4e4f/SPECS!harfbuzz.spec'
    sudo sed -i'' -e '/BuildRequires:[ ]*graphite2-devel/d' -e '/%configure/s/ --with-graphite2//' /root/rpmbuild/SPECS/harfbuzz.spec

Download, build, and install HarfBuzz (provides the `harfbuzz-devel` package).

    sudo mkdir -p /root/rpmbuild/SOURCES
    sudo curl -o /root/rpmbuild/SOURCES/harfbuzz-0.9.36.tar.bz2 'https://www.freedesktop.org/software/harfbuzz/release/harfbuzz-0.9.36.tar.bz2'
    sudo rpmbuild -ba /root/rpmbuild/SPECS/harfbuzz.spec
    sudo rpm -ivh /root/rpmbuild/RPMS/x86_64/harfbuzz-*.rpm

## Building HandBrake

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Build HandBrake. To build the command line interface only, disable the GTK GUI by appending `--disable-gtk`.

    ./configure --launch-jobs=$(nproc 2>/dev/null) --launch

When complete, you will find `HandBrakeCLI` in the `build` directory. If enabled, you will also find `ghb` in the `build/gtk/src` directory.

Install HandBrake, including icon and desktop files to populate the Applications menu (optional).

    cd build && sudo make install

[^python-centos-6]: Installing Python from CentOS [SCL](https://wiki.centos.org/AdditionalResources/Repositories/SCL) does not impact the default system Python; newer versions are installed alongside and in addition to the system version.
