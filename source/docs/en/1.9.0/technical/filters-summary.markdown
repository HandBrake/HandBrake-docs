---
Type:            article
State:           [ obsolete ]
Title:           Summary of Filters
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.9.0
Language:        English
Language_Code:   en
Authors:         []
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Summary of Filters
=============================


HandBrake contains the following filters:

- Detelecine
- Comb Detect
- Deinterlace
  - Yadif
  - Decomb
  - Bwdif
- Deblock
- Denoise
- Chroma Smooth
- Sharpen
- Colorspace
- Grayscale


Detelecine
----------

Detelecine removes comb artifacts that are the result of telecine, a process for converting film frame rates to television frame rates.


Deinterlace
-----------

Deinterlace removes comb artifacts from the picture. 
Yadif is a popular and fast deinterlacer. 
Bwdif is a motion adaptive deinterlacing based on yadif with the use of w3fdif and cubic interpolation algorithms.
Decomb switches between multiple interpolation algorithms for speed and quality.

The following Deinterlace tunes are available:

- Default: Is well balanced for speed and quality.
- Skip Spatial Check: Lets Yadif skip correcting certain avoidable artifacts for a slight speed boost.
- EEDI2: Uses a slower, higher quality interpolation algorithm for Decomb. Useful for the most difficult sources.
- Bob: Attempts to better preserve motion for a slight penalty to perceived resolution.


Deblock
-------

Deblock reduces blocky artifacts caused by low quality video compression.


Denoise
-------

Denoise reduces or removes the appearance of noise and grain. This can improve compression efficiency and create higher quality video at smaller file sizes. 
Overly strong Denoise settings may damage picture quality by discarding detail.

NLMeans is a high quality denoise filter with a cost to speed. Use where quality is more important than speed.
HQDN3D is an adaptive low-pass filter, faster than NLMeans but less effective at preserving fine detail.

For NLMeans the following Denoise tunes are available:

- None: Uses the default preset settings.
- Film: Refines settings for use with most live action content.
- Grain: Only processes color channels. Useful for preserving the film-like look of luminance grain while reducing or removing color noise.
- High Motion: Reduces color smearing in high motion scenes by avoiding temporal processing for color channels. Useful for sports and action videos.
- Animation: Is useful for cel animation such as anime and cartoons.
- Tape: Is useful for low-detail analog tape sources such as VHS, where Film does not produce a desirable result.
- Sprite: Is useful for 1-/4-/8-/16-bit 2-dimensional games. Sprite is not designed for high definition video.


Chroma Smooth
-------------

Reduces chroma noise, rainbows, and other prominent visual artifacts. Useful for resolving various color-related issues, especially with lower resolution content from analog sources, e.g. poor quality DVD and VHS sources. The blurring/smoothing algorithm is the same as used by the unsharp filter.


Colorspace
----------

Colorspace + tonemap filter. Can change/tonemap the colorspace of the video into one of the following:

- BT.2020
- BT.709
- BT.601 SMPTE-C
- BT.601 EBU

If this set to "Off" then HandBrake will keep the colorspace of the video.


Grayscale
---------

Grayscale removes the color component of the video. Often referred to as Black & White video.
