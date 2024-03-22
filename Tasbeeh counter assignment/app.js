let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

let count = 0;

function inc(){
    count++;
    text.innerText = count;
}

function reset(){
    count = 0;
    text.innerText = count;
}


function inc2(){
    count++;
    text2.innerText = count;
}

function reset2(){
    count = 0;
    text2.innerText = count;
}


function inc3(){
    count++;
    text3.innerText = count;
}

function reset3(){
    count = 0;
    text3.innerText = count;
}
