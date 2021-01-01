---
Type:            article
Title:           Fehlerbehebung bekannter Probleme
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

Fehlerbehebung bekannter Probleme
=============================

<!-- .system-linux -->

## HandBrake für Linux

### Kann HandBrake Executable nicht finden

Die grafische Benutzeroberfläche für HandBrake ist `ghb`. Öffne einfach dein Terminal und starte `ghb`.

Folge den Anweisungen deiner Distribution um HandBrake zu deinem Applikationslauncher hinzuzufügen.

### Allgemeine Fehlerbehebung

Probiere die folgenden Schritte aus bis HandBrake wieder funktioniert.

1. Stelle sicher, dass du eine offizielle HandBrake Version hast und nicht eine kaputte Drittanbieter Version; siehe [Wo bekomme ich HandBrake her](../get-handbrake/where-to-get-handbrake.html).
2. Starte deinen Computer neu
3. Lösche die Voreinstellungen und Konfigurationsdaten von HandBrake (setze für username deinen eigenen Namen ein)
    - /home/username/.config/ghb
4. Installiere die aktuellste Version von HandBrake; siehe [HandBrake herunterladen und installieren](../get-handbrake/download-and-install.html).

Falls diese Schritte nicht deine Fehler beheben, kann dir vielleicht jemand via den [Community support](community-support.html) Channels helfen.

<!-- /.system-linux -->
<!-- .system-macos -->

## HandBrake für Mac

### HandBrake startet nicht

HandBrake Versionen vor 1.1.0 und nightly Builds sind nicht mit einem Apple Developer Zertifikat signiert. Standardmäßig verhindert Gatekeeper unsignierte Applikationen vom Starten auf deinem Mac.

Mehr Informationen wie man HandBrake erfolgreich startet ist verfügbar unter [HandBrake herunterladen und installieren](../get-handbrake/download-and-install.html).

### Allgemeine Fehlerbehebung

Probiere die folgenden Schritte bis HandBrake wieder funktioniert.

1. Starte deinen Computer neu
2. Lösche deine HandBrake Voreinstellungen und Konfigurationsdaten (setze für username deinen eigenen Namen ein)
    - /Users/username/Library/Application Support/HandBrake
3. Installiere die neueste Version von HandBrake; siehe [HandBrake herunterladen und installieren](../get-handbrake/download-and-install.html).

Falls diese Schritte nicht deinen Fehler beheben, kann dir vielleicht jemand via den [Community support](community-support.html) Channels helfen.

<!-- /.system-macos -->
<!-- .system-windows -->

## HandBrake für Windows

### Microsoft .NET Framework herunterladen

Windows 10 liefert das Microsoft .NET Framework bereits mit. Updates gibt es für Windows 7 und 8.1 via Windows Update.

Zusätzlich kannst du einen der folgenden Microsoft .NET Framework Standalone installers herunterladen.

- [Microsoft .NET Framework 4.7.1](https://www.microsoft.com/en-us/download/details.aspx?id=56116) für Windows 7 SP1, Windows 8.1, Windows 10, und Windows Server
- [Microsoft .NET Framework 4.6](https://support.microsoft.com/en-us/help/3045557/microsoft-net-framework-4-6-offline-installer-for-windows) für Windows Vista SP2

### Allgemeine Fehlerbehebung

Probiere die folgenden Schritte bis HandBrake wieder funktioniert.

1. Starte deinen Computer neu
2. Installiere die neueste Version von Microsoft .NET Framework die für deine Windows Version verfügbar ist
3. Lösche deine HandBrake Voreinstellungen und Konfigurationsdaten (setze für username deinen eigenen Namen ein)
    - Windows Vista:
      - C:\Users\username\Application Data\HandBrake
      - C:\Users\username\Local Settings\Application Data\HandBrake
    - Windows 7 und neuer
      - C:\Users\username\AppData\Roaming\HandBrake
      - C:\Users\username\AppData\Local\HandBrake
3. Installiere die neueste Version von HandBrake; siehe [HandBrake herunterladen und installieren](../get-handbrake/download-and-install.html).

Falls diese Schritte nicht deinen Fehler beheben, kann dir vielleicht jemand via den [Community support](community-support.html) Channels helfen.

<!-- /.system-windows -->
