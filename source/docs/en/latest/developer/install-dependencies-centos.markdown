---
Type:            article
Title:           Installing dependencies on CentOS
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

Installing dependencies on CentOS
=================================

## CentOS 7

The following instructions are for [CentOS](https://centos.org) 7 x86_64 (HandBrake [CLI](abbr:Command Line Interface) only).

Dependencies:

- Development Tools
- Additional Development
- fribidi-devel
- jansson-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel
- opus-devel

Additional dependencies not available in the base repository:

- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- x264-devel [RPM Fusion]
- yasm [EPEL]

Install dependencies.

    sudo yum update
    sudo yum groupinstall "Development Tools" "Additional Development"
    sudo yum install fribidi-devel jansson-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel opus-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo yum install epel-release
    sudo yum install libass-devel yasm

The `lame-devel` and `x264-devel` packages are now provided by the RPM Fusion repository. If you previously installed the [ZMREPO](https://zmrepo.zoneminder.com) repository for these packages, remove them and the repository before continuing.

    # Only necessary if previously installed ZMREPO
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install lame-devel x264-devel

CentOS is now prepared to build the HandBrake [CLI](abbr:Command Line Interface). See [Building HandBrake for Linux](build-linux.html) for further instructions.
