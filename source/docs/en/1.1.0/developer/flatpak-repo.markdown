---
Type:            article
State:           [ obsolete ]
Title:           Maintaining a HandBrake flatpak repository
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        English
Language_Code:   en
Authors:         [ John (j45) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Maintaining a HandBrake flatpak repository
==========================================

## These instructions do not currently work

The flatpak gnome runtime sdk does not currently include nasm.  HandBrake requires nasm during the build process, so following these instructions will result in a build error.  Hopefully the gnome runtime will get updated in the not too distant future to include nasm (and yasm as well).  The freedesktop runtime has already been updated to include these.

See: [NASM flatpak issue](https://github.com/flatpak/freedesktop-sdk-images/issues/8)

## Creating a new empty flatpak repository
This would be done once to set up the repo users update their HandBrake flatpaks from. This repo gets served via http to users.

Initialize a new repository  

    ostree init --mode=archive-z2 --repo=<repo-dir>

Add the new repository to your flatpak remotes  

    flatpak --user remote-add --gpg-import=<pub-gpg-key> <repo-name> <repo-dir>

## Install dependencies
Install flatpak and flatpak-builder

    sudo dnf install flatpak flatpak-builder

Install flathub repository.

    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

Install flatpak gnome SDK.

    flatpak install flathub org.gnome.Sdk//3.26

Install flatpak gnome runtime platform.

    flatpak install flathub org.gnome.Platform//3.26

## Create a new HandBrake flatpak bundle
This may be done on a different machine than the repo.

From the HandBrake source tree, update build versions by running configure  

    ./configure --prefix=/app --flatpak

Build flatpaks for GUI and CLI.  
Results will be in build/pkg/flatpak/  

    cd build
    make pkg.create.flatpak

## Importing flatpak bundles into the repository
For each build, a GUI and CLI flatpak bundle is imported.

Import a bundle  

    flatpak build-import-bundle <repo-dir> <flatpak-bundle>

Update the flatpak repo index  

    flatpak build-update-repo --generate-static-deltas <repo-dir>

Regenerate and gpg-sign ostree summary  

    ostree summary --repo=<repo-dir> --gpg-sign=<key-id> -u

## Check repo and application
List contents of the repo  

    flatpak --user remote-ls <repo-name>

Install the application (if you wish to test it)  

    flatpak --user install <repo-name> <app-name>
