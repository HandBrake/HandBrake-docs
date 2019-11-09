---
Type:            article
State:           [ draft ]
Title:           Chapter Markers
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

Chapter Markers
===============

## Chapters

HandBrake can copy chapter markers from your source to the MP4, MKV, or WebM output file.

In HandBrake, if you click on the Chapters tab, you'll see a list of detected chapters. HandBrake will automatically generate chapter names in the following format:  "Chatper n" where n is the chapter number.

![Chapters Tab](../../images/windows/chapters-1.0.0.png "Chapters Tab")

## Renaming chapters

If you wish, you can rename these by simply simply altering the names shown in the chapters tab.

You can also import or export the set of chapter markers. HandBrake supports importing of CSV (Command seperated Values) files.

Click the Import button to choose a CSV file. The file must be in the following format:


```
1,Chapter Name
2,Chapter 2 Name
3,Chapter 3 Name
....
```

Finally, you can export the current chapter list to CSV format by clicking the 'export' button.

## Sources without chapters

Unfortunately, HandBrake can not currently add chapter markers if they did not already exist in the source.
