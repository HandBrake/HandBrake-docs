---
Type:            article
State:           [ obsolete ]
Title:           Video Encoding Speed
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

Video Encoding Speed
=============================

## How is encoding speed measured?

The speed at which your source is encoded is measured in frames per second (fps). That is, how many still images from your video are encoded each second?
So for example, if your encode is running at 100fps, and your source is a 25fps PAL DVD, then your encoding at 4x real time.


## What affects encoding speed?

There are many factors what affect encode performance. The hardware you are running on, the encoder settings you choose and source file itself.

### Hardware

The hardware you run on can have a large effect on performance. HandBrake can scale well up to 6 to 8 CPU cores with diminishing returns thereafter.
So a 4 core CPU can be nearly twice as fast as a dual Core equivalent, however a 16 core may not be twice as fast as an 8 core but may still offer significant increases in performance. 
The CPU scaling curve does vary greatly by source and settings used.

HandBrake also supports encoding in ASIC hardware with Intel QuickSync, Nvidia NVEnc, and AMD VCE.

See our [System Requirements](../technical/system-requirements.html) for details on recommended hardware for running HandBrake.

### Settings

Settings play a large part in encoding performance.  Most of the encoders expose many configuration options which allow you to tune the encoders. In HandBrake we've simplified this to a "Video Preset" slider. This offers a range of presets from Ultrafast to Placebo (which is very slow).  This slider trades off speed vs quality and file size. Using faster presets and reduces quality OR increase file size. Using slower presets uses more complex algorithms to compress the video which takes more time offering an overall better result.

For x264 and x265, the Medium preset is a good trade off between quality, file size and speed but you can adjust this slider to suit your needs.


<!-- .system-windows -->

![HandBrake's Video Quality Settings](../../images/windows/video-quality-1.0.0.png "HandBrake's Video Quality Settings")

<!-- /.system-windows -->


Filters are another thing that has a big effect. Particularly if you use Denoise NLMeans. This is a very memory intensive operation so can drastically slow your encodes down. Again, there are settings for the filters that tune them for speed vs quality so you can see widely different results depending on what preset / tune you use.

<!-- .system-windows -->

![HandBrake's Video Filter Settings](../../images/windows/video-filters-1.0.0.png "HandBrake's Video Filter Settings")

<!-- /.system-windows -->

### Source

Your source will have an effect on performance in several ways.
For example, a 1080P HD video will take longer to encode using the same settings and hardware than a 576P file.  This is because there are 5 times as many pixels to process in the 1080P file.
Another aspect that can affect performance is what the format of the input file is. For example the H.264 decoder is highly optimised but lesser used codecs may not be so well optimised.  Within a codec, Baseline H.264 will be far quicker and less CPU intensive to decode than High Profile H.264. This is because the decoding algorithms used are simpler, thus, you have more CPU time to spend on encoding.



