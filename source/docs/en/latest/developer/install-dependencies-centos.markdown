---
Type:            article
Title:           Installing dependencies on CentOS
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

Installing dependencies on CentOS
=================================

The following instructions are for [CentOS](https://centos.org) 6.8 x86_64. Only the HandBrake [CLI](abbr:Command Line Interface) is supported.

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

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/updates/6/x86_64/rpmfusion-free-release-6-1.noarch.rpm
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

CentOS is now prepared to build the HandBrake [CLI](abbr:Command Line Interface). See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^python-centos-6]: Installing Python from CentOS [SCL](https://wiki.centos.org/AdditionalResources/Repositories/SCL) does not impact the default system Python; newer versions are installed alongside and in addition to the system version.
