---
Type:            article
State:           [ obsolete ]
Title:           Audio und Untertitel Standardeinstellungen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Audio und Untertitel Standardeinstellungen
=============================

HandBrake speichert keine Audio und Untertitelspuren in den Voreinstellungen.

Stattdessen werden Verhaltensregeln definiert, die automatisch Audio und Untertitelspuren beim Scannen einer neuen Quelle oder bei der Auswahl eines Titels selektieren.

Um dieses Spurselektionsverhalten zu konfigurieren, klicke auf "Configure Defaults" im Audio oder Untertitel Defaults Tab.

### Audio Standardeinstellungen

![Audio Defaults Window](../../../en/images/windows/audio-defaults-1.0.0.png "Audio Defaults Window")

- Track Selection Behaviour
  - None
    - Es werden keine Audiospuren automatisch hinzugefügt.
  - First matching selected Language
    - Die erste Spur welche in der Liste der "Chosen Languages" enthalten ist wird hinzugefügt, ansonsten wird die erste Spur gewählt.
  - All matching selected languages
    - Alle Spuren welche in der Liste der "Chosen Languages" enthalten sind werden hinzugefügt.
- Choose Languages
  - Wähle alle Sprachen die du haben möchtest in der "Chosen Languages" Liste, um Spuren nach dem ausgewählten Spurselektionsverhalten auszuwählen.
- Auto Passthru
  - HandBrake kann verschiedene Audioformate durchleiten (Passthru). Wenn du "Auto Passthru" auswählst,, wird HandBrake die ausgewählten Typen automatisch durchleiten. Du kannst die Formate mithilfe der Checkboxen einschränken. Wenn du beispielsweise immer nur AC3 oder DTS Passthru haben möchtest, wähle einfach nur diese zwei Optionen und deselektiere die restlichen.

- Fallback Encoder
  - Wenn du einen Passthru Kodierer selektiert hast und es keine Spur gibt die in den ausgewählten Formaten ist, wird die Spur neu kodiert. Der Fallback Kodierer ist der Kodierer der dafür standardmäßig zum Einsatz kommt.

### Untertitel Standardeinstellungen

![Subtitle Defaults Window](../../../en/images/windows/subtitle-defaults-1.0.0.png "Subtitle Defaults Window")

- Track Selection Behaviour
  - None
    - Es werden keine Untertitelspuren automatisch hinzugefügt.
  - First matching selected Language
    - Die erste Spur welche in der "Chosen Languages" Liste enhalten ist wird hinzugefügt wenn der Ausgabecontainer diese unterstützt.
  - All matching selected languages
   - Alle Untertitelspuren welche in der "Chosen Languages" Liste enhalten sind werden hinzugefügt, falls der Ausgabecontainer diese unterstützt.
- Burn in Behaviour
  - HandBrake kann eine Untertitelspur in die kodierte Datei einbrennen. Es gibt drei Verhaltensoptionen die du auswählen kannst um die Burn In Option automatisch zu aktivieren.
  - Suche nach fremdsprachigem Audio
  - Erste Spur
  - Fremdsprachiges Audio bevorzugt, ansonsten die erste Spur
- Choose Languages
  - Wähle alle Sprachen die du haben möchtest in der "Chosen Language" Liste um Spuren nach dem ausgewählten Spurselektionsverhalten auszuwählen.
- Add Closed Captions when available
  - Close captions sind textbasierte Untertitel die von MP4 und MKV unterstützt werden. Falls du diese Option wählst, wird HandBrake diese Untertitel automatisch in die Ausgabedatei kopieren.
- Add Foreign Audio Scan
  - HandBrake kann die Quelle nach Abschnitten untersuchen, die fremdsprachiges Audio enthalten. Falls es einen Abschnitt entdeckt, wird die Untertitelspur automatisch hinzugefügt.
