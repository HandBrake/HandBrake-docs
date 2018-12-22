---
Type:            article
Title:           CentOS Abhängigkeiten installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

CentOS Abhängigkeiten installieren
=================================

## CentOS 7

Die folgenden Instruktionen sind für [CentOS](https://centos.org) 7.5 x86_64 (nur HandBrake [CLI](abbr:Command Line Interface - Kommandozeile)).

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

- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- nasm [NASM]
- opus-devel [EPEL EL6]
- x264-devel [RPM Fusion]
- yasm [EPEL]

Abhängigkeiten installieren

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

Die `lame-devel` und `x264-devel` Pakete gibt es jetzt im RPM Fusion Repository. Falls du zuvor das [ZMREPO](https://zmrepo.zoneminder.com) Repository für diese Pakete installiert hast, entferne Sie und das Repository bevor du weitermachst.

    # Nur notwendig falls zuvor ZMREPO installiert wurde
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install lame-devel x264-devel

CentOS ist nun bereit die HandBrake [CLI](abbr:Command Line Interface - Kommandozeile) zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiterführende Instruktionen.

[^opus-el6]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.

[^nasm-repo]: Die Installation von Paketen, die neuer sind als die aus dem base Repository, könnte zu Inkompatibilitäten mit anderer Software führen, welche eine bestimmte Paketversion erwarten.
