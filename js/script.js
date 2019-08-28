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
    if(furSelection[0].checked){
        fur = 1;
    }
    else{
        fur = 0;
    }
}

function colorTotal(){
    if(colorSelection[0].checked){
        color = 1;
    }
    else{
        color = 0;
    }
}

function sizeTotal(){
    if(sizeSelection[0].checked){
        size = 0;
    }
    else{
        size = 1;
    }
}

function energyTotal(){
    if(energySelection[0].checked){
        energy = 0;
    }
    else{
        energy = 1;
    }
}

function personalityTotal(){
    if(personalitySelection[0].checked){
        personality = 0;
    }
    else{
        personality = 1;
    }
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