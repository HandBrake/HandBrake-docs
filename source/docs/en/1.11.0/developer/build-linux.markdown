---
Type:            article
Title:           Building HandBrake for Linux
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.11.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Linux
============================

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.markdown) for more information.

## Installing dependencies

Dependency installation instructions are available for the following distributions.

- [Alpine](install-dependencies-alpine.markdown)
- [Arch](install-dependencies-arch.markdown)
- [Clear](install-dependencies-clear.markdown)
- [Debian](install-dependencies-debian.markdown)
- [Enterprise Linux](install-dependencies-el.markdown)
- [Fedora](install-dependencies-fedora.markdown)
- [Gentoo](install-dependencies-gentoo.markdown)
- [Mageia](install-dependencies-mageia.markdown)
- [OpenSUSE](install-dependencies-opensuse.markdown)
- [Solus](install-dependencies-solus.markdown)
- [Ubuntu](install-dependencies-ubuntu.markdown)
- [Void](install-dependencies-void.markdown)

## Building HandBrake

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

List available tags in the HandBrake 1.11.x release series, and check out the most recent.

    git tag --list | grep ^1\.11\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.11\.[0-9]+$' | tail -n 1)

You can enable or disable various HandBrake features via additional configure parameters. The following is a short list of common parameters; see `./configure --help` for a complete list.

| Parameter        | Description                                                  |
|------------------|--------------------------------------------------------------|
| --enable-fdk-aac | Enable FDK-AAC audio encoder[^fdk-aac-license]               |
| --enable-nvenc   | Enable Nvidia NVENC video encoder                            |
| --enable-nvdec   | Enable Nvidia NVDEC video decoder                            |
| --enable-vaapi   | Enable VAAPI video encoder/decoder                           |
| --enable-qsv     | Enable Intel Quick Sync Video encoder/decoder                |
| --enable-vce     | Enable AMD VCN video encoder                                 |
| --enable-amfdec  | Enable AMD VCN video decoder                                 |
| --enable-libdovi | Enable libdovi for Dolby Vision HDR support                  |
| --disable-gtk    | Disable the GTK graphical interface; only build HandBrakeCLI |

Build HandBrake. Append any desired configure parameters to this command.

    ./configure --launch-jobs=$(nproc) --launch

When building completes successfully, these important artifacts are produced:

- `HandBrakeCLI` in the `build` directory, which is the HandBrake command line interface.
- `ghb` in the `build/gtk/src` directory, which is the HandBrake [GUI](abbr:Graphical User Interface) for Linux. It will not exist if you disabled the graphical interface by configuring with `--disable-gtk`.

Install HandBrake (optional). When installing the graphical interface, icon and desktop files for the Applications menu are also installed.

    sudo make --directory=build install

To uninstall HandBrake, run the following.

    sudo make --directory=build uninstall

## Troubleshooting

If building HandBrake fails, continue building as much as possible, then build serially (only one job at a time) and investigate any errors printed at the end.

    make --directory=build --jobs=$(nproc) --keep-going || make --directory=build --jobs=1

Build failures are often due to missing dependencies. Ensure you have followed all of the above instructions for installing dependencies.

To start over, simply remove the `build` directory.

    rm -rf build

If you still have issues, someone may be able to help via HandBrake's [Community support](../help/community-support.markdown) channels.

[^fdk-aac-license]: The FDK AAC encoder is only provided in source code form and is not fully compatible with the GNU General Public License Version 2 used by HandBrake. Builds including FDK AAC must be for personal use only and may not be distributed. Do not share the build product with others.