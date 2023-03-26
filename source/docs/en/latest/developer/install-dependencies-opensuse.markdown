---
Type:            article
Title:           Installing dependencies on openSUSE
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Robert Riemann <robert@riemann.cc> (rriemann) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Installing dependencies on openSUSE
===================================

The following instructions are for [openSUSE](https://www.opensuse.org/) Tumbleweed (tested as of 2023-03-23).

Basic requirements to run commands:

- sudo (for normal user accounts)
- add Packman repositories (essentials and multimedia)

Dependencies:

- autoconf
- automake
- cmake
- curl
- fdupes
- gcc
- gcc-c++
- intltool
- libtool
- make
- meson
- libnuma-devel
- nasm
- subversion
- update-desktop-files
- wget
- glibc-devel
- libmp3lame-devel
- libbz2-devel
- dav1d-devel
- libdvdnav-devel
- libdvdread-devel
- fdk-aac-devel
- ffnvcodec-devel
- libgudev-1_0-devel
- libjansson-devel
- libjpeg-devel
- libass-devel
- ffmpeg-4-libavcodec-devel
- ffmpeg-4-libavfilter-devel
- ffmpeg-4-libavformat-devel
- ffmpeg-4-libavresample-devel
- ffmpeg-4-libavutil-devel
- libbluray-devel
- libmpeg2-devel
- ffmpeg-4-libswscale-devel
- librsvg-devel
- libxml2-devel
- libopus-devel
- libsamplerate-devel
- speex-devel
- libtheora-devel
- libvorbis-devel
- libvpx-devel
- libx264-devel
- libx265-devel
- zimg-devel
- libmfx-devel
- libvpl-devel
- Mesa-libEGL1
- Mesa-libEGL-devel

Intel Quick Sync Video dependencies (optional):

- libva-devel
- libdrm-devel

Graphical interface dependencies:

- libnotify-devel
- dbus-1-glib-devel
- gtk3-devel
- gstreamer-devel
- gstreamer-plugins-base-devel
- libgudev-1_0-devel
- intltool

Install the [Packman](http://packman.links2linux.org/) Free repository

    sudo zypper ar -cfp 90 https://ftp.fau.de/packman/suse/openSUSE_Tumbleweed/Essentials packman-essentials
    sudo zypper ar -cfp 90 https://ftp.fau.de/packman/suse/openSUSE_Tumbleweed/Multimedia packman-multimedia

Install dependencies with zypper

    sudo zypper install autoconf automake cmake curl fdupes gcc gcc-c++ intltool libtool make meson libnuma-devel nasm subversion update-desktop-files wget glibc-devel libmp3lame-devel libbz2-devel dav1d-devel libdvdnav-devel libdvdread-devel fdk-aac-devel ffnvcodec-devel libgudev-1_0-devel libjansson-devel libjpeg-devel libass-devel ffmpeg-4-libavcodec-devel ffmpeg-4-libavfilter-devel ffmpeg-4-libavformat-devel ffmpeg-4-libavresample-devel ffmpeg-4-libavutil-devel libbluray-devel libmpeg2-devel ffmpeg-4-libswscale-devel librsvg-devel libxml2-devel libopus-devel libsamplerate-devel speex-devel libtheora-devel libvorbis-devel libvpx-devel libx264-devel libx265-devel zimg-devel libmfx-devel libvpl-devel Mesa-libEGL1 Mesa-libEGL-devel
    

To build with Intel Quick Sync Video support, install the QSV dependencies.

    sudo zypper install libva-devel libdrm-devel

To build the GTK [GUI](abbr:Graphical User Interface), install the graphical interface dependencies.

    sudo zypper install libnotify-devel dbus-1-glib-devel gtk3-devel gstreamer-devel gstreamer-plugins-base-devel libgudev-1_0-devel intltool

openSUSE is now prepared to build HandBrake. See [Building HandBrake for Linux](build-linux.html) for further instructions.
