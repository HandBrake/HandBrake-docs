---
Type:            article
Title:           System requirements
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
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

The following is the minimum level of hardware that HandBrake supports.

- Processor:
  - Intel Core i3 or better
  - AMD FX / 2014+ APU or better
- Free memory:
  - 512 MB for transcoding standard definition video (480p/576p)
  - 1.5 GB for transcoding high definition video (720p/1080p)
  - 4 GB or more for transcoding ultra high definition video (2160p 4K)
- System storage:
  - 100 MB for the HandBrake app
  - 2 GB or more recommended for processing and storing your new videos
- Display resolution:
  - 1024x768 minimum, proportionately higher with display scaling

While it may be technically possible to run HandBrake on hardware not meeting these requirements, it is neither recommended nor supported.

### Hardware encoders

Please see the specific documentation pages for these encoders for further details.

- [AMD VCE](video-vce.html)
- [Apple VideoToolbox](video-videotoolbox.html)
- [Intel Quick Sync Video](video-qsv.html)
- [NVIDIA NVENC](video-nvenc.html)

## Software

The following describes the level of support available for the current HandBrake version as indicated by the status for each system version.

| Status      | Description                                                              | Support Level        | Maintenance                                                                                                            |
|-------------|--------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------|
| Supported   | HandBrake is maintained and tested working on these system versions.     | The HandBrake Team and community members provide [volunteer support](../help/community-support.html). | [Issue reports](https://github.com/HandBrake/HandBrake/issues) are welcome and addressed based on team availability. |
| Deprecated  | HandBrake might work on these system versions with limitations.          | No support will be provided. | Most issues will likely not be addressed. Please update to enjoy the latest features and bug fixes.            |
| Unsupported | HandBrake does not work or is severely limited on these system versions. | No support will be provided. | No issues will be addressed, regardless of severity. Updating as soon as possible is highly recommended.       |

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
| Fedora 32      | Supported           |                         |                               |
| Fedora 31      | Supported           |                         |                               |
| Fedora 30      | Deprecated in 1.3.0 |                         | End of life.                  |
| Fedora 29      | Unsupported         | HandBrake 1.3.1         | End of life.                  |
| Fedora 28      | Unsupported         | HandBrake 1.3.1         | End of life.                  |

#### Ubuntu

HandBrake is supported on the most recent Ubuntu LTS version until a new LTS version is released. Support for older LTS versions may be provided via Flatpak.

Interim (non-LTS) versions are typically supported until their end of life.

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
<!-- .system-linux.system-windows -->

### Display scaling

Display scaling beyond 100% requires a proportionately higher resolution to fit the higher density interface graphics in the same physical space. For example, HandBrake will fit within the bounds of a 1920x1080 (FHD) resolution display at 100% and 125% scaling, but not at 150% and higher.

The following is a list of common display scales and corresponding standard resolutions that meet HandBrake’s requirements. Higher resolutions may also be used.

| Scaling | Minimum Height | 4:3 Aspect                          | 16:10 Wide Aspect                       | 16:9 Wide Aspect                     | 21:9 Ultrawide Aspect  |
|---------|----------------|-------------------------------------|-----------------------------------------|--------------------------------------|------------------------|
| 100%    | 768 pixels     | 1024x768 (XGA)                      | 1280x800 (WXGA), 1440x900 (WSXGA/WXGA+) | 1366x768 (WXGA), 1600x900 (HD+)      | 2160x900 (WHD+)        |
| 125%    | 960 pixels     | 1280x960 (SXGA−), 1400x1050 (SXGA+) | 1680x1050 (WSXGA+)                      | 1920x1080 (FHD)                      | 2560x1080 (WFHD)       |
| 150%    | 1152 pixels    | 1600x1200 (UXGA)                    | 1920x1200 (WUXGA)                       | 2048x1152 (QWXGA)                    | 2880x1200 (WFHD+)      |
| 175%    | 1344 pixels    | 2048x1536 (QXGA)                    | 2560x1600 (WQXGA)                       | 2560x1440 (WQHD)                     | 3440x1440 (WQHD)       |
| 200%    | 1536 pixels    | 2048x1536 (QXGA)                    | 2560x1600 (WQXGA)                       | 3200x1800 (QWXGA+)                   | 3840x1600 (UW4K)       |
| 225%    | 1728 pixels    | 2800x2100 (QSXGA+)                  | 3840x2400 (WQUXGA)                      | 3200x1800 (QWXGA+)                   | 4320x1800 (WQHD+)      |
| 250%    | 1920 pixels    | 2800x2100 (QSXGA+)                  | 3840x2400 (WQUXGA)                      | 3840x2160 (4K UHD-1)                 | 5120x2160 (WUHD)       |
| 300%    | 2304 pixels    | 3200x2400 (QUXGA)                   | 3840x2400 (WQUXGA)                      | 5120x2880 (5K)                       | 5760x2400 (UW5K)       |
| 350%    | 2688 pixels    | 4096x3072 (HXGA)                    | 5120x3200 (WHXGA)                       | 5120x2880 (5K)                       | 6880x2880 (UW6K)       |

HandBrake will fit within any display resolution, 4:3 aspect ratio or wider, meeting or exceeding the minimum height for the associated scaling amount. If your display resolution meets or exceeds the minimum and HandBrake does not fit within its bounds, you will need to reduce your display scaling.

<!-- /.system-linux.system-windows -->


[^apple-eol]: Since Apple does not publish support periods, common convention is to consider a macOS version end of life once [security updates](https://support.apple.com/en-us/HT201222) cease being offered, typically 2–3 years after initial release.
