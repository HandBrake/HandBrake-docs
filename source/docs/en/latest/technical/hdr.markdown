---
Type:            article
Title:           HDR encoding.
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Nomis101 ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

HDR encoding 
===================

## HDR10

All encoders that support 10-bit encoding are also capable of HDR10 encoding. The follow encoders support higher than 8-bit.

| Encoder             |
|---------------------|
| x264                |
| x265                |
| SVT-AV1             |
| VP9                 |
| NVIDIA NVEnc        |
| AMD VCN             |
| Intel QuickSync     |
| Apple Video Toolbox |

HandBrake will automatically passthru mastering display metadata and content light metadata from the source video to to final encode. For x265 encodings, HandBrake will also set the hdr-opt flag for you.

### Limitations

HDR10 metadata will be written only in the container and not in the bitstream when using NVIDIA NVEnc or AMD VCN.

## HDR10+

The following 10-bit encoders support HDR10+ Dynamic metadata:

| Encoder             |
|---------------------|
| x265                |
| SVT-AV1             |

## Dolby Vision

Dolby Vision is supported only when using the x265 10-bit encoder, the following Dolby Vision profiles and cross compatibility IDs are supported:
  - 5.0
  - 7.6 (base layer only, converted to 8.1)
  - 8.1
  - 8.4
