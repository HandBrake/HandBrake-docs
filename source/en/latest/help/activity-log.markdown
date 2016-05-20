---
Type:            article
Title:           Activity Log
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Scott (s55)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Activity Log
=================

HandBrake includes extensive logging of what it and it's various components are doing.  
This log contains information about the source file, encode parameters, any errors and other relevant information. 


## Accessing the Log Window

All of the HandBrake GUI's contain an "Activity Window" which can be accessed on the toolbar.

[TODO Screenshot]


## Logging to Disk

While HandBrake is scanning a source, or encoding a file, the log file is being written out to the drive at the same time.  
This way, if the application crashes, you can see what was happening when this event occurred.

### Mac

The log files are stored in the following folder:
~/Library/Application Support/HandBrake/EncodeLogs/

Important Note: starting with OS X 10.7 "Lion", the ~/Library/ directory is hidden and can't be accessed using regular Finder navigation. 
You can open the folder directly from the Activity Window (see above), or use the Finder's Go > Go to Folder menu item (setting it to ~/Library/Application Support/HandBrake/).

HandBrake-activitylog.txt is the session log and is overwritten each time the application starts.

Individual activity logs are saved in the file format "mymoviename.txt YYYY-MM-DD HH-MM-SS" and unlike the session based logs are not overwritten so should serve as a history of encodes you have done with HandBrake. 
One this to keep in mind, currently there is not function which removes individual encode logs, so if you wish to delete any you will need to remove them manually.

Note: The individual activity logs are in addition to the existing session based activity log. 
If you do a scan of a new source during encoding, the new source scan log messages will be intermixed with the encode log messages.

### Windows

The log files are stored in the following folder:

* Windows 7: C:\Users\<Your Username>\AppData?\Roaming\HandBrake\logs
* Windows Vista: C:\Users\<username>\Application Data\HandBrake\logs

There is a session activity log named:  activity_logXXXX.txt where XXXX is the process ID. 
While it is possible that this file can be overwritten it's fairly unlikely HandBrake will restart with the same process ID.

In addition there are per encode logs in the format  of "Source Date Time"


### Linux

Activity logs are stored to disc after each scan or encode.

The current session is written to the file "Activity.log".

Typically, this will be in the directory "$(HOME)/.config/ghb", but it is possible for the system to have a different default data directory. So the full path is also shown at the top of the activity window in the gui. 

A history of all encodes are also stored in separate log files. These can typically be found in the directory "$(HOME)/.config/ghb/EncodeLogs". These are text files, so you can view them with your favourite text editing/viewing tool.

### Command Line Interface (CLI)

When encoding with HandBrakeCLI,

* Log data is output to Standard Error
* Encode progress information (ETA, Percent Complete, Avg Encoding framerate etc) are output to Standard Output.


In order to log the data to the file, you can redirect the standard error using a pipe.

You can do this by adding:

> 2> log.txt

to the end of your parameters. for example:

> ./HandBrakeCLI -i "~/Video.mp4" -o "~/output.mkv" --preset="Universal" 2> log.txt

