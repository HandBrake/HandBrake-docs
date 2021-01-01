---
Type:            article
State:           [ obsolete ]
Title:           HandBrake für Mac bauen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

HandBrake für Mac bauen
==========================

Um HandBrake für Mac zu bauen, benötigt man einen Apple Computer mit einem 64-bit Intel Prozessor, auf dem mindestens OS X 10.13.6 High Sierra oder aktueller[^mojave-dark-mode] läuft, und folgende Abhängigkeiten.

- [Xcode](https://developer.apple.com/xcode/) 10 oder neuer
  - gratis Apple Developer Registrierung notwendig, oder installiere vom Mac App Store
- [Kommandozeilen Werkzeuge für Xcode](https://developer.apple.com/download/more/)
  - gratis Apple Developer Registrierung notwendig, oder installiere mit `xcode-select --install`

Zusätzliche Abhängigkeiten (können mit dem mitgelieferten Script gebaut werden):

- autoconf
- automake
- cmake (3.8.2 oder neuer empfohlen)
- libtool
- nasm 2.13 oder neuer
- pkg-config
- yasm 1.2.0 oder neuer (1.3.0 oder neuer empfohlen)

Installiere Xcode[^xcode-install] und öffne es einmal. Bestätige alle Fragen bezüglich der Installation zusätzlicher Werkzeuge. Du kannst Xcode nachdem es vollständig geladen ist wieder beenden.

Installiere Kommandozeilen Werkzeuge für Xcode[^xcode-cli-tools].

    xcode-select --install

Klone das HandBrake Repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Liste die verfügbaren Tags in der HandBrake 1.2.x Release Serie und checke den aktuellsten aus.

    git tag --list | grep ^1\.2\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.2\.[0-9]+$' | tail -n 1)

Du kannst die zusätzlichen Abhängigkeiten mit dem mitgelieferten Script bauen und installieren. Wenn du möchtest, kannst du den Ausgabepfad abändern.

    scripts/mac-toolchain-build /usr/local

Dieser Prozess dauert ein paar Minuten. Falls es notwendig ist, wird dir das Script Anweisungen geben, wie du den Ort der erstellten Binaries zu dem `Umgebungspfad`[^default-path] hinzufügst. Mache dies jetzt.

Baue HandBrake. Um nur das Kommandozeileninterface zu bauen, deaktivere die grafische Benutzeroberfläche indem du `--disable-xcode` anhängst.

    ./configure --launch-jobs=$(sysctl -n hw.ncpu) --launch

Wenn der Prozess abgeschlossen ist, findest du `HandBrakeCLI` in dem `build/xroot` Ordner. Falls außerdem die grafische Oberfläche aktiviert ist, findest du `HandBrake.app` in dem Verzeichnis.

Installiere HandBrake (optional).

    sudo make --directory=build install

Um neu zu starten, lösche einfach den `build` Ordner.

    rm -rf build

[^mojave-dark-mode]: HandBrake muss auf macOS 10.4 Mojave oder neuer gebaut werden, um Dark Mode Toolbar Icons aktivieren zu können. Wenn auf einer älteren macOS Version (auch mit dem neuesten Xcode) gebaut wird, werden die Light Mode Toolbar Icons im Dark Mode angezeigt.

[^xcode-install]: Stelle sicher, dass Xcode unter `/Applications/Xcode.app` installiert ist. Wenn ein Xcode Beta Release installiert ist, musst du eventuell `Xcode-beta.app` in `Xcode.app` umbenennen.

[^xcode-cli-tools]: Wenn du die Kommandowerkzeuge für Xcode mit dem package installer installierst (anstatt `xcode-select --install`), achte darauf das Paket zu installieren das zu deiner installierten Xcode Version passt. Ein Unterschied zwischen der Versionen von Xcode und der Kommandozeilenwerkzeuge kann Probleme verursachen.

[^default-path]: `/usr/local/bin` is included in the system's `PATH` by default. It is not necessary to add it to your environment's `PATH` when installing the additional dependencies to `/usr/local`.
