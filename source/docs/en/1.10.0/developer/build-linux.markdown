---
Type:            article
Title:           Building HandBrake for Linux
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.10.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Linux
============================

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html) for more information.

## Installing dependencies

Dependency installation instructions are available for the following distributions.

- [Alpine](install-dependencies-alpine.html)
- [Arch](install-dependencies-arch.html)
- [Clear](install-dependencies-clear.html)
- [Debian](install-dependencies-debian.html)
- [Enterprise Linux](install-dependencies-el.html)
- [Fedora](install-dependencies-fedora.html)
- [Gentoo](install-dependencies-gentoo.html)
- [Mageia](install-dependencies-mageia.html)
- [OpenSUSE](install-dependencies-opensuse.html)
- [Solus](install-dependencies-solus.html)
- [Ubuntu](install-dependencies-ubuntu.html)
- [Void](install-dependencies-void.html)


## Building HandBrake

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake
	
List available tags in the HandBrake 1.10.x release series, and check out the most recent.

    git tag --list | grep ^1\.10\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.10\.[0-9]+$' | tail -n 1)

Build HandBrake. 

    ./configure --launch-jobs=$(nproc) --launch
    
The following optional parameters are commonly used:

| Parameter        | Description         |
|------------------|---------------------|
| --enable-qsv     | Enable support for the Intel QuickSync Video Decoder and Encoder |
| --enable-nvdec   | Enable support for the Nvidia NVDec Decoder |
| --enable-vce     | Enable support for the AMD VCN video encoder |
| --enable-libdovi | Enable support for Dolby Vision |
| --disable-gtk    | Build only HandBrakeCLI on Linux |

For a full listing of options, use the command:

    ./configure --help
 
When complete, you will find `HandBrakeCLI` in the `build` directory. If the graphical interface is enabled, you will also find `ghb` in the `build/gtk/src` directory.

Install HandBrake (optional). When installing the graphical interface, icon and desktop files for the Applications menu will be also installed.

    sudo make --directory=build install
    
If you wish to then uninstall
    
    sudo make --directory=build uninstall

To start over, simply remove the `build` directory.

    rm -rf build
