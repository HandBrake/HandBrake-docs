---
Type:            article
State:           [ obsolete ]
Title:           Building HandBrake for Mac
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Mac
==========================

Building HandBrake for Mac requires an Apple computer with a 64-bit Intel processor running OS X 10.13.6 High Sierra or later[^mojave-dark-mode], and the following dependencies.

- [Xcode](https://developer.apple.com/xcode/) 10 or later
  - free Apple Developer registration required, or install from the Mac App Store
- [Command Line Tools for Xcode](https://developer.apple.com/download/more/)
  - free Apple Developer registration required, or install using `xcode-select --install`

Additional dependencies (may be built via included script):

- autoconf
- automake
- cmake (3.8.2 or later recommended)
- libtool
- nasm 2.13 or later
- pkg-config
- yasm 1.2.0 or later (1.3.0 or later recommended)

Install Xcode[^xcode-install] and open it once. Approve any prompts to install additional tools. You may quit Xcode after it has finished loading.

Install Command Line Tools for Xcode[^xcode-cli-tools].

    xcode-select --install

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

List available tags in the HandBrake 1.2.x release series, and check out the most recent.

    git tag --list | grep ^1\.2\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.2\.[0-9]+$' | tail -n 1)

You may build and install the additional dependencies using the included script. Feel free to choose a different output path, if desired.

    scripts/mac-toolchain-build /usr/local

This process will take a few minutes. If necessary, the script will provide you with instructions for adding the resulting binaries location to your environment's `PATH`[^default-path]. Do this now.

Build HandBrake. To build the command line interface only, disable the graphical interface by appending `--disable-xcode`.

    ./configure --launch-jobs=$(sysctl -n hw.ncpu) --launch

When complete, you will find `HandBrakeCLI` in the `build/xroot` directory. If the graphical interface is enabled, you will also find `HandBrake.app` in this directory.

Install HandBrake (optional).

    sudo make --directory=build install

To start over, simply remove the `build` directory.

    rm -rf build

[^mojave-dark-mode]: HandBrake must be built on macOS 10.4 Mojave or later to enable Dark Mode toolbar icons. Building on earlier macOS, even with latest Xcode, will result in Light Mode toolbar icons being displayed in Dark Mode.

[^xcode-install]: Make sure Xcode is installed at `/Applications/Xcode.app`. When using an Xcode Beta release, you may need to rename `Xcode-beta.app` to `Xcode.app`.

[^xcode-cli-tools]: When installing Command Line Tools for Xcode using the package installer (instead of `xcode-select --install`), make sure to install the package that corresponds to the installed Xcode version. A mismatch between the installed Xcode and Command Line Tools versions may cause problems.

[^default-path]: `/usr/local/bin` is included in the system's `PATH` by default. It is not necessary to add it to your environment's `PATH` when installing the additional dependencies to `/usr/local`.
