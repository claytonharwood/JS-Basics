//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the parameter you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(namePar){
	if (namePar === "Tyler") {
		return true;
	}else{
		return false;
	}
}

isTyler(name);


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 var getName = function(){
 	var name = prompt("Enter your name");
 	return name;
 }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 var welcome = function(){
 	var name = getName();
 	alert("Welcome, " + name);
 }

welcome()

//Next problem




//What is the difference between arguments and parameters?

 


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  null, undefined, false, "", how to check if it is falsy !



//Next Problem



//Create a function called myName that returns your name

var myName = function(){
	var name = "Clayton";
	return name;
  }

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

newMyName()

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

 var outerFn = function(){
 	return function(){
 		var name = "Clayton";
 		return name;
 	}
 }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
innerFn()