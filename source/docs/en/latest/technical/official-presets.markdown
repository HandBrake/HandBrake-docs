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

HandBrake includes a number of official `Presets` that select specific settings to ensure compatibility for specific devices and for general use. When selecting one of these `Presets`, higher resolution video will be downscaled to a maximum resolution, and higher frame rates will be peak limited to a maximum frame rate. Audio and other settings may also be enforced.

Here are some examples of how `Presets` work in practice:

- When selecting one of the 720p30 `Presets`, a Source with 1080p video at 60 frames per second will be downscaled to 720p resolution and peak limited to 30 frames per second
- When selecting one of the 720p30 `Presets`, a Source with 480p video at 30 frames per second will not be scaled or peak limited
- When selecting a `Preset` that does not include surround sound, only stereo audio is encoded; the discrete surround audio is dropped
- When selecting a `Preset` that includes surround sound, stereo audio is encoded and surround audio is "passed through" if possible (or encoded to a compatible format)

Select a `Preset` and explore which settings have changed. These settings will be used to make your new video.

The default `Fast 1080p30` preset is a good choice if you're just getting started. It's fast and compatible across a wide range of software and devices.

## General presets

HandBrake's general `Presets` are intended to be broadly compatible across a wide range of software and devices.[^high-quality-settings-less-compatible]

Each general `Preset` is named according to the quality or speed, maximum resolution, and maximum frame rate it produces.

| Preset                    | Type | Video | Audio                            | Picture Quality | Encoding Speed | File Size      |
|---------------------------|------|-------|----------------------------------|-----------------|----------------|----------------|
| Very Fast 1080p30         | MP4  | H.264 | AAC stereo                       | Average         | Very fast      | Small          |
| Very Fast 720p30          | MP4  | H.264 | AAC stereo                       | Average         | Very fast      | Small          |
| Very Fast 576p25          | MP4  | H.264 | AAC stereo                       | Average         | Very fast      | Small          |
| Very Fast 480p30          | MP4  | H.264 | AAC stereo                       | Average         | Very fast      | Small          |
| **Fast 1080p30**          | MP4  | H.264 | AAC stereo                       | Standard        | Fast           | Average        |
| Fast 720p30               | MP4  | H.264 | AAC stereo                       | Standard        | Fast           | Average        |
| Fast 576p25               | MP4  | H.264 | AAC stereo                       | Standard        | Fast           | Average        |
| Fast 480p30               | MP4  | H.264 | AAC stereo                       | Standard        | Fast           | Average        |
| HQ 1080p30 Surround       | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Slow           | Large          |
| HQ 720p30 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Slow           | Large          |
| HQ 576p25 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Slow           | Large          |
| HQ 480p30 Surround        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | High            | Slow           | Large          |
| Super HQ 1080p30 Surround | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very slow**  | **Very large** |
| Super HQ 720p30 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very slow**  | **Very large** |
| Super HQ 576p25 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very slow**  | **Very large** |
| Super HQ 480p30 Surround  | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | Super high      | **Very slow**  | **Very large** |

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
| Roku 2160p60 4K Surround     | **MKV** | **H.265** | AAC stereo; AAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), DTS, or MP3 | Standard | **Very slow** |
| Roku 2160p30 4K Surround     | **MKV** | **H.265** | AAC stereo; AAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), DTS, or MP3 | Standard | **Very slow** |
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
