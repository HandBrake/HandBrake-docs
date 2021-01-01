---
Type:            article
Title:           Clear Abhängigkeiten Installieren
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        German
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Clear Abhängigkeiten Installieren
================================

Folgende Anweisungen gelten für [Clear](https://clearlinux.org) 31140 oder neuer.

Grundlegende Voraussetzungen um Kommandos starten zu können:

- curl
- sudo (für normale user accounts)

Abhängigkeiten:

- dev-utils
- dev-utils-dev
- devpkg-fribidi
- devpkg-jansson
- devpkg-libass
- devpkg-libogg
- devpkg-libsamplerate
- devpkg-libtheora
- devpkg-libvorbis
- devpkg-libvpx
- devpkg-opus
- devpkg-speex

Zusätzliche Abhängigkeiten die nicht im base repository verfügbar sind:

- lame
- x264

Abhängigkeiten für die grafische Benutzeroberfläche:

- desktop-dev

Intel Quick Sync Video Abhängigkeiten (optional):

- devpkg-libva
- devpkg-libdrm

Abhängigkeiten installieren.

    sudo swupd update
    sudo swupd bundle-add dev-utils dev-utils-dev devpkg-fribidi devpkg-jansson devpkg-libass devpkg-libogg devpkg-libsamplerate devpkg-libtheora devpkg-libvorbis devpkg-libvpx devpkg-opus devpkg-speex

Abhängigkeiten, welche nicht im base repository vorhanden sind, bauen und installieren.

    # lame
    curl -LO https://sourceforge.net/projects/lame/files/lame/3.100/lame-3.100.tar.gz
    tar -xf lame-3.100.tar.gz
    cd lame-3.100
    ./configure --enable-shared --enable-static --enable-nasm
    make -j$(nproc)
    sudo make install-strip
    cd ..

    # x264
    curl -LO https://download.videolan.org/pub/videolan/x264/snapshots/last_stable_x264.tar.bz2
    mkdir x264-snapshot-stable
    tar -xf last_stable_x264.tar.bz2 --directory x264-snapshot-stable --strip-components=1
    cd x264-snapshot-stable
    ./configure --enable-shared --enable-static --enable-lto --enable-pic --enable-strip
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

Um die GTK [GUI](abbr:grafische Benutzeroberfläche) zu bauen, installiere die zugehörigen Abhängigkeiten.

    sudo swupd bundle-add desktop-dev

Für Intel Quick Sync Video Unterstützung, installiere die QSV Abhängigkeiten.

    sudo swupd bundle-add devpkg-libva devpkg-libdrm

Clear ist jetzt bereit HandBrake zu bauen. Siehe [HandBrake für Linux bauen](build-linux.html) für weitere Instruktionen.
