Downloading and installing HandBrake
====================================

HandBrake доступна для Linux, Mac и Windows, на [сайте HandBrake](https://handbrake.fr/).


Это *единственный* официальный источник для загрузки HandBrake. Для получения дополнительной информации смотрите [Где скачать HandBrake](where-to-get-handbrake.html).

## Загрузка

*Большинство современных компьютеров могут использовать HandBrake. Чтобы убедиться, что ваша система соответствует минимальным требованиям, смотрите [Системные требования](../technical/system-requirements.html) в технической документации.*

Для загрузки HandBrake на ваш компьютер, нажмите кнопку Скачать на сайте HandBrake [Домашная страница](https://handbrake.fr/). Вы также можете выбрать версию для конкретной операционной системы на [Странице загрузок](https://handbrake.fr/downloads.php).

Опытные пользователи, возможно, захотят попробовать [ночные сборки HandBrake](https://handbrake.fr/nightly.php)[^nightly-builds].

## Проверьте вашу загрузку

### Контрольные суммы

 Команда HandBrake публикует [Контрольные суммы для всех загрузок  handbrake.fr](https://handbrake.fr/checksums.php) и [страницу  контрольных сумм на GitHub](https://github.com/HandBrake/HandBrake/wiki/Checksums). Вы можете использовать предоставленные контрольные суммы для проверки целостности файлов, которые вы скачали.

<!-- .system-linux -->

При установке на Linux с использованием официального PPA, целостность загрузки проверяется автоматически. Аналогичным образом, целостность исходного кода, управляемого с помощью '№git' проверяется автоматически.

To verify an official source distribution tarball, consult your Linux distribution's documentation for instructions on how to verify checksums.

<!-- /.system-linux -->

<!-- .system-macos -->

On Mac, launch Terminal from your Applications > Utilities folder and use the `shasum` command. For example, if you downloaded HandBrake to your Downloads folder:

    shasum -a 1 ~/Downloads/HandBrake-*.dmg && shasum -a 256 ~/Downloads/HandBrake-*.dmg

Alternatively, the free third-party app [Hashsum](https://itunes.apple.com/us/app/hashsum/id1079442694?mt=12) available on the Mac App Store provides a convenient graphical interface for computing file checksums[^third-party-utilities-1].

<!-- /.system-macos -->

<!-- .system-windows -->

На Windows, корпорация Майкрософт предоставляет [Microsoft File Checksum Integrity Verifier](https://www.microsoft.com/en-us/download/details.aspx?id=11533) утилиту командной строки для проверки контрольных сумм. Пожалуйста, смотрите [associated Microsoft help article](https://support.microsoft.com/en-us/help/841290/availability-and-description-of-the-file-checksum-integrity-verifier-utility) для дополнительных сведений и инструкции по использованию.

Кроме того, бесплатные программы сторонних разработчиков [Compute Hash](http://www.subisoft.net/ComputeHash.aspx), [ExactFile](http://www.exactfile.com), and [MultiHasher](http://www.abelhadigital.com/multihasher) для Windows имеют  удобные графические интерфейсы для вычислительных контрольных сумм файлов[^third-party-utilities-2].

<!-- /.system-windows -->

*Если контрольные суммы для файла, который вы скачали не совпадают с теми, что опубликованы командой HandBrake, вы должны удалить файл и повторить загрузку.*

### OpenPGP

The HandBrake Team also publishes [OpenPGP signatures for all downloads on GitHub](https://github.com/HandBrake/HandBrake/releases). Более подробная информация доступна на [OpenPGP article on GitHub](https://github.com/HandBrake/HandBrake/wiki/OpenPGP).

<!-- .system-linux -->

## Installing on Linux

If you have installed a HandBrake package from your distribution or other third-party package repository, please remove it before proceeding. See the section, *Warning about broken third-party builds* on [Where to get HandBrake](where-to-get-handbrake.html) for more information.

The following instructions are for Ubuntu. They may also work on other `deb`-compatible distributions. For other Linux, please compile from the [official source code](https://github.com/HandBrake/HandBrake).

From the command line, add the [official releases PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-releases) to your system.

    sudo add-apt-repository ppa:stebbins/handbrake-releases
    sudo apt-get update

If you prefer HandBrake's nightly builds, add the [official git-snapshots PPA](https://launchpad.net/~stebbins/+archive/ubuntu/handbrake-git-snapshots).

    sudo add-apt-repository ppa:stebbins/handbrake-git-snapshots
    sudo apt-get update

Install HandBrake.

    sudo apt-get install handbrake-cli handbrake-gtk

Run `HandBrakeCLI` to use HandBrake on the command line.

Run `ghb` to launch HandBrake's graphical user interface. You may wish to right-click on the icon and select "Lock to Launcher" for easy access in the future.

<!-- /.system-linux -->
<!-- .system-macos -->

## Installing on Mac

Once you've downloaded HandBrake for Mac, open the disk image in your Downloads folder. Your web browser (e.g. Safari, Firefox, or Chrome) may do this for you automatically. Then drag the HandBrake application to your Applications folder.

![Opening HandBrake disk image](../../../en/images/mac/download-file-1.1.0.png "Open the HandBrake disk image you downloaded. Your web browser may do this automatically.")

![Installing HandBrake on Mac](../../../en/images/mac/install-1.1.0.png "Drag HandBrake to your Applications folder to install it on your Mac.")

HandBrake is now installed. You may eject the disk image and move it to the Trash.

<!-- /.system-macos -->
<!-- .system-windows -->

## Installing on Windows

После того как вы скачали установщик HandBrake, просто дважды щелкните, чтобы запустить его.

Если HandBrake уже установлен на вашем компьютере, установщик предложит удалить предыдущую версию перед установкой текущей версии. Выберите `OK` для продолжения и ознакомления с условиями лицензии HandBrake.

![HandBrake Windows installer: удаление предыдущих версий](../../../en/images/windows/uninstall-1.0.0.png "Установщик HandBrake предложит удалить предыдущую версию перед установкой текущей версии.")

![HandBrake Windows installer](../../../en/images/windows/install-1-1.0.0.png "HandBrake's Windows installer.")

Далее, установщик спросит вас куда вы хотите установить HandBrake. Если у вас нет особых причин для изменения этого, выберите `Install` для продолжения. После завершения установки, вы можете выбрать `Finish` для выхода из программы установки.

![HandBrake for Windows ход установки](../../../en/images/windows/install-2-1.0.0.png "The installer will report its progress.")

![HandBrake for Windows installation complete](../../../en/images/windows/install-finish-1.0.0.png "HandBrake is now installed.")

Вы найдете ярлыки для запуска HandBrake placed on both the Windows Desktop and Start Menu.

<!-- /.system-windows -->

## Запуск HandBrake

Вы можете запустить HandBrake быстро нажав два раза (двойной клик) on the cocktail & pineapple icon. В зависимости от настройки вашей системы, возможно одного щелчка мыши может быть достаточно.

![HandBrake icon](../../../en/images/icon-1.1.0.png)![Double-clicking HandBrake icon](../../../en/images/icon-click-1.1.0.gif)

<!-- .continue -->

## Следующие шаги

<!-- .success -->

Continue to [Проверка обновлений](check-for-updates.html).

<!-- /.success -->

<!-- /.continue -->

[^nightly-builds]: Ночные сборки HandBrake основаны на недавнем коде разработчиков, включая новые и экспериментальные функции, которые могут быть нестабильными или существенно отличается от последней версии. Конечно все желающие могут попробовать их, ночные сборки лучше всего подходит для опытных пользователей и разработчиков.

[^third-party-utilities-1]: HandBrake не связан ни с одной сторонней утилитой проверки контрольной суммы . Используйте только программное обеспечение от производителей, которым вы доверяете.

[^third-party-utilities-2]: HandBrake не связан ни с одной сторонней утилитой проверки контрольной суммы . Используйте только программное обеспечение от производителей, которым вы доверяете. 