---
Type:            article
State:           [ obsolete ]
Title:           Installing dependencies on CentOS
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

Installing dependencies on CentOS
=================================

## CentOS 7

The following instructions are for [CentOS](https://centos.org) 7.6 x86_64.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- Development Tools
- Additional Development
- fribidi-devel
- git
- jansson-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel
- speex-devel
- xz-devel

Additional dependencies not available in the base repository:

- devtoolset-7 [SCL] (optional/recommended for HandBrake [CLI](abbr:Command Line Interface))
- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- nasm [NASM]
- opus-devel [EPEL EL6]
- x264-devel [RPM Fusion]
- yasm [EPEL]

Graphical interface dependencies:

- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libgudev1-devel
- libnotify-devel
- webkitgtk4-devel

Additional graphical interface dependencies not available in the base repository:

- devtoolset-7 [SCL]
- gstreamer1-libav [RPM Fusion]

Install dependencies.

    sudo yum update
    sudo yum groupinstall "Development Tools" "Additional Development"
    sudo yum install fribidi-devel git jansson-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel opus-devel speex-devel xz-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo yum install epel-release
    sudo yum install libass-devel yasm

The `opus-devel` package provided by CentOS 7 is too old. Install a newer version provided by EPEL for CentOS 6[^opus-el6].

    sudo yum localinstall $(curl -L -s 'https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/' | grep -Eo 'opus-[^">]+\.x86_64\.rpm' | sort -u | awk '{ print "https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/"$0 }')

The `nasm` package provided by CentOS 7 is too old. Install a newer version provided by the NASM project[^nasm-repo].

    sudo curl -L 'https://nasm.us/nasm.repo' -o /etc/yum.repos.d/nasm.repo
    sudo yum install nasm

The `lame-devel` and `x264-devel` packages are now provided by the RPM Fusion repository. If you previously installed the [ZMREPO](https://zmrepo.zoneminder.com) repository for these packages, remove them and the repository before continuing.

    # Only necessary if previously installed ZMREPO
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install lame-devel x264-devel

The GNU Compiler Collection and related packages provided by CentOS 7 are old. Install and enable a newer version provided by Software Collections (SCL)[^gcc-scl]. This is recommended for building the HandBrake [CLI](abbr:Command Line Interface) and required for building the GTK [GUI](abbr:Graphical User Interface).

    sudo yum install centos-release-scl
    sudo yum install devtoolset-7
    sudo scl enable devtoolset-7 bash  # launches a bash session with the appropriate tools enabled

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk4-devel

CentOS is now prepared to build the HandBrake [CLI](abbr:Command Line Interface). See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^opus-el6]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.

[^nasm-repo]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.

[^gcc-scl]: SCL packages are isolated from base repository versions of similar packages. You can enable these packages using the `scl` command line tool. When you are finished using these packages, simply log out of the active shell. New sessions will use the packages provided by the base repository.
