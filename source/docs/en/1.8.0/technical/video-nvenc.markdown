---
Type:            article
Title:           NVIDIA NVENC
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.8.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

NVIDIA NVENC
============

## Supported Hardware and Configurations

- NVIDIA GeForce GTX Pascal (1050+), GTX/RTX Turing (1650+, 2060+), Ampere (3060+) or Ada Lovelace (4060+) series GPU or better
- NVIDIA Graphics Driver 546.33 or later
- Windows 10 or later
- Limited support is available on some modern Linux distros

Please note, these are not hard limits. Hardware encoding via NVENC *might* work on older series GPUs and older operating systems, but this is not officially supported.

## Enabling support

<!-- .system-windows -->
Support for the NVIDIA NVENC and NVDEC is enabled in preferences on the video tab. If your system is not supported, the option will be disabled.
<!-- /.system-windows -->

<!-- .system-linux -->
On Linux, there is no preference to enable the encoder. It will be available if the hardware / drivers report it as available.
<!-- /.system-linux -->

## Presets

The following presets are available under the 'Hardware' category in the presets menu:

- H.265 NVENC 2160p 4K
- H.265 NVENC 1080p

These are a good starting point for configuring HandBrake to use these encoders.

## Performance

HandBrake supports the NVIDIA NVENC encoder and NVDEC decoder.

The CPU will still be used for:

- Video decoding (if hardware decoding is disabled or unavailable)
- All video filters
- Audio encoding
- HandBrake's core engine (audio/video sync, etc.)
- Subtitles handling
- Muxing

These operations all happen in parallel as the encode job progresses. As such, it is normal to see high (or even 100%) CPU utilization even when using NVENC.

It is also common, particularly on older and lower-end hardware, for CPU-based operations to be a bottleneck in the hardware encoding pipeline, resulting in reduced performance. To minimize this effect, disable any video filters you do not require.

## Decoder Limitations

Since hardware decoding is usually only beneficial for directly feeding an adjacent hardware encoder, HandBrake will automatically disable hardware decoding fall back to software decoding whenever it necessary for the decoded video to make a roundtrip to the CPU and back; essentially, whenever a video filter is enabled, including the crop/scale filter.

## Advanced options

The NVIDIA NVENC hardware encoder has a limited set of advanced encoder options. Generally speaking, it is not recommended to change these parameters, as the built-in presets offer a good range of options for common uses.

When using HandBrake’s graphical interface, set the options in the `Advanced Options` field on the `Video` tab in the following format:

    option1=value1:option2=value2

When using HandBrake’s command line interface, set the options using the `--encopts` parameter as follows:

    --encopts="option1=value1:option2=value2"

### Option value types

The following value types are supported (each option only accepts one value type):

- integer  
  A number that can be written without a fractional or decimal component.

- boolean  
  0 means off (or disabled).  
  1 means on (or enabled).

- string  
  An alphanumeric string of characters. See the option’s comments for acceptable values.

### Options list

| Option           | Type        | H.264 | H.265 | Detail                                                                                                    |
|------------------|-------------|:-----:|:-----:|-----------------------------------------------------------------------------------------------------------|
| gpu              | string      |   ✓   |   ✓   | GPU selection. Values: `any` (default), `0` (first GPU), `1` (second GPU), etc.                           |
| coder            | string      |   ✓   |       | Coder selection. Values: `auto` (default), `cabac`, `cavlc`.                                              |
| temporal-aq      | boolean     |   ✓   |       | Set to `1` to enable Temporal Adaptive Quality, `0` to disable (default). Note the hyphen for H.264.      |
| temporal_aq      | boolean     |       |   ✓   | Set to `1` to enable Temporal Adaptive Quality, `0` to disable (default). Note the underscore for H.265. *Requires RTX Turing 1660 or better.* |
| spatial-aq       | boolean     |   ✓   |       | Set to `1` to enable Spatial Adaptive Quality, `0` to disable (default). Note the hyphen for H.264.       |
| spatial_aq       | boolean     |       |   ✓   | Set to `1` to enable Spatial Adaptive Quality, `0` to disable (default). Note the underscore for H.265.   |
| aq-strength      | int         |   ✓   |   ✓   | When Spatial AQ is enabled, the values scale is `1` (low) – `15` (aggressive). Default: `8`.              |
| nonref_p         | boolean     |   ✓   |   ✓   | Set to `1` to enable automatic insertion of non-reference P-frames, `0` to disable (default).             |
| strict_gop       | boolean     |   ✓   |   ✓   | Set to `1` to minimize GOP-to-GOP rate fluctuations, `0` to disable (default).                            |
| weighted_pred    | boolean     |   ✓   |   ✓   | Set to `1` to enable weighted prediction, `0` to disable (default).                                       |
| rc-lookahead     | int         |   ✓   |   ✓   | Number of frames to look ahead for rate control. Default: `0`.                                            |
| b_adapt          | boolean     |   ✓   |       | When lookahead is enabled, set this to `1` to enable adaptive B-frame decision (default), `0` to disable. |
| no-scenecut      | boolean     |   ✓   |   ✓   | When lookahead is enabled, set this to `1` to disable adaptive I-frame insertion at scene cuts, `0` to enable (default). |
