let text = document.getElementById("text");

let count = 0;

function inc(){
    count++;
    text.innerText = count;
}

function dec(){
    if(count == 0){
        count = 0;
    }
    else{
        count--;
    }
    text.innerText = count;
}
function reset(){
    count = 0;
    text.innerText = count;
}