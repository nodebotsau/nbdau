# Johnny-Five ED1 Examples

This directly replicates some of the core johnny-five examples but with tweaks
made to ensure they work on a NICTA ED1 educational board.

Original examples are here:

https://github.com/rwaldron/johnny-five/tree/master/eg

And are copyright Rick Waldron and contributors.

## Licence

The examples here are used according to the licence at https://github.com/rwaldron/johnny-five/blob/master/LICENSE-MIT
for Johnny-Five and all modifications are similarly issued with an inherited 
MIT licence derived from the master given above.

## Use

Use a NICTA ED1 board and install standard firmata on it with the following two 
lines of code inserted AFTER the header inclusions. Compile and upload as normal.

```
    #define TOTAL_PINS 22
    #define TOTAL_ANALOG_PINS 8
```

Install NodeJS and then Johnny-Five:

    npm install johnny-five

Examples in this directory can be run simply using

    node example.js

