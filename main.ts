input.onButtonPressed(Button.AB, function () {
    basic.showString("Base menor")
    basic.showString("=")
    basic.showNumber(base_menor)
    basic.showString("Base mayor")
    basic.showString("=")
    basic.showNumber(base_mayor)
    basic.showString("Altura")
    basic.showString("=")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio")
    basic.showString("=")
    area_trapecio = (base_mayor + base_menor) / 2 * altura
    basic.showNumber(area_trapecio)
})
let area_trapecio = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Lizbeth Romo ")
basic.showString("A01285200")
base_mayor = 20
base_menor = base_mayor * 3 / 5
altura = randint(1, 200)
