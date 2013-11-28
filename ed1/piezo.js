var five = require("johnny-five"),
    board, piezo;

// For this to work, you will need to install a forked version with this command:
//
// npm install git://github.com/julianduque/johnny-five.git


board = new five.Board({
  debug: true
});

board.on("ready", function() {

  // Create a new `piezo` hardware instance.
  piezo = new five.Piezo({pin: 9});

  // Inject the `piezo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    piezo: piezo
  });


  piezo.song(
    "e e e e e e e g c d e f f f f f e e e e e d d e d g", 
    "111113111113111111111511111111111111111111111111231"
  );
 
});
