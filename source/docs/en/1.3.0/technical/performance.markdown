---
Type:            article
Title:           Performance
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Performance
===========

Video encoding is one of the most resource intensive activities for computers.

HandBrake’s software video encoders, video filters, audio encoders, and other processes benefit from fast CPU and memory. HandBrake’s hardware video encoders also benefit from modern GPU hardware. See the [System requirements](system-requirements.html) article for minimum hardware requirements to use HandBrake.

To provide a comparison of how various features and settings affect encoding performance, we encoded a high quality, 4K 2160p24 (3840x1714 actual) version of the open film *[Tears Of Steel](https://mango.blender.org/)*. The `Source` duration is 12 minutes 14 seconds and contains H.264 video, lossless FLAC stereo audio, and Dolby Digital (AC-3) 5.1 surround audio.

## Performance comparison between official presets

A `Preset` is a group of settings specifically tailored for the software or device you want your videos to play on. Read more about HandBrake’s [Official presets](official-presets.html).

`Presets` may differ from each other in multiple ways. For example: video resolution, filters, encoder, encoder preset, and quality; audio tracks (stereo, surround sound, or both), encoders, and quality; subtitle tracks and types; chapter markers; container options; and compatibility concerns. Because so many variables can differ between HandBrake’s `Presets`, performance can vary greatly.

HandBrake’s General `Presets` are designed to maintain compatibility with a broad range of modern devices and software, and provide logical steps in encoding performance, quality, and file size.

The following results were produced using a Mid-2010 Mac Pro equipped with an Intel Xeon w3680 CPU with 6 cores and 12 threads running at 3.33 GHz, 24 GB memory, and macOS Mojave.

| Official Preset           | Encoder      | Quality | Audio Tracks                     | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|---------------------------|--------------|---------|----------------------------------|----------------|----------------|----------------|------------|
| Very Fast 1080p30         | H.264 (x264) | RF 24   | AAC stereo                       | 33.1 FPS       | 1.38x          |  3.50 Mb/s     | 320.8 MB   |
| Fast 1080p30              | H.264 (x264) | RF 22   | AAC stereo                       | 19.1 FPS       | 0.80x          |  5.49 Mb/s     | 503.6 MB   |
| HQ 1080p30 Surround       | H.264 (x264) | RF 20   | AAC stereo; Dolby Digital (AC-3) | 12.7 FPS       | 0.53x          |  8.15 Mb/s     | 748.0 MB   |
| Super HQ 1080p30 Surround | H.264 (x264) | RF 18   | AAC stereo; Dolby Digital (AC-3) |  6.7 FPS       | 0.28x          | 10.71 Mb/s     | 983.7 MB   |

![Comparison of official 1080p general presets](../../images/performance-general-presets-1.3.0.png "HandBrake’s faster General Presets produce smaller files with average quality, while its high quality General Presets produce larger files that take longer to encode.")

The Very Fast `Preset` starts with a faster video encoder preset (x264 veryfast) and quality RF 24. The Fast `Preset` uses a slower video encoder preset (x264 fast) and also raises quality to RF 22. In combination, this results in a higher quality video, larger file size, and longer time to encode.

Likewise, the HQ and Super HQ `Presets` use even slower video encoder presets (x264 slow and veryslow, respectively) and even higher quality (RF 20 and 18, respectively), while also including surround audio. The price for higher quality and more features is again larger file sizes, and longer time to encode.

Encoding a large, high quality, 4K 2160p `Source` to 1080p can be slow on an aging computer. Only the fastest `Preset` completed faster than realtime, meaning the encode finished in a shorter time than it would take to watch the video.

Let’s look at the same encodes on a faster computer. The following results were produced using a PC equipped with an Intel Xeon E5-2699 v4 CPU with 22 cores and 44 threads running at a sustained turbo between 2.6-2.8 GHz, 32 GB memory, and Windows 10 Professional.

| Official Preset           | Encoder      | Quality | Audio Tracks                     | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|---------------------------|--------------|---------|----------------------------------|----------------|----------------|----------------|------------|
| Very Fast 1080p30         | H.264 (x264) | RF 24   | AAC stereo                       | 66.4 FPS       | 2.77x          |  3.46 Mb/s     | 317.3 MB   |
| Fast 1080p30              | H.264 (x264) | RF 22   | AAC stereo                       | 55.8 FPS       | 2.33x          |  5.37 Mb/s     | 492.5 MB   |
| HQ 1080p30 Surround       | H.264 (x264) | RF 20   | AAC stereo; Dolby Digital (AC-3) | 44.1 FPS       | 1.84x          |  8.00 Mb/s     | 734.4 MB   |
| Super HQ 1080p30 Surround | H.264 (x264) | RF 20   | AAC stereo; Dolby Digital (AC-3) | 23.8 FPS       | 0.99x          | 10.30 Mb/s     | 949.3 MB   |

The newer computer with a faster CPU and memory performs better. While the x264 codec doesn’t scale linearly with such high thread counts, it’s still much faster here. Quality is the same compared to the slower computer, only the results are achieved more quickly.

*You can do these tests yourself.*

Open a video `Source` in HandBrake and encode using each of these `Presets`. Observe how fast each `Preset` encodes. Compare the resulting file sizes. Watch the encoded videos and visually judge their quality. Consider whether you want surround audio (assuming your `Source` contains a surround audio track). Finally, choose which `Preset` satisfies your needs, and use it for your everyday encoding.

## Performance comparison between video encoders

Video encoders employ advanced mathematical algorithms to reduce the size of your videos while retaining perceived quality. While some techniques are similar between encoders, each encoder is different, and some encoders are more efficient than others.

x264 is the default video encoder used by many of HandBrake’s official `Presets`. x264 creates standard H.264/AVC video with high quality and reasonable file sizes, and encodes relatively fast on modern computers. Most modern mobile devices have hardware decoders for energy-efficient playback of H.264/AVC video. It is arguably the most compatible modern video format.

x265 is a newer video encoder that creates standard H.265/HEVC video that is becoming more popular as newer mobile devices have hardware decoders for energy-efficient playback. In some situations, such as encoding in 4K Ultra High Definition or making smaller, lower bit rate videos, x265 can produce the same or better quality as x264 with smaller file sizes, at the expense of much slower encoding speed.

Other software video encoders such as VP8 and VP9 promise similar results to x264 and x265, but generally take longer to encode. VP8 and VP9 hardware decoders for mobile devices are not widespread, which can lead to faster battery drain while playing these types of videos. Most modern computers can play VP8 and VP9 video with ease.

HandBrake also includes support for AMD VCE, Intel QSV, and Nvidia NVENC hardware encoders. These encoders produce H.264 and/or H.265 video at extremely high speed, at the expense of some quality and larger file sizes.

Let’s compare. Here, we’ve encoded the same high quality 2160p 4K video `Source` to 1080p using eight different video encoders.

The following results were produced using a PC equipped with an Intel Xeon E5-2699 v4 CPU with 22 cores and 44 threads running at a sustained turbo between 2.6-2.8 GHz, 32 GB memory, an AMD Radeon RX 580, an Nvidia GeForce GTX 1060, and Windows 10 Professional.

| Official Preset   | Encoder       | Type     | Quality / Bit Rate   | Audio Tracks  | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|-------------------|---------------|----------|----------------------|---------------|----------------|----------------|----------------|------------|
| H.265 MKV 1080p30 | H.265 (x265)  | Software | RF 22                | AAC stereo    | 16.1 FPS       | 0.67x          |  5.08 Mb/s     |   466.3 MB |
| H.264 MKV 1080p30 | H.264 (x264)  | Software | RF 22                | AAC stereo    | 53.9 FPS       | 2.25x          |  5.19 Mb/s     |   476.2 MB |
| VP9 MKV 1080p30   | VP9           | Software | ABR 4500 kb/s 2-pass | Opus stereo   | 10.2 FPS       | 0.43x          |  4.64 Mb/s     |   425.5 MB |
| VP8 MKV 1080p30   | VP8           | Software | ABR 6000 kb/s 2-pass | Vorbis stereo | 21.2 FPS       | 0.88x          |  8.40 Mb/s     |   770.2 MB |
| *custom*          | H.265 (VCE)   | Hardware | CQ 22                | AAC stereo    | 60.9 FPS       | 2.54x          | 10.70 Mb/s     |   978.1 MB |
| *custom*          | H.264 (VCE)   | Hardware | CQ 22                | AAC stereo    | 61.3 FPS       | 2.55x          | 11.20 Mb/s     | 1,026.0 MB |
| *custom*          | H.265 (NVENC) | Hardware | CQ 22                | AAC stereo    | 63.4 FPS       | 2.64x          |  9.88 Mb/s     |   906.5 MB |
| *custom*          | H.264 (NVENC) | Hardware | CQ 22                | AAC stereo    | 63.6 FPS       | 2.65x          | 11.20 Mb/s     | 1,024.0 MB |

Some encoders are noticeably faster than others. Hardware encoders are typically much faster than software encoders, at the expense of some loss in quality and/or larger file sizes. In this case, x264 is a clear winner in the balance between speed, quality, and file size.

The official `Presets` in this test are designed to produce similar quality encodes regardless of the specific encoders used, so this test isn’t an entirely fair comparison of speed. Some encodes use quality-based encoding, while others use average bit rate, which prioritizes file size while allowing more variation in quality. Additional variables such as filters and audio can also have an impact.

Let’s compare again with fewer variables. Here, we’ve removed the Decomb deinterlacing filter, audio tracks, and Foreign Audio Search, and encoded only video in average bit rate, 2-pass mode. We’ve reduced the bit rate to 3000 kb/s to better highlight the efficiency of each encoder in terms of quality related to file size. Note that the VCE and NVENC hardware encoders only support 1-pass mode.

| Encoder       | Type     | Encoder Preset | Video Bit Rate       | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|---------------|----------|----------------|----------------------|----------------|----------------|----------------|------------|
| H.265 (x265)  | Software | Medium         | ABR 3000 kb/s 2-pass | 27.8 FPS       | 1.16x          |  2.94 Mb/s     | 275.4 MB   |
| H.264 (x264)  | Software | Medium         | ABR 3000 kb/s 2-pass | 72.1 FPS       | 3.00x          |  3.00 Mb/s     | 275.5 MB   |
| VP9           | Software | Medium         | ABR 3000 kb/s 2-pass | 11.3 FPS       | 0.47x          |  2.96 Mb/s     | 277.1 MB   |
| VP8           | Software | Medium         | ABR 3000 kb/s 2-pass | 29.1 FPS       | 1.21x          |  2.94 Mb/s     | 275.2 MB   |
| H.265 (VCE)   | Hardware | Medium         | ABR 3000 kb/s 1-pass | 76.0 FPS       | 3.17x          |  3.52 Mb/s     | 323.2 MB   |
| H.264 (VCE)   | Hardware | Medium         | ABR 3000 kb/s 1-pass | 73.6 FPS       | 3.07x          |  2.99 Mb/s     | 274.4 MB   |
| H.265 (NVENC) | Hardware | Medium         | ABR 3000 kb/s 1-pass | 75.9 FPS       | 3.16x          |  2.87 Mb/s     | 268.3 MB   |
| H.264 (NVENC) | Hardware | Medium         | ABR 3000 kb/s 1-pass | 76.0 FPS       | 3.17x          |  3.00 Mb/s     | 272.5 MB   |

![Quality comparison of HandBrake’s video encoders](../../images/performance-quality-video-encoders-1.3.0.png "Quality comparison of HandBrake’s video encoders.")

In this more balanced example, we see x264 and the hardware encoders can be more than 2.5 times faster than x265 and VP8, and over six times faster than VP9. For fast H.265 encoding, the VCE and NVENC hardware encoders are considerably faster than the x265 software encoder, at the expense of some quality loss.

Although compatible hardware was not available on the computer used in these tests, the Intel QSV hardware encoder performs similarly to VCE and NVENC, with Intel QSV producing slightly higher quality encodes.

Encoders ranked fastest to slowest:

1. Hardware encoders (AMD VCE, Intel QSV, Nvidia NVENC)
2. x264
3. VP8
4. x265
5. VP9

Encoder quality versus file size efficiency, ranked best to worst:

1. x265 and VP9
2. x264
3. Hardware encoders (AMD VCE, Intel QSV, Nvidia NVENC)
4. VP8

The x264 software encoder presents an excellent balance between speed and quality, and the H.264/AVC video it creates is widely compatible with all modern devices. It is the default video encoder in most of HandBrake’s official `Presets`.

Hardware encoders such as AMD VCE, Intel QSV, and Nvidia NVENC are very fast and may be a good choice on less powerful computers where performance is the greatest concern, and the highest quality and smallest file sizes are not top priority.

x265 and VP9 produce excellent quality encodes, but are much slower performers. Expect long encoding times on all except the best computers.

VP8 is now showing its age as an older encoder. Compared to other, more modern encoders, it is unable to produce good quality encodes at reasonable file sizes. This is also true of the older MPEG-4, MPEG-2, and Theora encoders not compared in this article.

## Performance comparison between video encoder presets

Some of HandBrake’s video encoders have their own presets. These are different than HandBrake’s `Presets`, which contain all the video, filters, audio, subtitles, chapters, and container settings. The video encoder presets are specific to each individual video encoder, and control which features of the video encoder are enabled.

Some encoder presets are designed to affect the speed of the encoding process. By enabling certain optimizations or disabling certain computationally expensive features of the encoder, greater encoding speeds can be achieved, although this is usually at the expense of larger file sizes and/or slight quality losses. The x264 and x265 encoder presets are all speed related.

Other encoders, notably hardware encoders such as AMD VCE, Intel QSV, and Nvidia NVENC, also have quality-based encoder presets to enable advanced features that can improve quality, usually at the expense of encoding speed.

Here, we’ve encoded the same high quality 2160p 4K video `Source` to 1080p using the various speed-based encoder presets provided by the x264 software encoder.

The following results were produced using a PC equipped with an Intel Xeon E5-2699 v4 CPU with 22 cores and 44 threads running at a sustained turbo between 2.6-2.8 GHz, 32 GB memory, and Windows 10 Professional.

| Encoder      | Encoder Preset | Quality | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|--------------|----------------|---------|----------------|----------------|----------------|------------|
| H.264 (x264) | Ultrafast      | RF 24   | 73.1 FPS       | 3.05x          |  9.91 Mb/s     | 909.1 MB   |
| H.264 (x264) | Superfast      | RF 24   | 74.2 FPS       | 3.09x          |  4.99 Mb/s     | 457.8 MB   |
| H.264 (x264) | Veryfast       | RF 24   | 72.6 FPS       | 3.03x          |  3.26 Mb/s     | 299.5 MB   |
| H.264 (x264) | Faster         | RF 24   | 71.0 FPS       | 2.96x          |  3.78 Mb/s     | 346.8 MB   |
| H.264 (x264) | Fast           | RF 24   | 72.6 FPS       | 3.03x          |  3.98 Mb/s     | 365.8 MB   |
| H.264 (x264) | Medium         | RF 24   | 69.1 FPS       | 2.88x          |  3.86 Mb/s     | 354.1 MB   |
| H.264 (x264) | Slow           | RF 24   | 63.2 FPS       | 2.63x          |  3.75 Mb/s     | 343.9 MB   |
| H.264 (x264) | Slower         | RF 24   | 39.8 FPS       | 1.66x          |  3.76 Mb/s     | 345.5 MB   |
| H.264 (x264) | Veryslow       | RF 24   | 33.9 FPS       | 1.41x          |  3.50 Mb/s     | 321.0 MB   |

Even on this powerful computer and with a fast software encoder like x264, the slowest encoder preset takes twice the time to encode as the faster encoder presets.

Generally speaking, the additional computation performed by x264’s slower encoder presets creates smaller files, and sometimes increases quality very slightly (usually negligibly). However, since so many settings differ between the various encoder presets, this isn’t strictly true in practice. Notice how the veryfast encoder preset actually produces a smaller file than the slower presets, at the expense of some quality loss.

Note that while the x264 encoder presets with “fast” in their names do not prove much faster on this high performance computer, they may be significantly faster than slower encoder presets on less powerful computers.

Let’s look at the same test, this time using the x265 encoder.

| Encoder      | Encoder Preset | Quality | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|--------------|----------------|---------|----------------|----------------|----------------|------------|
| H.265 (x265) | Ultrafast      | RF 24   | 70.1 FPS       | 2.92x          |  2.63 Mb/s     | 241.8 MB   |
| H.265 (x265) | Superfast      | RF 24   | 68.2 FPS       | 2.84x          |  2.64 Mb/s     | 242.4 MB   |
| H.265 (x265) | Veryfast       | RF 24   | 56.9 FPS       | 2.37x          |  2.78 Mb/s     | 255.2 MB   |
| H.265 (x265) | Faster         | RF 24   | 56.6 FPS       | 2.36x          |  2.78 Mb/s     | 254.8 MB   |
| H.265 (x265) | Fast           | RF 24   | 51.2 FPS       | 2.13x          |  2.82 Mb/s     | 259.1 MB   |
| H.265 (x265) | Medium         | RF 24   | 33.8 FPS       | 1.41x          |  3.27 Mb/s     | 300.2 MB   |
| H.265 (x265) | Slow           | RF 24   | 14.1 FPS       | 0.59x          |  3.44 Mb/s     | 316.0 MB   |
| H.265 (x265) | Slower         | RF 24   |  3.2 FPS       | 0.13x          |  3.47 Mb/s     | 318.4 MB   |
| H.265 (x265) | Veryslow       | RF 24   |  1.8 FPS       | 0.08x          |  3.46 Mb/s     | 317.2 MB   |

Compared to x264, the x265 encoder is better optimized for high core count CPUs like the E5-2699 v4, and this shows in the faster encoder presets, which are nearly as fast as x264 on this computer despite the additional computation required for H.265 video. However, the significant computation time required by x265’s slower encoder presets make encoding extremely slow even on powerful computers, and actually increases file sizes while attempting to better preserve quality.

The recommended best practice when adjusting these settings manually is to choose the slowest encoder preset that encodes comfortably fast on your computer, and accept subtle quality and file size variations. Even better, use one of HandBrake’s all-encompassing `Presets`, which will select a suitable encoder preset and other settings for you based on what is appropriate for the intended purpose.

## Performance comparison between video quality settings

Video quality can have a substantial impact on encoding speed and file size.

In this test, we’ve encoded the same high quality 2160p 4K video `Source` to 1080p while adjusting only the video quality, leaving all other settings alone.

Higher RF values lead to lower picture quality and smaller file sizes, while lower RF values lead to higher picture quality and larger file sizes. You can read more about this on the [Adjusting quality](../workflow/adjust-quality.html) article.

The following results were produced using a Mid-2010 Mac Pro equipped with an Intel Xeon w3680 CPU with 6 cores and 12 threads running at 3.33 GHz, 24 GB memory, and macOS Mojave.

| Encoder      | Encoder Preset | Quality | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|--------------|----------------|---------|----------------|----------------|----------------|------------|
| H.264 (x264) | Medium         | RF 36   | 30.9 FPS       | 1.29x          |  0.92 Mb/s     |   84.2 MB  |
| H.264 (x264) | Medium         | RF 33   | 29.3 FPS       | 1.22x          |  1.26 Mb/s     |  115.9 MB  |
| H.264 (x264) | Medium         | RF 30   | 27.8 FPS       | 1.16x          |  1.78 Mb/s     |  163.8 MB  |
| H.264 (x264) | Medium         | RF 27   | 26.0 FPS       | 1.08x          |  2.59 Mb/s     |  238.0 MB  |
| H.264 (x264) | Medium         | RF 24   | 25.5 FPS       | 1.06x          |  3.89 Mb/s     |  357.5 MB  |
| H.264 (x264) | Medium         | RF 21   | 22.4 FPS       | 0.93x          |  6.13 Mb/s     |  562.7 MB  |
| H.264 (x264) | Medium         | RF 18   | 19.7 FPS       | 0.82x          | 10.20 Mb/s     |  938.8 MB  |
| H.264 (x264) | Medium         | RF 15   | 17.1 FPS       | 0.71x          | 17.20 Mb/s     | 1578.6 MB  |

![Comparison x264 quality between RF 36 and RF 15 in increments of 3 RF](../../images/performance-quality-x264-1.3.0.png "Higher RF values lead to lower picture quality and smaller file sizes, while lower RF values lead to higher picture quality and larger file sizes.")

Here, we see that lower quality encodes complete faster. In essence, discarding fine details is faster than working hard to preserve them. So, in addition to being a major factor in file size, the video quality setting is a major factor in encoding speed and total encoding time.

## Performance comparison between picture resolutions

Video resolution can have a major impact on encoding speed and file size.

A video’s resolution is its width and height in pixels, or individual points on a display. HandBrake includes official `Presets` targeting multiple standard picture resolutions, such as 2160p UHD 4K, 1080p Full HD, 720p HD, and 576p/480p SD, as well as certain intermediate resolutions.

Resolution is calculated in two dimensions (width and height). For example, 1080p High Definition video is 1920 pixels wide and 1080 pixels tall, sometimes expressed as 1920x1080. By multiplying these figures, we can calculate how many pixels each video frame comprises. 1920 multiplied by 1080 is 2,073,600 pixels, or about 2 megapixels.

Compared to 480p Standard Definition video (720x480), which is 345,600 pixels or about 0.35 megapixels, 1080p is approximately six times more detailed. From this, we can infer the additional computation encoding a High Definition Blu-ray video in its original resolution will require longer encoding times and create larger file sizes to store all the extra information compared to encoding a Standard Definition DVD video.

Here, we’ve encoded the same high quality 2160p 4K video `Source` in six different output resolutions using the x265 video encoder’s medium encoder preset.

The following results were produced using a PC equipped with an Intel Xeon E5-2699 v4 CPU with 22 cores and 44 threads running at a sustained turbo between 2.6-2.8 GHz, 32 GB memory, and Windows 10 Professional.

| Encoder      | Video Resolution              | Megapixels | Quality | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|--------------|-------------------------------|------------|---------|----------------|----------------|----------------|------------|
| H.265 (x265) | 3840x1714 (2160p 4K, cropped) | 6.58 MP    | RF 24   | 14.0 FPS       | 0.58x          | 10.00 Mb/s     | 920.7 MB   |
| H.265 (x265) | 2560x1440 (1440p 2.5K)        | 3.69 MP    | RF 24   | 22.7 FPS       | 0.95x          |  5.42 Mb/s     | 497.2 MB   |
| H.265 (x265) | 1920x1080 (1080p Full HD)     | 2.07 MP    | RF 24   | 33.7 FPS       | 1.40x          |  3.27 Mb/s     | 300.2 MB   |
| H.265 (x265) | 1280x720 (720p HD)            | 0.92 MP    | RF 24   | 49.3 FPS       | 2.05x          |  1.84 Mb/s     | 168.9 MB   |
| H.265 (x265) | 960x540 (540p ED)             | 0.52 MP    | RF 24   | 63.7 FPS       | 2.65x          |  1.19 Mb/s     | 109.3 MB   |
| H.265 (x265) | 720x480 (480p SD)             | 0.35 MP    | RF 24   | 74.9 FPS       | 3.12x          |  0.88 Mb/s     |  81.1 MB   |

![Comparison of common video resolutions](../../images/performance-resolution-1.3.0.png "Higher resolutions retain more detail, but take longer to encode and require larger file sizes.")

The higher resolution encodes take more time and create larger file sizes. The lower resolution encodes take less time and create smaller file sizes, at the expense of significantly reducing detail.

It is a good idea to increase the quality by lowering RF 1-2 points for lower resolution encodes, as small defects in quality can become more apparent when the video is scaled up to fill a large display. Likewise, higher resolution encodes usually do not need as high quality to look good, as minimal or no scaling is necessary on modern displays. You can read more about this on the [Adjusting quality](../workflow/adjust-quality.html) article.

In practical terms, the resolution of your `Source` video and the `Preset` you select will be a major factor in file size, encoding speed, and total encoding time.

## How filters affect encoding performance

Some filters, such as HandBrake’s sharpening filters, require minimal computation and have a negligible impact on performance. Others, such as the EEDI2 deinterlacing filter or NLMeans denoising filter, are more computationally expensive and can be even slower than video encoders.

Here, we’ve encoded the same high quality 2160p 4K video `Source` in its original resolution, with and without the NLMeans denoising filter.

The following results were produced using a PC equipped with an Intel Xeon E5-2699 v4 CPU with 22 cores and 44 threads running at a sustained turbo between 2.6-2.8 GHz, 32 GB memory, and Windows 10 Professional.

| Official Preset   | Filter Additions | Quality | Audio Tracks | Encoding Speed | Realtime Speed | Total Bit Rate | Total Size |
|-------------------|------------------|---------|--------------|----------------|----------------|----------------|------------|
| H.265 MKV 2160p60 | *none*           | RF 24   | AAC stereo   | 7.9 FPS        | 0.33x          | 10.80 Mb/s     | 993.4 MB   |
| H.265 MKV 2160p60 | NLMeans Medium   | RF 24   | AAC stereo   | 5.3 FPS        | 0.22x          |  8.72 Mb/s     | 800.0 MB   |

As you can see, NLMeans can significantly increase encoding time, even on a powerful computer.

Despite this, it is excellent for restoring `Sources` with prominent visual noise and grain. Even with a relatively clean `Source` like the one used here, the noise reduction performed by NLMeans allowed the video encoder to achieve a 19.5% reduction in file size, at the expense of a 50% increase in encoding time.

## Summary of factors affecting encoding performance

### Video encoder, encoder presets, and quality

Video encoder settings have a major impact on performance.

Compared to x264 and hardware encoders such as AMD VCE, Intel QSV, and Nvidia NVENC, encodes will take longer to complete when using slower video encoders such as x265 and VP9.

Most video encoders we compared have speed presets, and faster encoder presets will perform better, potentially at the expense of larger file sizes and slight quality losses.

The overall quality setting or average bit rate will also impact encoding speed, with higher quality and bit rate settings significantly increasing the time required to complete encodes.

You can improve encoding performance by using a faster video encoder, a faster encoder preset, and lowering the video quality or average bit rate. Where the highest quality and smallest file sizes are not top priority, hardware encoders may be a good choice on less powerful computers.

### Resolution

Resolution has a major impact on performance.

Higher resolution encodes take longer and produce larger file sizes, while retaining additional detail compared to faster, lower resolution encodes.

### Filters

Some filters are computationally expensive and can bottleneck the encoding process regardless of video encoder settings, notably the EEDI2 deinterlacer and the NLMeans denoiser. Other filters such as the Decomb deinterlacer and the hqdn3d denoiser are much faster, but can still be a bottleneck when using hardware video encoders such as AMD VCE, Intel QSV, and Nvidia NVENC.

Due to the widespread availability of interlaced content in the world today, the Decomb deinterlacer is enabled in all HandBrake official `Presets` except the Production `Presets`. Also enabled is the Interlacing Detection filter, which ensures only interlaced frames are deinterlaced, leaving progressive frames untouched. This analysis can sometimes be a limiting factor for performance. If you are certain your `Source` contains no interlaced frames, you can disable these filters for a small increase in performance.

### Audio

Audio encoders generally have less work to do than video encoders, so their impact on performance is minimal compared to video settings, resolution, and filters. That said, audio can be a performance factor on slower computers and where many audio tracks need to be encoded.

### Other factors

Most other features such as subtitles, chapter markers, and container options have a negligible impact on performance.

One notable exception is the Web Optimized option for the MP4 container, which moves some of the video metadata from the end to the beginning of the final video file, mostly useful for streaming on the internet. This requires rewriting the entire file at the end of the encode, which can take some time on slower computers. CPU and memory speed, along with faster storage (such as an SSD) can help minimize the time the Web Optimized option needs to rewrite large output files.
