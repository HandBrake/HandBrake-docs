---
Type:            article
Title:           Media Foundation Encoder
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Apple VideoToolbox
==================

## Supported hardware

- Windows 10 for ARM with Qualcomm ARM processors. This encoder will not display on x86 based systems.

## Enabling support

If your computer is supported you will see one or more of the following video encoders added to the encoder control on the `Video` tab.

- H.264 (MediaFoundation)
- H.265 (MediaFoundation)


## Performance

Only video encoding is performed by the hardware encoder. Every stage prior to and after video encoding including decoding, filters, audio/video sync, audio encoding, muxing, etc., is performed by the CPU. As a result, it is normal to have high (even 100%) CPU utilisation during encodes.

It is common, particularly on lower-end hardware, for the CPU to be a bottleneck for the hardware video encoder. To minimize this effect, disable any filters that you do not require.

## Advanced options

There are no advanced options available for VideoToolbox encoders.
