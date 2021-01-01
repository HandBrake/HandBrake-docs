---
Type:            article
Title:           Troubleshooting common issues
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Troubleshooting common issues
=============================

<!-- .system-linux -->

## HandBrake for Linux

### Cannot find HandBrake executable

The HandBrake graphical interface executable is `ghb`. Simply launch your terminal application and type `ghb` followed by the return key.

Please consult your distribution's documentation for how to add HandBrake to your application launcher.

### General troubleshooting

Try each of the following steps until HandBrake is working again.

1. Make sure you have official HandBrake and not a broken third-party build; see [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html)
2. Restart your computer
3. Delete your HandBrake configuration data and presets (replace username with your own)
    - /home/username/.config/ghb
4. Install/reinstall the latest version of HandBrake; see [Downloading and installing HandBrake](../get-handbrake/download-and-install.html)

If the above does not solve your issue, someone may be able to help via HandBrake's [Community support](community-support.html) channels.

<!-- /.system-linux -->
<!-- .system-macos -->

## HandBrake for Mac

### HandBrake does not launch

*HandBrake releases since version 1.1.0 are signed with an Apple Developer Certificate. These instructions are only applicable to [nightly builds](https://handbrake.fr/nightly.php)[^nightly-builds].*

Unlike HandBrake releases, HandBrake nightly builds are not code signed using an Apple Developer Certificate. The first time you attempt to launch a HandBrake nightly or snapshot build, your Mac may present this message to you[^gatekeeper-disabled]:

![Mac Gatekeeper message](../../images/mac/gatekeeper-message-1.1.0.png "Gatekeeper may present this message when launching a HandBrake nightly build for the first time.")

Select `OK` to dismiss the Gatekeeper message, then hold down the `Control` key and select the HandBrake icon to bring up the shortcut menu. Select `Open` and your Mac will ask whether you are certain you wish to open HandBrake. Confirm that you want to trust HandBrake by again selecting `Open`.[^gatekeeper-instructions]

![Opening HandBrake using Finder's shortcut menu](../../images/mac/shortcut-menu-open-1.1.0.png "Launching HandBrake using the Open option in the Finder's shortcut menu will bypass the initial Gatekeeper message.")

![Gatekeeper message with Open option](../../images/mac/gatekeeper-message-quarantine-1.1.0.png "Gatekeeper may also present this message when launching HandBrake for the first time. Selecting Open will tell Gatekeeper to trust HandBrake.")

Now HandBrake is up and running. You should not have to repeat this process in the near future.

### General troubleshooting

Try each of the following steps until HandBrake is working again.

1. Restart your computer
2. Delete your HandBrake configuration data and presets (replace `Username` with your user name)
    - /Users/Username/Library/Containers/fr.handbrake.HandBrake/Data/Library/Application Support/HandBrake/
    - /Users/Username/Library/Application Support/HandBrake
3. Install/reinstall the latest version of HandBrake; see [Downloading and installing HandBrake](../get-handbrake/download-and-install.html)

If the above does not solve your issue, someone may be able to help via HandBrake's [Community support](community-support.html) channels.

<!-- /.system-macos -->
<!-- .system-windows -->

## HandBrake for Windows

### Downloading Microsoft .NET Framework

Windows 10 already contains Microsoft .NET Framework. Updates are available for Windows 7 and 8.1 via Windows Update.

Additionally, you may download one of the following Microsoft .NET Framework standalone installers.

- [Microsoft .NET Framework 4.7.1](https://www.microsoft.com/en-us/download/details.aspx?id=56116) for Windows 7 SP1, Windows 8.1, Windows 10, and Windows Server

### General troubleshooting

Try each of the following steps until HandBrake is working again.

1. Restart your computer
2. Install the latest version of Microsoft .NET Framework available for your Windows version
3. Delete your HandBrake configuration data and presets (replace username with your own)
    - C:\Users\username\AppData\Roaming\HandBrake
    - C:\Users\username\AppData\Local\HandBrake
4. Install/reinstall the latest version of HandBrake; see [Downloading and installing HandBrake](../get-handbrake/download-and-install.html)

If the above does not solve your issue, someone may be able to help via HandBrake's [Community support](community-support.html) channels.

<!-- /.system-windows -->

[^nightly-builds]: Nightly builds are based on HandBrake's latest development code, including new and experimental features that may be unstable or significantly different than the latest release version. Although everyone is welcome to try them, nightly builds are best suited for experienced users and developers.

[^gatekeeper-disabled]: If Gatekeeper is disabled on your Mac, you may not see this message.

[^gatekeeper-instructions]: These instructions are taken directly from Apple's Gatekeeper support documents. You can learn more about Gatekeeper [here](https://support.apple.com/en-us/HT202491)
