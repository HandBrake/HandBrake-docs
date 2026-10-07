---
Type:            article
Title:           Video encoder presets and tunes
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.11.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Video encoder presets and tunes
===============================

*Video encoder presets and tunes should not be confused with HandBrake's general Presets or filters presets and tunes.*

Some video encoders expose presets and tunes to apply broad settings that affect the specific encoder's internal processing. These settings can be adjusted on the `Video` tab.

Note that changing video encoder presets and tunes can affect the compatibility of the video files you create using HandBrake.

## Video encoder presets

Video encoder presets typically control multiple internal parameters to affect the balance of speed, quality, and filesize. Changing the video encoder preset may also require changes to the overall video quality or bit rate controls to achieve an optimal result.

If available, start with the default video encoder preset, or one with a neutral name such as "balanced" or "medium". Some video encoder presets use a numbering system.

## Video encoder tunes

Some video encoders also provide the ability to adjust internal parameters specifically for the type of content being processed. For instance, the x264 and x265 video encoders provide `Animation` tunes which may perform better on anime and cartoon content, and `Grain` tunes which attempt to preserve the look of natural film grain.

If you are uncertain about which video encoder tune to use for your content, use the default or "none" tune.

## Advanced video encoder options

HandBrake also supports setting individual internal options specific to each video encoder. Which options are available may vary with the graphics driver/SDK version you have installed; consult the upstream encoder project/manufacturer documentation for a list of available options, if any.

If using HandBrake’s graphical interface, you can set the options in the `Advanced Options` field on the `Video` tab in the following format:

    option1=value1:option2=value2

If using HandBrake’s command line interface, use the `--encopts` parameter as follows:

    --encopts="option1=value1:option2=value2"
