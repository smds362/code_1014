def on_forever():
    for a in range(5):
        for b in range(5):
            led.plot(b, a)
            basic.pause(200)
basic.forever(on_forever)
