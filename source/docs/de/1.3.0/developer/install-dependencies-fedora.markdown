---
Type:            article
Title:           Abhängigkeiten für Fedora installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
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

Die folgenden Anweisungen gelten für [Fedora](https://getfedora.org) 28 bis 30.

Grundvoraussetzung um Kommandos zu starten:

- sudo (für standard user accounts)

Dependencies:

- Development Tools
- C Development Tools and Libraries
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
- lbzip2
- libass-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libtool
- libvorbis-devel
- libxml2-devel
- libvpx-devel
- m4
- make
- meson
- nasm
- ninja-build
- numactl-devel
- opus-devel
- patch
- python
- speex-devel
- tar
- xz-devel
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
- webkit2gtk3-devel

Intel Quick Sync Video Abhängigkeiten (optional):

- libva-devel
- libdrm-devel

Abhängigkeiten installieren:

    sudo dnf update
    sudo dnf groupinstall "Development Tools" "C Development Tools and Libraries"
    sudo dnf install bzip2-devel cmake fontconfig-devel freetype-devel fribidi-devel gcc-c++ git harfbuzz-devel jansson-devel lame-devel lbzip2 libass-devel libogg-devel libsamplerate-devel libtheora-devel libtool libvorbis-devel libxml2-devel libvpx-devel m4 make meson nasm ninja-build numactl-devel opus-devel patch python speex-devel tar xz-devel zlib-devel
 
Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(cat /etc/system-release | awk '{ print $3}').noarch.rpm
    sudo dnf install x264-devel

Um die GTK [GUI](abbr:Graphical User Interface) zu bauen, installiere folgende Abhängigkeiten.

    sudo dnf groupinstall "X Software Development" "GNOME Software Development"
    sudo dnf install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkit2gtk3-devel

Für Intel Quick Sync Video Unterstützung, installiere die QSV Abhängigkeiten.

    sudo dnf install libva-devel libdrm-devel

Fedora ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Anweisungen.
