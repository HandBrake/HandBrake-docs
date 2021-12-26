---
Type:            article
Title:           HDR10 encoding.
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.4.0
Language:        English
Language_Code:   en
Authors:         [ Nomis101 ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

HDR10 encoding 
===================

## Supported Encoders

All encoders that support 10-bit encoding are also capable of HDR10 encoding. The follow encoders support higher than 8-bit.

| Encoder             |
|---------------------|
| x264                |
| x265                |
| Intel QuickSync     |
| Apple Video Toolbox |

HandBrake will automatically passthru mastering display metadata and content light metadata from the source video to to final encode. For x265 encodings, HandBrake will also set the hdr-opt flag for you.

### Limitations

HandBrake will only handle HDR10 metadata. HDR10+ and Dolby Vision is currently not supported.

