'''list = [1,2,3,'rajan',True]
print(list)
# list is datatype which can store multiple items in single variable.
# to check something is present in list or not
if 7 in list:
    print('yes')
else:
    print('no')
# same thing applies for string also
if 'raj' in 'rajan':
    print('present')
else:
    print('no')'''

   
# list comprihension
'''lst=[i*i for i in range(10)]
print(lst)     
lst=[i*i for i in range(10) if i%2==0]
print(lst)'''

# methods to manupulate the list
l=[45,33,56,67,43]


# append is use to insert element in the last
l.append(7)
print(l)


# sort() is use to sort the list
l.sort()
print(l)


# if we pass reverse=true it sort the list in descending order
l.sort(reverse=True)
print(l)


# reverse() is use to reverse the original list
l.reverse()
print(l)


# index() it returns the index value of first occurance of the value passed in the list
print(l.index(56))


# count() is use to count the number of occarance of a particular item
list=[2,5,3,5,3,5,7,6,55,5]
print(list.count(5))


# copy() is use to copy one list in another list
m=list.copy()
m[0]=0
print(list)
print(m)


# insert() it uses two reference value one for index and one the value to insert
list.insert(1,4)
print(list)


# extend is use to merg two lists
k=[300,800,900]
list.extend(k)
print(list)


# another way to concatnate two list
g=list+k
print(g)