---
Type:            article
Title:           Apple VideoToolbox
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

Apple VideoToolbox
==================

## Supported hardware

- Most 2015 and later Macs

Please note, these are not hard limits. Hardware encoding via VideoToolbox *might* work on older series GPUs and older operating systems, but this is not officially supported.

## Enabling support

If your computer is supported you will see one or more of the following video encoders added to the encoder control on the `Video` tab.

- H.264 (VideoToolbox)
- H.265 (VideoToolbox)

Choice of the underlying hardware encoder (AMD VCE or Intel QuickSync Video) is not available. The highest quality option will typically be chosen.

## Performance

Only video encoding is performed by the hardware encoder. Every stage prior to and after video encoding including decoding, filters, audio/video sync, audio encoding, muxing, etc., is performed by the CPU. As a result, it is normal to have high (even 100%) CPU utilisation during encodes.

It is common, particularly on lower-end hardware, for the CPU to be a bottleneck for the hardware video encoder. To minimize this effect, disable any filters that you do not require.

## Advanced options

There are no advanced options available for VideoToolbox encoders.
