var five = require("johnny-five");

var board = new five.Board();

var part = 0x1D;

board.on("ready", function() {

    board.firmata.sendI2CConfig(1000);
    board.firmata.sendI2CWriteRequest(0x1D, [0x16, 0x05]); // sets the board mode

    board.firmata.sendI2CWriteRequest(0x1D, [0x06]); // request for X axis, 0x07 is Y and 0x08 is Z
    board.firmata.sendI2CReadRequest(0x1D, 18, function(data){ // 18 bytes is how many come back...
        console.log("xaxis: " + data); 
    });


  board.repl.inject({
      bd: board
  });
})
