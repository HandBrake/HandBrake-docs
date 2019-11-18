---
Type:            article
Title:           Downloading and installing HandBrake
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

Downloading and installing HandBrake
====================================

HandBrake is available for Linux, Mac, and Windows, at the [HandBrake website](https://handbrake.fr/).

This is the *only* official download source for HandBrake. For more information, see [Where to get HandBrake](where-to-get-handbrake.html).

## Downloading

*Most modern computers can run HandBrake. To be sure your system meets the minimum requirements, see [System requirements](../technical/system-requirements.html) in the technical documentation.*

To download HandBrake to your computer, click the download button on the HandBrake website's [Home page](https://handbrake.fr/). You can also choose a version for a specific operating system from the [Downloads page](https://handbrake.fr/downloads.php).

Experienced users may wish to try HandBrake's [nightly builds](https://handbrake.fr/nightly.php)[^nightly-builds].

## Verifying your download

### Checksums

The HandBrake Team publishes [checksums for all downloads on handbrake.fr](https://handbrake.fr/checksums.php) and the [Checksums article on GitHub](https://github.com/HandBrake/HandBrake/wiki/Checksums). You may use the provided checksums to verify the integrity of the files you download.

<!-- .system-linux -->

When installing on Linux using the official PPA, download integrity is verified automatically. Similarly, the integrity of source code managed using `git` is verified automatically.

To verify an official source distribution tarball or Flatpak bundle, consult your Linux distribution's documentation for instructions on how to verify checksums.

<!-- /.system-linux -->

<!-- .system-macos -->

On Mac, launch Terminal from your Applications > Utilities folder and use the `shasum` command. For example, if you downloaded HandBrake to your Downloads folder:

    shasum -a 1 ~/Downloads/HandBrake-*.dmg && shasum -a 256 ~/Downloads/HandBrake-*.dmg

Alternatively, the free third-party app [Hashsum](https://itunes.apple.com/us/app/hashsum/id1079442694?mt=12) available on the Mac App Store provides a convenient graphical interface for computing file checksums[^third-party-utilities-1].

<!-- /.system-macos -->

<!-- .system-windows -->

On Windows, Microsoft provides the [Microsoft File Checksum Integrity Verifier](https://www.microsoft.com/en-us/download/details.aspx?id=11533) command line utility for verifying checksums. Please see the [associated Microsoft help article](https://support.microsoft.com/en-us/help/841290/availability-and-description-of-the-file-checksum-integrity-verifier-utility) for more information and usage instructions.

Alternatively, free third-party apps [Compute Hash](http://www.subisoft.net/ComputeHash.aspx), [ExactFile](http://www.exactfile.com), and [MultiHasher](http://www.abelhadigital.com/multihasher) for Windows provide convenient graphical interfaces for computing file checksums[^third-party-utilities-2].

<!-- /.system-windows -->

*If the checksums for the file you downloaded do not match the ones published by the HandBrake Team, you should delete the file and try your download again.*

### OpenPGP

The HandBrake Team also publishes [OpenPGP signatures for all downloads on GitHub](https://github.com/HandBrake/HandBrake/releases). More information is available on the [OpenPGP article on GitHub](https://github.com/HandBrake/HandBrake/wiki/OpenPGP).

<!-- .system-linux -->

## Installing on Linux

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](where-to-get-handbrake.html) for more information.

### Ubuntu PPAs

The following instructions are for Ubuntu. They may also work on other `deb`-compatible distributions. For other Linux, please compile from the [official source code](https://github.com/HandBrake/HandBrake).

From the command line, add the [official releases PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-releases) to your system.

    sudo add-apt-repository ppa:stebbins/handbrake-releases
    sudo apt-get update

If you prefer HandBrake's nightly builds, add the [official git-snapshots PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-git-snapshots).

    sudo add-apt-repository ppa:stebbins/handbrake-git-snapshots
    sudo apt-get update

Install HandBrake.

    sudo apt-get install handbrake-cli handbrake-gtk

Run `HandBrakeCLI` to use HandBrake on the command line.

Run `ghb` to launch HandBrake's graphical user interface. You may wish to right-click on the icon and select "Lock to Launcher" for easy access in the future.

### Flatpak bundles

[Flatpak](https://flatpak.org/) bundles of HandBrake for Linux are available on the [HandBrake website](https://handbrake.fr/) and [Flathub](https://flathub.org/).

Install your distribution's `flatpak` package before running the following commands.

Install the latest HandBrake release from Flathub.

    flatpak --user install https://flathub.org/repo/appstream/fr.handbrake.ghb.flatpakref

You can later update the HandBrake Flatpak to the latest release on Flathub by running the following.

    flatpak --user update fr.handbrake.ghb

If you prefer HandBrake's nightly builds, download and install the latest available version (requires your distribution's `curl` package).

    curl -O https://nightly.handbrake.fr/HandBrake-latest-master-x86_64.flatpak
    flatpak install HandBrake-latest-master-x86_64.flatpak

Run `flatpak run fr.handbrake.ghb` to launch HandBrake's graphical user interface, or `flatpak run --command=HandBrakeCLI fr.handbrake.ghb` to use HandBrake on the command line.

<!-- /.system-linux -->
<!-- .system-macos -->

## Installing on Mac

Once you've downloaded HandBrake for Mac, open the disk image in your Downloads folder. Your web browser (e.g. Safari, Firefox, or Chrome) may do this for you automatically. Then drag the HandBrake application to your Applications folder.

![Opening HandBrake disk image](../../images/mac/download-file-1.1.0.png "Open the HandBrake disk image you downloaded. Your web browser may do this automatically.")

![Installing HandBrake on Mac](../../images/mac/install-1.1.0.png "Drag HandBrake to your Applications folder to install it on your Mac.")

HandBrake is now installed. You may eject the disk image and move it to the Trash.

### Mac Gatekeeper

The first time you attempt to launch HandBrake, your Mac may present this message to you[^gatekeeper-disabled]:

![Mac Gatekeeper message](../../images/mac/gatekeeper-message-1.1.0.png "Gatekeeper may present this message when launching HandBrake for the first time.")

This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Apple's paid program to validate Mac applications. Select `OK` to dismiss the Gatekeeper message.

Hold down the `Control` key and select the HandBrake icon to bring up the shortcut menu. Select `Open` and your Mac will ask whether you are certain you wish to open HandBrake. Confirm that you want to trust HandBrake by again selecting `Open`.[^gatekeeper-instructions]

![Opening HandBrake using Finder's shortcut menu](../../images/mac/shortcut-menu-open-1.1.0.png "Launching HandBrake using the Open option in the Finder's shortcut menu will bypass the initial Gatekeeper message.")

![Gatekeeper message with Open option](../../images/mac/gatekeeper-message-quarantine-1.1.0.png "Gatekeeper may also present this message when launching HandBrake for the first time. Selecting Open will tell Gatekeeper to trust HandBrake.")

Now HandBrake is up and running. You should not have to repeat this process in the near future.

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

### Windows SmartScreen

When installing on Windows 8.1 or 10 with Windows SmartScreen enabled, you may see a message indicating that the HandBrake installer is not recognized by Windows.

![Windows SmartScreen](../../images/windows/smartscreen-1-1.0.0.png "Windows SmartScreen may present this message. Select More info to see more options.")

HandBrake is not "signed" by Microsoft. This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Microsoft's paid program to validate Windows applications.

By selecting `More info`, you will be able to select `Run anyway` to continue the installation.

![Windows SmartScreen - Run Anyway](../../images/windows/smartscreen-2-1.0.0.png "Select Run anyway to dismiss the SmartScreen message and continue installing HandBrake.")

<!-- /.system-windows -->

## Launching HandBrake

You may launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon. Depending on your system settings, a single click may suffice.

![HandBrake icon](../../images/icon-1.1.0.png)![Double-clicking HandBrake icon](../../images/icon-click-1.1.0.gif)

<!-- .continue -->

## Next steps

<!-- .success -->

Continue to [Checking for updates](check-for-updates.html).

<!-- /.success -->

<!-- /.continue -->

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^third-party-utilities-1]: HandBrake is not associated with any third-party checksum utilities. Only use software from vendors you trust.

[^third-party-utilities-2]: HandBrake is not associated with any third-party checksum utilities. Only use software from vendors you trust.

[^gatekeeper-disabled]: If Gatekeeper is disabled on your Mac, you may not see this message.

[^gatekeeper-instructions]: These instructions are taken directly from Apple's Gatekeeper support documents. You can learn more about Gatekeeper [here](https://support.apple.com/en-us/HT202491).
