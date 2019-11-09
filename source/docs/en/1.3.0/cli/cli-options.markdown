---
Type:            article
State:           [ draft ]
Title:           CLI Options
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

CLI Options
=============================

## Quick Tutorial on the Command Line.

On Windows, you'll want to open the "Command Prompt" app. This is similar to the "Terminal" app on Mac and Linux although the command's to navigate vary a bit.

This guide is not going to go into a lot of detail on using your systems command line as there are differences on various different platforms. Instead it will offer some hints. 
We suggest you Google for a tutorial for your given command line of choice. 

### Useful Commands

| Command          | Platform        | Action                                                                                                                                              |
|------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| dir              | Windows         | List the contents of the current directory                                                                                                          |
| ls               | Mac and Linux | Lists the contents of the current directory                                                                                                         |
| cd <folder_name> | Both            | Change to the given folder.                                                                                                                         |
| cd ..            | Both            | Go up a directory                                                                                                                                   |
| pwd              | Mac and Linux | Unlike Windows, the terminal does not show you the full path to your current directory. This command will show you were you are on the file system. |


When you extract HandBrakeCLI, you will need to navigate to where you extracted it on the file system, before trying to execute.  You can do so with the above commands.
Typically, a command prompt / terminal will start in your home directory.  So, if you download HandBrake and have a source ready, you'd run the following commands:
cd Downloads

HandBrakeCLI -i /path/to/source -o ../Desktop/my_output.mp4

If HandBrake is in a different directory than your in, you can always access it via the full path. i.en

./path/to/HandBrakeCLI -i /path/to/source -o ../Desktop/my_output.mp4

Remember, Linux and Mac can be configured to be case sensitive. 


## HandBrake Command Line Basics

First, simple input and output.

> HandBrakeCLI -i source -o destination

That will encode with default "Normal" Preset.

Easy, right? So now you can start customizing those settings. You can pile on all sorts of things, and end up with a monster like:

> HandBrakeCLI -i /Volumes/MyBook/BLURAY_DISC -o /Volumes/MyBook/Bluray.mkv -m -E copy --audio-copy-mask ac3,dts,dtshd --audio-fallback ffac3 -e x264 -q 20 -x level=4.1:ref=4:b-adapt=2:direct=auto:me=umh:subq=8:rc-lookahead=50:psy-rd=1.0,0.15:deblock=-1,-1:vbv-bufsize=30000:vbv-maxrate=40000:slices=4


For now, think about less complex stuff:

> HandBrakeCLI -i VIDEO_TS -o movie.mp4 -e x264 -q 20 -B 160

That will encode a source video located at the path VIDEO_TS to an output file called movie.mp4. It will use x264 with a CRF (Constant Quality) of 20 to encode the video, and encode the audio as 160 Kbps AAC.

If you want to see the full list of available commands, try the following command:

> HandBrakeCLI --help

This will display every command with a brief explanation of what it does and a sample of relevant options you can pass to it. 
