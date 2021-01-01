---
Type:            article
Title:           Abhängigkeiten für Fedora installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Abhängigkeiten für Fedora installieren
=================================

Die folgenden Anweisungen sind für [Fedora](https://getfedora.org) 26 Workstation und neuer.

Grundvoraussetzung um Kommandos zu starten:

- sudo (für standard user accounts)

Dependencies:

- Development Tools
- Development Libraries
- bzip2-devel
- cmake
- fontconfig-devel
- freetype-devel
- fribidi-devel
- gcc-c++
- git
- harfbuzz-devel
- jansson-devel
- lame-devel
- libass-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libtool
- libvorbis-devel
- libxml2-devel
- m4
- make
- opus-devel
- patch
- python
- tar
- yasm
- zlib-devel

Zusätzliche Abhängigkeiten die nicht im Base Repository verfügbar sind:

- x264-devel [RPM Fusion]

Abhängigkeiten für die Grafische Benutzeroberfläche:

- X Software Development
- GNOME Software Development
- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-libav
- gstreamer1-plugins-base-devel
- intltool
- libgudev1-devel
- libnotify-devel
- webkit2gtk3-devel (webkitgtk4-devel for Fedora 27, webkitgtk3-devel for Fedora 26)

Abhängigkeiten installieren:

    sudo yum update
    sudo yum groupinstall "Development Tools" "Development Libraries"
    sudo yum install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel m4 make opus-devel patch python tar yasm zlib-devel

Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(cat /etc/system-release | awk '{ print $3}').noarch.rpm
    sudo yum install x264-devel

Um die GTK [GUI](abbr:Graphical User Interface) zu bauen, installiere folgende Abhängigkeiten.

    sudo yum groupinstall "X Software Development" "GNOME Software Development"
    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel
    sudo yum install webkit2gtk3-devel || sudo yum install webkitgtk4-devel || sudo yum install webkitgtk3-devel

Fedora ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Anweisungen.
