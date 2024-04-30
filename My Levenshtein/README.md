Welcome to My Levenshtein
Task
Implementing My Levenshtein algorithm. tHIS Algorithm compares two strings to check their similarities, it returns the number of characters that are not similar.

Description
Your job is to write an algorithm that calculates the Qwasar version of a Levenshtein number between two words.

The Qwasar version of a Levenshtein number is simple: it's a value that represents how similar two given strings are. It is found by comparing two strings and returning the difference between them. (For information, the Levenshtein number is a real concept but we've simplified it a bit for the purposes of this exercise.)

Let’s look at the following example:

abc dbc ^ The Levenshtein difference between these two strings is 1. The two strings are almost identical, other than one letter. That letter, 'd’, is close to the example, 'a’, meaning the Levenshtein value will be small.

Installation
No Installation done in this project

Usage
The function takes in 2 strings with the exact number of characters and return an integer representing the difference between them.

If the parameters are not the same size then the function returns -1.

If the two strings are the same size, the function iterate through each string and determine which characters are different. Each time there is a difference, it counts as 1.

The Core Team
Made at Qwasar SV -- Software Engineering School <img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' />