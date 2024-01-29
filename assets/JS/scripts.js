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


//AUDIO
let suono = new Audio('/assets/Audio/sheep2.mp3')
let audioSfondo = new Audio ('/assets/Audio/bells.mp3')
audioSfondo.addEventListener("ended", function() {
    audioSfondo.currentTime = 0;
    audioSfondo.play();
})

//COUNTER
let contatore = 0;
let display = document.getElementById("display")

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

//BOTTONE START
let bottone4 = creaBottone("Avvia");
startButton.appendChild(bottone4);
bottone4.addEventListener("click", function(){
    if(audioSfondo.paused) {
        document.getElementById("big_video").src = 'assets/IMG/Sheeps.gif';
        audioSfondo.play();
        bottone4.textContent = "Interrompi";
    } else {
        audioSfondo.pause();
        audioSfondo.currentTime = 0;
        bottone4.textContent = "Avvia"
    }
});
