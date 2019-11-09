---
Type:            article
Title:           Quick start
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

Quick start
===========

HandBrake takes videos you already have and makes new ones that work on your mobile phone, tablet, TV media player, game console, computer, or web browser—nearly anything that supports modern video formats.

This quick start guide assumes you have already downloaded and installed HandBrake. If you do not already have HandBrake, please see [Downloading and installing HandBrake](../get-handbrake/download-and-install.html).

Let's get started.

## Launch HandBrake

Launch HandBrake by quickly clicking twice (double-clicking) on the cocktail & pineapple icon. Depending on your system settings, a single click may suffice.

![HandBrake icon](../../images/icon-1.1.0.png)![Double-clicking HandBrake icon](../../images/icon-click-1.1.0.gif)

## Open your existing video

HandBrake calls the video you already have the `Source`.

Select the `Open Source` button on the toolbar to browse your files for a video to open. You may also drag your `Source` video onto HandBrake's main window. 

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Browsing for a video source to open](../../images/mac/open-source-dialog-1.1.0.png "The Open Source dialog allows you to browse your files for a video to open.")

![Opening a video source via drag and drop](../../images/mac/open-source-drag-drop-1.1.0.png "In addition to the Open Source dialog, you may also open a video by dragging it to HandBrake's main window.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

## Select a title

Some `Sources` may contain more than one video clip, or a collection of `Titles`. Use HandBrake's `Title` control to select which video clip you want to use.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Selecting a title](../../images/mac/title-selection-1.1.0.png "Some sources may contain more than one video clip. The title control lets you select which video clip you want to use.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Some `Sources` have only one `Title`. Blu-ray and DVD `Sources` often have multiple `Titles`.

## Select a preset

HandBrake provides a number of settings `Presets` to make your new video work well with your playback devices and software. For instance, if you have a Playstation 4, you may wish to select the `Playstation 1080p30 Surround` preset under `Devices`.

The default `Fast 1080p30` preset is often a good choice because it's fast and compatible with most devices.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Selecting a preset](../../images/mac/preset-selection-1.1.0.png "Presets are one-click settings to save you time and help ensure compatibility with your devices.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

`Presets` can affect compatibility (whether your video will work with your devices and software) and encoding time. Learn more about [Selecting a preset](../workflow/select-preset.html).

## Select a destination

HandBrake calls the file name and location of your new video the `Destination`.

`Save As` is the file name of your new video. You can change it by typing directly in the box.

`To` is the location where HandBrake will place your new video. You can select the `Browse...` button to choose a different location.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Selecting a destination](../../images/mac/destination-field-1.1.0.png "The Destination is where HandBrake will place your new video.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Please take special care to *note your destination*. Otherwise, you won't be able to find your new video. You can move it later if you desire.

## Start the encode

Select the `Start` button on the toolbar to make your new video.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Encode progress](../../images/mac/encode-progress-1.1.0.png "HandBrake reports its progress during encoding.")

![Encoding complete alert](../../images/mac/encode-complete-1.1.0.png "HandBrake shows a notification when finished encoding.")

<!-- /.system-macos -->

HandBrake will report its progress while it's working and alert you when it's finished. Then you will have a new video file at the `Destination` you specified.

<!-- .system-macos -->

![Destination in Finder](../../images/mac/destination-finder-1.1.0.png "Your new video is located at the Destination you specified.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Congratulations! You just encoded your first video using HandBrake. It's now ready to watch on your devices.

<!-- .continue -->

## Next steps

<!-- .success -->

Continue to [About HandBrake](about.html).

<!-- /.success -->
<!-- .fail -->

If you didn't get a video file as expected, encountered an error, or had some other trouble, you can continue reading to learn more about how HandBrake works or jump right to [Troubleshooting common issues](../help/troubleshooting-common-issues.html).

<!-- /.fail -->

<!-- /.continue -->
