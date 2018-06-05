---
Type:            article
State:           [ draft ]
Title:           Maintaining a HandBrake flatpak repository
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ John (j45) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Maintaining a HandBrake flatpak repository
==========================================

## Creating a new empty flatpak repository (Optional)
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

    flatpak install flathub org.gnome.Sdk//3.28

Install flatpak gnome runtime platform.

    flatpak install flathub org.gnome.Platform//3.28

## Create a new HandBrake flatpak bundle
This may be done on a different machine than the repo.

From the HandBrake source tree, update build versions by running configure

    ./configure --flatpak

Build signed flatpak packages for GUI and CLI.

    cd build
    make pkg.create.flatpak PGP_ID=<optional signing key id>

Or to build unsigned flatpak packages.

    cd build
    make pkg.create.flatpak

After the build completes, the flatpak packages for the GUI and CLI can be found in:

    pkg/flatpak/*.flatpak

And an OSTree repository where the packages have been committed and signed with the above PGP ID can be found in:

    pkg/flatpak/HandBrake-Flatpak.repo

If PGP_ID is omitted, the OSTree commit will be unsigned.

## Install flatpak bundle
To use the flatpak bundle directly instead of importing it into a repository and then installing from the repository:

    flatpak install <flatpak-bundle>

## Importing flatpak bundles into the repository (Optional)
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
