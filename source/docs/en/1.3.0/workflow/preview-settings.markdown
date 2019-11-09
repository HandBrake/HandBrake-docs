---
Type:            article
Title:           Previewing your settings
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Previewing your settings
========================

Video encoding requires a lot of computer resources and can take awhile to complete.

HandBrake's `Preview` feature allows you to perform a test run on a small portion of your `Source`, so you can see what your new video will look like without encoding all of it.

## Opening the Preview window

At the top of HandBrake's main window, you'll see a toolbar with various buttons.

<!-- .system-macos -->

![Main window toolbar](../../images/mac/toolbar-1.1.0.png "The Toolbar provides easy access to HandBrake's most common functions.")

<!-- /.system-macos -->

Select the `Preview` button to open the `Preview` window.

## Adjusting Preview settings

Move your mouse cursor over the `Preview` window, and some controls will appear.

<!-- .system-macos -->

![Preview window](../../images/mac/preview-window-1.1.0.jpg "HandBrake's Preview feature lets you test your settings on a small portion of your Source.")

![Preview controls](../../images/mac/preview-controls-1.1.0.png "You can set the starting position and duration of your Preview.")

<!-- /.system-macos -->

Set the starting position by dragging the `Position` control left or right, and choose how many seconds of video you want to encode using the `Duration` control.

## Starting a Preview encode

When you're satisfied with your starting position and duration, select `Live Preview` and be patient. HandBrake will report its progress while it works.

<!-- .system-macos -->

![Preview progress indicator](../../images/mac/preview-progress-1.1.0.png "HandBrake will report its progress while encoding your Preview.")

![Preview playback controls](../../images/mac/preview-controls-playback-1.1.0.png "Playback controls allow you to interact with your Preview when it's ready.")

<!-- /.system-macos -->

When your `Preview` is ready, the controls are updated to let you play, pause, and rewind your video. You can also adjust the audio volume, and in some cases, choose which audio track plays.

<!-- .system-macos -->

To create a new `Preview`, select the `╳` button to start over.

<!-- /.system-macos -->

When you're finished previewing your work, you may close the `Preview` window.

<!-- .continue -->

## Next steps

<!-- .success -->

Continue to [Starting encoding](start-encoding.html).

<!-- /.success -->
<!-- .fail -->

If the `Preview` you created was lacking in quality or otherwise not as expected, you may need to [adjust quality](adjust-quality.html) or select a different [Preset](select-preset.html), after which you can create another `Preview` to see any changes.

<!-- /.fail -->

<!-- /.continue -->
