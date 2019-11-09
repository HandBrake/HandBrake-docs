---
Type:            article
State:           [ draft ]
Title:           Automatic File Naming
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Automatic File Naming
=============================

HandBrake can automatically name your output files for you based on a number of criteria.

If you open the programs Preferences screen, you'll see a section that referes to the "Output Files"

![File output preferences](../../images/windows/output-file-preferences-1.0.0.png "File output preferences")

Here you can define the default path where output files will be stored, and the format the file name will take.

By default, it will be {source}-{title}

These are all of the placeholder field options:
* Live Update:
  * {source}
  * {title}
  * {chapters}
* Non-live Update: These only change if you scan a new source, change title or chapters.
  * {date}
  * {time}
  * {creation-date}
  * {creation-time}
  * {quality}
  * {bitrate}

### Source Name Handling.

Many sources have awkward names. (i.e all capitals). HandBrake offers a few options to correct this.

The following options will affect the source name:

- "Change to Title case",  This is also known as camel case where the first letter of each word is a capital followed by lower case letters.

- "Replace underscores with a space"  i.e  "_" to " "

- "Remove common punctuation" i.e ( Dash - Period . Commas ,)

### MP4 File Extension Handling

The last option allows you to choose the MP4 file extension handling.

MP4 and M4V are identical files. It's just a different file extension.

For MP4 files, HandBrake will automatically use the extension M4V when you pass-through audio (AC3), use SRT subtitles or have chapter markers enabled.

You can simply change the file extension between .mp4 and .m4v as the file is exactly the same. There are no differences in the content or container itself.

