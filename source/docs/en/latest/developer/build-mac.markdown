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

Dependencies:

- [Xcode](https://developer.apple.com/xcode/) 7.2.1 or later
  - free Apple Developer registration required, or install from the Mac App Store
- [Command Line Tools for Xcode](https://developer.apple.com/download/more/)
  - free Apple Developer registration required, or install using `xcode-select --install`

Additional dependencies (may be built via script):

- autoconf
- automake
- cmake 3.3.0 or later
- libtool
- pkg-config
- yasm 1.3.0 or later

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

You may build and install the additional dependencies to `/usr/local/` using the included `mac-toolchain-build` script.

    scripts/mac-toolchain-build

Build HandBrake.

    ./configure --launch-jobs=$(sysctl -n hw.ncpu 2>/dev/null) --launch

When complete, you will find `HandBrake.app` and `HandBrakeCLI` in the `build/xroot` directory.
