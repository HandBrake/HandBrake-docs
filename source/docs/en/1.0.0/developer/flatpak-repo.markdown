---
Type:            article
State:           [ obsolete ]
Title:           Maintaining a HandBrake flatpak repository
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.0.0
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

## Creating a new empty flatpak repository
This would be done once to set up the repo users update their HandBrake
flatpaks from. This repo gets served via http to users.

Initialize a new repository  

    ostree init --mode=archive-z2 --repo=<repo-dir>

Add the new repository to your flatpak remotes  

    flatpak --user remote-add --gpg-import=<pub-gpg-key> <repo-name> <repo-dir>

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
