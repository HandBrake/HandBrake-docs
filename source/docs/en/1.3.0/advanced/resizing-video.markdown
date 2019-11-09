---
Type:            article
State:           [ draft ]
Title:           Resizing Video
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

Resizing Video
=============================

## Picture Settings

The picture settings tab is located on HandBrake's main window and becomes active after you've scanned a source.

![Picture settings tab](../../images/windows/picture-settings-1.0.0.png "Picture settings tab")

### Width and Height

These allow you to adjust the size of the output.  When you press the up or down arrows, the number will jump by the number selected in the "Modulus" dropdown.

When anamorphic strict is selected, both the "width" and "height" boxes will be disabled. You will get the maximum source size as output.

When loose is selected, you can downscale with the "width" or leave at the source width.

When none is selected, you can alter both "width" and "height"

### Modulus

The width and height must be divisible by this number. It's best left at 2, but if you have a problematic player, you can try setting it to 16.

### Anamorphic

Typically recommended that you leave this on "loose". If your source is not anamorphic, having this set to an anamorphic option will not affect the output. Thus, it is safe to leave on.

## Upscaling

The HandBrake GUI's do not allow upscaling. Most of the time this is a bad idea as it reduces (not increases) the quality of your source file along with increasing the final file size. This is less than ideal. Most of the time, letting the playback device or software upscale to your screen size is much better. You don't gain anything by upscaling with HandBrake.

In the very rare cases that this is needed, it can be done with the command line interface with the --width and --height options.
Typically you would only use this if the software or hardware you're using has a problematic or broken scaler.

## Cropping

HandBrake by default will try and detect and crop black bars from the video. Encoding black bars increases the encode time and the amount of disk space required, so it's best to let HandBrake remove them.

HandBrake's auto-crop is not perfect. It's giving you a best guess at what the crop values should be. If you find it gets it wrong, which is not that common, you can adjust them by selecting the "Custom" option.

You can preview the effect of your adjustments by clicking the "Preview" button on the toolbar.

![HandBrake toolbar](../../images/windows/toolbar-1.0.0.png "HandBrake toolbar")

The preview window will then appear and will display in real-time any changes you make on the picture settings screen.
If the size of the output exceeds the window size, the preview window will scale it to fit to screen.

![Preview window](../../images/windows/preview-window-1.0.0.jpg "Preview window")
