// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let char = prompt("Enter a Character:");
// let convertASCII = char.charCodeAt(0);
// if(convertASCII >= 65 && convertASCII <= 90){
//     console.log("Upper Case Character!");
// }
// else if(convertASCII >= 97 && convertASCII <= 122){
//     console.log("Lowecase Character!");
// }
// else{
//     console.log("Invalid Character!");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let num1 = +prompt("Enter First Number: ");
// let num2 = +prompt("Enter Second Number: ");
// if(num1 > num2){
//     console.log(`${num1} is Larger than ${num2}`);
// }
// else if(num1 < num2){
//     console.log(`${num2} is Larger than ${num1}`);
// }
// else if(num1 === num2){
//     console.log(`${num1} is Equal with ${num2}`);
// }
// else{
//     console.log("Invalid Input");
// }


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// let number = +prompt("Enter a Number: ");
// if(number > 0){
//     console.log(`${number} is Positive`);
// }
// else if(number < 0){
//     console.log(`${number} is Negative`);
// }
// else{
//     console.log(`${number} is Equal with Zero`);
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// let char = prompt("Enter a Single character for Knowing the Vowel or Not").toLowerCase();
// if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//     console.log(`${char} is Vowel!`);
// }
// else{
//     console.log(`${char} is not an Vowel!`);
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

// let db_pass = "admin123";
// let user_Pass = prompt("Enter your Password");
// if(db_pass === user_Pass){
//     console.log("Correct!");
// }
// else{
//     console.log("InCorrect!");
// }


// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;
// if(hour > 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good Evening";
// }
// console.log(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// function determineCase(time) {
//     if (time >= 0 && time < 1200) {
//         return "Good morning!";
//     } else if (time >= 1200 && time < 1700) {
//         return "Good afternoon!";
//     } else if (time >= 1700 && time < 2000) {
//         return "Good evening!";
//     } else if (time >= 2000 && time < 2400) {
//         return "Good night!";
//     } else {
//         return "Invalid time input.";
//     }
// }
// const inputTime = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
// if (!isNaN(inputTime)) {
//     const result = determineCase(inputTime);
//     alert(result);
// } else {
//     alert("Invalid input. Please enter a valid time.");
// }


