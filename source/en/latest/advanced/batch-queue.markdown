---
Type:            article
State:           draft, obsolete
Title:           Queueing Jobs
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

The Job Queue
=============================

It's common to want to queue up many jobs and let HandBrake process them over an extended period of time.

HandBrake offers two features to make this easier.  A queue of jobs and batch scanning.

## Queue

### Adding a job to the Queue

On the application toolbar, there are two buttons that you can use.

![HandBrake app toolbar](../images/windows/add-to-queue.png "HandBrake Toolbar")

- Add to Queue
  - When you press this button, it will add the currently selected source, title and the currently chosen settings to the queue

- Show Queue (x)
  - where (x) is a number that tells you how many jobs you currently have on the queue for processing.
  - When you press this button, the queue window will display showing you the current jobs waiting to be processed and those completed.

![HandBrake queue window](../images/windows/queue.png "HandBrake Queue Window")

### Editing Items on the queue.

You can't change a job that is currently on the queue. If you want to change a jobs settings, you must press the "edit job" button on the queue task itself.
This will remove the job from the queue and reconfigure the main window with the source and settings that job was configured with. 
You can then re-add the job to the queue for processing. 


## Batch Scan

If you have a folder of many files, you can point HandBrake at that folder and it will scan all the files at the top level of that directory. 
Please note it does not recursively scan a directory. 

After the scan has completed, each file will be listed as a separate title in the "Title" dropdown on the main window. Just like multiple titles on a DVD or Bluray. 

You can then add each title to the queue.





