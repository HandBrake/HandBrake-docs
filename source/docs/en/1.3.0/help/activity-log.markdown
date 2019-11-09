---
Type:            article
Title:           Activity Log
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), John Stebbins (j45), Scott (s55) ]
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Activity Log
============

When you launch HandBrake, it begins recording information about its operation to an Activity Log. When you open a `Source`, HandBrake scans it and records what it discovers to the log. Likewise, during encoding, HandBrake records its progress—and any issues it encounters—to the log.

Activity Logs can be a good personal reference for the settings you used to make your videos and whether everything went as you expected.

Should you need technical support, providing an Activity Log is **required** and is essential for diagnosing the issue you may be experiencing.

## Why Activity Logs are required for support

Frequently, people ask the HandBrake Team, "Why should I be *required* to provide an Activity Log to receive technical support?" Good question!

For starters, most applications log information about their operation. Your operating system keeps countless logs as well. Logs are often used for informational purposes and to diagnose technical problems with a system or application that isn't behaving as expected.

Here are some questions that may be helpful in diagnosing a problem with HandBrake, that an Activity Log can answer:

- Are you using official HandBrake or an unsupported third-party build?
- Where is HandBrake installed on your system?
- What HandBrake version are you using?
- What operating system and version are you using?
- What type of CPU are you using? Does it support Intel QuickSync Video?
- What type of GPU are you using? What version of OpenCL does it support?
- Is HandBrake able to use your GPU for certain features?
- What is your display resolution?
- What is your system's temporary files directory? Is HandBrake able to use it?
- Is HandBrake using dvdread or dvdnav for reading DVDs?
- Is HandBrake able to open your `Source`?
- Is HandBrake able to detect the media type of your `Source`? What type (DVD, Blu-ray, MKV/MP4, etc.)?
- Is your `Source` a physical DVD or Blu-ray or a file on your computer?
- Is your `Source` unusable due to copy protection?
- What [region](https://en.wikipedia.org/wiki/DVD_region_code) is your DVD and does your DVD drive support this region?
- Does your `Source` contain multiple `Titles`? How many? How long is each one?
- Is HandBrake able to parse and read each `Title`? What errors?
- What video, audio, and subtitle tracks are in each `Title`? What [codecs](https://en.wikipedia.org/wiki/Codec) does each use?
- Is there a video track? What frame rate and resolution is the video?
- Is HandBrake able to detect and automatically remove (crop) black borders around the edges of your video?
- Are there audio tracks? What language, sample rate, channel layout, and bit rate is each audio track?
- Are there subtitles? What types and languages?
- Is HandBrake performing a foreign audio scan to find forced subtitles? Did it find any?
- Are there chapter markers? How many? How long is each one?
- What preset is being used for encoding? Is it an official preset?
- What changes are made to the settings after selecting a preset?
- What are the final settings used for the encode?
- Is HandBrake able to write to your `Destination` file? If not, why not?
- While encoding, is HandBrake able to read your entire `Source` without errors?
- Are there any problems with your `Source`'s timestamps?
- How many frames did HandBrake decode from the `Source` during encoding? More or less than expected?
- Is HandBrake dropping or duplicating frames to enforce a constant frame rate setting? How many frames of each?
- What is the average bitrate of each encoded track in the `Destination`?
- Are HandBrake's work threads finishing and exiting properly?
- Is HandBrake leaking memory during encoding?

Obviously, it would be *laborious* to ask these questions to thousands of people requesting support for HandBrake.

In contrast, providing an Activity Log is an easy way to explain exactly what is going on in a standardized manner, which helps ensure accuracy and prevent confusion. This speeds up the support process significantly, which saves time for everybody.

Despite this, some people refuse to provide logs even after being given the above reasoning. Often times, these people think their question is simple enough that a log shouldn't be required. This is almost never the case in practice, and time is wasted asking and answering questions that Activity Logs are designed for.

While it is the HandBrake Team's goal to help everyone we can, the fact remains that we can't magically infer what may or may not be happening inside your computer. *Without an Activity Log, the HandBrake Team simply cannot provide technical support.*

## Privacy

Activity Logs are stored *only* on your computer. HandBrake does not send these logs anywhere else.

If you are concerned about retaining these logs indefinitely, feel free to delete them periodically. Be sure not to delete any other files important to HandBrake's operation.

To provide an Activity Log for support, you must send us your log(s) manually. If you are concerned about private information an Activity Log may contain and reveal to others, feel free to read through the log and redact the parts that concern you before sharing.

## Sharing

To share your Activity Log publicly—for instance, to request technical support for HandBrake—you may wish to do one of the following:

- Copy and paste the text of the log to a Pastebin site such as [Pastebin.com](http://pastebin.com)
- Upload the log file to a free temporary file sharing service such as [WeTransfer](https://www.wetransfer.com/)
- Upload the log file to a paid file sharing service such as [Box](https://www.box.com/), [Dropbox](https://www.dropbox.com), or [Jumpshare](https://jumpshare.com/)

Once your log is available publicly, share its link with your intended recipient(s). When using a free service, be sure to note how long the service intends to store your log (typically 1-7 days).

Activity Logs may also be pasted directly into [new support requests on GitHub](https://github.com/HandBrake/HandBrake/issues/new).

## Where to find the logs

**Note:** When scanning a new source during encoding, log messages from the scan may be intermixed with log messages from your currently running encode.

<!-- .system-linux -->

### Activity Logs on Linux

You can access the current log by opening the Activity Log window in HandBrake.

<!-- image, activity log window on linux -->

On Linux, logs are stored in one of two locations, where `~` is your home directory:

- The `ghb` directory at your system's default data path (usually `~/.config`), for the official PPA and self-compiled builds
- The `fr.handbrake.ghb/config/ghb` directory at your system's Flatpack data path (usually `~/.var/app`), for the official Flatpak bundle

The full path to the log directory is shown at the top of the Activity Log window.

Inside, you may find the following files:

- `Activity.log.ProcessID`, where `ProcessID` is the process identifier given to HandBrake by Linux, contains information about the specific app session
- Log files for individual encodes are located in the `EncodeLogs` subdirectory and named according to the pattern `Videoname Date Time.txt`; encode logs are retained until deleted manually

<!-- /.system-linux -->
<!-- .system-macos -->

### Activity Logs on Mac

You can access the current log by opening the Activity Log window in HandBrake.

<!-- image, activity log window on mac -->

On Mac, logs are stored at `~/Library/Application Support/HandBrake/EncodeLogs`, where `~` is your home folder.

You can open this location directly from HandBrake's Activity Log window.

Inside, you may find the following files:

- `HandBrake-activitylog.txt` is overwritten each time HandBrake starts, and contains information about the latest app session
- Log files for individual encodes are named according to the pattern `Videoname Date Time.txt` and are retained until deleted manually

<!-- /.system-macos -->
<!-- .system-windows -->

### Activity Logs on Windows

You can access the current log by opening the Activity Log window in HandBrake.

<!-- image, activity log window on windows -->

On Windows, logs are stored at the following locations, where `Username` is your user name:

- `C:\Users\Username\AppData\Roaming\HandBrake\logs` on Windows 7, 8, and 10
- `C:\Users\Username\Application Data\HandBrake\logs` on Windows Vista

Inside, you may find the following files:

- `activity_logProcessID.txt`, where `ProcessID` is the process identifier given to HandBrake by Windows, contains information about the specific app session
- Log files for individual encodes are named according to the pattern `Videoname Date Time.txt` and are retained until deleted manually

<!-- /.system-windows -->

### Activity Logs on the command line

HandBrake's command line interface outputs to the standard streams `stdout` and `stderr`, with encode progress information routed to the former and log messages routed to the latter.

To capture HandBrake's log messages to a file, simply redirect `stderr`:

    HandBrakeCLI ... 2> my-activity-log.txt
