---
Type:            article
State:           [ obsolete ]
Title:           CentOS Abhängigkeiten installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
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

## CentOS 7

Die folgenden Instruktionen sind für [CentOS](https://centos.org) 7.6 x86_64.

Grundvoraussetzungen um Kommandos zu starten:

- curl
- sudo (für standard user accounts)

Abhängigkeiten:

- Development Tools
- Additional Development
- fribidi-devel
- git
- jansson-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel
- speex-devel
- xz-devel

Zusätzliche Abhängigkeiten die nicht im Base Repository sind:

- devtoolset-7 [SCL] (optional/empfohlen für HandBrake's [CLI](abbr:Command Line Interface))
- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- nasm [NASM]
- opus-devel [EPEL EL6]
- x264-devel [RPM Fusion]
- yasm [EPEL]

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

Abhängigkeiten installieren:

    sudo yum update
    sudo yum groupinstall "Development Tools" "Additional Development"
	sudo yum install fribidi-devel git jansson-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel opus-devel speex-devel xz-devel

Installiere das [EPEL](https://fedoraproject.org/wiki/EPEL) repository und zugehörige Abhängigkeiten.

    sudo yum install epel-release
    sudo yum install libass-devel yasm

Das `opus-devel` Paket von CentOS 7 ist zu alt. Installiere eine neuere Version via EPEL für CentOS 6[^opus-el6].

    sudo yum localinstall $(curl -L -s 'https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/' | grep -Eo 'opus-[^">]+\.x86_64\.rpm' | sort -u | awk '{ print "https://dl.fedoraproject.org/pub/epel/6/x86_64/Packages/o/"$0 }')

Das `nasm` Paket von CentOS 7 ist zu alt. Installiere eine neuere Version über das NASM Projekt[^nasm-repo].

    sudo curl -L 'https://nasm.us/nasm.repo' -o /etc/yum.repos.d/nasm.repo
    sudo yum install nasm

Die `lame-devel` und `x264-devel` Pakete gibt es jetzt im RPM Fusion Repository. Falls du zuvor das [ZMREPO](https://zmrepo.zoneminder.com) Repository für diese Pakete installiert hast, entferne sie und das Repository bevor du weitermachst.

    # Nur notwendig falls zuvor ZMREPO installiert wurde
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install lame-devel x264-devel

Die GNU Compiler Collection und zugehörige Pakete die von CentOS 7 bereitgestellt werden sind zu alt. Installiere und aktiviere eine neuere Versiion über die Software Collections (SCL)[^gcc-scl]. Dies ist für das bauen der HandBrake [CLI](abbr:Command Line Interface - Kommandozeile) empfohlen und für das Bauen der GTK [GUI](abbr:Graphical User Interface - Grafische Benutzeroberfläche) erforderlich.

    sudo yum install centos-release-scl
    sudo yum install devtoolset-7
    sudo scl enable devtoolset-7 bash

Installiere die notwendigen Abhängigkeiten für die grafische Benutzeroberfläche falls diese mitgebaut werden soll.

    sudo yum install dbus-glib-devel gstreamer1-devel gstreamer1-libav gstreamer1-plugins-base-devel intltool libgudev1-devel libnotify-devel webkitgtk4-devel

CentOS ist nun bereit die HandBrake [CLI](abbr:Command Line Interface - Kommandozeile) zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiterführende Instruktionen.

[^opus-el6]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

[^nasm-repo]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

[^gcc-scl]: SCL Pakete sind isoliert von Versionen aus dem Base Repository ähnlicher Pakete. Du kannst diese Pakete mithilfe des `scl` Kommandozeilenwerkzeugs aktivieren beziehungsweise deaktivieren. Um beispielsweise die neueren developer tools nach dem Kompilieren von HandBrake zu deaktivieren, ist folgendes Kommando auszuführen: `sudo scl disable devtoolset-7 bash`.
