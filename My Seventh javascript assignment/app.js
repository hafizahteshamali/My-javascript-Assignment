// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let student_names = [];

// 3. Declare and initialize a strings array.
// student_names = ["Ahtesham", "Ali", "Abbas", "Hussain"];


// 4. Declare and initialize a numbers array.
// let numbers = [2, 10, 15, 20, 25, 30];

// 5. Declare and initialize a boolean array.
// let booleanArray = [true, false, true, true];


// 6. Declare and initialize a mixed array.
// let mixedArray = ["Ahtesham", 28, true, null];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", 
// "M.PHIL", "PHD"];
// console.log(qualification);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let students =["Ahtesham", "Ali", "Sadiq"];
// let studentScore = [450, 420, 480];
// let totalMarks = 500;
// function calculatePercentage(score){
//     return (score / totalMarks) * 100;
// }
// for(let i = 0; i < students.length; i++){
//     let name = students[i];
//     let score = studentScore[i];
//     let Percentage = calculatePercentage(score);
//     console.log(`Score of ${name} is: ${score}. Percentage is: ${Percentage}%`);
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// let colors = ["red", "yellow", "green"];
// console.log(colors);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// let userInputSize = +prompt("How Many Colors Do you want to add in Beginning: ");
// let colors = ["red", "yellow", "green"];
// for(let i = 1; i <= userInputSize; i++){
//     let usercolor = prompt("Enter Color Name: ");
//     colors.push(usercolor);
//     console.log(colors);
// }

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// let userInputSize = +prompt("How Many Colors Do you want to add in Beginning: ");
// let colors = ["red", "yellow", "green"];
// let usercolor;
// for(let i = 1; i <= userInputSize; i++){
//     usercolor = prompt("Enter Color Name: ");
//     colors.unshift(usercolor);
//     console.log(`Add into Beginning \n ${colors}`);
// }

// d. Delete the first color in the array. Display the updated
// array in your browser.

    // colors.shift(usercolor);
    // console.log(`Remove from Beginning \n ${colors}`);

// e. Delete the last color in the array. Display the updated
// array in your browser.

    // colors.pop(usercolor);
    // console.log(`Remove from Ending \n ${colors}`);


// f. Ask the user at which index he/she wants to add a color
//     & color name. Then add the color to desired
//     position/index. . Display the updated array in your
//     browser.

// let colors = ["red", "blue", "balck"];
// let userIndex = prompt("Enter Index Number you want to Add:");
// let usercolor = prompt("Enter Color Name");
// colors.splice(userIndex, 0, usercolor);
// console.log(`${colors}`);


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colors = ["red", "blue", "balck"];
// let userIndex = prompt("red, blue, black \nEnter Index Number you want to Delete: ");
// console.log(`Before Deleting\n ${colors}`);
// colors.splice(0, userIndex);
// console.log(`After Deleting\n ${colors}`);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let Score_of_Students = [320, 230, 480, 120];
// // Sort the array in ascending order using the sort method

// Score_of_Students.sort(function(a, b) {
//     return a - b;
// });

// // Print the sorted scores
// console.log("Sorted student scores:", Score_of_Students);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cityList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// let SelectedCity = cityList.slice(2, 5);
// console.log(`Orignal City List: ${cityList}`);
// console.log(`Selected Cities: ${SelectedCity}`);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ["This", "is", "my", "cat"];
// console.log(`Array: ${arr}`);
// console.log(`String: ${arr.join(" ")}`);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let AddSize = prompt("Enter Size you want Add: ");
// let number = [];
// for(let i = 0; i < AddSize; i++){
//     let input = prompt("Enter Numbers: ");
//     number.push(input);
// }
// console.log(number);

// let delSize = prompt("Enter Size you want Add: ");
// for(let i = 0; i < delSize; i++){
//     number.shift();
// }
// console.log(number);


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// let AddSize = prompt("Enter Size you want Add: ");
// let number = [];
// for(let i = 0; i < AddSize; i++){
//     let input = prompt("Enter Numbers: ");
//     number.unshift(input);
// }
// console.log(number);

// let delSize = prompt("Enter Size you want Delete: ");
// for(let i = 0; i < delSize; i++){
//     number.pop();
// }
// console.log(number);


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// Array of phone manufacturers
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Write HTML code to display the dropdown/select menu
document.write('<select>');
for (let i = 0; i < manufacturers.length; i++) {
    document.write('<option default>Choose</option><option value=" ' + manufacturers[i] + ' "> ' + manufacturers[i] + '</option>');
}
document.write('</select>');




















