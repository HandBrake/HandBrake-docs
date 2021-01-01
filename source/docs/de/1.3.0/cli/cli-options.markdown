---
Type:            article
State:           [ draft ]
Title:           CLI Optionen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

CLI Optionen
=============================

## Kurzes Tutorial für die Kommandozeile

Unter Windows musst du die "Kommandozeile" (abgekürzt cmd) öffnen. Diese ist ähnlich zu dem "Terminal" unter Mac und Linux obwohl die Kommandos für die Navigation sich leicht unterscheiden.

Dieser Guide wird aber nicht ins Detail gehen wie die Kommandozeile deines Systems zu verwenden ist, da es auf jeder Plattform unterschiedlich ist. Stattdessen werden hier nur ein paar Hinweise gegeben.
Wir schlagen vor du durchsuchst das Internet nach einem Tutorial für die Kommandozeile deiner Wahl.

### Nützliche Kommandos

| Kommando         | Plattform       | Aktion                                                                                                                                              |
|------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| dir              | Windows         | Liste die Inhalte des aktuellen Verzeichnises                                                                                                         |
| ls               | Mac und Linux | Liste die Inhalte des aktuellen Verzeichnises                                                                                                          |
| cd <ordner_name> | Alle            | In das gegebene Verzeichnis wechseln                                                                                                                 |
| cd ..            | Alle            | Eine Verzeichnisebene höher gehen                                                                                                                        |
| pwd              | Mac und Linux | Im Gegensatz zu Windows wird standardmäßig nicht der ganze Pfad zum aktuellen Verzeichnis angezeigt (außer du hast es so konfiguriert). Diese Kommando zeigt dir den aktuellen Pfad. |


Wenn du die HandBrakeCLI extrahiert hast, musst du zu dem Ort im Dateisystem navigieren wo du es extrahiert hast, bevor du es starten kannst. Du kannst dies mithilfe der oben angeführten Kommandos erreichen.
Üblicherweiße startet eine Kommandozeile/Terminal in deinem Heimatverzeichnis. Wenn du also HandBrake herunterlädst und eine Quelle bereit hast, würdest du die folgenden Kommandos ausführen:

    cd Downloads
    HandBrakeCLI -i /pfad/zur/quelle -o ../Desktop/meine_ausgabe.mp4

Falls HandBrake in einem anderen Verzeichnis ist als in dem du gerade bist, kannst du es immer über den vollen (absoluten) Pfad ansprechen. i.e.:

    ./pfad/zur/HandBrakeCLI -i /pfad/zur/quelle -o ../Desktop/meine_ausgabe.mp4

Beachte, dass Linux Groß und Kleinschreibung beachtet! Du kannst dies jedoch umstellen.

## HandBrake Kommandozeilen Basics

Zu Beginn, einfache Ein und Ausgabe.

    HandBrakeCLI -i quelle -o ziel

Dies kodiert die Quelle mit der "Normal" Voreinstellung.

Einfach oder? Jetzt kannst du die Einstellungen anpassen. Du kannst einen Haufen solcher gleichzeitig angeben und mit einem Monster wie diesem enden:

    HandBrakeCLI -i /Volumes/MyBook/BLURAY_DISC -o /Volumes/MyBook/Bluray.mkv -m -E copy --audio-copy-mask ac3,dts,dtshd --audio-fallback ffac3 -e x264 -q 20 -x level=4.1:ref=4:b-adapt=2:direct=auto:me=umh:subq=8:rc-lookahead=50:psy-rd=1.0,0.15:deblock=-1,-1:vbv-bufsize=30000:vbv-maxrate=40000:slices=4

Aber jetzt solltest du dir vorerst über weniger komplexe Sachen Gedanken machen:

    HandBrakeCLI -i VIDEO_TS -o video.mp4 -e x264 -q 20 -B 160

Des wird ein Quellvideo aus dem Pfad VIDEO_TS in eine Ausgabedatei namens video.mp4 kodieren. Es wird x264 mit einem CRF (Constant Quality) von 20 verwenden um das Video zu kodieren und das Audio als 160 Kbps AAC kodieren.

Falls du die gesamte Liste verfügbarer Kommandos auflisten möchtest, führe folgendes Kommando aus:

    HandBrakeCLI --help

Dies wird jedes Kommando mit einer kurzen Erklärung was es tut und allen relevanten Optionen auflisten.
