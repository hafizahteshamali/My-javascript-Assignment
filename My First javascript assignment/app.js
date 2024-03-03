let choice = prompt(
  "Press ( + ) For Addition: \n Press ( - ) For Subtraction: \n Press ( * ) For Multiplication: \n Press ( / ) For Division: \n Press ( % ) For Modulus: \n \n Enter your Choice: ");

    let num1;
    let num2;
    let result;

switch(choice){
    case'+':
    num1 = +prompt("Enter an  First Number For Addition: ");
    num2 = +prompt("Enter an Second Number For Addition: ");
    result = num1 + num2;
    document.write("The Addition Value of ", num1, " and ", num2, " is: ", result, "<br/>");
    break;

    case'-':
    num1 = +prompt("Enter an  First Number For Subtraction: ");
    num2 = +prompt("Enter an Second Number For Subtraction: ");
    result = num1 - num2;
    document.write("The Subtraction Value of ", num1, " and ", num2, " is: ", result, "<br/>");
    break;

    case'*':
    num1 = +prompt("Enter an  First Number For Multiplication: ");
    num2 = +prompt("Enter an Second Number For Multiplication: ");
    result = num1 * num2;
    document.write("The Multiplication Value of ", num1, " and ", num2, " is: ", result, "<br/>");
    break;

    case'/':
    num1 = +prompt("Enter an  First Number For Division: ");
    num2 = +prompt("Enter an Second Number For Division: ");
    result = num1 / num2;
    document.write("The Division Value of ", num1, " and ", num2, " is: ", result, "<br/>");
    break;

    case'%':
    num1 = +prompt("Enter an  First Number For Modulus: ");
    num2 = +prompt("Enter an Second Number For Modulus: ");
    result = num1 % num2;
    document.write("The Modulus Value of ", num1, " and ", num2, " is: ", result, "<br/>");
    break;

    default:
        document.write("Invalid Operator!!");
    break;
}
