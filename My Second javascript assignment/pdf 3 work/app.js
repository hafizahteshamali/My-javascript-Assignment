// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
let age;
age = 22;
alert("My Age is: "+ age);

// 2) Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
let n = 10;
alert("You have visited this site " + n + " time");

// 3) Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
let birthYear;
birthYear = 23;
document.write("My Birth Year is: " + birthYear, "<br/>");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
let customeName = prompt("Enter your Name: ");
let productName = prompt("Enter selective Product Name: ");
let productQuantity = +prompt("How Much you Product You want: ");

document.write("Customer Name is: " + customeName, "<br/>");
document.write("Product Name is: " + productName, "<br/>");
document.write("Productu Quantity is: " + productQuantity); 