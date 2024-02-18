let nemMiqdari = 0
basic.forever(function () {
    nemMiqdari = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    nemMiqdari,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(nemMiqdari)
        basic.pause(2000)
        basic.clearScreen()
    }
})
