---
Type:            article
State:           [ draft ]
Title:           Nvidia NVEnc Encoder
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Nvidia NVEnc Encoder
==========================

Supported Hardware and Configurations 
--------------
- Nvidia Geforce 10 and 20 Series graphics cards are supported. 
- Driver "399.24" or later must be installed. 
- Windows 7 SP1 and Later. (Linux *may* work via the command line interface only)


Please note, these are not hard limits and the feature *may* work on older series and operating systems, but this is not officially supported.

Enabling support
--------------
Support for the NVEnc encoder can be enabled in preferences under the video tab. If your system is not supported, the option will be greyed out.


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

  
Available Options
--------------

| Option           | Type        | Comment                                                                        |
|------------------|-------------|------------------------------------------------------------------------------- |
| coder            | boolean     |                                                                                |
| temporal-aq      | boolean     |                                                                                |
| nonref_p         | boolean     |                                                                                |
| strict_gop       | boolean     |                                                                                |
| aq-strength      | int         | When Spatial AQ is enabled, the scale is from 1 (low) - 15 (aggressive)        |
| weighted_pred    | boolean     |                                                                                |
| forced-idr       | boolean     | H.265 encoder only                                                             |


