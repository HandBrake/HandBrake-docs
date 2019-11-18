---
Type:            article
Title:           Building HandBrake for Windows
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Windows
==============================

## Command line interface and LibHB

Building the HandBrake [CLI](abbr:Command Line Interface) and LibHB (`hb.dll`) for Windows requires Linux and a recent [MinGW-w64](https://mingw-w64.org/) toolchain. Fedora 28 or later, or Ubuntu 18.04 LTS (Bionic Beaver) or later are recommended; other distros may work as well. In all cases, we recommend you build the MinGW-w64 toolchain using our instructions and the included script, as some packaged versions have issues that can produce non-functioning builds.

### Installing dependencies on Fedora

The following instructions are for [Fedora](https://getfedora.org) 28 through 30.

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- Development Tools
- C Development Tools and Libraries
- cmake
- gcc-c++
- git
- libtool
- m4
- make
- meson
- nasm
- ninja-build
- patch
- python
- tar
- zlib-devel

Install dependencies.

    sudo dnf update
    sudo dnf groupinstall "Development Tools" "C Development Tools and Libraries"
    sudo dnf install cmake gcc-c++ git libtool m4 make meson nasm ninja-build patch python tar zlib-devel

Install the additional dependencies required to build the MinGW-w64 toolchain.

    sudo dnf install bison bzip2 curl flex g++ gzip pax


### Installing dependencies on Ubuntu

The following instructions are for [Ubuntu](https://www.ubuntu.com) 18.04 LTS (Bionic Beaver) through 19.10 (Eoan Ermine).

Basic requirements to run commands:

- sudo (for normal user accounts)

Dependencies:

- autoconf
- automake
- autopoint
- build-essential
- cmake
- gcc
- git
- libtool
- libtool-bin
- m4
- make
- nasm
- ninja-build
- patch
- pkg-config
- python
- tar
- zlib1g-dev

Additional dependencies for Ubuntu 18.10 and later:

- meson

Additional Ubuntu 18.04 LTS dependencies:

- python3-pip
- meson (via pip3)

Additional MinGW-w64 toolchain dependencies:

- bison
- bzip2
- curl
- flex
- g++
- gzip
- pax

Install dependencies.

    sudo apt-get update
    sudo apt-get install automake autoconf autopoint build-essential cmake gcc git intltool libtool libtool-bin m4 make nasm ninja-build patch pkg-config python tar zlib1g-dev

If you are running Ubuntu 18.10 or later, install the additional dependencies.

    sudo apt-get install meson

If you are running Ubuntu 18.04 LTS, the `meson` package is too old. Install a newer version provided by the [Python Package Index](https://pypi.org/).

    sudo apt-get install python3-pip
    sudo pip3 install meson

Install the additional dependencies required to build the MinGW-w64 toolchain.

    sudo apt-get install bison bzip2 curl flex g++ gzip pax


### Building the MinGW-w64 toolchain and HandBrake

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

List available tags in the HandBrake 1.3.x release series, and check out the most recent.

    git tag --list | grep ^1\.3\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.3\.[0-9]+$' | tail -n 1)

Build the MinGW-w64 toolchain using the included script, where `username` is your user name. Feel free to choose a different output path, if desired.

    scripts/mingw-w64-build x86_64 /home/username/toolchains/

This process will take a few minutes, then provide you with instructions for adding the resulting binaries location to your environment's `PATH`. Do this now.

Build HandBrake. For higher quality audio, enable the FDK AAC encoder by appending `--enable-fdk-aac`. Builds including FDK AAC must be for personal use only and may not be distributed.[^fdk-aac-license]

    ./configure --cross=x86_64-w64-mingw32 --launch-jobs=$(nproc) --launch

When complete, you will find `HandBrakeCLI.exe` in the `build` directory and `hb.dll` in `build/libhb`.

To start over, simply remove the `build` directory.

    rm -rf build


## Graphical interface

The following tools are required to build and run the [GUI](abbr:Graphical User Interface).

- [Microsoft Visual Studio Community](https://www.visualstudio.com/vs/community/)
- A Git client
  - [Source Tree](https://www.sourcetreeapp.com) (recommended)
  - Client included with Visual Studio 2015 or later
- `hb.dll` (see the LibHB build instructions preceding these, or download from [https://handbrake.fr/nightly.php](https://handbrake.fr/nightly.php))
- [JetBrains ReSharper](https://www.jetbrains.com/?from=HandBrake) (optional)
  - Recommended for developers interested in working on the Windows UI
  - Active, regular contributors may request a free for open source ReSharper license from the HandBrake Team, courtesy of JetBrains

Clone `https://github.com/HandBrake/HandBrake.git` using your git client, and check out the most recent tag in the 1.3.x release series.

Source code for the GUI resides in the `win\CS` folder and the solution file is named `HandBrake.sln`. Make sure HandBrakeWPF is set as the startup project in the Solution Explorer by right-clicking the name and selecting "Set as startup project".

To build the GUI, select Build Solution from the Build menu.

When complete, locate the output folder where `HandBrake.exe` is created (typically in `win\CS\HandBrakeWPF\bin\...`, depending on the selected build profile). Copy `hb.dll` to this folder. This completes the build process.

[^fdk-aac-license]: The FDK AAC encoder is only provided in source code form and is not fully compatible with the GNU General Public License Version 2 used by HandBrake. Builds including FDK AAC must be for personal use only and may not be distributed. Do not share the build product with others.
