---
Type:            article
State:           [ obsolete ]
Title:           x264 Profiles and Levels
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

Profiles and Levels
==========================

H.264 profiles
--------------

Define the features / capabilities that the encoder can use.

HandBrake exposes 3 profiles for H.264 Encodes. You can think of the profile as
the level of complexity required in encode / decode. The higher the complexity,
the more CPU power is needed to encode/decode. Setting a profile, constrains the
encode to using settings that are allowed for that profile level.

Typically, devices will advertise that they are compatible for a particular
profile and level, so you can simply set the option that matches your device for
the best chance of compatibility.

-   Auto (Recommended)
    -   This will automatically set the profile based on all the options that
        have been selected.
    -   It is recommended that you use this option unless you need to set a
        profile to ensure compatibility for a particular device.
-   Baseline
    -   Baseline encodes are the most basic form of encoding. While decoding is
        much easier, it may also require much higher bit-rates to maintain the
        same level of quality.
-   Main
    -   The middle ground. Most modern / current devices will support this
        profile.
-   High Profile
    -   For best quality and filesize at the expense of CPU time in both decode
        and encode.

Note that setting a profile does not mean your encoded file will end up being
that profile. It simply prevents options being used that would breach that
profile constraint.

H.264 Levels
------------
The levels are another form of constraints that define things like maximum
bitrates, framerates and resolution etc. The wikipedia article lists the
relevant information for each level.
https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC#Levels

Most devices (and sometimes, software decoders) support a "maximum" level. When
the video's specifications exceed that level's constraints, the decoder won't be
able to decode the video properly (it may simply refuse to play the file).

HandBrake's H.264 encoder, x264, sets the appropriate level automatically based
on all the other settings. To make sure your video doesn't exceed a specific
level, you simply have to make sure the other parameters fit within the
constraints imposed by the level.

It is recommended that you leave this setting on "Auto" unless you require to
set it for device compatibility.
