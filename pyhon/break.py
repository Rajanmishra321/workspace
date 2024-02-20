#  the break statement enables a program to skip over a part of the program.
#   A break statement terminates the very loop it lies within.

'''for i in range(12):
    if(i==10):
        break
    print('5 X',i+1,'=',5*(i+1))
print('terminated the loop') '''   


# the continue statement enables a programer to skip the itteration
# basically it generaly use to skip a perticular itteration.

'''for i in range(12):
    if(i==10):
        print('skip the itteration')  
        continue
    print('5 X',i,'=',5*(i))'''

# emulation of do while loop
i=0
while True:
    print(i)
    i=i+1
    if(i==50):
        break
print('do while loop emulated successfully')
