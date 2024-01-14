def on_button_pressed_a():
    global a_pressed
    a_pressed = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global b_pressed
    b_pressed = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

a_pressed = False
b_pressed = False
bird_alive = True

while(bird_alive)
    ticks = 0
    obstacle_x = -1
    hole_y = 0
    bird_x = 1
    bird_y = 2

    if ticks == 20:
        for index in range(5):
            led.unplot(obstacle_x, index)
        obstacle_x -= 1
        ticks = 0
    else:
        ticks += 1

    if a_pressed:
        if bird_y > 0:
            led.unplot(bird_x, bird_y)
            bird_y -= 1
    a_pressed = False

    if b_pressed:
        if bird_y < 4:
            led.unplot(bird_x, bird_y)
            bird_y += 1
    b_pressed = False

    if obstacle_x == -1:
        obstacle_x = 4
        hole_y = randint(0, 4)

    if bird_x == obstacle_x and bird_y != hole_y:
        bird_alive = 0
        basic.show_string("you lose")
    else
        led.plot(bird_x, bird_y)
        for index in range(5):
            if index != hole_y:
                led.plot(obstacle_x, index)

