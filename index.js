function random_number1(){
    let rn1 = Math.floor(Math.random() * 6) + 1;
    console.log("Num 1 je nastavljena");
    return rn1;
}

let number1 = random_number1();

function random_number2(){
    let rn2 = Math.floor(Math.random() * 6) + 1;
    console.log("Num 2 je nastavljena");
    return rn2;
}

let number2 = random_number2();

const image_start = "images/dice";

const image_ending = ".png";

let image_name1 = image_start + number1 + image_ending;

let image_name2 = image_start + number2 + image_ending; 


function image1_set(){
    let image1 = document.getElementById("img1");
    image1.setAttribute("src",image_name1);
    console.log("image 1 je nastavljena");
}

function image2_set(){
    let image2 = document.getElementById("img2");
    image2.setAttribute("src",image_name2);
    console.log("image 2 je nastavljena");
}

function set_heading(){

    let rez1 = number1;
    let rez2 = number2;

    if(rez1 > rez2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        console.log("Rez1 je večji");
    } else if (rez1 < rez2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        console.log("Rez2 je večji");
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
        console.log("Rez 1 in 2 sta enako velika");
    }
}

function main(){
    image1_set();
    image2_set();
    set_heading();
    console.log("main f se je izvedla");
}

main();








