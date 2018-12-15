---
Type:            article
Title:           Installing dependencies on CentOS
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
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

The following instructions are for [CentOS](https://centos.org) 7.5 x86_64 (HandBrake [CLI](abbr:Command Line Interface) only).

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

- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- nasm [NASM]
- opus-devel [EPEL EL6]
- x264-devel [RPM Fusion]
- yasm [EPEL]

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

CentOS is now prepared to build the HandBrake [CLI](abbr:Command Line Interface). See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^opus-el6]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.

[^nasm-repo]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.
