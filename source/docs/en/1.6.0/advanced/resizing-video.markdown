---
Type:            article
State:           [ obsolete ]
Title:           Resizing Video
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.6.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2024 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Resizing Video
=============================

## Picture Settings

The picture settings tab is located on HandBrake's main window and becomes active after you've scanned a source.

![Picture settings tab](../../images/windows/picture-settings-win-1.4.0.png "Picture settings tab")

### Anamorphic

Typically recommended that you leave this on "automatic". If your source is not anamorphic, having this set to an anamorphic option will not affect the output. Thus, it is safe to leave on.

When "Automatic" is selected, HandBrake will maximise the output size of the video, up to the source resolution or set "Resolution Limit".

When "Off" is selected along with unchecking "Optimal Size", you can alter both "width" and "height". Otherwise, the source size, or resolution limit will be used. 

When "Custom" is selected, you have full control of the output dimensions. 

### Upscaling

While upscaling is NOT recommended, there are some instances where it is useful (i.e. uploading to YouTube). To enable this, check the "Allow upscaling" checkbox. 
The "Resolution Limit" will still be honoured. 

## Cropping

HandBrake by default will try and detect and crop black bars from the video. Encoding black bars increases the encode time and the amount of disk space required, so it's best to let HandBrake remove them.

HandBrake's auto-crop is not perfect. It's giving you a best guess at what the crop values should be. If you find it gets it wrong, which is not that common, you can adjust them by selecting the "Custom" option.

You can preview the effect of your adjustments by clicking the "Preview" button on the toolbar.

![HandBrake toolbar](../../images/windows/toolbar-win-1.4.0.png "HandBrake toolbar")

The preview window will then appear and will display in real-time any changes you make on the picture settings screen.
If the size of the output exceeds the window size, the preview window will scale it to fit to screen.

![Preview window](../../images/windows/preview-window-1.0.0.jpg "Preview window")
