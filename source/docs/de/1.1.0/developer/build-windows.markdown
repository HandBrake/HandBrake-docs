---
Type:            article
Title:           HandBrake für Windows bauen
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

HandBrake für Windows bauen
==============================

## Kommandozeileninterface und LibHB

Um die HandBrake [CLI](abbr:Command Line Interface - Kommandozeile) und LibHB(`hb.dll`) für Windows zu bauen, benötigt man Linux und eine aktuelle [MinGW-w64](https://mingw-w64.org) toolchain. Empfohlen sind Ubuntu 18.04 LTS (Bionic Beaver) und 16.04 LTS (Xenial Xerus); andere Distributionen könnten auch funktionieren. Auf jeden Fall empfehlen wir die MinGW-w64 toolchain mithilfe unserer Anweisungen und dem mitgeliefertem Script zu installieren, da die meisten als Paket angebotenen Versionen Probleme haben, die zu einem nicht funktionierenden Build führen können.

Die folgenden Anweisungen sind für Ubuntu 18.04 LTS (Bionic Beaver) und 16.04 LTS (Xenial Xerus).

Abhängigkeiten:

- autoconf
- automake
- build-essential
- cmake
- curl
- gcc
- git
- libtool
- libtool-bin
- m4
- make
- patch
- pkg-config
- python
- tar
- yasm
- zlib1g-dev

Zusätzliche Abhängigkeiten die nicht im Ubuntu 16.04 LTS Base Repository sind:

- nasm 2.13 oder neuer

Zusätzliche MinGW-w64 toolchain Abhängigkeiten:

- bison
- bzip2
- flex
- g++
- gzip
- pax

Abhängigkeiten installieren:

    sudo apt-get update
    sudo apt-get install automake autoconf build-essential cmake curl gcc git intltool libtool libtool-bin m4 make patch pkg-config python tar yasm zlib1g-dev

Für Ubuntu 18.04 (Bionic Beaver), installiere `nasm` aus dem base repository:

    sudo apt-get install nasm

Für Ubuntu 16.04 LTS (Xenial Xerus), kompiliere den `nasm` Quellcode da die Version im Base Repository zu alt ist.

    curl -O https://www.nasm.us/pub/nasm/releasebuilds/2.13.02/nasm-2.13.02.tar.bz2
    tar -xf nasm-2.13.02.tar.bz2
    cd nasm-2.13.02
    ./configure --prefix=/usr/local --enable-sections --enable-lto
    make -j$(nproc)
    sudo make install
    source ~/.bashrc
    cd ..

Installiere zusätzliche Abhängigkeiten die für den Build der MinGW-w64 toolchain benötigt werden:

    sudo apt-get install bison bzip2 flex g++ gzip pax

Klone das HandBrake Repository:

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Liste alle verfügbaren Tags in der HandBrake 1.1.x Release Serie, und checke den aktuellsten aus.

    git tag --list | grep ^1\.1\.
    git checkout refs/tags/$(git tag -l | grep -E '^1\.1\.[0-9]+$' | tail -n 1)

Baue die MinGW-w64 toolchain mit dem mitgelieferten Script und ersetze `username` durch deinen Benutzernamen. Du kannst natürlich einen anderen Ausgabepfad einstellen wenn du möchtest.

    scripts/mingw-w64-build x86_64 /home/username/toolchains/

Dieser Prozess wird ein paar Minuten in Anspruch nehmen und dir nach Abschluss Anweisungen geben, wie du die erstellten Binaries zum `PATH` deiner Umgebung hinzufügen kannst. Mache dies jetzt.

Baue HandBrake. Für Audio mit höherer Qualität, aktivere den FDK AAC Kodierer indem du `--enable-fdk-aac` anhängst. Builds die FDK AAC inkludieren dürfen nur für persönlichen Gebrauch genutzt werden und dürfen nicht weitergegeben werden.[^fdk-aac-license]

    ./configure --cross=x86_64-w64-mingw32 --enable-qsv --launch-jobs=$(nproc) --launch

Wenn der Prozess abgeschlossen ist, findest du `HandBrakeCLI.exe` in deinem `build` Ordner und `hb.dll` in dem `build/libhb` Verzeichnis.

Um von Vorne zu beginnen, lösche einfach das `build` Verzeichnis.

    rm -rf build


## Grafische Benutzeroberfläche

Die folgenden Tools werden benötigt um die [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) zu bauen und zu starten.

- [Microsoft Visual Studio Community](https://www.visualstudio.com/vs/community/)
- Einen Git Client
  - [Source Tree](https://www.sourcetreeapp.com) (empfohlen)
  - Client inkludiert in Visual Studio 2015 oder neuer
- `hb.dll` (siehe die oben angeführten Anweisungen um LibHB zu bauen, oder lade sie von [https://handbrake.fr/nightly.php](https://handbrake.fr/nightly.php)) herunter.
- [JetBrains ReSharper](https://www.jetbrains.com/resharper/) (optional)
  - Sehr empfohlen für Entwickler die an der Arbeit der Windows UI interessiert sind
  - Aktive, reguläre Kontributoren können eine gratis ReSharper Lizenz für quelloffene Projekte beim HandBrake Team anfragen, courtesy JetBrains

Klone `https://github.com/HandBrake/HandBrake.git` mit deinem Git Client.

Der Quellcode für die GUI befindet sich im `win\CS` Ordner und der Name der Projektdatei ist `HandBrake.sln`. Stelle sicher, dass HandBrakeWPF als Startup Projekt im Solution Explorer eingestellt ist, indem du einen Rechtsklick auf den Namen ausführst und "Set as startup projekt" auswählst.

Um die GUI zu bauen, wähle Build Solution aus dem Build Menü.

Wenn der Prozess abgeschlossen ist, finde den Ausgabeordner wo `HandBrake.exe` erstellt wird (üblicherweise in `win\CS\HandBrakeWPF\bin\,,,`, abhängig vom gewählten build profil). Kopiere `hb.dll` in diesen Ordner. Dies schließt den Build Prozess ab.

[^fdk-aac-license]: Der FDK AAC Kodierer wird nur in Quellcodeform angeboten und ist nicht mit der GNU General Public License Version 2, wie sie von HandBrake verwendet wird, kompatibel. Builds die FDK AAC verwenden, dürfen nur für privaten Gebrauch genutzt werden und dürfen nicht weiterverbreitet werden. Gebe dein gebautes Produkt nicht an andere weiter.
