// // the Newton concept...

 /*<!-- build:js({app,.tmp}) scripts/main.js -->
        <!-- <script src="scripts/main.js"></script> -->
        <!-- endbuild -->*/

var objOne = {keyOne: 1, keyTwo: 2};
var objTwo = {keyOne: 1, keyTwo: 2, keyThree: 3};

function compareTwoObjects (one, two) {

	 JSON.stringify(one) === JSON.stringify(two); 

}

compareTwoObjects(objOne, objTwo);

// compare two objects...

// Object.equals = function( x, y ) {
//   if ( x === y ) return true;
//     // if both x and y are null or undefined and exactly the same

//   if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
//     // if they are not strictly equal, they both need to be Objects

//   if ( x.constructor !== y.constructor ) return false;
//     // they must have the exact same prototype chain, the closest we can do is
//     // test there constructor.

//   for ( var p in x ) {
//     if ( ! x.hasOwnProperty( p ) ) continue;
//       // other properties were tested using x.constructor === y.constructor

//     if ( ! y.hasOwnProperty( p ) ) return false;
//       // allows to compare x[ p ] and y[ p ] when set to undefined

//     if ( x[ p ] === y[ p ] ) continue;
//       // if they have the same strict value or identity then they are equal

//     if ( typeof( x[ p ] ) !== "object" ) return false;
//       // Numbers, Strings, Functions, Booleans must be strictly equal

//     if ( ! Object.equals( x[ p ],  y[ p ] ) ) return false;
//       // Objects and Arrays must be tested recursively
//   }

//   for ( p in y ) {
//     if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
//       // allows x[ p ] to be set to undefined
//   }
//   return true;
// }

// palindrome string...

// function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
// }

// var averageTempJan = 31.9;
// var averageTempFeb = 35.3;
// var averageTempMar = 42.4;
// var averageTempApr = 52;
// var averageTempMay = 60.8;

// var averageTemp = [];
// averageTemp[0] = 31.9;
// averageTemp[1] = 35.3;
// averageTemp[2] = 42.4;
// averageTemp[3] = 52;
// averageTemp[4] = 60.8;

// var daysOfWeek = [];

// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// var daysOfWeek = new Array(); //{1}

// var daysOfWeek = new Array(7); //{2}

// console.log(daysOfWeek.length);

// var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); //{3}

// for (var i=0; i<daysOfWeek.length; i++) {
//     console.log(daysOfWeek[i]);
// }

// //console.table(daysOfWeek);

// //fibonacci numbers
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// var fibonacci = []; //{1}
// fibonacci[1] = 1; //{2}
// fibonacci[2] = 1; //{3}

// // first viz...
// for(var i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; ////{4}
// }

// for(var i = 1; i<fibonacci.length; i++){ //{5}
//     console.log(fibonacci[i]);           //{6}
// }

// //instead of {5} and {6} we can simply use
// console.log(fibonacci);

// function printArray(myArray) {
//     for (var i=0; i<myArray.length; i++){
//         console.log(myArray[i]);
//     }
// }

// var numbers = [0,1,2,3,4,5,6,7,8,9];

// //add a new element to the numbers array
// numbers[numbers.length] = 10;

// // .push()...tacks element on to the end of the array...
// numbers.push(11);

// numbers.push(12, 13);

// printArray(numbers);

// console.log('numbers.length is: ' + numbers.length);

// // insert first position manually
// // second viz...
// for (var i=numbers.length; i>=0; i--) {
//     numbers[i] = numbers[i-1];
// }

// console.log('numbers now: ' + numbers);

// numbers[0] = -1;

// printArray(numbers);

// continue from here...

// using method unshift
// numbers.unshift(-2);

// //printArray(numbers);

// numbers.unshift(-4, -3);

// //printArray(numbers);

// //**** Removing elements

// numbers.pop();

// //remove first position manually
// /*for (var i=0; i<numbers.length; i++){
//     numbers[i] = numbers[i+1];
// }*/

// printArray(numbers);

// console.log(numbers.length);

// //using method shift
// numbers.shift();

// printArray(numbers);
// console.log(numbers.length);

// //**** Removing and Adding elements from the middle of the array or specific position
// //splice method - parameter (index, howManyPositionsToBeRemoved, item1...itemX)
// numbers.splice(5,3);

// console.log('----');

// printArray(numbers);

// numbers.splice(5,0,2,3,4);

// console.log('----');

// printArray(numbers);

// console.log('----');

// numbers.splice(5,3,2,3,4);

// printArray(numbers);