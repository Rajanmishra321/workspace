# function is block of code that perform specific task whenever we call it.
'''def calculateGmean(a,b):
    mean=(a*b/a+b)
    print(mean)

def comparing(a,b):
    if(a>b):
        print('a is greater')
    elif(a==b):
        print('a and b both are equal')        
    else:
        print('b is greater') 

a=4
b=5
calculateGmean(a,b) 
comparing(a,b)
a=6
b=9
calculateGmean(a,b)   
comparing(a,b)'''

# function can take argument as tuple for this the syntax is 
def average(*numbers):
    sum=0
    for i in numbers:
        sum=sum+i
    print('average is: ',sum/len(numbers))
average(5,6)
# we can take dictionary as argument by using double ** as above we use single *.