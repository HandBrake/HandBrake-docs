---
Type:            article
Title:           AMD VCE
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

AMD VCE
=======

## Supported hardware 

- AMD Radeon RX 400, 500, Vega/II, Navi series GPU or better
- Ubuntu Linux 18.04.3 or later, Windows 10

Please note, these are not hard limits. Hardware encoding via VCE *might* work on older series GPUs and older operating systems, but this is not officially supported.

On Ubuntu Linux, [AMD Radeon Software for Linux version 19.20 or later](https://www.amd.com/en/support/kb/release-notes/rn-amdgpu-unified-linux) is required to use the VCE encoder. Install using the `amdgpu-pro-install` script according to AMD’s [installation guide](https://amdgpu-install.readthedocs.io/en/latest/). Additionally, you must manually install the `amf-amdgpu-pro` package included in the download.

## Enabling support

Support for the AMD VCE encoder is enabled in preferences on the video tab. If your system is not supported, the option will be disabled.

## Performance

Only video encoding is performed by the hardware encoder. Every stage prior to and after video encoding including decoding, filters, audio/video sync, audio encoding, muxing, etc., is performed by the CPU. As a result, it is normal to have high (even 100%) CPU utilisation during encodes.

It is common, particularly on lower-end hardware, for the CPU to be a bottleneck for the hardware video encoder. To minimize this effect, disable any filters that you do not require.

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

| Option           | Type        | H.264 | H.265 | Comment                                                                        |
|------------------|-------------|------------------------------------------------------------------------------------------------|
| preanalysis      | boolean     |   X   |   X   |                                                                                |
| vbaq             | boolean     |   X   |   X   |                                                                                |
| enforce_hrd      | boolean     |   X   |   X   |                                                                                |
| max_au_size      | int         |   X   |   X   |                                                                                |
| me_half_pel      | boolean     |   X   |   X   |                                                                                |
| me_quarter_pel   | boolean     |   X   |   X   |                                                                                |
| coder            | string      |       |   X   | Options: auto, cabac, cavlc                                                    |
| bf_delta_qp      | boolean     |       |   X   | B-Picture Delta QP                                                             |
| bf_ref           | boolean     |       |   X   | Enable Reference to B-Frames                                                   |
| bf_ref_delta_qp  | boolean     |       |   X   | Reference B-Picture Delta QP                                                   |
| intra_refresh_mb | int         |       |   X   |                                                                                |
