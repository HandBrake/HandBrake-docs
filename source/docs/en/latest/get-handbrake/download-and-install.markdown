---
Type:            article
Title:           Downloading and installing HandBrake
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

Downloading and installing HandBrake
====================================

HandBrake is available for Linux, Mac, and Windows, at the [HandBrake website](https://handbrake.fr/).

This is the *only* official download source for HandBrake. For more information, see [Where to get HandBrake](where-to-get-handbrake.html).

## Downloading

*Most modern computers can run HandBrake. To be sure your system meets the minimum requirements, see [System requirements](../technical/system-requirements.html) in the technical documentation.*

To download HandBrake to your computer, click the download button on the HandBrake website's [Home page](https://handbrake.fr/). You can also choose a version for a specific operating system from the [Downloads page](https://handbrake.fr/downloads.php).

Experienced users may wish to try HandBrake's [nightly builds](https://handbrake.fr/nightly.php)[^nightly-builds].

<!-- .system-lin -->

## Installing on Linux

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](where-to-get-handbrake.html) for more information.

The following instructions are for Ubuntu. They may also work on other `deb`-compatible distributions. For other Linux, please compile from the [official source code](https://github.com/HandBrake/HandBrake).

From the command line, add the official releases PPA to your system.

    sudo add-apt-repository ppa:stebbins/handbrake-releases
    sudo apt-get update

If you prefer HandBrake's nightly builds, add the official git-snapshots PPA.

    sudo add-apt-repository ppa:stebbins/handbrake-git-snapshots
    sudo apt-get update

Install HandBrake.

    sudo apt-get install handbrake-gtk  # graphical
    sudo apt-get install handbrake-cli  # command line

You may now launch the graphical user interface by running `ghb`. The command line binary is named `HandBrakeCLI`.

<!-- /.system-lin -->
<!-- .system-mac -->

## Installing on Mac

Once you've downloaded HandBrake for Mac, open the DMG file in your Downloads folder. Your web browser (e.g. Safari, Firefox, or Chrome) may do this for you automatically. Then drag the HandBrake application to your Applications folder.

![Installing HandBrake on Mac](../images/mac/install.png "Drag HandBrake to your Applications folder to install it on your Mac.")

HandBrake is now installed. You may eject the disk image and move it to the Trash.

### Mac Gatekeeper

The first time you attempt to launch HandBrake, your Mac may present this message to you[^gatekeeper-disabled]:

![Mac Gatekeeper message](../images/mac/gatekeeper-message.png "Gatekeeper may present this message when launching HandBrake for the first time.")

This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Apple's paid program to validate Mac applications. Select `OK` to dismiss the Gatekeeper message.

Hold down the `Control` key and select the HandBrake icon to bring up the shortcut menu. Select `Open` and your Mac will ask whether you are certain you wish to open HandBrake. Confirm that you want to trust HandBrake by again selecting `Open`.[^gatekeeper-instructions]

![Opening HandBrake using Finder's shortcut menu](../images/mac/shortcut-menu-open.png "Launching HandBrake using the Open option in the Finder's shortcut menu will bypass the initial Gatekeeper message.")

![Gatekeeper message with Open option](../images/mac/gatekeeper-message-quarantine.png "Gatekeeper may also present this message when launching HandBrake for the first time. Selecting Open will tell Gatekeeper to trust HandBrake.")

Now HandBrake is up and running. You should not have to repeat this process in the near future.

<!-- /.system-mac -->
<!-- .system-win -->

## Installing on Windows

Once you've downloaded the HandBrake installer, simply double click to run it.

If HandBrake is already installed on your computer, the installer will offer to remove the previous version before installing the current version. Select `OK` to proceed and review HandBrake's license terms.

![HandBrake Windows installer: removing previous versions](../images/windows/uninstall.png "The HandBrake installer will offer to remove previous versions before installing the current version.")

![HandBrake Windows installer](../images/windows/install-1.png "HandBrake's Windows installer.")

Next, the installer will ask you where you wish to install HandBrake. Unless you have a specific reason to change this, select `Install` to continue. Once the installation is complete, you may select `Finish` to exit the installer.

![HandBrake for Windows installation progress](../images/windows/install-2.png "The installer will report its progress.")

![HandBrake for Windows installation complete](../images/windows/install-finish.png "HandBrake is now installed.")

You will find shortcuts for launching HandBrake placed on both the Windows Desktop and Start Menu.

### Windows SmartScreen

When installing on Windows 8 or 10 with Windows SmartScreen enabled, you may see a message indicating that the HandBrake installer is not recognized by Windows.

![Windows SmartScreen](../images/windows/smartscreen-1.png "Windows SmartScreen may present this message. Select More info to see more options.")

HandBrake is not "signed" by Microsoft. This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Microsoft's paid program to validate Windows applications.

By selecting `More info`, you will be able to select `Run anyway` to continue the installation.

![Windows SmartScreen - Run Anyway](../images/windows/smartscreen-2.png "Select Run anyway to dismiss the SmartScreen message and continue installing HandBrake.")

<!-- /.system-win -->

## Launching HandBrake

You may launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon[^about-icon]. Depending on your system settings, a single click may suffice.

![HandBrake icon](../images/icon.png)![Double-clicking HandBrake icon](../images/icon-click.gif)

<!-- .continue -->

## Next steps

Continue to [Checking for updates](check-for-updates.html).

<!-- /.continue -->

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^gatekeeper-disabled]: If Gatekeeper is disabled on your Mac, you may not see this message.

[^gatekeeper-instructions]: These instructions are taken directly from Apple's Gatekeeper support documents. You can learn more about Gatekeeper [here](https://support.apple.com/kb/PH21769?locale=en_US) and [here](https://support.apple.com/en-us/HT202491).

[^about-icon]: Read about the icon and more at HandBrake lore (TODO: link).
