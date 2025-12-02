---
Type:            article
State:           [ draft ]
Title:           Automatic File Naming
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Automatic File Naming
=============================

HandBrake can automatically name your output files for you based on a number of criteria.

If you open the programs Preferences screen, you'll see a section that referes to the "Output Files"

<!-- .system-macos -->
![File output preferences](../../images/mac/output-file-preferences-1.5.0.png "File output preferences macOS")
<!-- /.system-macos -->

<!-- .system-windows -->
![File output preferences](../../images/windows/output-file-preferences-1.7.0.png "File output preferences Windwos")
<!-- /.system-windows -->

Here you can define the default path where output files will be stored, and the format the file name will take.

By default, it will be {source}-{title}

| Placeholder             | Description                                            | Windows   | macOS         | Linux  |
|-------------------------|-----|------|-----|-----|
| Source                  | Name of the source file or drive label                 | Supported | Supported     | Supported |
| Title                   | The number of the title (dvd/bluray) or file index     | Supported | Supported     | Supported |
| Chapters                | The chapter range selected in the UI                   | Supported | Supported     | Supported |
| Date                    | Current Date (in system short format)                  | Supported | Supported     | Supported |
| Time                    | Current Time  (HH:mm) format                           | Supported | Supported     | Supported |
| Creation-Date           | Date the file was created from source file metadata    | Supported | Supported     | Supported |
| Creation-Time           | Time the file was created from source file metadata    | Supported | Supported     | Supported |
| Modification-Date       | Date the file was modified from source file metadata   | Supported | Supported     | Supported |
| Modification-Time       | Time the file was modified from source file metadata   | Supported | Supported     | Supported |
| preset                  | The name of the currently selected preset              | Supported | Supported     | Supported |
| width                   | The storage width of the output file                   | Supported | Supported     | Supported |
| height                  | The height width of the output file                    | Supported | Supported     | Supported |
| codec                   | The video format name                                  | Supported | Supported     | Supported |
| encoder                 | The short hand key of they video encoder used          | Supported | Supported     | Not Supported |
| encoder_bit_depth       | The bit-depth of the encoding                          | Supported | Supported     | Supported |
| quality_bitrate         | Quality or Bitrate value from the video tab.           | Supported | Supported     | Supported but separate options |
| quality_type            | "Q" Quality or "kbps" for avg bitrate                  | Supported | Supported     | Supported but separate options |

### Source Name Handling.

Many sources have awkward names. (i.e all capitals). HandBrake offers a few options to correct this.

The following options will affect the source name:

- "Change to Title case",  This is also known as camel case where the first letter of each word is a capital followed by lower case letters.

- "Replace underscores with a space"  i.e  "_" to " "

- "Remove common punctuation" i.e ( Dash - Period . Commas ,)

### MP4 File Extension Handling

The last option allows you to choose the MP4 file extension handling.

MP4 and M4V are identical files. It's just a different file extension.

For MP4 files, you can set HandBrake to automatically use the extension M4V when you pass-through audio (AC3), use 3GPP subtitles or have chapter markers enabled.

You can simply change the file extension between .mp4 and .m4v as the file is exactly the same. There are no differences in the content or container itself.

