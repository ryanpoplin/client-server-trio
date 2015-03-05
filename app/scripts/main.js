console.log('\'Allo \'Allo!');

(function () {

	var num = 1; // {1}
	num = 3; // {2}

	var price = 1.5; //{3}
	var name = 'Packt'; //{4}
	var trueValue = true; //{5}
	var nullVar = null; //{6}
	var und;  //{7}

	console.log("num: "+ num);
	console.log("name: "+ name);
	console.log("trueValue: "+ trueValue);
	console.log("price: "+ price);
	console.log("nullVar: "+ nullVar);
	console.log("und: "+ und);
	
	//******* Variable Scope
	
	var myVariable = 'global';
	myOtherVariable = 'global';
	
	function myFunction(){
	    var myVariable = 'local';
	    return myVariable;
	}
	
	function myOtherFunction(){
	    myOtherVariable = 'local';
	    return myOtherVariable;
	}
	
	console.log(myVariable);   //{1}
	console.log(myFunction()); //{2}
	
	console.log(myOtherVariable);   //{3}
	console.log(myOtherFunction()); //{4}
	// value was altered as a reference...
	console.log(myOtherVariable);   //{5}

	/* Arithmetic operators */
	var num = 0;
	
	console.log('num value is ' + num);
	
	num = num + 2;
	
	console.log('New num value is ' + num);
	
	num = num * 3;
	
	console.log('New num value is ' + num);
	
	num = num / 2;
	
	console.log('New num value is ' + num);
	
	num++;
	
	num--;
	
	console.log('New num value is ' + num);
	
	console.log('num mod 2 value is ' + (num % 2));
	
	
	/* Assignment operators */
	num += 1;
	num -= 2;
	num *= 3;
	num /= 2;
	num %= 3;
	
	console.log('New num value is ' + num);
	
	/* Assignment operators */
	// return booleans...
	// !==, too...
	console.log('num == 1 : ' + (num == 1));
	console.log('num === 1 : ' + (num === 1));
	console.log('num != 1 : ' + (num != 1));
	console.log('num > 1 : ' + (num > 1));
	console.log('num < 1 : ' + (num < 1));
	console.log('num >= 1 : ' + (num >= 1));
	console.log('num <= 1 : ' + (num <= 1));
	
	/* Logical operators */
	console.log('true && false : ' + (true && false));
	console.log('true || false : ' + (true || false));
	console.log('!true : ' + (!true));
	
	/* Bitwise operators */
	console.log('5 & 1:', (5 & 1)); //same as 0101 & 0001 (result 0001 / 1)
	console.log('5 | 1:', (5 | 1)); //same as 0101 | 0001 (result 0101 / 5)
	console.log('~ 5:', (~5)); //same as ~0101 (result 1010 / 10)
	console.log('5 ^ 1:', (5 ^ 1)); //same as 0101 ^ 0001 (result 0100 / 4)
	console.log('5 << 1:', (5 << 1)); //same as 0101 << 1 (result 1010 / 10)
	console.log('5 >> 1:', (5 >> 1)); //same as 0101 >> 1 (result 0010 / 2)
	
	/* typeOf */
	console.log('typeof num:', typeof num);
	console.log('typeof Packt:', typeof 'Packt');
	console.log('typeof true:', typeof true);
	console.log('typeof [1,2,3]:', typeof [1,2,3]);
	console.log('typeof {name:John}:', typeof {name:'John'});
	
	/* delete */
	var myObj = {name: 'John', age: 21};
	delete myObj.age;
	console.log(myObj); //Object {name: "John"}

	function testTruthy(val){
    	return val ? console.log('truthy') : console.log('falsy');
	}

	testTruthy(true); //true
	testTruthy(false); //false
	testTruthy(new Boolean(false)); //true (object is always true)
	
	testTruthy(''); //false
	testTruthy('Packt'); //true
	testTruthy(new String('')); //true (object is always true)
	
	testTruthy(1); //true
	testTruthy(-1); //true
	testTruthy(NaN); //false
	testTruthy(new Number(NaN)); //true (object is always true)
	
	testTruthy({}); //true (object is always true)
	
	var obj = {name:'John'};
	testTruthy(obj); //true
	testTruthy(obj.name); //true
	testTruthy(obj.age); //age (prop does not exist)

	// in a nutshell, stay the fuck away from the == operator...

	//Packt == true

	console.log('packt' ? true : false);
	//outputs true
	
	console.log('packt' == true);
	//1 - converts Boolean using toNumber
	//'packt' == 1
	//2 - converts String using toNumber
	//NaN == 1
	//outputs false
	
	console.log('packt' == false);
	//1 - converts Boolean using toNumber
	//'packt' == 0
	//2 - converts String using toNumber
	//NaN == 0
	//outputs false
	
	console.log([0] == true);
	//1 - converts Boolean using toNumber
	//[0] == 1
	//2 - converts Object using toPrimitive
	//2.1 - [0].valueOf() is not primitive
	//2.2 - [0].toString is 0
	//0 == 1
	//outputs false
	
	//******************************* ===
	console.log('packt' === true); //false
	
	console.log('packt' === 'packt'); //true
	
	var person1 = {name:'John'};
	var person2 = {name:'John'};
	console.log(person1 === person2); //false, different objects

	/* Example 01 - if */
	var num = 1;
	if (num === 1) {
	    console.log("num is equal to 1");
	}
	
	/* Example 02 - if-else */
	var num = 0;
	if (num === 1) {
	    console.log("num is equal to 1");
	} else {
	    console.log("num is not equal to 1, the value of num is " + num);
	}
	
	/* Example 03 - if-else-if-else... */
	var month = 5;
	if (month === 1) {
	    console.log("January");
	} else if (month === 2){
	    console.log("February");
	} else if (month === 3){
	    console.log("March");
	} else {
	    console.log("Month is not January, February or March");
	}
	
	/* Example 04 - switch */
	var month = 5;
	switch(month) {
	    case 1:
	        console.log("January");
	        break;
	    case 2:
	        console.log("February");
	        break;
	    case 3:
	        console.log("March");
	        break;
	    default:
	        console.log("Month is not January, February or March");
	}
	
	/* Example 05 - ternary operator - if..else */
	if (num === 1){
	    num--;
	} else {
	    num++;
	}
	
	//is the same as
	(num === 1) ? num-- : num++;

	console.log('**** for example ****');
	
	/* for - example */
	for (var i=0; i<10; i++) {
	    console.log(i);
	}
	
	console.log('**** while example ****');
	/* while - example */
	var i = 0;
	while(i<10)
	{
	    console.log(i);
	    i++;
	}
	
	console.log('**** do-while example ****');
	/* do-while - example */
	var i = 0;
	do {
	    console.log(i);
	    i++;
	} while (i<10)

	function sayHello() {
    	console.log('Hello!');
	}

	sayHello();
	
	/* function with parameter */
	function output(text) {
	    console.log(text);
	}
	
	output('Hello!');
	
	output('Hello!', 'Other text');
	
	output();
	
	/* function using the return statement */
	function sum(num1, num2) {
	    return num1 + num2;
	}
	
	var result = sum(1,2);
	output(result);

	/* Object example 1 */

	var obj = new Object();
	
	/* Object example 2 */
	
	var obj = {};
	
	obj = {
	    name: {
	        first: 'Gandalf',
	        last: 'the Grey'
	    },
	    address: 'Middle Earth'
	};
	
	/* Object example 3 */
	
	function Book(title, pages, isbn){
	    this.title = title;
	    this.pages = pages;
	    this.isbn = isbn;
	    this.printIsbn = function(){
	        console.log(this.isbn);
	    }
	}
	
	var book = new Book('title', 'pag',  'isbn');
	
	console.log(book.title); //outputs the book title
	
	book.title = 'new title'; //update the value of the book title
	
	console.log(book.title); //outputs the updated value
	
	Book.prototype.printTitle = function(){
	    console.log(this.title);
	};
	
	book.printTitle();
	
	book.printIsbn();

	var SoftwareEngineer = function (name, age, languages) {
		this.name = name;
		this.age = age;
		this.languages = languages;
	};

	SoftwareEngineer.prototype.logLanguages = function () {

		// tons of different ways to loop this...
		for (i in this.languages) {
			console.log(this.languages[i]);
		}

	};

	var engineerPoplin = new SoftwareEngineer('Ryan Poplin', 24, ['JavaScript', 'Objective-C', 'Swift']);

	console.log(engineerPoplin.name, engineerPoplin.age);
	engineerPoplin.logLanguages();

}());