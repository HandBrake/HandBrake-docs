---
Type:            article
Title:           Building HandBrake for Mac
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Mac
==========================

Building HandBrake for Mac requires an Apple computer with a 64-bit Intel processor running OS X 10.10.5 Yosemite or later, and the following dependencies.

- [Xcode](https://developer.apple.com/xcode/) 7.2.1 or later
  - free Apple Developer registration required, or install from the Mac App Store
- [Command Line Tools for Xcode](https://developer.apple.com/download/more/) (optional)
  - free Apple Developer registration required, or install using `xcode-select --install`

Additional dependencies (may be built via included script):

- autoconf
- automake
- cmake (3.3.0 or later recommended)
- libtool
- pkg-config
- yasm 1.2.0 or later (1.3.0 or later recommended)

Install Xcode and open it once. You may quit Xcode after it has finished loading.

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

You may build and install the additional dependencies using the included script. Feel free to choose a different output path, if desired.

    scripts/mac-toolchain-build /usr/local

This process will take a few minutes. If necessary, the script will provide you with instructions for adding the resulting binaries location to your environment's `PATH`[^default-path]. Do this now.

Build HandBrake.

    ./configure --launch-jobs=$(sysctl -n hw.ncpu 2>/dev/null) --launch

When complete, you will find `HandBrake.app` and `HandBrakeCLI` in the `build/xroot` directory.

[^default-path]: `/usr/local/bin` is included in the system's `PATH` by default. It is not necessary to add it to your environment's `PATH` when installing the additional dependencies to `/usr/local`.
