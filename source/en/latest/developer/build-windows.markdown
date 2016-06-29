---
Type:            article
Title:           Building HandBrake for Windows
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Scott (s55)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Windows
==========================================


## Building HandBrake CLI and libhb (hb.dll)

The CLI and libhb are build on linux using the MinGW toolchain.

We typically recommend Ubuntu (16.04 LTS or later) as a base but other distro's may work as well.
Note, we currently roll our own MinGW toolchain as there is often problems with distro provided versions.

Make sure the following dependencies are installed

  - git
  - yasm  (>= 1.3)
  - libtool
  - intltool
  - cmake
  - gcc
  - make
  - patch
  - tar
  - m4
  - python (>= 2.7.1)
  - wget / curl
  
If you do not have a MinGW toolchain with at least GCC 5.x, then you must compile your own. We provide a script to do this for you.

  - git clone https://github.com/HandBrake/HandBrake.git
  - cd HandBrake
  - cd scripts
  - ./mingw-w64-build x86_64 ./home/<my_user>/toolchains/
  
This process will take a few minutes, then provide you with a command which you can use to add the toolchain to your path.
 
To then compile HandBrake:

  - git clone https://github.com/HandBrake/HandBrake.git
  - cd HandBrake
  - ./configure --cross=x86_64-w64-mingw32 --enable-x265 --enable-qsv --launch-jobs=1 --launch
  
When done, you will find HandBrakeCLI.exe in the "build" directory and a "hb.dll" in the "libhb" subdirectory under that.


## Building the HandBrake GUI

You will need the following tools to compile the GUI component of HandBrake for windows:

  - Install Microsoft Visual Studio Community edition from ​https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx 
  - [Optional] install Source Tree ​https://www.sourcetreeapp.com/ (This is a nice GIT client for windows. VS 2015 does have built-in support if you prefer that though) 
    Whatever Git client you use, you'll want to clone ​https://github.com/HandBrake/HandBrake.git The source code for the GUI is in the Win/CS folder. The solution file is named HandBrake.sln

Please make sure HandBrakeWPF is set as the startup project in the "Solution Explorer". Right click it and choose "Set as startup project" if it is not. Now simply go to the Build Menu and click "Build Solution"

Please note, you will need to copy hb.dll into the output folder where HandBrake.exe is compiled to. Depending on the build profile you select, you will find it in a folder under: win\CS\HandBrakeWPF\bin\...
Please see the section above on how to build this, or grab a copy from the nightly build page on the main website.
