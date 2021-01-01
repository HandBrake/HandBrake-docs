---
Type:            article
Title:           HandBrake für BSD bauen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

HandBrake für BSD bauen
==========================

Falls du ein HandBrake Paket von deiner Distribution oder einem anderen Drittanbieter Repository installiert hast, entferne es bitte bevor zu weitermachst. Siehe den Abschnitt *Warnung über nicht funktionierende Drittanbieter Builds* in [Wo bekomme ich HandBrake her](../get-handbrake/where-to-get-handbrake.html) für mehr Informationen.

## Abhängigkeiten installieren

Anweisungen für die Installation von Abhängigkeiten sind für die folgenden Distributionen verfügbar.

- [FreeBSD](install-dependencies-freebsd.html)

## HandBrake bauen

Das HanBrake Repository klonen.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Liste verfügbare Tags in der HandBrake 1.3.x Release Serie und checke den aktuellsten aus.

    git tag --list | grep ^1\.3\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.3\.[0-9]+$' | tail -n 1)

Baue HandBrake. Um nur die Kommandozeile zu bauen, deaktiviere die grafische Benutzeroberfläche indem du `--disable-gtk` anhängst.

    ./configure --launch-jobs=$(sysctl -n hw.ncpu) --launch

Wenn der Prozess beendet ist, findest du `HandBrakeCLI` im `build` Ordner. Falls die grafische Benutzerfläce aktiviert ist, findest du zudem `ghb` im `build/gtk/src` Ordner.

Installiere HandBrake (optional). Wenn du die grafische Benutzeroberfläche installierst, werden zudem Icon und Desktop Dateien für die Applikation installiert.

    sudo gmake --directory=build install

Um von vorne zu beginnen, lösche einfach den `build` Ordner.

    rm -rf build
