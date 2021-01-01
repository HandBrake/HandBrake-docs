---
Type:            article
State:           [ obsolete ]
Title:           Konstante Qualität vs Durchschnittliche Bitrate
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.1.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Konstante Qualität vs Durchschnittliche Bitrate
====================================
HandBrake unterstützt zwei Modi für die Kodierung von Video.

-   Mit der Durchschnittlichen Bitrate kannst du die Größe der Ausgabedatei kontrollieren aber gibst dafür die Kontrolle über die Videoqualität auf.
-   Konstante Qualität macht genau das Gegenteil. Du spezifizierst einen Qualitätsgrad und HandBrake passt die Bitrate (und dadurch auch die Dateigröße) an um die Qualität zu erreichen.

## Konstante Qualität

### Vorteile gegenüber Durchschnittliche Bitrate
-   Schnellere Kodierung - Man benötigt keine 2-Pass Kodierung (dadurch wird die Kodierungszeit fast halbiert). Konstante Qualität kann dieselbe Qualität wie eine 2-Pass Kodierung erreichen.
-   Verkleinerte Dateigröße - Videos haben meistens einen Mix aus komplexen und weniger komplexen Bildern (Frames). Letzteres benötigt eine geringere Bitrate um einen spezifizierten Qualitätsgrad zu erreichen. Falls weniger komplexe Bilder nicht Bits verschwenden, verkleinert sich die Dateigröße ohne einen Qualitätsverlust.

### Ausgabedateigrößen
Weil eine unterschiedliche Bitrate verwendet wird um einen gegebenen Qualitätsgrad für einen beliebigen Teil eines Filmes zu erreichen, ist die Dateigröße nicht vorhersehbar und variiert von Quelle zu Quelle.

Beispiel: Wenn du 2 Quellen mit derselben Länge hast, kann eines davon kodiert eine Größe 1.2GB, das andere hingegen eine Größe von 1.9GB erreichen. Die Differenz ist hängt mehr oder weniger von der Quelle ab. Falls deine Quellen ziemlich konsistent sind, wirst du auch Dateigrößen bekommen die fast gleich sind.

Um genau zu sein verbrauchen verrauschte Quellen allgemein mehr Speicherplatz, da sie eine höhere Bitrate benötigen um das ganze Detail des Videos beizubehalten. In diesem Fall könntest du probieren, den "Denoise" Filter zu aktivieren oder den RF Wert um ein, zwei Punkte zu verringern.

Nur weil eine Datei viel kleiner als eine andere mit spezifizierter Größe ist, bedeuted dies nicht, dass die Qualität schlechter ist. Es ist nur effizienter kodiert.

### Empfohlene RF Werte für x264
Der Qualitätsregler reicht von 51 (niedrige Qualität) bis 0 (hohe Qualität). Für Ausgaben mit einer guten Qualität und einer vernünftigen Dateigröße sind folgende Werte empfohlen.

Empfohlene Werte für x264 sind:
-   Standard Definition (z.B.: DVD's) verwenden RF Werte von 20 +/- 1. Beispiel: 20 verschiedene Quellen mit der AppleTV2 Voreinstellung und einem RF Wert von 20 benötigen rund 925MB pro Stunde eines Videos. (Mininum: 625MB/h, Maximum: 1.503MB/h).
-   High Definition (z.B.: Blu-Rays 720/10180) verwenden RF Werte von 22 +/- 1. Da HD Quellen eine hohe Qualität haben, ist es nicht allzu schlimm, einen etwas höheren RF Wert zu verwenden als für SD Inhalte ohne einen bemerkbaren Unterschied in Qualität hervorzurufen.

Beachte, dass der Qualitätsregler für x264 nicht linear ist. Er ist logarithmisch (wie die Richter Skala oder ph Werte). Dies bedeuted, dass kleine Änderungen in den Werten größe Auswirkungen haben können. Die kannst die Granularität des Reglers in den Einstellungen festlegen.

Du kannst ein paar Kapitel einer Quelle testweise mit unterschiedlichen Qualitätswerten kodieren falls die oben aufgeführten Werte für dich nicht passen. Einen 10 minütigen Ausschnit aus der Mitte deiner Quelle zu kodieren sollte dir einen guten Eindruck von der zu erwartenden Qualität liefern.

### x264 und RF 0
RF 0 verwendet keine Komprimierung. Es ist verlustfrei: es komprimiert die Quelle ohne praktischen Detailverlust.

Solltest du also einen RF Wert von 0 verwenden um die Qualität beizubehalten? Nein. Definitiv nicht. Um genau zu sein wirst du auf diesem Wege ein Video erhalten, welches weit größer als die DVD ist ohne besser auszusehen.

DVDs verwenden verlustbehaftete Komprimierung um die rohe Quelle der Studios die sie erzeugen zu verkleinern. Ähnlich einem RF Wert von 20. Es verwirft Detail. Wenn HandBrake das Video vor der Konvertierung dekomprimiert, ist die Qualität die beim Erzeugen der DVD verloren gegangen ist, immer noch verloren. Wenn du einen RF Wert von 0 für x264 verwendest, sagst du x264, dass es das dekodierte unkomprimierte Video verlustfrei beibehalten sollte und nicht die DVD. Beide haben dieselbe Bildqualität aber das unkomprimierte Video verbraucht viel mehr Speicherplatz.

Um das Ganze noch mal zusammenzufassen: Wenn du von einer DVD Quelle konvertierst gibt es keinen Grund, einen Wert über \~19 zu verwenden, was ungefähr der Wert ist, mit dem die DVD komprimiert wurde. Wenn du höher gehst wird eine Ausgabe größer als deine Quelle!

### Empfohlene Werte für andere Kodierer

[TODO]

## Durchschnittliche Bitrate
Wenn du nicht unbedingt eine bestimmte Dateigröße erreichen willst (was wir nicht empfehlen) ist es empfohlen, Einstellungen für Konstante Qualität zu verwenden.

Die Bitrate ist die Anzahl an Bits die für ein Video in einer Sekunde benötigt werden. Vergiss jedoch nicht, dass die Bitrate zwischen \~34-30 Frames aufgeteilt wird. Wenn du eine durchschnittliche Bitrate angibst, wird der Kodierer die Anzahl der Bits für einen beliebigen Teil des Videos variieren aber versuchen, als Durchschnitt die angegebene Zahl zu erreichen.

-   Die Bitrate kann in dem "Video" Tab gesetzt werden.
-   Es ist empfohlen 2-Pass (2 Durchgänge) Kodierung zu verwenden.
-   Dies bietet eine bessere Qualität und eine bessere Verteilung der Bitrate. Ein einzelner Durchgang wird suboptimale Resultate erzielen.
    -   Die "Turbo" Option beschleunigt den ersten Durchlauf auf Kosten der Qualität. Meistens ist der Verlust minimal und nicht vom Betrachter zu erkennen.
-   Der Nachteil ist, dass es doppelt so lange zum Kodieren braucht.
