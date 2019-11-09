---
Type:            article
State:           [ draft ]
Title:           Maintaining a HandBrake flatpak repository
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         [ John (j45) ]
Copyright:       2019 HandBrake Team
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

    flatpak install flathub org.freedesktop.Sdk//18.08

Install flatpak freedesktop runtime platform.

    flatpak install flathub org.freedesktop.Platform//18.08

## Create a new HandBrake flatpak bundle

From the HandBrake source tree, update build versions by running configure

    ./configure --flatpak

Or to build HandBrake with Quick Sync Video support and HandBrake's Intel MediaSDK flatpak plugin

    ./configure --flatpak --enable-qsv

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

# Maintaining a separate OSTree repository

There are situations where you don't want to keep your repository on the same server as you built the flatpak on.  Rather than exporting the entire repo-dir that is built by flatpak-builder, you can import your bundles into a seperate OSTree repository.

## Create a new empty repository

```
ostree init --mode=archive-z2 --reop=<repo-dir>
```

## Add flatpakrepo file to the repository

This file is used by flatpak clients to add your repoitory to their list of remotes.

Create a file named \<yourproject\>.flatpakrepo in \<repo-dir\>.  The format looks like this:

```
[Flatpak Repo]
Title=Yourproject
Url=https://dl.yourproject.org:8080/repo/
Homepage=https://yourproject.org/
Comment=Repository of yourproject
Description=Repository of yourproject
Icon=https://dl.yourproject.org/repo/logo.svg
GPGKey=<base64 encoded raw public gpg>
```

Note that the port above is optional and defaults to 80. I use 8080 for test purposes.

To base64 encode the gpg signing key

```
gpg2 --export <key-id> > key.gpg
base64 --wrap=0 < key.gpg > key.base64
```

## Importing flatpak bundles into the repository

```
flatpak build-import-bundle --gpg-sign=<key-id> <repo-dir> <flatpak-bundle>
```

## Update repository summary information

```
flatpak build-update-repo --generate-static-deltas --gpg-sign=<key-id>
```

## Host your repository with a web server

For test purposes, I just use pythons builtin web server.

```
python3 -m http.server 8080 --directory <repo-dir>
```

Note, requires python 3.7 or above.

## Publish the location of \<yourproject\>.flatpakrepo

Users can add your repository to their list of remotes with:

```
flatpak remote-add --if-not-exists yourproject https://dl.yourproject.org:8080/repo/yourproject.flatpakrepo
```
