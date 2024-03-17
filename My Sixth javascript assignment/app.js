// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let userInput = (prompt("Enter your Input: "));
// if((userInput >= "1") && (userInput <= "9")){
//     alert("This is a Number!!");
// }
// else if((userInput >= "A") && (userInput <= "Z")){
//     alert("This is a String Starting at Uppercase letter!!");
// }
// else if((userInput >= "a") && (userInput <= "z")){
//     alert("This is a String Starting at Lowercase letter!!");
// }
// else if(userInput == ""){
//     alert("kuch input krden!!");
// }
// else{
//     alert("This is an Special Character!!");
// }



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// let num1 = +prompt("Enter First Number: ");
// let num2 = +prompt("Enter Second Number: ");
// if(num1 === num2){
//     alert(num1 + " and " + num2 + " are equal!!");
// }
// else if(num1 > num2){
//     alert(num1 + " is largest Number!! ");
// }
// else{
//     alert(num2 + " is largest Number!! ");
// }



// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// let userNumber = +prompt("Enter any Number: ");
// if(userNumber > 0){
//     alert("The Number is Positive!!");
// }
// else if(userNumber < 0){
//     alert("The Number is Negative!!");
// }
// else{
//     alert("The Number is Zero!!");
// }



// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// let userInput = prompt("Enter a Character to check that is vovel or Not: ").toLowerCase();
// if((userInput =="a") || (userInput=="e") || (userInput=="i") || (userInput=="o") || (userInput=="u")){
//     alert("True!! Yes It's an Vovel");
// }
// else{
//     alert("False!! No It's not an Vovel");
// }



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let userEmail = prompt("Enter your Email Address: ");
// let userPass = prompt("Enter your Password: ");

// let db_Email = "aliahtesham946@gmail.com";
// let db_pass = 123456;

// if(userEmail == db_Email && userPass == db_pass){
//     alert("Correct!! you are Login!");
// }
// else{
//     alert("Invalid Email and Password!!");
// }



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// let hours = +prompt("Enter any Number: ");
// if(hours < 18){
//     alert("Good Day!!");
// }
// else{
//     alert("Food Evening!!");
// }



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let userTime = +prompt("Enter Time (0000) in this format: ");

if((userTime >= 0000) && (userTime < 1200)){
    alert("Good Morning!");
}
else if((userTime >= 1200) && (userTime < 1700)){
    alert("Good Afternoon!");
}
else if((userTime >= 1700) && (userTime < 2100)){
    alert("Good Evening!");
}
else if((userTime >= 1800) && (userTime <= 2359)){
    alert("Good Night!");
}