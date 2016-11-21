---
Type:            article
State:           draft
Title:           Multiple encodes using the Queue
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Multiple encodes using the Queue
================================

Encoding videos takes time, and can use a lot of your computer's computational power.

Luckily, you can set up multiple encodes at once by adding them to HandBrake's `Queue`.

## Adding encodes to the Queue

Begin by [opening a Source, selecting a Title](../workflow/open-video-source.html), and [selecting a Preset](../workflow/select-preset.html). Then select the `Add to Queue` button on the toolbar.

<!-- .system-win -->

![HandBrake toolbar on Windows](../images/windows/toolbar.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-win -->

Select the `Show Queue` button on the toolbar to see the queued encodes, or `Jobs`.

<!-- .system-win -->

![HandBrake toolbar on Windows](../images/windows/toolbar.png "Select the Show Queue button on the toolbar to open the Queue window.")

![Queue window on Windows](../images/windows/queue.png "The Queue window lists pending Jobs.")

<!-- /.system-win -->

You may open additional `Sources` and add them to the `Queue` in the same manner.

## Adding multiple encodes simultaneously

When using the `Queue`, you may find it beneficial to create multiple `Jobs` at one time.

<!-- .system-mac -->

On Mac, first open the `Preferences` window using the `HandBrake` menu. In the `General` section, ensure that the `Automatically name output files` setting is selected and `Title` is part of the `Format` field.

![Opening the Preferences window on Mac](../images/mac/preferences-menu.png "Open the Preferences window using the HandBrake menu.")

![Selecting the Automatically name output files setting](../images/mac/preferences-auto-naming.png "Select Automatically name output files ensure unique file names when adding multiple Titles to the Queue.")

This ensures that each of your `Jobs` will be given a unique file name, and not overwrite each other.

<!-- /.system-mac -->
<!-- .system-win -->

On Windows, first open the `Preferences` window using the `Tools` menu. In the `Output Files` section, ensure that the `Automatically name output files` setting is selected. Set a `Default Path` (where your new videos will be created) and make sure `Title` is part of the `File Format` field.

![Opening the Preferences window on Windows](../images/windows/preferences-menu.png "Open the Preferences window using the Tools menu.")

![Selecting the Automatically name output files setting](../images/windows/preferences-auto-naming.png "Set up Automatic File Naming to ensure unique file names when adding multiple Titles to the Queue.")

This ensures that each of your `Jobs` will be given a unique file name, and not overwrite each other.

<!-- /.system-win -->

If your `Source` is a Blu-ray, DVD, or other disc or disc-like format with multiple `Titles`, you may open it with HandBrake and add multiple `Titles` to the `Queue` simultaneously.

Additionally, you may open a folder of multiple single-`Title` videos (excluding discs and disc-like formats) as one virtual `Source` with multiple `Titles` using the `Open Source` dialog, and then add multiple `Titles` to the `Queue`[^batch-scan-subdirectories].

<!-- .system-mac -->

![Opening a folder containing multiple video Sources](../images/mac/open-source-dialog-folder.png "The Open Source dialog allows you to select a folder containing multiple video files.")

![Selecting a Title](../images/mac/title-selection.png "The Title control lets you select which video clip you want to use.")

<!-- /.system-mac -->
<!-- .system-lin -->

On Linux, select `Add Multiple` from the `Queue` menu, then select the `Titles` you wish to encode using the presented dialog. Be sure to give each a unique file name.

<!-- /.system-lin -->
<!-- .system-mac -->

On Mac, select `Add Titles to Queue...` from the `File` menu, then select the `Titles` you wish to encode using the presented dialog.

![Add Titles to Queue menu item](../images/mac/add-titles-to-queue-menu.png "Select Add Titles to Queue from the File menu to open a selection dialog.")

![Selecting multiple Titles to add to the Queue](../images/mac/add-titles-to-queue.png "Select the Titles you wish to encode from the Add Titles to Queue dialog.")

<!-- /.system-mac -->
<!-- .system-win -->

On Windows, select `All Selection to Queue` from the `Queue` menu to add all `Titles`.

<!-- /.system-win -->

You may open additional `Sources` and add them to the `Queue` in the same manner.

## Editing Jobs

To make changes to `Jobs` in the `Queue`, first open the `Queue` window by selecting the `Show Queue` button on the toolbar.

<!-- .system-win -->

![HandBrake toolbar on Windows](../images/windows/toolbar.png "Select the Show Queue button on the toolbar to open the Queue window.")

<!-- /.system-win -->

To remove a `Job`, select the `╳` button next to the unwanted `Job`.

<!-- .system-win -->

![Removing an encode Job on Windows](../images/windows/queue.png "Select the remove button, which looks like a red X, to remove a Job from the Queue.")

<!-- /.system-win -->

If you want to make changes to a `Job` already in the `Queue`, select the edit button next to the `Job`. Editing a `Job` opens the `Source` in HandBrake's main window and removes the `Job` from the `Queue`.

<!-- .system-win -->

![Editing an encode Job on Windows](../images/windows/queue.png "Select the edit button, which looks like a sheet of paper, to make changes to a Job.")

<!-- /.system-win -->

When you're finished making changes, again add the encode to the `Queue` by selecting the `Add to Queue` button on the toolbar.

<!-- .system-win -->

![HandBrake toolbar on Windows](../images/windows/toolbar.png "Select the Add to Queue button on the toolbar to add your encode to the queue.")

<!-- /.system-win -->

## Starting the Queue

When ready, select the `Start` button on the toolbar or `Queue` window to begin encoding the `Jobs` in the `Queue`.

[^batch-scan-subdirectories]: When opening multiple videos in a folder, HandBrake ignores any additional folders inside. Make sure the videos you wish to open are at the top level of the selected folder.
