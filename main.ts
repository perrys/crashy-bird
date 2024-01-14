input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    a_pressed = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    b_pressed = 1
})
let hole_y = 0
let a_pressed = 0
let b_pressed = 0
let obstacle_x = -1
let bird_y = 2
b_pressed = 0
a_pressed = 0
let ticks = 0
let bird_x = 1
let bird_alive = 1
basic.forever(function on_forever() {
    
    if (bird_alive == 1) {
        if (ticks == 20) {
            for (let index = 0; index < 5; index++) {
                if (index != hole_y) {
                    led.unplot(obstacle_x, index)
                }
                
            }
            obstacle_x += -1
            ticks = 0
        } else {
            ticks += 1
        }
        
        if (a_pressed == 1) {
            if (bird_y > 0) {
                led.unplot(bird_x, bird_y)
                bird_y += -1
            }
            
        }
        
        if (b_pressed == 1) {
            if (bird_y < 4) {
                led.unplot(bird_x, bird_y)
                bird_y += 1
            }
            
        }
        
        if (obstacle_x == -1) {
            obstacle_x = 4
            hole_y = randint(0, 4)
        }
        
        led.plot(bird_x, bird_y)
        for (let index2 = 0; index2 < 5; index2++) {
            if (index2 != hole_y) {
                led.plot(obstacle_x, index2)
            }
            
        }
        b_pressed = 0
        a_pressed = 0
        if (bird_x == obstacle_x && bird_y != hole_y) {
            bird_alive = 0
        }
        
    } else {
        basic.showString("you lose")
    }
    
})
