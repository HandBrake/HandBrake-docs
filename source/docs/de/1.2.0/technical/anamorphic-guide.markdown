---
Type:            article
State:           [ obsolete ]
Title:           Anamorphic Guide
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.2.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Anamorphic Guide
=============================

Kurzes Visuelles Beispiel
--------------------------

Diese sind auf 50% der Größe herunterskaliert falls du es nicht bemerkt hast.

Hier ist die Größe eines Filmes von einer DVD. Auf der Disk ist der Film verzerrt. Anstatt ein echtes Breitbildformat zu haben, ist es in einen schmaleren Frame hineingepresst.

![Datei Auflösung](../../../en/images/anamorphic/storage_size.png)

Um die korrekte Form wiederherzustellen kannst du einerseits das Bild vertikal zusammendrücken oder das Bild horizontal in die Länge ziehen. Das eine verkleinert das Bild, das andere vergrößert es.

Hier ist die Auflösung eines Filmes welcher vertikal zusammengedrückt wurde. Dies verkleinert das Bild. Beachte wie die Breite gleichbleibt aber die Höhe reduziert wird:

![Korrigierte Bildschirmauflösung](../../../en/images/anamorphic/storage_size.png)

Hier ist die Auflösung eines Filmes welcher horizontal in die Länge gezogen wurde -- HandBrake's Standardeinstellung. Dies erweitert das Bild. Beachte, dass die volle Höhe des Bildes beibehalten wird.

![Anamorphic Bildschirmauflösung](../../../en/images/anamorphic/storage_size.png)

Anamorphic in HandBrake bedeuted das verzerrte Bild der DVD zu kodieren, aber dem Videoplayer zu sagen, dass er es ausdehnen sollte wenn du es ansiehst. Daraus resultiert dann das große Breitbild.

Anamorphic PAR aktivieren
--------------------------

Du kannst Anamorphic in den Bildeinstellungen Tab im Hauptfenster aktivieren.

Anamorphic DVDs
--------------------------

Ein Bild ist auf einer DVD mit einer Auflösung von 720x480 (NTSC) oder 720x576 (PAL) Pixel gespeichert. Ich befinde mich in Nordamerika darum verwende ich die NTSC Zahlen in meinen Beispielen (Siehe den PAL Appendix für die Differenzen).

So sieht ein Bild von einer NTSC DVD aus (für mehr Informationen über Nicht-Anamorphische DVDs, siehe den Hard Letterboxing Appendix):

![Anamorphic DVD Beispiel](../../../en/images/anamorphic/storage_size.png)

Siehst du wie verzerrt es ist? Dies ist der "anamorphic" Teil. DVDs werden mit einem Seitenverhältnis von 1.5:1 gespeichert.

## Seitenverhältnis (Aspect Ratio)

Warte, Seitenverhältnis? Was ist das?

Seitenverhältnis ist die Breite dividiert durch die Höhe. DVDs werden mit einer Auflösung von 720 * 480. gespeichert und 720 / 480 = 1.5. Das bedeuted, dass das Video 1.5 mal so breit wie hoch ist.

Aber das Video ist nicht dafür gedacht mit einem 1.5:1 Seitenverhältnis angesehen zu werden. Es ist nich breit genug für Filme und Breitbildschirme und zu breit für Standard TV. Ein gängiges Seitenverhältnis für Breitbild ist 1.78:1 oder 16/9. Dies ist das native Seitenverhältnis von Breitbildschirmen. Standardfernseher verwenden ein Seitenverhältnis von 4/3 (1.33:1).

DVD Video hat ein Seitenverhältnis Flag welches dem DVD Player sagt wie er das Bild verzerren muss um das originale Seitenverhältnis des Filmes wiederherzustellen. Dieses Flag ist entweder 4/3 oder 16/9.

Natürlich sind viele Filme breiter als 16/9. Ein beliebtes Seitenverhältnis ist 2.35:1 welches ein gutes Stück breiter ist. Wenn so ein Film auf einer DVD abgespeichert wird, bekommt es auch das 16:9 Seitenverhältnis Flag. Logischerweiße ist der Inhalt selbst breiter. Um das auszugleichen werden oben und unten im Bild schwarze Ränder angezeigt (letterboxin). Dies kann schwer zu verstehen sein. Zumindest war es das für mich. Deshalb werde ich das ganze mit ein paar umformulierten Sätzen wiedergeben.

## Letterboxing

Wenn anamorphic DVD Inhalte für Breitbildschirme ausgedehnt wird, wird es *immer* auf 854 * 480 ausgedehnt. 480 ist zu "hoch" für Filme die breiter als 16:9 sind. Um es "kürzer" zu machen werden oben unt unten im Video schwarze Linien eingezogen. Es macht also keinen Unterschied ob ein Film ein Seitenverhältnis von 1.78:1, 1.81:1 oder 2.35:1 hat, es wird immer mit einer Breite von 854 Pixel dargestellt. Die sichtbare Bildhöhe (wenn man das letterboxing entfernt) wird kürzer und kürzer um in das Seitenverhältnis zu passen - 480, 460 und 360 aufeinanderfolgend. (Diese Höhe und Breitenwerte sind nur angenähert. Für Details siehe das Macroblock Appendix.)

Die gespeicherte Breite ist die Breite des sichtbaren Bildes auf der DVD (fast immer 720) und die (gezeigte) Bildschirmbreite ist 854 (gespeicherte Höhe von 480 mal 16/9). Die (gezeigte) Bildschirmhöhe ist die Höhe des sichtbaren Bildes auf der DVD (nach dem entfernen der schwarzen Ränder/Balken). Dies ist ungefähr gleich wie die Bildschirmbreite dividiert durch das Seitenverhältnis des Filmes.

## Was passiert auf einem Fernseher

Wenn du die DVD auf einem 16:9 Breitbildschirm Fernseher abspielst, behält er die Höhe bei und dehnt die Breite (854 * 480). Dies ist das was gemeint wird, wenn eine DVD behaupted "für Breitbildschirme verbessert" zu sein. Wenn du die DVD auf einem Standard 4:3 Fernseher abspielst, reduziert er die Breite auf 640 (das Maxmimum für einen standard Fernseher) und drückt die Höhe auf 360 herunter um das Seitenverhältnis beizubehalten.

Beide Wege stellen das Seitenverhältnis des Filmes wieder her. Die erste Option multipliziert die Höhe (480) mit einem 16:9 Seitenverhältnis und benützt dies als die Breite. Die zweite Option nimmt die Breite (720), reduziert es auf die maximale Breite eines standard Fernsehers (640), dividiert es durch das Seitenverhältnis des Filmes (1.78:1 bzw. 16:9) und nimmt das als die Höhe.

## Flexibilität
Um dies auf eine andere Art und Weise auszudrücken, bedeuted "anamorphic", dass der Film nicht eine einzelne native Form hat die du ansehen kannst. Stattdessen verändert es seine Form. Falls du es auf einem Standard Fernseher ansiehst, passt es sich der Auflösung an gleich wie wenn du es auf einem Breitbildschirm ansiehst.

Was passiert wenn anamorphic ausgeschalten ist
-------------------------------------------
Wenn anamorphic abgeschalten ist, korrigiert HandBrake das Seitenverhältnis indem es die Breite beibehält und die Höhe verringert. Das Resultat sieht wie folgt aus:

![Anamorphic abgeschalten](../../../en/images/anamorphic/storage_size.png)

Was hier geschieht ist ähnlich zu dem abspielen einer DVD auf einem standard 4:3 Fernseher. Der einzige Unterschied dabei ist, dass HandBrake die Breite bei 720 belasst, anstatt sie auf 640 zu reduzieren. Deshalb wird 720 durch das Seitenverhältnis dividiert und ergibt somit eine Auflösung von 720 * 404. (Falls du mir nicht glaubst und es selbst getestet hast und eine Breite von 704 oder eine Höhe von 400 erhalten hast, siehe bitte den Appendix über Macroblocks).

Natürlich bedeuted dies, dass du die Anzahl der vertikalen Linien von 480p auf 404p reduzierst ... ein signifikanter Qualitätsverlust.

Um dies zu verhindern gibt es noch mehrere Videos ein anamorphisches Video zu kodieren.

Anamorphische Kodierungsmethoden
-------------------------------------------

### Crude anamorphic
Der grobe Weg (welcher leicht von der !HandBrakeCLI erreicht werden kann) ist die Höhe beizubehalten und die Breite des Frames auf 854 zu erzwingen (für Details siehe den CLI Appendix). Das Problem hier ist, dass du am Ende ein Video abspeicherst welches eine höhere Auflösung als die DVD Quelle hat - dadurch benötigt es natürlich mehr Speicherplatz. Statt einem 720 * 480 oder 720 * 404 Frame endest du also mit einem 854 * 480 Frame.

### Strict anamorphic
Die zweite Methode ist weniger verschwenderisch. Warum nicht dasselbe tun wie die DVD? In einem Seitenverhältnis abspeichern und in einem anderen wiedergeben.

Mit dieser Methode kannst du den vollen Frame der DVD beibehalten ohne ihn unter einer großeren Auflösung abzuspeichern. Verglichen mit 854 * 480 verringert 720 * 480 die Dateigröße und es wird die exakt gleiche Qualität beibehalten.

Wie erreichen wir so etwas?

Video auf einem Computer wird in einer Container datei gespeichert. Das kann .mp4, .mkv, .avi, .ogm oder etwas anders sein. In diesem Container befinden sich Spuren (Tracks) oder Streams. Üblicherweise enthält ein Container eine Videospur und eine Audiospur.

Die intelligente Art und Weise Anamorphic zu handhaben ist, die Informationen zur Darstellung in der Videospur zu speichern. Und genau das macht HandBrake:

![Anamorphic Strict](../../../en/images/anamorphic/storage_size.png)

### Pixel Seitenverhältnis
In Wahrheit werden 720 * 480 dargestellt. Nur sagt die Videospur VLC: "Stelle dies mit breiten Pixeln dar anstatt mit den quadratischen die du sonst siehst." Deshalb sieht man statt einem Bild mit quadratischen Blöcken ein Bild mit breiten rechteckigen Blöcken.

Weil Computer bei Videos an quadratische Pixel denken, muss VLC herausfinden welche Aufreihung von quadratischen Pixeln notwendig ist um das Bild in seinen korrekten Dimensionen zu reproduzieren. Es macht dies indem es die gespeicherte Breite (720) mit einem Verhältnis multipliziert: dem Pixel Seitenverhältnis oder PAR(abbr:Pixel Aspect Ratio). Standardmäßig ist das PAR 1:1. Mit diesem Verhältnis siehst du das was du bekommst - quadratische Pixel. Das Video wird unter denselben Dimensionen gespeichert und abgespielt.Um 16:9 Pixel von 1:1 Pixel wiederherzustellen, muss das Verhältnis 32/27 (16 * 2 / 9 * 3) betragen. Für alle 32 quadratische Pixel in der Breite werden 27 quadratische Pixel in der Höhe verwendet. Das weißt du bereits, anders formuliert: es produziert das gleiche Resultat wie wenn die Höhe (480) mit 16/9 multipliziert wird. Multippliziere 720 mit 32 und dividiere es durch 27 und du bekommst 854, die Anzeigebreite in quadratischen Pixeln.

Das ist anamorphisches PAR und es ist sehr, sehr sexy.

### Die Schattenseite von strict anamorphic
Strict Anamorphic konzentriert sich auf genau eine einzige Sache: das exakte sichtbare Bild einer DVD beizubehalten und es in derselben Größe darzustellen, wie wenn es von der DVD abgespielt wird.

Das bedeuted, dass es manchmal komische Dimensionen verwenden wird. Damit sind Dimensionen gemeint, die sich nicht restlos durch 16 teilen lassen. Wenn das passiert, können die Videokodierer nicht so effizient arbeiten - x264 warnt, dass "die Kompression darunter leiden wird".

Es bedeuted zudem, dass wenn strict anamorphic verwendet wird, es unmöglich ist, die gespeicherte Größe des kodierten Bildes zu ändern. Es wird einfach die exakte Bildgröße der DVD verwendet und cropping (abschneiden) angewendet.

### Loose anamorphic
Loose anamorphic beginnt in derselben Art und Weise wie strict -- mit dem exakten sichtbaren Bild der DVD. Aber wenn die Dimensionen angepasst werden, wird sichergestellt, dass sie restlos durch 16 teilbar sind. Danach wird die Bildgröße angepasst, so dass das Seitenverhältnis mit den neuen Dimensionen beibehalten wird.

Du kannst zudem die Breite des gespeicherten Frames mit loose anamorphic skalieren. Beispielsweise hat ein vollskaliertes Bild eine Breite von 720. Du könntest das auf 640 herunterskalieren. HandBrake behält auch automatisch das Seitenverhältnis des gespeicherten Frames bei. So wie das vollskalierte Bild 720 * 480 (ein 1.5:1 Seitenverhältnis) ist, würde das herunterskalierte 640 * 320 sein (so nahe wie man an das 1.5:1 Seitenverhältnis rankommt, wenn man die Dimensionen restlos durch 16 teilbar lassen muss). HandBrake berechnet dann die passende Größe für das skalierte Bild, welches das Seitenverhältnis der Quelle beibehält.

Es gibt kleine Unterschiede in der Ausgabe von loose versus strict aber die sind was für Streber. Nur die interessierten und schlaflosen müssen sich mit der Erklärung dafür in dem ITU Appendix abgeben.

Was ist mit QuickTime? Und iPods? Und AppleTVs? Und iPhones?
----------------------------------------------------------------
Um Anamorphisches Video in QuickTime darzustellen, fügt HandBrake dem .mp4 Container extra Informationen hinzu und hüllt damit das Video ein - dies wird Picture Aspect Atom genannt.

Dies ist anders als die Information in dem Videostream, erreicht aber denselben Effekt.

Auf diese Art und Weise erzeugt HandBrake anamorphisches Video, welches mit QuickTime, iPods, iPhones, AppleTVs und quelloffenen Videoplayern wie VLC und MPlayer abgespielt werden kann.

Mehr Lesematerial
-----------------

[Wikipedia: Anamorphic Widescreen](https://en.wikipedia.org/wiki/Anamorphic_widescreen)

Appendizes
-----------------

## Kommandozeile (CLI)

### Erzwungenes Ausdehnen zu anamorphic in HandBrakeCLI
Es ist sehr einfach. Du musst einfach nur die sichtbare Framehöhe angeben. Angenommen dein Kommando ist:

    ./HandBrakeCLI -i dvd -o film.mp4

Was du für anamorphisches Kodieren hinzufügst, hängt von dem Seitenverhältnis des Filmes ab.

   - 1.78:1 bedeuted "-l 480" ans Ende des Kommandos anzufügen
   - 1.85:1 bedeuted "-l 460" hinzuzufügen
   - 2.35:1 bedeuted "-l 360" hinzuzufügen

Für einen 1.85:1 Film würde dein Kommando also wie folgt lauten:

    ./HandBrakeCLI -i dvd -o film.mp4 -l 460

Dadurch erhälst du Ausgabedimensionen von 854 * 460. Das bedeuted, dass du einen Film mit einer 33% größeren Framegröße speicherst als es auf der DVD ist. Verwende es also nur um herumzuspielen. Es verschwendet einfach nur Speicherplatz.

Stattdessen verwende...

### Anamorphic PAR in HandBrakeCLI
Dies ist noch einfacher. Für strict anamorphic füge einfach ein "-p" hinzu:

    ./HandBrakeCLI -i dvd -o film.mp4 -p

Und für loose anamorphic verwendest du ein "-P":

    ./HandBrakeCLI -i dvd -o film.mp4 -P

Dies erzeugt einen Film mit den Dimensionen 720 * 480 (für einen 1.78:1 NTSC Film) aber in QuickTime, VLC und MPlayer wird es als 854 * 480 angezeigt. Das ist dieselbe Anzeige, die du mit einer erwzungenen anamorphic DVD erhälst, ohne ein 33% größeres Bild abzuspeichern.

Beachte, dass du beim Verwenden von loose anamorphic auch eine zu verwendende Breite angeben kannst. Zusätzlich kannst du die Zahl angeben durch die die Dimensionen restlos teilbar sein sollen. Standardmäßig ist dies 16, die Größe von MPEG Macroblocks. Es wird als ein optionales Argument für -P übergeben.

Um beispielsweise ein Frame mit einer Größe von 640 * 424 anamorphic zu kodieren, könntest du folgendes verwenden:

    ./HandBrakeCLI -i dvd -o film.mp4 -w 640 -P=8

## Hard Letterboxing Appendix
Manche Breitbild DVDs, speziell ältere, sind nicht anamorphisch. Diese DVDs sind speziell dafür designed auf einem standard 4:3 Fernseher abgespielt zu werden. Das "Seitenverhältnisflag" für diese Disks ist auf 4:3 gesetzt obwohl das Seitenverhältnis des Filmes breiter ist.

![Hard Letterbox](../../../en/images/anamorphic/storage_size.png)

Wenn du es auf einem quadratischen Standardfernseher abspielst ist alles gut. Beim Abspielen auf einem Breitbildschirm wirst du jedoch nicht nur oben und unten im Bild schwarze Balken bekommen sondern auch an den Seiten. Dies gibt dir ein kleineres Bild. Diese Balken auf den Seiten werden auch oft als "Pillars" bezeichnet. Diese Technik wird oft im Fernsehen verwendet um 16/9 Inhalte auf standard definition geräte zu übertragen. Weil es noch ein kleiners Bild gibt als Letterboxing, wird es manchmal als postage-stamping bezeichnet.

## Macroblock Appendix
MPEF Video Kodierer (wie den MPEG-2 der von DVDs verwendet wird oder die MPEG-4 Varianten die von HandBrake utilisiert werden) arbeiten mit Blöcken aus einem Bild. Das gesamte Bild wird zu einem Gitter aus 16x16 Blocks. Diese Blöcke werden als Makroblöcke bezeichnet. Wenn du ein Video kodierst, muss du Werte für Höhe und Breite verwenden die ein Vielfaches von 16 sind. Wenn die Höhe oder Breite nicht restlos durch 16 teilbar ist (also Rest übrigbleibt), muss der Kodierer zusätzliche "Müll" Informationen für die Kanten des Bildes erfinden. Dies erhöht die Dateigröße oder verringert die Videoqualität, je nachdem ob du eine konstante Qualität oder eine Bitrate definiert hast.

Ein unglücklicher Nebeneffekt davon ist, dass Seitenverhältnisse nur ungefähr verarbeitet werden können. 720 * 360 sind die Dimensionen eines 2.35:1 Filmes nach dem Abschneiden. Weil 360 jedoch nicht durch 16 teilbar ist, muss die Höhe entweder auf 368 erhöht werden oder auf 352 verringert werden. Plötzlich ist das Seitenverhältnis 2.32:1.

Deshalb bekommst du manchmal eine Ausgabe mit einer Breite von 704 für einen 1.78:1 Film, wenn du HandBrake mit deaktiverter anamorphischer Kodierung verwendest. Aus welchem Grund auch immer hat HandBrake entschieden, dass es eine Breite benötigt die ein wenig kleiner als 720 ist. Aber um die Anforderungen für Makroblocks perfekt zu erfüllen, müssen Breiten restlos durch 16 teilbar sein. 704 ist die nächstmögliche Breite unter 720.

Gleichfalls wäre die perfekte Höhe 404 für einen Film der 720 Pixel breit ist und ein Seitenverhältnis von 1.78:1 hat. Diese Zahl ist jedoch offensichtlich nicht restlos teilbar durch 16. 400 ist es aber.

Wenn "strict anamorphic" verwendet wird, ignoriert Handbrake die Makroblock Anforderungen für anamorphisches Kodieren. Die top Priorität ist hier die Preservierung von dem sichtbaren Bild mit einem präzisen Seitenverhältnis.

Wenn "loose anamorphic" verwendet wird, nimmt HandBrake Dimensionen die sauber durch 16 teilbar sind. Mit der CLI kannst du außerdem eine andere Zahl angeben. Machmal kann ein Wert von 8 statt 16 dabei helfen, Dimensionen zu ermöglichen, die näher an dem korrekten Seitenverhältnis liegen.
