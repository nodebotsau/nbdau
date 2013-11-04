var five = require("johnny-five");

five.Board().on("ready", function(){
    var sensor = new five.Sensor({
        pin: "A6",
        freq: 1000  
    });

    sensor.on("data", function(){
        var voltage = this.value * 0.004882814;
        console.log(this.value);
        var celsius = (voltage - 0.5) * 100;
        var fahrenheit = celsius * (9/5) + 32;

        console.log(celsius + "°C", fahrenheit + "°F");
    });
});

