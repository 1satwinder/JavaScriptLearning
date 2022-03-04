# creating a number list: [1,2,3,4...55]
numbers = [*range(1, 56,1)]

# taking two numbers
num1 = 45
num2 = 78

# checking num1 in the list numbers
if num1 in numbers:
    print("The number {} was found".format(num1))
else:
    print("The number {} was not found".format(num1))

# checking num2 in the list numbers
if num2 in numbers:
    print("The number {} was found".format(num2))
else:
    print("The number {} was not found".format(num2))