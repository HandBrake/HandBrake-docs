---
Type:            article
State:           [ draft ]
Title:           Frame rate
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Frame rate
==========

A video's frame rate is how many still pictures are displayed per second. Common frame rates are 23.976/24 for film, 25/50 for European broadcast standards, and 29.97/59.94 or 30/60 for North American broadcast standards. Modern video formats can be variable frame rate, switching between different frame rates on the fly, e.g. from 23.976 film to 29.97 NTSC and back.

<!-- .system-macos -->

![Frame rate controls on Mac](../../images/mac/frame-rate-controls-1.0.0.png "HandBrake's frame rate controls.")

<!-- /.system-macos -->

Selecting `Same as Source` allows you to select `Variable Frame Rate (VFR)`, which instructs HandBrake to make your new video's frame rate an exact copy of your `Source` frame rate. No frame rate conversion is performed.

`Constant Frame Rate (CFR)` makes your new video exactly one frame rate throughout. When used with `Same as Source`, HandBrake will detect the frame rate of your `Source` and make sure any variable portions are made constant at the same rate. When used with a specific frame rate, HandBrake conforms your entire video to the new frame rate. This method is not recommended except in special circumstances, such as encoding for import into an [NLE](https://en.wikipedia.org/wiki/Non-linear_editing_system) or for extremely old devices.

Selecting a specific frame rate allows you to select `Peak Frame Rate (PFR)`, which is the best of both worlds. Think of it as a threshold or limit. HandBrake will leave portions of your video at or below the peak frame rate you select unchanged, while limiting higher frame rate video to the peak frame rate you select.

HandBrake versions prior to 1.0.0 defaulted to `Same as Source` and `Variable Frame Rate (VFR)`. This was not of a problem with most videos of the past, but the advent of high frame rate video recording for mobile devices, action cams, and more, this method cannot ensure such videos will be compatible with devices having considerable frame rate limitations—including nearly all modern media devices that *do not* create video. To remedy this, the built-in presets in HandBrake 1.0.0 and later use `Peak Frame Rate (PFR)` for broader compatibility.
