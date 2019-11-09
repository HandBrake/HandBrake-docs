---
Type:            article
Title:           Video codecs
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Video codecs
============

The following video codecs are available for encoding in HandBrake.

- H.264 (x264):

    - MPEG-4 Part 10, also known as H.264/AVC
    - Provides excellent quality, performance, and file size
    - Widely supported by media players, including mobile devices

- H.264 (Intel QuickSync):

    - MPEG-4 Part 10, also known as H.264/AVC
    - Hardware based encoder available on Intel processors with Intel HD Graphics (Haswell or newer series CPUs recommended for best quality and file size)
    - Very fast with significantly lower CPU usage than software H.264 encoders such as x264
    - Produces larger (but usually not significantly larger) file sizes and slightly lower quality to an equivalent x264 encode, a trade-off that is typically acceptable, especially on lower performance systems

- H.265 (x265)

    - MPEG-H Part 2, also known as H.265/HEVC
    - Successor to H.264/AVC offering higher quality encodes and smaller file sizes
    - Current strengths of x265 are improved quality and compression for low bit rate encodes, and for ultra high definition content
    - Significantly slower than software H.264/AVC encoders
    - Limited device compatibility compared to H.264/AVC, but this is improving rapidly

- MPEG-4 (ffmpeg):

    - MPEG-4 Part 2, also known as MPEG-4 Visual
    - Predecessor to H.264/AVC offering fast encoding with lower overall quality than H.264/AVC
    - Compatible with older devices, inexpensive DVD/flash/network players

- MPEG-2 (ffmpeg):

    - MPEG-2 Part 2, also known as MPEG-2 Visual and H.262
    - Predecessor to MPEG-4 Visual offering very fast encoding with lower quality than modern codecs
    - Creates larger files than modern encoders

- VP9 (libvpx):

    - Developed by Google and the successor to VP8, VP9 is a free and open video codec
    - Comparable to HEVC/H.265 in quality and file size
    - Slower encoding compared to x265

- VP8 (libvpx):

    - Developed by On2 Technologies and acquired by Google, VP8 is a free and open video codec
    - Successor to Theora offering significant improvements, comparable to H.264/AVC

- Theora:

    - Developed by Xiph.Org Foundation and based on On2 Technologies' VP3, Theora is a free and open video codec
    - Comparable to MPEG-4 Visual in quality and file size
