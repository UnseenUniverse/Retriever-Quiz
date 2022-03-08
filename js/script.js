var total;
var fur;
var color;
var size;
var energy;
var personality; 
var furSelection = document.getElementsByName("fur");
var colorSelection = document.getElementsByName("color");
var sizeSelection = document.getElementsByName("size");
var energySelection = document.getElementsByName("energy");
var personalitySelection = document.getElementsByName("personality");

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