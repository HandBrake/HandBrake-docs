---
Type:            article
State:           [ obsolete ]
Title:           Container formats
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.8.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Container formats
=================

Containers are files that wrap around video and audio tracks—indexing and organizing the streams for playback—in addition to providing advanced features, like chapters similar to those on DVDs.

HandBrake creates the widely supported container formats MKV and MP4 (sometimes seen as M4V), in addition to the [WebM](https://www.webmproject.org/) container format, which is subset of MKV.

## Features 

Features and playback compatiblity varies between MKV, WebM, and MP4. The following is a summary of some of these differences:

- MP4 container.
  - Supports H.264, H.265, MPEG-4, MPEG-2, AV1 video.
  - It stores audio in the AAC, MP3, AC3, E-AC3, and Opus format. AAC is recommended for better compatibility on most players. It is also possible to pass through Dolby Digital 5.1 Surround Sound (AC3) audio from a DVD or Blu-ray, and E-AC3 and TrueHD.
  - MP4 also supports chapters, for which HandBrake uses Apple's chapter format. 
  - MP4 also is capable of storing [VariableFrameRate Variable Frame Rate] video. 
  - Be aware that chapters and AC3 audio can only be seen by QuickTime 7 and earlier if you change the file extension from .mp4 to .m4v. HandBrake will do this for you automatically when you enable those features, although this can be disabled in the preferences if you really want .mp4 at the end of the name. QuickTime X and later don't require the extension change.
  - The MP4 format can also be optimized for "fast start" progressive downloads over the Web.
  - It can also include "soft" text subtitles that can be turned on or off, instead of always being hard burned into the video frames.
   
- MKV container.
  - Supports H.264, H.265, MPEG-4, MPEG-2, VP8, VP9, AV1, Theora video.
  - It stores audio in the AAC, MP3, AC3, E-AC3, Vorbis, Opus, or FLAC formats. It can also pass through the Dolby Digital 5.1 (AC3), Digital Theater Systems (DTS), and TrueHD surround sound formats used by DVDs and Blu-rays.
  - It supports chapters, as well as [VariableFrameRate Variable Frame Rate] video. 
  - It can include "soft" subtitles that can be turned on or off, instead of always being hard burned into the video frame. These can either be bitmap images of the subtitles included on a DVD (known as vobsub) or text.

- WebM container.
  - Supports VP8, VP9, and AV1 video codecs.
  - It stores audio in either Vorbis or Opus formats.
  - It can include "hard" burned in subtitles. "Soft" subtitles are currently unsupported.

## MP4 vs M4V

They are the exact same file, the only difference is the extension. MP4 vs M4V.

For MP4 files, HandBrake will automatically use the extension M4V when you pass-through audio (AC3), use SRT subtitles or have chapter markers enabled.

You can simply change the file extension between .mp4 and .m4v as the file is exactly the same. There are no differences in the content or container itself.

You can disable the option to automatically set this in !HandBrakes preferences.

Note: QuickTime 7 or any QT 7 based application will not be able to play a MP4 file with these features enabled, unless it has the extension ".m4v". This limitation does not apply to QuickTime X or iOS.
