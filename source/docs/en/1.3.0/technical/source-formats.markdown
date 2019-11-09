---
Type:            article
Title:           Supported source formats
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

Supported source formats
========================

One of HandBrake's strengths is its ability to open a wide variety of video formats. HandBrake uses [FFmpeg](https://ffmpeg.org/) under the hood and generally can open whatever FFmpeg will, in addition to disc-based formats like DVD and Blu-ray.

**Note:** HandBrake does not defeat or circumvent [copy protection](https://en.wikipedia.org/wiki/Copy_protection) of any kind. It does not work with video files employing [Digital Rights Management](https://en.wikipedia.org/wiki/Digital_rights_management) (DRM). See [About HandBrake](../about.html) for more information about what HandBrake *does* and *does not*.

## Videos made by mobile phones, tablets, and many video cameras and DSLRs

Typically, each video will be a single file that you can copy to your computer, and later open using HandBrake. Common video file types are MP4 or M4V, MOV, MPG or MPEG, and AVI.

Some cameras store multiple videos in a folder structure with a playlist similar to Blu-ray discs, specifically cameras that record in AVCHD or AVCHD Lite. HandBrake may be able to open individual video files from the Stream folder inside the BDMV folder. In some cases this is not reliable, e.g. where a single video stream spans multiple files.

## Screen and game recordings, web videos, video editing projects, and other computer-related sources

Some screen recording softwares can export or record directly to video files HandBrake can open. Common video file types are MP4 or M4V, MKV, MOV, MPG or MPEG, AVI, and WMV.

HandBrake can open web videos in FLV, WEBM, MP4, and many other formats.

Videos made using consumer video editing software such as [iMovie](https://www.apple.com/mac/imovie/) and [Shotcut](https://www.shotcut.org/) must first be exported to a common video format for compatibility with HandBrake.

## Professional video production formats

HandBrake can open a number of production formats produced by professional video cameras and [NLE](abbr:Non-linear editing system)s, including [MXF](https://en.wikipedia.org/wiki/Material_Exchange_Format), [MPEG-TS](https://en.wikipedia.org/wiki/MPEG_transport_stream), and [QuickTime](https://en.wikipedia.org/wiki/QuickTime), along with common video codecs such as [CineForm](https://en.wikipedia.org/wiki/CineForm), [DNxHD](https://en.wikipedia.org/wiki/DNxHD_codec), [DNxHR](https://en.wikipedia.org/wiki/DNxHR_codec), [ProRes](https://en.wikipedia.org/wiki/Apple_ProRes), [XAVC](https://en.wikipedia.org/wiki/XAVC), and [XDCAM](https://en.wikipedia.org/wiki/XDCAM).

## DVD, Blu-ray, AVCHD/AVCHD Lite[^avchd-partial-support], and HD-DVD[^hddvd-partial-support] discs or disc backups

HandBrake can directly open DVD and Blu-ray discs. In most situations it is better to first copy the contents to your computer's hard drive[^uncopyable]. Common folders are VIDEO_TS and BDMV. Common video file types are VOB, EVO, and MTS or M2TS.

Certain third-party disc copy tools such as MakeMKV commonly make... wait for it... MKV video files. Other tools create ISO (sometimes labeled CDR) images of DVD and Blu-ray discs. HandBrake usually can open these directly.

BIN+CUE, MDF+MDS, and Toast images must first be mounted. Open the image using your operating system or appropriate software, and then open the virtual disc with HandBrake.

## Broadcast TV recordings

HandBrake can open common video file types produced by TV recording hardware and software such as TS/MTS/M2TS, MP4 or M4V, and MPG or MPEG.

Recordings made by TV-to-DVD recorders are generally supported, but do note that some recorders are known for poorly making discs. Some discs may not work due to mastering errors.

## Digital recordings of VHS, Beta, Video8/Hi8, LaserDisc, and other analog sources

First convert your analog video to digital using a computer-based hardware recording device such as the [Blackmagic Design Intensity](https://www.blackmagicdesign.com/products/intensity). It is important to choose a recording device and software that allows recording to or exporting to common video formats. HandBrake can open many common video files produced by recording software, including but not limited to TS/MTS/M2TS, MP4 or M4V, MOV, MKV, MPG or MPEG, and AVI.

[^avchd-partial-support]: AVCHD and AVCHD Lite playlists are not fully supported. Individual files/streams may work.

[^hddvd-partial-support]: HD-DVD playlists are not fully supported. Individual files/streams may work.

[^uncopyable]: Without special software, it is not possible to directly copy VIDEO_TS and BDMV folders from copy-protected discs.
