---
Type:            article
Title:           Table of contents
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos <bradley@bradleysepos.com>, Scott (s55)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Table of contents
=================

## Introduction

<!-- TODO: link to contributing guide -->

- [Quick start](introduction/quick-start.html)
  *Learn how to make your first video in minutes*
- [About HandBrake](introduction/about.html)
  *What HandBrake is, does, and does not do*


## Getting HandBrake

- [Where to get HandBrake](get-handbrake/where-to-get-handbrake.html)
  *The officially supported version*
- [Downloading and installing HandBrake](get-handbrake/download-and-install.html)
  *How to get HandBrake onto your computer*
- [Checking for updates](get-handbrake/check-for-updates.html)
  *Staying up to date with the latest version is easy*
- [System Requirements](get-handbrake/system-requirements.html)
  *Check your system meets the requirements for running HandBrake*


## Making videos

- [Opening a video source](workflow/open-video-source.html)
  *How to get your videos into HandBrake*
- [Selecting a preset](workflow/select-preset.html)
  *Tailored settings for instant compatibility with many devices*
- [Adjusting quality](workflow/adjust-quality.html)
  *Easily increase visual quality or reduce file size*
  <!-- TODO: To clean up a poor-looking source video, see restoration -->
- [Previewing your settings](workflow/preview-settings.html)
  *See what your new video will look like, without waiting*
  <!-- TODO: To clean up a poor-looking source video, see restoration -->
- [Starting encoding](workflow/start-encoding.html)
  *Start encoding your new video with one click*


## Advanced features

- [Batch processing multiple jobs using the queue](advanced/batch-queue.html)   
- [Custom presets](advanced/custom-presets.html) 
  - [Audio and Subtitled Defaults](advanced/audio-subtitle-defaults.html) 
- [Resizing video](advanced/resizing-video.html) 
- [Surround sound](advanced/surround-sound.html)
- [Adding subtitles](advanced/subtitles.html) 
- [Chapter markers](advanced/chapter-markers.html) 
<!-- - [Post-processing metadata](advanced/post-processing.html) -->


## Restoration and enhancement

- Common video problems
  - Cropping, Black bars at top/bottom or sides
  - Combing effects caused by interlacing or telecine
    - Detelecine filter
    - Decomb filter vs. Deinterlace filter
    - Bob mode and frame rates, motion
  - Noise (grainy appearance and/or color splotches)
    - Denoise filters: NLMeans and HQDN3D
  - Blocky picture
    - Deblock filter
  - Stretched picture (too wide or too tall)
    - Scaling and anamorphic
- Common audio problems
  - Volume level too low
  - Dynamics too wide (soft whispers, loud booms)


## Advanced features part 2

- [Formats/containers](advanced/containers.html) 
- [Video source type](advanced/video-sources.html) 
- [Video encoding speed](advanced/video-encoding-performance.html) 
- [Video angles](advanced/video-angles.html) 
- [Point-to-point](advanced/point-to-point.html) 
- [Frame rate](advanced/frame-rates.html) 
- [Audio quality](advanced/audio-quality.html) 
- [Automatic file naming](advanced/automatic-file-naming.html) 
- [Web optimized](advanced/web-optimised.html) 
- [iPod 5G support](advanced/old-ipod-support.html) 


## Getting help

- [Troubleshooting common issues](help/troubleshooting-common-issues.html)
  *What to do if something goes wrong*
- [Community support](help/community-support.html)
  *Help from real people*
- [Activity log](help/activity-log.html) 


## HandBrake lore

- [Project history](about/history.html)
- [About the cocktail and pineapple icon](about/the-icon.html) 


## CLI documentation

- [Command line guide](cli/cli-guide.html)
- [CLI options](cli/cli-options.html)


## Technical documentation

- [Source formats](technical/source-formats.html)
- Video
  - [Codecs](technical/video-codecs.html) 
  - [x264 presets, tunes, and custom settings](technical/video-x264-presets-tunes.html) 
  - [x264 profile and level](technical/video-x264-profiles-levels.html) 
  - [Constant quality versus average bit rate](technical/video-cq-vs-abr.html) 
- Advanced picture settings
  - Anamorphic modes
  - Modulus
  - Custom filter settings
- Advanced Filter Settings
- Audio
  - [Codecs](technical/audio-codecs.html)
  - [Gain](technical/audio-gain.html)
  - [DRC](technical/audio-drc.html)
  - [Mixdown](technical/audio-mixdowns.html)
- Advanced preferences

## Developer documentation

- Releases
  - [Linux Flatpaks](developer/flatpak-repo.html)
- Building HandBrake
  - [Building on Windows](developer/build-windows.html)

