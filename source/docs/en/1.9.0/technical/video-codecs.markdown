---
Type:            article
Title:           Video codecs
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.9.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Video codecs
============

The following video codecs are available for encoding in HandBrake.

- H.264:

    - MPEG-4 Part 10, also known as H.264/AVC
    - Provides excellent quality, performance, and file size
    - Widely supported by media players, including mobile devices
    - Several different encoders are supported: 
      - In software: x264  
      - In hardware: Intel QuickSync, AMD VCE, Nvidia NVENC and ARM devices though MediaFoundation.

- H.265 (HEVC)

    - MPEG-H Part 2, also known as H.265/HEVC
    - Successor to H.264/AVC offering higher quality encodes and smaller file sizes
    - Current strengths are improved quality and compression for low bit rate encodes, and for ultra high definition content
    - Significantly slower than software H.264/AVC encoders
    - Limited device compatibility compared to H.264/AVC, but this is improving rapidly
    - Several different encoders are supported: 
      - In software: x265  
      - In hardware: Intel QuickSync, AMD VCE, Nvidia NVENC and ARM devices though MediaFoundation.

- MPEG-4:

    - MPEG-4 Part 2, also known as MPEG-4 Visual
    - Predecessor to H.264/AVC offering fast encoding with lower overall quality than H.264/AVC
    - Compatible with older devices, inexpensive DVD/flash/network players

- MPEG-2:

    - MPEG-2 Part 2, also known as MPEG-2 Visual and H.262
    - Predecessor to MPEG-4 Visual offering very fast encoding with lower quality than modern codecs
    - Creates larger files than modern encoders

- AV1:

    - Developed by Alliance for Open Media and the successor to VP9, is a free and open video codec.
    - Several different encoders are supported: 
      - In software: SVT-AV1  
      - In hardware: Intel QuickSync, Nvidia NVEnc, AMD VCN

- VP9 (libvpx):

    - Developed by Google and the successor to VP8, VP9 is a free and open video codec
    - Comparable to HEVC/H.265 in quality and file size
    - Slower encoding compared to x265

- VP8 (libvpx):

    - Developed by On2 Technologies and acquired by Google, VP8 is a free and open video codec
    - Successor to Theora offering significant improvements, comparable to H.264/AVC

- Theora:

    - This encoder is considered deprecated. 
    - Developed by Xiph.Org Foundation and based on On2 Technologies' VP3, Theora is a free and open video codec
    - Comparable to MPEG-4 Visual in quality and file size
    
