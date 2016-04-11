---
Title:           Adjusting quality
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos <bradley@bradleysepos.com>
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Adjusting quality
=================

HandBrake's default settings and built-in `Presets` use a constant quality encoding method. This makes your new video look consistent from start to finish. Always use constant quality unless you have a specific reason not to.

You can use the default setting for the `Preset` you selected, or adjust the quality control higher or lower depending on your tastes. Increasing quality will make your new video take up more space on your computer or playback device, whereas reducing quality will typically make your new video take up less space.

## Using the quality control

Most of HandBrake's built-in `Presets` use the x264 video encoder and a constant quality value of [RF](abbr:Rate Factor) 20. A lower RF number means *higher* quality.

To increase video quality, adjust the quality control toward the right. To reduce video quality, adjust the quality control toward the left.

![Quality control](../images/quality-control.png)

Begin by making small adjustments (plus or minus 1-2 RF is usually noticeable).

## Recommended quality settings

Recommended settings for x264 are:

- RF 18-22 for 480p Standard Definition[^480p]
- RF 19-23 for 720p High Definition[^720p]
- RF 20-24 for 1080p High Definition[^1080p]

Lower quality settings may be used to produce smaller video files or for web videos where bandwidth is a concern. Drastically lower settings may show significant loss of detail.

Using higher than recommended quality settings (exceeding RF 18 or so) can lead to *extremely large files* that may not be compatible with your devices. When in doubt, stick to the recommended range or use the default setting for the `Preset` you selected.

## Display size and viewing distance

Imperfections tend to be more noticeable at larger display sizes and closer viewing distances. This is especially true for lower resolution videos (less than 720p), which are typically scaled or "blown up" to fill your display, magnifying even minor imperfections in quality.

You may wish to slightly increase quality for viewing on larger displays (50 inches / 125 cm diagonal or greater), or where viewing from closer than average distances[^viewing-distance]. Reduced quality may be acceptable for viewing on smaller screens or where storage space is limited, e.g. mobile devices.

## Next steps

Continue to [Previewing your settings](preview-settings.html).

[^480p]: [SD](abbr:Standard Definition) video has a resolution of 720x480 or fewer pixels. DVDs, small web videos, and most analog sources are SD.

[^720p]: 720p [HD](abbr:High Definition) video has a resolution of 1280x720 pixels. With three times the resolution of SD, and about half that of 1080p HD, 720p HD is commonly used by consumer video cameras, web videos, and broadcast TV sports.

[^1080p]: 1080p [HD](abbr:High Definition) video has a resolution of 1920x1080 pixels—twice the resolution of 720p and six times the resolution of 480p. 1080p HD video is commonly used by mobile phones and tablets, consumer and professional video cameras, and Blu-ray.

[^viewing-distance]: Learn more about [optimum viewing distances for high definition TV displays](https://en.wikipedia.org/wiki/Optimum_HDTV_viewing_distance).