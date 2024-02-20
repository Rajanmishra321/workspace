'''age=int(input('enter your age here : '))
print('your age is ',age)
if age<18:
    print('you can not drive')
else:
    print("you can drive")   '''

# code to greet the user according to current time
import time
timestamp=int(time.strftime("%H") )
print(timestamp)
if 6<= timestamp<12:
    print("good morning sir")
elif 12<= timestamp<17:
    print('good afternoon sir')
elif 17<= timestamp<21:
    print('good evening sir')    
else:
    print('good night sir')    