---
Type:            article
Title:           Installing dependencies on CentOS
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on CentOS
=================================

## CentOS 8

The following instructions are for [CentOS](https://centos.org) 8.0.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- Development Tools
- cmake
- fribidi-devel
- git
- jansson-devel
- numactl-devel
- python3
- xz-devel

Additional dependencies not available in the base repository:

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
- x264-devel [RPM Fusion]

Graphical interface dependencies:

- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libnotify-devel
- webkit2gtk3-devel

Additional graphical interface dependencies not available in the base repository:

- gstreamer1-libav [RPM Fusion]
- libgudev1-devel [PowerTools]

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Install dependencies.

    sudo dnf update
    sudo dnf groupinstall "Development Tools"
    sudo dnf install cmake fribidi-devel git jansson-devel numactl-devel python3 opus-devel xz-devel

Enable the CentOS PowerTools repository and install related additional dependencies.

    sudo dnf config-manager --set-enabled PowerTools
    sudo dnf install lame-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel meson nasm ninja-build opus-devel speex-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo dnf install epel-release
    sudo dnf install libass-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-8.noarch.rpm
    sudo dnf install x264-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkit2gtk3-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo dnf install libva-devel libdrm-devel

CentOS is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.


## CentOS 7

The following instructions are for [CentOS](https://centos.org) 7.7.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- Development Tools
- fribidi-devel
- git
- jansson-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel
- numactl-devel
- python3
- speex-devel
- xz-devel

Additional dependencies not available in the base repository:

- devtoolset-7 [SCL] (optional/recommended for HandBrake [CLI](abbr:Command Line Interface))
- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- libvpx
- meson [EPEL]
- nasm [NASM]
- ninja-build [EPEL]
- opus-devel [EPEL EL6]
- x264-devel [RPM Fusion]

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

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Install dependencies.

    sudo yum update
    sudo yum groupinstall "Development Tools"
    sudo yum install fribidi-devel git jansson-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel numactl-devel python3 opus-devel speex-devel xz-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo yum install epel-release
    sudo yum install libass-devel meson ninja-build

The `opus-devel` package provided by CentOS 7 is too old. Install a newer version provided by EPEL for CentOS 6[^opus-el6].

    sudo yum localinstall $(curl -L -s 'https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/' | grep -Eo 'opus-[^">]+\.x86_64\.rpm' | sort -u | awk '{ print "https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/"$0 }')

The `nasm` package provided by CentOS 7 is too old. Install a newer version provided by the NASM project[^nasm-repo].

    sudo curl -L 'https://nasm.us/nasm.repo' -o /etc/yum.repos.d/nasm.repo
    sudo yum install nasm

The `libvpx-devel` package provided by CentOS 7 is too old. Build and install a newer version from source[^libvpx-source].

    # remove old package if installed
    sudo yum remove libvpx-devel

    # libvpx
    curl -L https://github.com/webmproject/libvpx/archive/v1.8.1.tar.gz -o libvpx-1.8.1.tar.gz
    tar -xf libvpx-1.8.1.tar.gz
    cd libvpx-1.8.1
    ./configure --enable-shared --enable-static --as=nasm --enable-pic --enable-runtime-cpu-detect --enable-vp8 --enable-vp9
    make -j$(nproc)
    sudo make install
    ..

    # make shared libraries findable
    export CFLAGS="${CFLAGS:-} -I/usr/local/include"
    export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"
    echo 'export CFLAGS="${CFLAGS:-} -I/usr/local/include"' >> "${HOME}/.bashrc"
    echo 'export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"' >> "${HOME}/.bashrc"
    if ! grep '\/usr\/local\/lib' /etc/ld.so.conf >/dev/null 2>&1; then
        echo '/usr/local/lib' | sudo tee --append /etc/ld.so.conf
        sudo ldconfig
    fi

The `lame-devel` and `x264-devel` packages are now provided by the RPM Fusion repository. If you previously installed the [ZMREPO](https://zmrepo.zoneminder.com) repository for these packages, remove them and the repository before continuing.

    # Only necessary if previously installed ZMREPO
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install lame-devel x264-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk4-devel

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo yum install libva-devel libdrm-devel

The GNU Compiler Collection and related packages provided by CentOS 7 are old. Install and enable a newer version provided by Software Collections (SCL)[^gcc-scl]. This is recommended for building the HandBrake [CLI](abbr:Command Line Interface) and required for building the GTK [GUI](abbr:Graphical User Interface).

    sudo yum install centos-release-scl
    sudo yum install devtoolset-7
    sudo scl enable devtoolset-7 bash  # launches a bash session with the appropriate tools enabled

    # make shared libraries findable by root
    export CFLAGS="${CFLAGS:-} -I/usr/local/include"
    export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"
    echo 'export CFLAGS="${CFLAGS:-} -I/usr/local/include"' >> "${HOME}/.bashrc"
    echo 'export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"' >> "${HOME}/.bashrc"

CentOS is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.

[^opus-el6]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.

[^nasm-repo]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.

[^libvpx-source]: Installing newer packages than those available in the base repository may lead to incompatibility with other software expecting specific package versions.

[^gcc-scl]: SCL packages are isolated from base repository versions of similar packages. You can enable these packages using the `scl` command line tool. When you are finished using these packages, simply log out of the active shell to resume using packages provided by the base repository.
