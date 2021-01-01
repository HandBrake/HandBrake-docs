---
Type:            article
Title:           HandBrake herunterladen und installieren
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

HandBrake herunterladen und installieren
====================================

HandBrake ist für Linux, Mac und Windows auf der [HandBrake Webseite](https://handbrake.fr/) verfügbar.

Dies ist die einzige *offizielle* Downloadquelle für HandBrake. Für mehr Informationen, siehe [Wo kann ich HandBrake herunterladen](where-to-get-handbrake.html).

## Herunterladen

*HandBrake läuft auf den meisten modernen Computern. Um sicher zu gehen, dass dein System die Mindestanforderungen erfüllt, prüfe die [Systemanforderungen](../technical/system-requirements.html) in der technischen Dokumentation.*

Um HandBrake auf deinen Computer herunterzuladen, klicke auf den Download Knopf auf der [HandBrake Webseite](https://handbrake.fr/). Du kannst außerdem eine Version für ein bestimmtes Betriebssystem auf der [Downloads Seite](https://handbrake.fr/downloads.php) auswählen.

Fortgeschrittene Nutzer können HandBrakes [Nightly Builds](https://handbrake.fr/nightly.php)[^nightly-builds] ausprobieren.

## Download verifizieren

### Prüfsummen

Das HandBrake Team veröffentlicht [Prüfsummen für alle Downloads auf handbrake.fr](https://handbrake.fr/checksums.php) und im [Prüfsummen Artikel auf Github](https://github.com/HandBrake/HandBrake/wiki/Checksums). Du kannst diese Prüfsummen verwenden, um die Integrität der heruntergeladenen Dateien zu überprüfen.

<!-- .system-linux -->

Wenn du HandBrake auf Linux aus den offiziellen PPAs installierst, wird der Prüfsummencheck automatisch durchgeführt. Ähnlich wird die Integrität des Quellcodes gemanaged durch `git` automatisch durchgeführt.

Um einen offiziellen Quellcode-Tarball einer Distribution zu verifizieren, suche in der Dokumentation deiner Linux Distribution nach Instruktionen, wie Prüfsummen zu verifizieren sind.

<!-- /.system-linux -->

<!-- .system-macos -->

Auf Mac kannst du das Terminal aus dem Programme > Zubehör Ordner starten und den `shasum` Befehl verwenden. Falls du beispielsweise HandBrake in deinen Downloads Ordner heruntergeladen hast:

    shasum -a 1 ~/Downloads/HandBrake-*.dmg && shasum -a 256 ~/Downloads/HandBrake-*.dmg

Alternativ gibt es die gratis Drittanbieter Applikation [Hashsum](https://itunes.apple.com/us/app/hashsum/id1079442694?mt=12) im Mac App Store, welche über eine bequeme grafische Oberfläche zum Berechnen von Prüfsummen verfügt.

<!-- /.system-macos -->

<!-- .system-windows -->

Für Windows stellt Microsoft das Kommandozeilenwerkzeug [Microsoft File Checksum Integrity Verifier](https://www.microsoft.com/en-us/download/details.aspx?id=11533) zur Verfügung. Bitte besuche den zugehörigen [Microsoft help article](https://support.microsoft.com/en-us/help/841290/availability-and-description-of-the-file-checksum-integrity-verifier-utility) für mehr Informationen und Anwendungsinstruktionen.

Alternativ gibt es für Windows folgende Tools mit einer grafischen Oberfläche: [Compute Hash](http://www.subisoft.net/ComputeHash.aspx), [ExactFile](http://www.exactfile.com), und [MultiHasher](http://www.abelhadigital.com/multihasher)[^third-party-utilities-1].

<!-- /.system-windows -->

*Sollte die Prüfsumme nicht mit der vom HandBrake Team veröffentlichten übereinstimmen, solltest du die Datei löschen und den Download erneut versuchen.*

### OpenPGP

Das HandBrake Team veröffentlich außerdem [OpenPGP Signaturen für alle Downloads auf GitHub](https://github.com/HandBrake/HandBrake/releases). Mehr Informationen darüber findest du im englischsprachigen [OpenPGP Artikel auf GitHub](https://github.com/HandBrake/HandBrake/wiki/OpenPGP).

<!-- .system-linux -->

## Installieren unter Linux

Falls du bereits ein HandBrake Paket von deiner Distribution oder einem anderen Drittanbieter installiert hast, deinstalliere dies bitte bevor du fortfährst. Siehe den Abschnitt *Warnung über nicht funktionierende Drittanbieter Builds* auf der [Wo kann ich HandBrake herunterladen](where-to-get-handbrake.html) Seite für mehr Informationen.

### Ubuntu PPAs

Die folgenden Instruktionen sind für Ubuntu. Sie funktionieren möglichweise auch auf anderen `deb`-kompatiblen Distributionen. Für andere Distributionen, kompiliere bitte den [Offiziellen Quellcode](https://github.com/HandBrake/HandBrake).

Füge auf der Kommandozeile das [offizielle Release PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-releases) deinem System hinzu.

    sudo add-apt-repository ppa:stebbins/handbrake-releases
    sudo apt-get update

Falls du lieber die Nightly Builds von HandBrake haben möchtest, füge das [offizielle git-snapshots PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-git-snapshots) hinzu.

    sudo add-apt-repository ppa:stebbins/handbrake-git-snapshots
    sudo apt-get update

Installiere HandBrake.

    sudo apt-get install handbrake-cli handbrake-gtk

Starte `HandBrakeCLI` um HandBrake auf der Kommandozeile zu benutzen.

Starte `ghb` um HandBrake's grafische Benutzeroberfläche zu starten. Wenn du möchtest kannst du auch einen Rechtsklick auf das Icon machen und "Im Starter behalten" auswählen um HandBrake direkt aus der Leiste starten zu können.

### Flatpak Bundles

[Flatpak](https://flatpak.org/) Bundles von HandBrake für Linux gibt es auf der [HandBrake website](https://handbrake.fr/) und [Flathub](https://flathub.org/).

Installiere das `flatpak` Paket deiner Distribution bevor du folgende Kommandos ausführst.

Installiere das Flathub Repository auf der Kommandozeile.

    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

Installiere den aktuellsten HandBrake Release von Flathub.

    flatpak --user install flathub fr.handbrake.ghb

Du kannst später dein HandBrake Flatpak auf den neuesten Stand von Flathub bringen indem du folgenden Befehl ausführst.

    flatpak --user update fr.handbrake.ghb

Falls du lieber HandBrake's Nightly Builds verwenden möchtest, lade die aktuellste Version herunter und installiere sie (benötigt das `curl` Paket deiner Distribution).

    curl -O https://nightly.handbrake.fr/HandBrake-latest-master-x86_64.flatpak
    flatpak install HandBrake-latest-master-x86_64.flatpak

Starte `flatpak run fr.handbrake.ghb` um HandBrake's grafische Benutzeroberfläche zu verwenden, oder `flatpak run --command=HandBrakeCLI fr.handbrake.ghb` um die Kommandozeilenversion zu verwenden.

<!-- /.system-linux -->
<!-- .system-macos -->

## Installation auf Mac

Sobald du HandBrake für Mac heruntergeladen hast, öffne das Disk Image in deinem Downloads Ordner. Dein Webbrowser (z.B.: Safari, Firefox oder Chrome) könnte das auch automatisch für dich machen. Ziehe danach die HandBrake Applikation in deinen Applikationsordner.

![HandBrake Disk Image öffnen](../../../en/images/mac/download-file-1.1.0.png "Öffne das heruntergeladene Disk Image. Dein Webbrowser macht dies eventuell automatisch.")

![HandBrake unter Mac installieren](../../../en/images/mac/install-1.1.0.png "Ziehe HandBrake auf deinen Applikationsordner um es auf deinen Mac zu installieren.")

HandBrake ist jetzt installiert. Du kannst nun das Disk Image auswerfen und in den Papierkorb verschieben.

<!-- /.system-macos -->
<!-- .system-windows -->

## Installation unter Windows

Wenn du den HandBrake Installer heruntergeladen hast, klicke einfach doppelt auf das Programm.

Sollte HandBrake bereits auf deinem Computer installiert sein, fragt dich der Installer ob er die vorhergehende Version zuerst löschen soll. Wähle `OK` um fortzufahren und HandBrake's Lizenz zu lesen.

![HandBrake Windows Installer: ältere Versionen entfernen](../../../en/images/windows/uninstall-1.0.0.png "Der HandBrake Installer wird dich fragen ob er die alte Version von HandBrake entfernen soll bevor er mit der Installation der aktuellen Version fortfährt.")

![HandBrake Windows Installer](../../../en/images/windows/install-1-1.0.0.png "HandBrake's Windows Installer.")

Als nächstes wird dich der Installer fragen, wo du HandBrake installieren möchtest. Falls du keinen spezifischen Grund hast, dies zu ändern, wähle `Install` um fortzufahren. Sobald die Installation abgeschlossen ist, kannst du `Finish` auswählen um den Installer zu beenden.

![HandBrake für Windows Installations Fortschritt](../../../en/images/windows/install-2-1.0.0.png "Der Installer wird den Fortschritt anzeigen")

![HandBrake für Windows Installation abgeschlossen](../../../en/images/windows/install-finish-1.0.0.png "HandBrake ist nun installiert.")

Du findest Verknüpfungen um HandBrake zu starten am Desktop und im Startmenü.

<!-- /.system-windows -->

## HandBrake starten

Du kannst HandBrake starten, indem du schnell doppelt auf das Cocktail & Ananas Icon klickst. Abhängig von deinen Systemeinstellungen kann auch ein einzelner Klick genügen.

![HandBrake Icon](../../../en/images/icon-1.1.0.png)
![Doppelklick auf das HandBrake Icon](../../../en/images/icon-click-1.1.0.gif)

<!-- .continue -->

## Next steps

<!-- .success -->

Fahre fort zu [Updates suchen](check-for-updates.html).

<!-- /.success -->

<!-- /.continue -->

[^nightly-builds]: Nightly Builds basieren auf HandBrake's aktuellstem Quellcode, dies inkludiert neue und experimentelle Features, welche noch instabil oder grundlegend verschieden zum vorherigen Release sind. Obwohl jeder eingeladen ist sie auszuprobieren, sind Nightly Builds am besten für erfahrene Benutzer und Entwickler geeignet.

[^third-party-utilities-1]: HandBrake steht nicht in Verbindung mit irgendwelchen Prüfsummen Programmen von Drittanbietern. Verwende nur Software von Anbietern, denen zu vertraust.
