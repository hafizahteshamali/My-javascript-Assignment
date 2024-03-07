// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let adding_number1 = +prompt("Enter an First Number For Addition: ");
let adding_number2 = +prompt("Enter an Second Number For Addition: ");
let add_result = adding_number1 + adding_number2;
document.write("The Sum of "+ adding_number1 + " and " + adding_number2 + " is: " + add_result, "<br/>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

let sub_number1 = +prompt("Enter an First Number For Subtraction: ");
let sub_number2 = +prompt("Enter an Second Number For Subtraction: ");
let sub_result = sub_number1 - sub_number2;
document.write("The Subtraction of "+ sub_number1 + " and " + sub_number2 + " is: " + sub_result, "<br/>");

let mul_number1 = +prompt("Enter an First Number For Multiplication: ");
let mul_number2 = +prompt("Enter an Second Number For Multiplication: ");
let mul_result = sub_number1 * sub_number2;
document.write("The Multiplication of "+ mul_number1 + " and " + mul_number2 + " is: " + mul_result, "<br/>");

let div_number1 = +prompt("Enter an First Number For Division: ");
let div_number2 = +prompt("Enter an Second Number For Division: ");
let div_result = div_number1 / div_number2;
document.write("The Division of "+ div_number1 + " and " + div_number2 + " is: " + div_result, "<br/>");


// 3. Do the following using JS Mathematic Expressions
    // a. Declare a variable.
    let num;
  
    // b. Show the value of variable in your browser like “Value
    // after variable declaration is: ??”.
    document.write(num , "<br/>");

    // c. Initialize the variable with some number.
    num = 10;

    // d. Show the value of variable in your browser like “Initial
    // value: 5”.
    document.write(num , "<br/>");

    // e. Increment the variable.
    let new_number = num + 2;

    // f. Show the value of variable in your browser like “Value
    //     after increment is: 6”.
    document.write(new_number , "<br/>");

    // g. Add 7 to the variable.
    new_number = new_number + 7;
    
    // h. Show the value of variable in your browser like “Value after addition is: 13”.
    document.write(new_number , "<br/>");

    // i. Decrement the variable.
    new_number = new_number - 1;
    document.write(new_number , "<br/>");

    // j. Show the value of variable in your browser like “Value
    // after decrement is: 12”.
    document.write("The remainder is : " ,new_number % 3, "<br/>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

let per_Ticket_price = 500;
let ticket_quantity = +prompt("Enter the Quantity of movie Tickets: ");
let total_Amount = per_Ticket_price * ticket_quantity;
document.write("<h1>Movies Ticket</h1><br/>");
document.write("Per Ticket Price is: " + per_Ticket_price, "<br/>");
document.write("Your Ticket Quantity is: " + ticket_quantity, "<br/>");
document.write("Your Total Amount is: " + total_Amount, "<br/>");


// 5. Write a script to display multiplication table of any
// number in your browser.
let tableNumber = +prompt("Enter the table Number you want to Print: ", 1);
document.write("<h1>Table According to User's Number</h1><br/>");
document.write(tableNumber + " x " + " 1 " + " = " + tableNumber * 1 + "<br/>");
document.write(tableNumber + " x " + " 2 " + " = " + tableNumber * 2 + "<br/>");
document.write(tableNumber + " x " + " 3 " + " = " + tableNumber * 3 + "<br/>");
document.write(tableNumber + " x " + " 4 " + " = " + tableNumber * 4 + "<br/>");
document.write(tableNumber + " x " + " 5 " + " = " + tableNumber * 5 + "<br/>");
document.write(tableNumber + " x " + " 6 " + " = " + tableNumber * 6 + "<br/>");
document.write(tableNumber + " x " + " 7 " + " = " + tableNumber * 7 + "<br/>");
document.write(tableNumber + " x " + " 8 " + " = " + tableNumber * 8 + "<br/>");
document.write(tableNumber + " x " + " 9 " + " = " + tableNumber * 9 + "<br/>");
document.write(tableNumber + " x " + " 10 " + " = " + tableNumber * 10 + "<br/>");


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

    // a. Store a Celsius temperature into a variable.
    let CelsiusTemprature = + prompt("Enter Celsius Temprature: ");

    // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    document.write("<h1><sup>o</sup>F = <sup>o</sup>(C x 9 / 5) + 32</h1>");
    let Fahrenheit = (CelsiusTemprature * 9 / 5) + 32;
    document.write("The Fahrenheit Value is: " + Fahrenheit + "<sup>o</sup> C" + "<br/>");

    // c. Now store a Fahrenheit temperature into a variable.
    Fahrenheit = (CelsiusTemprature * 9 / 5) + 32;

    // d. Convert it to Celsius & output “NNoF is NNoC”.
    document.write("<h1><sup>o</sup>C = <sup>o</sup>(F - 32) x 5 / 9</h1>");
    let Celsiustemp = (Fahrenheit - 32) * 5 / 9;
    document.write("The Celsius Temprature Value is: " + Celsiustemp + "<sup>o</sup> C" + "<br/>");


    // 7. Write a program to implement checkout process of a
    // shopping cart system for an e-commerce website. Store
    // the following in variables

    // a. Price of item 1
    let item1 = +prompt("Enter the Price of Item 1: ");

    // b. Price of item 2
    let item2 = +prompt("Enter the Price of Item 2: ");

    // c. Ordered quantity of item 1
    let qty_item1 = +prompt("Enter the Quantity of Item 1: ");

    // d. Ordered Quantity of item 2
    let qty_item2 = +prompt("Enter the Quantity of Item 2: ");

    let shippingCharges = 200;

    let cart_charges = ((item1 * qty_item1) + (item2 * qty_item2) + shippingCharges + "<br/>");
    document.write("Item 1 Price is: " + item1 + "<br/>");
    document.write("Item 2 Price is: " + item2 + "<br/>");
    document.write("Item 1 Quantity is: " + qty_item1 + "<br/>");
    document.write("Item 1 Quantity is: " + qty_item2 + "<br/>");
    document.write("Your Total Amount is: " + cart_charges + "<br/>");


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

let Student_Obtained_Marks = +prompt("Enter your Obtained Marks: ");
let Student_Total_Marks = +prompt("Enter your Total Marks: ");

let percentage = (Student_Obtained_Marks / Student_Total_Marks) * 100;
document.write("Student Obtained Marks is: " + Student_Obtained_Marks + "<br/>");
document.write("Student Total Marks is: " + Student_Total_Marks + "<br/>");
document.write("Student Percentage is: " + percentage + " % " + "<br/>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let usDoller = +prompt("How Many US Dollers you have: ");
let saudiRiyals = +prompt("How Many Saudi Riyals you have: ");

let US_Dollar = 104.80;
let Saudi_Riyal = 28;

let total = ((US_Dollar * usDoller) + (Saudi_Riyal * saudiRiyals));
document.write("<h1>Currency in PKR</h1>"+ "<br/>");
document.write("Current US Doller Rate is: " + US_Dollar + "<br/>");
document.write("Current Saudi Riyal Rate is: " + Saudi_Riyal + "<br/>");
document.write("After Converting Amount is: " + total + "<br/>");


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// Perform all calculations in a single expression

let FirstNumber = 5;

// a. Add 5
FirstNumber = FirstNumber + 5;
document.write("<h1>Add 5</h1>");
document.write("Variable value is: " + FirstNumber + "<br/>");

// b. Multiply by 10
FirstNumber = FirstNumber * 10;
document.write("<h1>Multiply with 10</h1>");
document.write("Variable value is: " + FirstNumber + "<br/>");

// c. Divide the result by 2
FirstNumber = FirstNumber / 2;
document.write("<h1>Division with 2</h1>");
document.write("Variable value is: " + FirstNumber + "<br/>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

let currentYear = +prompt("Enter Current Year: ");
let birthYear = +prompt("Enter your Birth Year: ");

let age = currentYear - birthYear;
document.write("<h1>User Age:</h1> <br/>");
document.write("Your Age is: " + age + "<br/>");


// 12. The Geometrizer: Calculate properties of a circle.

    // a. Store a radius into a variable.
    let radius = +prompt("Enter the Radius of an Circle: ");

    //b. Calculate the circumference based on the radius, and
    // output “The circumference is NN”.
    let Circumference = (2*(3.142)*radius);
    document.write("<h1>Circle Calculation</h1> <br/>");
    document.write("Radius of Circle is: " + radius + "<br/>");
    document.write("Circumference of Circle is: " + Circumference + "<br/>");

    let area = (3.142 * radius * radius);
    document.write("Area of Circle is: " + area+ "<br/>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?

    // a. Store your favorite snack into a variable 
    let snacks = prompt("Enter your Favourite Snacks: ");
    
    // b. Store your current age into a variable.
    let userAge = +prompt("Enter your Current Age: ");

    // c. Store a maximum age into a variable.
    let maxAge = +prompt("Enter Maximum Age you can Survive: ");

    // d. Store an estimated amount per day (as a number).
    let SnacksPerday = +prompt("Enter your Quantity of Per Day Snacks you eat: ");

    lifeTimeSnacks = ((maxAge - userAge) * SnacksPerday);

    document.write("<h1>The Life Time Supply Calculator</h1> <br/>");
    document.write("You will need " + lifeTimeSnacks +" "+ snacks + " to last you until the ripe old age of " + maxAge + "<br/>");


    
