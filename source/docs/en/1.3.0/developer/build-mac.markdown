---
Type:            article
Title:           Building HandBrake for Mac
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

Building HandBrake for Mac
==========================

Building HandBrake for Mac requires an Apple computer with a 64-bit Intel processor running macOS 10.14.3 Mojave or later, and the following dependencies.

- [Xcode](https://developer.apple.com/xcode/) 10.3 or later
  - free Apple Developer registration required, or install from the Mac App Store
- [Command Line Tools for Xcode](https://developer.apple.com/download/more/)
  - free Apple Developer registration required, or install using `xcode-select --install`
- [Python](https://www.python.org/downloads/) 3.7.0 or later
  - ensure your Python installation has properly created `/Library/Frameworks/Python.framework/Versions/<version>`

Additional dependencies (may be built via included script):

- autoconf 2.69 or later
- automake 1.15 or later
- cmake 3.1.0 or later
- libtool 2.4.6 or later
- meson 0.47.0 or later
- nasm 2.13 or later
- ninja 1.8.0 or later
- pkg-config 0.29.0 or later

Install Xcode and open it once. Approve any prompts to install additional tools. You may quit Xcode after it has finished loading.

Install Command Line Tools for Xcode using the package installer provided by Apple[^xcode-cli-tools], or using `xcode-select`.

    xcode-select --install

Install Python 3 using the latest package installer provided by [Python](https://www.python.org/downloads/).

If you installed Python 3 from a different source, such as Homebrew, it is necessary to check whether Python 3 can properly open HTTPS connections. The following test prints `0` for success, or `1` for failure. Upon failure, you will need to ensure SSL certificates are installed and accessible to your Python 3 installation, or remove the installation and reinstall from the official package.

    python3 -c 'from urllib.request import urlopen; test = lambda x=exec("def f():\n try:\n  urlopen(\"https://handbrake.fr\", timeout=10)\n  return 0\n except:  return 1"): f(); result = test(); exit(result)'; echo $?

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

List available tags in the HandBrake 1.3.x release series, and check out the most recent.

    git tag --list | grep ^1\.3\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.3\.[0-9]+$' | tail -n 1)

You may build and install the additional dependencies using the included script. Feel free to choose a different output path, if desired.

    scripts/mac-toolchain-build /usr/local

This process will take a few minutes. If necessary, the script will provide you with instructions for adding the resulting binaries location to your environment's `PATH`[^default-path]. Do this now.

Build HandBrake. To build the command line interface only, disable the graphical interface by appending `--disable-xcode`.

    ./configure --launch-jobs=$(sysctl -n hw.activecpu) --launch

When complete, you will find `HandBrakeCLI` in the `build/xroot` directory. If the graphical interface is enabled, you will also find `HandBrake.app` in this directory.

Install HandBrake (optional).

    sudo make --directory=build install

To start over, simply remove the `build` directory.

    rm -rf build

[^xcode-cli-tools]: When installing Command Line Tools for Xcode using the package installer (instead of `xcode-select --install`), make sure to install the package that corresponds to the installed Xcode version. A mismatch between the installed Xcode and Command Line Tools versions may cause problems.

[^default-path]: `/usr/local/bin` is included in the system's `PATH` by default. It is not necessary to add it to your environment's `PATH` when installing the additional dependencies to `/usr/local`.
