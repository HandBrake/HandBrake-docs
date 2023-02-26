---
Type:            article
Title:           Process Isolation
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.5.0
Language:        English
Language_Code:   en
Authors:         [ Scott (s55) ]
Copyright:       2023 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Process Isolation
============

## What is Process isolation? 

When HandBrake runs an encode, it now does so in a separate process. 
This means that should an encode crash, the UI will remain responsive and continue processing the rest of the queue.

This also allows us to run multiple encodes at the same time where your hardware can support it. 


## Support

This feature applies to the HandBrake GUI only.

| UI        | Process Isolation | Multiple Simultaneous Encodes | Comments |
|-----------|:-----------------:|:-----------------------------:|----------|
| Windows   |   ✓               |   ✓                           |          |
| macOS     |   ✓               |   ✓                           |          |
| Linux     |                   |                               | Not currently supported. Possible for future release |


Please note, to have multiple simultaneous jobs running you must have high end hardware. Typically you are going to want to have an 8-core CPU or better.
Some hardware encoders do also support this but varies between 1 to 3 maximum jobs.


## Settings for Process Isolation

<!-- .system-macos -->
Process Isolation can not be turned off. 

In macOS, you can define the number of simultaneous jobs only.

To control this behaviour see: HandBrake Menu -> Preferences -> Advanced

<!-- /.system-macos -->

<!-- .system-windows -->
On Windows, HandBrake uses a separate process that will show up in task manager as "HandBrake.worker.exe"
Please note, that this uses a small web server bound to 127.0.0.1.  As such, you may be alerted to the fact that HandBrake is making a connection to this process by your firewall. 
This webserver can not be accessed remotely by any other machine on the local network. 
This could potentially be an issue for some users, as such, we've provided additional controls for this functionality. 

To control this behaviour see:  Tools Menu -> Preferences -> Advanced -> Process Isolation.

Here you can enable / disable the feature, set the default port and set the number of simultaneous jobs.

If you are using Portable HandBrake and want to completely disable this feature, you can do so by setting the portable.ini file to include the following line:

    process.isolation.enabled = false

<!-- /.system-windows -->