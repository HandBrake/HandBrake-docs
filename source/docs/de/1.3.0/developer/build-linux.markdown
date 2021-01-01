---
Type:            article
Title:           HandBrake für Linux bauen
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

HandBrake für Linux bauen
============================

Bitte entferne - falls vorhanden - ein bereits installiertes HandBrake Paket von deiner Distribution oder einem Drittanbieter Repository, bevor du weitermachst. Siehe die Sektion *Warnung über nicht funktionierende Drittanbieter Builds* auf der [Wo bekomme ich HandBrake her](../get-handbrake/where-to-get-handbrake.html) Seite für mehr Informationen.

## Abhänigkeiten installieren

Anweisungen zum Installieren von Abhängigkeiten sind für die folgenden Distributionen verfügbar.

- [Arch](install-dependencies-arch.html)
- [CentOS](install-dependencies-centos.html)
- [Clear](install-dependencies-clear.html)
- [Debian](install-dependencies-debian.html)
- [Fedora](install-dependencies-fedora.html)
- [Gentoo](install-dependencies-gentoo.html)
- [Ubuntu](install-dependencies-ubuntu.html)

HandBrake bietet optionale experimentelle Unterstützung für Intel Quick Sync Video unter Linux. Dafür wird das  inklusive Abhängigkeiten benötigt. Mehr Informationen gibt es bei [Intel Media SDK Releases](https://github.com/Intel-Media-SDK/MediaSDK/releases) und [Intel Media SDK Build Instructions](ihttps://github.com/Intel-Media-SDK/MediaSDK#how-to-build)(in English).

## HandBrake bauen

Klone das HandBrake Repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Liste verfügbare Tags in der HandBrake 1.3.x Release Serie und checke den aktuellsten aus.

    git tag --list | grep ^1\.3\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.3\.[0-9]+$' | tail -n 1)

Baue HandBrake. Um die experimentelle Unterstützung für Intel Quick Sync Video zu aktivieren, füge dem Aufruf `--enable-qsv` hinzu. Um nur das Komanndozeileninterface zu bauen, deaktivere die grafische Oberfläche, indem du die Option `--disable-gtk` anhängst.

    ./configure --launch-jobs=$(nproc) --launch

Wenn der Build abgeschlossen ist, findest du `HandBrakeCLI` in dem `build` Ordner. Falls die grafische Oberfläche aktiviert ist, findest du zudem `ghb` in dem `build/gtk/src` Ordner.

Installiere HandBrake (optional). Beim Installieren der grafischen Oberfläche werden außerdem Icon und Desktop Dateien für das Applikationsmenü erstellt.

    sudo make --directory=build install

Um von vorne zu beginnen, lösche einfach den `build` Ordner.

    rm -rf build
