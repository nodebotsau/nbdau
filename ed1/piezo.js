var five = require("johnny-five"),
    board, piezo;

// something odd with piezo library.

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


  // piezo.note( volume, duration );
  piezo.tone( 20, 500 );

  piezo.fade( 0, 20 );

});
