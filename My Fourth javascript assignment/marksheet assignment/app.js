let eng = +prompt("Enter English Subject Marks: ");
let math = +prompt("Enter Mathematics Subject Marks: ");
let prog = +prompt("Enter Programming Subject Marks: ");
let obtained_Marks = (eng + math + prog);
let percentage = Math.round((obtained_Marks / 300) * 100);

if(percentage >= 90){
    swal("You Got "+ percentage + "%" + " A1 Plus Grade Excellent!!");
}
else if(percentage >= 80){
    swal("You Got "+ percentage + "%" + "A1 Grade Very Good!!");
}
else if(percentage >= 70){
    swal("You Got "+ percentage + "%" + "A Grade Very Good!!");
}
else if(percentage >= 60){
    swal("You Got "+ percentage + "%" + "B Grade!!");
}
else if(percentage >= 50){
    swal("You Got "+ percentage + "%" + "C Grade!!");
}
else if(percentage >= 40){
    swal("You Got "+ percentage + "%" + "D Grade!!");
}
else if(percentage >= 33){
    swal("You Got "+ percentage + "%" + "E Grade!!");
}
else{
    swal("You Got "+ percentage + "%" + "Fail!!");
}
