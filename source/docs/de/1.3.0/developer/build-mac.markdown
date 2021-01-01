---
Type:            article
Title:           HandBrake für Mac bauen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
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

Um HandBrake für Mac zu bauen, benötigt man einen Apple Computer mit einem 64-bit Intel Prozessor, auf dem mindestens macOS 10.14.3 Mojave oder aktueller läuft, und folgende Abhängigkeiten.

- [Xcode](https://developer.apple.com/xcode/) 10.3 oder neuer
  - gratis Apple Developer Registrierung notwendig, oder installiere vom Mac App Store
- [Kommandozeilen Werkzeuge für Xcode](https://developer.apple.com/download/more/)
  - gratis Apple Developer Registrierung notwendig, oder installiere mit `xcode-select --install`
- [Python](https://www.python.org/downloads/) 3.7.0 oder neuer
  - stelle sicher, dass deine Python Installation `/Library/Frameworks/Python.framework/Versions/<version>` erstellt hat

Zusätzliche Abhängigkeiten (können mit dem mitgelieferten Script gebaut werden):

- autoconf 2.69 oder neuer
- automake 1.15 oder neuer
- cmake 3.1.0 oder neuer
- libtool 2.4.6 oder neuer
- meson 0.47.0 oder neuer
- nasm 2.13 oder neuer
- ninja 1.8.0 oder neuer
- pkg-config 0.29.0 oder neuer

Installiere Xcode und öffne es einmal. Bestätige alle Fragen bezüglich der Installation zusätzlicher Werkzeuge. Du kannst Xcode nachdem es vollständig geladen ist wieder beenden.

Installiere Kommandozeilen Werkzeuge für Xcode mithilfe des package installers von Apple[^xcode-cli-tools], oder mit `xcode-select`.

    xcode-select --install

Installiere Python 3 mit dem aktuellsten Package Installer von [Python](https://www.python.org/downloads/).

Falls du Python 3 aus einer anderen Quelle installiert hast wie zum Beispiel Homebrew, ist es notwendig zu überprüfen, ob Python 3 HTTPS Verbindungen aufbauen kann. Der folgende Test liefert entweder `0` für Erfolg oder `1` bei einem Fehlschlag. Schlägt der Test fehl, musst du sicherstellen, dass SSL Zertifikate installiert und zugänglich für deine Python 3 Installation sind. Alternativ kannst du Python 3 deinstallieren und über das offizielle Package neu installieren.

    python3 -c 'from urllib.request import urlopen; test = lambda x=exec("def f():\n try:\n  urlopen(\"https://handbrake.fr\", timeout=10)\n  return 0\n except:  return 1"): f(); result = test(); exit(result)'; echo $?

Klone das HandBrake Repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Liste verfügbare Tags in der HandBrake 1.3.x Release Serie und checke den aktuellsten aus.

    git tag --list | grep ^1\.3\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.3\.[0-9]+$' | tail -n 1)

Du kannst die zusätzlichen Abhängigkeiten mit dem mitgelieferten Script bauen und installieren. Wenn du möchtest, kannst du den Ausgabepfad abändern.

    scripts/mac-toolchain-build /usr/local

Dieser Prozess dauert ein paar Minuten. Falls es notwendig ist, wird dir das Script Anweisungen geben, wie du den Ort der erstellten Binaries zu dem `Umgebungspfad`[^default-path] hinzufügst. Mache dies jetzt.

Baue HandBrake. Um nur das Kommandozeileninterface zu bauen, deaktivere die grafische Benutzeroberfläche indem du `--disable-xcode` anhängst.

    ./configure --launch-jobs=$(sysctl -n hw.activecpu) --launch

Wenn der Prozess abgeschlossen ist, findest du `HandBrakeCLI` in dem `build/xroot` Ordner. Falls außerdem die grafische Oberfläche aktiviert ist, findest du `HandBrake.app` in dem Verzeichnis.

Installiere HandBrake (optional).

    sudo make --directory=build install

Um neu zu starten, lösche einfach den `build` Ordner.

    rm -rf build

[^xcode-cli-tools]: Wenn du die Kommandowerkzeuge für Xcode mit dem package installer installierst (anstatt `xcode-select --install`), achte darauf das Paket zu installieren das zu deiner installierten Xcode Version passt. Ein Unterschied zwischen der Versionen von Xcode und der Kommandozeilenwerkzeuge kann Probleme verursachen.

[^default-path]: `/usr/local/bin` is included in the system's `PATH` by default. It is not necessary to add it to your environment's `PATH` when installing the additional dependencies to `/usr/local`.
