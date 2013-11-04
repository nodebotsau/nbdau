var five = require("johnny-five"),
    board, shiftRegister;

board = new five.Board();

// This works with the 74HC595 that comes with the SparkFun Inventor's kit.
// Your mileage may vary with other chips. For more information on working
// with shift registers, see http://arduino.cc/en/Tutorial/ShiftOut

board.on("ready", function() {
  shiftRegister = new five.ShiftRegister({
    pins: {
      data: 12,
      clock: 10,
      latch: 11
    }
  });

  var value = 0;

  function next() {
    value = value > 0x11 ? value >> 1 : 0x88;
    shiftRegister.send( value );
    setTimeout(next, 200);
  }

  next();

});
