// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();

// 2. Sort the array in order.

var array = ["Apples", "Oranges", "Blueberries"];
array.sort();

// 3. Put "Kiwi" at the end of the array.
var array = ["Apples", "Blueberries", "Oranges", "Kiwi"];
array.push("Kiwi");

// 4. Remove "Apples" from the array.

var array = ["Apples", "Blueberries", "Oranges", "Kiwi"];
array.splice(0)


// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]


var array = ["Blueberries", "Oranges", "Kiwi"];
array.reverse();


// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2 [1] [1]);

//console.log(array2 [1] [1]); access the 2nd index using the number 1
//once inside this sub index, we can access "Oranges" by calling the second 
//index, which would be "Oranges".
