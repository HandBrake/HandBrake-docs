---
Type:            article
Title:           System requirements
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2020 HandBrake Team
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

- Processor: Intel Core i3, AMD FX / 2014+ APU, or better
- Free Memory:
  - 512 MB for transcoding standard definition video
  - 1.5 GB for transcoding high definition video
  - 4 GB or more for transcoding 4K video
- Screen Resolution: 1024x768 or better
- System Storage:
  - 100 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos

<!-- /.system-linux -->

<!-- .system-macos -->

### Mac

- Processor: Intel Core i3 or better
  - 2012 models and newer are recommended as older Macs are often quite slow for processing video
- Free Memory:
  - 512 MB for transcoding standard definition video
  - 1.5 GB for transcoding high definition video
  - 4 GB or more for transcoding 4K video
- Screen Resolution: 1024x768 or better
- System Storage:
  - 100 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos

<!-- /.system-macos -->

<!-- .system-windows -->

### Windows

- Processor: Intel Core i3, AMD FX / 2014+ APU, or better
- Free Memory:
  - 512 MB for transcoding standard definition video
  - 1.5 GB for transcoding high definition video
  - 4 GB or more for transcoding 4K video
- Screen Resolution: 1024x768 or better (higher if running in High-DPI Mode, above 96 DPI or 100%)
- System Storage:
  - 50 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos

<!-- /.system-windows -->

## Hardware Encoders

Please see the specific documentation pages for these encoders for further details.

- [AMD VCE](video-vce.html)
- [Apple VideoToolbox](video-videotoolbox.html)
- [Intel QuickSync Video](video-qsv.html)
- [Nvidia Nvenc](video-nvenc.html)

## Software

The following describes the level of support available for the current HandBrake version as indicated by the status for each system version.

| Status      | Description                                                                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Supported   | HandBrake is tested working on these system versions. The HandBrake Team and community members provide volunteer support, and issue reports are welcome. |
| Deprecated  | HandBrake may work on these system versions. Support is near end of life. Limited functionality and other issues will likely not be addressed.           |
| Unsupported | HandBrake does not work on these system versions. No support will be provided. Please update to enjoy the latest features and bug fixes.                 |

<!-- .system-linux -->

### BSD and Linux

#### FreeBSD

HandBrake is supported on FreeBSD stable and maintenance versions.

| FreeBSD Version | Status    | Last Compatible Version | Notes |
|-----------------|-----------|-------------------------|-------|
| FreeBSD 12      | Supported |                         |       |
| FreeBSD 11      | Supported |                         |       |

#### Fedora

HandBrake is supported on Fedora stable and maintenance versions until their end of life.

| Fedora Version | Status              | Last Compatible Version | Notes                         |
|----------------|---------------------|-------------------------|-------------------------------|
| Fedora 31      | Supported           |                         |                               |
| Fedora 30      | Deprecated in 1.3.0 |                         | End of life expected Q4 2020. |
| Fedora 29      | Unsupported         | HandBrake 1.3.1         | End of life.                  |
| Fedora 28      | Unsupported         | HandBrake 1.3.1         | End of life.                  |

#### Ubuntu

HandBrake is supported on the most recent Ubuntu LTS version until a new LTS version is released. Support for older LTS versions may be provided via Flatpak. Interim (non-LTS) versions are typically supported until their end of life.

| Ubuntu Version          | Status              | Last Compatible Version | Notes                              |
|-------------------------|---------------------|-------------------------|------------------------------------|
| 20.04 LTS Focal Fossa   | Supported           |                         | Flatpak, PPA, and source.          |
| 18.04 LTS Bionic Beaver | Deprecated in 1.3.0 |                         | Flatpak only.                      |
| 16.04 LTS Xenial Xerus  | Unsupported         | HandBrake 1.1.2         | Various issues affect operability. |
| 14.04 LTS Trusty Tahr   | Unsupported         | HandBrake 1.1.2         | End of life (standard support).    |

#### Other

While no official support for other systems is provided, HandBrake’s Flatpak binaries are widely compatible, and documentation is provided for compiling from source on a variety of BSDs and Linux distributions. Hardware encoding support may be limited or unavailable on these systems.

See [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html), [Building HandBrake for BSD](../developer/build-bsd.html), and [Building HandBrake for Linux](../developer/build-linux.html), for additional details.

<!-- /.system-linux -->
<!-- .system-macos -->

### Mac

HandBrake is supported on recent versions of macOS[^apple-eol].

| macOS Version      | Status              | Last Compatible Version | Notes                              |
|--------------------|---------------------|-------------------------|------------------------------------|
| 10.15 Catalina     | Supported           |                         | Requires HandBrake 1.2.2 or later. |
| 10.14 Mojave       | Supported           |                         | Requires HandBrake 1.1.2 or later. |
| 10.13 High Sierra  | Deprecated in 1.3.0 |                         | End of life expected Q4 2020.      |
| 10.12 Sierra       | Deprecated in 1.3.0 |                         | End of life.                       |
| 10.11 El Capitan   | Deprecated in 1.2.0 |                         | End of life.                       |
| 10.10 Yosemite     | Unsupported         | HandBrake 1.1.2         | End of life.                       |
| 10.9 Mavericks     | Unsupported         | HandBrake 1.1.2         | End of life.                       |
| 10.8 Mountain Lion | Unsupported         | HandBrake 1.1.2         | End of life.                       |
| 10.7 Lion          | Unsupported         | HandBrake 1.1.2         | End of life.                       |
| 10.6 Snow Leopard  | Unsupported         | HandBrake 0.10.5        | End of life.                       |

[VLC](https://www.videolan.org/vlc/) is recommended for viewing media files, notably Matroska (MKV), which is not natively supported on macOS.

<!-- /.system-macos -->
<!-- .system-windows -->

### Windows

HandBrake is supported on recent Windows versions and requires [Microsoft .NET Framework](https://dotnet.microsoft.com/download/dotnet-framework) 4.8 or later.

| Windows Version | Status              | Last Compatible Version | Notes        |
|-----------------|---------------------|-------------------------|--------------|
| Windows 10      | Supported           |                         |              |
| Windows 8.1     | Supported           |                         |              |
| Windows 7 SP1   | Deprecated in 1.1.0 |                         | End of life. |
| Windows Vista   | Unsupported         | HandBrake 1.0.7         | End of life. |
| Windows XP      | Unsupported         | HandBrake 0.9.9         | End of life. |

[VLC](https://www.videolan.org/vlc/) is recommended for viewing media files.

<!-- /.system-windows -->


[^apple-eol]: Since Apple does not publish support periods, common convention is to consider a macOS version end of life once [security updates](https://support.apple.com/en-us/HT201222) cease being offered, typically 2–3 years after initial release.
