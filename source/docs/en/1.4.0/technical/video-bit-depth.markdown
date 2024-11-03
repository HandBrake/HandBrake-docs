---
Type:            article
State:           [ obsolete ]
Title:           10 and 12bit encoding.
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.4.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

10 and 12-bit encoding 
===================

## Supported Encoders

The follow encoders support higher than 8-bit.

| Encoder             |
|---------------------|
| x264                |
| x265                |
| Intel QuickSync     |
| Apple Video Toolbox |

Please note, you must select a "10-bit" or "12-bit" encoder from the "Video Encoder" dropdown on the "Video" tab to enable this feature.
For hardware encoders, the option will only be shown if the system supports it. 

### Limitations

Some filters that ship with HandBrake, do not currently support higher than 8-bit.

When these filters are enabled, HandBrake's pipeline will run at 8-bit rather than 10-bit or 12-bit.
This applies to the following filters:

- Detelecine
- Decomb
- Comb Detect
- Denoise
- Nlmeans
- Chroma Smooth
- Lapsharp
- Unsharp
- Grayscale 
