---
Type:            article
State:           [ obsolete ]
Title:           x264 Voreinstellungen und Anpassungen
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

x264 Voreinstellungen und Anpassungen
======================

## x264 Voreinstellungen
x264 bietet ein System an Voreinstellungen und Anpassungen. Voreinstellungen reichen von UltraFast bis Placebo:

-   UltraFast - Sehr schnelle Kodierung aber benötigt viel höhere Bitraten um Qualität beizubehalten. Dies bedeutet du kannst viel größere Dateien erwarten.
-   Placebo - Extrem langsames Kodieren aber bietet die beste Qualität und/oder Dateigröße für eine bestimmte Quelle. Diese Option wird oft als Plazebo betrachtet da es sinkende Erträge in Bezug auf Qualität und Dateigröße bietet.

Üblicherweise ist es empfohlen die Optionen von Very Fast bis Slow zu verwenden um gute Resultate zu erzielen. Du kannst auch eine der langsameren Optionen auswählen wenn dir der Geschwindigkeitsverlust nichts ausmacht. Medium ist gut ausbalanciert, HandBrake's Voreinstellungen verwenden meistens diese Option.

## x264 Anpassungen
Über die x264 Anpassungen kann man den Kodierer für bestimmte Arten von Inhalten optimieren.

Falls du dir unsicher bist ob dein Inhalt wirklich in eine der folgenden Kategorien passt, kannst du die Option einfach auf "None" lassen.

-   Film
    -   Real life Footage, Filme, etc könnten davon profitieren (keine Cartoons oder Anime). Meistens wird es keinen Schaden anrichten wenn du es aktiviert hast.
-   Animation
    -   Verwendet für handgezeichneten animierten Inhalt.
-   Grain
    -   Üblicherweise für sehr rauschigen oder alten Inhalt verwendet.
-   Still Image
    -   Kann für Präsentationen, Slideshows etc verwendet werden wo es wenig bewegende Inhalte gibt.
-   PSNR
    -   Wird für das Testen der Qualität verwendet. Sollte nicht für den täglichen Gebrauch verwendet werden.
-   SSIM
    -   Wird für das Testen der Qualität verwendet. Sollte nicht für den täglichen Gebrauch verwendet werden.
-   Fast Decode
    -   Optimiere für schnellere Dekodierung. Nützlich wenn du dein Video auf schwachen Geräten abspielen willst.
