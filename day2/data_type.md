📔 Day 2

Data Types

1. Primitives data types
2. Non-primitives data types

Primitive Data types:

1. Numbers - Integers, floats
2. Strings - Any data under single quote, double quote or backtick quote. 
3. Booleans - true or false values
4. Null - Empty value or no value 
5. Undefined - A declared variable without a value
6. Symbol - A unique value that can be generated by Symbol constructor

Non-primitive data type
1. Objects
2. Arrays

What is the difference between Primitive data type and Non-primitive data type?
Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it. Instead Non-primitive data type are modifiable or mutable. We can modify the value after it gets created. 

Strings

Escape Sequences in Strings

In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

1. \n: new line
2. \t: Tab, means 8 spaces
3. \\: Back slash
4. \': Single quote (')
5. \": Double quote (")

Template Literals (Template Strings)

To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.


String Methods
1. length
2. Accessing characters in a string:
3. toUpperCase()
4. toLowerCase()
5. substr(): It takes two arguments, the starting index and number of characters to slice.
6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
7. split(): The split method splits a string at a specified place.
8. trim(): Removes trailing space in the beginning or the end of a string.
9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
10. replace(): takes as a parameter the old substring and a new substring.
11. charAt(): Takes index and it returns the value at that index
12. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
13. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
14. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
15. concat()
16. startsWith

Checking Data Types

To check the data type of a certain variable we use the typeof method.

Changing Data Type (Casting)

Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

💻 Day 2: Exercises

Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2. Print the string on the browser console using console.log()
3. Print the length of the string on the browser console using console.log()
4. Change all the string characters to capital letters using toUpperCase() method
5. Change all the string characters to lowercase letters using toLowerCase() method
6. Cut (slice) out the first word of the string using substr() or substring() method
7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
8. Check if the string contains a word Script using includes() method
8. Split the string into an array using split() method
10. Split the string 30 Days Of JavaScript at the space using split() method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
19. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
20. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
21. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
22. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
23. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
24. Use match() method to find all the a’s in 30 Days Of JavaScript
25. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
26. Use repeat() method to print 30 Days Of JavaScript 2 times