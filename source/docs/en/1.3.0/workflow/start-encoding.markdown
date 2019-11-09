---
Type:            article
Title:           Starting encoding
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

Starting encoding
=================

Now that you've got all your settings just right, it's time to make your new video!

## Selecting a destination

HandBrake calls the file name and location of your new video the `Destination`.

`Save As` is the file name of your new video. You can change it by typing directly in the box.

`To` is the location where HandBrake will place your new video. You can select the `Browse...` button to choose a different location.

<!-- .system-macos -->

![Selecting a destination](../../images/mac/destination-field-1.1.0.png "The Destination is where HandBrake will place your new video.")

<!-- /.system-macos -->

Please take special care to *note your destination*. Otherwise, you won't be able to find your new video. You can move it later if you desire.

## Starting the encode

Select the `Start` button on the toolbar to make your new video.

<!-- .system-macos -->

![Main window toolbar](../../images/mac/toolbar-1.1.0.png "The Toolbar provides easy access to HandBrake's most common functions.")

<!-- /.system-macos -->

Video encoding requires a lot of computer resources and can take awhile to complete. Some videos may take minutes to create; others may take hours.[^encoding-time]

<!-- .system-macos -->

![Encode progress](../../images/mac/encode-progress-1.1.0.png "HandBrake reports its progress during encoding.")

![Encoding complete alert](../../images/mac/encode-complete-1.1.0.png "HandBrake shows a notification when finished encoding.")

<!-- /.system-macos -->

HandBrake will report its progress while it's working and alert you when it's finished. Then you will have a new video file at the `Destination` you specified.

<!-- .system-macos -->

![Destination in Finder](../../images/mac/destination-finder-1.1.0.png "Your new video is located at the Destination you specified.")

<!-- /.system-macos -->

Congratulations! You just encoded your first video using HandBrake. It's now ready to watch on your devices.

<!-- .continue -->

## Next steps

<!-- .success -->

Continue to [Multiple encodes using the Queue](../advanced/queue.html).

<!-- /.success -->
<!-- .fail -->

If you didn't get a video file as expected, encountered an error, or had some other trouble, you can continue reading to learn more about how HandBrake works or jump right to [Troubleshooting common issues](../help/troubleshooting-common-issues.html).

<!-- /.fail -->

<!-- /.continue -->

[^encoding-time]: Encoding time depends on multiple factors, including the duration, resolution, and complexity of your `Source`; the settings used to make your new video; and the speed and computation power of your machine.
