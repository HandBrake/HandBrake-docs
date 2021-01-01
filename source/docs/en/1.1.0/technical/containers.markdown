---
Type:            article
State:           [ obsolete ]
Title:           Formats / containers
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Formats / containers
=============================

Containers are files that wrap around video and audio tracks—indexing and organizing the streams for playback—in addition to providing advanced features, like chapters similar to those on DVDs.

HandBrake supports two widely supported formats. MKV and MP4 (Sometimes seen as M4v)

## Features 

Features and playback compatiblity varies between MKV and MP4. The following is a summary of some of these differences:

- In an MP4 file, you can store MPEG-4 video created by ffmpeg or x264.
  - Supports H.264, H.265, MPEG-4, MPEG-2 video. 
  - It stores audio in the AAC format. It is also possible to pass through Dolby Digital 5.1 Surround Sound (AC3) audio from a DVD in an MP4 file, although it is a new standard and not widely supported. VLC can decode it, and the AppleTV can pass it through to a surround sound receiver. 
  - MP4 also supports chapters, for which HandBrake uses Apple's chapter format. 
  - MP4 also is capable of storing [VariableFrameRate Variable Frame Rate] video. 
  - Be aware that chapters and AC3 audio can only be seen by QuickTime if you change the file extension from .mp4 to .m4v. HandBrake will do this for you automatically when you enable those features, although this can be disabled in the preferences if you really want .mp4 at the end of the name. 
  - The MP4 format can also be optimized for "fast start" progressive downloads over the Web. 
  - It can also include "soft" text subtitles that can be turned on or off, instead of always being hard burned into the video frames.
   
- In an MKV, you can store MPEG-4 video created by ffmpeg or x264, or Theora video. 
  - Supports H.264, H.265, MPEG-4, MPEG-2 video and VP3 (Vorbis) 
  - It stores audio in the AAC, MP3, Vorbis or FLAC formats. It can also pass through the Dolby Digital 5.1 (AC3) and Digital Theater Systems (DTS) surround sound formats used by DVDs. 
  - It supports chapters, as well as [VariableFrameRate Variable Frame Rate] video. 
  - It can include "soft" subtitles that can be turned on or off, instead of always being hard burned into the video frame. These can either be bitmap images of the subtitles included on a DVD (known as vobsub) or text.

## MP4 vs M4v

They are the exact same file, the only difference is the extension. MP4 vs M4v.

For MP4 files, HandBrake will automatically use the extension M4V when you pass-through audio (AC3), use SRT subtitles or have chapter markers enabled.

You can simply change the file extension between .mp4 and .m4v as the file is exactly the same. There are no differences in the content or container itself.

You can disable the option to automatically set this in !HandBrakes preferences.

Note: QuickTime or any QT based application will not be able to play a MP4 file with these features enabled, unless it has the extension ".m4v"
