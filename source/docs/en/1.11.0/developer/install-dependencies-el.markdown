---
Type:            article
Title:           Installing dependencies on Enterprise Linux
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.11.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Enterprise Linux
===========================================

The following instructions are for distributions based on Enterprise Linux 10, such as [AlmaLinux](https://almalinux.org), [CentOS Stream](https://centos.org), [Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux), and [Rocky Linux](https://rockylinux.org).

CentOS Stream was used for the creation of this guide. Instructions may differ for other Enterprise Linux distributions.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- bzip2-devel
- cmake
- diffutils
- dnf-plugins-core
- fontconfig-devel
- freetype-devel
- fribidi-devel
- gcc-c++
- git
- harfbuzz-devel
- libtool
- libxml2-devel
- m4
- make
- numactl-devel
- patch
- pkg-config
- python
- tar
- xz-devel

Additional dependencies not available in the base repository:

- jansson-devel [CRB]
- lame-devel [CRB]
- libass-devel [EPEL]
- libogg-devel [CRB]
- libsamplerate-devel [CRB]
- libtheora-devel [CRB]
- libvorbis-devel [CRB]
- libvpx-devel [CRB]
- meson [CRB]
- nasm [CRB]
- ninja-build [CRB]
- opus-devel [CRB]
- speex-devel [CRB]
- turbojpeg-devel [CRB]
- x264-devel [RPM Fusion]

Dolby Vision dependencies (optional):

- openssl-devel
- rustup-init [rustup]

Intel Quick Sync Video and VAAPI dependencies (optional):

- libva-devel
- libdrm-devel

Nvidia NVENC/NVDEC dependencies (optional):

- clang
- llvm

Graphical interface dependencies:

- appstream
- desktop-file-utils
- gstreamer1-plugins-base-devel
- gstreamer1-plugins-good
- gtk4-devel

Additional graphical interface dependencies not available in the base repository:

- gstreamer1-plugin-libav [EPEL]

Install dependencies.

    sudo dnf install autoconf automake bzip2-devel cmake diffutils dnf-plugins-core fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel libtool libxml2-devel m4 make numactl-devel patch pkg-config python tar xz-devel

Enable the Enterprise Linux [CRB](abbr:CodeReady Builder) repository and install related additional dependencies.

    sudo dnf config-manager --set-enabled crb
    sudo dnf install jansson-devel lame-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel libvpx-devel meson nasm ninja-build opus-devel speex-devel turbojpeg-devel

Install the [EPEL](https://fedoraproject.org/wiki/EPEL) repository and related additional dependencies.

    sudo dnf install epel-release
    sudo dnf install libass-devel

Install the [RPM Fusion](http://rpmfusion.org) Free repository and related additional dependencies.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-$(rpm -E %rhel).noarch.rpm
    sudo dnf install x264-devel

To build with Dolby Vision support, install the Rust dependencies.

    sudo dnf install openssl-devel
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs -o rustup-init
    # recommend manually verifying the rustup-init script contents before continuing
    chmod +x rustup-init
    ./rustup-init -y && source "${HOME}/.cargo/env"
    cargo install cargo-c

To build with Intel Quick Sync Video and VAAPI support, install the VAAPI dependencies.

    sudo dnf install libva-devel libdrm-devel

To build with Nvidia NVENC/NVDEC support, install the CUDA LLVM toolchain dependencies.

    sudo dnf install clang llvm

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo dnf install appstream desktop-file-utils gstreamer1-plugin-libav gstreamer1-plugins-base-devel gstreamer1-plugins-good gtk4-devel

Enterprise Linux is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.markdown) for further instructions.
