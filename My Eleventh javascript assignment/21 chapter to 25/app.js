// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your First Name:");
// let lastName = prompt("Enter your Last Name:");
// let fullName = `${firstName} ${lastName}`;
// console.log(`Assalam u Alaikum ${fullName}`);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let userInput = prompt("Enter something about your Favourite Phone");
// let splittedValue = userInput.split('');
// console.log(`User input Length is: ${splittedValue.length}`);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let userInput = prompt("Entre any Input in String");
// let findIndex = prompt("What you want to access the character Index");
// let splittedValue = userInput.split('');
// console.log(`The Index of ${findIndex} is ${splittedValue.indexOf(findIndex)}`);


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// let userInput = prompt("Entre any Input in String");
// for(var i in userInput){
    
// }
// console.log(userInput[i]);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// let userInput = prompt("Entre any Input in String");
// let indexChar = +prompt("What Index Character you want to access");
// console.log(`The ${indexChar} is : ${userInput.charAt(indexChar)}`);


// 6. Repeat Q1 using string concat() method.
// let firstName = prompt("Enter your First Name:");
// let lastName = prompt("Enter your Last Name:");
// let fullName = firstName.concat(lastName);
// console.log(`Assalam u Alaikum ${fullName}`);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// let value = "Hyderabad";
// let updatedValue = value.replace("Hyder", "Islam");
// console.log(updatedValue);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
// let value = "Ali and Sami are best friends. They play cricket and football together.";
// let updatedValue = value.replaceAll("and", "&");
// console.log(updatedValue);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let number = prompt("Enter Number");
// console.log(`value is ${number} and type is: ${typeof(number)}`);

// number =+ number;
// console.log(`value is ${number} and type is: ${typeof(number)}`);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// let userInput = prompt("Enter a Input");
// console.log(userInput.toUpperCase());


// 11. Write a program that takes user input. Convert and
// show the input in title case.
// let userInput = prompt("Enter a Input");
// console.log(userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase());


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let userNumber = +prompt("Enter number in Decimal Number: ");
// console.log(`user Value is ${userNumber} and type is ${typeof(userNumber)}`);

// userNumber = userNumber.toString().split('.').join('');
// console.log(`user Value is ${userNumber} and type is ${typeof(userNumber)}`);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// function isValidUsername(username) {
//     var specialSymbols = ['@', '.', ',', '!'];
//     for (var i = 0; i < specialSymbols.length; i++) {
//         if (username.includes(specialSymbols[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// function main() {
//     var username = prompt("Enter your username:");
//     while (!isValidUsername(username)) {
//         alert("Username contains special symbols. Please enter a valid username.");
//         username = prompt("Enter your username:");
//     }

//     alert("Valid username: " + username);
// }
// main();


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let array = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("What you want to Search");
// let isPresent = array.includes(userInput);
// if(isPresent){
//     console.log(`Yes ${userInput} is Present at ${array.indexOf(userInput)}`);
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should conta+in alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// function passwordValidation(){
//     let isCapital = false;
// let isSmall = false;
// let isNumber = false;
// let isSpecialChar = false;
// let character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "|", "`", "~", "\\"];

// let userpass = prompt("Enter Your Password");
// if(userpass.trim() == ""){
//     console.log("Password input is empty!");
//     return;
// }

//     if(userpass.length < 8){
//         console.log("Password Should be greater than 8 digits!!")
//         return;
//     }

//         for(let i = 0; i < userpass.length; i++){
//             if(userpass[i] >= 'A' && userpass[i] <= 'Z'){
//                 isCapital = true;
//             }
//             else if(userpass[i] >= 'a' && userpass[i] <= 'z'){
//                 isSmall = true;
//             }
//             else if(userpass[i] >= '0' && userpass[i] <= '9'){
//                 isNumber = true;
//             }
//             else if(character.includes(userpass[i])){
//                 isSpecialChar = true;
//             }
//         }
        
//         if(isCapital && isSmall && isNumber && isSpecialChar){
//             console.log("Password Valid");
//         }
//         else{
//             console.log("Invalid Password!!");
//         }
//     }
// passwordValidation();


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let stringValue = "University of Karachi";
// let splittedValue = stringValue.split('');
// for(let i of splittedValue){
//     console.log(i);
// }


// 17. Write a program to display the last character of a user
// input.

// let userInput = prompt("Enter any String");
// let splittedValue = userInput.split('');
// let lastValue = userInput.charAt(splittedValue.length-1);
// console.log(lastValue);


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

function countAccurances(str){
    let lowerValue = str.toLowerCase();
    let splittedValue = lowerValue.split(' ');
    let count = 0;
    for(let i of splittedValue){
        if(i == "the"){
            count++;
        }
    }
    return count;
}
let sentence = countAccurances("The quick brown fox jumps over the lazy dog");
console.log(sentence);