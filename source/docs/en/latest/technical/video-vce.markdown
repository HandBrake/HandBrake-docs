---
Type:            article
Title:           AMD VCE
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

AMD VCE
=======

## Supported Hardware and Configurations

- AMD Radeon RX 400, 500, Vega/II, Navi series GPU or better
- Ubuntu Linux 20.04 or later
- Windows 10

Please note, these are not hard limits. Hardware encoding via VCE *might* work on older series GPUs and older operating systems, but this is not officially supported.

On Ubuntu Linux, [AMD Radeon Software for Linux version 19.20 or later](https://www.amd.com/en/support/kb/release-notes/rn-amdgpu-unified-linux) is required to use the VCE encoder. Install using the `amdgpu-pro-install` script according to AMD’s [installation guide](https://amdgpu-install.readthedocs.io/en/latest/). Additionally, you must manually install the `amf-amdgpu-pro` package included in the download.

## Enabling support

Support for the AMD VCE encoder is enabled in preferences on the video tab. If your system is not supported, the option will be disabled.

## Performance

HandBrake supports the AMD VCE encoder but does not support the VCN decoder.

The CPU will still be used for:

- Video decoding 
- All video filters
- Audio encoding 
- HandBrake's engine, A/V sync etc
- Subtitles
- Muxing

These operations all happen in parallel as the job progresses. As such, it is normal to see high (or even 100%) CPU utilisation even when using VCE.

It is also common, particularly on lower-end or older hardware, for the CPU to be a bottleneck which will cause lower than expected performance. To minimize this effect, disable any filters that you do not require.

## Advanced options

The AMD VCE hardware encoder has a limited set of advanced encoder options. Generally speaking, it is not recommended to change these parameters, as the built-in presets offer a good range of options for common uses.

From HandBrake’s command line interface, use the `--encopts` parameter as follows:

    --encopts="option1=value1:option2=value2"

From HandBrake’s graphical interface, set the options in the `Advanced Options` field on the `Video` tab:

    option1=value1:option2=value2

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

| Option           | Type        | H.264 | H.265 | Detail                                                                               |
|------------------|-------------|:-----:|:-----:|--------------------------------------------------------------------------------------|
| coder            | string      |   ✓   |       | Coder selection. Values: `auto` (default), `cabac`, `cavlc`.                         |
| preanalysis      | boolean     |   ✓   |   ✓   | Set to `1` to enable preliminary analysis, `0` to disable (default).                 |
| vbaq             | boolean     |   ✓   |   ✓   | Set to `1` to enable Variance Based Adaptive Quantization, `0` to disable (default). |
| enforce_hrd      | boolean     |   ✓   |   ✓   | Set to `1` to enforce Hypothetical Reference Decoder, `0` to disable (default).      |
| max_au_size      | int         |   ✓   |   ✓   | Maximum Access Unit size for rate control, in bits. Default: `0` (automatic).        |
| me_half_pel      | boolean     |   ✓   |   ✓   | Set to `1` to enable half-pixel motion estimation (default), `0` to disable.         |
| me_quarter_pel   | boolean     |   ✓   |   ✓   | Set to `1` to enable quarter-pixel motion estimation (default), `0` to disable.      |
| bf_delta_qp      | int         |   ✓   |       | B-Picture Delta QP. The values scale is `-10`–`10`. Default: `4`.                    |
| bf_ref           | boolean     |   ✓   |       | Set to `1` to enable Reference B-Frames (default), `0` to disable.                   |
| bf_ref_delta_qp  | int         |   ✓   |       | Reference B-Picture Delta QP. The values scale is `-10`–`10`. Default: `4`.          |
| intra_refresh_mb | int         |   ✓   |       | Number of Intra-Refresh Macroblocks per slot. Default: `0` (automatic).              |
