---
Type:            article
Title:           Intel Quick Sync Video
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Intel Quick Sync Video
======================

## Supported Hardware and Configurations

- Intel Skylake (9th Generation Core) CPU or later with Intel HD, Iris Xe or Arc graphics.
- Windows 10 or Later
  - Please make sure your Intel GPU drivers are up-to-date. Driver version should be >= 31.0.x.x
- Some Modern Linux versions. 
- FreeBSD

Please note, these are not hard limits. Hardware encoding via Intel QSV *might* work on older series GPUs and older operating systems, but this is not officially supported.

A plugin with all required components for Intel QSV encoding using the Flatpak distribution of HandBrake is available on the official [HandBrake website](https://handbrake.fr).


<!-- .system-linux -->

### Linux support for Low Power Encoding mode

By default, HandBrake will try default to the "lowpower" encoding path available in QSV. In order for this to work, the following requirements must be met:

- HuC firmware is required for pre-Alderlake systems. Please see https://github.com/intel/media-driver#known-issues-and-limitations for more details.

Alternatively, you can disable lowpower mode by adding the following option in the "More Settings" box on the video tab:

- "lowpower=0"
 
To avoid having to set this each time, we recommend you save this as a new preset.

### Linux support for Intel ARC

Please note, support for Intel Arc currently has some complex system requirements.
Making changes to your system kernel / drivers can be risky. As such, you do so at your own risk.

- Linux Kernel version 6.2 or later is required.
- Up-to-date MESA package 
- HuC firmware must be enabled. 
- Latest Intel GPU Firmware. (Available from https://github.com/intel-gpu/intel-gpu-firmware.git)


<!-- /.system-linux -->

## Enabling support

Support for the Intel Quick Sync Video encoder is enabled in preferences on the video tab. If your system is not supported, the option will be disabled.

## Presets

The following presets are available under the 'Hardware' category in the presets menu:

- AV1 QSV 2160P 4K
- H.265 QSV 2160P 4K
- H.265 QSV 1080p

These are a good starting point for configuring HandBrake to use these encoders.

## Performance

HandBrake supports both QSV encode and decode.

The CPU will still be used for:

- Video decoding (if QSV decode is disabled or your source is in a format which is not supported by the QSV hardware)
- Most video filters
- Audio encoding 
- HandBrake's engine, A/V sync etc
- Subtitles
- Muxing

These operations all happen in parallel as the job progresses. As such, it is normal to see high (or even 100%) CPU utilisation even when using QSV.

It is also common, particularly on lower-end or older hardware, for the CPU to be a bottleneck which will cause lower than expected performance. To minimize this effect, disable any filters that you do not require.


## Advanced options

The QSV hardware encoder has a limited set of advanced encoder options. Generally speaking, it is not recommended to change these parameters, as the built-in presets offer a good range of options for common uses.

If using HandBrake’s graphical interface, you can set the options in the `Advanced Options` field on the `Video` tab in the following format:

    option1=value1:option2=value2
    
If using HandBrake’s command line interface, use the `--encopts` parameter as follows:

    --encopts="option1=value1:option2=value2"
