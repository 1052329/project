
const picture = document.getElementById("pics");
const inputletter = document.querySelector("#input1");

let Subbutton = document.querySelector("#btn");
let newbutton = document.querySelector("#NewGamebtn");
let picks = document.querySelector("#picked");
let letterfound = false;
let lettergot = 0;
let letter = [];
let fname = "eleplant";
let fail = 0;
var wordroll= ["umbrella","imported", "duration", "dynamics", "discover", "thinking"];
fname=wordroll[Math.floor(Math.random()*wordroll.length)];
let winaudio = new Audio("Win.mp3");
let loseaudio = new Audio("failsound.mp3");
letter[0] = document.querySelector("#letter1");
letter[1] = document.querySelector("#letter2");
letter[2] = document.querySelector("#letter3");
letter[3] = document.querySelector("#letter4");
letter[4] = document.querySelector("#letter5");
letter[5] = document.querySelector("#letter6");
letter[6] = document.querySelector("#letter7");
letter[7] = document.querySelector("#letter8");
Subbutton.addEventListener("click", buttonclicked);
Subbutton.addEventListener("click", letterchecker);
Subbutton.addEventListener("click", failchecker);
newbutton.addEventListener("click", Newgame);

function winsound()
{
 winaudio.volume = 0.8;
 winaudio.play();
}
function failsound()
{
    loseaudio.volume=0.8;
    loseaudio.play();
}
function newword()
{
    fname=wordroll[Math.floor(Math.random()*wordroll.length)];

}

function Newgame ()
{
    
    
    
    console.log(fname);
    
    for(let n =0;n<8;n++)
    {
        letter[n].textContent = "_";
    
    }
    lettergot=0;
    fail=0;
    picture.src = "hangman0 (1).png";
    picks.textContent = " ";
    newword();
}

function failchecker() {


    if (fail == 6) {

        alert("GAME OVER");
        for (let i = 0; i < 8; i += 1) {
            letter[i].textContent = fname[i];


        }
    }
    if (lettergot == 8) {
        alert("YOU WON");
    }
}


function buttonclicked() {
    picks.textContent = inputletter.value + " " + picks.textContent;
    



}
function letterchecker() {
    letterfound = false;


    for (let i = 0; i < 8; i += 1) {

        if (fname[i] == inputletter.value) {
            letterfound = true;
            letter[i].textContent = inputletter.value;
            lettergot += 1;
            winsound();
        }
    }
    inputletter.value = "";
    if (letterfound == false) {
        fail += 1;
        failsound();
        alert("Incorrect letter" + fail);
        if (fail == 1) {
            picture.src = "hangman1 (1).png";
        }
        if (fail == 2) {
            picture.src = "hangman2 (1).png";
        }
        if (fail == 3) {
            picture.src = "hangman3 (1).png";
        }
        if (fail == 4) {
            picture.src = "hangman4 (1).png";
        }
        if (fail == 5) {
            picture.src = "hangman5 (1).png";
        }
        if (fail == 6) {
            picture.src = "hangman6 (1).png";
        }


    }
}


