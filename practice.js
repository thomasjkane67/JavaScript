// var name = "Dylan";
let firstName = "Dylan"; // let replaces var
const lastName = "Israel"; // Constants cant be changed




console.log(`$(firstName) $(lastName)`) // Concatenation

console.log(`
	$(firstName) $(lastName)    `.trim().lenght) // trim removed the empty spaces where lenght is the lenght of the string


console.log(`$(firstName) $(lastName)`.toUpperCase()) // Change everything to upper case

console.log(`$(firstName) $(lastName)`.toLowerCase()) // Change everthing to lower case

console.log(`$(firstName) $(lastName)`.split(' ')) // Break a sting into an array at the spaces

const fullName = `$(FirstName) $(lastName)`;

console.log(fullName)

let example = 7;

console.log(example);

console.log(parseInt(example)); // Parses to only the integer

console.log(parseFloat(example)); // Parses to only the floating point number

console.log(example.toFixed(2)); // add/set decimal places

console.log(typeof example); // Will show the type of object "sting" "number"

let example1 = false; // Booleans are true of false
let example2 = true;

console.log(Boolean(example1)); // will print false
console.log(Boolean(example2)); // will print true

// null would be a false value,
// undefined would be false,
// Nan (not a number) false,
// strings are false but a space is true
// number values are true, except 0 which is false

// array
let array1 = [5, 5, 6];
console.log(array1.lenght);
console.log(array1[0]);

array1.push(8); // appaend an 8 to the array
array1.push(8, 9, 10); // appaend an array
array1.pop(); // remove the last value
array1[0] = 1; // over writ the first vaule in the array with 1

array1.forEach((element) => {

	console.log(element)
}); // loop each element in the array

// Objects with key value pairs
let object1 = {
	fistName: 'Dylan',
	lastName: 'Israel',
	address: {
		city: 'Austin',
		state: 'Texas'
	},
	age: 30,
	cats: ['Milo', 'Tito', 'Achilies']
};

object1.age = 31; // Reset the target age

console.log(object1);
console.log(object1.lastName);
console.log(object1.address.city);
console.log(Object.keys(object1)); // only print the keys
console.log(Object.values(object1)); // only print the values
console.log(object1.hasOwnProperty('firstName')); // will return true
console.log(object1.hasOwnProperty('firstName2')); // will return false

let number1 = 5 % 2; // (moduless) 5 div by 2 gives the remander 1
let number2 = 5 + 4 - 4 * 2 /4 // standard math


console.log(`$(number1) $(number2)`);

// relational operator
console.log(number1 <= number2); // return true or false
// double vs triple operator
console.log(number1 !== number2);
// == or != checks value
// === or !== checks value and data type

// increments and decrements
// % modulus
// / divide
// * multiply
number4 = 1;
number4++; // add one after the line of code
number4--; // subreact one
number4 += 5; // same as number5 = number4 + 5
number4 *= 5; // multiply by 5
++number4; // happens within the line of code


// if then else
let test = 5;

if (test === 5){
	console.log('It is True');
} else if ( false ) {
	console.log('It is False')
} else {
	console.log('Everything else failed')
}

// && and || or
let test2 = 6;

if (test === 5 && true === true){
	console.log('It is True');
} else if ( false ) {
	console.log('It is False')
} else {
	console.log('Everything else failed')
}

// BREAk and PROMPT and SWITCH
let letter = prompt("Enter a letter: ")
	switch(letter.toUpperCase()) {
		case 'A':
			console.log('You entered A');
			break;
		case 'B':
			console.log('You entered B');
			break;
		case 'C':
			console.log('You entered C');
			break;		
	}
