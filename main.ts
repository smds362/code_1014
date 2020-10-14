basic.forever(function () {
    for (let a = 0; a <= 4; a++) {
        for (let b = 0; b <= 4; b++) {
            if (a == 0) {
                continue;
            }
            led.plot(b, a)
            basic.pause(100)
        }
    }
})
