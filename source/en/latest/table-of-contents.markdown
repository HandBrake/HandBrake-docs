---
Title:           Table of contents
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Table of contents
=================

## Introduction

<!-- TODO: link to contributing guide -->

- [Quick start](introduction/quick-start.html) - Learn how to make your first video in minutes
- [About HandBrake](introduction/about.html) - What HandBrake is, does, and does not do


## Getting HandBrake

- [Where to get HandBrake](get-handbrake/where-to-get-handbrake.html) - The officially supported version
- [Downloading and installing HandBrake](get-handbrake/download-and-install.html) - How to get HandBrake onto your computer
- [Checking for updates](get-handbrake/check-for-updates.html) - Staying up to date with the latest version is easy


## Making videos

- [Opening a video source](workflow/open-video-source.html) - How to get your videos into HandBrake
- [Selecting a preset](workflow/select-preset.html) - Tailored settings for instant compatibility with many devices
- [Adjusting quality](workflow/adjust-quality.html) - Easily increase visual quality or reduce file size
  <!-- TODO: To clean up a poor-looking source video, see restoration -->
- [Previewing your settings](workflow/preview-settings.html) - See what your new video will look like, without waiting
  <!-- TODO: To clean up a poor-looking source video, see restoration -->
- [Starting encoding](workflow/start-encoding.html) - Start encoding your new video with one click


## Advanced features

- Multiple jobs using the queue
- Custom presets
  - Modifying audio and subtitle defaults
- Resizing video
  - Downscaling only
- Preserving surround sound
  - Formats: ac3, dts, etc.
  - Passthru: devices and compatiblity
  - Dynamic range control
  - Downmixing
- Adding subtitles
  - Language or forced
  - Burned-in or text (source dependent)
  - Adding external subtitles
- Chapter markers
  - Renaming chapters
  - Importing and exporting chapters
- Post-processing metadata with Subler, others?


## Restoration and enhancement

- Common video problems
  - Black bars at top/bottom or sides
    - Cropping
  - Combing effects caused by interlacing or telecine
    - Detelecine filter
    - Decomb filter vs. Deinterlace filter
    - Bob mode and frame rates, motion
      - May affect compatibility
  - Noise (grainy appearance and/or color splotches)
    - Denoise filters: NLMeans and HQDN3D
  - Blocky picture
    - Deblock filter
  - Stretched picture (too wide or too tall)
    - Scaling and anamorphic
    - May affect compatibility
- Common audio problems
  - Volume level too low
  - Dynamics too wide (soft whispers, loud booms)
- Example videos?


## Advanced features part 2

May affect compatiblity! Use a preset!

- Formats/containers
- Video source type
  - x264 tune
    - May affect compatibility
- Video encoding speed
  - Quality affects speed
  - x264 preset
    - May affect compatibility
- Video angle
- Point-to-point
- Frame rate
  - Same as source VFR/CFR
  - Fixed VFR (peak) or CFR
- Audio quality (bitrate)
  - Affects file size, though not as much as video quality
  - Adjustments may impact compatibility (recommend to leave alone)
- Audio defaults
- Subtitle defaults
- Automatic file naming
- Web optimized
- iPod 5G support


## Getting help

- Troubleshooting common issues
- [Community support](help/community-support.html) - Help from real people
- Activity log
  - Required for support, see Getting help


## HandBrake lore

- About the name HandBrake
- About the cocktail and pineapple icon
- Other esoteric information


## CLI documentation

- CLI documentation


## Technical documentation

- Introduction
  - Not for regular use
- [Source formats](technical/source-formats.html)
- Containers
  - Known issue: MP4 edit lists
- Video
  - Codecs
  - x264 presets, tunes, and custom settings
  - x264 profile and level
  - Constant quality versus average bit rate
  - VFR/PFR, CFR, custom frame rates
- Advanced picture and filters
  - Anamorphic modes
  - Modulus
  - Custom filter settings
- Audio
  - Codecs: autodetection, read/passthru
    - Known issue: Dolby Atmos
  - Gain
  - DRC
  - Mixdown
- Subtitles
  - Formats
- Advanced preferences
