var five = require("johnny-five"),
    board, piezo;

// For this to work, you will need to install a forked version with this command:
//
// npm install git://github.com/julianduque/johnny-five.git


board = new five.Board({
  debug: true
});

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    // ED1 Pin #     6    8   2    3   4   5
    pins: [ 6, 8, 2, 3, 4, 5 ],

    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  lcd.on("ready", function() {
    // Tell the LCD you will use the heart character
    lcd.useChar("heart");

    // Line 1: Hi rmurphey & hgstrp!
    lcd.clear().print("Happy Holidays");
    lcd.cursor(1, 0);

    // Line 2: I <3 johnny-five
    lcd.print("      :heart: #nbdbris");
  });

  this.repl.inject({
    lcd: lcd
  });

  // Create a new `piezo` hardware instance.
  piezo = new five.Piezo({pin: 9});

  // Inject the `piezo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    piezo: piezo
  });

  setTimeout(function() {
    piezo.song(
      "e e e e e e e g c d e f f f f f e e e e e d d e d g", 
      "111113111113111111111511111111111111111111111111231"
    );    
  }, 1000)


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
