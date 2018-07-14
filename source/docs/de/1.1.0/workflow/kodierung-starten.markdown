---
Type:            article
Title:           Kodierung starten
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        German
Language_Code:   de
Authors:         [ Bernhard Rader <b.rader@gmx.at> (raderb), Bradley Sepos <bradley@bradleysepos.com> (BradleyS) ]
Copyright:       2018 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Kodierung starten
=================

Da du nun all deine Einstellungen angepasst hast, ist es Zeit, dein Video zu erstellen!

## Ziel auswählen

HandBrake nennt den Dateinamen und den Speicherort deines neuen Videos das `Ziel`.

`Speichern als` ist der Dateiname deines Videos. Du kannst ihn ändern indem du das Textfeld bearbeitest.

`In` ist der Speicherort an dem HandBrake dein neues Video ablegen wird. Du kannst auf den `Durchsuchen...` Knopf klicken um den Speicherort abzuändern.

<!-- .system-macos -->

![Selecting a destination](../../images/mac/destination-field-1.1.0.png "The Destination is where HandBrake will place your new video.")

<!-- /.system-macos -->

Bitte *merke dir deinen Speicherort*. Sonst könntest du später dein neues Video nicht mehr finden. Du kannst es später noch verschieben wenn du möchtest.

## Kodierung starten

Wähle den `Start` Knopf in der Werkzeugleiste um dein neues Video zu erstellen.

<!-- .system-macos -->

![Main window toolbar](../../images/mac/toolbar-1.1.0.png "The Toolbar provides easy access to HandBrake's most common functions.")

<!-- /.system-macos -->

Ein Video zu kodieren benötigt sehr viel Computer Ressourcen und kann eine Weile dauern. Manche Videos brauchen nur Minuten, andere Stunden.[^encoding-time]

<!-- .system-macos -->

![Encode progress](../../images/mac/encode-progress-1.1.0.png "HandBrake reports its progress during encoding.")

![Encoding complete alert](../../images/mac/encode-complete-1.1.0.png "HandBrake shows a notification when finished encoding.")

<!-- /.system-macos -->

HandBrake zeigt den Fortschritt während des Kodierungsprozesses an und wird dich benachrichtigen, wenn es fertig ist. Dann kannst du dein Video unter dem ausgewählten `Ziel` finden.

<!-- .system-macos -->

![Destination in Finder](../../images/mac/destination-finder-1.1.0.png "Your new video is located at the Destination you specified.")

<!-- /.system-macos -->

Gratulation! Du hast soeben dein erstes Video mit HandBrake kodiert. Es ist nun bereit auf deinen Geräten angesehen zu werden.

<!-- .continue -->

## Nächste Schritte

<!-- .success -->

Fahre fort zu [Mehrere Kodierungsprozesse mit der Warteschlange](../erweitert/warteschlange.html).

<!-- /.success -->
<!-- .fail -->

Falls du dein Video nicht wie erwartet bekommen hast, ein Fehler aufgetreten ist, oder du auf andere Probleme gestoßen bist, kannst du weiterlesen um mehr darüber zu erfahren, wie HandBrake arbeitet oder dir gleich die [Fehlerbehebung bekannter Probleme](../hilfe/fehlerbehebung-bekannter-probleme.html) durchlesen.

<!-- /.fail -->

<!-- /.continue -->

[^encoding-time]: Die Kodierungszeit hängt von vielen Faktoren ab, inklusive Länge, Auflösung und Komplexität deiner `Quelle`; die Einstellungen die für dein neues Video angewendet werden; und die Geschwindigkeit und Leistung deines Rechners.
