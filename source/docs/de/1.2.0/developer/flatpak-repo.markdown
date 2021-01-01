---
Type:            article
State:           [ obsolete ]
Title:           Ein HandBrake Flatpak Repository maintainen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), John (j45) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

HandBrake Flatpak Bundles und Repositoriy erstellen
==========================================

## Installiere Abhängigkeiten
Installiere flatpak und flatpak-builder

    sudo dnf install flatpak flatpak-builder

Installiere flathub repository.

    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

Installiere flatpak freedesktop SDK.

    flatpak install flathub org.freedesktop.Sdk//1.6

Installiere flatpak freedesktop runtime platform.

    flatpak install flathub org.freedesktop.Platform//1.6

## Erstelle ein neues HandBrake Flatpak Bundle
Dies kann auf einer anderen Maschine gemacht werden die nicht das Repo enthält.

Aktualisiere Buildversionen aus dem HandBrake Quellverzeichnis heraus, indem du configure startest

    ./configure --flatpak

Baue signierte flatpak Pakete für GUI und CLI.

    cd build
    make pkg.create.flatpak PGP_ID=<optional signing key id>

Oder um unsignierte flatpak Pakete zu bauen.

    cd build
    make pkg.create.flatpak

Nachdem der Build abgeschlossen ist, können die Pakete für das GUI und CLI in folgendem Ordner gefunden werden:

	pkg/flatpak/*.flatpak

Zusätzlich kann ein OSTree Repository, indem die Pakete committed und mit der oben angegebenen PGP ID signiert wurden, in folgendem Verzeichnis gefunden werden:

	pkg/flatpak/HandBrake-Flatpak.repo

Falls die PGP_ID nicht angegeben wird, ist der OSTree commit unsigniert.

## Installation des Flatpak Bundles
Um das Flatpak Bundle direkt zu verwenden anstatt es in das Repository zu importieren und dann von dort aus zu installieren ist folgender Befehl zu verwenden:

	flatpak install <flatpak-bundle>

## Füge OSTree Repository der Flatpak Repo Liste hinzu (Optional)
Dies wird derzeit nur zum Testen verwendet. Wir möchten eventuell eine "offizielle" Repo Location erstellen in welcher wir neue Bundles veröffentlichen. Derzeit ist das Repo nur ein Produkt des Builds und ist nicht zur Wiederverwendung in anderen Builds gedacht.

Füge das neue Repository deinen Flatpak Remotes hinzu

	flatpak --user remote-add <repo-name> <repo-dir>

Falls das Repo ohne PGP signierte Commits erzeugt wurde

	flatpak --user remote-add --no-gpg-verify <repo-name> <repo-dir>

## Überprüfe Repo und Applikation (Optional)
Liste Inhalte des Repos

    flatpak --user remote-ls <repo-name>

Installiere die Applikation (falls du es testen möchtest)

    flatpak --user install <repo-name> <app-name>

# Ein separates OSTree Repository maintainen
Es gibt Situationen, in denen du dein Repository nicht auf demselben Server haben möchtest, auf welchem du dein Flatpak gebaut hast. Anstatt das gesamte repo-dir das vom flatpak-builder erstellt wird zu exportieren, kannst du deine Bundles in ein separates OSTree Repository importieren.

## Ein neues leeres Repository erstellen

```
ostree init --mode=archive-z2 --reop=<repo-dir>
```

## Eine Flatpakrepo Datei dem Repository hinzufügen
Diese Datei wird von Flatpak Clients verwendet, um dein Repository ihren Remote-Listen hinzuzufügen.

Erstelle eine Datei mit dem Namen \<dein-Projekt\>.flatpakrepo in \<repo-dir\>. Das Format sieht wie folgt aus:

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

Beachte, dass die Portangabe optional ist und standardmäßig auf 80 eingestellt ist. Ich verwende 8080 zum Testen.

Kodiere den GPG Signierschlüssel in base64

```
gpg2 --export <key-id> > key.gpg
base64 --wrap=0 < key.gpg > key.base64
```

## Flatpak Bundles in das Repository importieren

```
flatpak build-import-bundle --gpg-sign=<key-id> <repo-dir> <flatpak-bundle>
```

## Repository Informationen aktualisieren

```
flatpak build-update-repo --generate-static-deltas --gpg-sign=<key-id>
```

## Dein Repository mit einem Webserver hosten
Für Testzwecke verwende ich einfach pythons builtin Webserver.

```
python3 -m http.server 8080 --directory <repo-dir>
```

Beachte, dass hierfür mindestens Python 3.7 benötigt wird.

## Veröffentliche die Lokation von \<dein-projekt\>.flatpakrepo
Benutzer können dein Repository zu ihrer Liste von Remotes mit folgendem Kommando hinzufügen:

```
flatpak remote-add --if-not-exists deinprojekt https://dl.yourproject.org:8080/repo/deinprojekt.flatpakrepo
```

