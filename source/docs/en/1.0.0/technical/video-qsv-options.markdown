---
Type:            article
State:           [ obsolete ]
Title:           Intel QuickSync Encoder Options
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Intel Quick Sync Video Advanced Configuration
==========================

Using the Advanced Options
--------------

From the command line, you can use the --encopts paramater as follows:

	--encopts="option1=value1:option2=value2"


From the graphical user interface, just set the options in the dedicated text box:

	option1=value1:option2=value2

Option Types
--------------
The following value types are supported (each option only accepts one value type):

- integer
  A number that can be written without a fractional or decimal component.

- float
  The finite decimal representation of a real number.

- boolean
  0 means off (or disabled).
  1 means on (or enabled).

Available Options
--------------

- target-usage (or tu) <integer>
  - Sets the trade-off between quality and speed, from 1 (best quality) to 7 (best speed).
  - Default: 2

- num-ref-frame (or ref) <integer>
  - Number of reference frames, from 1 to 16.
  - 0 means unspecified (set at runtime by the implementation).
  - Default: 0 (unspecified)

- gop-ref-dist <integer>  
  - Distance between I or P reference frames, from 1 to 16.
  - -1 means automatic (4 in constant QP mode, 3 otherwise).
  - 0 means unspecified (set at runtime by the implementation).
  - 1 means B-frames will not be used.
  - Default: -1 (automatic)
  - Note: may be sanitized to a lower value in some cases to avoid hangs.

- gop-pic-size (or keyint) <integer>
  - Number of pictures within the current GOP (aka "keyframe interval").
  - -1 means automatic (32 in constant QP mode, 1 second long otherwise).
  - 0 means unspecified (set at runtime by the implementation).
  - 1 means only I-frames will be used.
  - 2 means B-frames will not be used.
  - Default: -1 (automatic)

- cavlc <boolean>
  - Use CAVLC instead of CABAC entropy coding. Reduces compression efficiency.
  - It may improve encoding performance slightly, especially on older hardware.
  - Note: you can also use ''cabac'' (same as ''cavlc'' with reversed meaning).
  - Default: 0 (CAVLC off, CABAC on)

- b-pyramid <integer>
  - Enables or disables "Pyramidal B-frames" which can improve compression efficiency.
  - It may be incompatible with some playback devices (such as the first generation AppleTV).
  - Note that this options modifies other parameters (gop-ref-dist, num-ref-frame, gop-pic-size).
  - -1 means automatic (on in constant QP mode, off otherwise).
  - 0 means off (disabled).
  - 1 means on (enabled).
  - Default: -1 (automatic)
  - Caveats: requires hardware support (4th gen. Intel Core processor or equivalent), and driver support for version 1.6 of the Media SDK API.

- mbbrc <boolean>
  - Enables macroblock-level bitrate control that generally improves subjective visual quality.
  - It may have a negative impact on performance and objective visual quality metrics.
  - Default: 1 (on)
  - Note: not compatible with Constant QP or !LookAhead rate control methods (ignored).
  - Caveats: requires hardware support (4th gen. Intel Core processor or equivalent), and driver support for version 1.6 of the Media SDK API.

- extbrc <boolean>
  - Use extended bitrate control algorithms.
  - It generally improves objective visual quality metrics and subjective visual quality,
  - but can also lead to violation of HRD conformance and may significantly reduce performance.
  - Default: 0 (off)
  - Note: not compatible with Constant QP or !LookAhead rate control methods (ignored).
  - Caveats: requires driver support for version 1.6 of the Media SDK API.

- trellis <integer>
  - Enables trellis quantization.
  - 0 means trellis is disabled.
  - 1 means trellis is enabled for I-frames only.
  - 2 means trellis is enabled for I and P-frames.
  - 3 means trellis is enabled for all frames (I, P and B).
  - Default: 0 (disabled)
  - Note: ignored if the target-usage is too low (usually, only works in combination with tu=1).
  - Caveats: requires hardware support (4th gen. Intel Core processor or equivalent), and driver support for version 1.7 of the Media SDK API.

- lookahead (or la) <boolean>
  - Use the !LookAhead (LA or LA_ICQ) bitrate control algorithm.
  - Default: 1 (on)
  - Caveats: requires hardware support (4th gen. Intel Core processor or equivalent), and driver support for version 1.7 (1.8 for LA_ICQ) of the Media SDK API.

- lookahead-depth (or la-depth) <integer>
  - If !LookAhead bitrate control is enabled, number of frames that are analyzed before encoding, from 11 to 60.
  - Default: 40
  - Note: may be sanitized to a lower value in some cases to avoid hangs.
  - Caveats: requires hardware support (4th gen. Intel Core processor or equivalent), and driver support for version 1.7 of the Media SDK API.

- force-cqp <boolean>
  - In Constant Quality mode, use Constant QP rate control, even if Intelligent Constant Quality is available.
  - Default: 0 (ICQ enabled if available)

- cqp-offset-i <integer>   |  cqp-offset-p <integer>  |   cqp-offset-b <integer>
  - In constant QP (CQP) bitrate control mode, specify offset from the global quality/QP value for I, P and B-frames.
  - Defaults are 0, 2 and 4, respectively.

- vbv-maxrate <integer>
  - Sets the maximum rate the VBV buffer should be assumed to refill at, in kilobits per second (Kbps).
  - Default: 0 (set at runtime by the implementation)
  - Note: not compatible with Constant QP, Intelligent Constant Quality or !LookAhead rate control methods (ignored).

- vbv-bufsize <integer>
  - Sets the size of the VBV buffer in kilobits (Kb).
  - Default: 0 (set at runtime by the implementation)
  - Note: not compatible with Constant QP, Intelligent Constant Quality or !LookAhead rate control methods (ignored).

- vbv-init <float>
  - Sets how full the VBV Buffer must be before playback starts.
  - If it is less than 1, then the initial fill is: vbv-init * vbv-bufsize.
  - Otherwise it is interpreted as the initial fill in kilobits (Kb).
  - Default: 0 (set at runtime by the implementation)
  - Note: not compatible with Constant QP, Intelligent Constant Quality or !LookAhead rate control methods (ignored).
