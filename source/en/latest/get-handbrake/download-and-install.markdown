---
Title:           Downloading and installing HandBrake
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos <bradley@bradleysepos.com>, Scott (s55)
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

To download HandBrake to your computer, click the download button on the HandBrake website's [Home page](https://handbrake.fr/). You can also choose a version for a specific operating system from the [Downloads page](https://handbrake.fr/downloads.php).

Experienced users may wish to try HandBrake's [nightly builds](https://handbrake.fr/nightly.php)[^nightly-builds].

<!-- .system-lin -->

## Installing on Linux

TODO

<!-- /.system-lin -->
<!-- .system-mac -->

## Installing on Mac

Once you've downloaded HandBrake for Mac, open the DMG file in your Downloads folder. Your web browser (e.g. Safari, Firefox, or Chrome) may do this for you automatically. Then drag the HandBrake application to your Applications folder.

![Installing HandBrake on OS X](../images/mac/install-osx.png)

HandBrake is now installed. You may eject the disk image and move it to the Trash.

### About OS X Gatekeeper

The first time you attempt to launch HandBrake, OS X may present this warning to you:

![Gatekeeper warning](../images/mac/gatekeeper-warning.png)

HandBrake is not "signed" by Apple. This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Apple's paid program to validate Mac applications. Click OK to dismiss the dialog.

To instruct Gatekeeper to allow HandBrake to run, press the Control key, then click the HandBrake icon, and then select Open from the shortcut menu. Gatekeeper will ask whether you are certain you wish to open HandBrake, and you may confirm that you are by clicking Open[^gatekeeper].

![Gatekeeper bypass](../images/mac/gatekeeper-bypass.png)

![Gatekeeper confirmation](../images/mac/gatekeeper-confirm.png)

Now HandBrake is up and running. You should not have to repeat the Gatekeeper process until you update HandBrake.

<!-- /.system-mac -->
<!-- .system-win -->

## Installing on Windows

Once you've downloaded the HandBrake installer, simply double click to run it.

If HandBrake is already installed on your computer, the installer wizard will offer to remove the old version before installing the current version. Select `OK` to proceed and review HandBrake's license terms.

![Installing HandBrake on Windows: removing old versions](../images/windows/uninstall.png "The installer will offer to remove old versions before installing the current version.")

![Installing HandBrake on Windows: the installer wizard](../images/windows/install-1.png "The HandBrake installer wizard.")

Next, the installer wizard will ask you where you wish to install HandBrake. Unless you have a specific reason to change this, select `Install` to continue. Once the installation is complete, you may select `Finish` to exit the installer wizard.

![Installing HandBrake on Windows: installation progress](../images/windows/install-2.png "The wizard reports progress while installing HandBrake.")

![Installing HandBrake on Windows: installation complete](../images/windows/install-finish.png "HandBrake installation complete.")

You will find shortcuts for launching HandBrake placed on both the Windows Desktop and Start Menu.

### Windows SmartScreen

When installing on Windows 8 or 10 with Windows SmartScreen enabled, you may see a message indicating that the HandBrake installer is not recognized by Windows.

![Windows SmartScreen](../images/windows/smartscreen-1.png "Windows SmartScreen may present this warning. Select More info to see more options.")

HandBrake is not "signed" by Microsoft. This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Microsoft's paid program to validate Windows applications.

By selecting `More info`, you will be able to select `Run anyway` to continue the installation.

![Windows SmartScreen - Run Anyway](../images/windows/smartscreen-2.png "Select Run anyway to dismiss the SmartScreen warning and continue installing HandBrake.")

<!-- /.system-win -->

## Launching HandBrake

You may launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon[^about-icon].

![HandBrake icon](../images/icon.png)![Double-clicking HandBrake icon](../images/icon-click.gif)

## Next steps

Continue to [Checking for updates](check-for-updates.html).

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^gatekeeper]: These instructions are taken directly from Apple's Gatekeeper support documents. You can learn more about Gatekeeper [here](https://support.apple.com/kb/PH21769?locale=en_US) and [here](https://support.apple.com/en-us/HT202491).

[^about-icon]: Read about the icon and more at HandBrake lore (TODO: link).
