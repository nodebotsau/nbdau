# NodeBots Day Melbourne Resources

## General info:

**Date / Time:** Saturday October 12, 2013 (10am-6pm)

**Location:** York Butter Factory, 62-66 King St, Melbourne.

## Things to do before the day

The bottom of this doc has a list of software you should install as this will speed up the time it will take you to get running. 40 people all trying to download XCode (many multi GBs) at the same time will just slow everything down.

If you're keen on building a simple robot you can take home with you then you'll need some components. [We've got a handy list here of what you need and where you can get it.](simplebot.md)

## Setting up before you arrive:

If you have all of this installed before you arrive then you'll be ready to just get cracking on playing with hardware.

If any of this isn't working, don't worry, our friendly team will be able to help you on the day but it's important to have everything downloaded or you'll be waiting a while to get it onto your machine.

### Mac OSX

* XCode - Install from app store. If you have installed the Command Line Tools through another means (eg Homebrew) then you won't need to do this. This is big, you don't want to be doing this on the day or you'll miss out an hour of the fun.
* Development command line tools - Easiest way to do this is from xcode itself: [See thread here at StackOverflow](http://stackoverflow.com/questions/9329243/xcode-4-4-command-line-tools)
* Your choice of HomeBrew or MacPorts. We'd recommend [homebrew](http://brew.sh/) as it makes getting node up and running easy.
* NodeJS - [Follow appropriate directions here](http://nodejs.org)
* Arduino - [Mac Install guide](http://arduino.cc/en/Guide/MacOSX)
* Install the FTDI Drivers. You must do this if you want to use the ED1 boards. [32-bit Macs](http://www.ftdichip.com/drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_2_18.dmg) or [64-bit Macs](http://www.ftdichip.com/Drivers/VCP/MacOSX/FTDIUSBSerialDriver_v2_2_18.dmg)

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

### Linux

Install the following (assuming Ubuntu / Debian machines):

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

You want to check that this is all working BEFORE you come to NBD. The best way to test is to install node-serialport. In the Visual Studio Command Prompt you need to add python to your path so node-gyp (the node build system) can find it and work. And then install serialport.

```
	set path=%path%;C:\Python27
    npm install serialport --msvs_version=2012
```

This will shake out any problems you've got. It's pretty common to have troubles with Windows but they are fairly well documented and a quick google of the error message will usually resolve it.

If not then our friendly team will give you a hand on the day.
