// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let userCity =prompt("Enter your City: ").toLowerCase();

// if(userCity === "karachi"){
//     alert("Welcome to city of Lights!!");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// let userGender = prompt("Enter your Gender: ").toLowerCase();
// if(userGender === "male"){
//     alert("Good Morning Sir");
// }
// else if(userGender === "female"){
//     alert("Good Morning Ma'am ");
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// let trafficLigiht = prompt("Enter traffic light are you observed: ").toLowerCase();
// if(trafficLigiht === "red"){
//     alert("Must Stop");
// }
// else if(trafficLigiht ==="yellow"){
//     alert("Ready to move");
// }
// else if(trafficLigiht ==="green"){
//     alert("Move now");
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
// let remainingFuel = Number(prompt("Enter the Fuel: "));
// if(remainingFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// let a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// }


// let b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is False");
// }


// let c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }

// if(c === 13){
//     alert("condition 2 is true");
// }

// if(++c < 14){
//     alert("condition 3 is true");
// }

// if(c === 14){
//     alert("condition 4 is true");
// }


// let materialCost = 2000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if(totalCost === materialCost + laborCost){
//     alert("The cost equals");
// }
// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let eng = +prompt("Enter English Subject Marks: ");
// let math = +prompt("Enter Mathematics Subject Marks: ");
// let program = +prompt("Enter Programming Subject Marks: ");
// let obtainedMarks = (eng + math + program);
// document.write("Obtained Marks is: " + obtainedMarks + "</br>")
// let percentage = Math.round(((obtainedMarks / 300) * 100));
// document.write("Percentage is: " + percentage + "%" + "</br>")


// if(percentage >= 90){
//      document.write("You got " + percentage +"%" + " A1 Plus Grade Excellent!!");
// }
// else if(percentage >= 80){
//     document.write("You got " + percentage +"%" + " A1 Grade Excellent!!");
// }
// else if(percentage >= 70){
//     document.write("You got " + percentage +"%" + " A Grade Good");
// }
// else if(percentage >= 60){
//     document.write("You got " + percentage+"%" + " B Grade You need to improve");
// }
// else if(percentage >= 50){
//     document.write("You got " + percentage + "%" + " C Grade You need to improve");
// }
// else if(percentage >= 40){
//     document.write("You got " + percentage +"%" + " D Grade You need to improve");
// }
// else if(percentage >= 33){
//     document.write("You got " + percentage +"%" + " E Grade You need to improve");
// }
// else{
//     document.write("You got " + percentage +"%" + " You are Fail!!");
// }



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let userGuess = +prompt("Guess the Right to Win from 1 to 10: ");
// db_number = 7;

// if(userGuess === db_number){
//     alert("Bingo!!!!");
// }
// else{
//     alert("Try Again!!");
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// let userNumber = +prompt("Enter the Number For Checking that is completely Divide by (3): ");

// if(userNumber %3 === 0){
//     alert(userNumber + " is Completely Divisibe by 3");
// }
// else{
//     alert(userNumber + " is not Completely Divisibe by 3");
// }



// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// let userNumber = +prompt("Enter the Number to know its Even or Odd: ");
// if(userNumber %2 === 0){
//     alert("Number is Even!!");
// }
// else{
//     alert("Number is Odd!!");
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = +prompt("Enter Temprature: ");
// if(temperature > 40){
//     alert("“It is too hot outside.”");
// }
// else if(temperature > 30){
//     alert("“The Weather today is Normal.”");
// }
// else if(temperature > 20){
//     alert("“Today’s Weather is cool.”");
// }
// else if(temperature > 10){
//     alert("“OMG! Today’s weather is so Cool.”");
// }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let num1 = +prompt("Enter First Number: ");
// let num2 = +prompt("Enter Second Number: ");
// let opt=prompt("Choose Operation: (+), (-), (*), (/), (%): ");
// let result;

// if(opt == '+'){
//     result = num1 + num2;
//     alert("The Addition of " + num1 + " and " + num2 + " is: " + result);
// }
// else if(opt == '-'){
//     result = num1 - num2;
//     alert("The Subtraction of " + num1 + " and " + num2 + " is: " + result);
// }
// else if(opt == '*'){
//     result = num1 * num2;
//     alert("The Multiplication of " + num1 + " and " + num2 + " is: " + result);
// }
// else if(opt == '/'){
//     result = num1 / num2;
//     alert("The Division of " + num1 + " and " + num2 + " is: " + result);
// }
// else if(opt == '%'){
//     result = num1 % num2;
//     alert("The Modulas of " + num1 + " and " + num2 + " is: " + result);
// }
// else{
//     alert("Invalid Operator!!");
// }


