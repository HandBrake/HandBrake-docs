---
Type:            article
Title:           Using the Queue
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Using the Queue
===============

Encoding videos takes time, and can use a lot of your computer's computational power.

Luckily, you can set up multiple encodes at once by adding them to HandBrake's `Queue`.

## Adding encodes to the Queue

Begin by [opening a Source, selecting a Title](../workflow/open-video-source.html), and [selecting a Preset](../workflow/select-preset.html). Then select the `Add to Queue` button on the toolbar.

<!-- .system-macos -->

![Adding an encode to the Queue](../../images/mac/add-to-queue-button-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-windows -->

Select the `Show Queue` button on the toolbar to see the queued encodes, or `Jobs`.

<!-- .system-macos -->

![Opening the Queue window](../../images/mac/queue-button-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

![Queue window on Mac](../../images/mac/queue-1.0.0.png "The Queue window lists pending Jobs.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

![Queue window on Windows](../../images/windows/queue-1.0.0.png "The Queue window lists pending Jobs.")

<!-- /.system-windows -->

You may open additional `Sources` and add them to the `Queue` in the same manner.

## Adding multiple encodes simultaneously

When using the `Queue`, you may find it beneficial to create multiple `Jobs` at one time.

<!-- .system-macos -->

On Mac, first open the `Preferences` window using the `HandBrake` menu. In the `General` section, ensure that the `Automatically name output files` setting is selected and `Title` is part of the `Format` field.

![Opening the Preferences window on Mac](../../images/mac/preferences-menu-1.0.0.png "Open the Preferences window using the HandBrake menu.")

![Selecting the Automatically name output files setting](../../images/mac/preferences-auto-naming-1.0.0.png "Select Automatically name output files to ensure unique file names when adding multiple Titles to the Queue.")

This ensures that each of your `Jobs` will be given a unique file name, and not overwrite each other.

<!-- /.system-macos -->
<!-- .system-windows -->

On Windows, first open the `Preferences` window using the `Tools` menu. In the `Output Files` section, ensure that the `Automatically name output files` setting is selected. Set a `Default Path` (where your new videos will be created) and make sure `Title` is part of the `File Format` field.

![Opening the Preferences window on Windows](../../images/windows/preferences-menu-1.0.0.png "Open the Preferences window using the Tools menu.")

![Selecting the Automatically name output files setting](../../images/windows/preferences-auto-naming-1.0.0.png "Set up Automatic File Naming to ensure unique file names when adding multiple Titles to the Queue.")

This ensures that each of your `Jobs` will be given a unique file name, and not overwrite each other.

<!-- /.system-windows -->

If your `Source` is a Blu-ray, DVD, or other disc or disc-like format with multiple `Titles`, you may open it with HandBrake and add multiple `Titles` to the `Queue` simultaneously.

Additionally, you may open a folder of multiple single-`Title` videos (excluding discs and disc-like formats) as one virtual `Source` with multiple `Titles` using the `Open Source` dialog, and then add multiple `Titles` to the `Queue`[^batch-scan-subdirectories].

<!-- .system-macos -->

![Opening a folder containing multiple video Sources](../../images/mac/open-source-dialog-folder-1.0.0.png "The Open Source dialog allows you to select a folder containing multiple video files.")

![Selecting a Title](../../images/mac/title-selection-1.1.0.png "The Title control lets you select which video clip you want to use.")

<!-- /.system-macos -->
<!-- .system-linux -->

On Linux, select `Add Multiple` from the `Queue` menu, then select the `Titles` you wish to encode using the presented dialog. Be sure to give each a unique file name.

<!-- /.system-linux -->
<!-- .system-macos -->

On Mac, select `Add Titles to Queue...` from the `File` menu, then select the `Titles` you wish to encode using the presented dialog.

![Add Titles to Queue menu item](../../images/mac/add-titles-to-queue-menu-1.0.0.png "Select Add Titles to Queue... from the File menu to open a selection dialog.")

![Selecting multiple Titles to add to the Queue](../../images/mac/add-titles-to-queue-1.0.0.png "Select the Titles you wish to encode from the Add Titles to Queue dialog.")

<!-- /.system-macos -->
<!-- .system-windows -->

On Windows, select `All Selection to Queue` from the `Queue` menu to add all `Titles`.

<!-- /.system-windows -->

You may open additional `Sources` and add them to the `Queue` in the same manner.

## Editing Jobs

To make changes to `Jobs` in the `Queue`, first open the `Queue` window by selecting the `Show Queue` button on the toolbar.

<!-- .system-macos -->

![Opening the Queue window](../../images/mac/queue-button-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Show Queue button on the toolbar to open the Queue window.")

<!-- /.system-windows -->

To remove a `Job`, select the `╳` button next to the unwanted `Job`.

<!-- .system-linux -->

On Linux, if you want to make changes to a `Job` already in the `Queue`, select the `Job` and then select `Edit`. Editing a `Job` opens the `Source` in HandBrake's main window and removes the `Job` from the `Queue`.

<!-- /.system-linux -->
<!-- .system-macos -->

On Mac, if you want to make changes to a `Job` already in the `Queue`, control- or right-click on the `Job` and select `Edit`. Editing a `Job` opens the `Source` in HandBrake's main window and removes the `Job` from the `Queue`.

![Editing an encode Job on Mac](../../images/mac/queue-edit-1.0.0.png "Control- or right-click the Job and select Edit to make changes.")

<!-- /.system-macos -->
<!-- .system-windows -->

On Windows, if you want to make changes to a `Job` already in the `Queue`, select the edit button next to the `Job`. Editing a `Job` opens the `Source` in HandBrake's main window and removes the `Job` from the `Queue`.

![Editing an encode Job on Windows](../../images/windows/queue-1.0.0.png "Select the edit button, which looks like a sheet of paper, to make changes to a Job.")

<!-- /.system-windows -->

When you're finished making changes, again add the encode to the `Queue` by selecting the `Add to Queue` button on the toolbar.

<!-- .system-macos -->

![Adding an encode to the Queue](../../images/mac/add-to-queue-button-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-macos -->
<!-- .system-windows -->

![HandBrake toolbar on Windows](../../images/windows/toolbar-1.0.0.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-windows -->

## Starting the Queue

When ready, select the `Start` button on the`Queue` window or the `Start Queue` button on the main window to begin encoding the `Jobs` in the `Queue`.

<!-- .system-macos -->

![Starting the Queue](../../images/mac/start-queue-button-1.0.0.png "The Start Queue button begins encoding the Jobs in the Queue.")

<!-- /.system-macos -->

[^batch-scan-subdirectories]: When opening multiple videos in a folder, HandBrake ignores any additional folders inside. Make sure the videos you wish to open are at the top level of the selected folder.
