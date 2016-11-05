---
Type:            article
State:           draft
Title:           Building HandBrake for macOS
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         Scott (s55)
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for macOS
==========================================

## Be prepared 

The first step is to get your development environment right.

 * [Download and install the Xcode Developer Tools](http://developer.apple.com/mac/) (you will need to register with Apple, but it's free)

 * Download, compile, and install a current version of yasm:

Open up the Terminal. That's found in your /Applications/Utilities folder. 

In the window that appears, type the following:

	curl http://www.tortall.net/projects/yasm/releases/yasm-1.3.0.tar.gz> yasm-1.3.0.tar.gz
	tar -xvf yasm-1.3.0.tar.gz
	cd yasm-1.3.0/
	./configure ; make


When that finishes, you'll need to install yasm. Type the following:
	
	sudo make install

*(You'll need to enter your system password at this point and hit return)*

Once yasm is installed, clean up by typing:

	cd ../
	rm -rf yasm-1.2.0 yasm-1.2.0.tar.gz 


*Leave that Terminal window open for the next step.*

## Meet your maker 

In the Terminal window, type:

	git clone https://github.com/HandBrake/HandBrake.git  handbrake-git
	cd handbrake-git/
	./configure --launch --launch-jobs=0 ; open build/


This will take awhile. When it's done, you'll see a window in front of you with your freshly-built copies of !HandBrake and HandBrakeCLI.

## Reach enlightenment 

This is just a simple quick-start guide. For the real meat and potatoes, [see the latest OS X build documentation](https://github.com/HandBrake/HandBrake/blob/master/doc/BUILD-Mac). Topics covered there include:

 * Running configuration and build commands on subsequent compiles (hint, do it from the build/ directory, not the root)

 * Cleaning build files
 
 * Tweaking contrib libraries
 
