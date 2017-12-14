---
Type:            article
Title:           Building HandBrake for Windows
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2017 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Windows
==============================

## Command line interface and LibHB

Building the HandBrake [CLI](abbr:Command Line Interface) and LibHB (`hb.dll`) for Windows requires Linux and a recent [MinGW-w64](https://mingw-w64.org/) toolchain. Ubuntu 16.04 LTS or later is recommended; other distros may work as well. In all cases, we recommend you build the MinGW-w64 toolchain using our instructions and the included script, as most packaged versions have issues that can produce non-functioning builds.

The following instructions are for Ubuntu 16.04 LTS.

Dependencies:

- cmake
- curl
- gcc
- git
- libtool
- m4
- make
- patch
- python
- tar
- wget
- yasm

Install all dependencies.

    sudo apt-get update
    sudo apt-get install cmake curl gcc git intltool libtool m4 make patch python tar wget yasm

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Check out the most recent tag in the HandBrake 1.0.x release series.

    git checkout refs/tags/$(git tag -l | grep -E '^1\.0\.[0-9]+$' | tail -n 1)

Build the MinGW-w64 toolchain using the included script, where `username` is your user name. Feel free to choose a different output path, if desired.

    scripts/mingw-w64-build x86_64 /home/username/toolchains/

This process will take a few minutes, then provide you with instructions for adding the resulting binaries location to your environment's `PATH`. Do this now.

Build HandBrake.

    ./configure --cross=x86_64-w64-mingw32 --enable-qsv --launch-jobs=$(nproc) --launch

When complete, you will find `HandBrakeCLI.exe` in the `build` directory and `hb.dll` in `build/libhb`.

To start over, simply remove the `build` directory.

    if [[ "$(basename $(pwd))" == "build" ]]; then cd ..; fi
    rm -rf build


## Graphical interface

The following tools are required to build and run the [GUI](abbr:Graphical User Interface).

- [Microsoft Visual Studio Community](https://www.visualstudio.com/vs/community/)
- [Source Tree](https://www.sourcetreeapp.com) git client (optional)
  - Visual Studio 2015 has built-in git support, if you prefer it
- `hb.dll` (see the LibHB build instructions preceding these, or download from [https://handbrake.fr/nightly.php](https://handbrake.fr/nightly.php))

Clone `https://github.com/HandBrake/HandBrake.git` using your git client.

Source code for the GUI resides in the `win\CS` folder and the solution file is named `HandBrake.sln`. Make sure HandBrakeWPF is set as the startup project in the Solution Explorer by right-clicking the name and selecting "Set as startup project".

To build the GUI, select Build Solution from the Build menu.

When complete, locate the output folder where `HandBrake.exe` is created (typically in `win\CS\HandBrakeWPF\bin\...`, depending on the selected build profile). Copy `hb.dll` to this folder. This completes the build process.
