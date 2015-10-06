---
Title:           Downloading and installing HandBrake
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos
Copyright:       2015 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
License_URL:     https://handbrake.fr/docs/license.html
---

Downloading and installing HandBrake
====================================

HandBrake is available for Linux, OS X, and Windows, at the [official HandBrake website](https://handbrake.fr/).

## Downloading

To download HandBrake to your computer, click the download button on the HandBrake website's [Home page](https://handbrake.fr/). You can also choose a version for a specific operating system from the [Downloads page](https://handbrake.fr/downloads.php).

Experienced users may wish to try HandBrake's [nightly builds](https://handbrake.fr/nightly.php)[^nightly-builds].

## Installing

Once you've downloaded HandBrake for OS X, open the DMG file in your Downloads folder (your web browser, e.g. Safari/Chrome/Firefox, may do this for you automatically). Drag the HandBrake application to your Applications folder.

![Installing HandBrake on OS X](../images/install-osx.png)

HandBrake is now installed. You may eject the disk image and move it to the Trash.

## About OS X Gatekeeper

The first time you attempt to launch HandBrake, OS X may present this warning to you:

![Gatekeeper warning](../images/gatekeeper-warning.png)

HandBrake is not "signed" by Apple. This message doesn't mean anything is wrong; rather, it indicates that HandBrake is not part of Apple's paid program to validate OS X applications. Click OK to dismiss the dialog.

To instruct Gatekeeper to allow HandBrake to run, press the Control key, then click the HandBrake icon, and then select Open from the shortcut menu. Gatekeeper will ask whether you are certain you wish to open HandBrake, and you may confirm that you are by clicking Open[^gatekeeper].

![Gatekeeper bypass](../images/gatekeeper-bypass.png)

![Gatekeeper confirmation](../images/gatekeeper-confirm.png)

Now HandBrake is up and running. You should not have to repeat the Gatekeeper process until you update HandBrake.

## Launching HandBrake

You may launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon.

![HandBrake icon](../images/icon.png)

Read about the icon and more at HandBrake lore (TODO: link).

## Next steps

Continue to [Checking for updates](check-for-updates.html).

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^gatekeeper]: These instructions are taken directly from Apple's OS X Gatekeeper support documents. You can learn more about Gatekeeper [here](https://support.apple.com/kb/PH21769?locale=en_US) and [here](https://support.apple.com/en-us/HT202491).
