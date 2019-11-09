---
Type:            article
State:           [ draft ]
Title:           Profiles and Levels
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Profiles and Levels
==========================

Video Profiles
--------------

Define the features / capabilities that the encoder can use.

You can think of the profile as the level of complexity required in encode / decode. The higher the complexity, the more CPU power is needed to encode/decode. Setting a profile, constrains the encode to using settings that are allowed for that profile level.

Typically, devices will advertise that they are compatible for a particular profile and level, so you can simply set the option that matches your device for the best chance of compatibility.

Note that setting a profile does not mean your encoded file will end up being that profile. It simply prevents options being used that would breach that profile constraint.

Levels
------------

The levels are another form of constraints that define things like maximum bitrates, framerates and resolution etc. The following wikipedia articles lists the relevant information for each level.

| Status      | Description                                                                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| H.264       | https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC#Levels                                                                                                    |
| HEVC / H.265| https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding_tiers_and_levels                                                                              |


Most devices (and sometimes, software decoders) support a "maximum" level. When
the video's specifications exceed that level's constraints, the decoder won't be
able to decode the video properly (it may simply refuse to play the file).

HandBrake's encoders, set the appropriate level automatically based on all the other settings. To make sure your video doesn't exceed a specific level, you simply have to make sure the other parameters fit within the constraints imposed by the level.

It is recommended that you leave this setting on "Auto" unless you require to set it for device compatibility.
