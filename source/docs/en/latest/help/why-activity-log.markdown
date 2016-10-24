---
Type:            article
State:           draft
Title:           Why are Activity Logs required for support?
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         John Stebbins (j45)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Why are Activity Logs required for support?
===========================================

We get asked this question very frequently (at least daily it seems).  Many
people have simple questions that, in their view, should not require an
[Activity Log](../help/activity-log.html).

Let's start with an example. Let's say you want to know where to change audio
track settings in the GUI. This is the kind of simple question that many people
think we can answer with pretty much no additional information. But there are
slight differences between each platform, and there are changes from one version
of HandBrake to the next. So if you didn't provide an activity log, there would
be a couple of questions we would have to ask before we could give you an
answer.

* What platform are you running HandBrake on (Windows, Mac, Linux)?
* What version of HandBrake are you running?

## Why don't we simply ask for the above information for support requests?

Those 2 questions are sufficient only for the absolute most basic of support
requests we get.

## Why don't we just keep asking questions until we get all the information we need?

* Well first, it's slow and wastes our time. The HandBrake developers and
forum moderators are all volunteers.  We do this in our voluminous spare time
and get paid nothing for it. So we don't have the time to waste.
* Second, the questions are often not answered accurately. Even something as
simple as reporting the version of HandBrake being used is prone to error.
Activity Logs are definitive.
* Third, users often don't know the anwsers to questions we need to ask.
* And finally, Activity Logs help us improve the quality of HandBrake.
Sometimes we will see problems in the log that you didn't notice.  When we
see a problem, we follow up and fix it.

## Can't I just tell you what you need to know without supplying an Activity Log?

Perhaps.  And generally, if we see a support request that is missing an Activity
Log, but has enough information to supply an answer, we will respond to that
request.  On the other hand, if you don't supply enough information, I
will not respond, not even to tell you what you are missing.  Dead air. There
are other moderators that may respond depending on their mood and the phase
of the moon. But you risk being totally ignored.

## But what about my privacy?

Maybe you are concerned about privacy and what the Activity Log might tell
us and the world about you. we understand your concern. The vast majority
of what is in the Activity Log is very technical and not descriptive of
the subject matter of your source media. But there are things
like file and path names in the log that you might prefer not sharing.
There are a couple solutions. One, rename your source file before preparing
the Activity Log you deliver to us. Two, edit the Activity Log to rename
or remove file and path names you don't want to share.

## What is in the activity log?

The Activity Log is designed to answer a collection of questions that
over years of supporting HandBrake users, we have found we frequently
need answers to.  Here is a non-exhaustive list of such questions:

* What OS and version of OS are you using?
* What verion of HandBrake are you running?
* Are you using a 3rd party build of HandBrake? I.e. was it built by us or
by a Linux distro maintainer or other party?
* What type of CPU are you using?
* Does your system have a supported GPU?
* What version of OpenCL does your GPU support?
* Does your CPU support Intel Quick Sync Video?
* What is your screen resolution?
* Where are temporary files written to on your system?
* Was HandBrake able to write temporary files to your temp directory?
* Where was HandBrake installed on your system?
* Are you using dvdread or dvdnav (preference setting) for DVD parsing?
* Was HandBrake able to successfully open your source media?
* Was HandBrake able to successfully detect the source media type?
* What type of source media are you using (DVD, Bluray, mkv, etc.)?
* Are you using physical media reading directly from a DVD or Bluray drive,
or are you reading a file?
* Is your source media encrypted?
* Have you installed 3rd party libraries to decrypt your source media?
* What region is your DVD and does your DVD drive support this region?
* How many titles were found in the source media?
* What is the duration of each title?
* What type of video/audios/subtitles were found in each title?
* Did HandBrake detect and crop black borders around your video?
* What framerate and resolution is your source video?
* What language, samplerate, channel layout, bitrate is your source audio?
* How many chapters in each title and what are their durations?
* Were there any errors reading or parsing each title during a title scan?
* Was HandBrake able to open your output file?  If not, why not?
* What HandBrake preset did you use for encoding?
* Did you make any changes to the settings after selecting a preset?
* What were the final settings used for the encode?
* During the encode, were there any read errors?
* Were there any problems found with the source's timestamps?
* Did HandBrake see the expected number of frames of video during the encode?
* How many frames were dropped or duplicated in order to satisfy your constant
frame rate setting?
* What was the averate bitrate of each output stream encoded by HandBrake?
* Did all the work threads launched by HandBrake finish and exit properly?
* Did HandBrake leak memory during the encoding?

