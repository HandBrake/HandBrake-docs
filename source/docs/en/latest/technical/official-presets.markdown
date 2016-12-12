---
Type:            article
State:           draft
Title:           Official presets
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         Bradley Sepos <bradley@bradleysepos.com> (BradleyS)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Official presets
================

A `Preset` is a group of settings specifically tailored for the software or device you want your videos to play on. Selecting a `Preset` can go a long way toward ensuring your video works where you want it to.

HandBrake includes a number of official `Presets` for specific devices and for general use. The default `Fast 1080p30` preset is a good choice if you're just getting started. It's fast and compatible across a wide range of software and devices.

The official `Presets` impose limitations on various settings in order to ensure compatibility with the intended playback software or device. For instance, higher resolution video will be downscaled to the maximum resolution, and higher frame rates will be peak limited to the maximum frame rate.

So, a 1080p video at 60 frames per second will be downscaled to 480p resolution and peak limited to 30 frames per second when using one of the 480p30 `Presets`. There may be additional limitations on audio and other settings to ensure compatibility. To see what settings will be used to make your new video, select a `Preset` and explore the graphical interface.

## General presets

HandBrake's general `Presets` are intended to be broadly compatible across a wide range of software and devices.[^high-quality-settings-less-compatible]

Each general `Preset` is named according to the quality or speed, maximum resolution, and maximum frame rate it produces.

| Preset                    | Type | Video | Audio                            | Picture Quality | File Size      | Encoding Speed |
|---------------------------|------|-------|----------------------------------|-----------------|----------------|----------------|
| Very Fast 1080p30         | MP4  | H.264 | AAC stereo                       | Average         | Small          | Very fast      |
| Very Fast 720p30          | MP4  | H.264 | AAC stereo                       | Average         | Small          | Very fast      |
| Very Fast 576p25          | MP4  | H.264 | AAC stereo                       | Average         | Small          | Very fast      |
| Very Fast 480p30          | MP4  | H.264 | AAC stereo                       | Average         | Small          | Very fast      |
| Fast 1080p30              | MP4  | H.264 | AAC stereo                       | Standard        | Average        | Fast           |
| Fast 720p30               | MP4  | H.264 | AAC stereo                       | Standard        | Average        | Fast           |
| Fast 576p25               | MP4  | H.264 | AAC stereo                       | Standard        | Average        | Fast           |
| Fast 480p30               | MP4  | H.264 | AAC stereo                       | Standard        | Average        | Fast           |
| HQ 1080p30 Surround       | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Large          | Slow           |
| HQ 720p30 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Large          | Slow           |
| HQ 576p25 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Large          | Slow           |
| HQ 480p30 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Large          | Slow           |
| Super HQ 1080p30 Surround | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very large** | **Very slow**  |
| Super HQ 720p30 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very large** | **Very slow**  |
| Super HQ 576p25 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very large** | **Very slow**  |
| Super HQ 480p30 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very large** | **Very slow**  |

## Devices presets

HandBrake's devices `Presets` target specific devices and classes of devices, such as mobile phones, tablets, TV media players, and game consoles.

Each devices `Preset` is named according to the device name or class, maximum resolution, and maximum frame rate it produces.

| Preset                       | Type  | Video | Audio                            | Picture Quality | Encoding Speed |
|------------------------------|-------|-------|----------------------------------|-----------------|----------------|
| Android 1080p30              | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Android 720p30               | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Android 576p25               | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Android 480p30               | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Apple 1080p60 Surround       | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Apple 1080p30 Surround       | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Apple 720p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Apple 540p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Apple 240p30                 | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Chromecast 1080p30 Surround  | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Fire TV 1080p30 Surround     | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Playstation 1080p30 Surround | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Playstation 720p30           | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Playstation 540p30           | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Roku 2160p60 4K Surround     | *MKV* | H.264 | AAC stereo; AAC, MP3, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), or DTS | Standard | **Very slow** |
| Roku 2160p30 4K Surround     | *MKV* | H.264 | AAC stereo; AAC, MP3, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), or DTS | Standard | **Very slow** |
| Roku 1080p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Roku 720p30 Surround         | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Roku 576p25                  | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Roku 480p30                  | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Windows Mobile 1080p30       | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Windows Mobile 720p30        | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Windows Mobile 540p30        | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Windows Mobile 480p30        | MP4   | H.264 | AAC stereo                       | Standard        | Medium         |
| Xbox 1080p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |
| Xbox Legacy 1080p30 Surround | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Standard        | Medium         |

<!-- ## Matroska presets -->

<!-- ## Legacy presets -->

[^high-quality-settings-less-compatible]: Higher quality general `Presets` may include settings that are incompatible with older or slower devices.
