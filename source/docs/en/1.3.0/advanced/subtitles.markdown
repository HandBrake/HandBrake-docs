---
Type:            article
State:           [ draft ]
Title:           Subtitles
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         []
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Subtitles
=========

## Supported Subtitle Formats

There are different types of subtitles that exist:

- Bitmaps (Pictures), e.g. DVD VOBSUBs, Bluray PGS
- Text with markup, e.g. Closed Captions and SRT files.
- Styled SSA, e.g. most anime subtitles in MKV files

HandBrake can read subtitles from the following sources:

- From DVD’s – Either embedded VOBSUB or CC tracks. 
- From Bluray - PGS Subtitles. 
- User supplied SRT files. 
- Embedded SSA/SRT/CC within files (such as mkv or mp4)

## Supported Output Formats

HandBrake has two methods of subtitle OUTPUT:

- Hard Burn: This means the subtitles are written on top of the image permanently. They cannot be turned on or off like on the DVD.
- Soft Subtitles: This means the subtitles will appear as separate selectable tracks in your output file. With the correct playback software, you’ll be able to enable / disable these subtitles as required.

Soft subtitles are currently unsupported in the WebM container.

The following subtitle types as supported as follows:

- Bluray PGS Subtitles
  - With MP4, you can burn ONLY 1 subtitle track into the video. 
  - You can not pass-through PGS into MP4 as this file format does not support it.
  - With MKV, you can pass-through multiple PGS tracks. These are not burned into the video unless you choose to do so however you can only burn 1 subtitle track into the file. The rest must be passed through.
  
- DVD Bitmap Subtitles (VOBSUB)
  - With MP4, you can burn ONLY 1 subtitle track into the video.
  - With MKV, you can pass-through multiple VOBSUB tracks. These are not burned into the video unless you choose to do so however you can only burn 1 subtitle track into the file. The rest must be passed through.

- CEA-608 Closed Captions (DVD and some ATSC streams) 
  - When selected, these will be passed through from your source file to the MKV or MP4 output file.
  - Only 1 CC track can be read from the source.
  - CC tracks within an MP4 appear as a subtitle track, not a CC track.

- SRT Subtitles
  - Can be read from your source file or imported through the “Subtitles tab” if you have separate files(s)
  - You can set an offset (measured in milliseconds) to change the start time that the first and subsequent SRT subtitles will appear. Use trial and error encoding a single chapter to obtain the correct offset.
  - You should make sure the correct character code is selected from the “Char Code” dropdown. Selecting the wrong code, will result in your output file having no subtitle track, and can cause the player to crash when playing that track.
  - Please note, SRT tracks are converted to SSA in the output file. This behavior is not currently configurable. 

- SSA Subtitles
  - SSA Subtitles can be passed-thru or burned into the video. 
  - When burned into the video, all styling (e.g. fonts, colors, etc) is preserved.
    - Animated effects (e.g. fade in/out, karaoke) are not currently supported. (Only the middle frame of the animation will be used.)
  - When passed-thru as text, only bold/italic/underline styles are preserved. Some players may not support the simultaneous display of multiple passed-thru SSA subtitles.

## Forced Subtitles

With some DVD sources, there is a subtitle track which only displays during foreign language sections of the video. On some titles this is a unique subtitle track in the same language as the main audio track, on others it uses the standard subtitle track in the same language as the main audio track except marks a subset of the subtitles as forced.

In order to select this track, HandBrake can scan the source for subtitles that appear only 10% (or less) of the time in addition to scanning for the presence of any forced subtitles.
  
To enable this functionality within the HandBrake user interface, from the “Subtitles” tab select the “Foreign Audio Search (Bitmap)” option from the “Track” dropdown menu and click the “Forced” Checkbox.

If you do not get a foreign section only subtitle track in your output file, then you may have to manually find and select the correct subtitle track from the “Track” dropdown menu.
