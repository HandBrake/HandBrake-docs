---
Type:            article
Title:           CentOS Abhängigkeiten installieren
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

CentOS Abhängigkeiten installieren
=================================

## CentOS 8

Folgende Anweisungen gelten für [CentOS](https://centos.org) 8.0.

Grundlegende Voraussetzungen um Kommandos starten zu können:

- curl
- sudo (für normale user accounts)

Abhängigkeiten:

- Development Tools
- cmake
- fribidi-devel
- git
- jansson-devel
- libxml2-devel
- numactl-devel
- python3
- xz-devel

Zusätzliche Abhängigkeiten die nicht im base repository verfügbar sind:

- lame-devel [PowerTools]
- libass-devel [EPEL]
- libogg-devel [PowerTools]
- libsamplerate-devel [PowerTools]
- libtheora-devel [PowerTools]
- libvorbis-devel [PowerTools]
- libvpx-devel [PowerTools]
- meson [PowerTools]
- nasm [PowerTools]
- ninja-build [PowerTools]
- opus-devel [PowerTools]
- speex-devel [PowerTools]
- x264-devel [RPM Fusion]

Abhängigkeiten für die Grafische Benutzeroberfläche:

- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libnotify-devel
- webkit2gtk3-devel

Zusätzliche Abhängigkeiten für die Grafische Benutzeroberfläche die nicht im base repository verfügbar sind:

- gstreamer1-libav [RPM Fusion]
- libgudev1-devel [PowerTools]

Intel Quick Sync Video Abhängigkeiten (optional):

- libva-devel
- libdrm-devel

Abhängigkeiten installieren

    sudo dnf update
    sudo dnf groupinstall "Development Tools"
    sudo dnf install cmake fribidi-devel git jansson-devel libxml2-devel numactl-devel python3 xz-devel

Aktiviere das CentOS PowerTools Repository und installiere zusätzliche Abhängigkeiten.

    sudo dnf config-manager --set-enabled PowerTools
    sudo dnf install lame-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel libvpx-devel meson nasm ninja-build opus-devel speex-devel

Installiere das [EPEL](https://fedoraproject.org/wiki/EPEL) repository und zusätzliche Abhängigkeiten.

    sudo dnf install epel-release
    sudo dnf install libass-devel

Installiere das [RPM Fusion](http://rpmfusion.org) Free repository und zusätzliche Abhängigkeiten.

    sudo dnf localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-8.noarch.rpm
    sudo dnf install x264-devel

Um die GTK [GUI](abbr:Grafische Benutzeroberfläche) zu bauen, installiere die Abhängigkeiten dafür.

    sudo dnf install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkit2gtk3-devel

Für Intel Quick Sync Video Unterstützung, installiere die QSV Abhängigkeiten.

    sudo dnf install libva-devel libdrm-devel

CentOS ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiterführende Instruktionen.


## CentOS 7

Die folgenden Instruktionen sind für [CentOS](https://centos.org) 7.7.

Grundvoraussetzungen um Kommandos zu starten:

- curl
- sudo (für standard user accounts)

Abhängigkeiten:

- Development Tools
- bzip2-devel
- cmake
- fribidi-devel
- git
- jansson-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel
- libxml2-devel
- numactl-devel
- python3
- speex-devel
- xz-devel

Zusätzliche Abhängigkeiten die nicht im Base Repository sind:

- devtoolset-7 [SCL] (optional/empfohlen für HandBrake's [CLI](abbr:Command Line Interface))
- lame-devel [EPEL]
- libass-devel [EPEL]
- libvpx
- meson [EPEL]
- nasm [NASM]
- ninja-build [EPEL]
- opus-devel [EPEL EL6]
- x264-devel [RPM Fusion]

Abhängigkeiten für die Grafische Benutzeroberfläche:

- dbus-glib-devel
- gstreamer1-devel
- gstreamer1-plugins-base-devel
- intltool
- libgudev1-devel
- libnotify-devel
- webkitgtk4-devel

Zusätzliche Abhängigkeiten für die grafische Benutzeroberfläche, die nicht im Base Reposiroy verfügbar sind:

- devtoolset-7 [SCL]
- gstreamer1-libav [RPM Fusion]

Intel Quick Sync Video Abhängigkeiten (optional):

- libva-devel
- libdrm-devel

Abhängigkeiten installieren:

    sudo yum update
    sudo yum groupinstall "Development Tools"
    sudo yum install bzip2-devel cmake fribidi-devel git jansson-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel libxml2-devel numactl-devel python3 speex-devel xz-devel

Die `lame-devel` und `x264-devel` Pakete gibt es jetzt im EPEL Repository und im RPM Fusion Repository. Falls du zuvor das [ZMREPO](https://zmrepo.zoneminder.com) Repository für diese Pakete installiert hast, entferne sie und das Repository bevor du weitermachst.

    # Nur notwendig falls zuvor ZMREPO installiert wurde
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Installiere das [EPEL](https://fedoraproject.org/wiki/EPEL) repository und zugehörige Abhängigkeiten.

    sudo yum install epel-release
    sudo yum install lame-devel libass-devel meson ninja-build

Das `opus-devel` Paket von CentOS 7 ist zu alt. Installiere eine neuere Version via EPEL für CentOS 6[^opus-el6].

    sudo yum localinstall $(curl -L -s 'https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/' | grep -Eo 'opus-[^">]+\.x86_64\.rpm' | sort -u | awk '{ print "https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/"$0 }')

Das `nasm` Paket von CentOS 7 ist zu alt. Installiere eine neuere Version über das NASM Projekt[^nasm-repo].

    sudo curl -L 'https://nasm.us/nasm.repo' -o /etc/yum.repos.d/nasm.repo
    sudo yum install nasm

Das `libvpx-devel` package von CentOS 7 ist zu alt. Baue und installiere eine neuere Version direkt von der Quelle [^libvpx-source].

    # altes paket entfernen falls vorhanden
    sudo yum remove libvpx-devel

    # libvpx
    curl -L https://github.com/webmproject/libvpx/archive/v1.8.1.tar.gz -o libvpx-1.8.1.tar.gz
    tar -xf libvpx-1.8.1.tar.gz
    cd libvpx-1.8.1
    ./configure --enable-shared --enable-static --as=nasm --enable-pic --enable-runtime-cpu-detect --enable-vp8 --enable-vp9
    make -j$(nproc)
    sudo make install
    cd ..

    # Shared Libraries auffindbar machen
    export CFLAGS="${CFLAGS:-} -I/usr/local/include"
    export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"
    echo 'export CFLAGS="${CFLAGS:-} -I/usr/local/include"' >> "${HOME}/.bashrc"
    echo 'export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"' >> "${HOME}/.bashrc"
    if ! grep '\/usr\/local\/lib' /etc/ld.so.conf >/dev/null 2>&1; then
        echo '/usr/local/lib' | sudo tee --append /etc/ld.so.conf
        sudo ldconfig
    fi

Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install x264-devel

Um die GTK [GUI](abbr:Grafische Benutzeroberfläche) zu bauen, installiere die zugehörigen Abhängigkeiten.

    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk4-devel

Für Intel Quick Sync Video Unterstützung, installiere die QSV Abhängigkeiten.

    sudo yum install libva-devel libdrm-devel

Die GNU Compiler Collection und zugehörige Pakete die von CentOS 7 bereitgestellt werden sind zu alt. Installiere und aktiviere eine neuere Versiion über die Software Collections (SCL)[^gcc-scl]. Dies ist für das bauen der HandBrake [CLI](abbr:Command Line Interface - Kommandozeile) empfohlen und für das Bauen der GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) erforderlich.

    sudo yum install centos-release-scl
    sudo yum install devtoolset-7
    sudo scl enable devtoolset-7 bash

    # Shared Libraries auffindbar machen
    export CFLAGS="${CFLAGS:-} -I/usr/local/include"
    export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"
    echo 'export CFLAGS="${CFLAGS:-} -I/usr/local/include"' >> "${HOME}/.bashrc"
    echo 'export LDFLAGS="${LDFLAGS:-} -L/usr/local/lib"' >> "${HOME}/.bashrc"

CentOS ist nun bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiterführende Instruktionen.

[^opus-el6]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

[^nasm-repo]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

[^libvpx-source]: Die Installation von Paketen, die euer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

[^gcc-scl]: SCL Pakete sind isoliert von Versionen aus dem Base Repository ähnlicher Pakete. Du kannst diese Pakete mithilfe des `scl` Kommandozeilenwerkzeugs aktivieren beziehungsweise deaktivieren. Wenn du die Pakte nicht mehr benötigst, logge dich einfach aus der Shell aus um die Pakete aus dem base Repository weiterzuverwenden.
