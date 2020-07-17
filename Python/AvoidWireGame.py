from microbit import *
import music
#Connor Hutchinson, microbit mini game (dont touch the wire)

ON = False

while True:

  #start game with any button:
  if button_a.was_pressed() or button_b.was_pressed():
   ON = True
   sleep(1000)
   start = running_time()
   result = ''
   end = 0
   hits = 0
  
  while ON == True:
  
    display.clear()
    music.stop()
    
    #if the wire is hit:
    if pin1.read_digital():
       display.show(Image.SAD)
       music.play('c:4',wait=False)
       hits += 1
       sleep(1000)

    #when you reach the end:
    if pin2.read_digital():
       display.show(Image.HAPPY)
       end = running_time()
       music.play(music.POWER_UP,wait=False)
       sleep(1000)
       timepassed= str(int((end-start)/1000))
       display.scroll(str(timepassed) + 's')
       if hits == 0:
          music.play(music.ENTERTAINER,wait = False)
          display.scroll(' perfect game!')
       else:
          display.scroll('hits: ' + str(hits))
       ON = False
        
    #to restart game before finishing:
    if button_a.was_pressed() or button_b.was_pressed():
       display.clear()
       music.stop()
       start = running_time()
       hits = 0
  