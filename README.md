![.:.Find the stray number..:.](uduckling.jpg)

## CodeWars Challenge- 13

*Instructions*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

*Examples Given:*

1. [1, 1, 2] ==> 2
2. [17, 17, 3, 17, 17, 17, 17] ==> 3
3. [2, 2, 2, 2, 2, 5] ==>5

## Languages Used

1. JavaScript

## My Solution:

Right away I know I have an array of integers that is always at least 3 integers and I'm looking for the one integer that doesn't match. I use a for loop to iterate through the array and I use two conditionals to check if the numbers match.

With my first if statement I check if the integer at index 0 is equal to the integer at index 1, if it isn't then since there is only one integer that is different the function returns that integer. If the statement is true the embedded if statement then checks if the integer at index 0 is equal to the integer at index 2. If this is also true then the loop starts again this time beginning from index 1 and this repeats until the integer that doesn't match is found.   
