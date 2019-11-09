---
Type:            article
Title:           Opening a video source
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

Opening a video source
======================

Once you've [downloaded and installed HandBrake](../get-handbrake/download-and-install.html), it's time to open a video for encoding.

## About sources

In HandBrake terms, the video you already have is called the `Source`. One of HandBrake's strengths is its ability to open `Sources` in a wide variety of video formats, including but not limited to:

- Videos made by mobile phones, tablets, and many video cameras and DSLRs
- Screen and game recordings, web videos, video editing projects[^consumer-editor-export], and other computer-related sources
- Professional video production formats including ProRes and DNxHD
- DVD, Blu-ray, AVCHD/AVCHD Lite[^avchd-partial-support], and HD-DVD[^hddvd-partial-support] discs or disc backups
- Broadcast TV recordings
- Digital recordings of VHS, Beta, Video8/Hi8, LaserDisc, and other analog sources

You can learn more about [Source formats](../technical/source-formats.html) in the technical documentation.

**Note:** HandBrake does not defeat or circumvent [copy protection](https://en.wikipedia.org/wiki/Copy_protection) of any kind. It does not work with video files employing [[DRM](https://en.wikipedia.org/wiki/Digital_rights_management)](abbr:Digital Rights Management). See [About HandBrake](../introduction/about.html) for more information about what HandBrake *does* and *does not*.

## Ways to open a video source

By default, HandBrake presents the `Open Source` dialog on launch. It is also accessible from the `Toolbar` at the top of HandBrake's main window.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Main window toolbar](../../images/mac/toolbar-1.1.0.png "The Toolbar provides easy access to HandBrake's most common functions.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Select the `Open Source` button to select the video you want to open.

You can also drag and drop a video `Source` onto HandBrake's main window.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Open Source dialog](../../images/mac/open-source-dialog-1.1.0.png "The Open Source dialog allows you to browse your files for a video to open.")

![Opening a video source via drag and drop](../../images/mac/open-source-drag-drop-1.1.0.png "In addition to the Open Source dialog, you may also open a video by dragging it to HandBrake's main window.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

HandBrake will scan your selection and after a few moments, the main window will show the file name of the `Source` you opened along with some additional information.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Successfully opened source](../../images/mac/open-source-success-1.1.0.png "HandBrake's main window after sucessfully opening a source.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Some `Sources` may contain more than one video clip, or a collection of `Titles`. Blu-ray and DVD `Sources` often have multiple `Titles`. Use HandBrake's `Title` control to select which video clip you want to use.

<!-- .system-linux -->

<!-- TODO: Linux figures. -->

<!-- /.system-linux -->
<!-- .system-macos -->

![Selecting a title](../../images/mac/title-selection-1.1.0.png "Some sources may contain more than one video clip. The title control lets you select which video clip you want to use.")

<!-- /.system-macos -->
<!-- .system-windows -->

<!-- TODO: Windows figures. -->

<!-- /.system-windows -->

Great! At this point, HandBrake knows which video you want to use.

<!-- .continue -->

## Next steps

<!-- .success -->

Continue to [Selecting a preset](select-preset.html).

<!-- /.success -->
<!-- .fail -->

If HandBrake didn't open your video as as expected or you had some other trouble, you can continue reading to learn more about how HandBrake works or jump right to [Troubleshooting common issues](../help/troubleshooting-common-issues.html).

<!-- /.fail -->

<!-- /.continue -->

[^consumer-editor-export]: Videos made using consumer video editing software such as [iMovie](https://www.apple.com/mac/imovie/) must first be exported to a common video format for compatibility with HandBrake.

[^avchd-partial-support]: AVCHD and AVCHD Lite playlists are not fully supported. Individual files/streams may work.

[^hddvd-partial-support]: HD-DVD playlists are not fully supported. Individual files/streams may work.
