---
Type:            article
State:           [ obsolete ]
Title:           System requirements
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

System requirements
===================

## Hardware

The following is the minimum level of hardware that HandBrake supports. While it may be technically possible to run HandBrake on hardware older than this, it is neither recommended nor supported.

<!-- .system-linux -->

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

<!-- /.system-linux -->

<!-- .system-macos -->

### Mac

- Processor: Intel Core 2 Duo or better
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

<!-- /.system-macos -->

<!-- .system-windows -->

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

<!-- /.system-windows -->

HandBrake's QuickSync feature is only supported on Windows. Experimental Linux support requires building from source with `--enable-qsv`. QuickSync requires a 2nd generation (Sandy Bridge) or newer Intel Core series processor with integrated Intel HD Graphics enabled.

## Software

<!-- .system-linux -->

### Linux

#### Ubuntu (Official PPA)

Several major versions are supported, see [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html) for PPA details.

#### Other Linux

For any other distribution, you must [compile from source](../developer/build-linux.html). 


<!-- /.system-linux -->
<!-- .system-macos -->

### Mac

- OS X 10.7 Lion or later
- [VLC](https://www.videolan.org/vlc/) is recommended for previewing/playing MKV (Matroska) media files

<!-- /.system-macos -->
<!-- .system-windows -->

### Windows

- Windows 7 Service Pack 1 (64-bit) or later
- Microsoft .NET Framework 4.6.1 or later
- [VLC](https://www.videolan.org/vlc/) is recommended for previewing/playing media files

<!-- /.system-windows -->
