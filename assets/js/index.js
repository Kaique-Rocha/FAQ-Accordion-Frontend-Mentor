//QUESTION 01

var question_01 = document.querySelector(".hidden-question-01");
var button01 = document.getElementById("botao01");

function btn01() {
    if (question_01.classList.contains("hide")) {
        question_01.classList.remove("hide");
        button01.classList.remove("menos");
        button01.classList.add("mais");
    } else {
        question_01.classList.add("hide");
        button01.classList.remove("mais");
        button01.classList.add("menos");
    }
}

button01.addEventListener('click', btn01);

//QUESTION 02

var question_02 = document.querySelector(".hidden-question-02");
var button02 = document.getElementById("botao02");

function btn02(){
    if (question_02.classList.contains("hide")) {
        question_02.classList.remove("hide");
        button02.classList.remove("menos");
        button02.classList.add("mais");
    } else {
        question_02.classList.add("hide");
        button02.classList.remove("mais");
        button02.classList.add("menos");
    }
}

button02.addEventListener('click', btn02);

//QUESTION 03

var question_03 = document.querySelector(".hidden-question-03");
var button03 = document.getElementById("botao03");

function btn03(){
    if (question_03.classList.contains("hide")){
        question_03.classList.remove("hide");
        button03.classList.remove("menos");
        button03.classList.add("mais");
    } else {
        question_03.classList.add("hide");
        button03.classList.remove("mais");
        button03.classList.add("menos");
    }
}

button03.addEventListener("click", btn03);

//QUESTION 03

var question_04 = document.querySelector(".hidden-question-04");
var button04 = document.getElementById("botao04");

function btn04(){
    if (question_04.classList.contains("hide")){
        question_04.classList.remove("hide");
        button04.classList.remove("menos");
        button04.classList.add("mais");
    } else {
        question_04.classList.add("hide");
        button04.classList.remove("mais");
        button04.classList.add("menos");
    }
}

button04.addEventListener("click", btn04);