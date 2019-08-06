---
Type:            article
State:           [ draft ]
Title:           Apple VideoToolbox Encoder
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Apple VideoToolbox
==========================

Supported Hardware and Configurations 
--------------
- Most 2015 or later Mac Computers

Please note, these are not hard limits and the feature *may* work on older series and operating systems, but this is not officially supported.

Enabling support
--------------
If your computer is supported you will see the following video encoders added to the dropdown on the "Video" tab.
- H.264 (VideoToolbox)
- H.265 (VideoToolbox)

Choice of the underlying hardware encoder (Intel QuickSync or AMD VCE) is not available. The highest quality option will typically be chosen)


Performance
--------------
Take note that only the encode portion of the encode pipeline is done on hardware. 
Every stage prior and after in the pipeline including (decoding, filters, a/v sync, muxing etc.) all happen on the CPU. As a result, it is normal to have high, or 100% CPU utilisation during encodes. 

It is common, particularly on lower end hardware that the CPU may be a bottleneck for the encoder. To minimise this effect, turn off any filters that you do not require. 


Advanced Options
--------------

There are no advanced options available for this encoder.

