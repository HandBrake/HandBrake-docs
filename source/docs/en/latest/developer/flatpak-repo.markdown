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

Creating HandBrake flatpak bundles and repository
=================================================

## Install dependencies
Install flatpak and flatpak-builder

    sudo dnf install flatpak flatpak-builder

Install flathub repository.

    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

Install flatpak freedesktop SDK.

    flatpak install flathub org.freedesktop.Sdk//1.6

Install flatpak freedesktop runtime platform.

    flatpak install flathub org.freedesktop.Platform//1.6

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

## Add OSTree repo to flatpak repo list (Optional)
This is only for test purposes currently.  Ultimately, we might want to establish an "official" repo location that we publish new bundles to.  Currently, the repo is just a product of the build and is not meant to be reused across builds.

Add the new repository to your flatpak remotes

    flatpak --user remote-add <repo-name> <repo-dir>

Of if the repos was generated without PGP signed commits

    flatpak --user remote-add --no-gpg-verify <repo-name> <repo-dir>

## Check repo and application (Optional)
List contents of the repo

    flatpak --user remote-ls <repo-name>

Install the application (if you wish to test it)

    flatpak --user install <repo-name> <app-name>
