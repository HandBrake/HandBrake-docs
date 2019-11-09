---
Type:            article
Title:           Nvidia Nvenc
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

Nvidia Nvenc
============

## Supported Hardware and Configurations 

- Nvidia GeForce GTX Pascal (1050+) and RTX Turing (1650+, 2060+) series GPU or better
- Nvidia Graphics Driver 418.81 or later
- Windows 10
- Experimental Linux support is available in HandBrake’s command line interface

Please note, these are not hard limits. Hardware encoding via Nvenc *might* work on older series GPUs and older operating systems, but this is not officially supported.

## Enabling support

Support for the Nvidia Nvenc encoder is enabled in preferences on the video tab. If your system is not supported, the option will be disabled.

## Performance

Only video encoding is performed by the hardware encoder. Every stage prior to and after video encoding including decoding, filters, audio/video sync, audio encoding, muxing, etc., is performed by the CPU. As a result, it is normal to have high (even 100%) CPU utilisation during encodes.

It is common, particularly on lower-end hardware, for the CPU to be a bottleneck for the hardware video encoder. To minimize this effect, disable any filters that you do not require.

## Advanced options

The Nvidia Nvenc hardware encoder has a limited set of advanced encoder options. Generally speaking, it is not recommended to change these parameters, as the built-in presets offer a good range of options for common uses.

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
| coder            | string      |   X   |       | Options: auto, cabac, cavlc                                                    |
| temporal-aq      | boolean     |   X   |   X   |                                                                                |
| spatial-aq       | boolean     |   X   |   X   | For H.265, use "spatial_aq" for H.265 encodes. Note the underscore             |
| aq-strength      | int         |   X   |   X   | When Spatial AQ is enabled, the scale is from 1 (low) - 15 (aggressive)        |
| nonref_p         | boolean     |   X   |   X   | Enable automatic insertion of non-reference P-frames                           |
| strict_gop       | boolean     |   X   |   X   | Minimize GOP to GOP rate fluctuations                                          |
| weighted_pred    | boolean     |   X   |   X   |                                                                                |
| rc-lookahead     | int         |   X   |   X   | 0 to 27                                                                        |
| b_adapt          | boolean     |   X   |       | Set this to 0 to disable adaptive B-frame decision when lookahead is enabled   |
| no-scenecut      | boolean     |   X   |   X   | 1 = Disable adaptive I-frame insertion at scene cuts when using lookahead      |
