var five = require("johnny-five");

five.Board().on("ready", function(){
    var sensor = new five.Sensor({
        pin: "A7",
        freq: 1000  
    });

    sensor.on("data", function(){
        console.log(this.value);
    });
});

