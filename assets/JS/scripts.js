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

let bottone2 = creaBottone("Reset", resettaContatore)
resetButton.appendChild(bottone2);

let bottone3 = creaBottone("+", incrementaContatore);
positiveButton.appendChild(bottone3);


//COUNTER
let contatore = 0;
let display = document.getElementById("display")

function incrementaContatore(){
    contatore++;
    updateDisplay();
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

//START IMG


