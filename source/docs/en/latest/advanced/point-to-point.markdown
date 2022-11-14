---
Type:            article
State:           [ draft ]
Title:           Point to Point Encoding
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         []
Copyright:       2022 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Point to Point Encoding
=============================

## Understanding your source

DVDs, blu-ray discs and video files can be divided into titles and chapters. Usually a title is a whole feature, like a movie or an episode.
Chapters, then, divide the movie/episode up logically. In a DVD or Blu-ray disc menu, if you use "Scene Selection", you are navigating by chapter.

## Point to Point options

![Point to Point controls](../../images/windows/point-to-point-1.0.0.png "Point to Point controls")

For a given title, you can choose to encode only part of it instead of the whole thing.

There are three options:

- Chapters,
- Seconds, e.g 60-180 means it will encode 2 minutes of video, starting 1 minute into the title.
- Frames, e.g (25-150) will encode 5 seconds of video if the framerate is 25fps. Starting after the 1st second of video.
