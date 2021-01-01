---
Type:            article
State:           [ obsolete ]
Title:           Official presets
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Official presets
================

A `Preset` is a group of settings specifically tailored for the software or device you want your videos to play on. Selecting a `Preset` can go a long way toward ensuring your video works where you want it to.

HandBrake includes a number of official `Presets` that select specific settings to ensure compatibility for specific devices, the web, and for general use. When selecting one of these `Presets`, higher resolution video will be downscaled to a maximum resolution, and higher frame rates will be peak limited to a maximum frame rate. Audio and other settings may also be enforced.

Here are some examples of how `Presets` work in practice:

- When selecting one of the 720p30 `Presets`, a Source with 1080p video at 60 frames per second will be downscaled to 720p resolution and peak limited to 30 frames per second
- When selecting one of the 720p30 `Presets`, a Source with 480p video at 30 frames per second will not be scaled or peak limited
- When selecting a `Preset` that does not include surround sound, only stereo audio is encoded; the discrete surround audio is dropped
- When selecting a `Preset` that includes surround sound, stereo audio is encoded and surround audio is "passed through" if possible (or encoded to a compatible format)

Select a `Preset` and explore which settings have changed. These settings will be used to make your new video.

The default `Fast 1080p30` preset is a good choice if you're just getting started. It's fast and compatible across a wide range of software and devices.

## General presets

HandBrake's General `Presets` use the [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14) and are intended to be broadly compatible across a wide range of software and devices.[^high-quality-settings-less-compatible]

Each General `Preset` is named according to the quality or speed, maximum resolution, and maximum frame rate it produces.

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

## Web presets

HandBrake's Web `Presets` use the broadly compatible [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14) and are tailored for sharing videos on the Internet.

Gmail `Presets` are designed to guarantee video up to a certain duration will produce a file less than 25 [MB](abbr:megabytes) for attaching to an email.[^email-size-limit] The maximum duration is part of each `Preset` name. Audio quality is slightly reduced, and visually noisy/grainy or high motion scenes may show a reduction in quality in order to achieve the target file size.

| Preset                        | Type | Video | Audio      | Picture Quality   | Encoding Speed | File Size     |
|-------------------------------|------|-------|------------|-------------------|----------------|---------------|
| Gmail Large 3 Minutes 720p30  | MP4  | H.264 | AAC stereo | Depends on source | Fast           | 25 MB or less |
| Gmail Medium 5 Minutes 480p30 | MP4  | H.264 | AAC stereo | Depends on source | Fast           | 25 MB or less |
| Gmail Small 10 Minutes 288p30 | MP4  | H.264 | AAC mono   | Depends on source | Fast           | 25 MB or less |

## Devices presets

HandBrake's Devices `Presets` target specific devices and classes of devices, such as mobile phones, tablets, TV media players, and game consoles.

Most Devices `Presets` use the broadly compatible [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14), while a select few use the [Matroska Multimedia Container](https://en.wikipedia.org/wiki/Matroska) to support advanced features such as [Ultra HD 4K resolution](https://en.wikipedia.org/wiki/4K_resolution) and additional audio types compatible with target devices.

Each Devices `Preset` is named according to the device name or class, maximum resolution, and maximum frame rate it produces.

| Preset                       | Type  | Video | Audio                            | Encoding Speed |
|------------------------------|-------|-------|----------------------------------|----------------|
| Android 1080p30              | MP4   | H.264 | AAC stereo                       | Medium         |
| Android 720p30               | MP4   | H.264 | AAC stereo                       | Medium         |
| Android 576p25               | MP4   | H.264 | AAC stereo                       | Medium         |
| Android 480p30               | MP4   | H.264 | AAC stereo                       | Medium         |
| Apple 1080p60 Surround       | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Apple 1080p30 Surround       | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Apple 720p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Apple 540p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Apple 240p30                 | MP4   | H.264 | AAC stereo                       | Medium         |
| Chromecast 1080p30 Surround  | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Fire TV 1080p30 Surround     | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Playstation 1080p30 Surround | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Playstation 720p30           | MP4   | H.264 | AAC stereo                       | Medium         |
| Playstation 540p30           | MP4   | H.264 | AAC stereo                       | Medium         |
| Roku 2160p60 4K Surround     | **MKV** | **H.265** | AAC stereo; AAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), DTS, or MP3 | **Very slow** |
| Roku 2160p30 4K Surround     | **MKV** | **H.265** | AAC stereo; AAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), DTS, or MP3 | **Very slow** |
| Roku 1080p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Roku 720p30 Surround         | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Roku 576p25                  | MP4   | H.264 | AAC stereo                       | Medium         |
| Roku 480p30                  | MP4   | H.264 | AAC stereo                       | Medium         |
| Windows Mobile 1080p30       | MP4   | H.264 | AAC stereo                       | Medium         |
| Windows Mobile 720p30        | MP4   | H.264 | AAC stereo                       | Medium         |
| Windows Mobile 540p30        | MP4   | H.264 | AAC stereo                       | Medium         |
| Windows Mobile 480p30        | MP4   | H.264 | AAC stereo                       | Medium         |
| Xbox 1080p30 Surround        | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |
| Xbox Legacy 1080p30 Surround | MP4   | H.264 | AAC stereo; Dolby Digital (AC-3) | Medium         |

## Matroska presets

HandBrake's Matroska `Presets` target software and devices supporting the [Matroska Multimedia Container](https://en.wikipedia.org/wiki/Matroska). MKV files support virtually all video and audio types, including many that the [MP4 container](https://en.wikipedia.org/wiki/MPEG-4_Part_14) does not.

Each Matroska `Preset` is named according to the video type, maximum resolution, and maximum frame rate it produces.

| Preset            | Type | Video | Audio         | Encoding Speed |
|-------------------|------|-------|---------------|----------------|
| H.264 MKV 1080p30 | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 720p30  | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 576p25  | MKV  | H.264 | AAC stereo    | Standard       |
| H.264 MKV 480p30  | MKV  | H.264 | AAC stereo    | Standard       |
| H.265 MKV 1080p30 | MKV  | H.265 | AAC stereo    | **Very slow**  |
| H.265 MKV 720p30  | MKV  | H.265 | AAC stereo    | **Very slow**  |
| H.265 MKV 576p25  | MKV  | H.265 | AAC stereo    | **Very slow**  |
| H.265 MKV 480p30  | MKV  | H.265 | AAC stereo    | **Very slow**  |
| VP8 MKV 1080p30   | MKV  | VP8   | Vorbis stereo | **Ultra slow** |
| VP8 MKV 720p30    | MKV  | VP8   | Vorbis stereo | **Ultra slow** |
| VP8 MKV 576p25    | MKV  | VP8   | Vorbis stereo | **Ultra slow** |
| VP8 MKV 480p30    | MKV  | VP8   | Vorbis stereo | **Ultra slow** |
| VP9 MKV 1080p30   | MKV  | VP9   | Opus stereo   | **Ultra slow** |
| VP9 MKV 720p30    | MKV  | VP9   | Opus stereo   | **Ultra slow** |
| VP9 MKV 576p25    | MKV  | VP9   | Opus stereo   | **Ultra slow** |
| VP9 MKV 480p30    | MKV  | VP9   | Opus stereo   | **Ultra slow** |

## Legacy presets

HandBrake's Legacy `Presets` are retained from previous HandBrake releases for compatibility with existing workflows and scripts.

| Preset              | Type | Video | Audio                            | Max Resolution | Encoding Speed |
|---------------------|------|-------|----------------------------------|----------------|----------------|
| Normal              | MP4  | H.264 | AAC stereo                       | 1080p          | Very fast      |
| High Profile        | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | 1080p          | Medium         |
| Universal           | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | 576p/480p      | Very fast      |
| iPod                | MP4  | H.264 | AAC stereo                       | 240p           | Ultra fast     |
| iPhone & iPod touch | MP4  | H.264 | AAC stereo                       | 540p           | Medium         |
| iPad                | MP4  | H.264 | AAC stereo                       | 720p           | Medium         |
| AppleTV             | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | 540p           | Medium         |
| AppleTV 2           | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | 720p           | Medium         |
| AppleTV 3           | MP4  | H.264 | AAC stereo; Dolby Digital (AC-3) | 1080p          | Medium         |
| Android             | MP4  | H.264 | AAC stereo                       | 480p           | Medium         |
| Android Tablet      | MP4  | H.264 | AAC stereo                       | 720p           | Medium         |
| Windows Phone 8     | MP4  | H.264 | AAC stereo                       | 720p           | Medium         |

[^high-quality-settings-less-compatible]: Higher quality General `Presets` may include settings that are incompatible with older or slower devices.

[^email-size-limit]: The 25 [MB](abbr:megabytes) per message size limit for email attachments is specific to the [Gmail](https://www.google.com/gmail/) service and may change in the future. Other email services may set different limits. It is generally recommended to use a [file hosting service](https://en.wikipedia.org/wiki/Comparison_of_file_hosting_services) when sharing large or long videos.
