finch.startFinch()
if (100 > finch.getDistance()) {
    finch.setMove(MoveDir.Forward, 150, 200)
}
basic.showString("Hello everyone, today marks the start of the Super Games, to decide if sparrow city needs a new hero")
finch.setMove(MoveDir.Forward, 10, 49)
finch.setTurn(RLDir.Right, 90, 50)
basic.showString("This is the strength test, to see if I can defend the city from the Rough Robin")
for (let index = 0; index < 1; index++) {
    if (100 > finch.getDistance()) {
        finch.setMove(MoveDir.Forward, 31, 100)
    }
}
finch.setTurn(RLDir.Left, 180, 50)
finch.setMove(MoveDir.Forward, 50, 100)
finch.setTurn(RLDir.Left, 90, 50)
finch.setMove(MoveDir.Forward, 50, 100)
finch.setTurn(RLDir.Left, 90, 50)
basic.showString("This is the speed test, to see if I can defend the city from the Speedy Sparrow")
for (let index = 0; index < 1; index++) {
    finch.startMotors(150, 150)
    basic.pause(1000)
}
