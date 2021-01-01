---
Type:            article
State:           [ obsolete ]
Title:           Nvidia NVEnc Encoder
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

Nvidia NVEnc Encoder
==========================

Supported Hardware and Configurations 
--------------
- Nvidia GeForce GTX 10 and RTX 20 Series graphics cards are supported. 
- Driver "399.24" or later must be installed. 
- Windows 7 SP1 and Later. (Linux *may* work but via the command line interface only)


Please note, these are not hard limits and the feature *may* work on older series and operating systems, but this is not officially supported.

Enabling support
--------------
Support for the NVEnc encoder can be enabled in preferences under the video tab. If your system is not supported, the option will be greyed out.


Performance
--------------
Take note that only the encode portion of the encode pipeline is done on the Nvidia ASIC hardware. 
Every stage prior and after in the pipeline including (decoding, filters, a/v sync, muxing etc.) all happen on the CPU. As a result, it is normal to have high, or 100% CPU utilisation during encodes. 

It is common, particularly on lower end hardware that the CPU may be a bottleneck for the Nvidia encoder. To minimise this effect, turn off any filters that you do not require. 


Using the Advanced Options
--------------
NvEnc does have a limited set of advanced encoder options that can be used.  Generally speaking is is not recommended to change these parameters. The built-in presets offer a good range of options.

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
| coder            | string      |   X   |       | Options: auto, cabac, cavlc                                                    |
| temporal-aq      | boolean     |   X   |   X   |                                                                                |
| spatial-aq       | boolean     |   X   |   X   | For H.265, use "spatial_aq" for H.265 encodes. Note the underscore             |
| aq-strength      | int         |   X   |   X   | When Spatial AQ is enabled, the scale is from 1 (low) - 15 (aggressive)        |
| nonref_p         | boolean     |   X   |   X   | Enable automatic insertion of non-reference P-frames                           |
| strict_gop       | boolean     |   X   |   X   | Minimise GOP to GOP rate fluctuations                                          |
| weighted_pred    | boolean     |   X   |   X   |                                                                                |
| rc-lookahead     | int         |   X   |   X   | 0 to 27                                                                        |
| b_adapt          | boolean     |   X   |       | Set this to 0 to disable adaptive B-frame decision when lookahead is enabled   |
| no-scenecut      | boolean     |   X   |   X   | 1 = Disable adaptive I-frame insertion at scene cuts when using lookahead      |



