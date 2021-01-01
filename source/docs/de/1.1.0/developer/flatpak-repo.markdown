---
Type:            article
State:           [ obsolete ]
Title:           Ein HandBrake Flatpak Repository maintainen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), John (j45) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Ein HandBrake Flatpak Repository maintainen
==========================================

## Diese Instruktionen funktionieren derzeit nicht
Das Flatpak Gnome Runtime SDK inkludiert derzeit nicht nasm. HandBrake benötigt nasm während des build prozesses, deshalb bekommt man einen Build error wenn man diesen Instruktionen folgt. Hoffentlich wird die Gnome Runtime in der nahen Zukunft aktualisiert um nasm (und yasm auch) zu inkludieren. Die Freedesktop Runtime wurde bereits aktualisiert und beinhaltet diese beiden.

Siehe: [NASM flatpak issue](https://github.com/flatpak/freedesktop-sdk-images/issues/8)

## Ein neues leeres Flatpak Repository erstellen
Dies wird einmal aufgesetzt und served via http für die User.

Initialisiere ein neues Repository

    ostree init --mode=archive-z2 --repo=<repo-dir>

Füge das neue Repository deinen Flatpak Remotes hinzu

    flatpak --user remote-add --gpg-import=<pub-gpg-key> <repo-name> <repo-dir>

## Installiere Abhängigkeiten
Installiere flatpak und flatpak-builder

    sudo dnf install flatpak flatpak-builder

Installiere flathub repository.

    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

Installiere flatpak gnome SDK.

    flatpak install flathub org.gnome.Sdk//3.26

Installiere flatpak gnome runtime platform.

    flatpak install flathub org.gnome.Platform//3.26

## Erstelle ein neues HandBrake Flatpak Bundle
Dies kann auf einer anderen Maschine gemacht werden die nicht das Repo enthält.

Aus dem HandBrake Quellbaum aktualisiere Buildversionen indem du configure startest

    ./configure --prefix=/app --flatpak

Baue Flatpaks für GUI und CLI.
Resultate werden in build/pkg/flatpak/ gespeichert

    cd build
    make pkg.create.flatpak

## Import von Flatpak Bundles in das Repository
Für jeden Build wird ein GUI und ein CLI Flatpak Bundle importiert.

Importiere ein bundle

    flatpak build-import-bundle <repo-dir> <flatpak-bundle>

Aktualisiere den Flatpak Repo Index

    flatpak build-update-repo --generate-static-deltas <repo-dir>

Generiere und gpg-sign die ostree summary neu

    ostree summary --repo=<repo-dir> --gpg-sign=<key-id> -u

## Überprüfe repo und Applikation
Liste Inhalte des Repos

    flatpak --user remote-ls <repo-name>

Installiere die Applikation (falls du es testen möchtest)

    flatpak --user install <repo-name> <app-name>
