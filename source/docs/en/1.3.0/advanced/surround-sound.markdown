---
Type:            article
State:           [ draft ]
Title:           Surround Sound Guide
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

Surround Sound Guide
=============================

There are many different formats for multi-channel audio which your source may have:

- Dolby Pro Logic
- Dolby Digital Surround
- Digital Theater System (DTS)
- Digital Theater System Master Audio (DTS-HD) 
- TrueHD

HandBrake can take these and either pass them through to your source or convert them to another format with a downmix.

## Downmixing
When you are not using a passthru in the codec selection, you can choose the downmix from the "Mixdown" dropdown.

The options you have will depend on what the source track is and how many channels it has.

- Dolby Surround
- Dobly ProLogic II
- 5.1 Surround
- 6.1 Surround
- 7.1 Surround

By default HandBrake will downmix your audio to Dolby ProLogic II which sounds good on both stereo and multi-channel audio systems alike. However, if you want the true experience you can choose the appropriate channel count surround option from the "Mixdown" dropdown.

## Audio passthru

HandBrake also supports passing through the source audio track, bit-for-bit without altering it.

The following source format's can be passed thru.

- AC3
- E-AC3
- DTS    (Limited player compatibility in MP4)
- DTS-HD (Limited player compatibility in MP4)
- TrueHD (MKV files only)
- FLAC   (MKV files only)
- AAC
- MP3
