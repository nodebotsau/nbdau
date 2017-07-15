![setup.jpg](setup.jpg)

# Setting up your NodeBots Environment

If you have all of this installed before you arrive then you'll be ready to get
cracking and start playing with hardware.

If any of this isn't working, don't worry, our friendly team will be able to help
you on the day but it's important to have everything downloaded or you'll be
waiting a while to get it onto your machine.

### Mac OSX

* Install [homebrew](http://brew.sh/) as it makes getting packages up and running easy.
* Install Git using `brew install git` from a terminal.
* Install nodejs using [NVM](https://github.com/creationix/nvm) (alternatively
[follow the appropriate directions here](http://nodejs.org))
* Install the CH340 Drivers - this is in a folder in this repo called
[drivers](drivers/CH34x_Install_V1.3.pkg)
* Install [Interchange](https://github.com/johnny-five-io/nodebots-interchange)
`npm install -g nodebots-interchange`

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

* Install Git `apt-get install git`
* Install nodejs using [NVM](https://github.com/creationix/nvm) - alternatively
[follow the appropriate directions here](http://nodejs.org). Don't use your
package manager as the version won't be up to date enough to work with hardware.
* Install [Interchange](https://github.com/johnny-five-io/nodebots-interchange)
`npm install -g nodebots-interchange`

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

* NodeJS: [Windows Installer here](http://nodejs.org/en/download/)
* Serial driver software: [In the drivers folder install the windows package](drivers/CH340%20windows.zip)
* Install [Interchange](https://github.com/johnny-five-io/nodebots-interchange)
`npm install -g nodebots-interchange`

```
    npm install johnny-five
```

This will shake out any problems you've got. Occasionally there is trouble with
Windows but they are fairly well documented and a quick google of the error
message will usually resolve it.

