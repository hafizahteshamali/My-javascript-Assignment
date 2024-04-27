// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// let arr1 = [0, 1, 2, 3];
// let arr2 = [1, 0, 1, 2];
// let arr3 = [2, 1, 0, 1];
// console.log(`${arr1} \n${arr2} \n${arr3}`);

// 3. Write a program to print numeric counting from 1 to 10.
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// let tableInputFromUser = +prompt("Enter the Table Number: ");
// let tableStartingPoint = +prompt("Enter Table Starting Point: ");
// let tableEndingPoint = +prompt("Enter Table Ending Point: ");

// for(let i = tableStartingPoint; i <= tableEndingPoint; i++){
//     console.log(`${tableInputFromUser} x ${i} = ${tableInputFromUser * i}`);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(`Element at index ${i} is ${fruits[i]}`);
// }


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for(let i = 1; i <= 15; i++){
//     console.log(i);
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// for(let i = 10; i>= 1; i--){
//     console.log(i);
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// let even = [];
// let odd = [];
// let userInput = +prompt("Enter the Range Element to Know Even or Odd Number: ");
// for(let i = 0; i <= userInput; i++){
//     if(i %2 == 0){
//         even.push(i);
//     }
//     else{
//         odd.push(i);
//     }
// }
// console.log(`Even Number is: ${even}`);
// console.log(`Odd Number is: ${odd}`);


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// for(let i = 1; i <= 10; i++){
//     console.log(`${i*2}k`);
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// let user = prompt("Welcome to Our Bakery! What do you want to Order: ");
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// for(let i = 0; i < A.length; i++){
//     if(A.includes(user)){
//         console.log(`${user} is at Index of ${A.indexOf(user)}`);
//         break;
//     }
//     else{
//         console.log(`${user} is Not Found`);
//         break;
//     }
// }


// 8. Write a program to identify the largest number in the
// given array.
// const A = [24, 53, 78, 91, 12];
// function findLargestNumber(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// const largestNumber = findLargestNumber(A);
// console.log("The largest number in the array is:", largestNumber);


// 9. Write a program to identify the smallest number in the
// given array.
// const A = [24, 53, 78, 91, 12];
// function findSmallestNumber(arr) {
//     let smallest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         }
//     }
//     return smallest;
// }
// const largestNumber = findSmallestNumber(A);
// console.log("The Smallest number in the array is:", largestNumber);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(let i = 1; i <= 20; i++){
//     console.log(i*5);
// }
























