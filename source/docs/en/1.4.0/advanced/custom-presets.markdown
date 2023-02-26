---
Type:            article
State:           [ obsolete ]
Title:           Custom Presets
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.4.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Custom Presets
=============================

HandBrake comes with many built-in presets which cover the most common use case scenarios. However there are many scenarios and devices that many not be covered.

On the main window, below the title selection controls, you can click the "Save New Preset" button to create your own preset.

<!-- .system-linux -->
<!-- /.system-linux -->
<!-- .system-macos -->
![macOS Preset Controls](../../images/windows/preset-controls-mac-1.4.0.png "Preset Controls (macOS)")
<!-- /.system-macos -->
<!-- .system-windows -->
![Windows Preset Controls](../../images/windows/preset-controls-win-1.4.0.png "Preset Controls (Windows)")
<!-- /.system-windows -->

When you've pressed this button, you'll see the following window appear:

<!-- .system-macos -->
![macOS Add Preset](../../images/windows/add-preset-mac-1.4.0.png "Add Preset (macOS)")
<!-- /.system-macos -->
<!-- .system-windows -->
![Windows Add Prese](../../images/windows/add-preset-win-1.4.0.png "Add Preset (Windows)")
<!-- /.system-windows -->

Pressing "add" will save a new preset with the details you've entered based on the settings that are currently on the main window. 


## Audio and Subtitles Beavhiours 

Audio and Subtitle settings are special. The preset does not store selected audio and subtitle tracks from the main window. It uses rules to automatically select them for each new source or title that you selected.
You can modify these rules by editing the settings on the relevant "selection behaviour" screen.

Please note, these rules do not cover all possible use cases. If the behaviours don't meet your requirements, audio and subtitle tracks will need to be handled manually after you've scanned a source. 

For more information, please see [Audio and Subtitle Defaults](../workflow/audio-subtitle-defaults.html).

## Default Preset

If you regularly use the same preset, you can make it the default preset that HandBrake starts with by selecting the "Make Default" (macOS) or "Set Current as Default" (Window) option in the presets menu or by using the preset manager accessed via the toolbar.

