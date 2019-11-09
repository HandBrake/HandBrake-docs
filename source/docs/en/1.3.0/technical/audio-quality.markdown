---
Type:            article
State:           [ draft ]
Title:           Audio Quality
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Audio Quality
=============================

The Audio Tracks quality settings are controlled via the "Audio" tab on the main window.

Each track can be configured to suit your needs.

<!-- .system-windows -->

![HandBrake's Audio Track Settings](../../images/windows/audio-quality-1.0.0.png "HandBrake's Audio Track Settings")

<!-- /.system-windows -->

There are several different modes HandBrake can operate in.

### Average Bitrate

HandBrake supports average bitrate for all audio encoders except FLAC.

### Quality based Encoding

Quality based encoding is supported for the following codecs:
- AAC
- MP3
- Vorbis

The scale of the quality if much less pronounced compared to the video quality slider, so changes do not have nearly as big an impact on file size. 

### Lossless

HandBrake supports FLAC (both 16 and 24bit) when the output format is MKV.

In addition, HandBrake can passthru the following source audio track formats:

- AC3 and E-AC3
- DTS, DTS-HD
- TrueHD
- AAC
- MP3
- FLAC

  



