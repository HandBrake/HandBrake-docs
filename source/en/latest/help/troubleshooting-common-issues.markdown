---
Type:            article
State:           draft
Title:           Troubleshooting common issues
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos <bradley@bradleysepos.com> (BradleyS)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Troubleshooting common issues
=============================

## Common Questions (All Platforms)

## Mac GUI
####*HandBrake won't launch when double clicking on the icon.*

We are not currently able to sign the HandBrake downloads. Since our download is not code signed, OSX will flag the application as from an unidentified developer. To work around this, please read their [Open an app from an unidentified developer](https://support.apple.com/kb/PH18657?locale=en_US)  help article.

This is also detailed on the [Downloading and installing HandBrake](download-and-install.html) page.

## Linux GUI

## Windows GUI

####*Where can I download the Microsoft .NET framework 4.6.1 or later*

If you are running Windows 7 or 8.x, it is available via Windows update. 
Alternatively, you can download it from the ​Microsoft Website.

Windows 10 ships with this out the box so you should not need to install it.


####*HandBrake crashes or won't launch.*

There are a couple of things you can try:

- Make sure you have Microsoft .NET Framework 4.6.1 or later installed on your system

- Delete the config and preset files. You can find these in the following directories. 
	For 2000/XP
		C:\Documents and Settings\<username>\Application Data\HandBrake 
		C:\Documents and Settings\<username>\Local Settings\Application Data\HandBrake
	For Vista
		C:\Users\<username>\Application Data\HandBrake
		C:\Users\<username>\Local Settings\Application Data\HandBrake
	For Windows 7 and later 
		C:\Users\<username>\AppData\Roaming\HandBrake
		and 
		C:\Users\<username>\AppData\Local\HandBrake

- Reinstall HandBrake. 