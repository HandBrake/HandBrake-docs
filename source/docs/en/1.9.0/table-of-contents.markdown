---
Type:            article
State:           [ obsolete ]
Title:           Table of contents
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.9.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Table of contents
=================

## Introduction

- [Quick start](introduction/quick-start.markdown)
  *Learn how to make your first video in minutes*
- [About HandBrake](introduction/about.markdown)
  *What HandBrake is, does, and does not*


## Getting HandBrake

- [Where to get HandBrake](get-handbrake/where-to-get-handbrake.markdown)
  *The officially supported version*
- [Downloading and installing HandBrake](get-handbrake/download-and-install.markdown)
  *How to get HandBrake onto your computer*
- [Checking for updates](get-handbrake/check-for-updates.markdown)
  *Staying up to date with the latest features and bug fixes*


## Making videos

- [Opening a video source](workflow/open-video-source.markdown)
  *How to get your videos into HandBrake*
- [Selecting a preset](workflow/select-preset.markdown)
  *Tailored settings for instant compatibility with many devices*
- [Adjusting quality](workflow/adjust-quality.markdown)
  *Easily increase visual quality or reduce file size*
- [Previewing your settings](workflow/preview-settings.markdown)
  *See what your new video will look like in a fraction of the time*
- [Starting encoding](workflow/start-encoding.markdown)
  *Start encoding your new video with one click*


## Advanced workflows

- [Using the queue](advanced/queue.markdown)
  *Set up multiple encode jobs at once*
- [Point-to-point encoding](advanced/point-to-point.markdown)<span class="notice draft"><span>draft</span></span>
- [Custom presets](advanced/custom-presets.markdown)<span class="notice draft"><span>draft</span></span>
- [Audio and subtitle defaults](advanced/audio-subtitle-defaults.markdown)<span class="notice draft"><span>draft</span></span>
- [Resizing video](advanced/resizing-video.markdown)<span class="notice draft"><span>draft</span></span>
- [Preserving surround sound](advanced/surround-sound.markdown)<span class="notice draft"><span>draft</span></span>
- [Adding subtitles](advanced/subtitles.markdown)<span class="notice draft"><span>draft</span></span>
- [Adding chapter markers](advanced/chapter-markers.markdown)<span class="notice draft"><span>draft</span></span>

<!-- - [Managing Audio Tracks](advanced/managing-audio.markdown) -->
<!-- - [Post-processing metadata](advanced/post-processing.markdown) -->


<!-- ## Restoration and enhancement

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
-->

<!-- ## Advanced workflows part 2

- [Understanding source types](advanced/video-sources.markdown)<span class="notice draft"><span>draft</span></span>
- [Selecting a container format and encoders](advanced/containers.markdown)<span class="notice draft"><span>draft</span></span>
- [Selecting a video angle](advanced/video-angles.markdown)<span class="notice draft"><span>draft</span></span>
- [Working with frame rates](advanced/frame-rates.markdown)<span class="notice draft"><span>draft</span></span>
- [Adjusting audio quality](advanced/audio-quality.markdown)<span class="notice draft"><span>draft</span></span>
- [Progressive download support](advanced/web-optimised.markdown)<span class="notice draft"><span>draft</span></span>
- [Compatibility with legacy devices](advanced/old-ipod-support.markdown)<span class="notice draft"><span>draft</span></span>
- [Automatically naming files](advanced/automatic-file-naming.markdown)<span class="notice draft"><span>draft</span></span>
-->

## Getting help

- [Troubleshooting common issues](help/troubleshooting-common-issues.markdown)
  *What to do if something goes wrong*
- [Community support](help/community-support.markdown)
  *Get help from real people*
- [Activity Log](help/activity-log.markdown)
  *Activity Logs help you receive better support*


## More information

- [Project history](about/history.markdown)<span class="notice draft"><span>draft</span></span>
- [Contributing](contributing/contribute.markdown)
  *How you can get involved*


## CLI documentation

- [Command line reference](cli/command-line-reference.markdown)
- [CLI options list](cli/cli-options.markdown)<span class="notice draft"><span>draft</span></span>


## Technical documentation

- [System requirements](technical/system-requirements.markdown)
  *Make sure your system can run HandBrake*
- [Supported source formats](technical/source-formats.markdown)
  *Types of video files HandBrake can read*
- [Official presets](technical/official-presets.markdown)
  *Technical summary of the official presets*
- [Performance](technical/performance.markdown)
  *How various settings affect encoding speed*
- [Process Isolation](technical/process-isolation.markdown)
  *Process Isolation and Multiple Simultaneous Jobs supports*
- Video
  - [Video codecs](technical/video-codecs.markdown)<span class="notice draft"><span>draft</span></span>
  - [10/12-bit encoding](technical/video-bit-depth.markdown)<span class="notice draft"><span>draft</span></span>
  - [HDR encoding](technical/hdr.markdown)<span class="notice draft"><span>draft</span></span>
  - [Constant quality versus average bit rate](technical/video-cq-vs-abr.markdown)<span class="notice draft"><span>draft</span></span>
  - [Presets and tunes](technical/video-presets-tunes.markdown)<span class="notice draft"><span>draft</span></span>
  - [Profiles and levels](technical/video-profiles-levels.markdown)<span class="notice draft"><span>draft</span></span>
  - [Video angles](technical/video-angles.markdown)<span class="notice draft"><span>draft</span></span>
  - [Anamorphic video](technical/anamorphic-guide.markdown)<span class="notice draft"><span>draft</span></span>
  - [Frame rate](technical/frame-rates.markdown)<span class="notice draft"><span>draft</span></span>
  - [Filters](technical/filters-summary.markdown)<span class="notice draft"><span>draft</span></span>
- Hardware encoders
  - [AMD VCN](technical/video-vcn.markdown)
  - [Apple VideoToolbox](technical/video-videotoolbox.markdown)
  - [Intel Quick Sync Video](technical/video-qsv.markdown)
  - [NVIDIA NVENC](technical/video-nvenc.markdown)
  - [Media Foundation (ARM)](technical/video-mediafoundation.markdown)
- Audio
  - [Dynamic range compression](technical/dynamic-range-compression.markdown)<span class="notice draft"><span>draft</span></span>
  - [Audio quality](technical/audio-quality.markdown)<span class="notice draft"><span>draft</span></span>
- Files and compatibility
  - [Container formats](technical/containers.markdown)<span class="notice draft"><span>draft</span></span>
  - [iPod 5th Generation support](technical/old-ipod-support.markdown)<span class="notice draft"><span>draft</span></span>
- [Preferences](technical/preferences.markdown)
  - [Automatic file naming](technical/automatic-file-naming.markdown)<span class="notice draft"><span>draft</span></span>

## Developer documentation

- Building HandBrake
  - [Building HandBrake for BSD](developer/build-bsd.markdown)
    - Installing dependencies on [FreeBSD](developer/install-dependencies-freebsd.markdown) / [NetBSD](developer/install-dependencies-netbsd.markdown) / [OpenBSD](developer/install-dependencies-openbsd.markdown)
  - [Building HandBrake for Linux](developer/build-linux.markdown)
    - Installing dependencies on [Alpine](developer/install-dependencies-alpine.markdown) / [Arch](developer/install-dependencies-arch.markdown) / [Clear](developer/install-dependencies-clear.markdown) / [Debian](developer/install-dependencies-debian.markdown) / [EL](developer/install-dependencies-el.markdown) / [Fedora](developer/install-dependencies-fedora.markdown) / [Gentoo](developer/install-dependencies-gentoo.markdown) / [Mageia](developer/install-dependencies-mageia.markdown) / [OpenSUSE](developer/install-dependencies-opensuse.markdown) / [Solus](developer/install-dependencies-solus.markdown) / [Ubuntu](developer/install-dependencies-ubuntu.markdown) / [Void](developer/install-dependencies-void.markdown)
  - [Building HandBrake for Mac](developer/build-mac.markdown)
  - [Building HandBrake for Windows](developer/build-windows.markdown)
- Packaging HandBrake
  - [Flatpak apps for Linux](developer/flatpak-repo.markdown)<span class="notice draft"><span>draft</span></span>
    *Fully-contained applications compatible with multiple Linux distributions*
