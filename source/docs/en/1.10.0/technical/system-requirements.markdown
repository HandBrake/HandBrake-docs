---
Type:            article
Title:           System requirements
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.10.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

System requirements
===================

## Hardware

The following is the minimum level of hardware HandBrake formally supports.

- Processor:
  - AMD Ryzen, Threadripper, or Epyc
  - Intel Core (9th generation and newer) i3, i5, i7, i9, Ultra or equivalent Xeon
  - Apple Silicon M1 and newer
- Minimum System Memory:
  - 16 GB for transcoding standard and high definition video (480p/576p/720p/1080p)
  - 32 GB for transcoding 4K Ultra HD video (2160p)
- System storage:
  - 150 MB for the HandBrake app
- Display resolution:
  - 1280x960 minimum, proportionately higher with display scaling. (See section below)

While it may be technically possible to run HandBrake on hardware not meeting these requirements, it is not recommended. 

<!-- .system-windows -->
### Notice: Users with Intel CPU's

If you are running a 13th or 14th generation Intel CPU, please make sure you are running the latest BIOS to avoid system stability issues. 

If you are using Windows 10 and also have an Intel 12th generation CPU (or newer), we recommend using the "High Performance" power profile in Windows.

This should help maintain performance when HandBrake is not a foreground window. 

This should not be necessary if you are running Windows 11.
<!-- /.system-windows -->

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

| FreeBSD Version | Status      | Last Compatible Version | Notes |
|-----------------|-------------|-------------------------|-------|
| FreeBSD 13      | Supported   |                         |       |
| FreeBSD 12      | Supported   |                         |       |
| FreeBSD 11      | Unsupported | 1.3.3                   |       |

#### Fedora

HandBrake is supported on Fedora stable and maintenance versions until their end of life.

| Fedora Version | Status              | Last Compatible Version | Notes                         |
|----------------|---------------------|-------------------------|-------------------------------|
| Fedora 43      | Supported           |                         |                               |
| Fedora 42      | Supported           |                         |                               |
| Fedora 41      | Deprecated          |                         | EOL since 2025-12-15          |
| Fedora 40      | Unsupported         | HandBrake 1.9.2         |                               |
| Fedora 39      | Unsupported         | HandBrake 1.9.2         |                               |
| Fedora 38      | Unsupported         | HandBrake 1.9.2         |                               |
| Fedora 37      | Unsupported         | HandBrake 1.6.1         |                               |
| Fedora 36      | Unsupported         | HandBrake 1.6.1         |                               |
| Fedora 35      | Unsupported         | HandBrake 1.5.1         |                               |
| Fedora 34      | Unsupported         | HandBrake 1.5.1         |                               |
| Fedora 33      | Unsupported         | HandBrake 1.4.2         |                               |
| Fedora 32      | Unsupported         | HandBrake 1.4.2         |                               |
| Fedora 31      | Unsupported         | HandBrake 1.4.2         |                               |
| Fedora 30      | Unsupported         | HandBrake 1.4.2         |                               |
| Fedora 29      | Unsupported         | HandBrake 1.3.1         |                               |
| Fedora 28      | Unsupported         | HandBrake 1.3.1         |                               |

#### Ubuntu

HandBrake is supported on the most recent Ubuntu LTS version until a new LTS version is released. Support for older LTS versions may be provided via Flatpak.

Interim (non-LTS) versions are typically supported until their end of life.

| Ubuntu Version            | Status              | Last Compatible Version | Notes                              |
|---------------------------|---------------------|-------------------------|------------------------------------|
| 24.04 LTS Noble Numbat    | Supported           |                         | Flatpak, and source.               |
| 22.04 LTS Jammy Jellyfish | Supported           |                         | Flatpak, and source.               |
| 20.04 LTS Focal Fossa     | Unsupported         | HandBrake 1.9.2         |                                    |
| 18.04 LTS Bionic Beaver   | Unsupported         | HandBrake 1.3.3         |                                    |
| 16.04 LTS Xenial Xerus    | Unsupported         | HandBrake 1.1.2         |                                    |
| 14.04 LTS Trusty Tahr     | Unsupported         | HandBrake 1.1.2         |                                    |

#### Other

While no official support for other systems is provided, HandBrake’s Flatpak binaries are widely compatible, and documentation is provided for compiling from source on a variety of BSDs and Linux distributions. Hardware encoding support may be limited or unavailable on these systems.

See [Where to get HandBrake](../get-handbrake/where-to-get-handbrake.html), [Building HandBrake for BSD](../developer/build-bsd.html), and [Building HandBrake for Linux](../developer/build-linux.html), for additional details.

<!-- /.system-linux -->
<!-- .system-macos -->

### Mac

HandBrake is supported on recent versions of macOS, and since version 1.4.0 is a Universal Binary supporting both Intel and Apple Silicon Macs.


| macOS Version      | Status              | Last Compatible Version | Notes                              |
|--------------------|---------------------|-------------------------|------------------------------------|
| 26 Taho            | Supported           |                         | Requires HandBrake 1.8.0 or later. |
| 15 Sequoia         | Supported           |                         | Requires HandBrake 1.8.0 or later. |
| 14 Sonoma          | Supported           |                         | Requires HandBrake 1.5.0 or later. |
| 13 Ventura         | Deprecated          |                         | Requires HandBrake 1.5.0 or later. |
| 12 Monterey        | Deprecated          |                         | Requires HandBrake 1.4.0 or later. |
| 11 Big Sur         | Deprecated          |                         | Requires HandBrake 1.4.0 or later. |
| 10.15 Catalina     | Deprecated          |                         | Requires HandBrake 1.2.2 or later. |
| 10.14 Mojave       | Deprecated          |                         |                                    |
| 10.13 High Sierra  | Deprecated          |                         |                                    |
| 10.12 Sierra       | Unsupported         | 1.4.2                   |                                    |
| 10.11 El Capitan   | Unsupported         | 1.4.2                   |                                    |
| 10.10 Yosemite     | Unsupported         | 1.1.2                   |                                    |
| 10.9 Mavericks     | Unsupported         | 1.1.2                   |                                    |
| 10.8 Mountain Lion | Unsupported         | 1.1.2                   |                                    |
| 10.7 Lion          | Unsupported         | 1.1.2                   |                                    |
| 10.6 Snow Leopard  | Unsupported         | 0.10.5                  |                                    |

[VLC](https://www.videolan.org/vlc/) is recommended for viewing media files, notably Matroska (MKV), which is not natively supported on macOS.

<!-- /.system-macos -->
<!-- .system-windows -->

### Windows

HandBrake requires [.NET Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime) 8.0.x.
Please becareful when selecting hte correct version to download. See the links under the "Run Desktop Apps" section in hte middle of the page!


| Windows Version | Status              | Last Compatible Version | Notes                        |
|-----------------|---------------------|-------------------------|------------------------------|
| Windows 11      | Supported           |                         |                              |
| Windows 10      | Supported           |                         | 1909 or later.               |
| Windows 8.1     | Unsupported         | 1.3.3                   | 1.4.2 runs with limitations. |
| Windows 7 SP1   | Unsupported         | 1.3.3                   | 1.4.2 runs with limitations. |
| Windows Vista   | Unsupported         | 1.0.7                   |                              |
| Windows XP      | Unsupported         | 0.9.9                   |                              |

<!-- /.system-windows -->

<!-- .system-linux.system-windows -->

### Display scaling

Display scaling beyond 100% requires a proportionately higher resolution to fit the higher density interface graphics in the same physical space. For example, HandBrake will fit within the bounds of a 1920x1080 HD resolution display at 100% and 125% scaling, but not at 150% and higher.

Customization to system themes, such as font sizes and padding, may also impact the ability of the window to render in the space provided. 

If HandBrake does not fit within the bounds of your display, you can try changing the *Scale and Layout* setting on Windows, or the *Scaling Factor* setting on Linux, to a smaller value.

<!-- /.system-linux.system-windows -->
