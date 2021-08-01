// Array index, get and set by index, indexOf


// To find the position of an element in an array, you use the indexOf() method. This method returns the index of the first occurrence the element that you want to find, or -1 if the element is not found. The following illustrates the syntax of the indexOf() method.

var books = ['hablu', 'bolod', 'love', 'peracitamol', 'gymansium'];
var habluIndex = books.indexOf('hablu');
console.log(habluIndex);

var numbers =[3, 44, 66, 34, 23, 48, 56, 35];
var index = numbers.indexOf(34);
console.log(index); 

// replace a value in array
// write the bar name and write whom do you want to remove in third brackets then write the value who do want to replace after equal sign
console.log(numbers);
numbers[2] = 65;
numbers[4] = 22;
console.log(numbers)

var secondIndex = numbers[3];
console.log(secondIndex);

var thirdIndex = books[6];
console.log(thirdIndex);




// summary
// Write the name of the array then  .Index of and write a  position between the first bracket console.log If you want to see the marriage, but if that position contains the value will show it as output, and if not, it will show undefined output
// -1: when asked index not found in the Array
// 0: is the first position on an array
// undefined: when we search values in an array by a position, but are not found
