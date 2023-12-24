---
Type:            article
State:           [ obsolete ]
Title:           Building HandBrake for BSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.6.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for BSD
==========================

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html) for more information.

## Installing dependencies

Dependency installation instructions are available for the following distributions.

- [FreeBSD](install-dependencies-freebsd.html)
- [NetBSD](install-dependencies-netbsd.html)
- [OpenBSD](install-dependencies-openbsd.html)

## Building HandBrake

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

List available tags in the HandBrake 1.6.x release series, and check out the most recent.

    git tag --list | grep ^1\.6\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.6\.[0-9]+$' | tail -n 1)

Build HandBrake. To enable experimental support for Intel Quick Sync Video, append `--enable-qsv`. To build the command line interface only, disable the graphical interface by appending `--disable-gtk`.

For FreeBSD

    env CC=cc ./configure --launch-jobs=$(sysctl -n hw.ncpu) --launch

For NetBSD

    ./configure --launch-jobs=$(sysctl -n hw.ncpuonline) --launch

For OpenBSD

    env AUTOCONF_VERSION=2.71 AUTOMAKE_VERSION=1.16 CC=cc ./configure --launch-jobs=$(sysctl -n hw.ncpuonline) --launch

When complete, you will find `HandBrakeCLI` in the `build` directory. If the graphical interface is enabled, you will also find `ghb` in the `build/gtk/src` directory.

Install HandBrake (optional). When installing the graphical interface, icon and desktop files for the Applications menu will be also installed.

    sudo gmake --directory=build install

To start over, simply remove the `build` directory.

    rm -rf build
