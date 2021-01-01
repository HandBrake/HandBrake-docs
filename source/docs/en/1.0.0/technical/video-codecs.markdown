---
Type:            article
State:           [ obsolete ]
Title:           Video Codecs
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

Video Codecs
============

 

-   H.264 (x264): For MPEG-4 part 10, also known as H.264/AVC.

    -   This is HandBrakes default encoder. It provides excellent performance,
        filesizes and quality.

    -   It is widely supported by players and mobile devices.

-   H.264 (Intel QuickSync): For MPEG-4 part 10, also known as H.264/AVC.

    -   Available on Intel processors with Intel HD Graphics.

    -   QuickSync is a hardware based H.264 encoder so is very fast, with
        significantly lower CPU usage than x264.

    -   Intel Haswell or newer CPU's are recommended as these offer the best
        results in terms of Quality and Filesize.

    -   You can typically expect larger (but usually not significantly larger)
        file sizes and slightly lower quality to an equivilent x264 encode. This
        is a trade off that is fine for most.

-   H.265 (x265): Also known as HEVC

    -   This is the next generation of encoder that offers even higher quality
        encodes and better filesizes over H.264

    -   Note, encoding to H.265 is a significantly more complicated process, so
        it is expected to be slower than HandBrake's H.264 encoders.

    -   Playback support is rather limited at the moment, particularly with
        mobile devices but this should improve drastically throughout 2015/16

-   MPEG-4 (ffmpeg): HandBrake offers FFmpeg's MPEG-4 part 2 encoder for fast,
    low quality encoding.

    -   Better support from older devices such as DVD players and cheap "MP4
        Players"

    -   Lower quality than the H.264 encode option but typically faster encodes.

-   MPEG-2 (ffmpeg): HandBrake offers FFmpeg's MPEG-2 part 2 encoder for fast,
    low quality encoding.

    -   Fast Encoding, but requires larger files than MPEG-4 for the same
        quality level. Useful for testing but not much else.

-   VP8 (Libvpx):

    -   A free and open video codec which offers significant improvements over
        Theora.

-   VP3 (Theora): HandBrake can also encode Theora video. Theora video with
    Vorbis audio in the Matroska container represents a truly free option for
    multimedia encoding.

    -   However, Theora has yet to reach maturity when measured by quality at a
        given bitrate.
