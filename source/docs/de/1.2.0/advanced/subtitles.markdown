---
Type:            article
State:           [ obsolete ]
Title:           Untertitel
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

Untertitel
=========

## Unterstützte Untertitelformate

Es gibt verschiedene Arten von Untertitel:

- Bitmaps (Bilder), z.B.: DVD VOBSUBs, Bluray PGS
- Text mit Markup, z.B.: Closed Captions und SRT Dateien.
- Styled SSA, z.B.: viele Anime Untertitel in MKV Dateien

HandBrake kann Untertitel aus den folgenden Quellen lesen:

- Von DVD’s – Entweder eingebettete VOBSUB oder CC Spuren.
- Von Bluray - PGS Untertitel.
- Vom Benutzer bereitgestellte SRT Dateien.
- Eingebettete SSA/SRT/CC innerhalb von Dateien (wie zum Beispiel mkv oder mp4)

## Unterstütze Ausgabeformate

HandBrake hat zwei Ausgabemethoden für Untertitelspuren:

- Hard Burn: Dies bedeuted, dass die Untertitel permanent in das Video *eingebrannt* werden. Sie können nicht an- oder ausgeschalten werden wie bei einer DVD.
- Soft Subtitles: Dies bedeuted, dass die Untertitel als separat auswählbare Spuren in deiner Ausgabedatei auftauchen. Mit einer Abspielsoftware die es unterstützt, kannst du diese Untertitel an- oder abschalten wie du willst.

Die folgenden Untertiteltypen werden wie folgt unterstützt:

- Bluray PGS Untertitel
  - Mit MP4 kannst du NUR 1 Untertitelspur in das Video einbrennen.
  - Du kannst keine PGS Titel für das MP4 Format durchleiten da das Dateiformat es nicht unterstützt.
  - Mit MKV kannst du mehrere PGS Untertitelspuren durchleiten. Diese werden nicht in das Video eingebrennt außer du möchtest es. In diesem Fall kann jedoch nur 1 Untertitelspur eingebrannt werden. Der Rest muss durchgeleitet werden.
 
- DVD Bitmap Unteritel (VOBSUB)
  - Mit MP4 kannst du NUR 1 Untertitel in das Video einbrennen.
  - Mit MKV kannst du mehrere VOBSUB Unteritelspuren durchleiten. Diese werden nicht in das Video eingebrennt außer du möchtest es. In diesem Fall kann jedoch nur 1 Untertitelspur eingebrannt werden. Der Rest muss durchgeleitet werden.

- CEA-608 Closed Captions (DVD und manche ATSC Streams)
  - Falls ausgewählt werden diese von deiner Quelldatei in die MKV oder MP4 Zieldatei durchgeleitet.
  - Nur 1 CC Spur kann von der Quelle gelesen werden.
  - CC Spuren erscheinen in einer MP4 Datei als Untertitelspur und nicht als CC Spur.

- SRT Untertitel
  - Diese können von deiner Quelldatei eingelesen werden oder über den "Untertitel Tab" importiert werden falls du getrennte Dateien hast.
  - Du kannst einen Abstand (in Millisekunden) definieren um die Beginnzeit des ersten und der darauffolgenden Untertitel zu verschieben. Versuche ein einziges Kapitel mit unterschiedlichen Abständen zu kodieren und abzuspielen um den korrekten Abstand herauszufinden.
  - Überprüfe auch, ob der korrekte Zeichensatz aus dem "Char Code" Menü ausgewählt ist. Wenn du den falschen Zeichensatz auswählst, wird deine Ausgabedatei keine Untertitelspur enhalten. Zudem können Player, beim Versuch dieses Video abzuspielen, abstürzen.
  - Beachte bitte, dass SRT Untertitel in der Zieldatei in SSA Untertitel konvertiert werden. Dieses Verhalten ist derzeit nicht konfigurierbar.

- SSA Untertitel
  - SSA Untertitel können entweder durchgeleitet oder in das Video eingebrannt werden.
  - Wenn ein Untertitel in ein Video eingebrannt wird, werden alle Stylings (z.B.: Schriftart, Farbe, usw.) beibehalten.
    - Animierte Effekte (z.B.: Ein/Ausblenden, Karaoke) werden derzeit nicht unterstützt. (Nur der mittlere Frame der Animation wird verwendet.)
  - Wenn ein Untertitel als Text durchgeleitet wird, werden nur die fett/kursiv/unterstrichen Styles beibehalten. Manche Player unterstützen keine gleichzeitige Anzeige mehrerer durchgeleiteter SSA Untertitel.

## Forced Untertitel

Bei manchen DVD Quellen gibt es eine Untertitelspur welche nur bei fremdsprachigen Sektionen im Video angezeigt wird. Bei manchen Titeln ist dies eine einzige Untertitelspur in derselben Sprache wie die Hauptaudiospur. Bei anderen wird es als standard Untertitelspur in derselben Sprache wie die Hauptaudiospur angezeigt und markiert nur einen Teil der Untertitelspur als forced.

Um diese Untertitel auszuwählen, kann HandBrake die Quelle nach Untertitel scannen welche nur 10% (oder weniger) der Zeit gezeigt werden und zusätzlich nach der Präsenz einer Forced Untertitelspur suchen.
 
Um diese Funktionalität in der grafischen Benutzeroberfläche von HandBrake zu aktivieren, selektiere im "Untertitel" Tab die "Suche nach fremdsprachigem Audio" Option aus dem "Spur" Menü und klicke auf die "Forced" Checkbox.

Falls du keine Fremdsprachige Sektion sondern nur reguläre Untertitel in deiner Ausgabedatei erhälst, musst du möglicherweise den Untertitel im "Spur" Menü manuell finden und hinzufügen.
