---
Type:            article
State:           [ obsolete ]
Title:           Starting encoding
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Starting encoding
=================

Now that you've got all your settings just right, it's time to make your new video!

## Selecting a destination

`Destination` is where your new video will go. You can select the `Browse...` button to choose a new location and name, or type it directly in the box.

<!-- .system-macos -->

![Selecting a destination](../../images/mac/destination-field-1.0.0.png "Destination is where HandBrake will put your new video.")

![Browsing for a destination](../../images/mac/destination-dialog-1.0.0.png "Select the Browse button to choose a different location and name.")

<!-- /.system-macos -->

Please take special care to *note your destination*. Otherwise, you won't be able to find your new video. You can move it later if you desire.

## Starting the encode

Select the `Start` button on the toolbar to make your new video.

<!-- .system-macos -->

![Main window toolbar](../../images/mac/toolbar-1.0.0.png "The Toolbar provides easy access to HandBrake's most common functions.")

![Starting an encode](../../images/mac/start-button-1.0.0.png "The Start button begins encoding your new video.")

<!-- /.system-macos -->

Video encoding requires a lot of computer resources and can take awhile to complete. Some videos may take minutes to create; others may take hours.[^encoding-time]

<!-- .system-macos -->

![Encode progress](../../images/mac/encode-progress-1.0.0.png "HandBrake reports its progress during encoding.")

![Encoding complete alert](../../images/mac/encode-complete-1.0.0.png "HandBrake shows an alert when finished encoding.")

<!-- /.system-macos -->

HandBrake will report its progress while it's working and alert you when it's finished. Then you will have a new video file at the `Destination` you specified.

<!-- .system-macos -->

![Destination in Finder](../../images/mac/destination-finder-1.0.0.png "Your new video is located at the Destination you specified.")

<!-- /.system-macos -->

Congratulations! You just encoded your first video using HandBrake. It's now ready to watch on your devices.

<!-- .continue -->

## Next steps

If you didn't get a video file as expected, encountered an error, or had some other trouble, you can continue reading to learn more about how HandBrake works or jump right to [Troubleshooting common issues](../help/troubleshooting-common-issues.html).

Continue to [Multiple encodes using the Queue](../advanced/queue.html).

<!-- /.continue -->

[^encoding-time]: Encoding time depends on multiple factors, including the duration, resolution, and complexity of your `Source`; the settings used to make your new video; and the speed and computation power of your machine.
