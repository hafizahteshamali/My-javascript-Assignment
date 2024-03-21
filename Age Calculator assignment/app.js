function ageCalculation(){
    age = +prompt("Enter your Birth  year: ");
    let currentYear = 2024;
    age = currentYear - age;
    
    if(age >= 18){
        document.write(`Your age is: ${age} You are Valid person for Voting!!`);
    }
    else{
        document.write(`Your age is: ${age} You are not Valid person for Voting!!`);
    }
}