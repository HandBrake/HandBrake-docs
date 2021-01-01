---
Type:            article
Title:           Wo bekomme ich HandBrake her
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

Wo bekomme ich HandBrake her
======================

## HandBrake Releases und Nightly Builds

Offizielle [HandBrake Releases](https://handbrake.fr/downloads.php) und [Nightly Builds](https://handbrake.fr/nightly.php) gibt es für Linux, Mac und Windows.

HandBrake ist quelloffene Software lizensiert unter der GNU General Public License Version 2 (GPLv2)[^license]. Jeder kann HandBrake *gratis* herunterladen und benutzen.

<!-- .system-linux -->

Ubuntu Linux user sollten das [offizielle Release PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-releases) oder das [offizielle Snapshot PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-git-snapshots) installieren. Das PPA kann auch auf anderen Debian-kompatiblen Distributionen funktionieren, dies ist aber nicht getestet.

[Nightly Builds](https://handbrake.fr/nightly.php) für Linux sind auch als Flatpak Bundle verfügbar.

Nutzer anderer BSD- und \*nix-ähnlichen Distributionen können den Quellcode kompilieren.

<!-- /.system-linux -->

HandBrake's Quellcode ist abrufbar im offiziellen [HandBrake Repository auf GitHub](https://github.com/HandBrake/HandBrake).

Andere Versionen die über Drittanbieter installiert wurden, werden nicht unterstützt.

## Warnung über Betrugsversuche und Fälschungen

HandBrake ist *gratis* auf der [HandBrake Website](https://handbrake.fr/)[^checksums] verfügbar. Dies ist der *einzige* offizielle Download für HandBrake.

Sei vorsichtig bei Drittanbieter Webseiten und Peer-to-Peer Downloads von HandBrake. Diese könnnten ungewollte Extras wie zusätzliche Applikationen, [Ransomware](https://de.wikipedia.org/wiki/Ransomware), oder andere Arten von [Schadsoftware](https://de.wikipedia.org/wiki/Schadprogramm) enthalten. Das HandBrake Team hat keine Kontrolle über diese externen Services. Vermeide Sie!

Sei vorsichtig bei Online Marktplätzen und Auktionsseiten. HandBrake ist *freie Software*.

<!-- .system-linux -->

## Warnung über nicht funktionierende Drittanbieter Builds

Bestimmte BSD/Linux Distributionen und Package Repositories erstellen ihre eigene Version von HandBrake. Diese modifizierten Versionen sind oft verkrüppelt (Features aufgrund politischer Gründe entfernt) oder funktionieren nicht (enthalten Bugs herbeigeführt durch Modifikationen), und sollten vermieden werden.

Ausschnitt von disfunktionalen Drittanbieter Packages/Builds (nicht vollständig):

- Debian Multimedia: `handbrake`, `handbrake-cli`, `handbrake-gtk`
- FreeBSD: `handbrake`
- Gentoo: `handbrake`
- NixOS: `handbrake`
- openSUSE Packman: `handbrake`, `handbrake-cli`, `handbrake-gtk`
- RPM Fusion: `handbrake`, `handbrake-cli`
- Ubuntu Universe: `handbrake`, `handbrake-cli`, `handbrake-dbg`

Bitte frage **nicht** nach Support für diese oder andere unoffizielle Versionen. Das HandBrake Team hat keinerlei Kontrolle über sie und kann deshalb auch keinen sinnvollen Support leisten.

BSD Nutzer sollten vom [Offiziellen Quellcode](https://github.com/HandBrake/HandBrake) kompilieren.

Linux Nutzer sollten das [offizielle Release PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-releases), beziehungsweise das [offizielle snapshot PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-releases) installieren, oder den [offiziellen Quellcode](https://github.com/HandBrake/HandBrake) kompilieren.

<!-- /.system-linux -->

<!-- .continue -->

## Nächste Schritte

<!-- .success -->

Fahre fort zu [HandBrake herunterladen und installieren](download-and-install.html).

<!-- /.success -->

<!-- /.continue -->

[^license]: Für mehr Informationen über die Lizenz, lese dir die [LICENSE](https://github.com/HandBrake/HandBrake/blob/master/LICENSE) durch oder eine [englische Zusammenfassung](https://tldrlegal.com/license/gnu-general-public-license-v2).

[^checksums]: Heruntergeladene Dateien sollten mit den [offiziellen Release Prüfsummen](https://handbrake.fr/checksums.php) übereinstimmen, die auf der offiziellen HandBrake Seite veröffentlicht werden. Heruntergeladene Dateien ohne gelistete Prüfsumme könnten manipuliert worden sein.
