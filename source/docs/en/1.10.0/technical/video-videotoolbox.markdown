---
Type:            article
Title:           Apple VideoToolbox
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

Apple VideoToolbox
==================

## Supported hardware

Encoding: most 2011 and later Macs

Please note, these are not hard limits. Hardware encoding via VideoToolbox *might* work on older series GPUs and older operating systems, but this is not officially supported.

Decoding: macOS 13 and later

## Enabling support

If your computer is supported you will see one or more of the following video encoders added to the encoder control on the `Video` tab.

- H.264 (VideoToolbox)
- H.265 (VideoToolbox)
- H.265 10bit (VideoToolbox)

Choice of the underlying hardware encoder (AMD VCE, Intel Quick Sync Video, or Apple Media Engine) is not available. The highest quality option will typically be chosen.

## Presets

The following presets are available under the 'Hardware' category in the presets menu:

- H.265 Apple VideoToolbox 2160P 4K
- H.265 Apple VideoToolbox 1080p

These are a good starting point for configuring HandBrake to use these encoders.

## Performance

By default only video encoding is performed by the hardware encoder. Every stage prior to and after video encoding including decoding, filters, audio/video sync, audio encoding, muxing, etc., is performed by the CPU. As a result, it is normal to have high (even 100%) CPU utilisation during encodes.

To decrease CPU utilisation, hardware decoders can be enabled in the Advanced preferences panel on macOS 13 and later, either to be used only in combination with the hardware encoders, or always.

Additionally, the following filters will be run on the GPU when both hardware decoders & encoders are selected:

- Framerate Shaper
- Rotate
- Crop & Scale
- Pad
- Comb Detect
- Yadif
- Bwdif
- Chroma Smooth
- Unsharp
- Lapsharp
- Grayscale
- Render Sub

It is common, particularly on lower-end hardware, for the CPU to be a bottleneck for the hardware video encoder. To minimize this effect, enable the hardware decoders, and disable any filters that you do not require and can't be run on the GPU.

## Advanced options

The VideoToolbox encoder has a limited set of advanced encoder options. Generally speaking, it is not recommended to change these parameters, as the built-in presets offer a good range of options for common uses.

If using HandBrake’s graphical interface, you can set the options in the `Advanced Options` field on the `Video` tab in the following format:

    option1=value1:option2=value2
    
If using HandBrake’s command line interface, use the `--encopts` parameter as follows:

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

| Option                      | Type        | H.264 | H.265 | Detail                                                                                                    |
|-----------------------------|-------------|:-----:|:-----:|-----------------------------------------------------------------------------------------------------------|
| gpu-registryid              | int         |   ✓   |   ✓   | GPU selection. If set, the VideoToolbox will only use a hardware encoder running on the GPU specified by the provided GPU registryID. |
| keyint                      | int         |   ✓   |   ✓   | Sets the maximum interval between key frames, also known as the key frame rate.                           |
| bframes                     | boolean     |   ✓   |   ✓   | Set to `1` to enable Reference B-Frames (default), `0` to disable.                                        |
| cabac                       | boolean     |   ✓   |       | Set to `1` to enable cabac, `0` to disable. Note the hyphen for H.264.                                    |
| slice-max-size              | boolean     |   ✓   |       | Sets the maximum slice size for H.264 encoding in bytes.                                                  |
| vbv-bufsize                 | boolean     |   ✓   |   ✓   | Sets the size of the VBV buffer in bytes per second.                                                      |
| vbv-maxrate                 | boolean     |   ✓   |   ✓   | Sets the maximum rate the VBV buffer should be assumed to refill at, in bytes per second.                 |
| qpmin                       | int         |   ✓   |   ✓   | Sets the minimum quantizer that will be used.                                                             |
| qpmax                       | int         |   ✓   |   ✓   | Sets the maximum quantizer that will be used.                                                             |
| ref                         | int         |   ✓   |   ✓   | Sets the maximum number of reference frames.                                                              |
| max-frame-delay             | int         |   ✓   |   ✓   | The maximum frame delay count is the maximum number of frames that a compressor is allowed to hold before it must output a compressed frame. |
| look-ahead-frame-count      | int         |   ✓   |   ✓   | The suggested number of frames to look ahead for rate control.                                            |
| disable-spatial-adaptive-qp | boolean     |   ✓   |   ✓   | Disable spatial adaptation of the quantization parameter (QP) based on per-frame statistics.              |
