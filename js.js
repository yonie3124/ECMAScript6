// Exercise 1
// We have a simple object:
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)




let user = {
    name: "John",
    years: 30,
  
};

let {name, age = user.years} = user;
console.log(name, age);

    

let y;
let x = ('qwretyrytrfty');

if (x != 'isAdmin') {
  y = false;
} else {
  y = true;
}

console.log(y);



// Exercise 2
// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?




let ourPlanet = {
	currentVisitor: 'John',
	visitor1: 'Alex',	
}
console.log(ourPlanet.currentVisitor)
console.log(ourPlanet.visitor1)





// Exercise 3
// Look at the code. What will be result of the call at the last line and why?
// the result will be Hello John, because we are calling phrase and user by using the back tap rule.




let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()



// Exercise 4
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.




user = {
name1: 'John',
sirName: 'Smith',

};

var {name1, sirName} = user
name1 = 'Pete'
console.log(name1)



// Exercise 5
// Is it possible to change an object declared with const, how do you think and why?
//  yes it is possible if you are out of the scope of the object.




const user2 = {
  name: "John"
}

// does it work?
user2.name = "Pete"

console.log(user2.name)






// Exercise 6
// We have an object storing salaries of our team:
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.



 
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
var sum = 0;
sum = salaries.Fred + salaries.Ted + salaries.Ghaith;
 	 console.log(sum)






// Exercise 7
// Rewrite this if using the ternary operator '?':


 

let a = 1;
let b = 1; 
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
console.log(result)


a = 1;
b = 10; 
let output = (a + b < 4)? 'below': 'over';
console.log(output)






// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.





let login = ''; 


if (login == 'Employee') {
message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
console.log(message)

login = 'Director'; 

let message1 = (login == 'Employee')? Hello
 // (login == 'Director')? Greetings
  (login == ''): 'No login'


console.log(message1)

// the answer for number:8
login = ('Director');
let message2=(login == 'Employee')? 'Hello': (login == 'Director')?  'Greetings':(login == '')?'No login':'';
console.log((message2))

 













    

