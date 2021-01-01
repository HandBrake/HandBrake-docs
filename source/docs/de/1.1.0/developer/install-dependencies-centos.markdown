---
Type:            article
Title:           CentOS Abhängigkeiten installieren
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

CentOS Abhängigkeiten installieren
=================================

Die Instruktionen sind für [CentOS](https://centos.org) Versionen 6 und 7 verfügbar.

## CentOS 7

Die folgenden Instruktionen sind nur für CentOS 7 x86_64 (nur HandBrake [CLI](abbr:Command Line Interface - Kommandozeile)).

Grundvoraussetzungen um Kommandos zu starten:

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
- opus-devel

Zusätzliche Abhängigkeiten die nicht im Base Repository sind:

- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- x264-devel [RPM Fusion]
- yasm [EPEL]

Abhängigkeiten installieren

    sudo yum update
    sudo yum groupinstall "Development Tools" "Additional Development"
    sudo yum install fribidi-devel git jansson-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel opus-devel

Installiere das [EPEL](https://fedoraproject.org/wiki/EPEL) repository und zugehörige Abhängigkeiten.

    sudo yum install epel-release
    sudo yum install libass-devel yasm

Die `lame-devel` und `x264-devel` Pakete gibt es jetzt im RPM Fusion Repository. Falls du zuvor das [ZMREPO](https://zmrepo.zoneminder.com) Repository für diese Pakete installiert hast, entferne Sie und das Repository bevor du weitermachst.

    # Nur notwendig falls zuvor ZMREPO installiert wurde
    sudo yum repo-pkgs zmrepo remove
    sudo yum remove zmrepo

Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-7.noarch.rpm
    sudo yum install lame-devel x264-devel

CentOS ist nun bereit die HandBrake [CLI](abbr:Command Line Interface - Kommandozeile) zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weiterführende Instruktionen.

## CentOS 6

Die folgenden Anweisungen gelten für CentOS 6 x86_64 (nur HandBrake [CLI](abbr:Command Line Interface - Kommandozeile)).

Grundvoraussetzungen um Kommandos zu starten:

- curl
- sudo (für standard user accounts)

Abhängigkeiten:

- Development tools
- Additional Development
- cmake
- git
- libicu-devel
- libogg-devel
- libsamplerate-devel
- libtheora-devel
- libvorbis-devel

Zusätzliche Abhängigkeiten die nicht im base repository verfügbar sind:

- fribidi-devel [EPEL]
- harfbuzz-devel [spec file]
- jansson-devel [EPEL]
- lame-devel [RPM Fusion]
- libass-devel [EPEL]
- opus-devel [EPEL]
- python27 [SCL]
- x264-devel [RPM Fusion]
- yasm [EPEL]

Abhängigkeiten installieren

    sudo yum groupinstall "Development tools" "Additional Development"
    sudo yum install cmake git libicu-devel libogg-devel libsamplerate-devel libtheora-devel libvorbis-devel

Installiere das [Software Collections (SCL)](https://wiki.centos.org/AdditionalResources/Repositories/SCL) Repository und Python 2.7.x[^python-centos-6].

    sudo yum install centos-release-scl
    sudo yum install python27

Installiere das [EPEL](https://fedoraproject.org/wiki/EPEL) Repository und zugehörige Abhängigkeiten.

    sudo yum install epel-release
    sudo yum install fribidi-devel jansson-devel libass-devel opus-devel yasm

Installiere das freie [RPM Fusion](http://rpmfusion.org) Repository und zugehörige Abhängigkeiten.

    sudo yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-6.noarch.rpm
    sudo yum install lame-devel x264-devel

Lade die HarfBuzz spec Datei vom CentOS 7 [rpms/harfbuzz](https://git.centos.org/summary/rpms!harfbuzz.git) git Repository und entferne die `graphite2-devel` Abhängigkeit.

    sudo mkdir -p /root/rpmbuild/SPECS
    sudo curl -o /root/rpmbuild/SPECS/harfbuzz.spec 'https://git.centos.org/raw/rpms/harfbuzz.git/f5bd1f4920ed0fc56cd21547294f7c34deeb4e4f/SPECS!harfbuzz.spec'
    sudo sed -i'' -e '/BuildRequires:[ ]*graphite2-devel/d' -e '/%configure/s/ --with-graphite2//' /root/rpmbuild/SPECS/harfbuzz.spec

Lade HarfBuzz herunter, baue und installiere es (stellt das `harfbuzz-devel` package zur Verfügung).

    sudo mkdir -p /root/rpmbuild/SOURCES
    sudo curl -o /root/rpmbuild/SOURCES/harfbuzz-0.9.36.tar.bz2 'https://www.freedesktop.org/software/harfbuzz/release/harfbuzz-0.9.36.tar.bz2'
    sudo rpmbuild -ba /root/rpmbuild/SPECS/harfbuzz.spec
    sudo find /root/rpmbuild/RPMS/x86_64 -name harfbuzz-*.rpm -exec sudo yum localinstall {} \;

Starte eine neue Shell mit Python 2.7 aktiviert.

    scl enable python27 bash

CentOS ist nun bereit die HandBrake [CLI](abbr:Command Line Interface) zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für mehr Instruktionen.

[^python-centos-6]: Python vom Centos [SCL](https://wiki.centos.org/AdditionalResources/Repositories/SCL) zu installieren beeinflusst nicht das Standard System Python; neuere Versionen werden neben der Systemversion installiert.
