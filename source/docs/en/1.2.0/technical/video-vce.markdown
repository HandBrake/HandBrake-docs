---
Type:            article
State:           [ obsolete ]
Title:           AMD VCE Encoder
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

AMD VCE Encoder
==========================

Supported Hardware and Configurations 
--------------
- AMD Radeon RX 400 Series, Vega or better
- Windows 10

Please note, these are not hard limits and the feature *may* work on older cards and operating systems, but this is not officially supported.

Enabling support
--------------
Support for the VCE encoder can be enabled in preferences under the video tab. If your system is not supported, the option will be greyed out.


Performance
--------------
Take note that only the encode portion of the encode pipeline is done on the AMD hardware. 
Every stage prior and after in the pipeline including (decoding, filters, a/v sync, muxing etc.) all happen on the CPU. As a result, it is normal to have high, or 100% CPU utilisation during encodes. 

It is common, particularly on lower end hardware that the CPU may be a bottleneck for the encoder. To minimise this effect, turn off any filters that you do not require. 


Using the Advanced Options
--------------
VCE does have a limited set of advanced encoder options that can be used.  Generally speaking is is not recommended to change these parameters. The built-in presets offer a good range of options.

From the command line, you can use the --encopts parameter as follows:

    --encopts="option1=value1:option2=value2"


From the graphical user interface, just set the options in the dedicated options text box on the Video tab.

    option1=value1:option2=value2

Option Types
--------------
The following value types are supported (each option only accepts one value type):

- integer
  A number that can be written without a fractional or decimal component.

- boolean
  0 means off (or disabled).
  1 means on (or enabled).
 
- string
  Takes a setting defined as s string. See comment for details. 


Available Options
--------------

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
