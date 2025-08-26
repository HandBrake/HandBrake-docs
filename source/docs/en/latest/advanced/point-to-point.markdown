---
Type:            article
Title:           Point to Point Encoding
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         []
Copyright:       2024 HandBrake Team
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

In HandBrake you can decide what parts of the content that you wish to encode. You can do this by choosing what "range" you'd like, followed by a start and end point.

![Point to Point controls](../../images/windows/point-to-point-1.0.0.png "Point to Point controls")

There are three types of range available:

- Chapters - Commonly found on DVD and Bluray discs and often video files as well.
- Seconds - This option offers more fine-grained control. For example: 60 - 180 means it will encode 2 minutes of video, starting 1 minute into the title.
- Frames, e.g (25-150) will encode 5 seconds of video if the framerate is 25fps. Starting after the 1st second of video. Note however that exact frame accuracy is not guaranteed or even always possible depending on the source.
