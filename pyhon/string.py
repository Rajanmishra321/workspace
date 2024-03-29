# here we are using string slicing
# String is a array of character and we can access any character from the index.
name='Rajan Mishra'
print(name[0:5])

# to find the length of the string we can use len() function.
print(len(name))

# In minus slicing it count the value from right side
print(name[0:-3])

print(name[-4:-2])

nm='harry'
print(nm[-4:-2])

# to convert any string in upper case we use upper() function.
# strings are immutable when we convert our string in upper or lower case it gives use new string it does not change the original string
print(name.upper())


# to convert the string in lower case we use .lower() function
print(name.lower())

# if we want to remove something from the string we can use rstrip() function.
# it only remove trailing sign not the leading sign.
string='hello!!!!!!!!!??????'
print(string.rstrip('?',))

# to replace the string with another one we use replace() function.
print(string.replace('hello','godbye'))

# to convert out string in a list we can use split() function.
print(name.split(' '))

blog='hello welcomE to my New blog'
# capitalize() function change the first letter in upper case and rest in lower case
print(blog.capitalize())

# count() function is use to count the no. of times perticular word or letter occuring
str1='rajan is rajan and rajan always will be rajan'
print(str1.count('a'))

# endswith() function gives true or false depend the string is ending with the our given stin

print(string.endswith('!'))