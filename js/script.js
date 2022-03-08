let total;
let fur;
let color;
let size;
let energy;
let personality; 
const furSelection = document.getElementsByName("fur");
const colorSelection = document.getElementsByName("color");
const sizeSelection = document.getElementsByName("size");
const energySelection = document.getElementsByName("energy");
const personalitySelection = document.getElementsByName("personality");

function furTotal(){
    fur = furSelection[0].checked ? 1 : 0;
}

function colorTotal(){
    color = colorSelection[0].checked ? 1 : 0;
}

function sizeTotal(){
    size = sizeSelection[0].checked ? 0 : 1;
}

function energyTotal(){
    energy = energySelection[0].checked ? 0 : 1;
}

function personalityTotal(){
    personality = personalitySelection[0].checked ? 0 : 1;
}

function quizTotal(){
    total = fur + color + size + energy + personality
    if (total >= 3) {
        document.getElementById("Labrador").style.display = "block";
        document.getElementById("retrieverQuiz").style.display = "none";
        document.getElementById("foot").innerHTML = "Thank You For Taking This Quiz!";
    }  
    else{
        document.getElementById("Golden").style.display = "block";
        document.getElementById("retrieverQuiz").style.display = "none";
        document.getElementById("foot").innerHTML = "Thank You For Taking This Quiz!";
    }
}
document.getElementById("submit").addEventListener('click', furTotal, true);
document.getElementById("submit").addEventListener('click', colorTotal, true);
document.getElementById("submit").addEventListener('click', sizeTotal, true);
document.getElementById("submit").addEventListener('click', energyTotal, true);
document.getElementById("submit").addEventListener('click', personalityTotal, true);
document.getElementById("submit").addEventListener('click', quizTotal, true);