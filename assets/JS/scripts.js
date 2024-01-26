//FUNZIONE PER CREARE BOTTONE
function creaBottone(testo, gestoreEvento) {
    let bottone = document.createElement("button");
    bottone.innerHTML = testo;

    if(gestoreEvento){
        bottone.addEventListener("click", gestoreEvento);
    }
    return bottone;
}

//H1
document.getElementById("title").innerHTML="Questo è un contatore di pecore"

//BOTTONI
const positiveButton = document.getElementById("positive_button");
const negativeButton = document.getElementById("negative_button");
const resetButton = document.getElementById("reset_button");
const startButton = document.getElementById("start_button");


let bottone1 = creaBottone("-", decrementaContatore);
negativeButton.appendChild(bottone1);

let bottone2 = creaBottone("Reset", resettaContatore);
resetButton.appendChild(bottone2);

let bottone3 = creaBottone("+", incrementaContatore);
positiveButton.appendChild(bottone3);

let bottone4 = creaBottone("start");
startButton.appendChild(bottone4);

//COUNTER
let contatore = 0;
let display = document.getElementById("display")
let suono = new Audio('/assets/Audio/sheep2.mp3')

function incrementaContatore(){
    contatore++;
    updateDisplay();
    if(contatore == 10) {
        alert("complimenti!");
    }

    if(contatore == 20){
        alert("incredibile");
    }

    suono.play();
}

function decrementaContatore(){
    if (contatore > 0){
    contatore--;
    updateDisplay();
    }
}

function resettaContatore(){
    contatore = 0;
    updateDisplay();
}

function updateDisplay(){
    display.innerHTML = contatore;
}

//GENERA COLORE
function generaColore() {
    let coloreR = Math.floor(Math.random() *256);
    let coloreG = Math.floor(Math.random() *256);
    let coloreB = Math.floor(Math.random() *256);

    return "rgb"( + coloreR + coloreG + coloreB);
}




