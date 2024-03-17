// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let number = 5;
// document.write("Result: <br/>");
// document.write("The Actual Value is: " + number + "<br/>");
// document.write("=================================== <br/>");

// number = ++number;
// document.write("The Value of ++Number is: " + number + "<br/>");
// document.write("Now the Value is: " + number + "<br/> <br/><br/>");

// document.write("The Value of Number++ is: " + number + "<br/>");
// number++;
// document.write("Now the Value is: " + number + "<br/><br/><br/>");


// number = --number;
// document.write("The Value of --Number is: " + number + "<br/>");
// document.write("Now the Value is: " + number + "<br/> <br/><br/>");


// document.write("The Value of Number-- is: " + number + "<br/>");
// number--;
// document.write("Now the Value is: " + number + "<br/><br/><br/>");





// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

// // --a;
// let a = 10, b = 9;
// let result = --a;
//         // --a;
//         //   9
// document.write("--a <br/>");
// document.write("The Actual Value of Result is: " + result + "<br/><br/>");


// // --a - --b;
// result = --a - --b;
//         // --a - --b;
//         //  8 -   8 = 0
// document.write("--a - --b <br/>");
// document.write("The Actual Value of Result is: " + result + "<br/><br/>");


// // --a - --b + ++b;
// result = --a - --b + ++b;
//         // --a - --b + ++b;
//             //  7 -  7 +  8
//             //  0 + 8 = 8
// document.write("--a - --b + ++b <br/>");
// document.write("The Actual Value of Result is: " + result + "<br/><br/>");


// // --a - --b + ++b + b--;
// result = --a - --b + ++b + b--;
//         // --a - --b + ++b + b--;
//         //   6  -  7  +  8  + 8
//         //   -1 + 16 = 15
// document.write("--a - --b + ++b <br/>");
// document.write("The Actual Value of Result is: " + result + "<br/><br/>");


// 3. Write a program that takes input a name from user &
// greet the user.

// let userName = prompt("Enter your Name: ");
// alert("Welcome " + userName);


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// let Table = +prompt("Enter the Table Number you want to print: " , 5);
// document.write("Table of the: " + Table + "<br/>");
// document.write(Table + " x " + " 1 " + " = " + Table * 1 + "<br/>");
// document.write(Table + " x " + " 2 " + " = " + Table * 2 + "<br/>");
// document.write(Table + " x " + " 3 " + " = " + Table * 3 + "<br/>");
// document.write(Table + " x " + " 4 " + " = " + Table * 4 + "<br/>");
// document.write(Table + " x " + " 5 " + " = " + Table * 5 + "<br/>");
// document.write(Table + " x " + " 6 " + " = " + Table * 6 + "<br/>");
// document.write(Table + " x " + " 7 " + " = " + Table * 7 + "<br/>");
// document.write(Table + " x " + " 8 " + " = " + Table * 8 + "<br/>");
// document.write(Table + " x " + " 9 " + " = " + Table * 9 + "<br/>");
// document.write(Table + " x " + " 10 " + " = " + Table * 10 + "<br/>");


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
let eng = Number(prompt("Enter English Subject Marks: "));
let math = Number(prompt("Enter Mathematics Subject Marks: "));
let program = Number(prompt("Enter Programming Subject Marks: "));

// b) Total marks for each subject is 100, store it in another
// variable.
const totalNumber = 300;

// c) Take obtained marks for first subject from user and
// stored it in different variable.
let obtainedMarks = (eng + math + program);

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
obtainedMarks = (eng + math + program);

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
let percentage = Math.round(((obtainedMarks / totalNumber)*100));

document.write("Student Result <br/> ")
document.write("Your Obtained Marks is: " + obtainedMarks + "<br/>");
document.write("Your Percentage is: " + percentage +"%" + "<br/>");

