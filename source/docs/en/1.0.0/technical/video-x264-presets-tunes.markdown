---
Type:            article
State:           [ obsolete ]
Title:           x264 Presets and Tunes
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

x264 Presets and Tunes
======================

## x264 Presets

x264 exposes a preset and tune system. Presets range from:

-   UltraFast - Very high speed encoding, but requires much higher bit-rates to
    maintain quality. This means you can expect much larger file sizes.
-   Placebo - Extremely slow encoding but provides the best Quality and/or
    filesize for a given source. - This option is often considered a placebo
    because it offers diminishing returns in terms of quality and filesize.

Typically, it's recommended to use the Very Fast to Slow settings range for best
results, or one of the slower options if you don't mind the speed loss. Medium
is a good balance and most of HandBrakes presets use this option.

## x264 Tunes

The x264 tune options assign some additional options which will optimize the
encoder for certain types of content.

If you are unsure or your content doesn't really fit into one of the following
tunes, you can simply leave this option at "None".

-   Film
    -   Real life footage, films etc may benefit. (Not Cartoons or Anime).
        Typically won't do any harm to if left on for most content.
-   Animation
    -   Used for hand-drawn animated content.
-   Grain
    -   Typically used for very grainy or old content.
-   Still Image
    -   Can be used for Slideshows, Presentations etc where there is very little
        moving content.
-   PSNR
    -   Used for benchmarking quality. Should not be used for normal use.
-   SSIM
    -   Used for benchmarking quality. Should not be used for normal use.
-   Fast Decode
    -   Optimise for faster decoding. Useful for low power devices that struggle
        to decode the video.
