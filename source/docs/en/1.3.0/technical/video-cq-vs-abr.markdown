---
Type:            article
State:           [ draft ]
Title:           Constant Quality vs Average Bit Rate
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

Constant Quality vs Average Bit Rate
====================================

HandBrake supports two modes of encoding video.

-   With the average bitrate, you control the size of the output file but give
    up control over the video's quality.
-   Constant quality mode does the opposite; you specify a quality level and
    HandBrake adjusts the bitrate (that is, the size) to meet it.

## Constant Quality

### Benefits over Average Bitrate

-   Faster Encoding - No need to do 2-Pass encoding (thus almost halving the
    encode time.) Constant Quality can produce the same quality as a 2 pass
    encode.

-   Reduced file sizes Videos usually have a mix of complex and less complex
    frames. (The latter requiring less bitrate to achieve a set quality level)
    If less complex frames do not have bits wasted on them, your overall output
    filesize is reduced without any loss of quality.

### Output File Sizes

Because it takes a different bitrate to reach a given quality level for any
given part of any movie, the output size is unpredictable and varies from source
to source.

Example: Given 2 sources of the same length, one could turn out to be 1.2GB, the
other 1.9GB. The difference can be more or less depending on the source. If your
source material is consistent, you will get roughly the same file sizes out for
each.

In particular, grainy sources tend to come out larger as they require a higher
bit-rate to maintain all that extra detail in the video. In this case, you may
try turning on the "Denoise" filter or reduce the RF value a few points.

You should also note that even if a file size is significantly smaller than a
counterpart encoded with target filesize, it does not mean it is any lower
quality. It's simply encoded more efficiently.

### x264 Recommended Quality RF Values

The Quality slider ranges from (Low Quality) 51 to 0 (High Quality) For good
quality output at reasonable file sizes, the following values are recommended:

Recommended settings for x264 are:

-   Standard Definition (e.g DVD's) Use an RF value of around 20 +/- 1 As an
    example using the AppleTV2 preset at RF20, with 20 different sources, the
    average size was 925MB per hour of video. (Min: 625MB/h Max:1,503MB/hr)

-   High Definition (e.g Blurays 720/1080) Use an RF value of 22 +/- 1 Since HD
    sources are typically quality, you can get away with a slightly higher RF
    value than SD content without any perceived difference in quality.

You should note that the quality slider is not linear for x264. It is
logarithmic (like the Richter or pH scales.) This means small movements in the
numbers can have large results. You can control the granularity of the slider in
the preferences / options.

You can encode a few chapters of a source to experiment with different quality
values if the above recommendations are not suitable. Encoding a 10minute sample
in the middle of your source should give you a good idea of what to expect.

### x264 and RF 0

RF 0 applies no compression. It is lossless: it compresses the source without
throwing away practically any detail.

So should you use RF 0 to perfectly preserve the source? Nope. Not at all. In
fact, you'll end up with video that's way larger than the DVD, but doesn't look
any better.

See, DVDs use lossy compression to squeeze down the raw video the studios use to
make them -- sort of like a quality level of RF 20. It throws away detail. When
HandBrake uncompresses the video prior to conversion, the quality lost when the
DVD was made is still gone. When you use RF 0 quality with x264, you're telling
it to losslessly preserve the decoded, uncompressed video feed, not to
losslessly preserve the DVD. Both have the same picture quality, but the
uncompressed feed takes up a lot more space.

To sum up: when converting from a DVD source, there is no reason to go above an
RF of \~19, which is roughly equivalent to how heavily the DVD is compressed. If
you do go higher, your output will be larger than your input!

### Recommended values for other encoders

[TODO]

## Average Bitrate

Unless you really need to aim for a target filesize (which we recommend
against), it is highly recommended that you use Constant Quality.

Bitrate is the number of bits dedicated to the video in a second. And remember,
that gets split between \~24-30 frames. When you set an average bitrate, the
encoder will vary the number of bits given to any one portion of the video, but
try to keep everything at the average you set.

-   The video bitrate can be set on the "Video Tab"
-   It is recommended that you use 2-Pass encoding.
-   This will provide better quality and better bit-rate distribution. A single
    pass will lead to sub-optimal results.
    -   The "Turbo" checkbox will make the first pass quicker at the expense of
        quality. Most of the time this loss is minimal and not appreciable by
        the viewer.
-   The downside is it can take up to twice as long to encode a file.
