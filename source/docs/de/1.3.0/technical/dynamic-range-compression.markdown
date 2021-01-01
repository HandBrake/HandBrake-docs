---
Type:            article
State:           [ draft ]
Title:           DRC - Dynamic Range Compression
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        Deutsch
Language_Code:   de
Authors:         [ Bernhard Rader (raderb), Scott (s55) ]
Copyright:       2021 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

DRC - Dynamic Range Compression
===============================

Dynamic Range Compression
-------------------------

Der Dynamikumfang (Dynamic Range) einer Audiospur ist die Differenz zwischen den leisesten und lautesten Tönen.

Die Komprimierung des Dynamikumfanges reduziert den Abstand zwischen den beiden Extremen.

Im Audio Tab gibt es für jede Spur eine Option, um den gewünschten Grad an Kompression festzulegen.

-   1.0-2.5 sind gute Werte zum verwenden.

-   0, der Standard, deaktiviert es komplett.

-   1.0 verwendet die eingebetteten Kompressionshinweise in der AC3 Spur.

Werte größer als 1.0 komprimieren die Abstände weiter, indem die Lautstärke von leisen Tönen verstärkt werden und die lauten Töne beibehalten werden. Dies reduziert die Distanz zwischen den leisesten und lautesten Abschnitten, aber sollte die leiseren in lauten Umgebungen leichter hörbar machen. Beachte, dass dies nicht dasselbe ist wie ein Gain oder Volume Boost Control.

Kompatibilität
-------------
Dynamic Range Compression funktioniert nur, wenn das Quellaudio im AC3 Format vorliegt und du in ein anderes Format wie zum Beispiel AAC kodierst. Es hat keinen Effekt auf einen AC3 Passthru oder auf DTS oder MPEG-2 Audio.
