# tuple is a datatype which is immutable. It uses to store multiple items in a single variable
# tuple=(1,2,4,5,'Rajan')
# print(tuple)
# if you want to manupulate a tuple you first have to conver a tuple into a list then do whatever you want and after that again conver it into list
contries=('india','japan','nepal','england','russia')
temp=list(contries)
temp.append('united state')
temp.pop(3)
temp[2]='china'
contries=tuple(temp)
print(contries)

