basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
sloth.do_action(sloth.actions(sloth.action_name.walk), 5, 100)
sloth.stand_still()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
