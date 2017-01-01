---
Type:            article
Title:           System requirements
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2017 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

System requirements
===================

## Hardware

The following is the minimum level of hardware that HandBrake supports. While it may be technically possible to run HandBrake on hardware older than this, it is neither recommended nor supported.

<!-- .system-lin -->

### Linux

- Processor: Intel Core 2 Duo, AMD Athlon X2, or better
- Free Memory:
  - 256 MB for transcoding standard definition video
  - 1 GB for transcoding high definition video
  - 2 GB or more for transcoding 4K video
- Screen Resolution: 1024x768 or better
- System Storage:
  - 50 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos

<!-- /.system-lin -->

<!-- .system-mac -->

### Mac

- 64-bit Intel Mac (Intel Core 2 Duo "Merom" or later)
  - 32-bit Intel Macs (2007 and earlier) cannot run recent 64-bit HandBrake releases
  - 2010 models and newer are recommended, as older Macs are often quite slow for processing video
- Free Memory:
  - 256 MB for transcoding standard definition video
  - 1 GB for transcoding high definition video
  - 2 GB or more for transcoding 4K video
- Screen Resolution: 1024x768 or better
- System Storage:
  - 50 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos

<!-- /.system-mac -->

<!-- .system-win -->

### Windows

- Processor: Intel Core 2 Duo, AMD Athlon X2, or better
- Free Memory:
  - 256 MB for transcoding standard definition video
  - 1 GB for transcoding high definition video
  - 2 GB or more for transcoding 4K video
- Screen Resolution: 1024x768 or better (higher if running in High-DPI Mode, above 96 DPI or 100%)
- System Storage:
  - 50 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos
- Intel QuickSync requires a 2nd generation or newer Intel Core Ix Series processor with integrated Intel HD Graphics enabled and a directly connected display
- OpenCL scaling is experimental and requires an AMD or Intel GPU with OpenCL 1.2 or later

<!-- /.system-win -->

HandBrake's QuickSync and OpenCL features are only supported on Windows.

## Software

<!-- .system-lin -->

### Linux

#### Ubuntu (Official PPA)

Several major versions are supported, see [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html) for PPA details.

#### Other Linux

For any other distribution, you must [compile from source](../developer/build-linux.html). 


<!-- /.system-lin -->
<!-- .system-mac -->

### Mac

- OS X 10.7 Lion or later
- [VLC](https://www.videolan.org/vlc/) is recommended for previewing/playing MKV (Matroska) media files

<!-- /.system-mac -->
<!-- .system-win -->

### Windows

- Windows Vista (64-bit) with Service Pack 1 or later
- Microsoft .NET Framework 4.6 or later
- [VLC](https://www.videolan.org/vlc/) is recommended for previewing/playing media files

<!-- /.system-win -->
