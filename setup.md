# Setting up your NodeBots Environment

If you have all of this installed before you arrive then you'll be ready to get
cracking and start playing with hardware.

If any of this isn't working, don't worry, our friendly team will be able to help
you on the day but it's important to have everything downloaded or you'll be
waiting a while to get it onto your machine.

### Mac OSX

* Your choice of HomeBrew or MacPorts. We'd recommend
[homebrew](http://brew.sh/) as it makes getting node up and running easy.
* NodeJS - [Follow the appropriate directions here](http://nodejs.org) or use
[NVM](https://github.com/creationix/nvm) if you want to run different versions of Node.
* Install the CH340 Drivers - this is in a folder in this repo called [drivers](/drivers/ch340-mac-driver.zip)

Note that with the driver install you may be prompted to make sure you have the
"Codebender site" open. You can skip past this step however as an aside,
[CodeBender.cc](http://codebender.cc) is an awesome project allowing you to
prgram and manage firmware for embedded devices directly from your browser.

Optionally you can also install the arduino IDE which you can use to write C
code for your hardware.

* Arduino - [Mac Install guide](http://arduino.cc/en/Guide/MacOSX)

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

If you can install node-serialport then you're pretty much good to go.

### Linux

Linux is generally pretty straight forward. Install the following (assuming Ubuntu / Debian style machines):

* NodeJS: [Source install instructions here](http://howtonode.org/how-to-install-nodejs).
Don't install via your package manager as you really need an up-to-date version
of node to work with hardware. Also consider using [NVM](https://github.com/creationix/nvm)
as it will manage things for you and you can run multiple versions of Node.

Optionally:

* Arduino [Available here to install manually](http://playground.arduino.cc/Learning/Linux) or a simple 'apt-get install arduino' should do it for a relatively recent version.

Finally - attempt to install node-serialport as this will test everything is working:

```
	npm install serialport
```

### Windows

_Please note_

Windows users can have the most problems with getting up and running of anyone.
Please ensure you can install Johnny Five before coming to the event or you may
slow down on the day.


Install the following:

* NodeJS: [Windows Installer here](http://nodejs.org/download/)
* Arduino: [Windows install guide](https://www.arduino.cc/en/guide/windows)
* Serial driver software: [In the drivers folder install the windows package](/drivers/CH340 windows.zip)

```
    npm install johnny-five
```

This will shake out any problems you've got. Occasionally there is trouble with
Windows but they are fairly well documented and a quick google of the error
message will usually resolve it.

