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

HandBrake is available for Linux, OS X, and Windows, at the [official HandBrake website](https://handbrake.fr/).

#### Warning about 3rd party download sites

Please be aware that this is the *only* official download source for HandBrake. If you download from any other website, we highly recommend you check the download checksums against those published on our website: [Checksum List](https://handbrake.fr/checksums.php). This will ensure you get an official copy of HandBrake and not one that may contain unwanted extras.

## Downloading

To download HandBrake to your computer, click the download button on the HandBrake website's [Home page](https://handbrake.fr/). You can also choose a version for a specific operating system from the [Downloads page](https://handbrake.fr/downloads.php).

Experienced users may wish to try HandBrake's [nightly builds](https://handbrake.fr/nightly.php)[^nightly-builds].

## Installing on MacOS

Once you've downloaded HandBrake for OS X, open the DMG file in your Downloads folder (your web browser, e.g. Safari/Chrome/Firefox, may do this for you automatically). Drag the HandBrake application to your Applications folder.

![Installing HandBrake on OS X](../images/install-osx.png)

HandBrake is now installed. You may eject the disk image and move it to the Trash.

#### About OS X Gatekeeper

The first time you attempt to launch HandBrake, OS X may present this warning to you:

![Gatekeeper warning](../images/gatekeeper-warning.png)

HandBrake is not "signed" by Apple. This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Apple's paid program to validate OS X applications. Click OK to dismiss the dialog.

To instruct Gatekeeper to allow HandBrake to run, press the Control key, then click the HandBrake icon, and then select Open from the shortcut menu. Gatekeeper will ask whether you are certain you wish to open HandBrake, and you may confirm that you are by clicking Open[^gatekeeper].

![Gatekeeper bypass](../images/gatekeeper-bypass.png)

![Gatekeeper confirmation](../images/gatekeeper-confirm.png)

Now HandBrake is up and running. You should not have to repeat the Gatekeeper process until you update HandBrake.

### Launching HandBrake

You may launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon[^about-icon].

![HandBrake icon](../images/icon.png)![Double-clicking HandBrake icon](../images/icon-click.gif)


## Installing on Windows

#### Windows SmartScreen

If you are running Windows 8 or 10 and have Windows Smart Screen turned on, you may receive the following message.

![Windows SmartScreen](../images/win-smartscreen-1.png "Windows SmartScreen")

If you press "More Info", you'll be presented with the following dialog.

![Windows SmartScreen - Run Anyway](../images/win-smartscreen-2.png "Windows SmartScreen, Run Anyway")

HandBrake is not "signed" application, so Microsoft does not know about us.
If you click "Run Anyway",  our installer will launch.

#### The Installation Wizard

Once you've downloaded the HandBrake Installer, simply double click to run it.

If you already have HandBrake installed, you'll be offered a choice to remove the old one before continuing. Press "OK" and follow the wizard.

![Installing HandBrake Windows - Uninstall old version](../images/win-uninstall.png "The HandBrake installer will offer to remove old versions before installing the current version.")

Otherwise, you'll be presented with a wizard that walks you through the process.
You'll be asked to agree to our license terms. 

![Installing HandBrake Windows - Installer Wizard](../images/win-install-1.png "The HandBrake installer wizard.")

Next, you'll get to choose where you wish to Install HandBrake to.  The default is fine for most.

![Installing HandBrake Windows - Installer Wizard - Part 2](../images/win-install-2.png "The HandBrake installer wizard, continued.")

Finally, Press "Finish". You'll find a shortcut on your Desktop and Start menu which you can use to start the applicaiton.

![Installing HandBrake Windows - Finish](../images/win-install-finish.png "HandBrake installation complete.")

## Next steps

Continue to [Checking for updates](check-for-updates.html).

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^gatekeeper]: These instructions are taken directly from Apple's OS X Gatekeeper support documents. You can learn more about Gatekeeper [here](https://support.apple.com/kb/PH21769?locale=en_US) and [here](https://support.apple.com/en-us/HT202491).

[^about-icon]: Read about the icon and more at HandBrake lore (TODO: link).
