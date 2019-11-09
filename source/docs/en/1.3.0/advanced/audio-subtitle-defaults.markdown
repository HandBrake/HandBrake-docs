---
Type:            article
State:           [ draft ]
Title:           Audio and Subtitle Defaults
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

Audio and Subtitle Defaults
=============================

HandBrake does not store Audio and Subtitle tracks in presets.

Instead, we store behaviour rules for automatically selecting audio and subtitle tracks each time you scan a new source or select a title.

In order to configure the track selection behaviour, click the "Configure Defaults" button on the Audio or Subtitle Defaults tab.

### Audio Defaults

![Audio Defaults Window](../../images/windows/audio-defaults-1.0.0.png "Audio Defaults Window")

- Track Selection Behaviour
  - None
    - No audio tracks will be automatically added.
  - First matching selected Language
    - The first track that matches the each of the languages in the "Chosen Languages", otherwise the first track will be selected.
  - All matching selected languages
    - All the tracks that match the "Chosen Languages".
- Choose Languages
  - Move any languages you are interested in into the "Chosen Languages" list in order to have tracks selected based on the track selection behaviour.
- Auto Passthru
  - HandBrake can pass thru several different audio formats. There are separate options the audio encoder dropdown for these. When you select "Auto Passthru", it will pass thru any of those supported types.  You can limit what it will automatically passthru. For example, if you only ever want AC3 or DTS passthru, but not any of the other choices, untick the relevant checkboxes.
  
- Fallback Encoder
  - When you have a passthru encoder selected, if the source track format does not match this format, HandBrake will automatically re-encode the track. The fallback encoder is the default encoder it will fallback to.  

### Subtitle Defaults

![Subtitle Defaults Window](../../images/windows/subtitle-defaults-1.0.0.png "Subtitle Defaults Window")

- Track Selection Behaviour
  - None
    - No subtitle tracks will be added
  - First matching selected Language
    - The first subtitle track for each "Chosen Language" will be added, where supported by the output container. 
  - All matching selected languages
   - All subtitle track(s) for each "Chosen Language" will be added, where supported by the output container. 
- Burn in Behaviour
  HandBrake can burn in 1 subtitle track to an encoded file. There are 3 behavioural options you can choose from for this checkbox to be automatically selected.
  - Foreign Audio Scan
  - First Track
  - Foreign Audio Preferred, else first
- Choose Languages
  - Move any languages you are interested in into the "Chosen Languages" list in order to have tracks selected based on the track selection behaviour.
- Add Closed Captions when available
  - Close captions are text based subtitles supported by both MP4 and MKV. If you select this option, HandBrake will automatically copy them to the output file.
- Add Foreign Audio Scan
  - HandBrake can perform a scan of the source title / file to try and detect if there is a portions of a title that are in a foreign language. If it detects one, it will add the subtitle track automatically. 
