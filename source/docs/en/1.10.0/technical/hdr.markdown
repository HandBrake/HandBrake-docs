---
Type:            article
Title:           HDR encoding.
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.10.0
Language:        English
Language_Code:   en
Authors:         [ Nomis101 ]
Copyright:       2024 HandBrake Team
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
| Apple VideoToolbox  |

HandBrake will automatically passthru mastering display metadata and content light metadata from the source video to to final encode. For x265 encodings, HandBrake will also set the hdr-opt flag for you.

### Limitations

HDR10 metadata will be written only in the container and not in the bitstream when using NVIDIA NVEnc or AMD VCN.

## HDR10+

The following 10-bit encoders support HDR10+ Dynamic metadata:

| Encoder             |
|---------------------|
| x265                |
| SVT-AV1             |
| Apple VideoToolbox HEVC |

## Dolby Vision

Dolby Vision is supported when using the following 10-bit encoders:

| Encoder             |
|---------------------|
| x265                |
| SVT-AV1             |
| Apple VideoToolbox HEVC  |

The supported Dolby Vision profiles and cross compatibility IDs are:
  - 5.0
  - 7.6 (base layer only, converted to 8.1)
  - 8.1
  - 8.4

When using an AV1 encoder, profile will be set to 10 for every cross compatibility ID, per Dolby Vision specifications.
