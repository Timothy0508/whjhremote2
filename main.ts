function Left () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P15,
    127
    )
}
function open () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Foward()
    } else if (receivedNumber == 2) {
        Right()
    } else if (receivedNumber == 3) {
        Left()
    } else if (receivedNumber == 4) {
        Backward()
    } else if (receivedNumber == 5) {
        up()
    } else if (receivedNumber == 6) {
        down()
    } else if (receivedNumber == 7) {
        open()
    } else if (receivedNumber == 8) {
        close()
    } else {
        stop()
    }
})
function Foward () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P15,
    127
    )
}
function up () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P15,
    0
    )
    pins.servoWritePin(AnalogPin.P8, 90)
}
function close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function down () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function Right () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P15,
    127
    )
}
function Backward () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    127
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P15,
    127
    )
}
radio.setGroup(8)
