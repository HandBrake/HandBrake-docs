---
Type:            article
Title:           Troubleshooting common issues
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2019 HandBrake Team
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

HandBrake versions prior to 1.1.0 and nightly builds are not code signed using an Apple Developer Certificate. By default, Gatekeeper prevents unsigned applications from running on your Mac.

More information about successfully launching HandBrake is available on [Downloading and installing HandBrake](../get-handbrake/download-and-install.html).

### General troubleshooting

Try each of the following steps until HandBrake is working again.

1. Restart your computer
2. Delete your HandBrake configuration data and presets (replace username with your own)
    - /Users/username/Library/Application Support/HandBrake
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
