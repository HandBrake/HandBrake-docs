---
Type:            article
Title:           Building HandBrake for Mac
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.9.0
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

Building HandBrake for Mac requires an Apple computer with a 64-bit Intel processor running macOS 12.6.7 Monterey or later, and the following dependencies.

- [Xcode](https://developer.apple.com/xcode/) 14.3.1 or later
  - free Apple Developer registration required, or install from the Mac App Store

Additional dependencies (may be built via included script):

- autoconf 2.71 or later
- automake 1.16.5 or later
- cmake 3.27.4 or later
- libtool 2.4.7 or later
- meson 1.2.1 or later
- nasm 2.15.05 or later
- ninja 1.11.1 or later
- pkg-config 0.29.2 or later

Optional dependencies (required by libdovi)

- [Rust](https://www.rust-lang.org/tools/install) 1.64.0 or later
  - Cross-compiling requires adding an additional target:
    - `rustup target add aarch64-apple-darwin` for cross-compiling for Apple Silicon on an Intel Mac
    - `rustup target add x86_64-apple-darwin` for cross-compiling for Intel on an Apple Silicon Mac
- [openssl](https://www.openssl.org)
  - may be built via included script
- [cargo-c](https://github.com/lu-zero/cargo-c)
  - Can be installed by running `cargo install cargo-c`

Install Xcode and open it once. Approve any prompts to install additional tools. You may quit Xcode after it has finished loading.

If you installed Python 3 from a different source, such as Homebrew, it is necessary to check whether Python 3 can properly open HTTPS connections. The following test prints `0` for success, or `1` for failure. Upon failure, you will need to ensure SSL certificates are installed and accessible to your Python 3 installation, or remove the installation and reinstall from the official package.

    python3 -c 'from urllib.request import urlopen; test = lambda x=exec("def f():\n try:\n  urlopen(\"https://handbrake.fr\", timeout=10)\n  return 0\n except:  return 1"): f(); result = test(); exit(result)'; echo $?

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake
    
List available tags in the HandBrake 1.9.x release series, and check out the most recent.

    git tag --list | grep ^1\.9\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.9\.[0-9]+$' | tail -n 1)

You may build and install the additional dependencies using the included script. Feel free to choose a different output path, if desired.

    sudo scripts/mac-toolchain-build /usr/local

This process will take a few minutes. If necessary, the script will provide you with instructions for adding the resulting binaries location to your environment's `PATH`[^default-path]. Do this now.

Build HandBrake. To build the command line interface only, disable the graphical interface by appending `--disable-xcode`.

    ./configure --launch-jobs=$(sysctl -n hw.activecpu) --launch

When complete, you will find `HandBrakeCLI` in the `build/xroot` directory. If the graphical interface is enabled, you will also find `HandBrake.app` in this directory.

Install HandBrake (optional).

    sudo make --directory=build install

To start over, simply remove the `build` directory.

    rm -rf build

[^default-path]: `/usr/local/bin` is included in the system's `PATH` by default. It is not necessary to add it to your environment's `PATH` when installing the additional dependencies to `/usr/local`.
