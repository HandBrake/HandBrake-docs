---
Type:            article
Title:           Installing dependencies on Clear
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on Clear
================================

The following instructions are for [Clear](https://clearlinux.org) 33370 and later.

Basic requirements to run commands:

- curl
- sudo (for normal user accounts)

Dependencies:

- dev-utils
- dev-utils-dev
- devpkg-fribidi
- devpkg-jansson
- devpkg-libass
- devpkg-libjpeg-turbo
- devpkg-libogg
- devpkg-libsamplerate
- devpkg-libtheora
- devpkg-libvorbis
- devpkg-libvpx
- devpkg-opus
- devpkg-speex

Additional dependencies not available in the base repository:

- lame
- x264

Intel Quick Sync Video dependencies (optional):

- devpkg-libva
- devpkg-libdrm

Graphical interface dependencies:

- desktop-dev

Install dependencies.

    sudo swupd update
    sudo swupd bundle-add dev-utils dev-utils-dev devpkg-fribidi devpkg-jansson devpkg-libass devpkg-libjpeg-turbo devpkg-libogg devpkg-libsamplerate devpkg-libtheora devpkg-libvorbis devpkg-libvpx devpkg-opus devpkg-speex

Build and install the dependencies not available in the base repository.

    # lame
    curl -LO https://sourceforge.net/projects/lame/files/lame/3.100/lame-3.100.tar.gz
    tar -xf lame-3.100.tar.gz
    cd lame-3.100
    ./configure --enable-shared --enable-static --enable-nasm
    make -j$(nproc)
    sudo make install-strip
    cd ..

    # x264
    curl -LO https://code.videolan.org/videolan/x264/-/archive/master/x264-master.tar.bz2
    tar -xf x264-master.tar.bz2
    cd x264-master
    ./configure --enable-shared --enable-static --enable-lto --enable-pic --enable-strip
    make -j$(nproc)
    sudo make install
    cd ..

    # make shared libraries findable
    if ! grep '\/usr\/local\/lib' /etc/ld.so.conf >/dev/null 2>&1; then
        export CFLAGS="${CFLAGS:-} -I/usr/local/include"
        export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"
        echo 'export CFLAGS="${CFLAGS:-} -I/usr/local/include"' >> "${HOME}/.bashrc"
        echo 'export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"' >> "${HOME}/.bashrc"
        echo '/usr/local/lib' | sudo tee --append /etc/ld.so.conf
        sudo ldconfig
    fi

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo swupd bundle-add devpkg-libva devpkg-libdrm

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo swupd bundle-add desktop-dev

Clear is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
