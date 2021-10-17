---
Type:            article
Title:           System requirements
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
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

The following is the minimum level of hardware that HandBrake formally supports.

- Processor:
  - Intel Core (6th generation and newer) i3, i5, i7, i9 or equivalent Xeon
  - AMD Ryzen, Threadripper or Epyc
- Free memory:  
  - 1 GB for transcoding standard definition video (480p/576p)
  - 2 GB for transcoding high definition video (720p/1080p)
  - 6 GB or more for transcoding ultra high definition video (2160p 4K)
- System storage:
  - 150 MB for the HandBrake app
  - 10 GB or more recommended for processing and storing your new videos
- Display resolution:
  - 1280x960 minimum, proportionately higher with display scaling. (See section below)

While it may be technically possible to run HandBrake on hardware not meeting these requirements, it is not recommended. 

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
| FreeBSD 13      | Supported |                         |       |
| FreeBSD 12      | Supported |                         |       |
| FreeBSD 11      | Supported |                         |       |

#### Fedora

HandBrake is supported on Fedora stable and maintenance versions until their end of life.

| Fedora Version | Status              | Last Compatible Version | Notes                         |
|----------------|---------------------|-------------------------|-------------------------------|
| Fedora 34      | Supported           |                         |                               |
| Fedora 33      | Supported           |                         |                               |
| Fedora 32      | Deprecated in 1.3.0 |                         |                               |
| Fedora 31      | Deprecated in 1.3.0 |                         |                               |
| Fedora 30      | Deprecated in 1.3.0 |                         | End of life.                  |
| Fedora 29      | Unsupported         | HandBrake 1.3.1         | End of life.                  |
| Fedora 28      | Unsupported         | HandBrake 1.3.1         | End of life.                  |

#### Ubuntu

HandBrake is supported on the most recent Ubuntu LTS version until a new LTS version is released. Support for older LTS versions may be provided via Flatpak.

Interim (non-LTS) versions are typically supported until their end of life.

| Ubuntu Version          | Status              | Last Compatible Version | Notes                              |
|-------------------------|---------------------|-------------------------|------------------------------------|
| 20.04 LTS Focal Fossa   | Supported           |                         | Flatpak, PPA, and source.          |
| 18.04 LTS Bionic Beaver | Deprecated in 1.3.0 | HandBrake 1.3.0         | Flatpak only.                      |
| 16.04 LTS Xenial Xerus  | Unsupported         | HandBrake 1.1.2         | Various issues affect operability. |
| 14.04 LTS Trusty Tahr   | Unsupported         | HandBrake 1.1.2         | End of life (standard support).    |

#### Other

While no official support for other systems is provided, HandBrake’s Flatpak binaries are widely compatible, and documentation is provided for compiling from source on a variety of BSDs and Linux distributions. Hardware encoding support may be limited or unavailable on these systems.

See [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html), [Building HandBrake for BSD](../developer/build-bsd.html), and [Building HandBrake for Linux](../developer/build-linux.html), for additional details.

<!-- /.system-linux -->
<!-- .system-macos -->

### Mac

Since version 1.4.0 HandBrake for macOS is shipped as a Universal Binary 2 (x86_64 / arm64). HandBrake is supported on recent versions of macOS[^apple-eol].

| macOS Version      | Status              | Last Compatible Version | Notes                              |
|--------------------|---------------------|-------------------------|------------------------------------|
| 11 Big Sur         | Supported           |                         | Requires HandBrake 1.4 or later.   |
| 10.15 Catalina     | Supported           |                         | Requires HandBrake 1.2.2 or later. |
| 10.14 Mojave       | Supported           |                         | Requires HandBrake 1.1.2 or later. |
| 10.13 High Sierra  | Deprecated          | 1.4.0                   | End of life                        |
| 10.12 Sierra       | Deprecated          | 1.4.x                   | End of life.                       |
| 10.11 El Capitan   | Unsupported         | 1.3.x                   | End of life.                       |
| 10.10 Yosemite     | Unsupported         | 1.1.2                   | End of life.                       |
| 10.9 Mavericks     | Unsupported         | 1.1.2                   | End of life.                       |
| 10.8 Mountain Lion | Unsupported         | 1.1.2                   | End of life.                       |
| 10.7 Lion          | Unsupported         | 1.1.2                   | End of life.                       |
| 10.6 Snow Leopard  | Unsupported         | 0.10.5                  | End of life.                       |

[VLC](https://www.videolan.org/vlc/) is recommended for viewing media files, notably Matroska (MKV), which is not natively supported on macOS.

<!-- /.system-macos -->
<!-- .system-windows -->

### Windows

HandBrake requires the [.NET Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/5.0) 5.0.x

| Windows Version | Status              | Last Compatible Version | Notes          |
|-----------------|---------------------|-------------------------|----------------|
| Windows 10      | Supported           |                         | 1909 or later  |
| Windows 8.1     | Unsupported         | 1.3.3                   | See Note Below |
| Windows 7 SP1   | Unsupported         | 1.3.3                   | See Note Below   |
| Windows Vista   | Unsupported         | 1.0.7                   | End of life.   |
| Windows XP      | Unsupported         | 0.9.9                   | End of life.   |

Note: HandBrake will still run on Windows 7 and 8.1.  You will receive a notice that it is not supported when starting the app (twice) after which it will continue to run normally.
Please note, some functionality may not work correctly on these OSes. 

[VLC](https://www.videolan.org/vlc/) is recommended for viewing media files.

<!-- /.system-windows -->

<!-- .system-linux.system-windows -->
### Display scaling

Display scaling beyond 100% requires a proportionately higher resolution to fit the higher density interface graphics in the same physical space. 
For example, HandBrake will fit within the bounds of a 1920x1080 (FHD) resolution display at 100% and 125% scaling, but not at 150% and higher.

In addition, changes to system themes, font-sizes, padding etc may also impact the ability of the window to render in the space provided. 

If HandBrake does not fit, you can change the "Scale and Layout" setting on Windows or "Scaling Factor" setting on Linux to a lower value to allow HandBrake to operate.

<!-- /.system-linux.system-windows -->


[^apple-eol]: Since Apple does not publish support periods, common convention is to consider a macOS version end of life once [security updates](https://support.apple.com/en-us/HT201222) cease being offered, typically 2–3 years after initial release.
