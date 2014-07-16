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

The following commands will also install all these componenets using Homebrew, Cask and 

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

Linux is generally pretty straight forward. Install the following (assuming Ubuntu / Debian machines):

* Arduino [Available here to install manually](http://playground.arduino.cc/Learning/Linux) or a simple 'apt-get install arduino' should do it
* NodeJS: [Source install instructions here](http://howtonode.org/how-to-install-nodejs). Don't install via your package manager as you really need an up-to-date version of node to work with hardware.

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

### Windows

Install the following:

* Visual Studio Express 2012 / 2013 [Install guide here](http://www.microsoft.com/visualstudio/eng/downloads#d-express-windows-desktop) - you absolutely must have this installed on windows as Node Serial Port depends on it.
* Python 2.7.x [Download here](http://www.python.org/download/releases/2.7.5/) - Just download the bit version you need and install the exe.
* NodeJS: [Windows Installer here](http://nodejs.org/download/)

You want to check that this is all working BEFORE you come to NBD. The best way to test is to install Johnny Five. In the Visual Studio Command Prompt you need to add python to your path so node-gyp (the node build system) can find it and work. And then install Johnny-Five.

```
	set path=%path%;C:\Python27
    npm install johnny-five --msvs_version=2012
```

This will shake out any problems you've got. It's pretty common to have troubles with Windows but they are fairly well documented and a quick google of the error message will usually resolve it.

From here we need to update johnny-five to use a known, stable version of serial port for Windows. From wherever you installed Johnny Five do this:

```
	cd node_modules/johnny-five/node_modules
    npm install serialport@1.1.3 --msvs_version=2012
```

And that should have you sorted.

If not then our friendly team will give you a hand on the day.
