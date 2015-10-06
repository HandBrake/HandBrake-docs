---
Title:           Opening a video
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

Opening a video
===============

In HandBrake terms, the original video you already have is called the `Source`. One of HandBrake's strengths is its ability to open `Sources` in a wide variety of video formats, including but not limited to:

- Videos made by mobile phones, tablets, and many video cameras and DSLRs
- Screen and game recordings, web videos, video editing projects[^consumer-editor-export], and other computer-related sources
- Professional video production formats including ProRes and DNxHD
- DVD, Blu-ray, AVCHD/AVCHD Lite[^avchd-partial-support], and HD-DVD[^hddvd-partial-support] discs or disc backups
- Broadcast TV recordings
- Digital recordings of VHS, Beta, Video8/Hi8, LaserDisc, and other analog sources

Learn more about [source formats](../technical/source-formats.html).

**Note:** HandBrake does not defeat or circumvent [copy protection](https://en.wikipedia.org/wiki/Copy_protection) of any kind. It does not work with video files employing [Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management) (DRM). See [About HandBrake](../introduction/about.html) for more information about what HandBrake *does* and *does not*.

## Using the Open Source dialog

At the top of HandBrake's main window, you'll see a toolbar with various buttons.

![Main window toolbar](../images/toolbar.png)

Select the `Open Source` button to select the video you want to open.

![Open Source button](../images/open-source-button.png)

![Open Source dialog](../images/open-source-dialog.png)

## Dragging and dropping

You can also drag and drop a video `Source` onto HandBrake's main window.

![Opening a video source via drag and drop](../images/drag-and-drop-source.png)

## Next steps

Great! At this point, HandBrake knows which video you want to use.

If HandBrake didn't open your video as as expected or you had some other trouble, you can continue reading to learn more about how HandBrake works or jump right to [Getting help](../help/index.html).

Continue to [Selecting a preset](select-preset.html).

[^consumer-editor-export]: Videos made using consumer video editing software such as [iMovie](https://www.apple.com/mac/imovie/) must first be exported to a common video format for compatibility with HandBrake.

[^avchd-partial-support]: AVCHD and AVCHD Lite playlists are not fully supported. Individual files/streams may work.

[^hddvd-partial-support]: HD-DVD playlists are not fully supported. Individual files/streams may work.
