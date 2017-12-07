---
Type:            article
Title:           Building HandBrake for BSD
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2017 HandBrake Team
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

## Building HandBrake

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Build HandBrake. Since only the command line interface is supported on BSD, the graphical interface is automatically disabled (equivalent to `--disable-gtk`).

    ./configure --launch-jobs=$(sysctl -n hw.ncpu) --launch

When complete, you will find `HandBrakeCLI` in the `build` directory.

Install HandBrake (optional).

    cd build && sudo gmake install

To start over, simply remove the `build` directory.

    bash -c 'if [[ "$(basename $(pwd))" == "build" ]]; then cd ..; fi'
    rm -rf build
