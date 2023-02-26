---
Type:            article
Title:           Downloading and installing HandBrake
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Downloading and installing HandBrake
====================================

HandBrake is available for Linux, Mac, and Windows, at the [HandBrake website](https://handbrake.fr/).

This is the *only* official download source for HandBrake. For more information, see [Where to get HandBrake](where-to-get-handbrake.html).

## Downloading

*Most modern computers can run HandBrake. To be sure your system meets the minimum requirements, see [System requirements](../technical/system-requirements.html) in the technical documentation.*

To download HandBrake to your computer, click the download button on the HandBrake website's [Home page](https://handbrake.fr/). You can also choose a version for a specific operating system from the [Downloads page](https://handbrake.fr/downloads.php).

Experienced users may wish to try HandBrake's [development snapshot builds](https://github.com/HandBrake/HandBrake-snapshots)[^nightly-builds] that are available via GitHub.

## Verifying your download

### Checksums

The HandBrake Team publishes [checksums for all downloads on handbrake.fr](https://handbrake.fr/checksums.php) and the [Checksums article on GitHub](https://github.com/HandBrake/HandBrake/wiki/Checksums). You may use the provided checksums to verify the integrity of the files you download.

<!-- .system-linux -->

When installing on Linux from Flathub, download integrity is verified automatically. Similarly, the integrity of source code managed using `git` is verified automatically.

To verify an official source distribution tarball or Flatpak bundle, consult your Linux distribution's documentation for instructions on how to verify checksums.

<!-- /.system-linux -->

<!-- .system-macos -->

On Mac, launch Terminal from your Applications > Utilities folder and use the `shasum` command. For example, if you downloaded HandBrake to your Downloads folder:

    shasum -a 256 ~/Downloads/HandBrake-*.dmg

Alternatively, the free third-party app [Hashsum](https://itunes.apple.com/us/app/hashsum/id1079442694?mt=12) available on the Mac App Store provides a convenient graphical interface for computing file checksums[^third-party-utilities-1].

<!-- /.system-macos -->

<!-- .system-windows -->

On Windows, launch a Command Prompt Window and use the `certutil` command. For example, if you downloaded HandBrake to your Downloads folder:

    cd Downloads
    certUtil -hashfile <filename> SHA256
    
Alternatively, free third-party apps [7-Zip](https://www.7-zip.org)  [Compute Hash](http://www.subisoft.net/ComputeHash.aspx), [ExactFile](http://www.exactfile.com), and [MultiHasher](http://www.abelhadigital.com/multihasher) for Windows provide convenient graphical interfaces for computing file checksums[^third-party-utilities-2].

<!-- /.system-windows -->

*If the checksums for the file you downloaded do not match the ones published by the HandBrake Team, you should delete the file and try your download again.*

### OpenPGP

The HandBrake Team also publishes [OpenPGP signatures for all downloads on GitHub](https://github.com/HandBrake/HandBrake/releases). More information is available on the [OpenPGP article on GitHub](https://github.com/HandBrake/HandBrake/wiki/OpenPGP).

<!-- .system-linux -->

## Installing on Linux

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](where-to-get-handbrake.html) for more information.

### Flathub Flatpak

The most convenient way to install HandBrake and manage updates is to install the release we publish to Flathub. Please see Flathub's Quick Setup page for instructions to enable Flatpak and Flathub on your Linux distribution.

Once Flathub is enabled on your system, you may install HandBrake directly from Flathub, from the Gnome Software GUI ('gnome-software'), or from the command line.

Installing from Flathub and Gnome Software are fairly self explanatory. To install from the command line for system wide use:

    flatpak install fr.handbrake.ghb

During install it will ask for your password (assuming you have sudo privilege). Once installed, HandBrake will be available to all users of the system.

To install without sudo privileges:

    flatpak --user install fr.handbrake.ghb
    
Once installed, HandBrake will only be available to the user that installed it.

### Flatpak Bundles

Alternatively, you may manually download, verify, and install [Flatpak](https://flatpak.org/) bundles of HandBrake for Linux which are available on the [HandBrake download page](https://handbrake.fr/downloads.php), the [HandBrakeCLI download page](https://handbrake.fr/downloads2.php) or [development snapshot builds page](https://github.com/HandBrake/HandBrake-snapshots)[^nightly-builds].

Install your distribution's `flatpak` package before running the following commands.

Install the latest HandBrake GUI release (after download and verify)

    flatpak --user install HandBrake-1.4.2-x86_64.flatpak

Install the latest HandBrake CLI release (after download and verify)

    flatpak --user install HandBrakeCLI-1.4.2-x86_64.flatpak

Install the nightly build (example, filename changes nightly)

    Download the latest snapshot from the [development snapshot builds](https://github.com/HandBrake/HandBrake-snapshots)[^nightly-builds]
    flatpak --user install fr.handbrake.ghb-20210720182537-a01549c9c-master-x86_64.flatpak

<!-- /.system-linux -->
<!-- .system-macos -->

## Installing on Mac

Once you've downloaded HandBrake for Mac, open the disk image in your Downloads folder. Your web browser (e.g. Safari, Firefox, or Chrome) may do this for you automatically. Then drag the HandBrake application to your Applications folder.

![Opening HandBrake disk image](../../images/mac/download-file-1.1.0.png "Open the HandBrake disk image you downloaded. Your web browser may do this automatically.")

![Installing HandBrake on Mac](../../images/mac/install-1.1.0.png "Drag HandBrake to your Applications folder to install it on your Mac.")

HandBrake is now installed. You may eject the disk image and move it to the Trash.

<!-- /.system-macos -->
<!-- .system-windows -->

## Installing on Windows

Once you've downloaded the HandBrake installer, simply double click to run it.

If HandBrake is already installed on your computer, the installer will offer to remove the previous version before installing the current version. Select `OK` to proceed and review HandBrake's license terms.

![HandBrake Windows installer: removing previous versions](../../images/windows/uninstall-1.0.0.png "The HandBrake installer will offer to remove previous versions before installing the current version.")

![HandBrake Windows installer](../../images/windows/install-1-1.0.0.png "HandBrake's Windows installer.")

Next, the installer will ask you where you wish to install HandBrake. Unless you have a specific reason to change this, select `Install` to continue. Once the installation is complete, you may select `Finish` to exit the installer.

![HandBrake for Windows installation progress](../../images/windows/install-2-1.0.0.png "The installer will report its progress.")

![HandBrake for Windows installation complete](../../images/windows/install-finish-1.0.0.png "HandBrake is now installed.")

You will find shortcuts for launching HandBrake placed on both the Windows Desktop and Start Menu.

If you do not already have Microsoft .NET Desktop Runtime 6.0 installed, you will also need to install this from the [Microsoft .NET Desktop Runtime Download Page](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.4-windows-x64-installer)

<!-- /.system-windows -->

## Launching HandBrake

You may launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon. Depending on your system settings, a single click may suffice.

![HandBrake icon](../../images/icon-1.1.0.png)![Double-clicking HandBrake icon](../../images/icon-click-1.1.0.gif)

<!-- .continue -->


<!-- .system-linux -->
### Launching HandBrake Flatpak from the command line

To launch the HandBrake GUI from the command line

    flatpak run fr.handbrake.ghb

The HandBrake GUI Flatpak package also includes the CLI which may be run with

    flatpak run --command=HandBrakeCLI fr.handbrake.ghb

Additional HandBrakeCLI options go at the end of the above command line.

If you installed the stand-alone HandBrakeCLI Flatpak package, it can be run with

    flatpak run fr.handbrake.HandBrakeCLI

The developers of Flatpak have also provided some useful helper scripts that get installed whenever a Flatpak package is installed.  Unfortunately, the PATH environment usually does not include the location these are installed to.  If you wish to use these helper scripts, update your PATH (usually performed in a shell initialization file such as ~/.bash_profile)

    export PATH=$PATH:$HOME/.local/share/flatpak/exports/bin:/var/lib/flatpak/exports/bin

Once your PATH includes these directories, the GUI may be run with

    fr.handbrake.ghb

And the CLI may be run with

    fr.handbrake.HandBrakeCLI

<!-- /.system-linux -->


## Next steps

<!-- .success -->

Continue to [Checking for updates](check-for-updates.html).

<!-- /.success -->

<!-- /.continue -->

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^third-party-utilities-1]: HandBrake is not associated with any third-party checksum utilities. Only use software from vendors you trust.

[^third-party-utilities-2]: HandBrake is not associated with any third-party checksum utilities. Only use software from vendors you trust.
