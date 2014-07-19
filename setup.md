# Setting up your NodeBots Environment

If you have all of this installed before you arrive then you'll be ready to get cracking and start playing with hardware.

If any of this isn't working, don't worry, our friendly team will be able to help you on the day but it's important to have everything downloaded or you'll be waiting a while to get it onto your machine.

### Mac OSX

* XCode - Install from the Mac Store. If you have installed the Command Line Tools through another means (eg Homebrew) then you won't need to do this. This is a big download, you don't want to be doing this on the day or you'll miss out on an hour of the fun.
* Development command line tools - Easiest way to do this is from xcode itself: [See thread here at StackOverflow](http://stackoverflow.com/questions/9329243/xcode-4-4-command-line-tools)
* Your choice of HomeBrew or MacPorts. We'd recommend [homebrew](http://brew.sh/) as it makes getting node up and running easy.
* NodeJS - [Follow the appropriate directions here](http://nodejs.org)
* Arduino - [Mac Install guide](http://arduino.cc/en/Guide/MacOSX)
* Install the FTDI Drivers. You must do this if you want to use the ED1 boards. [32-bit Macs](http://www.ftdichip.com/drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_2_18.dmg) or [64-bit Macs](http://www.ftdichip.com/Drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_2_18.dmg)

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

If you can install node-serialport then you're pretty much good to go.

The following commands will also install all these components using Homebrew and Cask.
It assumes you are using OS X.9 or above. If you are using an earlier version of OS X
then you will need to install XCode from the App Store and then install the command line tools;
or download the command line development tools from the Apple developer site and install.

```
#! /usr/bin/env bash

# Install Apple CLI Dev tools, java, node, Arduino IDE etc

xcode-select --install # Works on Mavericks and hopfully above

echo
read -p "Please wait until CLI tools are installed and press enter"  < /dev/tty

ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

#Symlink Cask apps into the normal place. Add this to login scripts as well
export HOMEBREW_CASK_OPTS="--appdir=/Applications"

brew tap caskroom/cask
brew install brew-cask

brew cask install java

brew install minicom # Useful to connect to serial devices
brew install node
brew cask install arduino
sudo npm -g install serialport
```

### Linux

Linux is generally pretty straight forward. Install the following (assuming Ubuntu / Debian style machines):

* Arduino [Available here to install manually](http://playground.arduino.cc/Learning/Linux) or a simple 'apt-get install arduino' should do it for a relatively recent version.
* NodeJS: [Source install instructions here](http://howtonode.org/how-to-install-nodejs). Don't install via your package manager as you really need an up-to-date version of node to work with hardware.

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

### Windows

_Please note_

Windows users generally have the most problems with getting up and running of anyone. Please ensure you can install Johnny Five before coming to the event or you may lose time on the day hunting for issues.


Install the following:

* Python 2.7.x [Download here](http://www.python.org/download/releases/2.7.5/) - Just download the bit version you need and install the exe.
* NodeJS: [Windows Installer here](http://nodejs.org/download/)


```
    npm install johnny-five
```

This will shake out any problems you've got. It's pretty common to have troubles with Windows but they are fairly well documented and a quick google of the error message will usually resolve it.

